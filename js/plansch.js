/* plansch.js – frågeplanscherna på väggen i varje professions rum.

   Rådgivaragenterna skattar hur vanligt förekommande deras antaganden om
   klinisk vardag är, på en kvotskala 0–100. Här skattar verklig personal samma
   fråga. Skillnaden mellan gissningen och verkligheten är hela poängen, så
   ingenting här är rätt eller fel – det är datainsamling, inte en övning.   */

(function (global) {
  'use strict';
  var LESS = global.LESS, ui = LESS.ui, $ = LESS.$;

  var STEG_GROVT = 5, STEG_FINT = 1;

  /* ---------------- delad insamling ----------------
     Publicerad som artefakt får sidan en delad databas, så att kollegor på
     andra datorer kan skatta samma frågor och svaren når utvecklaren. Som
     lokal fil eller på GitHub Pages finns ingen sådan – då sparas svaren i
     webbläsaren och skickas in med kopiera-och-klistra i stället.        */

  var db = null, dbKlar = false, andraCache = {};

  function deltagarId() {
    try {
      var id = global.localStorage.getItem('less-deltagare');
      if (!id) {
        id = 'd' + Math.random().toString(36).slice(2, 10);
        global.localStorage.setItem('less-deltagare', id);
      }
      return id;
    } catch (e) { return 'd-anonym'; }
  }

  /* ---------------- signatur ----------------
     Den som skattar får skriva sitt namn. Poängen är spårbarhet framåt: när
     svaren senare går igenom och innehållet ändras ska det gå att se vem som
     stod bakom siffran och fråga vidare. Frivilligt – tomt namn är giltigt. */

  function mittNamn() {
    var n = LESS.state.data.namn;
    if (n) return n;
    try { return global.localStorage.getItem('less-namn') || ''; } catch (e) { return ''; }
  }

  function sparaNamn(n) {
    n = (n || '').trim().slice(0, 60);
    LESS.state.data.namn = n;
    LESS.state.spara();
    try { global.localStorage.setItem('less-namn', n); } catch (e) { /* tyst */ }
    return n;
  }

  function kopplaDb() {
    if (dbKlar) return Promise.resolve(db);
    if (!global.claude || typeof global.claude.use !== 'function') {
      dbKlar = true;
      return Promise.resolve(null);
    }
    return global.claude.use('db').then(function (d) {
      db = d; dbKlar = true; return d;
    }, function () { dbKlar = true; return null; });
  }
  kopplaDb();

  function delaSkattning(roll, f, varde) {
    if (!db) return;
    try {
      db.doc('skattningar/' + f.id + '__' + deltagarId()).set({
        fragaId: f.id,
        roll: roll,
        varde: varde,
        radgivare: f.skattning == null ? null : f.skattning,
        deltagare: deltagarId(),
        signatur: mittNamn() || null,
        tid: new Date().toISOString()
      }).then(null, function () { /* lokalt sparat räcker */ });
    } catch (e) { /* tyst */ }
  }

  /* Andras svar per fråga: antal och median. */
  function hamtaAndra(roll) {
    if (!db) return Promise.resolve({});
    return db.collection('skattningar').where('roll', '==', roll).get().then(function (snap) {
      var per = {};
      snap.docs.forEach(function (d) {
        var v = d.data() || {};
        if (typeof v.varde !== 'number' || !v.fragaId) return;
        (per[v.fragaId] = per[v.fragaId] || []).push(v.varde);
      });
      var ut = {};
      Object.keys(per).forEach(function (id) {
        var a = per[id].slice().sort(function (x, y) { return x - y; });
        var m = a.length % 2 ? a[(a.length - 1) / 2] : Math.round((a[a.length / 2 - 1] + a[a.length / 2]) / 2);
        ut[id] = { n: a.length, median: m };
      });
      return ut;
    }, function () { return {}; });
  }

  function rollNamn(roll) {
    var r = LESS.roller[roll];
    return r ? r.namn : roll.toUpperCase();
  }

  /* ---------------- små byggstenar ---------------- */

  function stapel(varde, klass) {
    if (varde == null) return '<span class="ingen">–</span>';
    return '<span class="skb ' + (klass || '') + '"><i style="width:' + varde + '%"></i></span>' +
           '<span class="skv">' + varde + '</span>';
  }

  function ankartext(varde) {
    if (varde == null) return '';
    var a = LESS.fragorAnkare, i, bast = a[0];
    for (i = 0; i < a.length; i++) if (Math.abs(a[i][0] - varde) < Math.abs(bast[0] - varde)) bast = a[i];
    return bast[1];
  }

  /* ---------------- listvyn ---------------- */

  function visa(roll, klar) {
    var fragor = (LESS.fragor && LESS.fragor[roll]) || [];
    var andra = andraCache[roll] || {};
    var sel = 0;
    var handler = null;

    /* Signaturen ligger överst: den som skattar ska se direkt vem svaren
       kommer att stå på, och kunna ändra det innan hen sätter en siffra. */
    var poster = [{ typ: 'signatur' }]
      .concat(fragor.map(function (f) { return { typ: 'fraga', f: f }; }))
      .concat([{ typ: 'export' }, { typ: 'stang' }]);

    function rita() {
      var h = '';
      h += '<p class="planschintro">Rådgivaren har gissat hur vanligt det här är i verkligheten. ' +
           'Sätt din egen siffra bredvid. Inget är rätt eller fel – det är din vardag som är facit.</p>';
      h += '<p class="planschintro lagring">' + (db
        ? '● Svaren delas automatiskt. Kollegor på andra datorer kan skatta samma frågor.'
        : '○ Svaren sparas bara i den här webbläsaren. Välj “Visa mina svar att skicka in” när du är klar.') + '</p>';

      poster.forEach(function (post, i) {
        var vald = i === sel ? ' sel' : '';
        if (post.typ === 'signatur') {
          var n = mittNamn();
          h += '<div class="fraga knapp signatur' + vald + '" id="frg' + i + '">' +
               '<span class="cur">▶</span>' +
               '<span class="ft">Signatur: ' + (n ? '<b>' + LESS.esc(n) + '</b>' : '<i>ej ifylld</i>') + '</span>' +
               '<span class="rad"><span class="ank">' +
               (n ? 'Dina skattningar skickas med ditt namn.'
                  : 'Frivilligt. Med namn går det att fråga dig vidare om siffran.') +
               '</span></span></div>';
          return;
        }
        if (post.typ === 'export') {
          h += '<div class="fraga knapp' + vald + '" id="frg' + i + '">' +
               '<span class="cur">▶</span><span class="ft">Visa mina svar att skicka in</span></div>';
          return;
        }
        if (post.typ === 'stang') {
          h += '<div class="fraga knapp' + vald + '" id="frg' + i + '">' +
               '<span class="cur">▶</span><span class="ft">Tillbaka</span></div>';
          return;
        }
        var f = post.f, min = LESS.state.minSkattning(f.id);
        h += '<div class="fraga' + vald + '" id="frg' + i + '">' +
             '<span class="cur">▶</span>' +
             '<span class="ft">' + LESS.esc(f.fraga) + '</span>' +
             '<span class="rad"><b>rådgivaren</b>' + stapel(f.skattning, 'radg') +
               (f.skattning != null ? '<span class="ank">' + LESS.esc(ankartext(f.skattning)) + '</span>' : '') +
             '</span>' +
             '<span class="rad"><b>du</b>' + stapel(min ? min.varde : null, 'du') +
               (min ? '<span class="ank">' + LESS.esc(ankartext(min.varde)) + '</span>' : '') +
             '</span>' +
             (andra[f.id]
               ? '<span class="rad"><b>andra (' + andra[f.id].n + ')</b>' +
                 stapel(andra[f.id].median, 'andra') + '<span class="ank">median</span></span>'
               : '') +
             '</div>';
      });

      if (!fragor.length) h += '<p>Inga frågor uppsatta för den här rollen ännu.</p>';

      ui.visaPanel('FRÅGOR · ' + rollNamn(roll), h, '↑↓ = välj  ·  A = skatta  ·  B = tillbaka');
      ui.panelSynlig($('frg' + sel));
    }

    function stang() {
      LESS.input.pop(handler);
      ui.doljPanel();
      if (klar) klar();
    }

    function oppna() {
      rita();
      /* Hämta andras svar i bakgrunden och rita om när de kommit. */
      kopplaDb().then(function () {
        if (!db) return;
        hamtaAndra(roll).then(function (res) {
          andraCache[roll] = res; andra = res;
          if (LESS.input.top() === handler) rita();
        });
      });
      handler = LESS.input.push(function (k) {
        var n = poster.length;
        if (k === 'down') { sel = (sel + 1) % n; LESS.sfx('move'); rita(); }
        else if (k === 'up') { sel = (sel - 1 + n) % n; LESS.sfx('move'); rita(); }
        else if (k === 'a') {
          LESS.sfx('ok');
          var post = poster[sel];
          if (post.typ === 'fraga') { LESS.input.pop(handler); skatta(roll, post.f, oppna); }
          else if (post.typ === 'signatur') { LESS.input.pop(handler); signera(roll, oppna); }
          else if (post.typ === 'export') { LESS.input.pop(handler); exportera(roll, oppna); }
          else stang();
        }
        else if (k === 'b') { LESS.sfx('back'); stang(); }
      });
    }
    oppna();
  }

  /* ---------------- signaturvyn ----------------
     Ett riktigt textfält, inte en teckenväljare: den som står i sitt eget
     arbetsrum har ett tangentbord framför sig. Medan fältet har fokus tar
     ui.js bort spelets tangentbindningar, annars äter styrningen bokstäverna. */

  function signera(roll, klar) {
    var handler = null, falt = null;

    var h = '';
    h += '<p class="planschintro">Skriv ditt namn om du vill att svaren ska gå att följa upp. ' +
         'Det följer med varje skattning du gör härifrån och framåt.</p>';
    h += '<p class="planschintro">Vill du vara anonym lämnar du fältet tomt. ' +
         'Skattningen räknas lika mycket ändå.</p>';
    h += '<div class="signfalt"><input id="signinput" type="text" maxlength="60" ' +
         'autocomplete="off" spellcheck="false" placeholder="Förnamn Efternamn"></div>';
    h += '<p class="planschbak">Enter sparar. Esc avbryter.</p>';
    ui.visaPanel('SIGNATUR · ' + rollNamn(roll), h, 'Enter = spara  ·  Esc = avbryt');

    falt = $('signinput');
    falt.value = mittNamn();
    falt.focus();
    falt.select();

    function stang(sparat) {
      falt.removeEventListener('keydown', tangent);
      falt.blur();
      LESS.input.pop(handler);
      LESS.sfx(sparat ? 'done' : 'back');
      if (klar) klar();
    }

    /* stopPropagation är inte kosmetik: utan den bubblar samma Enter vidare
       till spelets tangentlyssnare, som tolkar den som A – och öppnar rutan
       igen i samma ögonblick som den stängts. */
    function tangent(e) {
      if (e.key !== 'Enter' && e.key !== 'Escape') return;
      e.preventDefault();
      e.stopPropagation();
      if (e.key === 'Enter') { sparaNamn(falt.value); stang(true); }
      else stang(false);
    }
    falt.addEventListener('keydown', tangent);

    /* Reserv för pekskärm och för den som ändå trycker A eller B. */
    handler = LESS.input.push(function (k) {
      if (k === 'a') { sparaNamn(falt.value); stang(true); }
      else if (k === 'b' || k === 'meny') stang(false);
    });
  }

  /* ---------------- skattningsvyn ---------------- */

  function skatta(roll, f, klar) {
    var min = LESS.state.minSkattning(f.id);
    var varde = min ? min.varde : (f.skattning != null ? f.skattning : 50);
    var handler = null;

    function rita() {
      var h = '';
      h += '<p class="planschfraga">' + LESS.esc(f.fraga) + '</p>';
      if (f.bakgrund) h += '<p class="planschbak">' + LESS.esc(f.bakgrund) + '</p>';

      h += '<div class="skalabox">';
      h += '<div class="skalatal">' + varde + '<span> av 100</span></div>';
      h += '<div class="skala"><i style="width:' + varde + '%"></i>';
      LESS.fragorAnkare.forEach(function (a) {
        h += '<u style="left:' + a[0] + '%"></u>';
      });
      if (f.skattning != null) h += '<b class="radgmark" style="left:' + f.skattning + '%"></b>';
      h += '</div>';
      h += '<div class="skalaank">';
      LESS.fragorAnkare.forEach(function (a) {
        h += '<span>' + a[0] + '<br>' + LESS.esc(a[1]) + '</span>';
      });
      h += '</div>';
      h += '<p class="planschank">Din bedömning: <b>' + LESS.esc(ankartext(varde)) + '</b></p>';
      h += '</div>';

      if (f.skattning != null) {
        h += '<p class="planschradg"><b>Rådgivarens gissning: ' + f.skattning + '</b>' +
             (f.sakerhet ? ' (säkerhet: ' + LESS.esc(f.sakerhet) + ')' : '') +
             (f.motivering ? '<br>' + LESS.esc(f.motivering) : '') + '</p>';
      } else {
        h += '<p class="planschradg">Rådgivaren har inte skattat den här frågan ännu.</p>';
      }

      if (f.berorFall && f.berorFall.length) {
        h += '<p class="planschbak">Påverkar fallen: ' + LESS.esc(f.berorFall.join(', ')) + '</p>';
      }

      ui.visaPanel('SKATTA · ' + rollNamn(roll), h,
        '←→ = ±5  ·  ↑↓ = ±1  ·  A = spara  ·  B = avbryt');
    }

    function stang(sparat) {
      LESS.input.pop(handler);
      if (sparat) { LESS.sfx('done'); } else { LESS.sfx('back'); }
      if (klar) klar();
    }

    rita();
    handler = LESS.input.push(function (k) {
      if (k === 'left') { varde = LESS.clamp(varde - STEG_GROVT, 0, 100); LESS.sfx('move'); rita(); }
      else if (k === 'right') { varde = LESS.clamp(varde + STEG_GROVT, 0, 100); LESS.sfx('move'); rita(); }
      else if (k === 'down') { varde = LESS.clamp(varde - STEG_FINT, 0, 100); rita(); }
      else if (k === 'up') { varde = LESS.clamp(varde + STEG_FINT, 0, 100); rita(); }
      else if (k === 'a') {
        LESS.state.skatta(f.id, varde);
        delaSkattning(roll, f, varde);
        delete andraCache[roll];
        stang(true);
      }
      else if (k === 'b') { stang(false); }
    });
  }

  /* ---------------- exportvyn ---------------- */

  function rapport(roll) {
    var fragor = (LESS.fragor && LESS.fragor[roll]) || [];
    var rader = ['LESS – Vårdcentralen · skattningar', rollNamn(roll),
                 new Date().toISOString().slice(0, 10),
                 'signatur: ' + (mittNamn() || '– ej ifylld –'), ''];
    var n = 0;
    fragor.forEach(function (f) {
      var min = LESS.state.minSkattning(f.id);
      if (!min) return;
      n++;
      rader.push(f.id);
      rader.push('  ' + f.fraga);
      rader.push('  rådgivaren: ' + (f.skattning == null ? '–' : f.skattning) +
                 '   du: ' + min.varde + '   (' + ankartext(min.varde) + ')');
      rader.push('');
    });
    if (!n) rader.push('Inga skattningar gjorda ännu.');
    return rader.join('\n');
  }

  function exportera(roll, klar) {
    var text = rapport(roll);
    var handler = null;
    var kopierat = false;

    function rita() {
      var h = '<p class="planschintro">' + (db
                ? 'Dina svar är redan delade. Den här texten är en kopia du kan spara eller skicka vidare.'
                : 'Markera texten och kopiera den, eller tryck A för att kopiera automatiskt. ' +
                  'Skicka den till den som bygger spelet.') + '</p>' +
              '<pre class="rapport">' + LESS.esc(text) + '</pre>' +
              (kopierat ? '<p class="planschank"><b>Kopierat till urklipp.</b></p>' : '');
      ui.visaPanel('DINA SVAR · ' + rollNamn(roll), h, 'A = kopiera  ·  B = tillbaka');
    }

    rita();
    handler = LESS.input.push(function (k) {
      if (k === 'down') ui.panelScroll(30);
      else if (k === 'up') ui.panelScroll(-30);
      else if (k === 'a') {
        if (global.navigator && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            kopierat = true; LESS.sfx('ok'); rita();
          }, function () { LESS.sfx('wrong'); });
        } else LESS.sfx('wrong');
      }
      else if (k === 'b') { LESS.sfx('back'); LESS.input.pop(handler); if (klar) klar(); }
    });
  }

  LESS.plansch = { visa: visa, rapport: rapport };

})(window);
