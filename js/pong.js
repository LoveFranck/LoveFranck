/* pong.js – skyddsrummets pingisbord (easter egg)

   En liten Pong-variant i Game Boy-format. Fyra motståndare med fallande
   svårighetsgrad: Sam är svårast, John lättast. Skillnaden ligger i tre
   saker som var för sig känns rättvisa i stället för orättvisa:

     fart      – hur snabbt racketen orkar följa med
     miss      – hur många pixlar fel motståndaren siktar
     reaktion  – hur långt bollen hunnit innan hen börjar röra sig

   Ingen av dem fuskar: racketen lyder samma regler som spelarens.
   Texten ritas med en egen 3x5-pixelfont så att rutan håller ihop med
   resten av spelet – ingen systemfont i canvasen.                          */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  var W = 160, H = 144;
  var PLAN_Y = 24;                 /* spelplanens överkant (under poängraden) */
  var PLAN_H = H - PLAN_Y - 6;
  var PADDEL_H = 24, PADDEL_B = 3;
  var MAL = 5;                     /* först till fem bollar */

  var MOTSTANDARE = [
    { id: 'sam',    namn: 'Sam',    fart: 2.30, miss: 2,  reaktion: 0.05,
      rykte: 'Spelade seriepingis. Ler inte förrän det står 5–0.' },
    { id: 'martin', namn: 'Martin', fart: 1.75, miss: 6,  reaktion: 0.22,
      rykte: 'Bra hand, dålig uppvärmning. Vinner om du slarvar.' },
    { id: 'filip',  namn: 'Filip',  fart: 1.35, miss: 11, reaktion: 0.38,
      rykte: 'Byter grepp mellan varje boll. Går att läsa.' },
    { id: 'john',   namn: 'John',   fart: 1.00, miss: 17, reaktion: 0.55,
      rykte: 'Hittade bollen under bordet. Lovar ingenting.' }
  ];

  /* ---------------- 3x5-font ---------------- */

  var GLYF = {
    A: '###:#.#:###:#.#:#.#', B: '##.:#.#:##.:#.#:##.', C: '###:#..:#..:#..:###',
    D: '##.:#.#:#.#:#.#:##.', E: '###:#..:##.:#..:###', F: '###:#..:##.:#..:#..',
    G: '###:#..:#.#:#.#:###', H: '#.#:#.#:###:#.#:#.#', I: '###:.#.:.#.:.#.:###',
    J: '..#:..#:..#:#.#:###', K: '#.#:#.#:##.:#.#:#.#', L: '#..:#..:#..:#..:###',
    M: '#.#:###:###:#.#:#.#', N: '##.:#.#:#.#:#.#:#.#', O: '###:#.#:#.#:#.#:###',
    P: '###:#.#:###:#..:#..', Q: '###:#.#:#.#:###:..#', R: '###:#.#:##.:#.#:#.#',
    S: '###:#..:###:..#:###', T: '###:.#.:.#.:.#.:.#.', U: '#.#:#.#:#.#:#.#:###',
    V: '#.#:#.#:#.#:#.#:.#.', W: '#.#:#.#:###:###:#.#', X: '#.#:#.#:.#.:#.#:#.#',
    Y: '#.#:#.#:.#.:.#.:.#.', Z: '###:..#:.#.:#..:###',
    '0': '###:#.#:#.#:#.#:###', '1': '.#.:##.:.#.:.#.:###', '2': '###:..#:###:#..:###',
    '3': '###:..#:###:..#:###', '4': '#.#:#.#:###:..#:..#', '5': '###:#..:###:..#:###',
    '6': '###:#..:###:#.#:###', '7': '###:..#:..#:..#:..#', '8': '###:#.#:###:#.#:###',
    '9': '###:#.#:###:..#:###',
    '-': '...:...:###:...:...', ':': '...:.#.:...:.#.:...',
    '!': '.#.:.#.:.#.:...:.#.', '?': '###:..#:.##:...:.#.',
    '.': '...:...:...:...:.#.', ',': '...:...:...:.#.:#..',
    '/': '..#:..#:.#.:#..:#..'
  };
  /* Prickar ovanför: Å en, Ä och Ö två. */
  var PRICK = { 'Å': ['A', 1], 'Ä': ['A', 2], 'Ö': ['O', 2] };

  function bredd(s) { return s.length * 4 - 1; }

  function skriv(c, s, x, y, farg) {
    c.fillStyle = farg;
    s = String(s).toUpperCase();
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i), gx = x + i * 4, p = PRICK[ch];
      if (p) { 
        if (p[1] === 1) c.fillRect(gx + 1, y - 2, 1, 1);
        else { c.fillRect(gx, y - 2, 1, 1); c.fillRect(gx + 2, y - 2, 1, 1); }
        ch = p[0];
      }
      var g = GLYF[ch];
      if (!g) continue;
      var rader = g.split(':');
      for (var r = 0; r < 5; r++) {
        for (var k = 0; k < 3; k++) {
          if (rader[r].charAt(k) === '#') c.fillRect(gx + k, y + r, 1, 1);
        }
      }
    }
  }
  LESS.pixelText = skriv;
  LESS.pixelBredd = bredd;

  /* ---------------- matchens tillstånd ---------------- */

  var G = null, handler = null, slutfor = null;

  function nyMatch(m) {
    return {
      mot: m, avvikelse: 0,
      py: PLAN_Y + (PLAN_H - PADDEL_H) / 2,
      oy: PLAN_Y + (PLAN_H - PADDEL_H) / 2,
      bx: W / 2, by: PLAN_Y + PLAN_H / 2,
      vx: 0, vy: 0,
      poang: 0, motpoang: 0,
      lage: 'serve',               /* serve | spel | slut */
      servaMot: false,
      slag: 0, sistT: 0, text: null
    };
  }

  function serva() {
    G.bx = W / 2; G.by = PLAN_Y + PLAN_H / 2;
    G.slag = 0;
    G.vx = (G.servaMot ? 1 : -1) * 1.6;
    G.vy = Math.random() * 1.4 - 0.7;
    nyAvvikelse();
    G.lage = 'spel';
  }

  function nyAvvikelse() {
    G.avvikelse = (Math.random() * 2 - 1) * G.mot.miss;
  }

  /* ---------------- simulering ---------------- */

  function stegPaddel(dt) {
    var d = LESS.input.held, fart = 2.6 * dt;
    if (d.up) G.py -= fart;
    if (d.down) G.py += fart;
    G.py = LESS.clamp(G.py, PLAN_Y, PLAN_Y + PLAN_H - PADDEL_H);

    var m = G.mot;
    var mitt = G.oy + PADDEL_H / 2;
    var mal, steg = m.fart * dt;
    if (G.vx > 0) {
      /* bollen är på väg mot motståndaren – hen rör sig först när den
         hunnit förbi sin reaktionströskel */
      if (G.bx / W < m.reaktion) return;
      mal = G.by + G.avvikelse;
    } else {
      /* bollen på väg bort: gå långsamt tillbaka mot mitten */
      mal = PLAN_Y + PLAN_H / 2;
      steg *= 0.45;
    }
    var diff = mal - mitt;
    if (Math.abs(diff) < steg) G.oy += diff;
    else G.oy += diff > 0 ? steg : -steg;
    G.oy = LESS.clamp(G.oy, PLAN_Y, PLAN_Y + PLAN_H - PADDEL_H);
  }

  function studs(pady, motHoger) {
    var rel = LESS.clamp((G.by + 1.5 - (pady + PADDEL_H / 2)) / (PADDEL_H / 2), -1, 1);
    G.slag += 1;
    var fart = Math.min(1.6 + G.slag * 0.10, 3.3);
    G.vx = (motHoger ? 1 : -1) * fart * (1 - Math.abs(rel) * 0.26);
    G.vy = rel * fart * 0.72;
    if (motHoger) nyAvvikelse();
    LESS.sfx('studs');
  }

  function poang(tillMot) {
    if (tillMot) G.motpoang += 1; else G.poang += 1;
    LESS.sfx(tillMot ? 'cold' : 'warm');
    G.servaMot = tillMot;
    if (G.poang >= MAL || G.motpoang >= MAL) { avsluta(); return; }
    G.lage = 'serve';
    G.bx = W / 2; G.by = PLAN_Y + PLAN_H / 2; G.vx = 0; G.vy = 0;
  }

  function stegBoll(dt) {
    G.bx += G.vx * dt;
    G.by += G.vy * dt;

    if (G.by <= PLAN_Y) { G.by = PLAN_Y; G.vy = -G.vy; LESS.sfx('kant'); }
    if (G.by >= PLAN_Y + PLAN_H - 3) { G.by = PLAN_Y + PLAN_H - 3; G.vy = -G.vy; LESS.sfx('kant'); }

    if (G.vx < 0 && G.bx <= 8 + PADDEL_B && G.bx >= 2) {
      if (G.by + 3 >= G.py && G.by <= G.py + PADDEL_H) { G.bx = 8 + PADDEL_B; studs(G.py, true); }
    }
    if (G.vx > 0 && G.bx + 3 >= W - 11 && G.bx <= W - 5) {
      if (G.by + 3 >= G.oy && G.by <= G.oy + PADDEL_H) { G.bx = W - 14; studs(G.oy, false); }
    }

    if (G.bx < -6) poang(true);
    else if (G.bx > W + 6) poang(false);
  }

  /* ---------------- rendering ---------------- */

  function R(c, x, y, w, h, f) { c.fillStyle = f; c.fillRect(x | 0, y | 0, w | 0, h | 0); }

  var scene = {
    draw: function (c, t) {
      if (!G) return;
      var dt = G.sistT ? Math.min((t - G.sistT) / 16.7, 3) : 1;
      G.sistT = t;
      if (G.lage === 'spel') { stegPaddel(dt); stegBoll(dt); }
      else if (G.lage === 'serve') stegPaddel(dt);

      var i;
      R(c, 0, 0, W, H, '#8e8e88');
      R(c, 0, PLAN_Y - 3, W, PLAN_H + 6, '#123f28');
      R(c, 2, PLAN_Y, W - 4, PLAN_H, '#1c5c3a');
      R(c, 2, PLAN_Y, W - 4, 1, '#2a7a4e');
      R(c, 2, PLAN_Y + PLAN_H - 1, W - 4, 1, '#2a7a4e');
      for (i = PLAN_Y + 2; i < PLAN_Y + PLAN_H - 2; i += 6) R(c, W / 2 - 1, i, 2, 4, '#e8e8e0');

      /* poängrad */
      R(c, 0, 0, W, PLAN_Y - 3, '#20201c');
      skriv(c, 'DU', 5, 5, '#f8e070');
      skriv(c, String(G.poang), 5, 13, '#f8f8f0');
      var n = G.mot.namn;
      skriv(c, n, W - 5 - bredd(n), 5, '#75d8c7');
      skriv(c, String(G.motpoang), W - 5 - bredd('0'), 13, '#f8f8f0');
      var mid = 'FÖRST TILL ' + MAL;
      skriv(c, mid, (W - bredd(mid)) / 2, 9, '#8a9a96');

      R(c, 8, G.py, PADDEL_B, PADDEL_H, '#f8e070');
      R(c, W - 11, G.oy, PADDEL_B, PADDEL_H, '#75d8c7');
      R(c, G.bx, G.by, 3, 3, '#f8f8f0');

      if (G.lage === 'serve' && ((t / 400) | 0) % 2 === 0) {
        var s = 'TRYCK A';
        skriv(c, s, (W - bredd(s)) / 2, PLAN_Y + PLAN_H / 2 - 3, '#f8f8f0');
      }
      if (G.text) {
        var by = PLAN_Y + PLAN_H / 2 - 13;
        R(c, 10, by, W - 20, 26, '#20201c');
        R(c, 11, by + 1, W - 22, 24, '#f8f8f0');
        skriv(c, G.text[0], (W - bredd(G.text[0])) / 2, by + 6, '#20201c');
        if (G.text[1]) skriv(c, G.text[1], (W - bredd(G.text[1])) / 2, by + 15, '#20201c');
      }
    }
  };

  /* ---------------- slut ---------------- */

  function avsluta() {
    G.lage = 'slut';
    var vann = G.poang > G.motpoang;
    var d = LESS.state.data;
    if (!d.pingis) d.pingis = { hittat: true, vinster: {}, forluster: {} };
    var bok = vann ? d.pingis.vinster : d.pingis.forluster;
    bok[G.mot.id] = (bok[G.mot.id] || 0) + 1;
    LESS.state.spara();
    LESS.sfx(vann ? 'done' : 'fail');
    G.text = vann
      ? ['DU VANN', G.poang + '-' + G.motpoang + ' MOT ' + G.mot.namn]
      : [G.mot.namn + ' VANN', G.motpoang + '-' + G.poang];
  }

  function stang() {
    if (handler) { LESS.input.pop(handler); handler = null; }
    G = null;
    var k = slutfor; slutfor = null;
    if (k) k();
  }

  /* ---------------- start ---------------- */

  function start(motId, klar) {
    slutfor = klar;
    var m = null;
    for (var i = 0; i < MOTSTANDARE.length; i++) if (MOTSTANDARE[i].id === motId) m = MOTSTANDARE[i];
    G = nyMatch(m || MOTSTANDARE[3]);
    nyAvvikelse();
    LESS.setScene(scene);
    if (handler) LESS.input.pop(handler);
    handler = LESS.input.push(function (k) {
      if (!G) return;
      if (k === 'b' || k === 'meny') { LESS.sfx('back'); stang(); return; }
      if (k !== 'a') return;
      if (G.lage === 'serve') { LESS.sfx('ok'); serva(); }
      else if (G.lage === 'slut') stang();
    });
  }

  LESS.pong = { motstandare: MOTSTANDARE, start: start };

})(window);
