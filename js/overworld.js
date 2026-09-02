/* overworld.js – vårdcentralen: gång, rum, stationer och samtal */
(function (global) {
  'use strict';
  var LESS = global.LESS, ui = LESS.ui, $ = LESS.$;
  var M = LESS.map, TS = 16;

  var VY_W = 160, VY_H = 144;
  var GANGTID = 170;                 /* ms per ruta */

  var RUM = [
    { namn: 'TRIAGE',            x1: 1,  y1: 1,  x2: 7,  y2: 8 },
    { namn: 'PSYKOLOGRUM',       x1: 9,  y1: 1,  x2: 15, y2: 8 },
    { namn: 'FYSIOTERAPI',       x1: 17, y1: 1,  x2: 23, y2: 8 },
    { namn: 'LÄKARRUM',          x1: 25, y1: 1,  x2: 30, y2: 8 },
    { namn: 'KORRIDOR',          x1: 1,  y1: 9,  x2: 30, y2: 13 },
    { namn: 'VÄNTRUM',           x1: 1,  y1: 14, x2: 9,  y2: 20 },
    { namn: 'REHABKOORDINATOR',  x1: 11, y1: 14, x2: 19, y2: 20 },
    { namn: 'ARBETSTERAPI',      x1: 21, y1: 14, x2: 30, y2: 20 }
  ];

  var P = null;      /* spelaren */
  var aktiv = false;
  var handler = null;

  /* ---------------- spelaren ---------------- */

  function nyPlayer() {
    return {
      tx: M.start.x, ty: M.start.y,
      px: M.start.x * TS, py: M.start.y * TS,
      dir: M.start.dir || 'down',
      gar: false, frame: 0, steg: 0, t0: 0,
      frx: 0, fry: 0, buffert: null
    };
  }

  var DELTA = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };

  function forsokGa(dir) {
    if (P.gar) { P.buffert = dir; return; }   /* tryck under pågående steg tappas inte */
    P.dir = dir;
    var d = DELTA[dir];
    var nx = P.tx + d[0], ny = P.ty + d[1];
    if (!M.walkable(nx, ny)) { P.steg = (P.steg + 1) % 2; return; }
    for (var i = 0; i < LESS.npcs.length; i++) {
      if (LESS.npcs[i].x === nx && LESS.npcs[i].y === ny) { P.steg = (P.steg + 1) % 2; return; }
    }
    P.frx = P.px; P.fry = P.py;
    P.tx = nx; P.ty = ny;
    P.gar = true; P.t0 = performance.now();
  }

  function uppdatera(nu) {
    if (!P.gar) return;
    var k = (nu - P.t0) / GANGTID;
    if (k >= 1) {
      P.px = P.tx * TS; P.py = P.ty * TS;
      P.gar = false;
      P.steg = (P.steg + 1) % 2;
      var d = LESS.input.dir() || P.buffert;
      P.buffert = null;
      if (d && aktiv) forsokGa(d);
      return;
    }
    P.px = P.frx + (P.tx * TS - P.frx) * k;
    P.py = P.fry + (P.ty * TS - P.fry) * k;
  }

  /* ---------------- kamera & rendering ---------------- */

  function kamera() {
    var cx = LESS.clamp(Math.round(P.px + 8 - VY_W / 2), 0, M.W * TS - VY_W);
    var cy = LESS.clamp(Math.round(P.py + 8 - VY_H / 2), 0, M.H * TS - VY_H);
    return { x: cx, y: cy };
  }

  function rumNamn() {
    for (var i = 0; i < RUM.length; i++) {
      var r = RUM[i];
      if (P.tx >= r.x1 && P.tx <= r.x2 && P.ty >= r.y1 && P.ty <= r.y2) return r.namn;
    }
    return 'VÅRDCENTRALEN';
  }

  var scene = {
    draw: function (c, t) {
      var cam = kamera();
      var x0 = Math.max(0, (cam.x / TS | 0) - 1), x1 = Math.min(M.W - 1, ((cam.x + VY_W) / TS | 0) + 1);
      var y0 = Math.max(0, (cam.y / TS | 0) - 1), y1 = Math.min(M.H - 1, ((cam.y + VY_H) / TS | 0) + 1);
      var x, y;

      c.fillStyle = '#101010';
      c.fillRect(0, 0, VY_W, VY_H);

      for (y = y0; y <= y1; y++) {
        for (x = x0; x <= x1; x++) {
          LESS.drawTile(c, M.tileOf(M.at(x, y)), x * TS - cam.x, y * TS - cam.y);
        }
      }

      /* figurer sorterade i djupled */
      var figurer = LESS.npcs.map(function (n) {
        return { px: n.x * TS, py: n.y * TS, spr: LESS.charSprite('npc' + n.x + '_' + n.y, n.sprite, n.dir, 0) };
      });
      var rollDef = (LESS.roller[LESS.state.data.spelare.roll] || LESS.roller.ssk).sprite;
      figurer.push({
        px: P.px, py: P.py,
        spr: LESS.charSprite('spelare' + (LESS.state.data.spelare.roll || 'ssk'), rollDef, P.dir, P.steg)
      });
      figurer.sort(function (a, b) { return a.py - b.py; });
      figurer.forEach(function (f) {
        c.drawImage(f.spr, Math.round(f.px - cam.x), Math.round(f.py - cam.y - 4));
      });

      /* markör över målrummet i kampanjläget */
      var mal = malStation();
      if (mal) {
        var mx = mal.x * TS - cam.x + 4, my = mal.y * TS - cam.y - 10 + Math.round(Math.sin(t / 220) * 2);
        if (mx > -12 && mx < VY_W + 12) {
          c.fillStyle = '#101010'; c.fillRect(mx - 1, my - 1, 10, 8);
          c.fillStyle = '#f8e070';
          c.fillRect(mx + 3, my, 2, 4); c.fillRect(mx + 1, my + 3, 6, 1); c.fillRect(mx + 2, my + 4, 4, 1);
          c.fillRect(mx + 3, my + 5, 2, 1);
        }
      }
    }
  };

  /* ---------------- kampanj ---------------- */

  function kampanjSteg() {
    var K = LESS.state.data.kampanj;
    var a = LESS.kampanj.arenden[K.arende];
    if (!a) return null;
    var s = a.steg[K.steg];
    if (!s) return null;
    return { arende: a, steg: s, fall: LESS.hittaFall(s.fall) };
  }

  function malStation() {
    if (LESS.state.data.lage !== 'kampanj') return null;
    var k = kampanjSteg();
    if (!k || !k.fall) return null;
    for (var i = 0; i < M.stations.length; i++) {
      if (M.stations[i].role === k.fall.roll) return M.stations[i];
    }
    return null;
  }

  function uppdateraVarldsrad() {
    $('roomlabel').textContent = rumNamn();
    var o = '';
    if (LESS.state.data.lage === 'kampanj') {
      var k = kampanjSteg();
      if (k) {
        var r = LESS.roller[k.fall.roll];
        var pers = LESS.personer[k.arende.patient];
        o = (pers ? pers.namn.split(' ')[0].toUpperCase() : '') +
            ' · steg ' + (LESS.state.data.kampanj.steg + 1) + '/' + k.arende.steg.length +
            ' → ' + (r ? r.rum : '');
      } else o = 'Alla ärenden klara – gå till receptionen.';
    } else if (LESS.state.data.lage === 'drill') {
      o = 'ÖVNING · välj rum';
    }
    $('objective').textContent = o;
    LESS.show($('worldbar'), true);
  }

  /* ---------------- interaktion ---------------- */

  function framforRuta() {
    var d = DELTA[P.dir];
    return { x: P.tx + d[0], y: P.ty + d[1] };
  }

  function tryck() {
    var f = framforRuta(), i;

    for (i = 0; i < LESS.npcs.length; i++) {
      if (LESS.npcs[i].x === f.x && LESS.npcs[i].y === f.y) { prataNpc(LESS.npcs[i]); return; }
    }
    for (i = 0; i < M.stations.length; i++) {
      var s = M.stations[i];
      if (s.x === f.x && s.y === f.y) { station(s); return; }
    }
    /* stå på en station (t.ex. utgången) */
    for (i = 0; i < M.stations.length; i++) {
      if (M.stations[i].x === P.tx && M.stations[i].y === P.ty) { station(M.stations[i]); return; }
    }
    LESS.sfx('back');
  }

  function paus() { aktiv = false; LESS.show($('worldbar'), false); }
  function ater() {
    aktiv = true;
    LESS.setScene(scene);
    uppdateraVarldsrad();
    LESS.show($('worldbar'), true);
  }

  function prataNpc(n) {
    paus();
    LESS.sfx('ok');
    ui.sayAll(n.repliker.map(function (t) { return { text: t, speaker: { name: n.namn, kind: 'you' } }; }), ater);
  }

  /* ---------------- stationer ---------------- */

  function station(s) {
    if (s.kind === 'handbok') { paus(); LESS.sfx('ok'); ui.panel('HANDBOKEN', handbokHtml(), ater); return; }
    if (s.kind === 'tavla')   { paus(); LESS.sfx('ok'); ui.panel('ANSLAGSTAVLAN', tavlaHtml(), ater); return; }
    if (s.kind === 'reception') { receptionsMeny(); return; }
    if (s.kind === 'utgang')  { utgang(); return; }
    if (s.role) startRoll(s.role);
  }

  function handbokHtml() {
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
        k.punkter.forEach(function (p) { html += '<li>' + LESS.esc(p) + '</li>'; });
        html += '</ul>';
      }
      if (k.varning) html += '<p><b>⚠ ' + LESS.esc(k.varning) + '</b></p>';
      if (k.todo) html += '<p><b>[' + LESS.esc(k.todo) + ']</b></p>';
    });
    return html;
  }

  function tavlaHtml() {
    var d = LESS.state.data, html = '';
    html += '<h3>Kampanjen</h3>';
    LESS.kampanj.arenden.forEach(function (a, i) {
      var status = i < d.kampanj.arende ? '✔ klart' : (i === d.kampanj.arende ? '▶ pågår' : '· ej påbörjat');
      html += '<div class="kv"><b>' + LESS.esc(a.titel) + '</b><span>' + status + '</span></div>';
      a.steg.forEach(function (s, j) {
        var f = LESS.hittaFall(s.fall), r = f ? LESS.roller[f.roll] : null;
        var klar = d.kampanj.klara.indexOf(s.fall) >= 0;
        var res = d.resultat[s.fall];
        html += '<div class="kv"><b style="padding-left:8px">' + (j + 1) + '. ' + LESS.esc(r ? r.kort : '') + '</b>' +
                '<span>' + (klar ? (res ? res.basta.toUpperCase() : 'klart') : '–') + '</span></div>';
      });
    });

    html += '<h3>Statistik</h3>';
    html += '<div class="kv"><b>Möten</b><span>' + d.statistik.moten + '</span></div>';
    html += '<div class="kv"><b>Guld</b><span>' + (d.statistik.guld || 0) + '</span></div>';
    html += '<div class="kv"><b>Silver</b><span>' + (d.statistik.silver || 0) + '</span></div>';
    html += '<div class="kv"><b>Brons</b><span>' + (d.statistik.brons || 0) + '</span></div>';
    html += '<div class="kv"><b>Omtag</b><span>' + (d.statistik.omtag || 0) + '</span></div>';

    var ko = LESS.state.ko();
    html += '<h3>Repetitionskö</h3>';
    if (!ko.length) html += '<p>Tom. Inget att repetera just nu.</p>';
    else {
      html += '<ul>';
      ko.forEach(function (p) { html += '<li>' + LESS.esc(LESS.principer[p] || p) + '</li>'; });
      html += '</ul>';
      html += '<p>Övningsläget prioriterar fall som tränar dessa.</p>';
    }

    html += '<h3>Handledartips</h3>';
    LESS.rollLista.forEach(function (r) {
      var g = d.mastery[r] || 0;
      html += '<div class="kv"><b>' + LESS.esc(LESS.roller[r].kort) + '</b><span>' +
              (g >= 2 ? 'tips avstängda (' + g + ' guld)' : 'tips på (' + g + '/2 guld)') + '</span></div>';
    });
    return html;
  }

  /* ---------------- starta ett fall ---------------- */

  function startRoll(roll) {
    var d = LESS.state.data;

    if (d.lage === 'kampanj') {
      var k = kampanjSteg();
      if (!k) { info('Alla ärenden är klara. Gå till receptionen för övningsläget.'); return; }
      if (k.fall.roll !== roll) {
        var r = LESS.roller[k.fall.roll];
        info('Inte idag. Ditt ärende väntar i ' + (r ? r.rum : '?') + '.');
        return;
      }
      korFall(k.fall, { kampanj: true }, function () { efterKampanj(k); });
      return;
    }

    /* övningsläge */
    var lista = LESS.drillFall(roll);
    if (!lista.length) { info('Inga fall inlagda för den rollen ännu.'); return; }
    var fall = LESS.state.nastaDrill(lista);
    korFall(fall, { drill: true }, function (res) { efterDrill(roll, res); });
  }

  function info(text) {
    paus();
    LESS.sfx('back');
    ui.say(text, null, ater);
  }

  function korFall(fall, opts, klar) {
    paus();
    LESS.state.data.spelare.roll = fall.roll;
    LESS.state.spara();
    LESS.sfx('door');
    ui.transition(function () {
      LESS.encounter.start(fall, opts, klar);
    });
  }

  /* ---------------- efterspel ---------------- */

  function efterKampanj(k) {
    var d = LESS.state.data;
    var res = d.resultat[k.fall.id];

    function forsatt() {
      LESS.state.kampanjKlart(k.fall.id);
      d.kampanj.steg += 1;
      if (d.kampanj.steg >= k.arende.steg.length) {
        d.kampanj.steg = 0;
        d.kampanj.arende += 1;
        LESS.state.spara();
        visaEpilog(k.arende);
      } else {
        LESS.state.spara();
        mellanspel();
      }
    }

    if (res && res.senaste === 'omtag') {
      ui.say('Handledaren: "Det där mötet vill jag att du gör om. Du får ta det en gång till."', null, function () {
        ui.menu([{ text: 'Gör om mötet' }, { text: 'Gå vidare ändå' }], {}, function (i) {
          if (i === 0) korFall(k.fall, { kampanj: true }, function () { efterKampanj(k); });
          else forsatt();
        });
      });
      return;
    }
    forsatt();
  }

  function mellanspel() {
    var k = kampanjSteg();
    if (!k) { ater(); return; }
    var rader = (k.steg.mellanspel || []).map(function (t) { return { text: t, speaker: null }; });
    if (!rader.length) { ater(); return; }
    ui.transition(function () {
      ui.sayAll(rader, ater);
    });
  }

  function visaEpilog(arende) {
    var rader = null;
    for (var i = 0; i < arende.epilog.length; i++) {
      var e = arende.epilog[i];
      if (!e.om) { rader = e.text; break; }
      if (LESS.state.hamtaBeslut(e.om.nyckel) === e.om.varde) { rader = e.text; break; }
    }
    rader = rader || [];
    ui.transition(function () {
      ui.sayAll(rader.map(function (t) { return { text: t, speaker: { name: arende.titel, kind: 'you' } }; }), function () {
        if (LESS.state.data.kampanj.arende >= LESS.kampanj.arenden.length) {
          ui.sayAll(LESS.kampanj.final.map(function (t) { return { text: t, speaker: { name: 'LESS', kind: 'you' } }; }), function () {
            LESS.state.data.lage = 'drill';
            LESS.state.spara();
            ui.say('Övningsläget är upplåst. Välj vilket rum du vill gå in i.', null, ater);
          });
        } else {
          mellanspel();
        }
      });
    });
  }

  function efterDrill(roll, res) {
    var lista = LESS.drillFall(roll);
    ui.menu([{ text: 'Nästa fall' }, { text: 'Sluta för idag' }], {}, function (i) {
      if (i === 0) {
        var fall = LESS.state.nastaDrill(lista);
        korFall(fall, { drill: true }, function (r2) { efterDrill(roll, r2); });
      } else {
        ui.transition(ater);
      }
    });
  }

  /* ---------------- reception & utgång ---------------- */

  function receptionsMeny() {
    paus();
    LESS.sfx('ok');
    var d = LESS.state.data;
    var items = [
      { text: d.lage === 'kampanj' ? 'Byt till övningsläge' : 'Byt till kampanjläge',
        hint: d.lage === 'kampanj'
          ? 'Öva en roll i taget, obegränsat antal fall.'
          : 'Följ tre patienter hela vägen genom LESS-flödet.' },
      { text: 'Anslagstavlan (progression)' },
      { text: 'Handboken' },
      { text: LESS.audio.enabled ? 'Ljud: PÅ' : 'Ljud: AV' },
      { text: d.installningar.tips ? 'Handledartips: PÅ' : 'Handledartips: AV',
        hint: 'Tipsen tonas ändå bort automatiskt när en roll sitter.' },
      { text: 'Börja om från början', hint: 'Raderar all progression.' },
      { text: 'Tillbaka' }
    ];
    ui.menu(items, { cancel: true }, function (i) {
      if (i === 0) {
        d.lage = d.lage === 'kampanj' ? 'drill' : 'kampanj';
        LESS.state.spara();
        ui.say(d.lage === 'kampanj'
          ? 'Kampanjläge. Följ ärendet dit det pekar.'
          : 'Övningsläge. Gå in i vilket rum du vill.', null, ater);
      } else if (i === 1) { ui.panel('ANSLAGSTAVLAN', tavlaHtml(), ater); }
      else if (i === 2) { ui.panel('HANDBOKEN', handbokHtml(), ater); }
      else if (i === 3) { LESS.audio.toggle(); d.installningar.ljud = LESS.audio.enabled; LESS.state.spara(); receptionsMeny(); }
      else if (i === 4) { d.installningar.tips = !d.installningar.tips; LESS.state.spara(); receptionsMeny(); }
      else if (i === 5) {
        ui.say('Vill du radera all progression och börja om?', null, function () {
          ui.menu([{ text: 'Nej, avbryt' }, { text: 'Ja, radera allt' }], {}, function (j) {
            if (j === 1) { LESS.state.nollstall(); location.reload(); }
            else ater();
          });
        });
      } else ater();
    });
  }

  function utgang() {
    paus();
    LESS.sfx('door');
    ui.say('Passet är slut för idag. Vill du gå ut?', null, function () {
      ui.menu([{ text: 'Nej, stanna kvar' }, { text: 'Ja, tillbaka till titelskärmen' }], {}, function (i) {
        if (i === 1) { LESS.state.spara(); ui.transition(function () { LESS.show($('worldbar'), false); LESS.titel(); }); }
        else ater();
      });
    });
  }

  /* ---------------- in-/utgång ---------------- */

  function enter(nyPosition) {
    if (!P || nyPosition) P = nyPlayer();
    LESS.setScene(scene);
    aktiv = true;
    uppdateraVarldsrad();

    if (handler) LESS.input.pop(handler);
    handler = LESS.input.push(function (k) {
      if (!aktiv) return;
      if (k === 'up' || k === 'down' || k === 'left' || k === 'right') { forsokGa(k); uppdateraVarldsrad(); }
      else if (k === 'a') tryck();
      else if (k === 'meny') receptionsMeny();
      else if (k === 'b') { /* reserverad */ }
    });

    LESS.ui.globalKeys.journal = function () { paus(); ui.panel('ANSLAGSTAVLAN', tavlaHtml(), ater); };
    LESS.ui.globalKeys.handbok = function () { paus(); ui.panel('HANDBOKEN', handbokHtml(), ater); };

    /* Kampanjens mellanspel första gången man kommer in */
    if (LESS.state.data.lage === 'kampanj' && !LESS.state.data.kampanj.introVisad) {
      LESS.state.data.kampanj.introVisad = true;
      LESS.state.spara();
      paus();
      ui.sayAll([
        { text: 'Vårdcentralen. Klockan är åtta.', speaker: null },
        { text: 'Idag ska du följa tre ärenden genom hela LESS-flödet – och byta roll på vägen.', speaker: null },
        { text: 'Piltangenter/WASD för att gå. A (Z eller Enter) för att prata. J = anslagstavla, H = handbok, Esc = meny.', speaker: null }
      ], ater);
    }
  }

  function leave() {
    aktiv = false;
    if (handler) { LESS.input.pop(handler); handler = null; }
    LESS.show($('worldbar'), false);
  }

  LESS.overworld = {
    enter: enter,
    leave: leave,
    uppdatera: function (t) { if (aktiv) uppdatera(t); },
    tick: function (t) {
      if (!aktiv) return;
      uppdatera(t);
      if (!P.gar) {
        var d = LESS.input.dir();
        if (d) { forsokGa(d); uppdateraVarldsrad(); }
      }
    }
  };

})(window);
