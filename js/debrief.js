/* debrief.js – handledarens återkoppling efter mötet.

   Här, och först här, avslöjas de dolda mätarna. Under mötet fick
   spelaren bara patientens reaktion; nu kommer den förklarande
   återkopplingen som kopplar varje val till en princip.            */

(function (global) {
  'use strict';
  var LESS = global.LESS, ui = LESS.ui, $ = LESS.$;

  var BETYGSTEXT = {
    guld:   ['GULD',   'Rätt beslut, hållbart underlag och patienten är kvar i samtalet.'],
    silver: ['SILVER', 'Rätt riktning. Något i vägen dit kostade mer än det behövde.'],
    brons:  ['BRONS',  'Du landade någorlunda, men flera steg gick förlorade på vägen.'],
    omtag:  ['OMTAG',  'Det här behöver göras om. Läs igenom och pröva igen.']
  };

  function markering(ok) {
    if (ok === true) return ['ok', '✔'];
    if (ok === 'delvis') return ['mid', '~'];
    return ['bad', '✘'];
  }

  function matarrad(namn, varde) {
    var kl = varde >= 60 ? '' : (varde >= 40 ? 'midv' : 'lowv');
    return '<div class="meter"><span class="mn">' + LESS.esc(namn) + '</span>' +
           '<span class="mb"><i class="' + kl + '" style="width:' + varde + '%"></i></span>' +
           '<span class="mv">' + varde + '</span></div>';
  }

  function visa(res, done) {
    var h = '', bt = BETYGSTEXT[res.betyg] || BETYGSTEXT.omtag;
    var roll = LESS.roller[res.roll];

    /* ---- betyg ---- */
    h += '<div class="d-grade ' + res.betyg + '">' +
         '<span class="g">' + bt[0] + '</span>' +
         '<span class="s">' + LESS.esc(bt[1]) + '</span>' +
         '<span class="s">' + res.poang + ' av 100 poäng · ' +
         (res.tidUt ? 'tiden tog slut' : LESS.mmss(res.kvar) + ' kvar av besöket') + '</span>' +
         '</div>';

    h += '<div class="d-note"><b>' + LESS.esc((roll ? roll.namn : res.roll) + ' · ' + res.patient.namn) + '</b>' +
         LESS.esc(res.fall.titel) + '</div>';

    /* ---- beslutet ---- */
    if (res.beslut) {
      var m = markering(res.beslut.ok);
      h += '<div class="d-h">DITT BESLUT</div>';
      h += '<div class="d-row ' + m[0] + '"><span class="mark">' + m[1] + '</span>' +
           '<span class="said">' + LESS.esc(res.beslut.text) + '</span>' +
           (res.beslut.utfall ? '<span class="said"><i>' + LESS.esc(res.beslut.utfall) + '</i></span>' : '') +
           '<span class="why">' + LESS.esc(res.beslut.varfor || '') + '</span></div>';
    }

    /* ---- val för val ---- */
    h += '<div class="d-h">VAL FÖR VAL</div>';
    var visade = 0;
    res.logg.forEach(function (r) {
      if (r.beslut) return;
      /* Kedjeled som satt rätt sammanfattas av kedjans egen rad – bara de
         felplacerade leden är värda en egen rad här. */
      if (r.led && r.ok === true) return;
      var mk = markering(r.ok);
      visade++;
      h += '<div class="d-row ' + mk[0] + '"><span class="mark">' + mk[1] + '</span>' +
           '<span class="said">' + LESS.esc(r.text) + '</span>' +
           (r.varfor ? '<span class="why">' + LESS.esc(r.varfor) + '</span>' : '') +
           (r.princip && LESS.principer[r.princip]
             ? '<span class="tag">' + LESS.esc(LESS.principer[r.princip]) + '</span>' : '') +
           '</div>';
    });
    if (!visade) h += '<p>Inga val registrerade.</p>';

    /* ---- de dolda mätarna ---- */
    h += '<div class="d-h">DET DU INTE SÅG</div>';
    h += '<p>Under besöket fick du bara patientens reaktion. Så här stod mätarna när du gick ut ur rummet:</p>';
    LESS.encounter.MATARE.forEach(function (k) {
      h += matarrad(LESS.MATARNAMN[k], res.matare[k]);
    });
    if (res.matare.sakerhet < 35) {
      h += '<div class="d-note warnbox"><b>PATIENTSÄKERHET</b>' +
           'Något medicinskt eller juridiskt viktigt gick förlorat. Det sätter betyget till OMTAG oavsett resten.</div>';
    }
    if (res.tidUt) {
      h += '<div class="d-note warnbox"><b>TIDEN TOG SLUT</b>' +
           'Beslutet fattades under tvång. Det är inte ett misslyckande i sig – men lägg märke till vilka val som åt upp minuterna. ' +
           'Dåligt bemötande kostar nästan alltid mer tid än det sparar.</div>';
    }

    /* ---- principer ---- */
    var missade = [], sittande = [];
    Object.keys(res.principer || {}).forEach(function (p) {
      var namn = LESS.principer[p] || p;
      if (res.principer[p]) sittande.push(namn); else missade.push(namn);
    });
    if (missade.length) {
      h += '<div class="d-h">TAS UPP IGEN I ÖVNINGSLÄGET</div><ul>';
      missade.forEach(function (n) { h += '<li>' + LESS.esc(n) + '</li>'; });
      h += '</ul>';
    }
    if (sittande.length) {
      h += '<div class="d-h">DET HÄR SATT</div><ul>';
      sittande.forEach(function (n) { h += '<li>' + LESS.esc(n) + '</li>'; });
      h += '</ul>';
    }

    var ko = LESS.state.ko();
    if (ko.length) {
      h += '<div class="d-note"><b>REPETITIONSKÖ (' + ko.length + ')</b>' +
           'Fall som tränar dessa principer prioriteras i övningsläget tills du klarat dem två gånger i rad.</div>';
    }

    h += '<div class="d-note"><b>⚠ EJ KLINISKT GRANSKAT</b>' +
         'Innehållet är ett pedagogiskt utkast. Kontrollera alltid mot försäkringsmedicinskt beslutsstöd, ' +
         'Försäkringskassans regelverk och lokala rutiner.</div>';

    $('debrief-body').innerHTML = h;
    /* Visa först, nollställ sedan – annars ärver rutan förra mötets scroll. */
    LESS.show($('debrief'), true);
    $('debrief-box').scrollTop = 0;
    LESS.sfx(res.betyg === 'omtag' ? 'fail' : 'done');

    var body = $('debrief-box');
    var fot = $('debrief-foot');

    function sidhojd() { return Math.max(80, body.clientHeight - 24); }
    function botten() { return body.scrollTop + body.clientHeight >= body.scrollHeight - 12; }

    function uppdateraFot() {
      if (botten()) {
        fot.innerHTML = '<span><b>A</b> = fortsätt &nbsp;·&nbsp; ↑↓ = bläddra tillbaka</span>';
        fot.classList.remove('mer');
      } else {
        var sidor = Math.max(1, Math.ceil(body.scrollHeight / sidhojd()));
        var sida = Math.min(sidor, Math.floor(body.scrollTop / sidhojd()) + 1);
        fot.innerHTML = '<span><span class="pil">▼</span>&nbsp; <b>A</b> = nästa sida (' + sida + '/' + sidor +
                        ') &nbsp;·&nbsp; <b>B</b> = hoppa till slutet</span>';
        fot.classList.add('mer');
      }
    }
    body.onscroll = uppdateraFot;
    uppdateraFot();

    function stang() {
      LESS.sfx('ok');
      LESS.input.pop(hnd);
      body.onscroll = null;
      fot.classList.remove('mer');
      LESS.show($('debrief'), false);
      if (done) done(res);
    }

    var hnd = LESS.input.push(function (k) {
      if (k === 'down') { body.scrollTop += 48; LESS.sfx('move'); }
      else if (k === 'up') { body.scrollTop -= 48; LESS.sfx('move'); }
      else if (k === 'a') {
        /* Bläddra en hel sida i taget tills allt är läst, sedan vidare.
           Handledarens återkoppling är poängen med mötet – den ska inte
           gå att klicka förbi av misstag. */
        if (!botten()) { body.scrollTop += sidhojd(); LESS.sfx('blip'); uppdateraFot(); return; }
        stang();
      } else if (k === 'b') {
        /* Har man redan läst: hoppa direkt till slutet. */
        if (!botten()) { body.scrollTop = body.scrollHeight; LESS.sfx('back'); uppdateraFot(); }
        else { body.scrollTop -= sidhojd(); LESS.sfx('move'); }
      }
    });
  }

  LESS.debrief = { visa: visa };

})(window);
