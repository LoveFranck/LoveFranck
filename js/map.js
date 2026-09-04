/* map.js – vårdcentralens planlösning (32 x 35 rutor à 16 px)
   Raderna 0–21 är huset. 22–34 är skyddsrummet under det, som inte går
   att se från huset – man kommer dit genom skynket i korridorens ände. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  /* Teckenlegend:
     ^ takkant   # vägg    W fönster  G innerfönster  P affisch
     L logotypskylt (Forsåker)   F frågeplansch
     H hylla     B tavla   D dörr     E utgång
     .  korridorgolv   (blank) rumsgolv
     d skrivbord  c skrivbord m. dator   x disk   h stol
     b bänk       p växt    e brits      k skåp   r matta
     S tygskynke  C betong   g betonggolv q pingisbord  n bordets mitt
     T topplistan på skyddsrummets vägg                                 */

  var ROWS = [
    /* 0 */ '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
    /* 1 */ '#W##L##F##W##P#F#W##P##F##W#P#F#',
    /* 2 */ '#  cd     #  cd     #  cd     #  cd  #',
    /* 3 */ '#    h    #     h   #     h   #    h #',
    /* 4 */ '#         #         #         #      #',
    /* 5 */ '#  h      #  h      # ee      # ee   #',
    /* 6 */ '# p     k # p     k # p     k # p   k#',
    /* 7 */ '#         #         #         #      #',
    /* 8 */ '#         #         #         #      #',
    /* 9 */ '####D####B##D#######D######D####',
    /*10 */ '#p............................p#',
    /*11 */ '#..............................S',
    /*12 */ '#..............................#',
    /*13 */ '##L##D#########D#F#######D#F#H##',
    /*14 */ '#xxx     p#  cd    p#  cd     p#',
    /*15 */ '#         #    h    #     h    #',
    /*16 */ '# bbb  bbb#         #  dd      #',
    /*17 */ '#         #  h      #          #',
    /*18 */ '# bbb  bbb# p      k# p      k #',
    /*19 */ '#p       p#         #          #',
    /*20 */ '#####E##########################',
    /*21 */ '################################',

    /* Under huset ligger skyddsrummet. Raderna 22–26 är massiv betong och
       fungerar som buffert: kameran når aldrig ner till rad 27 uppifrån, så
       rummet syns inte på kartan förrän man klivit in genom skynket.       */
    /*22 */ 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
    /*23 */ 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
    /*24 */ 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
    /*25 */ 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
    /*26 */ 'CCCCCCCCCCCCCTCCCCCCCCCCCCCCCCCC',
    /*27 */ 'CCCCCCCCCCggggggggggggCCCCCCCCCC',
    /*28 */ 'CCCCCCCCCCggggggggggggCCCCCCCCCC',
    /*29 */ 'CCCCCCCCCCggggggggggggCCCCCCCCCC',
    /*30 */ 'CCCCCCCCCCgggqqnqqggggCCCCCCCCCC',
    /*31 */ 'CCCCCCCCCCggggggggggggCCCCCCCCCC',
    /*32 */ 'CCCCCCCCCCggggggggggggCCCCCCCCCC',
    /*33 */ 'CCCCCCCCCCCCCCCCSCCCCCCCCCCCCCCC',
    /*34 */ 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
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
    'F': 'plansch',
    '.': 'floor2', ' ': 'floor', 'r': 'carpet', 'u': 'rug',
    'd': 'desk', 'c': 'deskPc', 'x': 'counter', 'h': 'chair',
    'b': 'bench', 'p': 'plant', 'e': 'brits', 'k': 'cabinet',
    'S': 'skynke', 'C': 'betong', 'g': 'betonggolv',
    'q': 'pingis', 'n': 'pingisnat', 'T': 'topplista'
  };

  var WALKABLE = { ' ': 1, '.': 1, 'D': 1, 'E': 1, 'r': 1, 'u': 1, 'g': 1 };

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
    { id: 'utgang',           x: 5,  y: 20, kind: 'utgang' },

    /* Frågeplanscher: en i varje professions rum. Här skattar verklig
       personal hur vanligt förekommande rådgivarnas antaganden faktiskt är. */
    { id: 'plansch-ssk',    x: 7,  y: 1,  kind: 'plansch', roll: 'ssk' },
    { id: 'plansch-psy',    x: 15, y: 1,  kind: 'plansch', roll: 'psykolog' },
    { id: 'plansch-fys',    x: 23, y: 1,  kind: 'plansch', roll: 'fysioterapeut' },
    { id: 'plansch-lak',    x: 30, y: 1,  kind: 'plansch', roll: 'lakare' },
    { id: 'plansch-rko',    x: 17, y: 13, kind: 'plansch', roll: 'rehabkoordinator' },
    { id: 'plansch-arb',    x: 27, y: 13, kind: 'plansch', roll: 'arbetsterapeut' },

    /* Skyddsrummet: skynket i korridorens ände och vägen tillbaka. */
    { id: 'skynke-in',  x: 31, y: 11, kind: 'skynke', till: { x: 16, y: 32, dir: 'up' } },
    { id: 'skynke-ut',  x: 16, y: 33, kind: 'skynke', till: { x: 30, y: 11, dir: 'left' } },
    { id: 'topplista',  x: 13, y: 26, kind: 'topplista' }
  ];

  /* Pingisbordet upptar rad 30, kolumn 13–17. Vilken bordsruta man än står
     vänd mot ska A starta en match. */
  for (var pq = 13; pq <= 17; pq++) {
    STATIONS.push({ id: 'pingis' + pq, x: pq, y: 30, kind: 'pingis' });
  }

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
