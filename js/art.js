/* art.js – all grafik ritas i kod (inga bildfiler).
   Allt sker i en 160x144-buffert med 16x16-rutor, precis som på GBC. */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  var TS = 16;                       /* rutstorlek */
  LESS.TS = TS;

  /* ---------------- palett ---------------- */
  var P = {
    ink:      '#181410',
    line:     '#3a3630',
    floor:    '#eae2c8', floorD:  '#e0d7b8', floorL: '#f4eeda',
    carpet:   '#c07868', carpetD: '#a05e50',
    wall:     '#d8e2ea', wallD:   '#7d909c', wallSh: '#adc0cc',
    wood:     '#b0803c', woodD:   '#8a6028', woodL:  '#d0a060',
    steel:    '#b8bcc4', steelD:  '#888e98',
    glass:    '#a8d0e8', glassD:  '#78a8c8',
    green:    '#58a058', greenD:  '#3c7a3c',
    white:    '#f8f8f0',
    red:      '#c04838', blue: '#4870b0', sky: '#88c0e8',
    grass:    '#78b058', grassD: '#5c9040',
    shadow:   'rgba(24,20,16,.20)',
    /* Forsåker vårdcentrals profilfärger, hämtade ur logotypfilen */
    markDark: '#00443c', markMint: '#75d8c7',
    markMintD:'#4fae9e', markMintL:'#a6e8dd'
  };
  LESS.PAL = P;

  function R(c, x, y, w, h, col) { c.fillStyle = col; c.fillRect(x | 0, y | 0, w | 0, h | 0); }

  /* ---------------- rutor ---------------- */
  /* Varje ritfunktion får (ctx, ox, oy) och ritar 16x16 pixlar. */
  var TILE = {

    floor: function (c, x, y) {              /* klinker i schackmönster */
      R(c, x, y, 16, 16, P.floor);
      R(c, x, y, 8, 8, P.floorL);
      R(c, x + 8, y + 8, 8, 8, P.floorL);
      R(c, x + 7, y, 1, 16, P.floorD);
      R(c, x, y + 7, 16, 1, P.floorD);
    },

    floor2: function (c, x, y) {              /* korridorvinyl med tunna fogar */
      R(c, x, y, 16, 16, P.floorL);
      R(c, x, y + 7, 16, 1, P.floor);
      R(c, x, y + 15, 16, 1, P.floor);
      R(c, x + 3, y + 3, 1, 1, P.floorD);
      R(c, x + 11, y + 11, 1, 1, P.floorD);
    },

    carpet: function (c, x, y) {
      R(c, x, y, 16, 16, P.carpet);
      R(c, x, y, 16, 1, P.carpetD); R(c, x, y + 15, 16, 1, P.carpetD);
      R(c, x + 3, y + 3, 10, 10, P.carpetD);
      R(c, x + 5, y + 5, 6, 6, P.carpet);
    },

    wall: function (c, x, y) {
      R(c, x, y, 16, 16, P.wall);
      R(c, x, y, 16, 3, P.wallSh);          /* taklist */
      R(c, x, y + 3, 16, 1, '#c3d2dc');
      R(c, x, y + 12, 16, 4, P.wallD);      /* golvlist */
      R(c, x, y + 12, 16, 1, '#5f727e');
      R(c, x + 7, y + 4, 1, 8, '#cbd8e2');  /* panelfog */
    },

    wallTop: function (c, x, y) {            /* mörk överkant mot taket */
      R(c, x, y, 16, 16, P.wallSh);
      R(c, x, y, 16, 4, '#6d8290');
      R(c, x, y + 14, 16, 2, '#c3d2dc');
    },

    wallGlass: function (c, x, y) {          /* innerfönster */
      R(c, x, y, 16, 16, P.wall);
      R(c, x + 1, y + 3, 14, 9, P.line);
      R(c, x + 2, y + 4, 12, 7, P.glass);
      R(c, x + 2, y + 4, 5, 3, P.glassD);
      R(c, x + 8, y + 4, 1, 7, P.line);
      R(c, x, y + 14, 16, 2, P.wallD);
    },

    window: function (c, x, y) {             /* fönster mot gatan */
      R(c, x, y, 16, 16, P.wall);
      R(c, x + 1, y + 2, 14, 11, P.line);
      R(c, x + 2, y + 3, 12, 9, P.sky);
      R(c, x + 2, y + 3, 12, 3, '#a8d8f0');
      R(c, x + 2, y + 9, 12, 3, P.grass);
      R(c, x + 8, y + 3, 1, 9, P.line);
      R(c, x + 2, y + 7, 12, 1, P.line);
      R(c, x, y + 14, 16, 2, P.wallD);
    },

    door: function (c, x, y) {
      R(c, x, y, 16, 16, P.wall);
      R(c, x + 1, y + 1, 14, 15, P.woodD);
      R(c, x + 2, y + 2, 12, 13, P.wood);
      R(c, x + 3, y + 3, 10, 5, P.woodL);
      R(c, x + 12, y + 9, 2, 2, P.steel);
    },

    doorSign: function (c, x, y) {           /* dörr med skylt ovanför */
      TILE.door(c, x, y);
      R(c, x + 2, y, 12, 4, P.white);
      R(c, x + 2, y, 12, 1, P.ink);
      R(c, x + 3, y + 1, 4, 1, P.line); R(c, x + 8, y + 1, 5, 1, P.line);
      R(c, x + 3, y + 2, 8, 1, P.line);
    },

    desk: function (c, x, y) {
      TILE.floor(c, x, y);
      R(c, x, y + 3, 16, 9, P.woodD);
      R(c, x, y + 3, 16, 6, P.wood);
      R(c, x, y + 3, 16, 1, P.woodL);
      R(c, x + 1, y + 12, 2, 4, P.woodD);
      R(c, x + 13, y + 12, 2, 4, P.woodD);
    },

    deskPc: function (c, x, y) {
      TILE.desk(c, x, y);
      R(c, x + 3, y - 6, 10, 8, P.line);     /* skärm sticker upp */
      R(c, x + 4, y - 5, 8, 6, '#284858');
      R(c, x + 5, y - 4, 6, 2, P.glass);
      R(c, x + 5, y - 1, 4, 1, P.glassD);
      R(c, x + 7, y + 2, 2, 1, P.steelD);
    },

    counter: function (c, x, y) {            /* receptionsdisk */
      TILE.floor(c, x, y);
      R(c, x, y + 1, 16, 12, P.woodD);
      R(c, x, y + 1, 16, 8, P.wood);
      R(c, x, y + 1, 16, 2, P.woodL);
      R(c, x, y + 9, 16, 1, P.woodD);
    },

    chair: function (c, x, y) {
      TILE.floor(c, x, y);
      R(c, x + 4, y + 2, 8, 3, P.blue);
      R(c, x + 4, y + 5, 8, 5, '#38548c');
      R(c, x + 6, y + 10, 1, 4, P.steelD);
      R(c, x + 9, y + 10, 1, 4, P.steelD);
    },

    bench: function (c, x, y) {              /* väntrumsbänk */
      TILE.floor(c, x, y);
      R(c, x, y + 1, 16, 4, '#6a8ac0');
      R(c, x, y + 5, 16, 5, '#4870b0');
      R(c, x + 1, y + 10, 2, 4, P.steelD);
      R(c, x + 13, y + 10, 2, 4, P.steelD);
    },

    plant: function (c, x, y) {
      TILE.floor(c, x, y);
      R(c, x + 5, y + 9, 6, 6, P.woodD);
      R(c, x + 6, y + 10, 4, 4, P.wood);
      R(c, x + 7, y + 4, 2, 6, P.greenD);
      R(c, x + 3, y + 3, 4, 4, P.green);
      R(c, x + 9, y + 3, 4, 4, P.green);
      R(c, x + 6, y + 1, 4, 4, P.green);
      R(c, x + 4, y + 4, 1, 1, P.greenD); R(c, x + 11, y + 4, 1, 1, P.greenD);
    },

    brits: function (c, x, y) {              /* undersökningsbrits */
      TILE.floor(c, x, y);
      R(c, x, y + 2, 16, 9, P.steelD);
      R(c, x, y + 2, 16, 6, P.white);
      R(c, x, y + 2, 16, 1, '#d8e8f0');
      R(c, x + 1, y + 11, 2, 4, P.steelD);
      R(c, x + 13, y + 11, 2, 4, P.steelD);
    },

    shelf: function (c, x, y) {
      R(c, x, y, 16, 16, P.wall);
      R(c, x, y + 1, 16, 13, P.woodD);
      R(c, x + 1, y + 2, 14, 4, '#6a4a20');
      R(c, x + 1, y + 8, 14, 4, '#6a4a20');
      R(c, x + 2, y + 2, 2, 4, P.red); R(c, x + 5, y + 2, 2, 4, P.blue);
      R(c, x + 8, y + 2, 3, 4, P.green); R(c, x + 12, y + 2, 2, 4, P.gold || '#d8a828');
      R(c, x + 2, y + 8, 3, 4, P.blue); R(c, x + 6, y + 8, 2, 4, P.white);
      R(c, x + 9, y + 8, 2, 4, P.red);
    },

    poster: function (c, x, y) {
      R(c, x, y, 16, 16, P.wall);
      R(c, x + 2, y + 2, 12, 11, P.ink);
      R(c, x + 3, y + 3, 10, 9, '#f0e0a0');
      R(c, x + 4, y + 4, 8, 1, P.line);
      R(c, x + 4, y + 6, 6, 1, P.line);
      R(c, x + 4, y + 8, 7, 1, P.line);
      R(c, x + 4, y + 10, 4, 1, P.red);
      R(c, x, y + 14, 16, 2, P.wallD);
    },

    cabinet: function (c, x, y) {
      TILE.floor(c, x, y);
      R(c, x + 1, y - 2, 14, 16, P.steelD);
      R(c, x + 2, y - 1, 12, 14, P.steel);
      R(c, x + 2, y + 3, 12, 1, P.steelD);
      R(c, x + 2, y + 8, 12, 1, P.steelD);
      R(c, x + 6, y + 1, 4, 1, P.line);
      R(c, x + 6, y + 6, 4, 1, P.line);
      R(c, x + 6, y + 11, 4, 1, P.line);
    },

    board: function (c, x, y) {              /* whiteboard */
      R(c, x, y, 16, 16, P.wall);
      R(c, x, y + 1, 16, 12, P.steelD);
      R(c, x + 1, y + 2, 14, 10, P.white);
      R(c, x + 2, y + 3, 7, 1, P.blue);
      R(c, x + 2, y + 5, 10, 1, P.line);
      R(c, x + 2, y + 7, 6, 1, P.line);
      R(c, x + 2, y + 9, 9, 1, P.red);
      R(c, x, y + 14, 16, 2, P.wallD);
    },

    logga: function (c, x, y) {              /* logotypmärket som skylt på vägg */
      R(c, x, y, 16, 16, P.wall);
      R(c, x, y, 16, 3, P.wallSh);
      R(c, x, y + 12, 16, 4, P.wallD);
      LESS.drawLogga(c, x, y, 1, false);
      /* tunn mörk kant så att skylten lossnar från väggen */
      R(c, x + 5, y, 6, 1, P.markDark);
      R(c, x + 5, y + 15, 6, 1, P.markDark);
      R(c, x, y + 5, 1, 6, P.markDark);
      R(c, x + 15, y + 5, 1, 6, P.markDark);
    },

    skynke: function (c, x, y) {           /* tygskynke i korridorens ände */
      R(c, x, y, 16, 16, '#5a6470');
      R(c, x, y, 16, 2, '#3a424c');
      var i;
      for (i = 0; i < 4; i++) {
        R(c, x + i * 4, y + 2, 3, 14, i % 2 ? '#6e7986' : '#616c78');
        R(c, x + i * 4 + 3, y + 2, 1, 14, '#4a535e');
      }
      R(c, x, y + 14, 16, 2, '#454e58');
    },

    betong: function (c, x, y) {           /* skyddsrummets väggar */
      R(c, x, y, 16, 16, '#8e8e88');
      R(c, x, y, 16, 3, '#a2a29a');
      R(c, x, y + 13, 16, 3, '#6e6e68');
      R(c, x + 3, y + 6, 4, 1, '#7c7c76');
      R(c, x + 10, y + 9, 3, 1, '#7c7c76');
    },

    betonggolv: function (c, x, y) {
      R(c, x, y, 16, 16, '#b4b0a4');
      R(c, x + 7, y, 1, 16, '#a8a498');
      R(c, x, y + 7, 16, 1, '#a8a498');
      R(c, x + 2, y + 11, 2, 1, '#a09c90');
    },

    pingis: function (c, x, y) {           /* pingisbord */
      TILE.betonggolv(c, x, y);
      R(c, x, y + 1, 16, 11, '#1c5c3a');
      R(c, x, y + 1, 16, 1, '#2a7a4e');
      R(c, x, y + 6, 16, 1, '#e8e8e0');
      R(c, x, y + 11, 16, 1, '#123f28');
      R(c, x + 1, y + 12, 2, 4, '#4a4a44');
      R(c, x + 13, y + 12, 2, 4, '#4a4a44');
    },

    pingisnat: function (c, x, y) {        /* bordets mittsektion med nät och racket */
      TILE.pingis(c, x, y);
      R(c, x + 7, y - 2, 2, 4, '#3a3a34');
      R(c, x + 2, y + 2, 4, 3, '#c04838');
      R(c, x + 3, y + 5, 1, 2, '#8a6a40');
      R(c, x + 10, y + 7, 4, 3, '#20303c');
      R(c, x + 11, y + 4, 1, 3, '#8a6a40');
      R(c, x + 7, y + 8, 2, 2, '#f8f8f0');
    },

    plansch: function (c, x, y) {          /* frågeplansch på väggen */
      R(c, x, y, 16, 16, P.wall);
      R(c, x, y, 16, 3, P.wallSh);
      R(c, x, y + 12, 16, 4, P.wallD);
      R(c, x + 1, y + 1, 14, 13, P.markDark);
      R(c, x + 2, y + 2, 12, 11, '#f4f8f6');
      /* rader med en skattningsstapel efter varje */
      R(c, x + 3, y + 3, 5, 1, '#8a9a96'); R(c, x + 9, y + 3, 4, 1, P.markMint);
      R(c, x + 3, y + 5, 6, 1, '#8a9a96'); R(c, x + 10, y + 5, 3, 1, P.markMint);
      R(c, x + 3, y + 7, 4, 1, '#8a9a96'); R(c, x + 8, y + 7, 5, 1, P.markMint);
      R(c, x + 3, y + 9, 6, 1, '#8a9a96'); R(c, x + 10, y + 9, 3, 1, P.markMint);
      R(c, x + 3, y + 11, 3, 1, P.markDark);
      /* penna på snöre */
      R(c, x + 13, y + 11, 1, 4, '#8a7050'); R(c, x + 13, y + 15, 1, 1, P.ink);
    },

    rug: function (c, x, y) {
      R(c, x, y, 16, 16, '#d8c8a0');
      R(c, x + 1, y + 1, 14, 14, '#c8b890');
    }
  };


  /* ---------------- Forsåker-märket ---------------- */
  /* Rund platta i mint med ett mörkgrönt F under ett tildetecken.
     Ritas på ett 16-enheters rutnät och skalas med heltal (k=1 → 16 px,
     k=2 → 32 px) så att pixlarna förblir kvadratiska.                */
  LESS.drawLogga = function (c, ox, oy, k, utanRing, glyfFarg) {
    k = k || 1;
    var mork = glyfFarg || P.markDark;
    var r = 8, cx = 8, cy = 8, y, dx, x0, w;

    function u(x, y, w, h, col) { R(c, ox + x * k, oy + y * k, w * k, h * k, col); }

    if (!utanRing) {
      for (y = 0; y < 16; y++) {
        dx = Math.floor(Math.sqrt(Math.max(0, r * r - (y - cy + 0.5) * (y - cy + 0.5))));
        x0 = cx - dx; w = dx * 2;
        if (w > 0) u(x0, y, w, 1, P.markMint);
      }
      /* liten dager uppe till vänster */
      u(4, 2, 3, 1, P.markMintL); u(3, 3, 2, 1, P.markMintL);
    }

    /* tilde */
    u(5, 3, 2, 1, mork);
    u(7, 2, 2, 1, mork);
    u(9, 3, 2, 1, mork);
    /* F: stam, övre arm och genomgående tvärslå */
    u(6, 5, 5, 2, mork);
    u(6, 5, 2, 8, mork);
    u(4, 8, 6, 2, mork);
  };

  /* ---------------- rut-atlas ---------------- */
  var atlas = null, atlasIndex = {};

  function buildAtlas() {
    var names = Object.keys(TILE);
    var cv = document.createElement('canvas');
    cv.width = names.length * TS;
    cv.height = TS + 8;                      /* extra rad för saker som sticker upp */
    var c = cv.getContext('2d');
    names.forEach(function (n, i) {
      atlasIndex[n] = i;
      c.save();
      c.translate(i * TS, 8);
      TILE[n](c, 0, 0);
      c.restore();
    });
    atlas = cv;
  }

  LESS.drawTile = function (ctx, name, x, y) {
    if (!atlas) buildAtlas();
    var i = atlasIndex[name];
    if (i == null) i = atlasIndex.floor;
    ctx.drawImage(atlas, i * TS, 0, TS, TS + 8, x, y - 8, TS, TS + 8);
  };

  /* ---------------- figurer (16x16, 4 riktningar) ---------------- */
  /* def: {skin, hair, hairStyle, uni, uni2, acc} */

  var SKIN = { ljus: '#f0c8a0', mellan: '#d09868', mork: '#8a5a38', mycketljus: '#f8d8b8' };
  var HAIR = { brun: '#6a4a28', mork: '#302820', blond: '#d8b060', rod: '#b05828', gra: '#a8a49c', vit: '#e0dcd4' };
  LESS.SKIN = SKIN; LESS.HAIR = HAIR;

  function drawChar(c, d, dir, frame) {
    var skin = d.skin || SKIN.ljus,
        hair = d.hair || HAIR.brun,
        uni = d.uni || '#f0f0e8',
        uni2 = d.uni2 || '#c8c8c0',
        acc = d.acc || '#4870b0',
        style = d.hairStyle || 'kort',
        ink = P.ink;
    var step = frame ? 1 : 0;

    /* skugga */
    c.fillStyle = P.shadow; c.fillRect(3, 15, 10, 1);

    /* ben */
    R(c, 5, 13 + (step ? 0 : 0), 2, 3, uni2);
    R(c, 9, 13, 2, 3, uni2);
    if (step) { R(c, 5, 15, 2, 1, ink); } else { R(c, 9, 15, 2, 1, ink); }

    /* kropp */
    R(c, 3, 8, 10, 6, ink);
    R(c, 4, 8, 8, 5, uni);
    if (dir !== 'up') {
      R(c, 4, 11, 8, 2, uni2);
      R(c, 7, 8, 2, 5, acc);            /* rockslag / dragkedja */
    }
    /* armar */
    R(c, 3, 9 + (step ? 1 : 0), 2, 4, uni);
    R(c, 11, 9 + (step ? 0 : 1), 2, 4, uni);
    R(c, 3, 12 + (step ? 1 : 0), 2, 1, skin);
    R(c, 11, 12 + (step ? 0 : 1), 2, 1, skin);

    /* huvud */
    R(c, 3, 1, 10, 8, ink);
    R(c, 4, 2, 8, 6, skin);

    /* hår */
    if (style !== 'flint') {
      R(c, 4, 2, 8, 2, hair);
      R(c, 3, 2, 1, 4, hair);
      R(c, 12, 2, 1, 4, hair);
      if (style === 'langt') { R(c, 3, 4, 1, 5, hair); R(c, 12, 4, 1, 5, hair); R(c, 4, 8, 8, 1, hair); }
      if (style === 'knut') { R(c, 6, 0, 4, 2, hair); R(c, 3, 3, 1, 3, hair); R(c, 12, 3, 1, 3, hair); }
      if (style === 'kort') { R(c, 4, 4, 2, 1, hair); R(c, 10, 4, 2, 1, hair); }
    } else {
      R(c, 4, 2, 8, 1, skin);
      R(c, 3, 4, 1, 2, hair); R(c, 12, 4, 1, 2, hair);
    }
    if (style === 'mossa' || d.cap) { R(c, 3, 1, 10, 3, acc); R(c, 3, 4, 10, 1, ink); }

    /* ansikte per riktning */
    if (dir === 'down') {
      R(c, 5, 5, 2, 2, ink); R(c, 9, 5, 2, 2, ink);
      R(c, 7, 7, 2, 1, '#b07868');
    } else if (dir === 'left') {
      R(c, 4, 5, 2, 2, ink);
      R(c, 4, 7, 3, 1, '#b07868');
      R(c, 10, 3, 2, 5, hair);
    } else if (dir === 'right') {
      R(c, 10, 5, 2, 2, ink);
      R(c, 9, 7, 3, 1, '#b07868');
      R(c, 4, 3, 2, 5, hair);
    } else {                                   /* up: bakhuvud */
      R(c, 4, 2, 8, 5, hair);
    }

    /* glasögon */
    if (d.glasogon && dir !== 'up') {
      R(c, 4, 5, 3, 1, ink); R(c, 9, 5, 3, 1, ink);
      R(c, 7, 5, 2, 1, ink);
    }
    /* namnbricka */
    if (d.bricka !== false && dir === 'down') R(c, 10, 9, 2, 1, acc);
  }

  var spriteCache = {};

  LESS.charSprite = function (key, def, dir, frame) {
    var id = key + '|' + dir + '|' + (frame ? 1 : 0);
    if (spriteCache[id]) return spriteCache[id];
    var cv = document.createElement('canvas');
    cv.width = 16; cv.height = 16;
    drawChar(cv.getContext('2d'), def, dir, frame);
    spriteCache[id] = cv;
    return cv;
  };

  /* ---------------- porträtt (44x44, procedurella) ---------------- */

  var MOOD = {
    neutral:  { bryn: 0, ogon: 2, mun: 'rak',   lut: 0 },
    oppen:    { bryn: -1, ogon: 3, mun: 'leende', lut: 0 },
    lattad:   { bryn: -1, ogon: 2, mun: 'leende', lut: 0 },
    sluten:   { bryn: 1, ogon: 1, mun: 'ihop',  lut: 1 },
    orolig:   { bryn: -2, ogon: 3, mun: 'ner',  lut: 0 },
    spand:    { bryn: 2, ogon: 2, mun: 'ihop',  lut: 0 },
    ledsen:   { bryn: -2, ogon: 1, mun: 'ner',  lut: 1 },
    smarta:   { bryn: 2, ogon: 0, mun: 'ihop',  lut: 1 },
    trott:    { bryn: 1, ogon: 1, mun: 'rak',   lut: 1 }
  };
  LESS.MOODS = Object.keys(MOOD);

  /* Ritar ett porträtt i en 44x44-ruta med övre vänstra hörnet i (ox,oy). */
  LESS.drawPortrait = function (c, def, mood, ox, oy) {
    var m = MOOD[mood] || MOOD.neutral;
    var skin = def.skin || SKIN.ljus,
        hair = def.hair || HAIR.brun,
        style = def.hairStyle || 'kort',
        klader = def.klader || '#7088b8',
        ink = P.ink;
    var shade = def.skinShade || shadeOf(skin);
    var x = ox, y = oy + m.lut;

    /* ram */
    R(c, ox, oy, 44, 44, '#f8f8e8');
    R(c, ox, oy, 44, 44, '#f8f8e8');
    /* bakgrundsrutor bakom huvudet */
    R(c, ox + 2, oy + 2, 40, 40, '#e8ecd8');
    R(c, ox + 2, oy + 2, 40, 12, '#dce4d0');

    /* hals + axlar */
    R(c, x + 18, y + 28, 8, 6, shade);
    R(c, x + 10, y + 33, 24, 11, ink);
    R(c, x + 11, y + 34, 22, 10, klader);
    R(c, x + 19, y + 34, 6, 10, '#f4f4ec');            /* krage/skjorta */
    R(c, x + 18, y + 34, 1, 4, ink); R(c, x + 25, y + 34, 1, 4, ink);

    /* huvudets kontur */
    R(c, x + 12, y + 6, 20, 26, ink);
    R(c, x + 11, y + 10, 22, 18, ink);
    R(c, x + 13, y + 7, 18, 24, skin);
    R(c, x + 12, y + 11, 20, 16, skin);
    /* skuggsida */
    R(c, x + 29, y + 12, 2, 14, shade);
    R(c, x + 16, y + 29, 12, 2, shade);

    /* öron */
    R(c, x + 10, y + 17, 2, 4, skin); R(c, x + 32, y + 17, 2, 4, skin);

    /* hår */
    if (style === 'flint') {
      R(c, x + 13, y + 6, 18, 2, shade);
      R(c, x + 11, y + 12, 2, 5, hair); R(c, x + 31, y + 12, 2, 5, hair);
    } else {
      R(c, x + 12, y + 4, 20, 7, hair);
      R(c, x + 11, y + 7, 2, 10, hair);
      R(c, x + 31, y + 7, 2, 10, hair);
      R(c, x + 14, y + 10, 6, 2, hair);
      R(c, x + 24, y + 10, 7, 2, hair);
      if (style === 'langt') {
        R(c, x + 9, y + 8, 3, 28, hair);
        R(c, x + 32, y + 8, 3, 28, hair);
        R(c, x + 8, y + 12, 2, 24, hair);
        R(c, x + 34, y + 12, 2, 24, hair);
        R(c, x + 7, y + 18, 1, 16, hair);
        R(c, x + 36, y + 18, 1, 16, hair);
      }
      if (style === 'knut') {
        R(c, x + 17, y + 0, 10, 5, hair);
        R(c, x + 16, y + 2, 12, 3, hair);
      }
      if (style === 'kort') { R(c, x + 12, y + 4, 20, 5, hair); }
      /* liten dager i håret */
      R(c, x + 15, y + 5, 5, 1, lighten(hair));
    }

    /* ögonbryn – vinkel styrs av humör */
    var bl = y + 16 + m.bryn, br = y + 16 + m.bryn;
    R(c, x + 16, bl, 5, 2, hair);
    R(c, x + 24, br, 5, 2, hair);
    if (m.bryn > 0) { R(c, x + 16, bl - 1, 3, 1, hair); R(c, x + 26, br - 1, 3, 1, hair); }
    if (m.bryn < 0) { R(c, x + 18, bl - 1, 3, 1, hair); R(c, x + 24, br - 1, 3, 1, hair); }

    /* ögon */
    if (m.ogon === 0) {
      R(c, x + 16, y + 20, 5, 1, ink); R(c, x + 24, y + 20, 5, 1, ink);
    } else {
      var eh = m.ogon;
      R(c, x + 16, y + 19, 5, eh + 1, '#f8f8f0');
      R(c, x + 24, y + 19, 5, eh + 1, '#f8f8f0');
      R(c, x + 17, y + 19, 3, eh + 1, def.ogon || '#4a3a28');
      R(c, x + 25, y + 19, 3, eh + 1, def.ogon || '#4a3a28');
      R(c, x + 18, y + 19, 1, 1, '#f8f8f0'); R(c, x + 26, y + 19, 1, 1, '#f8f8f0');
      R(c, x + 16, y + 18, 5, 1, ink); R(c, x + 24, y + 18, 5, 1, ink);
    }

    /* näsa och kinder */
    R(c, x + 21, y + 22, 2, 3, shade);
    R(c, x + 21, y + 25, 3, 1, shade);
    R(c, x + 14, y + 24, 3, 2, LESS.lighten(shade));
    R(c, x + 28, y + 24, 3, 2, LESS.lighten(shade));

    /* mun */
    if (m.mun === 'leende') {
      R(c, x + 18, y + 27, 8, 1, '#8a4a44');
      R(c, x + 17, y + 26, 1, 1, '#8a4a44'); R(c, x + 26, y + 26, 1, 1, '#8a4a44');
      R(c, x + 19, y + 28, 6, 1, '#b06a60');
    } else if (m.mun === 'ner') {
      R(c, x + 18, y + 28, 8, 1, '#8a4a44');
      R(c, x + 17, y + 29, 1, 1, '#8a4a44'); R(c, x + 26, y + 29, 1, 1, '#8a4a44');
    } else if (m.mun === 'ihop') {
      R(c, x + 18, y + 28, 8, 1, '#7a4038');
      R(c, x + 19, y + 27, 6, 1, shade);
    } else {
      R(c, x + 18, y + 28, 8, 1, '#8a4a44');
    }

    /* skägg */
    if (def.skagg) {
      R(c, x + 15, y + 26, 14, 5, hair);
      R(c, x + 18, y + 27, 8, 2, '#8a4a44');
      if (m.mun === 'ihop') R(c, x + 18, y + 28, 8, 1, '#7a4038');
    }

    /* glasögon */
    if (def.glasogon) {
      R(c, x + 14, y + 17, 9, 1, ink); R(c, x + 14, y + 23, 9, 1, ink);
      R(c, x + 14, y + 18, 1, 5, ink); R(c, x + 22, y + 18, 1, 5, ink);
      R(c, x + 23, y + 17, 9, 1, ink); R(c, x + 23, y + 23, 9, 1, ink);
      R(c, x + 23, y + 18, 1, 5, ink); R(c, x + 31, y + 18, 1, 5, ink);
      R(c, x + 23, y + 19, 1, 1, ink);
    }

    /* svettdroppe vid stark oro/smärta */
    if (mood === 'orolig' || mood === 'smarta') {
      R(c, x + 33, y + 12, 2, 3, '#8ac0e8');
      R(c, x + 33, y + 15, 2, 1, '#5a90c8');
    }

    /* yttre ram i GBC-stil */
    strokeBox(c, ox, oy, 44, 44, ink);
  };

  function strokeBox(c, x, y, w, h, col) {
    R(c, x, y, w, 1, col); R(c, x, y + h - 1, w, 1, col);
    R(c, x, y, 1, h, col); R(c, x + w - 1, y, 1, h, col);
  }
  LESS.strokeBox = strokeBox;

  function hex(n) { var s = Math.max(0, Math.min(255, n | 0)).toString(16); return s.length < 2 ? '0' + s : s; }
  function parse(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
  function shadeOf(h) { var c = parse(h); return '#' + hex(c[0] * .8) + hex(c[1] * .78) + hex(c[2] * .78); }
  function lighten(h) { var c = parse(h); return '#' + hex(c[0] + 40) + hex(c[1] + 36) + hex(c[2] + 30); }
  LESS.shadeOf = shadeOf; LESS.lighten = lighten;

  /* ---------------- mötesbakgrunder ---------------- */

  /* Mottagningsrum bakom porträttet.
     Ytan ovanför y=58 är den som syns när valmenyn är uppe, så allt som ska
     läsas ligger där: vårdgivarens rygg till vänster (x 8–40), logotypskylten
     i mitten (x 52–94) och patientens porträtt till höger (x 100–144). */
  LESS.drawRoomBg = function (c, tint) {
    R(c, 0, 0, 160, 144, P.wall);
    R(c, 0, 0, 160, 4, P.wallSh);
    R(c, 0, 92, 160, 52, P.floor);
    R(c, 0, 90, 160, 2, P.wallD);

    /* fönster mot gatan */
    R(c, 4, 4, 36, 21, P.line);
    R(c, 6, 6, 32, 17, P.sky);
    R(c, 6, 6, 32, 6, '#a8d8f0');
    R(c, 6, 17, 32, 6, P.grass);
    R(c, 21, 6, 2, 17, P.line);
    R(c, 6, 13, 32, 2, P.line);

    /* Forsåkers skylt på väggen */
    R(c, 52, 8, 42, 26, P.markDark);
    R(c, 54, 10, 38, 22, '#f4f8f6');
    LESS.drawLogga(c, 56, 13, 1, false);
    R(c, 74, 15, 15, 2, P.markDark);
    R(c, 74, 19, 12, 2, P.markDark);
    R(c, 74, 23, 15, 2, '#3f7a70');

    /* mintgrön list längs väggen */
    R(c, 0, 84, 160, 2, P.markMint);

    /* växt i hörnet, till stor del dold av textrutan */
    R(c, 138, 74, 12, 18, P.woodD); R(c, 140, 76, 8, 14, P.wood);
    R(c, 142, 62, 4, 14, P.greenD);
    R(c, 134, 58, 9, 9, P.green); R(c, 145, 58, 9, 9, P.green);
    R(c, 139, 52, 9, 9, P.green);

    if (tint) { c.fillStyle = tint; c.fillRect(0, 0, 160, 144); }
  };

  /* Chattvy (sjuksköterskans triage) */
  LESS.drawChatBg = function (c, t) {
    R(c, 0, 0, 160, 144, '#20282c');
    /* skärmram */
    R(c, 6, 8, 148, 96, '#0c1014');
    R(c, 8, 10, 144, 92, '#d8e4e8');
    /* rubrikrad i vårdcentralens profilfärg */
    R(c, 8, 10, 144, 14, P.markDark);
    LESS.drawLogga(c, 10, 9, 1, true, P.markMint);
    R(c, 28, 14, 46, 3, P.markMint);
    R(c, 28, 19, 30, 2, '#3f7a70');
    R(c, 140, 14, 6, 6, P.markMint);
    /* bubblor */
    R(c, 14, 28, 62, 14, '#f4f4ec'); R(c, 14, 28, 62, 1, '#b8c4c8'); R(c, 14, 41, 62, 1, '#b8c4c8');
    R(c, 18, 32, 44, 2, '#8a98a0'); R(c, 18, 36, 34, 2, '#8a98a0');
    R(c, 84, 48, 62, 14, '#c8e8c0'); R(c, 84, 48, 62, 1, '#9cc498'); R(c, 84, 61, 62, 1, '#9cc498');
    R(c, 88, 52, 40, 2, '#6a9068'); R(c, 88, 56, 30, 2, '#6a9068');
    R(c, 14, 68, 70, 14, '#f4f4ec'); R(c, 14, 68, 70, 1, '#b8c4c8'); R(c, 14, 81, 70, 1, '#b8c4c8');
    R(c, 18, 72, 50, 2, '#8a98a0'); R(c, 18, 76, 38, 2, '#8a98a0');
    /* skrivfält med blinkande markör */
    R(c, 12, 88, 136, 10, '#f8f8f0'); R(c, 12, 88, 136, 1, '#a8b4b8');
    if (((t / 400) | 0) % 2 === 0) R(c, 16, 90, 1, 6, '#3c6c8c');
    /* skrivbord under */
    R(c, 0, 104, 160, 40, P.wood);
    R(c, 0, 104, 160, 3, P.woodL);
    R(c, 0, 118, 160, 26, P.woodD);
  };


  /* Granskningsvy: läkarens skrivbord med utredningen uppe */
  LESS.drawGranskningBg = function (c, t) {
    R(c, 0, 0, 160, 144, '#243038');
    /* vägg och hylla */
    R(c, 0, 0, 160, 40, '#3a4a54');
    R(c, 8, 8, 60, 5, '#6a5238'); R(c, 10, 3, 6, 5, '#c04838');
    R(c, 18, 3, 5, 5, '#4870b0'); R(c, 25, 3, 7, 5, '#38803f');
    /* skärm */
    R(c, 14, 20, 100, 74, '#0c1014');
    R(c, 16, 22, 96, 70, '#f4f4e8');
    R(c, 16, 22, 96, 14, P.markDark);
    LESS.drawLogga(c, 17, 21, 1, true, P.markMint);
    R(c, 34, 27, 30, 3, P.markMint);
    var i;
    for (i = 0; i < 9; i++) {
      R(c, 21, 38 + i * 6, (i % 3 === 2 ? 52 : 84), 2, '#8a8a80');
    }
    R(c, 21, 38, 40, 2, P.markDark);
    R(c, 21, 84, 30, 3, '#38803f');
    /* markör */
    if (((t / 500) | 0) % 2 === 0) R(c, 88, 84, 1, 5, '#20201c');
    /* skrivbord */
    R(c, 0, 94, 160, 50, P.wood);
    R(c, 0, 94, 160, 3, P.woodL);
    R(c, 0, 110, 160, 34, P.woodD);
    /* papper och penna */
    R(c, 118, 98, 34, 24, '#f8f8f0'); R(c, 118, 98, 34, 1, '#c8c8b8');
    for (i = 0; i < 4; i++) R(c, 121, 102 + i * 5, 26, 1, '#a8a89c');
    R(c, 122, 124, 22, 2, '#c04838');
    /* kaffekopp */
    R(c, 6, 100, 14, 12, '#f0f0e8'); R(c, 8, 102, 10, 3, '#5a3a20');
    R(c, 20, 103, 3, 5, '#f0f0e8');
  };


  /* ---------------- Everdrones drönare ----------------
     Grå multirotor som bär hjärtstartaren i en lina under sig. Stationerad
     bakom vårdcentralen på riktigt; här lyfter den på titelskärmen.        */
  LESS.drawDrone = function (c, x, y, t, medAed) {
    var kropp = '#6a6e74', kroppD = '#4a4e54', kroppL = '#8e939a';
    var rotorPa = ((t / 60) | 0) % 2 === 0;

    /* armar */
    R(c, x - 6, y + 1, 6, 1, kroppD);
    R(c, x + 12, y + 1, 6, 1, kroppD);
    R(c, x - 5, y + 5, 5, 1, kroppD);
    R(c, x + 13, y + 5, 5, 1, kroppD);

    /* rotorer – två lägen ger illusionen av rotation */
    [[-8, 0], [16, 0], [-7, 4], [15, 4]].forEach(function (o, i) {
      var rx = x + o[0], ry = y + o[1];
      if (rotorPa === (i % 2 === 0)) {
        R(c, rx - 1, ry, 8, 1, '#b8bcc2');
      } else {
        R(c, rx + 2, ry - 1, 2, 3, '#b8bcc2');
      }
      R(c, rx + 2, ry, 2, 1, kroppD);
    });

    /* skrov */
    R(c, x, y, 12, 7, kroppD);
    R(c, x + 1, y + 1, 10, 5, kropp);
    R(c, x + 1, y + 1, 10, 1, kroppL);
    R(c, x + 3, y + 2, 5, 2, '#2a3038');          /* kameraruta */
    R(c, x + 9, y + 3, 2, 1, '#c04838');          /* positionsljus */
    R(c, x, y + 3, 1, 1, '#58c060');

    if (medAed) {
      /* lina och hjärtstartare */
      R(c, x + 5, y + 7, 1, 5, '#3a3a34');
      R(c, x + 2, y + 12, 8, 7, '#c8a018');
      R(c, x + 2, y + 12, 8, 1, '#e0b830');
      R(c, x + 3, y + 14, 2, 3, '#f8f8f0');
      R(c, x + 6, y + 14, 3, 1, '#20201c');
      R(c, x + 6, y + 16, 3, 1, '#20201c');
    }
  };

  /* Titelbakgrund: vårdcentralen utifrån */
  LESS.drawTitleBg = function (c, t) {
    var i;
    R(c, 0, 0, 160, 144, P.sky);
    R(c, 0, 0, 160, 40, '#a8d8f0');
    /* moln */
    var cx = ((t / 90) % 200) - 40;
    R(c, cx, 18, 22, 5, P.white); R(c, cx + 5, 14, 12, 5, P.white);
    R(c, cx + 60, 30, 18, 4, P.white); R(c, cx + 66, 27, 9, 4, P.white);
    /* mark */
    R(c, 0, 96, 160, 48, P.grass);
    R(c, 0, 96, 160, 2, '#8ac068');
    R(c, 0, 118, 160, 26, P.grassD);
    /* gångväg */
    R(c, 66, 96, 28, 48, '#d8cfae');
    for (i = 0; i < 5; i++) R(c, 66, 100 + i * 10, 28, 1, '#c0b894');
    /* Drönaren lyfter bakom huset och flyger iväg. 16 sekunders cykel.
       Ritas före byggnaden så att taket skymmer den under starten.        */
    var cyk = (t % 16000) / 16000, dx = null, dy = 0;
    if (cyk >= 0.06 && cyk < 0.34) {
      var k = (cyk - 0.06) / 0.28;
      dx = 118; dy = Math.round(54 - k * k * 48);
    } else if (cyk >= 0.34 && cyk < 0.70) {
      var k2 = (cyk - 0.34) / 0.36;
      dx = Math.round(118 + k2 * k2 * 74);
      dy = Math.round(6 - k2 * 5 + Math.sin(k2 * 8) * 1.5);
    }
    if (dx !== null && dx < 168) LESS.drawDrone(c, dx, dy, t, true);

    /* byggnad */
    R(c, 24, 44, 112, 54, P.ink);
    R(c, 26, 46, 108, 50, P.white);
    R(c, 26, 46, 108, 8, '#e8e4d8');
    R(c, 20, 38, 120, 8, P.markDark);      /* tak */
    R(c, 20, 38, 120, 2, '#1d695e');
    /* fönster */
    for (i = 0; i < 4; i++) {
      R(c, 34 + i * 24, 58, 16, 14, P.ink);
      R(c, 36 + i * 24, 60, 12, 10, P.glass);
      R(c, 36 + i * 24, 60, 12, 4, P.glassD);
    }
    /* entré */
    R(c, 70, 74, 20, 24, P.ink);
    R(c, 72, 76, 16, 22, P.glass);
    R(c, 79, 76, 2, 22, P.ink);
    /* skylt med Forsåkers märke */
    R(c, 50, 18, 60, 20, P.markDark);
    R(c, 52, 20, 56, 16, '#f4f8f6');
    LESS.drawLogga(c, 54, 20, 1, false);
    R(c, 72, 23, 32, 3, P.markDark);
    R(c, 72, 28, 24, 2, '#3f7a70');
    R(c, 72, 32, 30, 2, '#3f7a70');
    /* mintgrön list ovanför entrén */
    R(c, 26, 54, 108, 2, P.markMint);

    /* buskar */
    R(c, 10, 88, 14, 10, P.greenD); R(c, 12, 86, 10, 6, P.green);
    R(c, 136, 88, 14, 10, P.greenD); R(c, 138, 86, 10, 6, P.green);
  };

})(window);
