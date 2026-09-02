/* map.js – vårdcentralens planlösning (32 x 22 rutor à 16 px) */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  /* Teckenlegend:
     ^ takkant   # vägg    W fönster  G innerfönster  P affisch
     L logotypskylt (Forsåker)
     H hylla     B tavla   D dörr     E utgång
     .  korridorgolv   (blank) rumsgolv
     d skrivbord  c skrivbord m. dator   x disk   h stol
     b bänk       p växt    e brits      k skåp   r matta        */

  var ROWS = [
    /* 0 */ '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
    /* 1 */ '#W##L##B##W##P#H#W##P##B##W#P#H#',
    /* 2 */ '#  cd     #  cd     #  cd     #  cd  #',
    /* 3 */ '#    h    #     h   #     h   #    h #',
    /* 4 */ '#         #         #         #      #',
    /* 5 */ '#  h      #  h      # ee      # ee   #',
    /* 6 */ '# p     k # p     k # p     k # p   k#',
    /* 7 */ '#         #         #         #      #',
    /* 8 */ '#         #         #         #      #',
    /* 9 */ '####D####B##D#######D######D####',
    /*10 */ '#p............................p#',
    /*11 */ '#..............................#',
    /*12 */ '#..............................#',
    /*13 */ '##L##D#########D#########D###H##',
    /*14 */ '#xxx     p#  cd    p#  cd     p#',
    /*15 */ '#         #    h    #     h    #',
    /*16 */ '# bbb  bbb#         #  dd      #',
    /*17 */ '#         #  h      #          #',
    /*18 */ '# bbb  bbb# p      k# p      k #',
    /*19 */ '#p       p#         #          #',
    /*20 */ '#####E##########################',
    /*21 */ '################################'
  ];

  /* Raderna 2–8 skrivs rumsvis för läsbarhet – sätt ihop dem här så att
     varje rad garanterat blir 32 tecken bred. */
  function room(a, b, c, d) { return '#' + a + '#' + b + '#' + c + '#' + d + '#'; }
  ROWS[2] = room('  cd   ', '  cd   ', '  cd   ', '  cd  ');
  ROWS[3] = room('     h ', '     h ', '     h ', '    h ');
  ROWS[4] = room('       ', '       ', '       ', '      ');
  ROWS[5] = room('  h    ', '  h    ', ' ee    ', ' ee   ');
  ROWS[6] = room(' p    k', ' p    k', ' p    k', ' p   k');
  ROWS[7] = room('       ', '       ', '       ', '      ');
  ROWS[8] = room('       ', '       ', '       ', '      ');

  var W = 32, H = ROWS.length;

  /* Kontroll: alla rader måste vara exakt 32 tecken. */
  (function validate() {
    for (var i = 0; i < ROWS.length; i++) {
      if (ROWS[i].length !== W) {
        throw new Error('Kartrad ' + i + ' är ' + ROWS[i].length + ' tecken, ska vara ' + W);
      }
    }
  })();

  var TILE_OF = {
    '^': 'wallTop', '#': 'wall', 'W': 'window', 'G': 'wallGlass', 'P': 'poster',
    'H': 'shelf', 'B': 'board', 'D': 'door', 'E': 'doorSign', 'L': 'logga',
    '.': 'floor2', ' ': 'floor', 'r': 'carpet', 'u': 'rug',
    'd': 'desk', 'c': 'deskPc', 'x': 'counter', 'h': 'chair',
    'b': 'bench', 'p': 'plant', 'e': 'brits', 'k': 'cabinet'
  };

  var WALKABLE = { ' ': 1, '.': 1, 'D': 1, 'E': 1, 'r': 1, 'u': 1 };

  function at(x, y) {
    if (x < 0 || y < 0 || x >= W || y >= H) return '#';
    return ROWS[y].charAt(x);
  }

  /* ---------------- stationer (tryck A mot dessa) ---------------- */
  var STATIONS = [
    { id: 'ssk',              x: 3,  y: 2,  role: 'ssk' },
    { id: 'psykolog',         x: 11, y: 2,  role: 'psykolog' },
    { id: 'fysioterapeut',    x: 19, y: 2,  role: 'fysioterapeut' },
    { id: 'lakare',           x: 27, y: 2,  role: 'lakare' },
    { id: 'rehabkoordinator', x: 13, y: 14, role: 'rehabkoordinator' },
    { id: 'arbetsterapeut',   x: 23, y: 14, role: 'arbetsterapeut' },
    { id: 'handbok',          x: 29, y: 13, kind: 'handbok' },
    { id: 'anslagstavla',     x: 9,  y: 9,  kind: 'tavla' },
    { id: 'reception',        x: 2,  y: 14, kind: 'reception' },
    { id: 'utgang',           x: 5,  y: 20, kind: 'utgang' }
  ];

  /* ---------------- dörrskyltar ---------------- */
  var LABELS = [
    { x: 4,  y: 9,  text: 'TRIAGE' },
    { x: 12, y: 9,  text: 'PSYKOLOG' },
    { x: 20, y: 9,  text: 'FYSIO' },
    { x: 27, y: 9,  text: 'LÄKARE' },
    { x: 5,  y: 13, text: 'VÄNTRUM' },
    { x: 15, y: 13, text: 'REHABKOORD.' },
    { x: 25, y: 13, text: 'ARBETSTER.' }
  ];

  LESS.map = {
    W: W, H: H, rows: ROWS,
    tileOf: function (ch) { return TILE_OF[ch] || 'floor'; },
    at: at,
    walkable: function (x, y) { return !!WALKABLE[at(x, y)]; },
    stations: STATIONS,
    labels: LABELS,
    start: { x: 5, y: 17, dir: 'up' }
  };

})(window);
