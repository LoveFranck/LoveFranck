/* util.js – små hjälpare och global namnrymd */
(function (global) {
  'use strict';

  var LESS = global.LESS || (global.LESS = {});

  LESS.VERSION = '1.0.0';

  /* ---------- matte ---------- */
  LESS.clamp = function (v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); };
  LESS.lerp = function (a, b, t) { return a + (b - a) * t; };

  /* Deterministisk slump (så drill-ordningen går att återskapa) */
  LESS.rng = function (seed) {
    var s = seed >>> 0 || 1;
    return function () {
      s ^= s << 13; s >>>= 0;
      s ^= s >> 17;
      s ^= s << 5; s >>>= 0;
      return s / 4294967296;
    };
  };

  LESS.shuffle = function (arr, rand) {
    var a = arr.slice(), i, j, t;
    rand = rand || Math.random;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(rand() * (i + 1));
      t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  /* ---------- text ---------- */
  LESS.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  /* Minuter -> "MM:SS"-liknande klocka i besökstid */
  LESS.mmss = function (minutes) {
    var m = Math.max(0, Math.floor(minutes));
    var s = Math.round((minutes - m) * 60);
    if (s >= 60) { m += 1; s = 0; }
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  };

  /* ---------- lagring ---------- */
  var KEY = 'less-vardcentralen-save-v1';

  LESS.store = {
    load: function () {
      try {
        var raw = global.localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) { return null; }
    },
    save: function (obj) {
      try { global.localStorage.setItem(KEY, JSON.stringify(obj)); return true; }
      catch (e) { return false; }
    },
    clear: function () {
      try { global.localStorage.removeItem(KEY); } catch (e) { /* ignoreras */ }
    }
  };

  /* ---------- dom ---------- */
  LESS.$ = function (id) { return document.getElementById(id); };

  LESS.show = function (el, on) {
    if (typeof el === 'string') el = LESS.$(el);
    if (el) el.classList.toggle('hidden', !on);
  };

})(window);
