/* encounter.js – mötesmotorn.

   Tiden är den enda mätaren spelaren ser. Allians, agens, tydlighet,
   underlag och patientsäkerhet räknas i det dolda och avslöjas först
   i handledarens återkoppling. Feedbacken under mötet är diegetisk:
   patientens kroppsspråk, svar och tystnader.                       */

(function (global) {
  'use strict';
  var LESS = global.LESS, ui = LESS.ui;

  var MATARE = ['allians', 'agens', 'tydlighet', 'underlag', 'sakerhet'];
  var MATARNAMN = {
    allians: 'Allians',
    agens: 'Patientens agens',
    tydlighet: 'Tydliga förväntningar',
    underlag: 'Kvalitet i underlaget',
    sakerhet: 'Patientsäkerhet'
  };
  LESS.MATARNAMN = MATARNAMN;

  var E = null;

  /* ---------------- hjälpare ---------------- */

  function person() {
    if (!E) return { namn: 'PATIENT', portratt: {}, alder: '' };
    return LESS.personer[E.fall.patient] || { namn: 'PATIENT', portratt: {} };
  }
  function patientTalare() { return { name: person().namn.toUpperCase(), kind: 'pat' }; }

  function applyFx(fx) {
    if (!fx) return;
    Object.keys(fx).forEach(function (k) {
      if (E.matare[k] == null) return;
      E.matare[k] = LESS.clamp(E.matare[k] + fx[k], 0, 100);
    });
  }

  function kostaTid(min) {
    if (!min) return;
    E.kvar = Math.max(0, E.kvar - min);
    ui.hud(person().namn, E.kvar, E.minuter);
    if (E.kvar === 0 && !E.tidUt) {
      E.tidUt = true;
      LESS.sfx('tick');
    }
  }

  function logga(rad) { E.logg.push(rad); }

  /* Löser ut ok-värdet, som kan bero på tidigare beslut i kampanjen. */
  function loesOk(o) {
    if (o.okOm) {
      var v = LESS.state.hamtaBeslut(o.okOm.nyckel);
      if (v != null && Object.prototype.hasOwnProperty.call(o.okOm.varden, v)) return o.okOm.varden[v];
      return o.okOm.standard;
    }
    return o.ok;
  }
  function loesVarfor(o, ok) {
    if (ok === false && o.varforFel) return o.varforFel;
    return o.varfor;
  }

  /* Diegetisk signal utifrån hur valet landade hos patienten */
  function reaktion(o, ok) {
    var d = 0;
    if (o.fx) d = (o.fx.allians || 0) + (o.fx.agens || 0);
    if (o.reaktion) ui.cue(o.reaktion);
    if (d >= 8) LESS.sfx('warm');
    else if (d <= -8) LESS.sfx('cold');
    else if (ok === false) LESS.sfx('back');
    else LESS.sfx('ok');
  }

  function tips(beat) {
    if (!beat.tips) return null;
    return LESS.state.tipsPa(E.roll) ? beat.tips : null;
  }

  /* Menyval med handledartips bakom B-knappen, så att listan får plats. */
  function valMeny(items, beat, cb) {
    var t = tips(beat);
    if (t) markeraTips();
    function oppna() {
      var stang = ui.menu(items, {
        layout: 'val',
        fot: t ? 'B = handledarens tips' : null,
        onB: t ? function () {
          stang();
          ui.panel('HANDLEDAREN', '<p>' + LESS.esc(t) + '</p>', oppna);
        } : null
      }, cb);
    }
    oppna();
  }

  function kostText(min) { return '⏱' + min; }

  /* Liten markering i frågerutan om att handledartips finns bakom B. */
  function markeraTips() {
    var el = LESS.$('dialog-text');
    if (el && el.innerHTML.indexOf('[B = tips]') < 0) {
      el.innerHTML += ' <span style="color:#606050">[B = tips]</span>';
    }
  }

  /* ---------------- scenrendering ---------------- */

  var scene = {
    draw: function (c, t) {
      if (!E) return;
      var p = person();
      if (E.lage === 'chatt') {
        LESS.drawChatBg(c, t);
        LESS.drawPortrait(c, p.portratt, E.humor, 106, 8);
      } else if (E.lage === 'granskning') {
        LESS.drawGranskningBg(c, t);
        LESS.drawPortrait(c, p.portratt, E.humor, 114, 10);
      } else {
        LESS.drawRoomBg(c);
        LESS.drawPortrait(c, p.portratt, E.humor, 100, 8);
        var roll = LESS.roller[E.roll];
        if (roll) {
          var spr = LESS.charSprite('spelare-' + E.roll, roll.sprite, 'up', 0);
          c.drawImage(spr, 0, 0, 16, 16, 8, 26, 32, 32);
        }
      }
    }
  };

  /* ---------------- paneler ---------------- */

  function visaJournal() {
    var p = person(), html = '';
    html += '<h3>' + LESS.esc(p.namn) + ', ' + p.alder + ' år</h3>';
    html += '<p>' + LESS.esc(p.yrke || '') + '</p>';
    (E.fall.journal || []).forEach(function (rad) {
      html += '<div class="kv"><b>' + LESS.esc(rad[0]) + '</b><span>' + LESS.esc(rad[1]) + '</span></div>';
    });
    if (p.bakgrund) html += '<h3>Bakgrund</h3><p>' + LESS.esc(p.bakgrund) + '</p>';
    var r = LESS.roller[E.roll];
    if (r) html += '<h3>Din roll: ' + LESS.esc(r.namn) + '</h3><p>' + LESS.esc(r.uppdrag) + '</p>';
    ui.panel('JOURNAL', html);
  }

  LESS.handbokPanel = function () {
    var html = '';
    LESS.handbok.forEach(function (k) {
      html += '<h3>' + LESS.esc(k.titel) + '</h3>';
      (k.text || []).forEach(function (t) { html += '<p>' + LESS.esc(t) + '</p>'; });
      if (k.lista) {
        html += '<ul>';
        k.lista.forEach(function (l) { html += '<li><b>' + LESS.esc(l[0]) + '</b> – ' + LESS.esc(l[1]) + '</li>'; });
        html += '</ul>';
      }
      if (k.punkter) {
        html += '<ul>';
        k.punkter.forEach(function (pp) { html += '<li>' + LESS.esc(pp) + '</li>'; });
        html += '</ul>';
      }
      if (k.varning) html += '<p><b>⚠ ' + LESS.esc(k.varning) + '</b></p>';
      if (k.todo) html += '<p><b>[' + LESS.esc(k.todo) + ']</b></p>';
    });
    ui.panel('HANDBOKEN', html);
  };

  /* ---------------- beat-typer ---------------- */

  function korReplik(b, next) {
    if (b.humor) E.humor = b.humor;
    ui.say(b.text, b.talare || patientTalare(), next);
  }

  function korVal(b, next) {
    if (b.humor) E.humor = b.humor;
    function meny() {
      ui.setDialog(b.fraga, null, 'fraga');
      var items = b.val.map(function (o) {
        return { text: o.text, cost: kostText(o.tid == null ? 1 : o.tid) };
      });
      valMeny(items, b, function (i) {
        ui.hideDialog();
        hanteraVal(b.val[i], b, next);
      });
    }
    if (b.text) {
      ui.say(b.text, b.talare || patientTalare(), meny);
    } else {
      meny();
    }
  }

  function hanteraVal(o, b, next) {
    var ok = loesOk(o);
    kostaTid(o.tid == null ? 1 : o.tid);
    applyFx(o.fx);
    if (o.flagga) E.flaggor[o.flagga] = true;
    if (o.humor) E.humor = o.humor;
    if (o.kampanj) LESS.state.kampanjBeslut(o.kampanj.nyckel, o.kampanj.varde);

    logga({ fraga: b.fraga, text: o.text, ok: ok, varfor: loesVarfor(o, ok), princip: o.princip, tid: o.tid == null ? 1 : o.tid });
    reaktion(o, ok);

    function fortsatt() {
      if (o.extra) E.ko.unshift(o.extra);
      next();
    }
    if (o.svar) ui.say(o.svar, patientTalare(), fortsatt);
    else fortsatt();
  }

  function korKontroll(b, next) {
    applyFx(b.fx);
    var forsta = true;

    function fraga() {
      ui.banner(b.banner || 'FAKTAKONTROLL');
      ui.setDialog(b.fraga, null, 'fraga');
      var items = b.val.map(function (o) { return { text: o.text }; });
      valMeny(items, b, function (i) {
        var o = b.val[i];
        ui.hideDialog();
        if (o.ratt) {
          LESS.sfx('ok');
          if (forsta) logga({ fraga: b.fraga, text: o.text, ok: true, varfor: b.forklaring, princip: b.princip });
          ui.banner(null);
          ui.say(b.forklaring, { name: 'HANDLEDAREN', kind: 'you' }, next);
        } else {
          LESS.sfx('wrong');
          kostaTid(b.tidFel == null ? 2 : b.tidFel);
          if (forsta) {
            logga({ fraga: b.fraga, text: o.text, ok: false, varfor: o.varfor || b.forklaring, princip: b.princip });
            forsta = false;
          }
          if (E.tidUt) {
            ui.banner(null);
            ui.say('Tiden rann ut. ' + b.forklaring, { name: 'HANDLEDAREN', kind: 'you' }, next);
            return;
          }
          ui.cue('✘ Inte riktigt.');
          ui.say(o.varfor || 'Inte riktigt. Tänk en gång till.', { name: 'HANDLEDAREN', kind: 'you' }, fraga);
        }
      });
    }
    fraga();
  }

  function korFlera(b, next) {
    applyFx(b.fx);
    var valda = [], antal = b.antal || 3, tidPer = b.tidPer == null ? 1 : b.tidPer;

    function meny(start) {
      ui.banner(b.banner || 'VÄLJ');
      ui.setDialog(b.fraga + '  (' + valda.length + '/' + antal + ')', null, 'fraga');
      var items = b.val.map(function (o, i) {
        return { text: (valda.indexOf(i) >= 0 ? '▣ ' : '▢ ') + o.text, cost: kostText(tidPer) };
      });
      items.push({ text: '▶ KLAR', disabled: valda.length !== antal });
      var tt = tips(b);
      var stang = ui.menu(items, {
        layout: 'val', start: start,
        fot: tt ? 'B = handledarens tips' : null,
        onB: tt ? function () {
          stang();
          ui.panel('HANDLEDAREN', '<p>' + LESS.esc(tt) + '</p>', function () { meny(start); });
        } : null
      }, function (i) {
        if (i === b.val.length) { ui.hideDialog(); klar(); return; }
        var pos = valda.indexOf(i);
        if (pos >= 0) { valda.splice(pos, 1); LESS.sfx('back'); }
        else if (valda.length < antal) { valda.push(i); LESS.sfx('ok'); }
        else { LESS.sfx('wrong'); ui.cue('Du hinner bara ' + antal + '.'); }
        meny(i);
      });
    }

    function klar() {
      ui.banner(null);
      kostaTid(antal * tidPer);
      var bra = 0;
      valda.forEach(function (i) {
        var o = b.val[i];
        applyFx(o.fx);
        if (o.flagga) E.flaggor[o.flagga] = true;
        if (o.ratt) bra++;
        logga({ fraga: b.fraga, text: o.text, ok: !!o.ratt, varfor: o.varfor, princip: o.princip });
      });
      /* Rätt svar som inte valdes räknas som missade – de är också lärdomar. */
      b.val.forEach(function (o, i) {
        if (o.ratt && valda.indexOf(i) < 0) {
          logga({ fraga: b.fraga, text: 'Valde inte: ' + o.text, ok: false, varfor: o.varfor, princip: o.princip });
        }
      });
      if (bra === antal) { LESS.sfx('warm'); ui.cue('✔ Alla tre satt.'); }
      else if (bra === 0) { LESS.sfx('cold'); ui.cue('✘ Ingen av dem bar.'); }
      else { LESS.sfx('ok'); ui.cue(bra + ' av ' + antal + '.'); }
      next();
    }

    meny(0);
  }

  function korOrdna(b, next) {
    applyFx(b.fx);
    var kvar = LESS.shuffle(b.delar.map(function (d, i) { return i; }));
    var steg = 0, felIStg = false, nagotFel = false;

    function fraga() {
      if (steg >= b.delar.length) {
        logga({ fraga: b.fraga, text: nagotFel ? 'Kedjan byggdes med fel på vägen' : 'Kedjan byggdes korrekt',
                ok: !nagotFel, varfor: b.forklaring, princip: b.princip });
        ui.banner(null);
        ui.say(b.forklaring, { name: 'HANDLEDAREN', kind: 'you' }, next);
        return;
      }
      var mal = b.delar[steg];
      ui.banner(b.banner || 'DFA-KEDJAN');
      ui.setDialog('Vilken rad är ' + mal.etikett + '?', null, 'fraga');
      var items = kvar.map(function (i) { return { text: b.delar[i].text }; });
      valMeny(items, b, function (n) {
        ui.hideDialog();
        var idx = kvar[n];
        if (b.delar[idx].etikett === mal.etikett) {
          LESS.sfx('ok');
          kvar.splice(n, 1);
          steg++; felIStg = false;
          ui.cue('✔ ' + mal.etikett);
          fraga();
        } else {
          LESS.sfx('wrong');
          nagotFel = true;
          if (!felIStg) { kostaTid(b.tidFel == null ? 2 : b.tidFel); felIStg = true; }
          ui.cue('✘ Det är ' + b.delar[idx].etikett + '.');
          if (E.tidUt) { steg = b.delar.length; fraga(); return; }
          fraga();
        }
      });
    }
    fraga();
  }

  function korBeslut(b, next) {
    ui.banner(b.banner || 'BESLUT');
    ui.setDialog(b.fraga, null, 'fraga');
    var items = b.val.map(function (o) {
      return { text: o.text, cost: o.tid ? kostText(o.tid) : null };
    });
    valMeny(items, b, function (i) {
      var o = b.val[i], ok = loesOk(o);
      ui.hideDialog();
      ui.banner(null);
      kostaTid(o.tid == null ? 1 : o.tid);
      applyFx(o.fx);
      if (o.kampanj) LESS.state.kampanjBeslut(o.kampanj.nyckel, o.kampanj.varde);
      E.beslut = { text: o.text, ok: ok, varfor: loesVarfor(o, ok), utfall: o.utfall, princip: o.princip };
      logga({ fraga: b.fraga, text: o.text, ok: ok, varfor: loesVarfor(o, ok), princip: o.princip, beslut: true });
      if (ok === true) LESS.sfx('done'); else if (ok === false) LESS.sfx('fail'); else LESS.sfx('ok');
      if (o.utfall) ui.say(o.utfall, { name: 'SEDAN', kind: '' }, next);
      else next();
    });
  }

  /* ---------------- flöde ---------------- */

  function villkorOk(b) {
    if (!b.om) return true;
    if (b.om.saknas) return !E.flaggor[b.om.saknas];
    if (b.om.finns) return !!E.flaggor[b.om.finns];
    return true;
  }

  function nastaBeat() {
    ui.banner(null);

    /* Tiden ute: hoppa direkt till beslutet. */
    if (E.tidUt && !E.tidUtVisad) {
      E.tidUtVisad = true;
      var beslut = null, i;
      for (i = E.ko.length - 1; i >= 0; i--) if (E.ko[i].typ === 'beslut') { beslut = E.ko[i]; break; }
      if (beslut) {
        E.ko = [beslut];
        ui.banner('TIDEN ÄR SLUT');
        ui.say('Besökstiden är slut. Nästa patient väntar – du måste fatta beslutet nu, med det du har.',
          { name: 'HANDLEDAREN', kind: 'you' }, nastaBeat);
        return;
      }
    }

    var b = E.ko.shift();
    while (b && !villkorOk(b)) b = E.ko.shift();

    if (!b) { avsluta(); return; }

    switch (b.typ) {
      case 'replik':   korReplik(b, nastaBeat); break;
      case 'val':      korVal(b, nastaBeat); break;
      case 'kontroll': korKontroll(b, nastaBeat); break;
      case 'flera':    korFlera(b, nastaBeat); break;
      case 'ordna':    korOrdna(b, nastaBeat); break;
      case 'beslut':   korBeslut(b, nastaBeat); break;
      default:         nastaBeat();
    }
  }

  /* ---------------- betyg ---------------- */

  function raknaBetyg() {
    var i, r, poang = 0;

    /* Beslutet väger tyngst. */
    var bp = 0;
    if (E.beslut) bp = E.beslut.ok === true ? 40 : (E.beslut.ok === 'delvis' ? 22 : 0);
    poang += bp;

    /* Kvaliteten i vägen dit. */
    var summa = 0, antal = 0;
    for (i = 0; i < E.logg.length; i++) {
      r = E.logg[i];
      if (r.beslut) continue;
      if (r.ok === true) summa += 1;
      else if (r.ok === 'delvis') summa += 0.5;
      antal++;
    }
    var andel = antal ? summa / antal : 0;
    poang += andel * 30;

    /* De dolda mätarna. */
    var snitt = 0;
    MATARE.forEach(function (m) { snitt += E.matare[m]; });
    snitt = snitt / MATARE.length;
    poang += LESS.clamp((snitt - 35) / 65 * 20, 0, 20);

    /* Tid kvar i besöket. */
    poang += E.tidUt ? 0 : 10;

    var betyg;
    if (poang >= 85) betyg = 'guld';
    else if (poang >= 65) betyg = 'silver';
    else if (poang >= 45) betyg = 'brons';
    else betyg = 'omtag';

    /* Patientsäkerheten är inte förhandlingsbar. */
    if (E.matare.sakerhet < 35) betyg = 'omtag';

    return { poang: Math.round(poang), betyg: betyg, andel: andel, snitt: Math.round(snitt) };
  }

  function principResultat() {
    var res = {};
    E.logg.forEach(function (r) {
      if (!r.princip) return;
      if (res[r.princip] === false) return;
      res[r.princip] = (r.ok === false) ? false : true;
    });
    return res;
  }

  function avsluta() {
    ui.hideDialog();
    ui.hideMenu();
    ui.banner(null);
    ui.hud(null);

    var b = raknaBetyg();
    var principer = principResultat();

    LESS.state.registrera(E.fall.id, E.roll, b.betyg, principer, E.kvar);
    if (E.opts.drill) LESS.state.drillSpelad(E.fall.id);

    var resultat = {
      fall: E.fall,
      roll: E.roll,
      patient: person(),
      betyg: b.betyg,
      poang: b.poang,
      matare: E.matare,
      logg: E.logg,
      beslut: E.beslut,
      tidUt: E.tidUt,
      kvar: E.kvar,
      minuter: E.minuter,
      principer: principer
    };

    var klar = E.done;
    LESS.ui.globalKeys.journal = null;
    E = null;
    LESS.debrief.visa(resultat, klar);
  }

  /* ---------------- start ---------------- */

  function start(fall, opts, done) {
    opts = opts || {};
    E = {
      fall: fall,
      roll: fall.roll,
      lage: fall.lage || 'rum',
      minuter: fall.minuter,
      kvar: fall.minuter,
      matare: { allians: 50, agens: 50, tydlighet: 50, underlag: 50, sakerhet: 50 },
      humor: 'neutral',
      flaggor: {},
      logg: [],
      ko: fall.beats.slice(),
      tidUt: false,
      tidUtVisad: false,
      beslut: null,
      opts: opts,
      done: done
    };

    LESS.setScene(scene);
    LESS.ui.globalKeys.journal = visaJournal;
    LESS.ui.globalKeys.handbok = LESS.handbokPanel;

    ui.hud(person().namn, E.kvar, E.minuter);

    /* Intro, med eventuella tillägg som beror på tidigare beslut. */
    var rader = (fall.intro || []).slice();
    (fall.introExtra || []).forEach(function (x) {
      if (LESS.state.hamtaBeslut(x.nyckel) === x.varde) rader = rader.concat(x.text);
    });
    var r = LESS.roller[fall.roll];
    rader.push('DU ÄR ' + (r ? r.namn : fall.roll) + '.  ' +
               'Besökstid: ' + fall.minuter + ' minuter.  J = journal, H = handbok.');

    ui.sayAll(rader.map(function (t) { return { text: t, speaker: null }; }), nastaBeat);
  }

  LESS.encounter = { start: start, MATARE: MATARE };

})(window);
