/* overgang.js – spiralövergången ("swirl")

   Game Boy-spelen kunde inte tona ner en bild pixel för pixel. Det de gjorde
   i stället var att fylla skärmen med bakgrundsrutor i en spiral utifrån och
   in. Effekten är billig, tydlig och omedelbart igenkännbar – och den säger
   något den vanliga toningen inte säger: nu byter vi läge, inte bara rum.

   Här används den när spelaren byter roll mitt i ett ärende: utredningen är
   klar, läkaren är hämtad, och den man styr är plötsligt någon annan.        */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  var BLOCK = 8;                       /* 8x8 = 20 x 18 rutor på GB-skärmen */
  var KOL = 160 / BLOCK, RAD = 144 / BLOCK;
  var TOTALT = KOL * RAD;

  /* Rektangulär spiral utifrån och in – exakt den ordning rutorna fylls i. */
  var ORDNING = (function () {
    var ut = [], x0 = 0, y0 = 0, x1 = KOL - 1, y1 = RAD - 1, x, y;
    while (x0 <= x1 && y0 <= y1) {
      for (x = x0; x <= x1; x++) ut.push(x + y0 * KOL);
      for (y = y0 + 1; y <= y1; y++) ut.push(x1 + y * KOL);
      if (y1 > y0) for (x = x1 - 1; x >= x0; x--) ut.push(x + y1 * KOL);
      if (x1 > x0) for (y = y1 - 1; y > y0; y--) ut.push(x0 + y * KOL);
      x0++; y0++; x1--; y1--;
    }
    return ut;
  })();

  function ritaSpiral(c, antal, farg) {
    if (antal <= 0) return;
    c.fillStyle = farg;
    var n = Math.min(antal, TOTALT), i, r;
    for (i = 0; i < n; i++) {
      r = ORDNING[i];
      c.fillRect((r % KOL) * BLOCK, ((r / KOL) | 0) * BLOCK, BLOCK, BLOCK);
    }
  }

  /* Samma spiral baklänges: rutorna som ligger kvar är de som ännu inte
     avtäckts, så den nya bilden växer fram inifrån och ut. */
  function ritaSpiralKvar(c, antal, farg) {
    c.fillStyle = farg;
    var i, r;
    for (i = antal; i < TOTALT; i++) {
      r = ORDNING[i];
      c.fillRect((r % KOL) * BLOCK, ((r / KOL) | 0) * BLOCK, BLOCK, BLOCK);
    }
  }

  /* swirl(mitt, klar): spiralen fyller skärmen, mitt() byter scen bakom den,
     och spiralen släpper sedan fram det nya. mitt() får alltså ändra allt –
     roll, figurer, position – utan att en enda bildruta läcker igenom.      */
  function swirl(mitt, klar, opts) {
    opts = opts || {};
    var farg = opts.farg || '#10100c';
    var in_ = opts.in == null ? 620 : opts.in;      /* ms att fylla */
    var hall = opts.hall == null ? 220 : opts.hall; /* ms svart */
    var ut = opts.ut == null ? 560 : opts.ut;       /* ms att avtäcka */

    var forra = LESS.getScene();
    var t0 = null, fas = 0, mittKord = false;

    var scen = {
      draw: function (c, t) {
        if (t0 === null) t0 = t;
        var d = t - t0;

        if (fas === 0) {
          if (forra && forra.draw) forra.draw(c, t);
          ritaSpiral(c, Math.ceil((d / in_) * TOTALT), farg);
          if (d >= in_) { fas = 1; t0 = t; }
          return;
        }
        if (fas === 1) {
          c.fillStyle = farg; c.fillRect(0, 0, 160, 144);
          if (!mittKord) {
            mittKord = true;
            if (mitt) mitt();
            /* Satte mitt() en egen scen är det den som ska avtäckas. Rörde
               den inte scenen ligger den gamla kvar – och att läsa tillbaka
               den här utan kontroll skulle göra spiralen till sin egen
               bakgrund, det vill säga oändlig rekursion. */
            var ny = LESS.getScene();
            if (ny && ny !== scen) forra = ny;
            LESS.setScene(scen);
          }
          if (d >= hall) { fas = 2; t0 = t; }
          return;
        }
        if (forra && forra.draw) forra.draw(c, t);
        ritaSpiralKvar(c, Math.ceil((d / ut) * TOTALT), farg);
        if (d >= ut) {
          fas = 3;
          LESS.setScene(forra);
          if (klar) klar();
        }
      }
    };

    LESS.setScene(scen);
  }

  LESS.swirl = swirl;
  LESS.swirlOrdning = ORDNING;

})(window);
