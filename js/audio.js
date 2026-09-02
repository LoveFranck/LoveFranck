/* audio.js – små fyrkantsvågsljud i Game Boy-anda (WebAudio, inga filer) */
(function (global) {
  'use strict';
  var LESS = global.LESS;

  var ctx = null, master = null, enabled = true;

  function ac() {
    if (ctx) return ctx;
    var C = global.AudioContext || global.webkitAudioContext;
    if (!C) return null;
    ctx = new C();
    master = ctx.createGain();
    master.gain.value = 0.09;
    master.connect(ctx.destination);
    return ctx;
  }

  /* En ton: fyrkantsvåg med hård av/på-kuvert = pulskanal-känsla */
  function tone(freq, start, dur, vol, type) {
    var c = ac(); if (!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || 'square';
    o.frequency.setValueAtTime(freq, start);
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(vol == null ? 1 : vol, start + 0.004);
    g.gain.setValueAtTime(vol == null ? 1 : vol, start + dur - 0.01);
    g.gain.linearRampToValueAtTime(0, start + dur);
    o.connect(g); g.connect(master);
    o.start(start); o.stop(start + dur + 0.02);
  }

  function seq(notes) {
    var c = ac(); if (!c || !enabled) return;
    if (c.state === 'suspended') c.resume();
    var t = c.currentTime + 0.01, i;
    for (i = 0; i < notes.length; i++) {
      var n = notes[i];
      if (n[0] > 0) tone(n[0], t, n[1], n[2], n[3]);
      t += n[1];
    }
  }

  var SFX = {
    /* textbokstav */
    blip:    [[880, 0.012, 0.35]],
    /* markörflytt */
    move:    [[660, 0.03, 0.5]],
    /* bekräfta */
    ok:      [[880, 0.04, 0.6], [1320, 0.06, 0.6]],
    /* tillbaka */
    back:    [[520, 0.05, 0.5], [390, 0.05, 0.5]],
    /* fel svar i faktakontroll */
    wrong:   [[220, 0.09, 0.7], [175, 0.14, 0.7]],
    /* patienten öppnar upp */
    warm:    [[660, 0.05, 0.5], [880, 0.05, 0.5], [1100, 0.09, 0.5]],
    /* patienten sluter sig */
    cold:    [[440, 0.06, 0.5], [330, 0.10, 0.5]],
    /* tiden rinner ut */
    tick:    [[300, 0.05, 0.6], [300, 0.05, 0.0], [300, 0.05, 0.6]],
    /* möte avslutat */
    done:    [[523, 0.07, 0.6], [659, 0.07, 0.6], [784, 0.07, 0.6], [1047, 0.20, 0.6]],
    /* dåligt resultat */
    fail:    [[392, 0.10, 0.6], [349, 0.10, 0.6], [294, 0.24, 0.6]],
    /* dörr / scenbyte */
    door:    [[520, 0.04, 0.5], [700, 0.04, 0.5]],
    /* nytt ärende */
    alert:   [[1047, 0.06, 0.6], [0, 0.04, 0], [1047, 0.06, 0.6]]
  };

  LESS.sfx = function (name) {
    if (!enabled) return;
    var s = SFX[name];
    if (s) seq(s);
  };

  LESS.audio = {
    toggle: function () { enabled = !enabled; if (enabled) LESS.sfx('ok'); return enabled; },
    set: function (v) { enabled = !!v; },
    get enabled() { return enabled; },
    /* måste triggas av användarinteraktion i vissa webbläsare */
    unlock: function () {
      var c = ac();
      if (c && c.state === 'suspended') c.resume();
    }
  };

})(window);
