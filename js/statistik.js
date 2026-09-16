/* statistik.js – anonym användningsstatistik

   Verksamheten vill veta om spelet faktiskt används: hur många som kommit
   igång, hur långt de tar sig, var det tar stopp och vilka principer som
   sitter dåligt. Det går att svara på utan att veta vem någon är, och det
   är så det är byggt.

   Tre saker är medvetna val och bör inte ändras utan att någon tänker efter:

   1. Egen nyckel. Statistiken använder INTE samma deltagar-id som planschen.
      Den som signerar en skattning med sitt namn ska inte kunna kopplas till
      sin spelstatistik. Två id:n som aldrig möts.
   2. Grovkornigt. Datum utan klockslag, antal utan tidsstämplar, betyg utan
      ordning. Nog för att se ett mönster, för lite för att följa en person
      genom en eftermiddag.
   3. Frivilligt. Första gången spelet startar visas vad som samlas in, och
      man kan tacka nej. Ett nej gäller tills någon ändrar det.

   Allt som skrivs hit kan läsas av alla som öppnar spelet. Det finns ingen
   privat lagring i den här körmiljön. Skriv därför aldrig något här som
   inte tål att en kollega läser det.                                       */

(function (global) {
  'use strict';
  var LESS = global.LESS;

  var NYCKEL_ID = 'less-stat-id';
  var NYCKEL_NEJ = 'less-stat-nej';
  var NYCKEL_FRAGAD = 'less-stat-fragad';
  var MINSTA_N = 5;              /* under så många svarande visas inga siffror */

  var senasteSkrivning = 0;
  var SKRIVPAUS = 20000;         /* ms – skriv inte oftare än så */

  /* ---------------- id och samtycke ---------------- */

  function statId() {
    try {
      var id = global.localStorage.getItem(NYCKEL_ID);
      if (!id) {
        id = 's' + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);
        global.localStorage.setItem(NYCKEL_ID, id);
      }
      return id;
    } catch (e) { return null; }
  }

  /* Av tills någon sagt ja. Innan frågan är ställd skickas ingenting – att
     samla in först och fråga sedan vore att fråga för sent. */
  function avstangd() {
    try {
      if (global.localStorage.getItem(NYCKEL_FRAGAD) !== '1') return true;
      return global.localStorage.getItem(NYCKEL_NEJ) === '1';
    } catch (e) { return true; }
  }

  function stangAv(av) {
    try {
      global.localStorage.setItem(NYCKEL_NEJ, av ? '1' : '0');
      global.localStorage.setItem(NYCKEL_FRAGAD, '1');
    } catch (e) { /* tyst */ }
  }

  function harFragats() {
    try { return global.localStorage.getItem(NYCKEL_FRAGAD) === '1'; } catch (e) { return true; }
  }

  function db() {
    var d = LESS.delad;
    return d ? d.aktuell() : null;
  }

  /* ---------------- vad som skickas ----------------
     Datum utan klockslag, med flit. Ett klockslag gör en anonym rad
     spårbar för den som vet vem som satt vid datorn klockan tre. */

  function idag() { return new Date().toISOString().slice(0, 10); }

  function underlag() {
    var d = LESS.state.data;
    var fall = {};
    Object.keys(d.resultat || {}).forEach(function (id) {
      fall[id] = d.resultat[id].basta;
    });
    return {
      forsta: d.statistikForsta || idag(),
      senast: idag(),
      moten: d.statistik.moten || 0,
      guld: d.statistik.guld || 0,
      silver: d.statistik.silver || 0,
      brons: d.statistik.brons || 0,
      omtag: d.statistik.omtag || 0,
      kampanjArende: d.kampanj.arende || 0,
      kampanjSteg: d.kampanj.steg || 0,
      kampanjKlar: !!LESS.state.kampanjKlarad(),
      moteVisat: !!d.moteVisat,
      fall: fall,
      kvarIKo: (LESS.state.ko() || []).slice(0, 12),
      version: LESS.VERSION
    };
  }

  /* ---------------- skriv ---------------- */

  function rapportera(tvinga) {
    if (avstangd()) return;
    var id = statId();
    if (!id) return;
    var nu = Date.now();
    if (!tvinga && nu - senasteSkrivning < SKRIVPAUS) return;

    var D = LESS.delad;
    if (!D) return;
    D.db().then(function () {
      if (!db()) return;
      var d = LESS.state.data;
      if (!d.statistikForsta) { d.statistikForsta = idag(); LESS.state.spara(); }
      senasteSkrivning = Date.now();
      try {
        db().doc('statistik/' + id).set(underlag()).then(null, function () { /* tyst */ });
      } catch (e) { /* tyst */ }
    });
  }

  /* ---------------- läs och räkna samman ---------------- */

  var cache = null;

  function hamta() {
    if (!LESS.delad) return Promise.resolve(null);
    return LESS.delad.db().then(function () {
      if (!db()) { cache = { ingen: true }; return cache; }
      return db().collection('statistik').get().then(function (snap) {
        var rader = [];
        snap.docs.forEach(function (doc) {
          var v = doc.data() || {};
          if (typeof v.moten === 'number') rader.push(v);
        });
        cache = sammanstall(rader);
        return cache;
      }, function () { return null; });
    });
  }

  function median(a) {
    if (!a.length) return 0;
    var s = a.slice().sort(function (x, y) { return x - y; });
    return s.length % 2 ? s[(s.length - 1) / 2]
                        : Math.round((s[s.length / 2 - 1] + s[s.length / 2]) / 2);
  }

  function sammanstall(rader) {
    var n = rader.length;
    var ut = { n: n, nog: n >= MINSTA_N };
    if (!ut.nog) return ut;

    ut.moten = rader.reduce(function (s, r) { return s + (r.moten || 0); }, 0);
    ut.medianMoten = median(rader.map(function (r) { return r.moten || 0; }));
    ut.borjat = rader.filter(function (r) { return (r.moten || 0) > 0; }).length;
    ut.klara = rader.filter(function (r) { return r.kampanjKlar; }).length;
    ut.motet = rader.filter(function (r) { return r.moteVisat; }).length;

    /* Var tar det stopp? Ärendenummer för dem som inte är klara. */
    ut.stannat = [0, 0, 0];
    rader.forEach(function (r) {
      if (r.kampanjKlar) return;
      var a = LESS.clamp(r.kampanjArende || 0, 0, 2);
      ut.stannat[a] += 1;
    });

    /* Vilka principer ligger kvar i kön hos flest? Det är den enda
       innehållsliga signalen som är värd något i aggregat. */
    var ko = {};
    rader.forEach(function (r) {
      (r.kvarIKo || []).forEach(function (p) { ko[p] = (ko[p] || 0) + 1; });
    });
    ut.principer = Object.keys(ko)
      .map(function (p) { return { id: p, n: ko[p] }; })
      .sort(function (a, b) { return b.n - a.n; })
      .slice(0, 6);

    /* Betygsfördelning över alla möten. */
    ut.betyg = ['guld', 'silver', 'brons', 'omtag'].map(function (b) {
      return { namn: b, n: rader.reduce(function (s, r) { return s + (r[b] || 0); }, 0) };
    });
    return ut;
  }

  /* ---------------- texter ---------------- */

  function vadSomSamlas() {
    return '<p>Spelet skickar en rad om hur det används till den delade lagringen. ' +
           'Raden innehåller:</p>' +
           '<ul>' +
           '<li>ett slumpat id som skapas i din webbläsare</li>' +
           '<li>vilket datum du började och senast spelade – utan klockslag</li>' +
           '<li>hur många möten du gjort och hur de bedömdes</li>' +
           '<li>hur långt i kampanjen du kommit</li>' +
           '<li>vilka principer som ligger kvar i din repetitionskö</li>' +
           '</ul>' +
           '<p>Den innehåller <b>inte</b> ditt namn, din roll, vad du svarat i ett enskilt ' +
           'val, eller när på dygnet du spelat.</p>' +
           '<p>Signaturen du kan skriva på frågeplanscherna hör till en annan lagring och ' +
           'ett annat id. De två går inte att koppla ihop.</p>' +
           '<p>Siffrorna visas sammanräknade på anslagstavlan, och först när minst ' +
           MINSTA_N + ' personer svarat – annars går de att räkna bakåt till en person.</p>' +
           '<p>Allt som sparas i den delade lagringen kan läsas av alla som öppnar spelet. ' +
           'Det finns ingen privat lagring här.</p>';
  }

  LESS.statistik = {
    rapportera: rapportera,
    hamta: hamta,
    cache: function () { return cache; },
    avstangd: avstangd,
    stangAv: stangAv,
    harFragats: harFragats,
    vadSomSamlas: vadSomSamlas,
    minstaN: MINSTA_N
  };

})(window);
