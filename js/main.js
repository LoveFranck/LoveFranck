/* main.js – uppstart, skalning, renderslinga, titelskärm */
(function (global) {
  'use strict';
  var LESS = global.LESS, ui = LESS.ui, $ = LESS.$;

  var canvas, ctx, scen = null;

  LESS.setScene = function (s) { scen = s; };

  /* ---------------- skalning ---------------- */

  function skala() {
    var stage = $('stage');
    var touch = document.body.classList.contains('touch');
    var padH = touch ? 150 : 0;
    var w = global.innerWidth, h = global.innerHeight;
    var s = Math.min((w - 24) / 320, (h - padH - 24) / 288);
    if (s >= 1) s = Math.floor(s);              /* heltalsskala när det får plats */
    s = Math.max(0.5, s);
    stage.style.transform = 'scale(' + s + ')';
    stage.style.marginBottom = ((288 * s) - 288) + 'px';
    stage.style.marginRight = ((320 * s) - 320) + 'px';
    stage.style.marginLeft = ((320 * s) - 320) + 'px';
  }

  /* ---------------- renderslinga ---------------- */

  function loop(t) {
    if (LESS.overworld) LESS.overworld.tick(t);
    ctx.clearRect(0, 0, 160, 144);
    if (scen && scen.draw) scen.draw(ctx, t);
    requestAnimationFrame(loop);
  }

  /* ---------------- titelskärm ---------------- */

  var titelScen = { draw: function (c, t) { LESS.drawTitleBg(c, t); } };
  var titelHandler = null;

  function titel() {
    LESS.setScene(titelScen);
    LESS.show($('title'), true);
    LESS.show($('worldbar'), false);
    ui.hud(null);
    ui.hideDialog();
    ui.hideMenu();
    if (LESS.overworld) LESS.overworld.leave();

    if (titelHandler) LESS.input.pop(titelHandler);
    titelHandler = LESS.input.push(function (k) {
      if (k !== 'a') return;
      LESS.sfx('ok');
      LESS.input.pop(titelHandler); titelHandler = null;
      LESS.show($('title'), false);
      huvudmeny();
    });
  }
  LESS.titel = titel;

  function huvudmeny() {
    var d = LESS.state.data;
    var items = [];
    if (LESS.state.finnsSparat()) {
      items.push({ text: 'Fortsätt', hint: 'Läge: ' + (d.lage === 'drill' ? 'övning' : 'kampanj') +
        ' · ' + d.statistik.moten + ' möten hittills' });
    }
    items.push({ text: 'Kampanj – tre ärenden',
      hint: 'Följ Anna, Bengt och Carina genom hela flödet. Du byter roll längs vägen.' });
    items.push({ text: 'Övningsläge – en roll i taget',
      hint: 'Välj rum fritt och mata på med fall. Repetitionskön styr urvalet.' });
    items.push({ text: 'Kontroller', hint: 'Var knapparna sitter på tangentbordet.' });
    items.push({ text: 'Handboken', hint: 'LESS, BEDDA, DFA-kedjan, triage, juridik.' });
    items.push({ text: 'Om spelet' });

    ui.menu(items, { compact: false }, function (i, item) {
      var txt = item.text;
      if (txt === 'Fortsätt') { startVarld(); }
      else if (txt.indexOf('Kampanj') === 0) {
        if (LESS.state.finnsSparat() && d.kampanj.arende > 0) {
          ui.say('Vill du börja om kampanjen från ärende 1?', null, function () {
            ui.menu([{ text: 'Nej, fortsätt där jag var' }, { text: 'Ja, börja om' }], {}, function (j) {
              if (j === 1) { d.kampanj = { arende: 0, steg: 0, beslut: {}, klara: [] }; }
              d.lage = 'kampanj'; LESS.state.spara(); startVarld();
            });
          });
        } else { d.lage = 'kampanj'; LESS.state.spara(); startVarld(); }
      }
      else if (txt.indexOf('Övningsläge') === 0) { d.lage = 'drill'; LESS.state.spara(); startVarld(); }
      else if (txt === 'Kontroller') { ui.panel('KONTROLLER', LESS.kontrollHtml(), huvudmeny); }
      else if (txt === 'Handboken') { ui.panel('HANDBOKEN', LESS.handbokHtml(), huvudmeny); }
      else { omSpelet(); }
    });
  }

  function omSpelet() {
    var h = '';
    h += '<h3>LESS – Vårdcentralen ' + LESS.VERSION + '</h3>';
    h += '<p>Ett litet läromedelsspel om hur sjukskrivningsärenden hanteras enligt LESS i primärvården. ' +
         'Sex roller, tre ärenden och ett övningsläge.</p>';
    h += '<h3>Kontroller</h3>';
    h += '<ul>' +
         '<li>Piltangenter eller WASD – gå</li>' +
         '<li>Z, Enter eller mellanslag – A (bekräfta / prata)</li>' +
         '<li>X eller backsteg – B (tillbaka)</li>' +
         '<li>J – journal / anslagstavla</li>' +
         '<li>H – handboken</li>' +
         '<li>K – kontroller</li>' +
         '<li>Esc – meny</li>' +
         '<li>M – ljud på/av</li>' +
         '</ul>';
    h += '<h3>Så är spelet tänkt</h3>';
    h += '<ul>' +
         '<li>Tiden i besöket är den enda mätaren du ser. Allt annat mäts i det dolda.</li>' +
         '<li>Under mötet får du bara patientens reaktion – snabb, men utan facit.</li>' +
         '<li>Efter mötet kommer förklaringen, val för val, med mätarna avslöjade.</li>' +
         '<li>Det du missar hamnar i en repetitionskö och kommer tillbaka i övningsläget.</li>' +
         '<li>Handledartipsen tonas bort när du klarat en roll med guld två gånger.</li>' +
         '</ul>';
    h += '<h3>⚠ Ansvarsfriskrivning</h3>';
    h += '<p>Innehållet är ett pedagogiskt utkast och är <b>inte kliniskt granskat</b>. ' +
         'Patienterna är påhittade. Spelet är ett diskussionsunderlag för utbildning, ' +
         'inte ett beslutsstöd. Kontrollera alltid mot Socialstyrelsens försäkringsmedicinska ' +
         'beslutsstöd, Försäkringskassans regelverk och lokala rutiner.</p>';
    ui.panel('OM SPELET', h, huvudmeny);
  }

  function startVarld() {
    ui.transition(function () {
      LESS.overworld.enter(true);
    });
  }

  /* ---------------- start ---------------- */

  function boot() {
    canvas = $('screen');
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    ui.init();
    LESS.audio.set(LESS.state.data.installningar.ljud !== false);

    /* Handboks-html återanvänds från overworld-modulen */
    LESS.handbokHtml = function () {
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
    };

    skala();
    global.addEventListener('resize', skala);
    global.addEventListener('orientationchange', function () { setTimeout(skala, 120); });

    titel();
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})(window);
