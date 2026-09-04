/* topplista.js – affischen på skyddsrummets vägg

   Den som slår någon vid pingisbordet får skriva upp sig. Poängen räknas på
   vem man slagit, inte bara på att man vunnit: Sam är svårast och ger mest,
   John lättast och ger minst. Marginalen ger ett påslag, så en 5–0 mot Sam
   står högre än en 5–4.

   Listan sparas i spelets eget minne, och delas dessutom via artefaktens
   databas när den finns – då ser alla på vårdcentralen samma tavla.        */
(function (global) {
  'use strict';
  var LESS = global.LESS, ui = LESS.ui;

  var VIKT = { sam: 100, martin: 70, filip: 45, john: 25 };
  var TAK = 20;                       /* så många rader sparas lokalt */

  function delad() { return LESS.delad || null; }
  function db() { var d = delad(); return d ? d.aktuell() : null; }

  function poang(motId, egna, motpoang) {
    var bas = VIKT[motId] || 25;
    return bas + Math.max(0, egna - motpoang) * 6;
  }

  function motNamn(id) {
    var lista = (LESS.pong && LESS.pong.motstandare) || [];
    for (var i = 0; i < lista.length; i++) if (lista[i].id === id) return lista[i].namn;
    return id;
  }

  /* ---------------- lagring ---------------- */

  function lokala() {
    var d = LESS.state.data;
    if (!d.pingis) d.pingis = { hittat: true, vinster: {}, forluster: {} };
    if (!d.pingis.topp) d.pingis.topp = [];
    return d.pingis.topp;
  }

  function sparaLokalt(rad) {
    var lista = lokala();
    /* En rad per spelare och motståndare – bästa resultatet vinner, annars
       fylls tavlan av samma person som spelar om och om igen. */
    var nyckel = (rad.namn || '').toLowerCase() + '|' + rad.mot;
    var i, funnen = -1;
    for (i = 0; i < lista.length; i++) {
      if (((lista[i].namn || '').toLowerCase() + '|' + lista[i].mot) === nyckel) { funnen = i; break; }
    }
    if (funnen >= 0) {
      if (lista[funnen].varde >= rad.varde) return false;
      lista[funnen] = rad;
    } else {
      lista.push(rad);
    }
    lista.sort(function (a, b) { return b.varde - a.varde; });
    if (lista.length > TAK) lista.length = TAK;
    LESS.state.spara();
    return true;
  }

  function delaRad(rad) {
    var D = delad();
    if (!D || !db()) return;
    try {
      db().doc('pingis/' + D.deltagarId() + '__' + rad.mot).set({
        namn: rad.namn, mot: rad.mot, poang: rad.poang, motpoang: rad.motpoang,
        varde: rad.varde, deltagare: D.deltagarId(), tid: rad.tid
      }).then(null, function () { /* lokalt sparat räcker */ });
    } catch (e) { /* tyst */ }
  }

  function hamtaDelade() {
    var D = delad();
    if (!D || !db()) return Promise.resolve([]);
    return db().collection('pingis').get().then(function (snap) {
      var ut = [];
      snap.docs.forEach(function (d) {
        var v = d.data() || {};
        if (typeof v.varde !== 'number') return;
        ut.push(v);
      });
      return ut;
    }, function () { return []; });
  }

  /* Lokalt och delat är samma tavla sedd från två håll – slå ihop dem och
     låt bästa resultatet per namn och motståndare stå kvar. */
  function slaIhop(delade) {
    var alla = lokala().concat(delade || []), per = {}, ut = [];
    alla.forEach(function (r) {
      var n = (r.namn || 'ANONYM').toLowerCase() + '|' + r.mot;
      if (!per[n] || per[n].varde < r.varde) per[n] = r;
    });
    Object.keys(per).forEach(function (k) { ut.push(per[k]); });
    ut.sort(function (a, b) { return b.varde - a.varde; });
    return ut.slice(0, 10);
  }

  /* ---------------- affischen ---------------- */

  function visa(klar) {
    var handler = null, delade = [];

    function rita() {
      var rader = slaIhop(delade), h = '';
      h += '<p class="planschintro">Skyddsrummets pingistavla. Poängen räknas på ' +
           'vem du slagit: Sam ger mest, John minst, och marginalen ger påslag.</p>';
      h += '<p class="planschintro lagring">' + (db()
        ? '● Tavlan delas med alla som spelar. Kollegor på andra datorer syns här.'
        : '○ Tavlan sparas bara i den här webbläsaren.') + '</p>';
      if (!rader.length) {
        h += '<p>Ingen har skrivit upp sig ännu. Vinn en match vid bordet, så får du chansen.</p>';
      } else {
        h += '<table class="topp"><tr><th>#</th><th>Namn</th><th>Slog</th><th>Res.</th><th>P</th></tr>';
        rader.forEach(function (r, i) {
          h += '<tr' + (i === 0 ? ' class="etta"' : '') + '>' +
               '<td>' + (i + 1) + '</td>' +
               '<td>' + LESS.esc(r.namn || 'ANONYM') + '</td>' +
               '<td>' + LESS.esc(motNamn(r.mot)) + '</td>' +
               '<td>' + r.poang + '–' + r.motpoang + '</td>' +
               '<td><b>' + r.varde + '</b></td></tr>';
        });
        h += '</table>';
      }
      h += '<p class="planschbak">Sam 100 · Martin 70 · Filip 45 · John 25, plus 6 per bolls marginal.</p>';
      ui.visaPanel('PINGISTAVLAN', h, '↑↓ = bläddra  ·  B = tillbaka');
    }

    rita();
    var D = delad();
    if (D) D.db().then(function () {
      hamtaDelade().then(function (res) {
        delade = res;
        if (LESS.input.top() === handler) rita();
      });
    });

    handler = LESS.input.push(function (k) {
      if (k === 'down') ui.panelScroll(26);
      else if (k === 'up') ui.panelScroll(-26);
      else if (k === 'b' || k === 'a') {
        LESS.sfx('back');
        LESS.input.pop(handler);
        ui.doljPanel();
        if (klar) klar();
      }
    });
  }

  /* ---------------- skriva upp sig efter en vinst ---------------- */

  function registrera(motId, egna, motpoang, klar) {
    var D = delad();
    var varde = poang(motId, egna, motpoang);
    var h = '<p class="planschintro">Du slog ' + LESS.esc(motNamn(motId)) + ' med ' +
            egna + '–' + motpoang + '. Det ger <b>' + varde + ' poäng</b>.</p>' +
            '<p class="planschintro">Skriv ditt namn om du vill stå på tavlan i skyddsrummet. ' +
            'Lämna tomt så räknas matchen ändå, men syns bara som din egen statistik.</p>';
    ui.textInmatning({
      titel: 'PINGISTAVLAN',
      html: h,
      max: 24,
      varde: D ? D.namn() : '',
      platshallare: 'Ditt namn'
    }, function (namn) {
      if (namn === null || !namn.trim()) { if (klar) klar(false); return; }
      namn = namn.trim().slice(0, 24);
      if (D) D.sparaNamn(namn);
      var rad = { namn: namn, mot: motId, poang: egna, motpoang: motpoang,
                  varde: varde, tid: new Date().toISOString() };
      var battre = sparaLokalt(rad);
      delaRad(rad);
      if (klar) klar(battre);
    });
  }

  LESS.topplista = { visa: visa, registrera: registrera, poang: poang };

})(window);
