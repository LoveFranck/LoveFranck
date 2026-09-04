/* ui.js – textrutor, menyer, paneler, in-/utmatning */
(function (global) {
  'use strict';
  var LESS = global.LESS, $ = LESS.$;

  /* ================= inmatning ================= */

  var KEYMAP = {
    ArrowUp: 'up', w: 'up', W: 'up',
    ArrowDown: 'down', s: 'down', S: 'down',
    ArrowLeft: 'left', a: 'left', A: 'left',
    ArrowRight: 'right', d: 'right', D: 'right',
    z: 'a', Z: 'a', Enter: 'a', ' ': 'a',
    x: 'b', X: 'b', Backspace: 'b',
    j: 'journal', J: 'journal',
    h: 'handbok', H: 'handbok',
    k: 'kontroller', K: 'kontroller',
    Escape: 'meny',
    m: 'ljud', M: 'ljud'
  };

  var stack = [];          /* stapel av inmatningshanterare */
  var held = {};           /* nedtryckta riktningar för gång */

  var input = {
    push: function (fn) { stack.push(fn); return fn; },
    pop: function (fn) {
      if (fn) { var i = stack.lastIndexOf(fn); if (i >= 0) stack.splice(i, 1); }
      else stack.pop();
    },
    top: function () { return stack[stack.length - 1]; },
    held: held,
    /* aktuell riktning som hålls nere (senast tryckta vinner) */
    dir: function () {
      var order = ['up', 'down', 'left', 'right'], best = null, t = -1, i;
      for (i = 0; i < order.length; i++) {
        if (held[order[i]] && held[order[i]] > t) { t = held[order[i]]; best = order[i]; }
      }
      return best;
    }
  };
  LESS.input = input;

  var panelOppen = false;

  function fire(k) {
    /* Journal och handbok går att öppna var som helst, utom ovanpå en panel */
    if (!panelOppen && (k === 'journal' || k === 'handbok' || k === 'kontroller') &&
        ui.globalKeys && typeof ui.globalKeys[k] === 'function') {
      ui.globalKeys[k]();
      return;
    }
    var fn = stack[stack.length - 1];
    if (fn) fn(k);
  }

  /* Textfält (t.ex. signaturen på planschen) måste få behålla tangenterna.
     Utan det här äter spelets styrning upp a, s, d, w, z, x, h, j, k och m. */
  function skriverText() {
    var a = document.activeElement;
    return !!a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.isContentEditable);
  }
  LESS.skriverText = skriverText;

  global.addEventListener('keydown', function (e) {
    if (skriverText()) return;
    var k = KEYMAP[e.key];
    if (!k) return;
    e.preventDefault();
    LESS.audio.unlock();
    if (k === 'ljud') {
      var on = LESS.audio.toggle();
      LESS.ui.cue(on ? '♪ LJUD PÅ' : '♪ LJUD AV');
      return;
    }
    if (held[k] === undefined || !held[k]) held[k] = Date.now();
    if (e.repeat) return;
    fire(k);
  }, { passive: false });

  global.addEventListener('keyup', function (e) {
    var k = KEYMAP[e.key];
    if (k) held[k] = 0;
  });

  /* Släpp alla riktningar när fokus hoppar in i ett textfält, annars fortsätter
     spelfiguren gå medan man skriver. */
  global.addEventListener('focusin', function () {
    if (skriverText()) Object.keys(held).forEach(function (k) { held[k] = 0; });
  });

  global.addEventListener('blur', function () {
    Object.keys(held).forEach(function (k) { held[k] = 0; });
  });

  /* pekkontroller */
  function bindPad() {
    var pad = $('pad');
    if (!pad) return;
    Array.prototype.forEach.call(pad.querySelectorAll('.pb'), function (btn) {
      var key = btn.getAttribute('data-key');
      function down(e) {
        e.preventDefault();
        LESS.audio.unlock();
        if (key === 'ljud') { LESS.audio.toggle(); return; }
        held[key] = Date.now();
        fire(key);
      }
      function up(e) { e.preventDefault(); held[key] = 0; }
      btn.addEventListener('touchstart', down, { passive: false });
      btn.addEventListener('touchend', up, { passive: false });
      btn.addEventListener('mousedown', down);
      btn.addEventListener('mouseup', up);
      btn.addEventListener('mouseleave', up);
    });
  }

  /* ================= dialogruta ================= */

  var dlg = { el: null, txt: null, more: null, full: '', shown: 0, timer: null, done: null, speed: 22 };

  function startTyping(text, cb) {
    dlg.full = text;
    dlg.shown = 0;
    dlg.done = cb;
    dlg.txt.innerHTML = '';
    LESS.show(dlg.more, false);
    LESS.show(dlg.el, true);
    clearInterval(dlg.timer);
    dlg.timer = setInterval(step, dlg.speed);
  }

  function step() {
    dlg.shown += 1;
    if (dlg.shown >= dlg.full.length) {
      finishTyping();
      return;
    }
    render();
    if (dlg.shown % 3 === 0) LESS.sfx('blip');
  }

  function render() {
    /* Behåll ev. talarrad (html) intakt och skriv ut resten tecken för tecken */
    var visible = dlg.full.slice(0, dlg.shown);
    dlg.txt.innerHTML = dlg.head + LESS.esc(visible);
  }

  function finishTyping() {
    clearInterval(dlg.timer); dlg.timer = null;
    dlg.shown = dlg.full.length;
    render();
    LESS.show(dlg.more, true);
  }

  var ui = {

    globalKeys: {},

    init: function () {
      dlg.el = $('dialog'); dlg.txt = $('dialog-text'); dlg.more = $('dialog-more');
      bindPad();
      if ('ontouchstart' in global || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch');
      }
    },

    /* Visa text och vänta på A. speaker: {name, kind:'pat'|'you'|''} */
    say: function (text, speaker, cb) {
      dlg.head = speaker
        ? '<span class="speaker ' + (speaker.kind || '') + '">' + LESS.esc(speaker.name) + '</span>'
        : '';
      dlg.el.classList.remove('fraga');
      startTyping(text, cb);
      var h = input.push(function (k) {
        if (k !== 'a' && k !== 'b') return;
        if (dlg.timer) { finishTyping(); return; }
        LESS.sfx('ok');
        input.pop(h);
        LESS.show(dlg.el, false);
        if (cb) cb();
      });
    },

    /* Kedja av repliker */
    sayAll: function (lines, cb) {
      var i = 0;
      function next() {
        if (i >= lines.length) { if (cb) cb(); return; }
        var l = lines[i++];
        if (typeof l === 'string') ui.say(l, null, next);
        else ui.say(l.text, l.speaker, next);
      }
      next();
    },

    hideDialog: function () { LESS.show(dlg.el, false); clearInterval(dlg.timer); dlg.timer = null; },

    /* Statisk text utan väntan (används under val) */
    setDialog: function (text, speaker, klass) {
      dlg.head = speaker
        ? '<span class="speaker ' + (speaker.kind || '') + '">' + LESS.esc(speaker.name) + '</span>'
        : '';
      clearInterval(dlg.timer); dlg.timer = null;
      dlg.full = text; dlg.shown = text.length;
      render();
      LESS.show(dlg.more, false);
      dlg.el.classList.toggle('fraga', klass === 'fraga');
      LESS.show(dlg.el, true);
    },

    /* ================= meny ================= */
    /* items: [{text, cost, hint, disabled}]  opts: {compact, cancel, hint, start} */
    menu: function (items, opts, cb) {
      opts = opts || {};
      var el = $('menu');
      var sel = opts.start || 0;
      var i;
      for (i = 0; i < items.length && items[sel] && items[sel].disabled; i++) sel = (sel + 1) % items.length;

      el.classList.toggle('compact', !!opts.compact);
      el.classList.toggle('val', opts.layout === 'val');

      function paint() {
        var html = '', it;
        for (var n = 0; n < items.length; n++) {
          it = items[n];
          html += '<div class="opt' + (n === sel ? ' sel' : '') + (it.disabled ? ' used' : '') + '">' +
                  '<span class="cur">▶</span>' +
                  '<span class="txt">' + LESS.esc(it.text) + '</span>' +
                  (it.cost != null ? '<span class="cost">' + LESS.esc(it.cost) + '</span>' : '') +
                  '</div>';
        }
        var hint = items[sel] && items[sel].hint ? items[sel].hint : opts.hint;
        if (hint) html += '<div class="hint">' + LESS.esc(hint) + '</div>';
        if (opts.fot) html += '<div class="hint">' + LESS.esc(opts.fot) + '</div>';
        el.innerHTML = html;
        LESS.show(el, true);
        var valt = el.children[sel];
        if (valt && valt.scrollIntoView) valt.scrollIntoView({ block: 'nearest' });
      }

      function move(d) {
        var n = items.length, guard = 0;
        do {
          sel = (sel + d + n) % n;
          guard++;
        } while (items[sel].disabled && guard < n);
        LESS.sfx('move');
        paint();
      }

      var h = input.push(function (k) {
        if (k === 'up') move(-1);
        else if (k === 'down') move(1);
        else if (k === 'a') {
          if (items[sel].disabled) { LESS.sfx('wrong'); return; }
          LESS.sfx('ok');
          input.pop(h); LESS.show(el, false);
          cb(sel, items[sel]);
        } else if (k === 'b' && opts.onB) {
          LESS.sfx('ok');
          opts.onB();
        } else if (k === 'b' && opts.cancel) {
          LESS.sfx('back');
          input.pop(h); LESS.show(el, false);
          cb(-1, null);
        }
      });
      paint();
      return function close() { input.pop(h); LESS.show(el, false); };
    },

    hideMenu: function () { LESS.show($('menu'), false); },

    /* ================= hud ================= */

    hud: function (name, left, total) {
      var el = $('hud');
      if (name == null) { LESS.show(el, false); return; }
      LESS.show(el, true);
      $('hud-name').textContent = name;
      $('hud-clock-label').textContent = LESS.mmss(left);
      var frac = total > 0 ? LESS.clamp(left / total, 0, 1) : 0;
      var fill = $('hud-bar-fill');
      fill.style.width = (frac * 100) + '%';
      fill.className = frac > 0.5 ? '' : (frac > 0.2 ? 'mid' : 'low');
      el.classList.toggle('warn', frac <= 0.2);
    },

    /* ================= banner & signal ================= */

    banner: function (text) {
      var el = $('banner');
      if (!text) { LESS.show(el, false); return; }
      el.textContent = text;
      LESS.show(el, true);
    },

    cue: function (text) {
      var el = $('cue');
      el.textContent = text;
      el.classList.remove('hidden');
      /* starta om animationen */
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
      clearTimeout(el._t);
      el._t = setTimeout(function () { LESS.show(el, false); }, 900);
    },

    /* Passiv panel: visas och döljs av anroparen, som sköter inmatningen
       själv. Används av frågeplanscherna, som behöver egna tangenter. */
    visaPanel: function (titel, html, fot) {
      $('panel-title').textContent = titel;
      $('panel-body').innerHTML = html;
      var f = document.querySelector('#panel-box .panel-foot');
      if (f) f.textContent = fot || 'B / X = tillbaka';
      LESS.show($('panel'), true);
      $('panel-body').scrollTop = 0;
      panelOppen = true;
    },
    doljPanel: function () {
      LESS.show($('panel'), false);
      panelOppen = false;
    },
    panelScroll: function (delta) {
      var b = $('panel-body');
      if (b) b.scrollTop += delta;
    },
    /* Ett riktigt textfält i en panel – signaturen på planschen och namnet
       på topplistan använder samma ruta. Tangentbordet går till fältet så
       länge det har fokus (se skriverText ovan), och Enter stoppas från att
       bubbla vidare: annars läser spelet samma tryck som A och öppnar rutan
       igen i samma ögonblick som den stängts. */
    textInmatning: function (opts, klar) {
      var h = (opts.html || '') +
        '<div class="signfalt"><input id="txtfalt" type="text" maxlength="' + (opts.max || 60) + '" ' +
        'autocomplete="off" spellcheck="false" placeholder="' +
        LESS.esc(opts.platshallare || '') + '"></div>' +
        '<p class="planschbak">Enter sparar. Esc avbryter.</p>';
      ui.visaPanel(opts.titel || '', h, opts.fot || 'Enter = spara  ·  Esc = avbryt');
      var falt = $('txtfalt');
      falt.value = opts.varde || '';
      falt.focus();
      falt.select();

      var handler = null;
      function stang(sparat) {
        var v = falt.value;
        falt.removeEventListener('keydown', tangent);
        falt.blur();
        input.pop(handler);
        LESS.sfx(sparat ? 'done' : 'back');
        klar(sparat ? v : null);
      }
      function tangent(e) {
        if (e.key !== 'Enter' && e.key !== 'Escape') return;
        e.preventDefault();
        e.stopPropagation();
        stang(e.key === 'Enter');
      }
      falt.addEventListener('keydown', tangent);
      /* Reserv för pekskärm och för den som ändå trycker A eller B. */
      handler = input.push(function (k) {
        if (k === 'a') stang(true);
        else if (k === 'b' || k === 'meny') stang(false);
      });
    },

    panelSynlig: function (el) {
      var b = $('panel-body');
      if (b && el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
    },

    /* ================= panel ================= */

    panel: function (title, html, cb) {
      $('panel-title').textContent = title;
      $('panel-body').innerHTML = html;
      /* Visa först, nollställ sedan: scrollTop biter inte på ett element med
         display:none, och webbläsaren återställer då förra positionen. */
      LESS.show($('panel'), true);
      $('panel-body').scrollTop = 0;
      panelOppen = true;
      var body = $('panel-body');
      var h = input.push(function (k) {
        if (k === 'down') body.scrollTop += 22;
        else if (k === 'up') body.scrollTop -= 22;
        else if (k === 'b' || k === 'a' || k === 'journal' || k === 'handbok' ||
                 k === 'kontroller' || k === 'meny') {
          LESS.sfx('back');
          input.pop(h);
          panelOppen = false;
          LESS.show($('panel'), false);
          if (cb) cb();
        }
      });
    },

    /* ================= toning ================= */

    fade: function (on, cb) {
      var el = $('fade');
      el.classList.toggle('on', !!on);
      setTimeout(function () { if (cb) cb(); }, 190);
    },

    /* Toning ut -> gör något -> toning in */
    transition: function (mid, done) {
      ui.fade(true, function () {
        if (mid) mid();
        ui.fade(false, done);
      });
    }
  };

  LESS.ui = ui;

})(window);
