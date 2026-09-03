/* state.js – spelarens tillstånd, progression och repetitionskö.

   Pedagogiken sitter till stor del här:
   - principKö      : missade principer köas för återkommande övning (spacing)
   - mästerskap     : handledartipsen tonas bort när rollen sitter (fading)
   - kampanjbeslut  : tidigare beslut följer med patienten genom kedjan       */

(function (global) {
  'use strict';
  var LESS = global.LESS;

  var DEF = {
    v: 1,
    spelare: { namn: 'DU', roll: null },
    lage: null,                    /* 'kampanj' | 'drill' */
    kampanj: { arende: 0, steg: 0, beslut: {}, klara: [] },
    drill: { roll: null, spelade: {} },
    resultat: {},                  /* fallId -> {basta, spel, senaste} */
    principer: {},                 /* principId -> {ratt, fel, forfallen} */
    ko: [],                        /* principId-kö för repetition */
    mastery: {},                   /* roll -> antal guld */
    installningar: { tips: true, ljud: true, snabbtext: false },
    skattningar: {},               /* frågeId -> {varde, kommentar, tid} */
    namn: '',                      /* signatur på planschen */
    pingis: { hittat: false, vinster: {}, forluster: {} },
    statistik: { moten: 0, guld: 0, silver: 0, brons: 0, omtag: 0, minuter: 0 }
  };

  function deepCopy(o) { return JSON.parse(JSON.stringify(o)); }

  function merge(base, saved) {
    var out = deepCopy(base), k;
    if (!saved) return out;
    for (k in saved) {
      if (!Object.prototype.hasOwnProperty.call(saved, k)) continue;
      if (out[k] && typeof out[k] === 'object' && !Array.isArray(out[k]) &&
          saved[k] && typeof saved[k] === 'object' && !Array.isArray(saved[k])) {
        out[k] = merge(out[k], saved[k]);
      } else {
        out[k] = saved[k];
      }
    }
    return out;
  }

  var S = merge(DEF, LESS.store.load());

  var state = {
    get data() { return S; },

    spara: function () { LESS.store.save(S); },

    nollstall: function () {
      S = deepCopy(DEF);
      LESS.store.clear();
    },

    finnsSparat: function () {
      return S.statistik.moten > 0 || S.kampanj.arende > 0 || S.kampanj.steg > 0;
    },

    /* ---------- resultat ---------- */

    /* betyg: 'guld' | 'silver' | 'brons' | 'omtag' */
    registrera: function (fallId, roll, betyg, principer, minuterKvar) {
      var rang = { omtag: 0, brons: 1, silver: 2, guld: 3 };
      var r = S.resultat[fallId] || { basta: 'omtag', spel: 0, senaste: null };
      r.spel += 1;
      r.senaste = betyg;
      if (rang[betyg] > rang[r.basta]) r.basta = betyg;
      S.resultat[fallId] = r;

      S.statistik.moten += 1;
      S.statistik[betyg] = (S.statistik[betyg] || 0) + 1;
      S.statistik.minuter += Math.max(0, Math.round(minuterKvar || 0));

      if (betyg === 'guld') S.mastery[roll] = (S.mastery[roll] || 0) + 1;

      /* principer: {id: true/false} – true = tillämpad, false = missad */
      Object.keys(principer || {}).forEach(function (pid) {
        var p = S.principer[pid] || { ratt: 0, fel: 0 };
        if (principer[pid]) {
          p.ratt += 1;
          /* två rätt i rad tar bort principen ur repetitionskön */
          if (p.ratt >= 2) state.taBortUrKo(pid);
        } else {
          p.fel += 1;
          p.ratt = 0;
          state.laggIKo(pid);
        }
        S.principer[pid] = p;
      });

      state.spara();
      return r;
    },

    /* ---------- repetitionskö (spacing) ---------- */

    laggIKo: function (pid) {
      if (S.ko.indexOf(pid) < 0) S.ko.push(pid);
    },
    taBortUrKo: function (pid) {
      var i = S.ko.indexOf(pid);
      if (i >= 0) S.ko.splice(i, 1);
    },
    ko: function () { return S.ko.slice(); },

    /* ---------- fading av handledartips ---------- */

    tipsPa: function (roll) {
      if (!S.installningar.tips) return false;
      return (S.mastery[roll] || 0) < 2;
    },

    /* ---------- kampanj ---------- */

    kampanjBeslut: function (nyckel, varde) {
      S.kampanj.beslut[nyckel] = varde;
      state.spara();
    },
    hamtaBeslut: function (nyckel) { return S.kampanj.beslut[nyckel]; },

    kampanjKlart: function (fallId) {
      if (S.kampanj.klara.indexOf(fallId) < 0) S.kampanj.klara.push(fallId);
      state.spara();
    },

    /* ---------- frågeplanscherna ---------- */

    skatta: function (fragaId, varde, kommentar) {
      S.skattningar[fragaId] = {
        varde: LESS.clamp(Math.round(varde), 0, 100),
        kommentar: kommentar || '',
        tid: new Date().toISOString().slice(0, 10)
      };
      state.spara();
    },
    minSkattning: function (fragaId) { return S.skattningar[fragaId] || null; },
    antalSkattningar: function () { return Object.keys(S.skattningar).length; },

    /* ---------- drill ---------- */

    drillSpelad: function (fallId) {
      S.drill.spelade[fallId] = (S.drill.spelade[fallId] || 0) + 1;
      state.spara();
    },

    /* Väljer nästa drillfall: minst spelat först, men fall som tränar en
       princip i repetitionskön går före (retrieval practice på det som svajar). */
    nastaDrill: function (fall) {
      var ko = S.ko, spelade = S.drill.spelade;
      var poang = fall.map(function (f) {
        var traffar = 0;
        (f.principer || []).forEach(function (p) { if (ko.indexOf(p) >= 0) traffar++; });
        return { f: f, p: traffar * 100 - (spelade[f.id] || 0) * 10 + Math.random() * 5 };
      });
      poang.sort(function (a, b) { return b.p - a.p; });
      return poang.length ? poang[0].f : null;
    }
  };

  LESS.state = state;

})(window);
