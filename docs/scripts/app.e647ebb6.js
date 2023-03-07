'undefined' != typeof globalThis
  ? globalThis
  : 'undefined' != typeof window
  ? window
  : 'undefined' != typeof global
  ? global
  : 'undefined' != typeof self && self;
var t = {};
!(function (t) {
  var e = '1.9.3';
  function i(t) {
    var e, i, o, n;
    for (i = 1, o = arguments.length; i < o; i++)
      for (e in (n = arguments[i])) t[e] = n[e];
    return t;
  }
  var o =
    Object.create ||
    (function () {
      function t() {}
      return function (e) {
        return (t.prototype = e), new t();
      };
    })();
  function n(t, e) {
    var i = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
    var o = i.call(arguments, 2);
    return function () {
      return t.apply(e, o.length ? o.concat(i.call(arguments)) : arguments);
    };
  }
  var a = 0;
  function s(t) {
    return '_leaflet_id' in t || (t._leaflet_id = ++a), t._leaflet_id;
  }
  function r(t, e, i) {
    var o, n, a, s;
    return (
      (s = function () {
        (o = !1), n && (a.apply(i, n), (n = !1));
      }),
      (a = function () {
        o
          ? (n = arguments)
          : (t.apply(i, arguments), setTimeout(s, e), (o = !0));
      }),
      a
    );
  }
  function _(t, e, i) {
    var o = e[1],
      n = e[0],
      a = o - n;
    return t === o && i ? t : ((((t - n) % a) + a) % a) + n;
  }
  function l() {
    return !1;
  }
  function h(t, e) {
    if (!1 === e) return t;
    var i = Math.pow(10, void 0 === e ? 6 : e);
    return Math.round(t * i) / i;
  }
  function u(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
  }
  function d(t) {
    return u(t).split(/\s+/);
  }
  function p(t, e) {
    for (var i in (Object.prototype.hasOwnProperty.call(t, 'options') ||
      (t.options = t.options ? o(t.options) : {}),
    e))
      t.options[i] = e[i];
    return t.options;
  }
  function c(t, e, i) {
    var o = [];
    for (var n in t)
      o.push(
        encodeURIComponent(i ? n.toUpperCase() : n) +
          '=' +
          encodeURIComponent(t[n])
      );
    return (e && -1 !== e.indexOf('?') ? '&' : '?') + o.join('&');
  }
  var m = /\{ *([\w_ -]+) *\}/g;
  function f(t, e) {
    return t.replace(m, function (t, i) {
      var o = e[i];
      if (void 0 === o) throw new Error('No value provided for variable ' + t);
      return 'function' == typeof o && (o = o(e)), o;
    });
  }
  var g =
    Array.isArray ||
    function (t) {
      return '[object Array]' === Object.prototype.toString.call(t);
    };
  function T(t, e) {
    for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
    return -1;
  }
  var A = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  function E(t) {
    return window['webkit' + t] || window['moz' + t] || window['ms' + t];
  }
  var S = 0;
  function v(t) {
    var e = +new Date(),
      i = Math.max(0, 16 - (e - S));
    return (S = e + i), window.setTimeout(t, i);
  }
  var y = window.requestAnimationFrame || E('RequestAnimationFrame') || v,
    N =
      window.cancelAnimationFrame ||
      E('CancelAnimationFrame') ||
      E('CancelRequestAnimationFrame') ||
      function (t) {
        window.clearTimeout(t);
      };
  function P(t, e, i) {
    if (!i || y !== v) return y.call(window, n(t, e));
    t.call(e);
  }
  function C(t) {
    t && N.call(window, t);
  }
  var I = {
    __proto__: null,
    extend: i,
    create: o,
    bind: n,
    get lastId() {
      return a;
    },
    stamp: s,
    throttle: r,
    wrapNum: _,
    falseFn: l,
    formatNum: h,
    trim: u,
    splitWords: d,
    setOptions: p,
    getParamString: c,
    template: f,
    isArray: g,
    indexOf: T,
    emptyImageUrl: A,
    requestFn: y,
    cancelFn: N,
    requestAnimFrame: P,
    cancelAnimFrame: C,
  };
  function O() {}
  function R(t) {
    if ('undefined' != typeof L && L && L.Mixin) {
      t = g(t) ? t : [t];
      for (var e = 0; e < t.length; e++)
        t[e] === L.Mixin.Events &&
          console.warn(
            'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
            new Error().stack
          );
    }
  }
  (O.extend = function (t) {
    var e = function () {
        p(this),
          this.initialize && this.initialize.apply(this, arguments),
          this.callInitHooks();
      },
      n = (e.__super__ = this.prototype),
      a = o(n);
    for (var s in ((a.constructor = e), (e.prototype = a), this))
      Object.prototype.hasOwnProperty.call(this, s) &&
        'prototype' !== s &&
        '__super__' !== s &&
        (e[s] = this[s]);
    return (
      t.statics && i(e, t.statics),
      t.includes && (R(t.includes), i.apply(null, [a].concat(t.includes))),
      i(a, t),
      delete a.statics,
      delete a.includes,
      a.options &&
        ((a.options = n.options ? o(n.options) : {}), i(a.options, t.options)),
      (a._initHooks = []),
      (a.callInitHooks = function () {
        if (!this._initHooksCalled) {
          n.callInitHooks && n.callInitHooks.call(this),
            (this._initHooksCalled = !0);
          for (var t = 0, e = a._initHooks.length; t < e; t++)
            a._initHooks[t].call(this);
        }
      }),
      e
    );
  }),
    (O.include = function (t) {
      var e = this.prototype.options;
      return (
        i(this.prototype, t),
        t.options &&
          ((this.prototype.options = e), this.mergeOptions(t.options)),
        this
      );
    }),
    (O.mergeOptions = function (t) {
      return i(this.prototype.options, t), this;
    }),
    (O.addInitHook = function (t) {
      var e = Array.prototype.slice.call(arguments, 1),
        i =
          'function' == typeof t
            ? t
            : function () {
                this[t].apply(this, e);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(i),
        this
      );
    });
  var b = {
    on: function (t, e, i) {
      if ('object' == typeof t) for (var o in t) this._on(o, t[o], e);
      else
        for (var n = 0, a = (t = d(t)).length; n < a; n++) this._on(t[n], e, i);
      return this;
    },
    off: function (t, e, i) {
      if (arguments.length)
        if ('object' == typeof t) for (var o in t) this._off(o, t[o], e);
        else {
          t = d(t);
          for (var n = 1 === arguments.length, a = 0, s = t.length; a < s; a++)
            n ? this._off(t[a]) : this._off(t[a], e, i);
        }
      else delete this._events;
      return this;
    },
    _on: function (t, e, i, o) {
      if ('function' == typeof e) {
        if (!1 === this._listens(t, e, i)) {
          i === this && (i = void 0);
          var n = { fn: e, ctx: i };
          o && (n.once = !0),
            (this._events = this._events || {}),
            (this._events[t] = this._events[t] || []),
            this._events[t].push(n);
        }
      } else console.warn('wrong listener type: ' + typeof e);
    },
    _off: function (t, e, i) {
      var o, n, a;
      if (this._events && (o = this._events[t]))
        if (1 !== arguments.length)
          if ('function' == typeof e) {
            var s = this._listens(t, e, i);
            if (!1 !== s) {
              var r = o[s];
              this._firingCount &&
                ((r.fn = l), (this._events[t] = o = o.slice())),
                o.splice(s, 1);
            }
          } else console.warn('wrong listener type: ' + typeof e);
        else {
          if (this._firingCount)
            for (n = 0, a = o.length; n < a; n++) o[n].fn = l;
          delete this._events[t];
        }
    },
    fire: function (t, e, o) {
      if (!this.listens(t, o)) return this;
      var n = i({}, e, {
        type: t,
        target: this,
        sourceTarget: (e && e.sourceTarget) || this,
      });
      if (this._events) {
        var a = this._events[t];
        if (a) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var s = 0, r = a.length; s < r; s++) {
            var _ = a[s],
              l = _.fn;
            _.once && this.off(t, l, _.ctx), l.call(_.ctx || this, n);
          }
          this._firingCount--;
        }
      }
      return o && this._propagateEvent(n), this;
    },
    listens: function (t, e, i, o) {
      'string' != typeof t && console.warn('"string" type argument expected');
      var n = e;
      'function' != typeof e && ((o = !!e), (n = void 0), (i = void 0));
      var a = this._events && this._events[t];
      if (a && a.length && !1 !== this._listens(t, n, i)) return !0;
      if (o)
        for (var s in this._eventParents)
          if (this._eventParents[s].listens(t, e, i, o)) return !0;
      return !1;
    },
    _listens: function (t, e, i) {
      if (!this._events) return !1;
      var o = this._events[t] || [];
      if (!e) return !!o.length;
      i === this && (i = void 0);
      for (var n = 0, a = o.length; n < a; n++)
        if (o[n].fn === e && o[n].ctx === i) return n;
      return !1;
    },
    once: function (t, e, i) {
      if ('object' == typeof t) for (var o in t) this._on(o, t[o], e, !0);
      else
        for (var n = 0, a = (t = d(t)).length; n < a; n++)
          this._on(t[n], e, i, !0);
      return this;
    },
    addEventParent: function (t) {
      return (
        (this._eventParents = this._eventParents || {}),
        (this._eventParents[s(t)] = t),
        this
      );
    },
    removeEventParent: function (t) {
      return this._eventParents && delete this._eventParents[s(t)], this;
    },
    _propagateEvent: function (t) {
      for (var e in this._eventParents)
        this._eventParents[e].fire(
          t.type,
          i({ layer: t.target, propagatedFrom: t.target }, t),
          !0
        );
    },
  };
  (b.addEventListener = b.on),
    (b.removeEventListener = b.clearAllEventListeners = b.off),
    (b.addOneTimeEventListener = b.once),
    (b.fireEvent = b.fire),
    (b.hasEventListeners = b.listens);
  var V = O.extend(b);
  function B(t, e, i) {
    (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
  }
  var x =
    Math.trunc ||
    function (t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
  function w(t, e, i) {
    return t instanceof B
      ? t
      : g(t)
      ? new B(t[0], t[1])
      : null == t
      ? t
      : 'object' == typeof t && 'x' in t && 'y' in t
      ? new B(t.x, t.y)
      : new B(t, e, i);
  }
  function D(t, e) {
    if (t)
      for (var i = e ? [t, e] : t, o = 0, n = i.length; o < n; o++)
        this.extend(i[o]);
  }
  function M(t, e) {
    return !t || t instanceof D ? t : new D(t, e);
  }
  function Y(t, e) {
    if (t)
      for (var i = e ? [t, e] : t, o = 0, n = i.length; o < n; o++)
        this.extend(i[o]);
  }
  function H(t, e) {
    return t instanceof Y ? t : new Y(t, e);
  }
  function F(t, e, i) {
    if (isNaN(t) || isNaN(e))
      throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
    (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
  }
  function $(t, e, i) {
    return t instanceof F
      ? t
      : g(t) && 'object' != typeof t[0]
      ? 3 === t.length
        ? new F(t[0], t[1], t[2])
        : 2 === t.length
        ? new F(t[0], t[1])
        : null
      : null == t
      ? t
      : 'object' == typeof t && 'lat' in t
      ? new F(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
      : void 0 === e
      ? null
      : new F(t, e, i);
  }
  (B.prototype = {
    clone: function () {
      return new B(this.x, this.y);
    },
    add: function (t) {
      return this.clone()._add(w(t));
    },
    _add: function (t) {
      return (this.x += t.x), (this.y += t.y), this;
    },
    subtract: function (t) {
      return this.clone()._subtract(w(t));
    },
    _subtract: function (t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    },
    divideBy: function (t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function (t) {
      return (this.x /= t), (this.y /= t), this;
    },
    multiplyBy: function (t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function (t) {
      return (this.x *= t), (this.y *= t), this;
    },
    scaleBy: function (t) {
      return new B(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function (t) {
      return new B(this.x / t.x, this.y / t.y);
    },
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    trunc: function () {
      return this.clone()._trunc();
    },
    _trunc: function () {
      return (this.x = x(this.x)), (this.y = x(this.y)), this;
    },
    distanceTo: function (t) {
      var e = (t = w(t)).x - this.x,
        i = t.y - this.y;
      return Math.sqrt(e * e + i * i);
    },
    equals: function (t) {
      return (t = w(t)).x === this.x && t.y === this.y;
    },
    contains: function (t) {
      return (
        (t = w(t)),
        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
      );
    },
    toString: function () {
      return 'Point(' + h(this.x) + ', ' + h(this.y) + ')';
    },
  }),
    (D.prototype = {
      extend: function (t) {
        var e, i;
        if (!t) return this;
        if (t instanceof B || 'number' == typeof t[0] || 'x' in t) e = i = w(t);
        else if (((e = (t = M(t)).min), (i = t.max), !e || !i)) return this;
        return (
          this.min || this.max
            ? ((this.min.x = Math.min(e.x, this.min.x)),
              (this.max.x = Math.max(i.x, this.max.x)),
              (this.min.y = Math.min(e.y, this.min.y)),
              (this.max.y = Math.max(i.y, this.max.y)))
            : ((this.min = e.clone()), (this.max = i.clone())),
          this
        );
      },
      getCenter: function (t) {
        return w(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      getBottomLeft: function () {
        return w(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return w(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var e, i;
        return (
          (t =
            'number' == typeof t[0] || t instanceof B ? w(t) : M(t)) instanceof
          D
            ? ((e = t.min), (i = t.max))
            : (e = i = t),
          e.x >= this.min.x &&
            i.x <= this.max.x &&
            e.y >= this.min.y &&
            i.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = M(t);
        var e = this.min,
          i = this.max,
          o = t.min,
          n = t.max,
          a = n.x >= e.x && o.x <= i.x,
          s = n.y >= e.y && o.y <= i.y;
        return a && s;
      },
      overlaps: function (t) {
        t = M(t);
        var e = this.min,
          i = this.max,
          o = t.min,
          n = t.max,
          a = n.x > e.x && o.x < i.x,
          s = n.y > e.y && o.y < i.y;
        return a && s;
      },
      isValid: function () {
        return !(!this.min || !this.max);
      },
      pad: function (t) {
        var e = this.min,
          i = this.max,
          o = Math.abs(e.x - i.x) * t,
          n = Math.abs(e.y - i.y) * t;
        return M(w(e.x - o, e.y - n), w(i.x + o, i.y + n));
      },
      equals: function (t) {
        return (
          !!t &&
          ((t = M(t)),
          this.min.equals(t.getTopLeft()) &&
            this.max.equals(t.getBottomRight()))
        );
      },
    }),
    (Y.prototype = {
      extend: function (t) {
        var e,
          i,
          o = this._southWest,
          n = this._northEast;
        if (t instanceof F) (e = t), (i = t);
        else {
          if (!(t instanceof Y)) return t ? this.extend($(t) || H(t)) : this;
          if (((e = t._southWest), (i = t._northEast), !e || !i)) return this;
        }
        return (
          o || n
            ? ((o.lat = Math.min(e.lat, o.lat)),
              (o.lng = Math.min(e.lng, o.lng)),
              (n.lat = Math.max(i.lat, n.lat)),
              (n.lng = Math.max(i.lng, n.lng)))
            : ((this._southWest = new F(e.lat, e.lng)),
              (this._northEast = new F(i.lat, i.lng))),
          this
        );
      },
      pad: function (t) {
        var e = this._southWest,
          i = this._northEast,
          o = Math.abs(e.lat - i.lat) * t,
          n = Math.abs(e.lng - i.lng) * t;
        return new Y(new F(e.lat - o, e.lng - n), new F(i.lat + o, i.lng + n));
      },
      getCenter: function () {
        return new F(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new F(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new F(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        t =
          'number' == typeof t[0] || t instanceof F || 'lat' in t ? $(t) : H(t);
        var e,
          i,
          o = this._southWest,
          n = this._northEast;
        return (
          t instanceof Y
            ? ((e = t.getSouthWest()), (i = t.getNorthEast()))
            : (e = i = t),
          e.lat >= o.lat && i.lat <= n.lat && e.lng >= o.lng && i.lng <= n.lng
        );
      },
      intersects: function (t) {
        t = H(t);
        var e = this._southWest,
          i = this._northEast,
          o = t.getSouthWest(),
          n = t.getNorthEast(),
          a = n.lat >= e.lat && o.lat <= i.lat,
          s = n.lng >= e.lng && o.lng <= i.lng;
        return a && s;
      },
      overlaps: function (t) {
        t = H(t);
        var e = this._southWest,
          i = this._northEast,
          o = t.getSouthWest(),
          n = t.getNorthEast(),
          a = n.lat > e.lat && o.lat < i.lat,
          s = n.lng > e.lng && o.lng < i.lng;
        return a && s;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(',');
      },
      equals: function (t, e) {
        return (
          !!t &&
          ((t = H(t)),
          this._southWest.equals(t.getSouthWest(), e) &&
            this._northEast.equals(t.getNorthEast(), e))
        );
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast);
      },
    }),
    (F.prototype = {
      equals: function (t, e) {
        return (
          !!t &&
          ((t = $(t)),
          Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
            (void 0 === e ? 1e-9 : e))
        );
      },
      toString: function (t) {
        return 'LatLng(' + h(this.lat, t) + ', ' + h(this.lng, t) + ')';
      },
      distanceTo: function (t) {
        return W.distance(this, $(t));
      },
      wrap: function () {
        return W.wrapLatLng(this);
      },
      toBounds: function (t) {
        var e = (180 * t) / 40075017,
          i = e / Math.cos((Math.PI / 180) * this.lat);
        return H([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
      },
      clone: function () {
        return new F(this.lat, this.lng, this.alt);
      },
    });
  var Z,
    U = {
      latLngToPoint: function (t, e) {
        var i = this.projection.project(t),
          o = this.scale(e);
        return this.transformation._transform(i, o);
      },
      pointToLatLng: function (t, e) {
        var i = this.scale(e),
          o = this.transformation.untransform(t, i);
        return this.projection.unproject(o);
      },
      project: function (t) {
        return this.projection.project(t);
      },
      unproject: function (t) {
        return this.projection.unproject(t);
      },
      scale: function (t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function (t) {
        if (this.infinite) return null;
        var e = this.projection.bounds,
          i = this.scale(t);
        return new D(
          this.transformation.transform(e.min, i),
          this.transformation.transform(e.max, i)
        );
      },
      infinite: !1,
      wrapLatLng: function (t) {
        var e = this.wrapLng ? _(t.lng, this.wrapLng, !0) : t.lng;
        return new F(
          this.wrapLat ? _(t.lat, this.wrapLat, !0) : t.lat,
          e,
          t.alt
        );
      },
      wrapLatLngBounds: function (t) {
        var e = t.getCenter(),
          i = this.wrapLatLng(e),
          o = e.lat - i.lat,
          n = e.lng - i.lng;
        if (0 === o && 0 === n) return t;
        var a = t.getSouthWest(),
          s = t.getNorthEast();
        return new Y(new F(a.lat - o, a.lng - n), new F(s.lat - o, s.lng - n));
      },
    },
    W = i({}, U, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function (t, e) {
        var i = Math.PI / 180,
          o = t.lat * i,
          n = e.lat * i,
          a = Math.sin(((e.lat - t.lat) * i) / 2),
          s = Math.sin(((e.lng - t.lng) * i) / 2),
          r = a * a + Math.cos(o) * Math.cos(n) * s * s,
          _ = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
        return this.R * _;
      },
    }),
    z = 6378137,
    k = {
      R: z,
      MAX_LATITUDE: 85.0511287798,
      project: function (t) {
        var e = Math.PI / 180,
          i = this.MAX_LATITUDE,
          o = Math.max(Math.min(i, t.lat), -i),
          n = Math.sin(o * e);
        return new B(
          this.R * t.lng * e,
          (this.R * Math.log((1 + n) / (1 - n))) / 2
        );
      },
      unproject: function (t) {
        var e = 180 / Math.PI;
        return new F(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          (t.x * e) / this.R
        );
      },
      bounds: ((Z = z * Math.PI), new D([-Z, -Z], [Z, Z])),
    };
  function G(t, e, i, o) {
    if (g(t))
      return (
        (this._a = t[0]),
        (this._b = t[1]),
        (this._c = t[2]),
        void (this._d = t[3])
      );
    (this._a = t), (this._b = e), (this._c = i), (this._d = o);
  }
  function X(t, e, i, o) {
    return new G(t, e, i, o);
  }
  G.prototype = {
    transform: function (t, e) {
      return this._transform(t.clone(), e);
    },
    _transform: function (t, e) {
      return (
        (e = e || 1),
        (t.x = e * (this._a * t.x + this._b)),
        (t.y = e * (this._c * t.y + this._d)),
        t
      );
    },
    untransform: function (t, e) {
      return (
        (e = e || 1),
        new B((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
      );
    },
  };
  var q = i({}, W, {
      code: 'EPSG:3857',
      projection: k,
      transformation: (function () {
        var t = 0.5 / (Math.PI * k.R);
        return X(t, 0.5, -t, 0.5);
      })(),
    }),
    K = i({}, q, { code: 'EPSG:900913' });
  function j(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
  }
  function J(t, e) {
    var i,
      o,
      n,
      a,
      s,
      r,
      _ = '';
    for (i = 0, n = t.length; i < n; i++) {
      for (o = 0, a = (s = t[i]).length; o < a; o++)
        _ += (o ? 'L' : 'M') + (r = s[o]).x + ' ' + r.y;
      _ += e ? (Yt.svg ? 'z' : 'x') : '';
    }
    return _ || 'M0 0';
  }
  var Q,
    tt = document.documentElement.style,
    et = 'ActiveXObject' in window,
    it = et && !document.addEventListener,
    ot = 'msLaunchUri' in navigator && !('documentMode' in document),
    nt = Mt('webkit'),
    at = Mt('android'),
    st = Mt('android 2') || Mt('android 3'),
    rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    _t = at && Mt('Google') && rt < 537 && !('AudioNode' in window),
    lt = !!window.opera,
    ht = !ot && Mt('chrome'),
    ut = Mt('gecko') && !nt && !lt && !et,
    dt = !ht && Mt('safari'),
    pt = Mt('phantom'),
    ct = 'OTransition' in tt,
    mt = 0 === navigator.platform.indexOf('Win'),
    ft = et && 'transition' in tt,
    gt =
      'WebKitCSSMatrix' in window &&
      'm11' in new window.WebKitCSSMatrix() &&
      !st,
    Tt = 'MozPerspective' in tt,
    Lt = !window.L_DISABLE_3D && (ft || gt || Tt) && !ct && !pt,
    At = 'undefined' != typeof orientation || Mt('mobile'),
    Et = At && nt,
    St = At && gt,
    vt = !window.PointerEvent && window.MSPointerEvent,
    yt = !(!window.PointerEvent && !vt),
    Nt = 'ontouchstart' in window || !!window.TouchEvent,
    Pt = !window.L_NO_TOUCH && (Nt || yt),
    Ct = At && lt,
    It = At && ut,
    Ot =
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
    Rt = (function () {
      var t = !1;
      try {
        var e = Object.defineProperty({}, 'passive', {
          get: function () {
            t = !0;
          },
        });
        window.addEventListener('testPassiveEventSupport', l, e),
          window.removeEventListener('testPassiveEventSupport', l, e);
      } catch (i) {}
      return t;
    })(),
    bt = !!document.createElement('canvas').getContext,
    Vt = !(!document.createElementNS || !j('svg').createSVGRect),
    Bt =
      !!Vt &&
      (((Q = document.createElement('div')).innerHTML = '<svg/>'),
      'http://www.w3.org/2000/svg' ===
        (Q.firstChild && Q.firstChild.namespaceURI)),
    xt =
      !Vt &&
      (function () {
        try {
          var t = document.createElement('div');
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return (
            (e.style.behavior = 'url(#default#VML)'),
            e && 'object' == typeof e.adj
          );
        } catch (i) {
          return !1;
        }
      })(),
    wt = 0 === navigator.platform.indexOf('Mac'),
    Dt = 0 === navigator.platform.indexOf('Linux');
  function Mt(t) {
    return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
  }
  var Yt = {
      ie: et,
      ielt9: it,
      edge: ot,
      webkit: nt,
      android: at,
      android23: st,
      androidStock: _t,
      opera: lt,
      chrome: ht,
      gecko: ut,
      safari: dt,
      phantom: pt,
      opera12: ct,
      win: mt,
      ie3d: ft,
      webkit3d: gt,
      gecko3d: Tt,
      any3d: Lt,
      mobile: At,
      mobileWebkit: Et,
      mobileWebkit3d: St,
      msPointer: vt,
      pointer: yt,
      touch: Pt,
      touchNative: Nt,
      mobileOpera: Ct,
      mobileGecko: It,
      retina: Ot,
      passiveEvents: Rt,
      canvas: bt,
      svg: Vt,
      vml: xt,
      inlineSvg: Bt,
      mac: wt,
      linux: Dt,
    },
    Ht = Yt.msPointer ? 'MSPointerDown' : 'pointerdown',
    Ft = Yt.msPointer ? 'MSPointerMove' : 'pointermove',
    $t = Yt.msPointer ? 'MSPointerUp' : 'pointerup',
    Zt = Yt.msPointer ? 'MSPointerCancel' : 'pointercancel',
    Ut = { touchstart: Ht, touchmove: Ft, touchend: $t, touchcancel: Zt },
    Wt = { touchstart: te, touchmove: Qt, touchend: Qt, touchcancel: Qt },
    zt = {},
    kt = !1;
  function Gt(t, e, i) {
    return (
      'touchstart' === e && Jt(),
      Wt[e]
        ? ((i = Wt[e].bind(this, i)), t.addEventListener(Ut[e], i, !1), i)
        : (console.warn('wrong event specified:', e), l)
    );
  }
  function Xt(t, e, i) {
    Ut[e]
      ? t.removeEventListener(Ut[e], i, !1)
      : console.warn('wrong event specified:', e);
  }
  function qt(t) {
    zt[t.pointerId] = t;
  }
  function Kt(t) {
    zt[t.pointerId] && (zt[t.pointerId] = t);
  }
  function jt(t) {
    delete zt[t.pointerId];
  }
  function Jt() {
    kt ||
      (document.addEventListener(Ht, qt, !0),
      document.addEventListener(Ft, Kt, !0),
      document.addEventListener($t, jt, !0),
      document.addEventListener(Zt, jt, !0),
      (kt = !0));
  }
  function Qt(t, e) {
    if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || 'mouse')) {
      for (var i in ((e.touches = []), zt)) e.touches.push(zt[i]);
      (e.changedTouches = [e]), t(e);
    }
  }
  function te(t, e) {
    e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && qe(e),
      Qt(t, e);
  }
  function ee(t) {
    var e,
      i,
      o = {};
    for (i in t) (e = t[i]), (o[i] = e && e.bind ? e.bind(t) : e);
    return (
      (t = o),
      (o.type = 'dblclick'),
      (o.detail = 2),
      (o.isTrusted = !1),
      (o._simulated = !0),
      o
    );
  }
  var ie = 200;
  function oe(t, e) {
    t.addEventListener('dblclick', e);
    var i,
      o = 0;
    function n(t) {
      if (1 === t.detail) {
        if (
          'mouse' !== t.pointerType &&
          (!t.sourceCapabilities || t.sourceCapabilities.firesTouchEvents)
        ) {
          var n = je(t);
          if (
            !n.some(function (t) {
              return t instanceof HTMLLabelElement && t.attributes.for;
            }) ||
            n.some(function (t) {
              return (
                t instanceof HTMLInputElement || t instanceof HTMLSelectElement
              );
            })
          ) {
            var a = Date.now();
            a - o <= ie ? 2 == ++i && e(ee(t)) : (i = 1), (o = a);
          }
        }
      } else i = t.detail;
    }
    return t.addEventListener('click', n), { dblclick: e, simDblclick: n };
  }
  function ne(t, e) {
    t.removeEventListener('dblclick', e.dblclick),
      t.removeEventListener('click', e.simDblclick);
  }
  var ae,
    se,
    re,
    _e,
    le,
    he = Ce([
      'transform',
      'webkitTransform',
      'OTransform',
      'MozTransform',
      'msTransform',
    ]),
    ue = Ce([
      'webkitTransition',
      'transition',
      'OTransition',
      'MozTransition',
      'msTransition',
    ]),
    de =
      'webkitTransition' === ue || 'OTransition' === ue
        ? ue + 'End'
        : 'transitionend';
  function pe(t) {
    return 'string' == typeof t ? document.getElementById(t) : t;
  }
  function ce(t, e) {
    var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
    if ((!i || 'auto' === i) && document.defaultView) {
      var o = document.defaultView.getComputedStyle(t, null);
      i = o ? o[e] : null;
    }
    return 'auto' === i ? null : i;
  }
  function me(t, e, i) {
    var o = document.createElement(t);
    return (o.className = e || ''), i && i.appendChild(o), o;
  }
  function fe(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function ge(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function Te(t) {
    var e = t.parentNode;
    e && e.lastChild !== t && e.appendChild(t);
  }
  function Le(t) {
    var e = t.parentNode;
    e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
  }
  function Ae(t, e) {
    if (void 0 !== t.classList) return t.classList.contains(e);
    var i = ye(t);
    return i.length > 0 && new RegExp('(^|\\s)' + e + '(\\s|$)').test(i);
  }
  function Ee(t, e) {
    if (void 0 !== t.classList)
      for (var i = d(e), o = 0, n = i.length; o < n; o++) t.classList.add(i[o]);
    else if (!Ae(t, e)) {
      var a = ye(t);
      ve(t, (a ? a + ' ' : '') + e);
    }
  }
  function Se(t, e) {
    void 0 !== t.classList
      ? t.classList.remove(e)
      : ve(t, u((' ' + ye(t) + ' ').replace(' ' + e + ' ', ' ')));
  }
  function ve(t, e) {
    void 0 === t.className.baseVal
      ? (t.className = e)
      : (t.className.baseVal = e);
  }
  function ye(t) {
    return (
      t.correspondingElement && (t = t.correspondingElement),
      void 0 === t.className.baseVal ? t.className : t.className.baseVal
    );
  }
  function Ne(t, e) {
    'opacity' in t.style
      ? (t.style.opacity = e)
      : 'filter' in t.style && Pe(t, e);
  }
  function Pe(t, e) {
    var i = !1,
      o = 'DXImageTransform.Microsoft.Alpha';
    try {
      i = t.filters.item(o);
    } catch (n) {
      if (1 === e) return;
    }
    (e = Math.round(100 * e)),
      i
        ? ((i.Enabled = 100 !== e), (i.Opacity = e))
        : (t.style.filter += ' progid:' + o + '(opacity=' + e + ')');
  }
  function Ce(t) {
    for (var e = document.documentElement.style, i = 0; i < t.length; i++)
      if (t[i] in e) return t[i];
    return !1;
  }
  function Ie(t, e, i) {
    var o = e || new B(0, 0);
    t.style[he] =
      (Yt.ie3d
        ? 'translate(' + o.x + 'px,' + o.y + 'px)'
        : 'translate3d(' + o.x + 'px,' + o.y + 'px,0)') +
      (i ? ' scale(' + i + ')' : '');
  }
  function Oe(t, e) {
    (t._leaflet_pos = e),
      Yt.any3d
        ? Ie(t, e)
        : ((t.style.left = e.x + 'px'), (t.style.top = e.y + 'px'));
  }
  function Re(t) {
    return t._leaflet_pos || new B(0, 0);
  }
  if ('onselectstart' in document)
    (ae = function () {
      He(window, 'selectstart', qe);
    }),
      (se = function () {
        $e(window, 'selectstart', qe);
      });
  else {
    var be = Ce([
      'userSelect',
      'WebkitUserSelect',
      'OUserSelect',
      'MozUserSelect',
      'msUserSelect',
    ]);
    (ae = function () {
      if (be) {
        var t = document.documentElement.style;
        (re = t[be]), (t[be] = 'none');
      }
    }),
      (se = function () {
        be && ((document.documentElement.style[be] = re), (re = void 0));
      });
  }
  function Ve() {
    He(window, 'dragstart', qe);
  }
  function Be() {
    $e(window, 'dragstart', qe);
  }
  function xe(t) {
    for (; -1 === t.tabIndex; ) t = t.parentNode;
    t.style &&
      (we(),
      (_e = t),
      (le = t.style.outline),
      (t.style.outline = 'none'),
      He(window, 'keydown', we));
  }
  function we() {
    _e &&
      ((_e.style.outline = le),
      (_e = void 0),
      (le = void 0),
      $e(window, 'keydown', we));
  }
  function De(t) {
    do {
      t = t.parentNode;
    } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
    return t;
  }
  function Me(t) {
    var e = t.getBoundingClientRect();
    return {
      x: e.width / t.offsetWidth || 1,
      y: e.height / t.offsetHeight || 1,
      boundingClientRect: e,
    };
  }
  var Ye = {
    __proto__: null,
    TRANSFORM: he,
    TRANSITION: ue,
    TRANSITION_END: de,
    get: pe,
    getStyle: ce,
    create: me,
    remove: fe,
    empty: ge,
    toFront: Te,
    toBack: Le,
    hasClass: Ae,
    addClass: Ee,
    removeClass: Se,
    setClass: ve,
    getClass: ye,
    setOpacity: Ne,
    testProp: Ce,
    setTransform: Ie,
    setPosition: Oe,
    getPosition: Re,
    get disableTextSelection() {
      return ae;
    },
    get enableTextSelection() {
      return se;
    },
    disableImageDrag: Ve,
    enableImageDrag: Be,
    preventOutline: xe,
    restoreOutline: we,
    getSizedParentNode: De,
    getScale: Me,
  };
  function He(t, e, i, o) {
    if (e && 'object' == typeof e) for (var n in e) We(t, n, e[n], i);
    else for (var a = 0, s = (e = d(e)).length; a < s; a++) We(t, e[a], i, o);
    return this;
  }
  var Fe = '_leaflet_events';
  function $e(t, e, i, o) {
    if (1 === arguments.length) Ze(t), delete t[Fe];
    else if (e && 'object' == typeof e) for (var n in e) ze(t, n, e[n], i);
    else if (((e = d(e)), 2 === arguments.length))
      Ze(t, function (t) {
        return -1 !== T(e, t);
      });
    else for (var a = 0, s = e.length; a < s; a++) ze(t, e[a], i, o);
    return this;
  }
  function Ze(t, e) {
    for (var i in t[Fe]) {
      var o = i.split(/\d/)[0];
      (e && !e(o)) || ze(t, o, null, null, i);
    }
  }
  var Ue = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    wheel: !('onwheel' in window) && 'mousewheel',
  };
  function We(t, e, i, o) {
    var n = e + s(i) + (o ? '_' + s(o) : '');
    if (t[Fe] && t[Fe][n]) return this;
    var a = function (e) {
        return i.call(o || t, e || window.event);
      },
      r = a;
    !Yt.touchNative && Yt.pointer && 0 === e.indexOf('touch')
      ? (a = Gt(t, e, a))
      : Yt.touch && 'dblclick' === e
      ? (a = oe(t, a))
      : 'addEventListener' in t
      ? 'touchstart' === e ||
        'touchmove' === e ||
        'wheel' === e ||
        'mousewheel' === e
        ? t.addEventListener(
            Ue[e] || e,
            a,
            !!Yt.passiveEvents && { passive: !1 }
          )
        : 'mouseenter' === e || 'mouseleave' === e
        ? ((a = function (e) {
            (e = e || window.event), ei(t, e) && r(e);
          }),
          t.addEventListener(Ue[e], a, !1))
        : t.addEventListener(e, r, !1)
      : t.attachEvent('on' + e, a),
      (t[Fe] = t[Fe] || {}),
      (t[Fe][n] = a);
  }
  function ze(t, e, i, o, n) {
    n = n || e + s(i) + (o ? '_' + s(o) : '');
    var a = t[Fe] && t[Fe][n];
    if (!a) return this;
    !Yt.touchNative && Yt.pointer && 0 === e.indexOf('touch')
      ? Xt(t, e, a)
      : Yt.touch && 'dblclick' === e
      ? ne(t, a)
      : 'removeEventListener' in t
      ? t.removeEventListener(Ue[e] || e, a, !1)
      : t.detachEvent('on' + e, a),
      (t[Fe][n] = null);
  }
  function ke(t) {
    return (
      t.stopPropagation
        ? t.stopPropagation()
        : t.originalEvent
        ? (t.originalEvent._stopped = !0)
        : (t.cancelBubble = !0),
      this
    );
  }
  function Ge(t) {
    return We(t, 'wheel', ke), this;
  }
  function Xe(t) {
    return (
      He(t, 'mousedown touchstart dblclick contextmenu', ke),
      (t._leaflet_disable_click = !0),
      this
    );
  }
  function qe(t) {
    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
  }
  function Ke(t) {
    return qe(t), ke(t), this;
  }
  function je(t) {
    if (t.composedPath) return t.composedPath();
    for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
    return e;
  }
  function Je(t, e) {
    if (!e) return new B(t.clientX, t.clientY);
    var i = Me(e),
      o = i.boundingClientRect;
    return new B(
      (t.clientX - o.left) / i.x - e.clientLeft,
      (t.clientY - o.top) / i.y - e.clientTop
    );
  }
  var Qe =
    Yt.linux && Yt.chrome
      ? window.devicePixelRatio
      : Yt.mac
      ? 3 * window.devicePixelRatio
      : window.devicePixelRatio > 0
      ? 2 * window.devicePixelRatio
      : 1;
  function ti(t) {
    return Yt.edge
      ? t.wheelDeltaY / 2
      : t.deltaY && 0 === t.deltaMode
      ? -t.deltaY / Qe
      : t.deltaY && 1 === t.deltaMode
      ? 20 * -t.deltaY
      : t.deltaY && 2 === t.deltaMode
      ? 60 * -t.deltaY
      : t.deltaX || t.deltaZ
      ? 0
      : t.wheelDelta
      ? (t.wheelDeltaY || t.wheelDelta) / 2
      : t.detail && Math.abs(t.detail) < 32765
      ? 20 * -t.detail
      : t.detail
      ? (t.detail / -32765) * 60
      : 0;
  }
  function ei(t, e) {
    var i = e.relatedTarget;
    if (!i) return !0;
    try {
      for (; i && i !== t; ) i = i.parentNode;
    } catch (o) {
      return !1;
    }
    return i !== t;
  }
  var ii = {
      __proto__: null,
      on: He,
      off: $e,
      stopPropagation: ke,
      disableScrollPropagation: Ge,
      disableClickPropagation: Xe,
      preventDefault: qe,
      stop: Ke,
      getPropagationPath: je,
      getMousePosition: Je,
      getWheelDelta: ti,
      isExternalTarget: ei,
      addListener: He,
      removeListener: $e,
    },
    oi = V.extend({
      run: function (t, e, i, o) {
        this.stop(),
          (this._el = t),
          (this._inProgress = !0),
          (this._duration = i || 0.25),
          (this._easeOutPower = 1 / Math.max(o || 0.5, 0.2)),
          (this._startPos = Re(t)),
          (this._offset = e.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire('start'),
          this._animate();
      },
      stop: function () {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function () {
        (this._animId = P(this._animate, this)), this._step();
      },
      _step: function (t) {
        var e = +new Date() - this._startTime,
          i = 1e3 * this._duration;
        e < i
          ? this._runFrame(this._easeOut(e / i), t)
          : (this._runFrame(1), this._complete());
      },
      _runFrame: function (t, e) {
        var i = this._startPos.add(this._offset.multiplyBy(t));
        e && i._round(), Oe(this._el, i), this.fire('step');
      },
      _complete: function () {
        C(this._animId), (this._inProgress = !1), this.fire('end');
      },
      _easeOut: function (t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      },
    }),
    ni = V.extend({
      options: {
        crs: q,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0,
      },
      initialize: function (t, e) {
        (e = p(this, e)),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this._initContainer(t),
          this._initLayout(),
          (this._onResize = n(this._onResize, this)),
          this._initEvents(),
          e.maxBounds && this.setMaxBounds(e.maxBounds),
          void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
          e.center &&
            void 0 !== e.zoom &&
            this.setView($(e.center), e.zoom, { reset: !0 }),
          this.callInitHooks(),
          (this._zoomAnimated =
            ue && Yt.any3d && !Yt.mobileOpera && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(),
            He(this._proxy, de, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function (t, e, o) {
        return (
          (e = void 0 === e ? this._zoom : this._limitZoom(e)),
          (t = this._limitCenter($(t), e, this.options.maxBounds)),
          (o = o || {}),
          this._stop(),
          this._loaded &&
          !o.reset &&
          !0 !== o &&
          (void 0 !== o.animate &&
            ((o.zoom = i({ animate: o.animate }, o.zoom)),
            (o.pan = i({ animate: o.animate, duration: o.duration }, o.pan))),
          this._zoom !== e
            ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, o.zoom)
            : this._tryAnimatedPan(t, o.pan))
            ? (clearTimeout(this._sizeTimer), this)
            : (this._resetView(t, e, o.pan && o.pan.noMoveStart), this)
        );
      },
      setZoom: function (t, e) {
        return this._loaded
          ? this.setView(this.getCenter(), t, { zoom: e })
          : ((this._zoom = t), this);
      },
      zoomIn: function (t, e) {
        return (
          (t = t || (Yt.any3d ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom + t, e)
        );
      },
      zoomOut: function (t, e) {
        return (
          (t = t || (Yt.any3d ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom - t, e)
        );
      },
      setZoomAround: function (t, e, i) {
        var o = this.getZoomScale(e),
          n = this.getSize().divideBy(2),
          a = (t instanceof B ? t : this.latLngToContainerPoint(t))
            .subtract(n)
            .multiplyBy(1 - 1 / o),
          s = this.containerPointToLatLng(n.add(a));
        return this.setView(s, e, { zoom: i });
      },
      _getBoundsCenterZoom: function (t, e) {
        (e = e || {}), (t = t.getBounds ? t.getBounds() : H(t));
        var i = w(e.paddingTopLeft || e.padding || [0, 0]),
          o = w(e.paddingBottomRight || e.padding || [0, 0]),
          n = this.getBoundsZoom(t, !1, i.add(o));
        if (
          (n = 'number' == typeof e.maxZoom ? Math.min(e.maxZoom, n) : n) ===
          1 / 0
        )
          return { center: t.getCenter(), zoom: n };
        var a = o.subtract(i).divideBy(2),
          s = this.project(t.getSouthWest(), n),
          r = this.project(t.getNorthEast(), n);
        return {
          center: this.unproject(s.add(r).divideBy(2).add(a), n),
          zoom: n,
        };
      },
      fitBounds: function (t, e) {
        if (!(t = H(t)).isValid()) throw new Error('Bounds are not valid.');
        var i = this._getBoundsCenterZoom(t, e);
        return this.setView(i.center, i.zoom, e);
      },
      fitWorld: function (t) {
        return this.fitBounds(
          [
            [-90, -180],
            [90, 180],
          ],
          t
        );
      },
      panTo: function (t, e) {
        return this.setView(t, this._zoom, { pan: e });
      },
      panBy: function (t, e) {
        if (((e = e || {}), !(t = w(t).round()).x && !t.y))
          return this.fire('moveend');
        if (!0 !== e.animate && !this.getSize().contains(t))
          return (
            this._resetView(
              this.unproject(this.project(this.getCenter()).add(t)),
              this.getZoom()
            ),
            this
          );
        if (
          (this._panAnim ||
            ((this._panAnim = new oi()),
            this._panAnim.on(
              {
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd,
              },
              this
            )),
          e.noMoveStart || this.fire('movestart'),
          !1 !== e.animate)
        ) {
          Ee(this._mapPane, 'leaflet-pan-anim');
          var i = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(
            this._mapPane,
            i,
            e.duration || 0.25,
            e.easeLinearity
          );
        } else this._rawPanBy(t), this.fire('move').fire('moveend');
        return this;
      },
      flyTo: function (t, e, i) {
        if (!1 === (i = i || {}).animate || !Yt.any3d)
          return this.setView(t, e, i);
        this._stop();
        var o = this.project(this.getCenter()),
          n = this.project(t),
          a = this.getSize(),
          s = this._zoom;
        (t = $(t)), (e = void 0 === e ? s : e);
        var r = Math.max(a.x, a.y),
          _ = r * this.getZoomScale(s, e),
          l = n.distanceTo(o) || 1,
          h = 1.42,
          u = h * h;
        function d(t) {
          var e =
              (_ * _ - r * r + (t ? -1 : 1) * u * u * l * l) /
              (2 * (t ? _ : r) * u * l),
            i = Math.sqrt(e * e + 1) - e;
          return i < 1e-9 ? -18 : Math.log(i);
        }
        function p(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function c(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        function m(t) {
          return p(t) / c(t);
        }
        var f = d(0);
        function g(t) {
          return r * (c(f) / c(f + h * t));
        }
        function T(t) {
          return (r * (c(f) * m(f + h * t) - p(f))) / u;
        }
        function L(t) {
          return 1 - Math.pow(1 - t, 1.5);
        }
        var A = Date.now(),
          E = (d(1) - f) / h,
          S = i.duration ? 1e3 * i.duration : 1e3 * E * 0.8;
        function v() {
          var i = (Date.now() - A) / S,
            a = L(i) * E;
          i <= 1
            ? ((this._flyToFrame = P(v, this)),
              this._move(
                this.unproject(o.add(n.subtract(o).multiplyBy(T(a) / l)), s),
                this.getScaleZoom(r / g(a), s),
                { flyTo: !0 }
              ))
            : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, i.noMoveStart), v.call(this), this;
      },
      flyToBounds: function (t, e) {
        var i = this._getBoundsCenterZoom(t, e);
        return this.flyTo(i.center, i.zoom, e);
      },
      setMaxBounds: function (t) {
        return (
          (t = H(t)),
          this.listens('moveend', this._panInsideMaxBounds) &&
            this.off('moveend', this._panInsideMaxBounds),
          t.isValid()
            ? ((this.options.maxBounds = t),
              this._loaded && this._panInsideMaxBounds(),
              this.on('moveend', this._panInsideMaxBounds))
            : ((this.options.maxBounds = null), this)
        );
      },
      setMinZoom: function (t) {
        var e = this.options.minZoom;
        return (
          (this.options.minZoom = t),
          this._loaded &&
          e !== t &&
          (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
            ? this.setZoom(t)
            : this
        );
      },
      setMaxZoom: function (t) {
        var e = this.options.maxZoom;
        return (
          (this.options.maxZoom = t),
          this._loaded &&
          e !== t &&
          (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
            ? this.setZoom(t)
            : this
        );
      },
      panInsideBounds: function (t, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter(),
          o = this._limitCenter(i, this._zoom, H(t));
        return (
          i.equals(o) || this.panTo(o, e), (this._enforcingBounds = !1), this
        );
      },
      panInside: function (t, e) {
        var i = w((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
          o = w(e.paddingBottomRight || e.padding || [0, 0]),
          n = this.project(this.getCenter()),
          a = this.project(t),
          s = this.getPixelBounds(),
          r = M([s.min.add(i), s.max.subtract(o)]),
          _ = r.getSize();
        if (!r.contains(a)) {
          this._enforcingBounds = !0;
          var l = a.subtract(r.getCenter()),
            h = r.extend(a).getSize().subtract(_);
          (n.x += l.x < 0 ? -h.x : h.x),
            (n.y += l.y < 0 ? -h.y : h.y),
            this.panTo(this.unproject(n), e),
            (this._enforcingBounds = !1);
        }
        return this;
      },
      invalidateSize: function (t) {
        if (!this._loaded) return this;
        t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
        var e = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var o = this.getSize(),
          a = e.divideBy(2).round(),
          s = o.divideBy(2).round(),
          r = a.subtract(s);
        return r.x || r.y
          ? (t.animate && t.pan
              ? this.panBy(r)
              : (t.pan && this._rawPanBy(r),
                this.fire('move'),
                t.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(
                      n(this.fire, this, 'moveend'),
                      200
                    )))
                  : this.fire('moveend')),
            this.fire('resize', { oldSize: e, newSize: o }))
          : this;
      },
      stop: function () {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire('viewreset'),
          this._stop()
        );
      },
      locate: function (t) {
        if (
          ((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)),
          !('geolocation' in navigator))
        )
          return (
            this._handleGeolocationError({
              code: 0,
              message: 'Geolocation not supported.',
            }),
            this
          );
        var e = n(this._handleGeolocationResponse, this),
          o = n(this._handleGeolocationError, this);
        return (
          t.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(
                e,
                o,
                t
              ))
            : navigator.geolocation.getCurrentPosition(e, o, t),
          this
        );
      },
      stopLocate: function () {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function (t) {
        if (this._container._leaflet_id) {
          var e = t.code,
            i =
              t.message ||
              (1 === e
                ? 'permission denied'
                : 2 === e
                ? 'position unavailable'
                : 'timeout');
          this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire('locationerror', {
              code: e,
              message: 'Geolocation error: ' + i + '.',
            });
        }
      },
      _handleGeolocationResponse: function (t) {
        if (this._container._leaflet_id) {
          var e = new F(t.coords.latitude, t.coords.longitude),
            i = e.toBounds(2 * t.coords.accuracy),
            o = this._locateOptions;
          if (o.setView) {
            var n = this.getBoundsZoom(i);
            this.setView(e, o.maxZoom ? Math.min(n, o.maxZoom) : n);
          }
          var a = { latlng: e, bounds: i, timestamp: t.timestamp };
          for (var s in t.coords)
            'number' == typeof t.coords[s] && (a[s] = t.coords[s]);
          this.fire('locationfound', a);
        }
      },
      addHandler: function (t, e) {
        if (!e) return this;
        var i = (this[t] = new e(this));
        return this._handlers.push(i), this.options[t] && i.enable(), this;
      },
      remove: function () {
        if (
          (this._initEvents(!0),
          this.options.maxBounds &&
            this.off('moveend', this._panInsideMaxBounds),
          this._containerId !== this._container._leaflet_id)
        )
          throw new Error('Map container is being reused by another instance');
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (e) {
          (this._container._leaflet_id = void 0), (this._containerId = void 0);
        }
        var t;
        for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
        this._stop(),
        fe(this._mapPane),
        this._clearControlPos && this._clearControlPos(),
        this._resizeRequest &&
          (C(this._resizeRequest), (this._resizeRequest = null)),
        this._clearHandlers(),
        this._loaded && this.fire('unload'),
        this._layers))
          this._layers[t].remove();
        for (t in this._panes) fe(this._panes[t]);
        return (
          (this._layers = []),
          (this._panes = []),
          delete this._mapPane,
          delete this._renderer,
          this
        );
      },
      createPane: function (t, e) {
        var i = me(
          'div',
          'leaflet-pane' +
            (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
          e || this._mapPane
        );
        return t && (this._panes[t] = i), i;
      },
      getCenter: function () {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter.clone()
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function () {
        return this._zoom;
      },
      getBounds: function () {
        var t = this.getPixelBounds();
        return new Y(
          this.unproject(t.getBottomLeft()),
          this.unproject(t.getTopRight())
        );
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom
          ? this._layersMinZoom || 0
          : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function (t, e, i) {
        (t = H(t)), (i = w(i || [0, 0]));
        var o = this.getZoom() || 0,
          n = this.getMinZoom(),
          a = this.getMaxZoom(),
          s = t.getNorthWest(),
          r = t.getSouthEast(),
          _ = this.getSize().subtract(i),
          l = M(this.project(r, o), this.project(s, o)).getSize(),
          h = Yt.any3d ? this.options.zoomSnap : 1,
          u = _.x / l.x,
          d = _.y / l.y,
          p = e ? Math.max(u, d) : Math.min(u, d);
        return (
          (o = this.getScaleZoom(p, o)),
          h &&
            ((o = Math.round(o / (h / 100)) * (h / 100)),
            (o = e ? Math.ceil(o / h) * h : Math.floor(o / h) * h)),
          Math.max(n, Math.min(a, o))
        );
      },
      getSize: function () {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new B(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function (t, e) {
        var i = this._getTopLeftPoint(t, e);
        return new D(i, i.add(this.getSize()));
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function (t) {
        return this.options.crs.getProjectedBounds(
          void 0 === t ? this.getZoom() : t
        );
      },
      getPane: function (t) {
        return 'string' == typeof t ? this._panes[t] : t;
      },
      getPanes: function () {
        return this._panes;
      },
      getContainer: function () {
        return this._container;
      },
      getZoomScale: function (t, e) {
        var i = this.options.crs;
        return (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e);
      },
      getScaleZoom: function (t, e) {
        var i = this.options.crs;
        e = void 0 === e ? this._zoom : e;
        var o = i.zoom(t * i.scale(e));
        return isNaN(o) ? 1 / 0 : o;
      },
      project: function (t, e) {
        return (
          (e = void 0 === e ? this._zoom : e),
          this.options.crs.latLngToPoint($(t), e)
        );
      },
      unproject: function (t, e) {
        return (
          (e = void 0 === e ? this._zoom : e),
          this.options.crs.pointToLatLng(w(t), e)
        );
      },
      layerPointToLatLng: function (t) {
        var e = w(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      latLngToLayerPoint: function (t) {
        return this.project($(t))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function (t) {
        return this.options.crs.wrapLatLng($(t));
      },
      wrapLatLngBounds: function (t) {
        return this.options.crs.wrapLatLngBounds(H(t));
      },
      distance: function (t, e) {
        return this.options.crs.distance($(t), $(e));
      },
      containerPointToLayerPoint: function (t) {
        return w(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function (t) {
        return w(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function (t) {
        var e = this.containerPointToLayerPoint(w(t));
        return this.layerPointToLatLng(e);
      },
      latLngToContainerPoint: function (t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint($(t)));
      },
      mouseEventToContainerPoint: function (t) {
        return Je(t, this._container);
      },
      mouseEventToLayerPoint: function (t) {
        return this.containerPointToLayerPoint(
          this.mouseEventToContainerPoint(t)
        );
      },
      mouseEventToLatLng: function (t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function (t) {
        var e = (this._container = pe(t));
        if (!e) throw new Error('Map container not found.');
        if (e._leaflet_id)
          throw new Error('Map container is already initialized.');
        He(e, 'scroll', this._onScroll, this), (this._containerId = s(e));
      },
      _initLayout: function () {
        var t = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && Yt.any3d),
          Ee(
            t,
            'leaflet-container' +
              (Yt.touch ? ' leaflet-touch' : '') +
              (Yt.retina ? ' leaflet-retina' : '') +
              (Yt.ielt9 ? ' leaflet-oldie' : '') +
              (Yt.safari ? ' leaflet-safari' : '') +
              (this._fadeAnimated ? ' leaflet-fade-anim' : '')
          );
        var e = ce(t, 'position');
        'absolute' !== e &&
          'relative' !== e &&
          'fixed' !== e &&
          'sticky' !== e &&
          (t.style.position = 'relative'),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function () {
        var t = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane('mapPane', this._container)),
          Oe(this._mapPane, new B(0, 0)),
          this.createPane('tilePane'),
          this.createPane('overlayPane'),
          this.createPane('shadowPane'),
          this.createPane('markerPane'),
          this.createPane('tooltipPane'),
          this.createPane('popupPane'),
          this.options.markerZoomAnimation ||
            (Ee(t.markerPane, 'leaflet-zoom-hide'),
            Ee(t.shadowPane, 'leaflet-zoom-hide'));
      },
      _resetView: function (t, e, i) {
        Oe(this._mapPane, new B(0, 0));
        var o = !this._loaded;
        (this._loaded = !0),
          (e = this._limitZoom(e)),
          this.fire('viewprereset');
        var n = this._zoom !== e;
        this._moveStart(n, i)._move(t, e)._moveEnd(n),
          this.fire('viewreset'),
          o && this.fire('load');
      },
      _moveStart: function (t, e) {
        return t && this.fire('zoomstart'), e || this.fire('movestart'), this;
      },
      _move: function (t, e, i, o) {
        void 0 === e && (e = this._zoom);
        var n = this._zoom !== e;
        return (
          (this._zoom = e),
          (this._lastCenter = t),
          (this._pixelOrigin = this._getNewPixelOrigin(t)),
          o
            ? i && i.pinch && this.fire('zoom', i)
            : ((n || (i && i.pinch)) && this.fire('zoom', i),
              this.fire('move', i)),
          this
        );
      },
      _moveEnd: function (t) {
        return t && this.fire('zoomend'), this.fire('moveend');
      },
      _stop: function () {
        return C(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function (t) {
        Oe(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function () {
        if (!this._loaded) throw new Error('Set map center and zoom first.');
      },
      _initEvents: function (t) {
        (this._targets = {}), (this._targets[s(this._container)] = this);
        var e = t ? $e : He;
        e(
          this._container,
          'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
          this._handleDOMEvent,
          this
        ),
          this.options.trackResize && e(window, 'resize', this._onResize, this),
          Yt.any3d &&
            this.options.transform3DLimit &&
            (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
      },
      _onResize: function () {
        C(this._resizeRequest),
          (this._resizeRequest = P(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function () {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function () {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >=
          this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function (t, e) {
        for (
          var i,
            o = [],
            n = 'mouseout' === e || 'mouseover' === e,
            a = t.target || t.srcElement,
            r = !1;
          a;

        ) {
          if (
            (i = this._targets[s(a)]) &&
            ('click' === e || 'preclick' === e) &&
            this._draggableMoved(i)
          ) {
            r = !0;
            break;
          }
          if (i && i.listens(e, !0)) {
            if (n && !ei(a, t)) break;
            if ((o.push(i), n)) break;
          }
          if (a === this._container) break;
          a = a.parentNode;
        }
        return o.length || r || n || !this.listens(e, !0) || (o = [this]), o;
      },
      _isClickDisabled: function (t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click) return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function (t) {
        var e = t.target || t.srcElement;
        if (
          !(
            !this._loaded ||
            e._leaflet_disable_events ||
            ('click' === t.type && this._isClickDisabled(e))
          )
        ) {
          var i = t.type;
          'mousedown' === i && xe(e), this._fireDOMEvent(t, i);
        }
      },
      _mouseEvents: [
        'click',
        'dblclick',
        'mouseover',
        'mouseout',
        'contextmenu',
      ],
      _fireDOMEvent: function (t, e, o) {
        if ('click' === t.type) {
          var n = i({}, t);
          (n.type = 'preclick'), this._fireDOMEvent(n, n.type, o);
        }
        var a = this._findEventTargets(t, e);
        if (o) {
          for (var s = [], r = 0; r < o.length; r++)
            o[r].listens(e, !0) && s.push(o[r]);
          a = s.concat(a);
        }
        if (a.length) {
          'contextmenu' === e && qe(t);
          var _ = a[0],
            l = { originalEvent: t };
          if (
            'keypress' !== t.type &&
            'keydown' !== t.type &&
            'keyup' !== t.type
          ) {
            var h = _.getLatLng && (!_._radius || _._radius <= 10);
            (l.containerPoint = h
              ? this.latLngToContainerPoint(_.getLatLng())
              : this.mouseEventToContainerPoint(t)),
              (l.layerPoint = this.containerPointToLayerPoint(
                l.containerPoint
              )),
              (l.latlng = h
                ? _.getLatLng()
                : this.layerPointToLatLng(l.layerPoint));
          }
          for (r = 0; r < a.length; r++)
            if (
              (a[r].fire(e, l, !0),
              l.originalEvent._stopped ||
                (!1 === a[r].options.bubblingMouseEvents &&
                  -1 !== T(this._mouseEvents, e)))
            )
              return;
        }
      },
      _draggableMoved: function (t) {
        return (
          ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
            t.dragging.moved()) ||
          (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function () {
        for (var t = 0, e = this._handlers.length; t < e; t++)
          this._handlers[t].disable();
      },
      whenReady: function (t, e) {
        return (
          this._loaded
            ? t.call(e || this, { target: this })
            : this.on('load', t, e),
          this
        );
      },
      _getMapPanePos: function () {
        return Re(this._mapPane) || new B(0, 0);
      },
      _moved: function () {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function (t, e) {
        return (
          t && void 0 !== e
            ? this._getNewPixelOrigin(t, e)
            : this.getPixelOrigin()
        ).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function (t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)
          ._subtract(i)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function (t, e, i) {
        var o = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(o);
      },
      _latLngBoundsToNewLayerBounds: function (t, e, i) {
        var o = this._getNewPixelOrigin(i, e);
        return M([
          this.project(t.getSouthWest(), e)._subtract(o),
          this.project(t.getNorthWest(), e)._subtract(o),
          this.project(t.getSouthEast(), e)._subtract(o),
          this.project(t.getNorthEast(), e)._subtract(o),
        ]);
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function (t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function (t, e, i) {
        if (!i) return t;
        var o = this.project(t, e),
          n = this.getSize().divideBy(2),
          a = new D(o.subtract(n), o.add(n)),
          s = this._getBoundsOffset(a, i, e);
        return Math.abs(s.x) <= 1 && Math.abs(s.y) <= 1
          ? t
          : this.unproject(o.add(s), e);
      },
      _limitOffset: function (t, e) {
        if (!e) return t;
        var i = this.getPixelBounds(),
          o = new D(i.min.add(t), i.max.add(t));
        return t.add(this._getBoundsOffset(o, e));
      },
      _getBoundsOffset: function (t, e, i) {
        var o = M(
            this.project(e.getNorthEast(), i),
            this.project(e.getSouthWest(), i)
          ),
          n = o.min.subtract(t.min),
          a = o.max.subtract(t.max);
        return new B(this._rebound(n.x, -a.x), this._rebound(n.y, -a.y));
      },
      _rebound: function (t, e) {
        return t + e > 0
          ? Math.round(t - e) / 2
          : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function (t) {
        var e = this.getMinZoom(),
          i = this.getMaxZoom(),
          o = Yt.any3d ? this.options.zoomSnap : 1;
        return o && (t = Math.round(t / o) * o), Math.max(e, Math.min(i, t));
      },
      _onPanTransitionStep: function () {
        this.fire('move');
      },
      _onPanTransitionEnd: function () {
        Se(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
      },
      _tryAnimatedPan: function (t, e) {
        var i = this._getCenterOffset(t)._trunc();
        return !(
          (!0 !== (e && e.animate) && !this.getSize().contains(i)) ||
          (this.panBy(i, e), 0)
        );
      },
      _createAnimProxy: function () {
        var t = (this._proxy = me(
          'div',
          'leaflet-proxy leaflet-zoom-animated'
        ));
        this._panes.mapPane.appendChild(t),
          this.on(
            'zoomanim',
            function (t) {
              var e = he,
                i = this._proxy.style[e];
              Ie(
                this._proxy,
                this.project(t.center, t.zoom),
                this.getZoomScale(t.zoom, 1)
              ),
                i === this._proxy.style[e] &&
                  this._animatingZoom &&
                  this._onZoomTransitionEnd();
            },
            this
          ),
          this.on('load moveend', this._animMoveEnd, this),
          this._on('unload', this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function () {
        fe(this._proxy),
          this.off('load moveend', this._animMoveEnd, this),
          delete this._proxy;
      },
      _animMoveEnd: function () {
        var t = this.getCenter(),
          e = this.getZoom();
        Ie(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function (t) {
        this._animatingZoom &&
          t.propertyName.indexOf('transform') >= 0 &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName('leaflet-zoom-animated')
          .length;
      },
      _tryAnimatedZoom: function (t, e, i) {
        if (this._animatingZoom) return !0;
        if (
          ((i = i || {}),
          !this._zoomAnimated ||
            !1 === i.animate ||
            this._nothingToAnimate() ||
            Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var o = this.getZoomScale(e),
          n = this._getCenterOffset(t)._divideBy(1 - 1 / o);
        return !(
          (!0 !== i.animate && !this.getSize().contains(n)) ||
          (P(function () {
            this._moveStart(!0, !1)._animateZoom(t, e, !0);
          }, this),
          0)
        );
      },
      _animateZoom: function (t, e, i, o) {
        this._mapPane &&
          (i &&
            ((this._animatingZoom = !0),
            (this._animateToCenter = t),
            (this._animateToZoom = e),
            Ee(this._mapPane, 'leaflet-zoom-anim')),
          this.fire('zoomanim', { center: t, zoom: e, noUpdate: o }),
          this._tempFireZoomEvent ||
            (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
          this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
          setTimeout(n(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom &&
          (this._mapPane && Se(this._mapPane, 'leaflet-zoom-anim'),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
          this._tempFireZoomEvent && this.fire('zoom'),
          delete this._tempFireZoomEvent,
          this.fire('move'),
          this._moveEnd(!0));
      },
    });
  function ai(t, e) {
    return new ni(t, e);
  }
  var si = O.extend({
      options: { position: 'topright' },
      initialize: function (t) {
        p(this, t);
      },
      getPosition: function () {
        return this.options.position;
      },
      setPosition: function (t) {
        var e = this._map;
        return (
          e && e.removeControl(this),
          (this.options.position = t),
          e && e.addControl(this),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      addTo: function (t) {
        this.remove(), (this._map = t);
        var e = (this._container = this.onAdd(t)),
          i = this.getPosition(),
          o = t._controlCorners[i];
        return (
          Ee(e, 'leaflet-control'),
          -1 !== i.indexOf('bottom')
            ? o.insertBefore(e, o.firstChild)
            : o.appendChild(e),
          this._map.on('unload', this.remove, this),
          this
        );
      },
      remove: function () {
        return this._map
          ? (fe(this._container),
            this.onRemove && this.onRemove(this._map),
            this._map.off('unload', this.remove, this),
            (this._map = null),
            this)
          : this;
      },
      _refocusOnMap: function (t) {
        this._map &&
          t &&
          t.screenX > 0 &&
          t.screenY > 0 &&
          this._map.getContainer().focus();
      },
    }),
    ri = function (t) {
      return new si(t);
    };
  ni.include({
    addControl: function (t) {
      return t.addTo(this), this;
    },
    removeControl: function (t) {
      return t.remove(), this;
    },
    _initControlPos: function () {
      var t = (this._controlCorners = {}),
        e = 'leaflet-',
        i = (this._controlContainer = me(
          'div',
          e + 'control-container',
          this._container
        ));
      function o(o, n) {
        var a = e + o + ' ' + e + n;
        t[o + n] = me('div', a, i);
      }
      o('top', 'left'),
        o('top', 'right'),
        o('bottom', 'left'),
        o('bottom', 'right');
    },
    _clearControlPos: function () {
      for (var t in this._controlCorners) fe(this._controlCorners[t]);
      fe(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer;
    },
  });
  var _i = si.extend({
      options: {
        collapsed: !0,
        position: 'topright',
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function (t, e, i, o) {
          return i < o ? -1 : o < i ? 1 : 0;
        },
      },
      initialize: function (t, e, i) {
        for (var o in (p(this, i),
        (this._layerControlInputs = []),
        (this._layers = []),
        (this._lastZIndex = 0),
        (this._handlingClick = !1),
        t))
          this._addLayer(t[o], o);
        for (o in e) this._addLayer(e[o], o, !0);
      },
      onAdd: function (t) {
        this._initLayout(),
          this._update(),
          (this._map = t),
          t.on('zoomend', this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on('add remove', this._onLayerChange, this);
        return this._container;
      },
      addTo: function (t) {
        return si.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function () {
        this._map.off('zoomend', this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off('add remove', this._onLayerChange, this);
      },
      addBaseLayer: function (t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      addOverlay: function (t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      removeLayer: function (t) {
        t.off('add remove', this._onLayerChange, this);
        var e = this._getLayer(s(t));
        return (
          e && this._layers.splice(this._layers.indexOf(e), 1),
          this._map ? this._update() : this
        );
      },
      expand: function () {
        Ee(this._container, 'leaflet-control-layers-expanded'),
          (this._section.style.height = null);
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          t < this._section.clientHeight
            ? (Ee(this._section, 'leaflet-control-layers-scrollbar'),
              (this._section.style.height = t + 'px'))
            : Se(this._section, 'leaflet-control-layers-scrollbar'),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function () {
        return Se(this._container, 'leaflet-control-layers-expanded'), this;
      },
      _initLayout: function () {
        var t = 'leaflet-control-layers',
          e = (this._container = me('div', t)),
          i = this.options.collapsed;
        e.setAttribute('aria-haspopup', !0), Xe(e), Ge(e);
        var o = (this._section = me('section', t + '-list'));
        i &&
          (this._map.on('click', this.collapse, this),
          He(
            e,
            { mouseenter: this._expandSafely, mouseleave: this.collapse },
            this
          ));
        var n = (this._layersLink = me('a', t + '-toggle', e));
        (n.href = '#'),
          (n.title = 'Layers'),
          n.setAttribute('role', 'button'),
          He(
            n,
            {
              keydown: function (t) {
                13 === t.keyCode && this._expandSafely();
              },
              click: function (t) {
                qe(t), this._expandSafely();
              },
            },
            this
          ),
          i || this.expand(),
          (this._baseLayersList = me('div', t + '-base', o)),
          (this._separator = me('div', t + '-separator', o)),
          (this._overlaysList = me('div', t + '-overlays', o)),
          e.appendChild(o);
      },
      _getLayer: function (t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && s(this._layers[e].layer) === t)
            return this._layers[e];
      },
      _addLayer: function (t, e, i) {
        this._map && t.on('add remove', this._onLayerChange, this),
          this._layers.push({ layer: t, name: e, overlay: i }),
          this.options.sortLayers &&
            this._layers.sort(
              n(function (t, e) {
                return this.options.sortFunction(
                  t.layer,
                  e.layer,
                  t.name,
                  e.name
                );
              }, this)
            ),
          this.options.autoZIndex &&
            t.setZIndex &&
            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function () {
        if (!this._container) return this;
        ge(this._baseLayersList),
          ge(this._overlaysList),
          (this._layerControlInputs = []);
        var t,
          e,
          i,
          o,
          n = 0;
        for (i = 0; i < this._layers.length; i++)
          (o = this._layers[i]),
            this._addItem(o),
            (e = e || o.overlay),
            (t = t || !o.overlay),
            (n += o.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((t = t && n > 1),
            (this._baseLayersList.style.display = t ? '' : 'none')),
          (this._separator.style.display = e && t ? '' : 'none'),
          this
        );
      },
      _onLayerChange: function (t) {
        this._handlingClick || this._update();
        var e = this._getLayer(s(t.target)),
          i = e.overlay
            ? 'add' === t.type
              ? 'overlayadd'
              : 'overlayremove'
            : 'add' === t.type
            ? 'baselayerchange'
            : null;
        i && this._map.fire(i, e);
      },
      _createRadioElement: function (t, e) {
        var i =
            '<input type="radio" class="leaflet-control-layers-selector" name="' +
            t +
            '"' +
            (e ? ' checked="checked"' : '') +
            '/>',
          o = document.createElement('div');
        return (o.innerHTML = i), o.firstChild;
      },
      _addItem: function (t) {
        var e,
          i = document.createElement('label'),
          o = this._map.hasLayer(t.layer);
        t.overlay
          ? (((e = document.createElement('input')).type = 'checkbox'),
            (e.className = 'leaflet-control-layers-selector'),
            (e.defaultChecked = o))
          : (e = this._createRadioElement('leaflet-base-layers_' + s(this), o)),
          this._layerControlInputs.push(e),
          (e.layerId = s(t.layer)),
          He(e, 'click', this._onInputClick, this);
        var n = document.createElement('span');
        n.innerHTML = ' ' + t.name;
        var a = document.createElement('span');
        return (
          i.appendChild(a),
          a.appendChild(e),
          a.appendChild(n),
          (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(
            i
          ),
          this._checkDisabledLayers(),
          i
        );
      },
      _onInputClick: function () {
        var t,
          e,
          i = this._layerControlInputs,
          o = [],
          n = [];
        this._handlingClick = !0;
        for (var a = i.length - 1; a >= 0; a--)
          (t = i[a]),
            (e = this._getLayer(t.layerId).layer),
            t.checked ? o.push(e) : t.checked || n.push(e);
        for (a = 0; a < n.length; a++)
          this._map.hasLayer(n[a]) && this._map.removeLayer(n[a]);
        for (a = 0; a < o.length; a++)
          this._map.hasLayer(o[a]) || this._map.addLayer(o[a]);
        (this._handlingClick = !1), this._refocusOnMap();
      },
      _checkDisabledLayers: function () {
        for (
          var t,
            e,
            i = this._layerControlInputs,
            o = this._map.getZoom(),
            n = i.length - 1;
          n >= 0;
          n--
        )
          (t = i[n]),
            (e = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== e.options.minZoom && o < e.options.minZoom) ||
              (void 0 !== e.options.maxZoom && o > e.options.maxZoom));
      },
      _expandIfNotCollapsed: function () {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function () {
        var t = this._section;
        He(t, 'click', qe),
          this.expand(),
          setTimeout(function () {
            $e(t, 'click', qe);
          });
      },
    }),
    li = function (t, e, i) {
      return new _i(t, e, i);
    },
    hi = si.extend({
      options: {
        position: 'topleft',
        zoomInText: '<span aria-hidden="true">+</span>',
        zoomInTitle: 'Zoom in',
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        zoomOutTitle: 'Zoom out',
      },
      onAdd: function (t) {
        var e = 'leaflet-control-zoom',
          i = me('div', e + ' leaflet-bar'),
          o = this.options;
        return (
          (this._zoomInButton = this._createButton(
            o.zoomInText,
            o.zoomInTitle,
            e + '-in',
            i,
            this._zoomIn
          )),
          (this._zoomOutButton = this._createButton(
            o.zoomOutText,
            o.zoomOutTitle,
            e + '-out',
            i,
            this._zoomOut
          )),
          this._updateDisabled(),
          t.on('zoomend zoomlevelschange', this._updateDisabled, this),
          i
        );
      },
      onRemove: function (t) {
        t.off('zoomend zoomlevelschange', this._updateDisabled, this);
      },
      disable: function () {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function () {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function (t) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function (t) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function (t, e, i, o, n) {
        var a = me('a', i, o);
        return (
          (a.innerHTML = t),
          (a.href = '#'),
          (a.title = e),
          a.setAttribute('role', 'button'),
          a.setAttribute('aria-label', e),
          Xe(a),
          He(a, 'click', Ke),
          He(a, 'click', n, this),
          He(a, 'click', this._refocusOnMap, this),
          a
        );
      },
      _updateDisabled: function () {
        var t = this._map,
          e = 'leaflet-disabled';
        Se(this._zoomInButton, e),
          Se(this._zoomOutButton, e),
          this._zoomInButton.setAttribute('aria-disabled', 'false'),
          this._zoomOutButton.setAttribute('aria-disabled', 'false'),
          (this._disabled || t._zoom === t.getMinZoom()) &&
            (Ee(this._zoomOutButton, e),
            this._zoomOutButton.setAttribute('aria-disabled', 'true')),
          (this._disabled || t._zoom === t.getMaxZoom()) &&
            (Ee(this._zoomInButton, e),
            this._zoomInButton.setAttribute('aria-disabled', 'true'));
      },
    });
  ni.mergeOptions({ zoomControl: !0 }),
    ni.addInitHook(function () {
      this.options.zoomControl &&
        ((this.zoomControl = new hi()), this.addControl(this.zoomControl));
    });
  var ui = function (t) {
      return new hi(t);
    },
    di = si.extend({
      options: {
        position: 'bottomleft',
        maxWidth: 100,
        metric: !0,
        imperial: !0,
      },
      onAdd: function (t) {
        var e = 'leaflet-control-scale',
          i = me('div', e),
          o = this.options;
        return (
          this._addScales(o, e + '-line', i),
          t.on(o.updateWhenIdle ? 'moveend' : 'move', this._update, this),
          t.whenReady(this._update, this),
          i
        );
      },
      onRemove: function (t) {
        t.off(
          this.options.updateWhenIdle ? 'moveend' : 'move',
          this._update,
          this
        );
      },
      _addScales: function (t, e, i) {
        t.metric && (this._mScale = me('div', e, i)),
          t.imperial && (this._iScale = me('div', e, i));
      },
      _update: function () {
        var t = this._map,
          e = t.getSize().y / 2,
          i = t.distance(
            t.containerPointToLatLng([0, e]),
            t.containerPointToLatLng([this.options.maxWidth, e])
          );
        this._updateScales(i);
      },
      _updateScales: function (t) {
        this.options.metric && t && this._updateMetric(t),
          this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function (t) {
        var e = this._getRoundNum(t),
          i = e < 1e3 ? e + ' m' : e / 1e3 + ' km';
        this._updateScale(this._mScale, i, e / t);
      },
      _updateImperial: function (t) {
        var e,
          i,
          o,
          n = 3.2808399 * t;
        n > 5280
          ? ((e = n / 5280),
            (i = this._getRoundNum(e)),
            this._updateScale(this._iScale, i + ' mi', i / e))
          : ((o = this._getRoundNum(n)),
            this._updateScale(this._iScale, o + ' ft', o / n));
      },
      _updateScale: function (t, e, i) {
        (t.style.width = Math.round(this.options.maxWidth * i) + 'px'),
          (t.innerHTML = e);
      },
      _getRoundNum: function (t) {
        var e = Math.pow(10, (Math.floor(t) + '').length - 1),
          i = t / e;
        return (
          e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
        );
      },
    }),
    pi = function (t) {
      return new di(t);
    },
    ci =
      '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
    mi = si.extend({
      options: {
        position: 'bottomright',
        prefix:
          '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
          (Yt.inlineSvg ? ci + ' ' : '') +
          'Leaflet</a>',
      },
      initialize: function (t) {
        p(this, t), (this._attributions = {});
      },
      onAdd: function (t) {
        for (var e in ((t.attributionControl = this),
        (this._container = me('div', 'leaflet-control-attribution')),
        Xe(this._container),
        t._layers))
          t._layers[e].getAttribution &&
            this.addAttribution(t._layers[e].getAttribution());
        return (
          this._update(),
          t.on('layeradd', this._addAttribution, this),
          this._container
        );
      },
      onRemove: function (t) {
        t.off('layeradd', this._addAttribution, this);
      },
      _addAttribution: function (t) {
        t.layer.getAttribution &&
          (this.addAttribution(t.layer.getAttribution()),
          t.layer.once(
            'remove',
            function () {
              this.removeAttribution(t.layer.getAttribution());
            },
            this
          ));
      },
      setPrefix: function (t) {
        return (this.options.prefix = t), this._update(), this;
      },
      addAttribution: function (t) {
        return t
          ? (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update(),
            this)
          : this;
      },
      removeAttribution: function (t) {
        return t
          ? (this._attributions[t] && (this._attributions[t]--, this._update()),
            this)
          : this;
      },
      _update: function () {
        if (this._map) {
          var t = [];
          for (var e in this._attributions) this._attributions[e] && t.push(e);
          var i = [];
          this.options.prefix && i.push(this.options.prefix),
            t.length && i.push(t.join(', ')),
            (this._container.innerHTML = i.join(
              ' <span aria-hidden="true">|</span> '
            ));
        }
      },
    });
  ni.mergeOptions({ attributionControl: !0 }),
    ni.addInitHook(function () {
      this.options.attributionControl && new mi().addTo(this);
    });
  var fi = function (t) {
    return new mi(t);
  };
  (si.Layers = _i),
    (si.Zoom = hi),
    (si.Scale = di),
    (si.Attribution = mi),
    (ri.layers = li),
    (ri.zoom = ui),
    (ri.scale = pi),
    (ri.attribution = fi);
  var gi = O.extend({
    initialize: function (t) {
      this._map = t;
    },
    enable: function () {
      return this._enabled || ((this._enabled = !0), this.addHooks()), this;
    },
    disable: function () {
      return this._enabled
        ? ((this._enabled = !1), this.removeHooks(), this)
        : this;
    },
    enabled: function () {
      return !!this._enabled;
    },
  });
  gi.addTo = function (t, e) {
    return t.addHandler(e, this), this;
  };
  var Ti,
    Li = { Events: b },
    Ai = Yt.touch ? 'touchstart mousedown' : 'mousedown',
    Ei = V.extend({
      options: { clickTolerance: 3 },
      initialize: function (t, e, i, o) {
        p(this, o),
          (this._element = t),
          (this._dragStartTarget = e || t),
          (this._preventOutline = i);
      },
      enable: function () {
        this._enabled ||
          (He(this._dragStartTarget, Ai, this._onDown, this),
          (this._enabled = !0));
      },
      disable: function () {
        this._enabled &&
          (Ei._dragging === this && this.finishDrag(!0),
          $e(this._dragStartTarget, Ai, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function (t) {
        if (
          this._enabled &&
          ((this._moved = !1), !Ae(this._element, 'leaflet-zoom-anim'))
        )
          if (t.touches && 1 !== t.touches.length)
            Ei._dragging === this && this.finishDrag();
          else if (
            !(
              Ei._dragging ||
              t.shiftKey ||
              (1 !== t.which && 1 !== t.button && !t.touches) ||
              ((Ei._dragging = this),
              this._preventOutline && xe(this._element),
              Ve(),
              ae(),
              this._moving)
            )
          ) {
            this.fire('down');
            var e = t.touches ? t.touches[0] : t,
              i = De(this._element);
            (this._startPoint = new B(e.clientX, e.clientY)),
              (this._startPos = Re(this._element)),
              (this._parentScale = Me(i));
            var o = 'mousedown' === t.type;
            He(document, o ? 'mousemove' : 'touchmove', this._onMove, this),
              He(
                document,
                o ? 'mouseup' : 'touchend touchcancel',
                this._onUp,
                this
              );
          }
      },
      _onMove: function (t) {
        if (this._enabled)
          if (t.touches && t.touches.length > 1) this._moved = !0;
          else {
            var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
              i = new B(e.clientX, e.clientY)._subtract(this._startPoint);
            (i.x || i.y) &&
              (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                ((i.x /= this._parentScale.x),
                (i.y /= this._parentScale.y),
                qe(t),
                this._moved ||
                  (this.fire('dragstart'),
                  (this._moved = !0),
                  Ee(document.body, 'leaflet-dragging'),
                  (this._lastTarget = t.target || t.srcElement),
                  window.SVGElementInstance &&
                    this._lastTarget instanceof window.SVGElementInstance &&
                    (this._lastTarget =
                      this._lastTarget.correspondingUseElement),
                  Ee(this._lastTarget, 'leaflet-drag-target')),
                (this._newPos = this._startPos.add(i)),
                (this._moving = !0),
                (this._lastEvent = t),
                this._updatePosition()));
          }
      },
      _updatePosition: function () {
        var t = { originalEvent: this._lastEvent };
        this.fire('predrag', t),
          Oe(this._element, this._newPos),
          this.fire('drag', t);
      },
      _onUp: function () {
        this._enabled && this.finishDrag();
      },
      finishDrag: function (t) {
        Se(document.body, 'leaflet-dragging'),
          this._lastTarget &&
            (Se(this._lastTarget, 'leaflet-drag-target'),
            (this._lastTarget = null)),
          $e(document, 'mousemove touchmove', this._onMove, this),
          $e(document, 'mouseup touchend touchcancel', this._onUp, this),
          Be(),
          se(),
          this._moved &&
            this._moving &&
            this.fire('dragend', {
              noInertia: t,
              distance: this._newPos.distanceTo(this._startPos),
            }),
          (this._moving = !1),
          (Ei._dragging = !1);
      },
    });
  function Si(t, e) {
    if (!e || !t.length) return t.slice();
    var i = e * e;
    return (t = Ni((t = Ci(t, i)), i));
  }
  function vi(t, e, i) {
    return Math.sqrt(Vi(t, e, i, !0));
  }
  function yi(t, e, i) {
    return Vi(t, e, i);
  }
  function Ni(t, e) {
    var i = t.length,
      o = new (typeof Uint8Array != void 0 + '' ? Uint8Array : Array)(i);
    (o[0] = o[i - 1] = 1), Pi(t, o, e, 0, i - 1);
    var n,
      a = [];
    for (n = 0; n < i; n++) o[n] && a.push(t[n]);
    return a;
  }
  function Pi(t, e, i, o, n) {
    var a,
      s,
      r,
      _ = 0;
    for (s = o + 1; s <= n - 1; s++)
      (r = Vi(t[s], t[o], t[n], !0)) > _ && ((a = s), (_ = r));
    _ > i && ((e[a] = 1), Pi(t, e, i, o, a), Pi(t, e, i, a, n));
  }
  function Ci(t, e) {
    for (var i = [t[0]], o = 1, n = 0, a = t.length; o < a; o++)
      bi(t[o], t[n]) > e && (i.push(t[o]), (n = o));
    return n < a - 1 && i.push(t[a - 1]), i;
  }
  function Ii(t, e, i, o, n) {
    var a,
      s,
      r,
      _ = o ? Ti : Ri(t, i),
      l = Ri(e, i);
    for (Ti = l; ; ) {
      if (!(_ | l)) return [t, e];
      if (_ & l) return !1;
      (r = Ri((s = Oi(t, e, (a = _ || l), i, n)), i)),
        a === _ ? ((t = s), (_ = r)) : ((e = s), (l = r));
    }
  }
  function Oi(t, e, i, o, n) {
    var a,
      s,
      r = e.x - t.x,
      _ = e.y - t.y,
      l = o.min,
      h = o.max;
    return (
      8 & i
        ? ((a = t.x + (r * (h.y - t.y)) / _), (s = h.y))
        : 4 & i
        ? ((a = t.x + (r * (l.y - t.y)) / _), (s = l.y))
        : 2 & i
        ? ((a = h.x), (s = t.y + (_ * (h.x - t.x)) / r))
        : 1 & i && ((a = l.x), (s = t.y + (_ * (l.x - t.x)) / r)),
      new B(a, s, n)
    );
  }
  function Ri(t, e) {
    var i = 0;
    return (
      t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
      t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
      i
    );
  }
  function bi(t, e) {
    var i = e.x - t.x,
      o = e.y - t.y;
    return i * i + o * o;
  }
  function Vi(t, e, i, o) {
    var n,
      a = e.x,
      s = e.y,
      r = i.x - a,
      _ = i.y - s,
      l = r * r + _ * _;
    return (
      l > 0 &&
        ((n = ((t.x - a) * r + (t.y - s) * _) / l) > 1
          ? ((a = i.x), (s = i.y))
          : n > 0 && ((a += r * n), (s += _ * n))),
      (r = t.x - a),
      (_ = t.y - s),
      o ? r * r + _ * _ : new B(a, s)
    );
  }
  function Bi(t) {
    return !g(t[0]) || ('object' != typeof t[0][0] && void 0 !== t[0][0]);
  }
  function xi(t) {
    return (
      console.warn(
        'Deprecated use of _flat, please use L.LineUtil.isFlat instead.'
      ),
      Bi(t)
    );
  }
  function wi(t, e) {
    var i, o, n, a, s, r, _, l;
    if (!t || 0 === t.length) throw new Error('latlngs not passed');
    Bi(t) ||
      (console.warn('latlngs are not flat! Only the first ring will be used'),
      (t = t[0]));
    var h = [];
    for (var u in t) h.push(e.project($(t[u])));
    var d = h.length;
    for (i = 0, o = 0; i < d - 1; i++) o += h[i].distanceTo(h[i + 1]) / 2;
    if (0 === o) l = h[0];
    else
      for (i = 0, a = 0; i < d - 1; i++)
        if (((s = h[i]), (r = h[i + 1]), (a += n = s.distanceTo(r)) > o)) {
          (_ = (a - o) / n),
            (l = [r.x - _ * (r.x - s.x), r.y - _ * (r.y - s.y)]);
          break;
        }
    return e.unproject(w(l));
  }
  var Di = {
    __proto__: null,
    simplify: Si,
    pointToSegmentDistance: vi,
    closestPointOnSegment: yi,
    clipSegment: Ii,
    _getEdgeIntersection: Oi,
    _getBitCode: Ri,
    _sqClosestPointOnSegment: Vi,
    isFlat: Bi,
    _flat: xi,
    polylineCenter: wi,
  };
  function Mi(t, e, i) {
    var o,
      n,
      a,
      s,
      r,
      _,
      l,
      h,
      u,
      d = [1, 4, 2, 8];
    for (n = 0, l = t.length; n < l; n++) t[n]._code = Ri(t[n], e);
    for (s = 0; s < 4; s++) {
      for (h = d[s], o = [], n = 0, a = (l = t.length) - 1; n < l; a = n++)
        (r = t[n]),
          (_ = t[a]),
          r._code & h
            ? _._code & h ||
              (((u = Oi(_, r, h, e, i))._code = Ri(u, e)), o.push(u))
            : (_._code & h &&
                (((u = Oi(_, r, h, e, i))._code = Ri(u, e)), o.push(u)),
              o.push(r));
      t = o;
    }
    return t;
  }
  function Yi(t, e) {
    var i, o, n, a, s, r, _, l, h;
    if (!t || 0 === t.length) throw new Error('latlngs not passed');
    Bi(t) ||
      (console.warn('latlngs are not flat! Only the first ring will be used'),
      (t = t[0]));
    var u = [];
    for (var d in t) u.push(e.project($(t[d])));
    var p = u.length;
    for (r = _ = l = 0, i = 0, o = p - 1; i < p; o = i++)
      (n = u[i]),
        (a = u[o]),
        (s = n.y * a.x - a.y * n.x),
        (_ += (n.x + a.x) * s),
        (l += (n.y + a.y) * s),
        (r += 3 * s);
    return (h = 0 === r ? u[0] : [_ / r, l / r]), e.unproject(w(h));
  }
  var Hi = { __proto__: null, clipPolygon: Mi, polygonCenter: Yi },
    Fi = {
      project: function (t) {
        return new B(t.lng, t.lat);
      },
      unproject: function (t) {
        return new F(t.y, t.x);
      },
      bounds: new D([-180, -90], [180, 90]),
    },
    $i = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new D(
        [-20037508.34279, -15496570.73972],
        [20037508.34279, 18764656.23138]
      ),
      project: function (t) {
        var e = Math.PI / 180,
          i = this.R,
          o = t.lat * e,
          n = this.R_MINOR / i,
          a = Math.sqrt(1 - n * n),
          s = a * Math.sin(o),
          r =
            Math.tan(Math.PI / 4 - o / 2) / Math.pow((1 - s) / (1 + s), a / 2);
        return (o = -i * Math.log(Math.max(r, 1e-10))), new B(t.lng * e * i, o);
      },
      unproject: function (t) {
        for (
          var e,
            i = 180 / Math.PI,
            o = this.R,
            n = this.R_MINOR / o,
            a = Math.sqrt(1 - n * n),
            s = Math.exp(-t.y / o),
            r = Math.PI / 2 - 2 * Math.atan(s),
            _ = 0,
            l = 0.1;
          _ < 15 && Math.abs(l) > 1e-7;
          _++
        )
          (e = a * Math.sin(r)),
            (e = Math.pow((1 - e) / (1 + e), a / 2)),
            (r += l = Math.PI / 2 - 2 * Math.atan(s * e) - r);
        return new F(r * i, (t.x * i) / o);
      },
    },
    Zi = { __proto__: null, LonLat: Fi, Mercator: $i, SphericalMercator: k },
    Ui = i({}, W, {
      code: 'EPSG:3395',
      projection: $i,
      transformation: (function () {
        var t = 0.5 / (Math.PI * $i.R);
        return X(t, 0.5, -t, 0.5);
      })(),
    }),
    Wi = i({}, W, {
      code: 'EPSG:4326',
      projection: Fi,
      transformation: X(1 / 180, 1, -1 / 180, 0.5),
    }),
    zi = i({}, U, {
      projection: Fi,
      transformation: X(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function (t, e) {
        var i = e.lng - t.lng,
          o = e.lat - t.lat;
        return Math.sqrt(i * i + o * o);
      },
      infinite: !0,
    });
  (U.Earth = W),
    (U.EPSG3395 = Ui),
    (U.EPSG3857 = q),
    (U.EPSG900913 = K),
    (U.EPSG4326 = Wi),
    (U.Simple = zi);
  var ki = V.extend({
    options: {
      pane: 'overlayPane',
      attribution: null,
      bubblingMouseEvents: !0,
    },
    addTo: function (t) {
      return t.addLayer(this), this;
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function (t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function (t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function (t) {
      return (this._map._targets[s(t)] = this), this;
    },
    removeInteractiveTarget: function (t) {
      return delete this._map._targets[s(t)], this;
    },
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (t) {
      var e = t.target;
      if (e.hasLayer(this)) {
        if (
          ((this._map = e),
          (this._zoomAnimated = e._zoomAnimated),
          this.getEvents)
        ) {
          var i = this.getEvents();
          e.on(i, this),
            this.once(
              'remove',
              function () {
                e.off(i, this);
              },
              this
            );
        }
        this.onAdd(e), this.fire('add'), e.fire('layeradd', { layer: this });
      }
    },
  });
  ni.include({
    addLayer: function (t) {
      if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
      var e = s(t);
      return (
        this._layers[e] ||
          ((this._layers[e] = t),
          (t._mapToAdd = this),
          t.beforeAdd && t.beforeAdd(this),
          this.whenReady(t._layerAdd, t)),
        this
      );
    },
    removeLayer: function (t) {
      var e = s(t);
      return this._layers[e]
        ? (this._loaded && t.onRemove(this),
          delete this._layers[e],
          this._loaded &&
            (this.fire('layerremove', { layer: t }), t.fire('remove')),
          (t._map = t._mapToAdd = null),
          this)
        : this;
    },
    hasLayer: function (t) {
      return s(t) in this._layers;
    },
    eachLayer: function (t, e) {
      for (var i in this._layers) t.call(e, this._layers[i]);
      return this;
    },
    _addLayers: function (t) {
      for (var e = 0, i = (t = t ? (g(t) ? t : [t]) : []).length; e < i; e++)
        this.addLayer(t[e]);
    },
    _addZoomLimit: function (t) {
      (isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
        ((this._zoomBoundLayers[s(t)] = t), this._updateZoomLevels());
    },
    _removeZoomLimit: function (t) {
      var e = s(t);
      this._zoomBoundLayers[e] &&
        (delete this._zoomBoundLayers[e], this._updateZoomLevels());
    },
    _updateZoomLevels: function () {
      var t = 1 / 0,
        e = -1 / 0,
        i = this._getZoomSpan();
      for (var o in this._zoomBoundLayers) {
        var n = this._zoomBoundLayers[o].options;
        (t = void 0 === n.minZoom ? t : Math.min(t, n.minZoom)),
          (e = void 0 === n.maxZoom ? e : Math.max(e, n.maxZoom));
      }
      (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
        (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
        i !== this._getZoomSpan() && this.fire('zoomlevelschange'),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    },
  });
  var Gi = ki.extend({
      initialize: function (t, e) {
        var i, o;
        if ((p(this, e), (this._layers = {}), t))
          for (i = 0, o = t.length; i < o; i++) this.addLayer(t[i]);
      },
      addLayer: function (t) {
        var e = this.getLayerId(t);
        return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
      },
      removeLayer: function (t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return (
          this._map &&
            this._layers[e] &&
            this._map.removeLayer(this._layers[e]),
          delete this._layers[e],
          this
        );
      },
      hasLayer: function (t) {
        return ('number' == typeof t ? t : this.getLayerId(t)) in this._layers;
      },
      clearLayers: function () {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function (t) {
        var e,
          i,
          o = Array.prototype.slice.call(arguments, 1);
        for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, o);
        return this;
      },
      onAdd: function (t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function (t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function (t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      getLayer: function (t) {
        return this._layers[t];
      },
      getLayers: function () {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function (t) {
        return this.invoke('setZIndex', t);
      },
      getLayerId: function (t) {
        return s(t);
      },
    }),
    Xi = function (t, e) {
      return new Gi(t, e);
    },
    qi = Gi.extend({
      addLayer: function (t) {
        return this.hasLayer(t)
          ? this
          : (t.addEventParent(this),
            Gi.prototype.addLayer.call(this, t),
            this.fire('layeradd', { layer: t }));
      },
      removeLayer: function (t) {
        return this.hasLayer(t)
          ? (t in this._layers && (t = this._layers[t]),
            t.removeEventParent(this),
            Gi.prototype.removeLayer.call(this, t),
            this.fire('layerremove', { layer: t }))
          : this;
      },
      setStyle: function (t) {
        return this.invoke('setStyle', t);
      },
      bringToFront: function () {
        return this.invoke('bringToFront');
      },
      bringToBack: function () {
        return this.invoke('bringToBack');
      },
      getBounds: function () {
        var t = new Y();
        for (var e in this._layers) {
          var i = this._layers[e];
          t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return t;
      },
    }),
    Ki = function (t, e) {
      return new qi(t, e);
    },
    ji = O.extend({
      options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
      initialize: function (t) {
        p(this, t);
      },
      createIcon: function (t) {
        return this._createIcon('icon', t);
      },
      createShadow: function (t) {
        return this._createIcon('shadow', t);
      },
      _createIcon: function (t, e) {
        var i = this._getIconUrl(t);
        if (!i) {
          if ('icon' === t)
            throw new Error('iconUrl not set in Icon options (see the docs).');
          return null;
        }
        var o = this._createImg(i, e && 'IMG' === e.tagName ? e : null);
        return (
          this._setIconStyles(o, t),
          (this.options.crossOrigin || '' === this.options.crossOrigin) &&
            (o.crossOrigin =
              !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
          o
        );
      },
      _setIconStyles: function (t, e) {
        var i = this.options,
          o = i[e + 'Size'];
        'number' == typeof o && (o = [o, o]);
        var n = w(o),
          a = w(
            ('shadow' === e && i.shadowAnchor) ||
              i.iconAnchor ||
              (n && n.divideBy(2, !0))
          );
        (t.className = 'leaflet-marker-' + e + ' ' + (i.className || '')),
          a &&
            ((t.style.marginLeft = -a.x + 'px'),
            (t.style.marginTop = -a.y + 'px')),
          n && ((t.style.width = n.x + 'px'), (t.style.height = n.y + 'px'));
      },
      _createImg: function (t, e) {
        return ((e = e || document.createElement('img')).src = t), e;
      },
      _getIconUrl: function (t) {
        return (
          (Yt.retina && this.options[t + 'RetinaUrl']) ||
          this.options[t + 'Url']
        );
      },
    });
  function Ji(t) {
    return new ji(t);
  }
  var Qi = ji.extend({
      options: {
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      },
      _getIconUrl: function (t) {
        return (
          'string' != typeof Qi.imagePath &&
            (Qi.imagePath = this._detectIconPath()),
          (this.options.imagePath || Qi.imagePath) +
            ji.prototype._getIconUrl.call(this, t)
        );
      },
      _stripUrl: function (t) {
        var e = function (t, e, i) {
          var o = e.exec(t);
          return o && o[i];
        };
        return (
          (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) &&
          e(t, /^(.*)marker-icon\.png$/, 1)
        );
      },
      _detectIconPath: function () {
        var t = me('div', 'leaflet-default-icon-path', document.body),
          e = ce(t, 'background-image') || ce(t, 'backgroundImage');
        if ((document.body.removeChild(t), (e = this._stripUrl(e)))) return e;
        var i = document.querySelector('link[href$="leaflet.css"]');
        return i
          ? i.href.substring(0, i.href.length - 'leaflet.css'.length - 1)
          : '';
      },
    }),
    to = gi.extend({
      initialize: function (t) {
        this._marker = t;
      },
      addHooks: function () {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Ei(t, t, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .enable(),
          Ee(t, 'leaflet-marker-draggable');
      },
      removeHooks: function () {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          )
          .disable(),
          this._marker._icon &&
            Se(this._marker._icon, 'leaflet-marker-draggable');
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function (t) {
        var e = this._marker,
          i = e._map,
          o = this._marker.options.autoPanSpeed,
          n = this._marker.options.autoPanPadding,
          a = Re(e._icon),
          s = i.getPixelBounds(),
          r = i.getPixelOrigin(),
          _ = M(s.min._subtract(r).add(n), s.max._subtract(r).subtract(n));
        if (!_.contains(a)) {
          var l = w(
            (Math.max(_.max.x, a.x) - _.max.x) / (s.max.x - _.max.x) -
              (Math.min(_.min.x, a.x) - _.min.x) / (s.min.x - _.min.x),
            (Math.max(_.max.y, a.y) - _.max.y) / (s.max.y - _.max.y) -
              (Math.min(_.min.y, a.y) - _.min.y) / (s.min.y - _.min.y)
          ).multiplyBy(o);
          i.panBy(l, { animate: !1 }),
            this._draggable._newPos._add(l),
            this._draggable._startPos._add(l),
            Oe(e._icon, this._draggable._newPos),
            this._onDrag(t),
            (this._panRequest = P(this._adjustPan.bind(this, t)));
        }
      },
      _onDragStart: function () {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker.closePopup && this._marker.closePopup(),
          this._marker.fire('movestart').fire('dragstart');
      },
      _onPreDrag: function (t) {
        this._marker.options.autoPan &&
          (C(this._panRequest),
          (this._panRequest = P(this._adjustPan.bind(this, t))));
      },
      _onDrag: function (t) {
        var e = this._marker,
          i = e._shadow,
          o = Re(e._icon),
          n = e._map.layerPointToLatLng(o);
        i && Oe(i, o),
          (e._latlng = n),
          (t.latlng = n),
          (t.oldLatLng = this._oldLatLng),
          e.fire('move', t).fire('drag', t);
      },
      _onDragEnd: function (t) {
        C(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire('moveend').fire('dragend', t);
      },
    }),
    eo = ki.extend({
      options: {
        icon: new Qi(),
        interactive: !0,
        keyboard: !0,
        title: '',
        alt: 'Marker',
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: 'markerPane',
        shadowPane: 'shadowPane',
        bubblingMouseEvents: !1,
        autoPanOnFocus: !0,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10,
      },
      initialize: function (t, e) {
        p(this, e), (this._latlng = $(t));
      },
      onAdd: function (t) {
        (this._zoomAnimated =
          this._zoomAnimated && t.options.markerZoomAnimation),
          this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function (t) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function () {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        var e = this._latlng;
        return (
          (this._latlng = $(t)),
          this.update(),
          this.fire('move', { oldLatLng: e, latlng: this._latlng })
        );
      },
      setZIndexOffset: function (t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      getIcon: function () {
        return this.options.icon;
      },
      setIcon: function (t) {
        return (
          (this.options.icon = t),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function () {
        return this._icon;
      },
      update: function () {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function () {
        var t = this.options,
          e = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
          i = t.icon.createIcon(this._icon),
          o = !1;
        i !== this._icon &&
          (this._icon && this._removeIcon(),
          (o = !0),
          t.title && (i.title = t.title),
          'IMG' === i.tagName && (i.alt = t.alt || '')),
          Ee(i, e),
          t.keyboard && ((i.tabIndex = '0'), i.setAttribute('role', 'button')),
          (this._icon = i),
          t.riseOnHover &&
            this.on({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
          this.options.autoPanOnFocus && He(i, 'focus', this._panOnFocus, this);
        var n = t.icon.createShadow(this._shadow),
          a = !1;
        n !== this._shadow && (this._removeShadow(), (a = !0)),
          n && (Ee(n, e), (n.alt = '')),
          (this._shadow = n),
          t.opacity < 1 && this._updateOpacity(),
          o && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          n && a && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function () {
        this.options.riseOnHover &&
          this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex,
          }),
          this.options.autoPanOnFocus &&
            $e(this._icon, 'focus', this._panOnFocus, this),
          fe(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function () {
        this._shadow && fe(this._shadow), (this._shadow = null);
      },
      _setPos: function (t) {
        this._icon && Oe(this._icon, t),
          this._shadow && Oe(this._shadow, t),
          (this._zIndex = t.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function (t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function (t) {
        var e = this._map
          ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
          .round();
        this._setPos(e);
      },
      _initInteraction: function () {
        if (
          this.options.interactive &&
          (Ee(this._icon, 'leaflet-interactive'),
          this.addInteractiveTarget(this._icon),
          to)
        ) {
          var t = this.options.draggable;
          this.dragging &&
            ((t = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new to(this)),
            t && this.dragging.enable();
        }
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._map && this._updateOpacity(), this
        );
      },
      _updateOpacity: function () {
        var t = this.options.opacity;
        this._icon && Ne(this._icon, t), this._shadow && Ne(this._shadow, t);
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function () {
        this._updateZIndex(0);
      },
      _panOnFocus: function () {
        var t = this._map;
        if (t) {
          var e = this.options.icon.options,
            i = e.iconSize ? w(e.iconSize) : w(0, 0),
            o = e.iconAnchor ? w(e.iconAnchor) : w(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: o,
            paddingBottomRight: i.subtract(o),
          });
        }
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor;
      },
    });
  function io(t, e) {
    return new eo(t, e);
  }
  var oo = ki.extend({
      options: {
        stroke: !0,
        color: '#3388ff',
        weight: 3,
        opacity: 1,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: 'evenodd',
        interactive: !0,
        bubblingMouseEvents: !0,
      },
      beforeAdd: function (t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function () {
        this._renderer._initPath(this),
          this._reset(),
          this._renderer._addPath(this);
      },
      onRemove: function () {
        this._renderer._removePath(this);
      },
      redraw: function () {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function (t) {
        return (
          p(this, t),
          this._renderer &&
            (this._renderer._updateStyle(this),
            this.options.stroke &&
              t &&
              Object.prototype.hasOwnProperty.call(t, 'weight') &&
              this._updateBounds()),
          this
        );
      },
      bringToFront: function () {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function () {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function () {
        return this._path;
      },
      _reset: function () {
        this._project(), this._update();
      },
      _clickTolerance: function () {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) +
          (this._renderer.options.tolerance || 0)
        );
      },
    }),
    no = oo.extend({
      options: { fill: !0, radius: 10 },
      initialize: function (t, e) {
        p(this, e), (this._latlng = $(t)), (this._radius = this.options.radius);
      },
      setLatLng: function (t) {
        var e = this._latlng;
        return (
          (this._latlng = $(t)),
          this.redraw(),
          this.fire('move', { oldLatLng: e, latlng: this._latlng })
        );
      },
      getLatLng: function () {
        return this._latlng;
      },
      setRadius: function (t) {
        return (this.options.radius = this._radius = t), this.redraw();
      },
      getRadius: function () {
        return this._radius;
      },
      setStyle: function (t) {
        var e = (t && t.radius) || this._radius;
        return oo.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function () {
        (this._point = this._map.latLngToLayerPoint(this._latlng)),
          this._updateBounds();
      },
      _updateBounds: function () {
        var t = this._radius,
          e = this._radiusY || t,
          i = this._clickTolerance(),
          o = [t + i, e + i];
        this._pxBounds = new D(this._point.subtract(o), this._point.add(o));
      },
      _update: function () {
        this._map && this._updatePath();
      },
      _updatePath: function () {
        this._renderer._updateCircle(this);
      },
      _empty: function () {
        return (
          this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        );
      },
      _containsPoint: function (t) {
        return (
          t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        );
      },
    });
  function ao(t, e) {
    return new no(t, e);
  }
  var so = no.extend({
    initialize: function (t, e, o) {
      if (
        ('number' == typeof e && (e = i({}, o, { radius: e })),
        p(this, e),
        (this._latlng = $(t)),
        isNaN(this.options.radius))
      )
        throw new Error('Circle radius cannot be NaN');
      this._mRadius = this.options.radius;
    },
    setRadius: function (t) {
      return (this._mRadius = t), this.redraw();
    },
    getRadius: function () {
      return this._mRadius;
    },
    getBounds: function () {
      var t = [this._radius, this._radiusY || this._radius];
      return new Y(
        this._map.layerPointToLatLng(this._point.subtract(t)),
        this._map.layerPointToLatLng(this._point.add(t))
      );
    },
    setStyle: oo.prototype.setStyle,
    _project: function () {
      var t = this._latlng.lng,
        e = this._latlng.lat,
        i = this._map,
        o = i.options.crs;
      if (o.distance === W.distance) {
        var n = Math.PI / 180,
          a = this._mRadius / W.R / n,
          s = i.project([e + a, t]),
          r = i.project([e - a, t]),
          _ = s.add(r).divideBy(2),
          l = i.unproject(_).lat,
          h =
            Math.acos(
              (Math.cos(a * n) - Math.sin(e * n) * Math.sin(l * n)) /
                (Math.cos(e * n) * Math.cos(l * n))
            ) / n;
        (isNaN(h) || 0 === h) && (h = a / Math.cos((Math.PI / 180) * e)),
          (this._point = _.subtract(i.getPixelOrigin())),
          (this._radius = isNaN(h) ? 0 : _.x - i.project([l, t - h]).x),
          (this._radiusY = _.y - s.y);
      } else {
        var u = o.unproject(
          o.project(this._latlng).subtract([this._mRadius, 0])
        );
        (this._point = i.latLngToLayerPoint(this._latlng)),
          (this._radius = this._point.x - i.latLngToLayerPoint(u).x);
      }
      this._updateBounds();
    },
  });
  function ro(t, e, i) {
    return new so(t, e, i);
  }
  var _o = oo.extend({
    options: { smoothFactor: 1, noClip: !1 },
    initialize: function (t, e) {
      p(this, e), this._setLatLngs(t);
    },
    getLatLngs: function () {
      return this._latlngs;
    },
    setLatLngs: function (t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function () {
      return !this._latlngs.length;
    },
    closestLayerPoint: function (t) {
      for (
        var e, i, o = 1 / 0, n = null, a = Vi, s = 0, r = this._parts.length;
        s < r;
        s++
      )
        for (var _ = this._parts[s], l = 1, h = _.length; l < h; l++) {
          var u = a(t, (e = _[l - 1]), (i = _[l]), !0);
          u < o && ((o = u), (n = a(t, e, i)));
        }
      return n && (n.distance = Math.sqrt(o)), n;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error('Must add layer to map before using getCenter()');
      return wi(this._defaultShape(), this._map.options.crs);
    },
    getBounds: function () {
      return this._bounds;
    },
    addLatLng: function (t, e) {
      return (
        (e = e || this._defaultShape()),
        (t = $(t)),
        e.push(t),
        this._bounds.extend(t),
        this.redraw()
      );
    },
    _setLatLngs: function (t) {
      (this._bounds = new Y()), (this._latlngs = this._convertLatLngs(t));
    },
    _defaultShape: function () {
      return Bi(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function (t) {
      for (var e = [], i = Bi(t), o = 0, n = t.length; o < n; o++)
        i
          ? ((e[o] = $(t[o])), this._bounds.extend(e[o]))
          : (e[o] = this._convertLatLngs(t[o]));
      return e;
    },
    _project: function () {
      var t = new D();
      (this._rings = []),
        this._projectLatlngs(this._latlngs, this._rings, t),
        this._bounds.isValid() &&
          t.isValid() &&
          ((this._rawPxBounds = t), this._updateBounds());
    },
    _updateBounds: function () {
      var t = this._clickTolerance(),
        e = new B(t, t);
      this._rawPxBounds &&
        (this._pxBounds = new D([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e),
        ]));
    },
    _projectLatlngs: function (t, e, i) {
      var o,
        n,
        a = t[0] instanceof F,
        s = t.length;
      if (a) {
        for (n = [], o = 0; o < s; o++)
          (n[o] = this._map.latLngToLayerPoint(t[o])), i.extend(n[o]);
        e.push(n);
      } else for (o = 0; o < s; o++) this._projectLatlngs(t[o], e, i);
    },
    _clipPoints: function () {
      var t = this._renderer._bounds;
      if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
        if (this.options.noClip) this._parts = this._rings;
        else {
          var e,
            i,
            o,
            n,
            a,
            s,
            r,
            _ = this._parts;
          for (e = 0, o = 0, n = this._rings.length; e < n; e++)
            for (i = 0, a = (r = this._rings[e]).length; i < a - 1; i++)
              (s = Ii(r[i], r[i + 1], t, i, !0)) &&
                ((_[o] = _[o] || []),
                _[o].push(s[0]),
                (s[1] === r[i + 1] && i !== a - 2) || (_[o].push(s[1]), o++));
        }
    },
    _simplifyPoints: function () {
      for (
        var t = this._parts, e = this.options.smoothFactor, i = 0, o = t.length;
        i < o;
        i++
      )
        t[i] = Si(t[i], e);
    },
    _update: function () {
      this._map &&
        (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function () {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function (t, e) {
      var i,
        o,
        n,
        a,
        s,
        r,
        _ = this._clickTolerance();
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (i = 0, a = this._parts.length; i < a; i++)
        for (o = 0, n = (s = (r = this._parts[i]).length) - 1; o < s; n = o++)
          if ((e || 0 !== o) && vi(t, r[n], r[o]) <= _) return !0;
      return !1;
    },
  });
  function lo(t, e) {
    return new _o(t, e);
  }
  _o._flat = xi;
  var ho = _o.extend({
    options: { fill: !0 },
    isEmpty: function () {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error('Must add layer to map before using getCenter()');
      return Yi(this._defaultShape(), this._map.options.crs);
    },
    _convertLatLngs: function (t) {
      var e = _o.prototype._convertLatLngs.call(this, t),
        i = e.length;
      return i >= 2 && e[0] instanceof F && e[0].equals(e[i - 1]) && e.pop(), e;
    },
    _setLatLngs: function (t) {
      _o.prototype._setLatLngs.call(this, t),
        Bi(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function () {
      return Bi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function () {
      var t = this._renderer._bounds,
        e = this.options.weight,
        i = new B(e, e);
      if (
        ((t = new D(t.min.subtract(i), t.max.add(i))),
        (this._parts = []),
        this._pxBounds && this._pxBounds.intersects(t))
      )
        if (this.options.noClip) this._parts = this._rings;
        else
          for (var o, n = 0, a = this._rings.length; n < a; n++)
            (o = Mi(this._rings[n], t, !0)).length && this._parts.push(o);
    },
    _updatePath: function () {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function (t) {
      var e,
        i,
        o,
        n,
        a,
        s,
        r,
        _,
        l = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (n = 0, r = this._parts.length; n < r; n++)
        for (a = 0, s = (_ = (e = this._parts[n]).length) - 1; a < _; s = a++)
          (i = e[a]),
            (o = e[s]),
            i.y > t.y != o.y > t.y &&
              t.x < ((o.x - i.x) * (t.y - i.y)) / (o.y - i.y) + i.x &&
              (l = !l);
      return l || _o.prototype._containsPoint.call(this, t, !0);
    },
  });
  function uo(t, e) {
    return new ho(t, e);
  }
  var po = qi.extend({
    initialize: function (t, e) {
      p(this, e), (this._layers = {}), t && this.addData(t);
    },
    addData: function (t) {
      var e,
        i,
        o,
        n = g(t) ? t : t.features;
      if (n) {
        for (e = 0, i = n.length; e < i; e++)
          ((o = n[e]).geometries ||
            o.geometry ||
            o.features ||
            o.coordinates) &&
            this.addData(o);
        return this;
      }
      var a = this.options;
      if (a.filter && !a.filter(t)) return this;
      var s = co(t, a);
      return s
        ? ((s.feature = Eo(t)),
          (s.defaultOptions = s.options),
          this.resetStyle(s),
          a.onEachFeature && a.onEachFeature(t, s),
          this.addLayer(s))
        : this;
    },
    resetStyle: function (t) {
      return void 0 === t
        ? this.eachLayer(this.resetStyle, this)
        : ((t.options = i({}, t.defaultOptions)),
          this._setLayerStyle(t, this.options.style),
          this);
    },
    setStyle: function (t) {
      return this.eachLayer(function (e) {
        this._setLayerStyle(e, t);
      }, this);
    },
    _setLayerStyle: function (t, e) {
      t.setStyle &&
        ('function' == typeof e && (e = e(t.feature)), t.setStyle(e));
    },
  });
  function co(t, e) {
    var i,
      o,
      n,
      a,
      s = 'Feature' === t.type ? t.geometry : t,
      r = s ? s.coordinates : null,
      _ = [],
      l = e && e.pointToLayer,
      h = (e && e.coordsToLatLng) || fo;
    if (!r && !s) return null;
    switch (s.type) {
      case 'Point':
        return mo(l, t, (i = h(r)), e);
      case 'MultiPoint':
        for (n = 0, a = r.length; n < a; n++)
          (i = h(r[n])), _.push(mo(l, t, i, e));
        return new qi(_);
      case 'LineString':
      case 'MultiLineString':
        return (o = go(r, 'LineString' === s.type ? 0 : 1, h)), new _o(o, e);
      case 'Polygon':
      case 'MultiPolygon':
        return (o = go(r, 'Polygon' === s.type ? 1 : 2, h)), new ho(o, e);
      case 'GeometryCollection':
        for (n = 0, a = s.geometries.length; n < a; n++) {
          var u = co(
            {
              geometry: s.geometries[n],
              type: 'Feature',
              properties: t.properties,
            },
            e
          );
          u && _.push(u);
        }
        return new qi(_);
      case 'FeatureCollection':
        for (n = 0, a = s.features.length; n < a; n++) {
          var d = co(s.features[n], e);
          d && _.push(d);
        }
        return new qi(_);
      default:
        throw new Error('Invalid GeoJSON object.');
    }
  }
  function mo(t, e, i, o) {
    return t ? t(e, i) : new eo(i, o && o.markersInheritOptions && o);
  }
  function fo(t) {
    return new F(t[1], t[0], t[2]);
  }
  function go(t, e, i) {
    for (var o, n = [], a = 0, s = t.length; a < s; a++)
      (o = e ? go(t[a], e - 1, i) : (i || fo)(t[a])), n.push(o);
    return n;
  }
  function To(t, e) {
    return void 0 !== (t = $(t)).alt
      ? [h(t.lng, e), h(t.lat, e), h(t.alt, e)]
      : [h(t.lng, e), h(t.lat, e)];
  }
  function Lo(t, e, i, o) {
    for (var n = [], a = 0, s = t.length; a < s; a++)
      n.push(e ? Lo(t[a], Bi(t[a]) ? 0 : e - 1, i, o) : To(t[a], o));
    return !e && i && n.push(n[0].slice()), n;
  }
  function Ao(t, e) {
    return t.feature ? i({}, t.feature, { geometry: e }) : Eo(e);
  }
  function Eo(t) {
    return 'Feature' === t.type || 'FeatureCollection' === t.type
      ? t
      : { type: 'Feature', properties: {}, geometry: t };
  }
  var So = {
    toGeoJSON: function (t) {
      return Ao(this, { type: 'Point', coordinates: To(this.getLatLng(), t) });
    },
  };
  function vo(t, e) {
    return new po(t, e);
  }
  eo.include(So),
    so.include(So),
    no.include(So),
    _o.include({
      toGeoJSON: function (t) {
        var e = !Bi(this._latlngs);
        return Ao(this, {
          type: (e ? 'Multi' : '') + 'LineString',
          coordinates: Lo(this._latlngs, e ? 1 : 0, !1, t),
        });
      },
    }),
    ho.include({
      toGeoJSON: function (t) {
        var e = !Bi(this._latlngs),
          i = e && !Bi(this._latlngs[0]),
          o = Lo(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
        return (
          e || (o = [o]),
          Ao(this, { type: (i ? 'Multi' : '') + 'Polygon', coordinates: o })
        );
      },
    }),
    Gi.include({
      toMultiPoint: function (t) {
        var e = [];
        return (
          this.eachLayer(function (i) {
            e.push(i.toGeoJSON(t).geometry.coordinates);
          }),
          Ao(this, { type: 'MultiPoint', coordinates: e })
        );
      },
      toGeoJSON: function (t) {
        var e =
          this.feature && this.feature.geometry && this.feature.geometry.type;
        if ('MultiPoint' === e) return this.toMultiPoint(t);
        var i = 'GeometryCollection' === e,
          o = [];
        return (
          this.eachLayer(function (e) {
            if (e.toGeoJSON) {
              var n = e.toGeoJSON(t);
              if (i) o.push(n.geometry);
              else {
                var a = Eo(n);
                'FeatureCollection' === a.type
                  ? o.push.apply(o, a.features)
                  : o.push(a);
              }
            }
          }),
          i
            ? Ao(this, { geometries: o, type: 'GeometryCollection' })
            : { type: 'FeatureCollection', features: o }
        );
      },
    });
  var yo = vo,
    No = ki.extend({
      options: {
        opacity: 1,
        alt: '',
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: '',
        zIndex: 1,
        className: '',
      },
      initialize: function (t, e, i) {
        (this._url = t), (this._bounds = H(e)), p(this, i);
      },
      onAdd: function () {
        this._image ||
          (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (Ee(this._image, 'leaflet-interactive'),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function () {
        fe(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._image && this._updateOpacity(), this
        );
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function () {
        return this._map && Te(this._image), this;
      },
      bringToBack: function () {
        return this._map && Le(this._image), this;
      },
      setUrl: function (t) {
        return (this._url = t), this._image && (this._image.src = t), this;
      },
      setBounds: function (t) {
        return (this._bounds = H(t)), this._map && this._reset(), this;
      },
      getEvents: function () {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      getBounds: function () {
        return this._bounds;
      },
      getElement: function () {
        return this._image;
      },
      _initImage: function () {
        var t = 'IMG' === this._url.tagName,
          e = (this._image = t ? this._url : me('img'));
        Ee(e, 'leaflet-image-layer'),
          this._zoomAnimated && Ee(e, 'leaflet-zoom-animated'),
          this.options.className && Ee(e, this.options.className),
          (e.onselectstart = l),
          (e.onmousemove = l),
          (e.onload = n(this.fire, this, 'load')),
          (e.onerror = n(this._overlayOnError, this, 'error')),
          (this.options.crossOrigin || '' === this.options.crossOrigin) &&
            (e.crossOrigin =
              !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
          this.options.zIndex && this._updateZIndex(),
          t
            ? (this._url = e.src)
            : ((e.src = this._url), (e.alt = this.options.alt));
      },
      _animateZoom: function (t) {
        var e = this._map.getZoomScale(t.zoom),
          i = this._map._latLngBoundsToNewLayerBounds(
            this._bounds,
            t.zoom,
            t.center
          ).min;
        Ie(this._image, i, e);
      },
      _reset: function () {
        var t = this._image,
          e = new D(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ),
          i = e.getSize();
        Oe(t, e.min),
          (t.style.width = i.x + 'px'),
          (t.style.height = i.y + 'px');
      },
      _updateOpacity: function () {
        Ne(this._image, this.options.opacity);
      },
      _updateZIndex: function () {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function () {
        this.fire('error');
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && ((this._url = t), (this._image.src = t));
      },
      getCenter: function () {
        return this._bounds.getCenter();
      },
    }),
    Po = function (t, e, i) {
      return new No(t, e, i);
    },
    Co = No.extend({
      options: {
        autoplay: !0,
        loop: !0,
        keepAspectRatio: !0,
        muted: !1,
        playsInline: !0,
      },
      _initImage: function () {
        var t = 'VIDEO' === this._url.tagName,
          e = (this._image = t ? this._url : me('video'));
        if (
          (Ee(e, 'leaflet-image-layer'),
          this._zoomAnimated && Ee(e, 'leaflet-zoom-animated'),
          this.options.className && Ee(e, this.options.className),
          (e.onselectstart = l),
          (e.onmousemove = l),
          (e.onloadeddata = n(this.fire, this, 'load')),
          t)
        ) {
          for (
            var i = e.getElementsByTagName('source'), o = [], a = 0;
            a < i.length;
            a++
          )
            o.push(i[a].src);
          this._url = i.length > 0 ? o : [e.src];
        } else {
          g(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(e.style, 'objectFit') &&
              (e.style.objectFit = 'fill'),
            (e.autoplay = !!this.options.autoplay),
            (e.loop = !!this.options.loop),
            (e.muted = !!this.options.muted),
            (e.playsInline = !!this.options.playsInline);
          for (var s = 0; s < this._url.length; s++) {
            var r = me('source');
            (r.src = this._url[s]), e.appendChild(r);
          }
        }
      },
    });
  function Io(t, e, i) {
    return new Co(t, e, i);
  }
  var Oo = No.extend({
    _initImage: function () {
      var t = (this._image = this._url);
      Ee(t, 'leaflet-image-layer'),
        this._zoomAnimated && Ee(t, 'leaflet-zoom-animated'),
        this.options.className && Ee(t, this.options.className),
        (t.onselectstart = l),
        (t.onmousemove = l);
    },
  });
  function Ro(t, e, i) {
    return new Oo(t, e, i);
  }
  var bo = ki.extend({
    options: {
      interactive: !1,
      offset: [0, 0],
      className: '',
      pane: void 0,
      content: '',
    },
    initialize: function (t, e) {
      t && (t instanceof F || g(t))
        ? ((this._latlng = $(t)), p(this, e))
        : (p(this, t), (this._source = e)),
        this.options.content && (this._content = this.options.content);
    },
    openOn: function (t) {
      return (
        (t = arguments.length ? t : this._source._map).hasLayer(this) ||
          t.addLayer(this),
        this
      );
    },
    close: function () {
      return this._map && this._map.removeLayer(this), this;
    },
    toggle: function (t) {
      return (
        this._map
          ? this.close()
          : (arguments.length ? (this._source = t) : (t = this._source),
            this._prepareOpen(),
            this.openOn(t._map)),
        this
      );
    },
    onAdd: function (t) {
      (this._zoomAnimated = t._zoomAnimated),
        this._container || this._initLayout(),
        t._fadeAnimated && Ne(this._container, 0),
        clearTimeout(this._removeTimeout),
        this.getPane().appendChild(this._container),
        this.update(),
        t._fadeAnimated && Ne(this._container, 1),
        this.bringToFront(),
        this.options.interactive &&
          (Ee(this._container, 'leaflet-interactive'),
          this.addInteractiveTarget(this._container));
    },
    onRemove: function (t) {
      t._fadeAnimated
        ? (Ne(this._container, 0),
          (this._removeTimeout = setTimeout(
            n(fe, void 0, this._container),
            200
          )))
        : fe(this._container),
        this.options.interactive &&
          (Se(this._container, 'leaflet-interactive'),
          this.removeInteractiveTarget(this._container));
    },
    getLatLng: function () {
      return this._latlng;
    },
    setLatLng: function (t) {
      return (
        (this._latlng = $(t)),
        this._map && (this._updatePosition(), this._adjustPan()),
        this
      );
    },
    getContent: function () {
      return this._content;
    },
    setContent: function (t) {
      return (this._content = t), this.update(), this;
    },
    getElement: function () {
      return this._container;
    },
    update: function () {
      this._map &&
        ((this._container.style.visibility = 'hidden'),
        this._updateContent(),
        this._updateLayout(),
        this._updatePosition(),
        (this._container.style.visibility = ''),
        this._adjustPan());
    },
    getEvents: function () {
      var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    isOpen: function () {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function () {
      return this._map && Te(this._container), this;
    },
    bringToBack: function () {
      return this._map && Le(this._container), this;
    },
    _prepareOpen: function (t) {
      var e = this._source;
      if (!e._map) return !1;
      if (e instanceof qi) {
        e = null;
        var i = this._source._layers;
        for (var o in i)
          if (i[o]._map) {
            e = i[o];
            break;
          }
        if (!e) return !1;
        this._source = e;
      }
      if (!t)
        if (e.getCenter) t = e.getCenter();
        else if (e.getLatLng) t = e.getLatLng();
        else {
          if (!e.getBounds)
            throw new Error('Unable to get source layer LatLng.');
          t = e.getBounds().getCenter();
        }
      return this.setLatLng(t), this._map && this.update(), !0;
    },
    _updateContent: function () {
      if (this._content) {
        var t = this._contentNode,
          e =
            'function' == typeof this._content
              ? this._content(this._source || this)
              : this._content;
        if ('string' == typeof e) t.innerHTML = e;
        else {
          for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
          t.appendChild(e);
        }
        this.fire('contentupdate');
      }
    },
    _updatePosition: function () {
      if (this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng),
          e = w(this.options.offset),
          i = this._getAnchor();
        this._zoomAnimated
          ? Oe(this._container, t.add(i))
          : (e = e.add(t).add(i));
        var o = (this._containerBottom = -e.y),
          n = (this._containerLeft =
            -Math.round(this._containerWidth / 2) + e.x);
        (this._container.style.bottom = o + 'px'),
          (this._container.style.left = n + 'px');
      }
    },
    _getAnchor: function () {
      return [0, 0];
    },
  });
  ni.include({
    _initOverlay: function (t, e, i, o) {
      var n = e;
      return (
        n instanceof t || (n = new t(o).setContent(e)), i && n.setLatLng(i), n
      );
    },
  }),
    ki.include({
      _initOverlay: function (t, e, i, o) {
        var n = i;
        return (
          n instanceof t
            ? (p(n, o), (n._source = this))
            : (n = e && !o ? e : new t(o, this)).setContent(i),
          n
        );
      },
    });
  var Vo = bo.extend({
      options: {
        pane: 'popupPane',
        offset: [0, 7],
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: '',
      },
      openOn: function (t) {
        return (
          !(t = arguments.length ? t : this._source._map).hasLayer(this) &&
            t._popup &&
            t._popup.options.autoClose &&
            t.removeLayer(t._popup),
          (t._popup = this),
          bo.prototype.openOn.call(this, t)
        );
      },
      onAdd: function (t) {
        bo.prototype.onAdd.call(this, t),
          t.fire('popupopen', { popup: this }),
          this._source &&
            (this._source.fire('popupopen', { popup: this }, !0),
            this._source instanceof oo || this._source.on('preclick', ke));
      },
      onRemove: function (t) {
        bo.prototype.onRemove.call(this, t),
          t.fire('popupclose', { popup: this }),
          this._source &&
            (this._source.fire('popupclose', { popup: this }, !0),
            this._source instanceof oo || this._source.off('preclick', ke));
      },
      getEvents: function () {
        var t = bo.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) && (t.preclick = this.close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
        );
      },
      _initLayout: function () {
        var t = 'leaflet-popup',
          e = (this._container = me(
            'div',
            t + ' ' + (this.options.className || '') + ' leaflet-zoom-animated'
          )),
          i = (this._wrapper = me('div', t + '-content-wrapper', e));
        if (
          ((this._contentNode = me('div', t + '-content', i)),
          Xe(e),
          Ge(this._contentNode),
          He(e, 'contextmenu', ke),
          (this._tipContainer = me('div', t + '-tip-container', e)),
          (this._tip = me('div', t + '-tip', this._tipContainer)),
          this.options.closeButton)
        ) {
          var o = (this._closeButton = me('a', t + '-close-button', e));
          o.setAttribute('role', 'button'),
            o.setAttribute('aria-label', 'Close popup'),
            (o.href = '#close'),
            (o.innerHTML = '<span aria-hidden="true">&#215;</span>'),
            He(
              o,
              'click',
              function (t) {
                qe(t), this.close();
              },
              this
            );
        }
      },
      _updateLayout: function () {
        var t = this._contentNode,
          e = t.style;
        (e.width = ''), (e.whiteSpace = 'nowrap');
        var i = t.offsetWidth;
        (i = Math.min(i, this.options.maxWidth)),
          (i = Math.max(i, this.options.minWidth)),
          (e.width = i + 1 + 'px'),
          (e.whiteSpace = ''),
          (e.height = '');
        var o = t.offsetHeight,
          n = this.options.maxHeight,
          a = 'leaflet-popup-scrolled';
        n && o > n ? ((e.height = n + 'px'), Ee(t, a)) : Se(t, a),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function (t) {
        var e = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center
          ),
          i = this._getAnchor();
        Oe(this._container, e.add(i));
      },
      _adjustPan: function () {
        if (this.options.autoPan)
          if (
            (this._map._panAnim && this._map._panAnim.stop(), this._autopanning)
          )
            this._autopanning = !1;
          else {
            var t = this._map,
              e = parseInt(ce(this._container, 'marginBottom'), 10) || 0,
              i = this._container.offsetHeight + e,
              o = this._containerWidth,
              n = new B(this._containerLeft, -i - this._containerBottom);
            n._add(Re(this._container));
            var a = t.layerPointToContainerPoint(n),
              s = w(this.options.autoPanPadding),
              r = w(this.options.autoPanPaddingTopLeft || s),
              _ = w(this.options.autoPanPaddingBottomRight || s),
              l = t.getSize(),
              h = 0,
              u = 0;
            a.x + o + _.x > l.x && (h = a.x + o - l.x + _.x),
              a.x - h - r.x < 0 && (h = a.x - r.x),
              a.y + i + _.y > l.y && (u = a.y + i - l.y + _.y),
              a.y - u - r.y < 0 && (u = a.y - r.y),
              (h || u) &&
                (this.options.keepInView && (this._autopanning = !0),
                t.fire('autopanstart').panBy([h, u]));
          }
      },
      _getAnchor: function () {
        return w(
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0]
        );
      },
    }),
    Bo = function (t, e) {
      return new Vo(t, e);
    };
  ni.mergeOptions({ closePopupOnClick: !0 }),
    ni.include({
      openPopup: function (t, e, i) {
        return this._initOverlay(Vo, t, e, i).openOn(this), this;
      },
      closePopup: function (t) {
        return (t = arguments.length ? t : this._popup) && t.close(), this;
      },
    }),
    ki.include({
      bindPopup: function (t, e) {
        return (
          (this._popup = this._initOverlay(Vo, this._popup, t, e)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function (t) {
        return (
          this._popup &&
            (this instanceof qi || (this._popup._source = this),
            this._popup._prepareOpen(t || this._latlng) &&
              this._popup.openOn(this._map)),
          this
        );
      },
      closePopup: function () {
        return this._popup && this._popup.close(), this;
      },
      togglePopup: function () {
        return this._popup && this._popup.toggle(this), this;
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function (t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function () {
        return this._popup;
      },
      _openPopup: function (t) {
        if (this._popup && this._map) {
          Ke(t);
          var e = t.layer || t.target;
          this._popup._source !== e || e instanceof oo
            ? ((this._popup._source = e), this.openPopup(t.latlng))
            : this._map.hasLayer(this._popup)
            ? this.closePopup()
            : this.openPopup(t.latlng);
        }
      },
      _movePopup: function (t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function (t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      },
    });
  var xo = bo.extend({
      options: {
        pane: 'tooltipPane',
        offset: [0, 0],
        direction: 'auto',
        permanent: !1,
        sticky: !1,
        opacity: 0.9,
      },
      onAdd: function (t) {
        bo.prototype.onAdd.call(this, t),
          this.setOpacity(this.options.opacity),
          t.fire('tooltipopen', { tooltip: this }),
          this._source &&
            (this.addEventParent(this._source),
            this._source.fire('tooltipopen', { tooltip: this }, !0));
      },
      onRemove: function (t) {
        bo.prototype.onRemove.call(this, t),
          t.fire('tooltipclose', { tooltip: this }),
          this._source &&
            (this.removeEventParent(this._source),
            this._source.fire('tooltipclose', { tooltip: this }, !0));
      },
      getEvents: function () {
        var t = bo.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function () {
        var t =
          'leaflet-tooltip ' +
          (this.options.className || '') +
          ' leaflet-zoom-' +
          (this._zoomAnimated ? 'animated' : 'hide');
        (this._contentNode = this._container = me('div', t)),
          this._container.setAttribute('role', 'tooltip'),
          this._container.setAttribute('id', 'leaflet-tooltip-' + s(this));
      },
      _updateLayout: function () {},
      _adjustPan: function () {},
      _setPosition: function (t) {
        var e,
          i,
          o = this._map,
          n = this._container,
          a = o.latLngToContainerPoint(o.getCenter()),
          s = o.layerPointToContainerPoint(t),
          r = this.options.direction,
          _ = n.offsetWidth,
          l = n.offsetHeight,
          h = w(this.options.offset),
          u = this._getAnchor();
        'top' === r
          ? ((e = _ / 2), (i = l))
          : 'bottom' === r
          ? ((e = _ / 2), (i = 0))
          : 'center' === r
          ? ((e = _ / 2), (i = l / 2))
          : 'right' === r
          ? ((e = 0), (i = l / 2))
          : 'left' === r
          ? ((e = _), (i = l / 2))
          : s.x < a.x
          ? ((r = 'right'), (e = 0), (i = l / 2))
          : ((r = 'left'), (e = _ + 2 * (h.x + u.x)), (i = l / 2)),
          (t = t.subtract(w(e, i, !0)).add(h).add(u)),
          Se(n, 'leaflet-tooltip-right'),
          Se(n, 'leaflet-tooltip-left'),
          Se(n, 'leaflet-tooltip-top'),
          Se(n, 'leaflet-tooltip-bottom'),
          Ee(n, 'leaflet-tooltip-' + r),
          Oe(n, t);
      },
      _updatePosition: function () {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function (t) {
        (this.options.opacity = t), this._container && Ne(this._container, t);
      },
      _animateZoom: function (t) {
        var e = this._map._latLngToNewLayerPoint(
          this._latlng,
          t.zoom,
          t.center
        );
        this._setPosition(e);
      },
      _getAnchor: function () {
        return w(
          this._source && this._source._getTooltipAnchor && !this.options.sticky
            ? this._source._getTooltipAnchor()
            : [0, 0]
        );
      },
    }),
    wo = function (t, e) {
      return new xo(t, e);
    };
  ni.include({
    openTooltip: function (t, e, i) {
      return this._initOverlay(xo, t, e, i).openOn(this), this;
    },
    closeTooltip: function (t) {
      return t.close(), this;
    },
  }),
    ki.include({
      bindTooltip: function (t, e) {
        return (
          this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
          (this._tooltip = this._initOverlay(xo, this._tooltip, t, e)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function () {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function (t) {
        if (t || !this._tooltipHandlersAdded) {
          var e = t ? 'off' : 'on',
            i = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent
            ? (i.add = this._openTooltip)
            : ((i.mouseover = this._openTooltip),
              (i.mouseout = this.closeTooltip),
              (i.click = this._openTooltip),
              this._map
                ? this._addFocusListeners()
                : (i.add = this._addFocusListeners)),
            this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
            this[e](i),
            (this._tooltipHandlersAdded = !t);
        }
      },
      openTooltip: function (t) {
        return (
          this._tooltip &&
            (this instanceof qi || (this._tooltip._source = this),
            this._tooltip._prepareOpen(t) &&
              (this._tooltip.openOn(this._map),
              this.getElement
                ? this._setAriaDescribedByOnLayer(this)
                : this.eachLayer &&
                  this.eachLayer(this._setAriaDescribedByOnLayer, this))),
          this
        );
      },
      closeTooltip: function () {
        if (this._tooltip) return this._tooltip.close();
      },
      toggleTooltip: function () {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function (t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function () {
        return this._tooltip;
      },
      _addFocusListeners: function () {
        this.getElement
          ? this._addFocusListenersOnLayer(this)
          : this.eachLayer &&
            this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function (t) {
        var e = t.getElement();
        e &&
          (He(
            e,
            'focus',
            function () {
              (this._tooltip._source = t), this.openTooltip();
            },
            this
          ),
          He(e, 'blur', this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function (t) {
        var e = t.getElement();
        e && e.setAttribute('aria-describedby', this._tooltip._container.id);
      },
      _openTooltip: function (t) {
        !this._tooltip ||
          !this._map ||
          (this._map.dragging && this._map.dragging.moving()) ||
          ((this._tooltip._source = t.layer || t.target),
          this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
      },
      _moveTooltip: function (t) {
        var e,
          i,
          o = t.latlng;
        this._tooltip.options.sticky &&
          t.originalEvent &&
          ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
          (i = this._map.containerPointToLayerPoint(e)),
          (o = this._map.layerPointToLatLng(i))),
          this._tooltip.setLatLng(o);
      },
    });
  var Do = ji.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: 'leaflet-div-icon',
    },
    createIcon: function (t) {
      var e = t && 'DIV' === t.tagName ? t : document.createElement('div'),
        i = this.options;
      if (
        (i.html instanceof Element
          ? (ge(e), e.appendChild(i.html))
          : (e.innerHTML = !1 !== i.html ? i.html : ''),
        i.bgPos)
      ) {
        var o = w(i.bgPos);
        e.style.backgroundPosition = -o.x + 'px ' + -o.y + 'px';
      }
      return this._setIconStyles(e, 'icon'), e;
    },
    createShadow: function () {
      return null;
    },
  });
  function Mo(t) {
    return new Do(t);
  }
  ji.Default = Qi;
  var Yo = ki.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: Yt.mobile,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: 'tilePane',
      className: '',
      keepBuffer: 2,
    },
    initialize: function (t) {
      p(this, t);
    },
    onAdd: function () {
      this._initContainer(),
        (this._levels = {}),
        (this._tiles = {}),
        this._resetView();
    },
    beforeAdd: function (t) {
      t._addZoomLimit(this);
    },
    onRemove: function (t) {
      this._removeAllTiles(),
        fe(this._container),
        t._removeZoomLimit(this),
        (this._container = null),
        (this._tileZoom = void 0);
    },
    bringToFront: function () {
      return (
        this._map && (Te(this._container), this._setAutoZIndex(Math.max)), this
      );
    },
    bringToBack: function () {
      return (
        this._map && (Le(this._container), this._setAutoZIndex(Math.min)), this
      );
    },
    getContainer: function () {
      return this._container;
    },
    setOpacity: function (t) {
      return (this.options.opacity = t), this._updateOpacity(), this;
    },
    setZIndex: function (t) {
      return (this.options.zIndex = t), this._updateZIndex(), this;
    },
    isLoading: function () {
      return this._loading;
    },
    redraw: function () {
      if (this._map) {
        this._removeAllTiles();
        var t = this._clampZoom(this._map.getZoom());
        t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()),
          this._update();
      }
      return this;
    },
    getEvents: function () {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd,
      };
      return (
        this.options.updateWhenIdle ||
          (this._onMove ||
            (this._onMove = r(
              this._onMoveEnd,
              this.options.updateInterval,
              this
            )),
          (t.move = this._onMove)),
        this._zoomAnimated && (t.zoomanim = this._animateZoom),
        t
      );
    },
    createTile: function () {
      return document.createElement('div');
    },
    getTileSize: function () {
      var t = this.options.tileSize;
      return t instanceof B ? t : new B(t, t);
    },
    _updateZIndex: function () {
      this._container &&
        void 0 !== this.options.zIndex &&
        null !== this.options.zIndex &&
        (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function (t) {
      for (
        var e,
          i = this.getPane().children,
          o = -t(-1 / 0, 1 / 0),
          n = 0,
          a = i.length;
        n < a;
        n++
      )
        (e = i[n].style.zIndex),
          i[n] !== this._container && e && (o = t(o, +e));
      isFinite(o) &&
        ((this.options.zIndex = o + t(-1, 1)), this._updateZIndex());
    },
    _updateOpacity: function () {
      if (this._map && !Yt.ielt9) {
        Ne(this._container, this.options.opacity);
        var t = +new Date(),
          e = !1,
          i = !1;
        for (var o in this._tiles) {
          var n = this._tiles[o];
          if (n.current && n.loaded) {
            var a = Math.min(1, (t - n.loaded) / 200);
            Ne(n.el, a),
              a < 1
                ? (e = !0)
                : (n.active ? (i = !0) : this._onOpaqueTile(n),
                  (n.active = !0));
          }
        }
        i && !this._noPrune && this._pruneTiles(),
          e &&
            (C(this._fadeFrame),
            (this._fadeFrame = P(this._updateOpacity, this)));
      }
    },
    _onOpaqueTile: l,
    _initContainer: function () {
      this._container ||
        ((this._container = me(
          'div',
          'leaflet-layer ' + (this.options.className || '')
        )),
        this._updateZIndex(),
        this.options.opacity < 1 && this._updateOpacity(),
        this.getPane().appendChild(this._container));
    },
    _updateLevels: function () {
      var t = this._tileZoom,
        e = this.options.maxZoom;
      if (void 0 !== t) {
        for (var i in this._levels)
          (i = Number(i)),
            this._levels[i].el.children.length || i === t
              ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)),
                this._onUpdateLevel(i))
              : (fe(this._levels[i].el),
                this._removeTilesAtZoom(i),
                this._onRemoveLevel(i),
                delete this._levels[i]);
        var o = this._levels[t],
          n = this._map;
        return (
          o ||
            (((o = this._levels[t] = {}).el = me(
              'div',
              'leaflet-tile-container leaflet-zoom-animated',
              this._container
            )),
            (o.el.style.zIndex = e),
            (o.origin = n.project(n.unproject(n.getPixelOrigin()), t).round()),
            (o.zoom = t),
            this._setZoomTransform(o, n.getCenter(), n.getZoom()),
            l(o.el.offsetWidth),
            this._onCreateLevel(o)),
          (this._level = o),
          o
        );
      }
    },
    _onUpdateLevel: l,
    _onRemoveLevel: l,
    _onCreateLevel: l,
    _pruneTiles: function () {
      if (this._map) {
        var t,
          e,
          i = this._map.getZoom();
        if (i > this.options.maxZoom || i < this.options.minZoom)
          this._removeAllTiles();
        else {
          for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
          for (t in this._tiles)
            if ((e = this._tiles[t]).current && !e.active) {
              var o = e.coords;
              this._retainParent(o.x, o.y, o.z, o.z - 5) ||
                this._retainChildren(o.x, o.y, o.z, o.z + 2);
            }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      }
    },
    _removeTilesAtZoom: function (t) {
      for (var e in this._tiles)
        this._tiles[e].coords.z === t && this._removeTile(e);
    },
    _removeAllTiles: function () {
      for (var t in this._tiles) this._removeTile(t);
    },
    _invalidateAll: function () {
      for (var t in this._levels)
        fe(this._levels[t].el),
          this._onRemoveLevel(Number(t)),
          delete this._levels[t];
      this._removeAllTiles(), (this._tileZoom = void 0);
    },
    _retainParent: function (t, e, i, o) {
      var n = Math.floor(t / 2),
        a = Math.floor(e / 2),
        s = i - 1,
        r = new B(+n, +a);
      r.z = +s;
      var _ = this._tileCoordsToKey(r),
        l = this._tiles[_];
      return l && l.active
        ? ((l.retain = !0), !0)
        : (l && l.loaded && (l.retain = !0),
          s > o && this._retainParent(n, a, s, o));
    },
    _retainChildren: function (t, e, i, o) {
      for (var n = 2 * t; n < 2 * t + 2; n++)
        for (var a = 2 * e; a < 2 * e + 2; a++) {
          var s = new B(n, a);
          s.z = i + 1;
          var r = this._tileCoordsToKey(s),
            _ = this._tiles[r];
          _ && _.active
            ? (_.retain = !0)
            : (_ && _.loaded && (_.retain = !0),
              i + 1 < o && this._retainChildren(n, a, i + 1, o));
        }
    },
    _resetView: function (t) {
      var e = t && (t.pinch || t.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
    },
    _animateZoom: function (t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function (t) {
      var e = this.options;
      return void 0 !== e.minNativeZoom && t < e.minNativeZoom
        ? e.minNativeZoom
        : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
        ? e.maxNativeZoom
        : t;
    },
    _setView: function (t, e, i, o) {
      var n = Math.round(e);
      n =
        (void 0 !== this.options.maxZoom && n > this.options.maxZoom) ||
        (void 0 !== this.options.minZoom && n < this.options.minZoom)
          ? void 0
          : this._clampZoom(n);
      var a = this.options.updateWhenZooming && n !== this._tileZoom;
      (o && !a) ||
        ((this._tileZoom = n),
        this._abortLoading && this._abortLoading(),
        this._updateLevels(),
        this._resetGrid(),
        void 0 !== n && this._update(t),
        i || this._pruneTiles(),
        (this._noPrune = !!i)),
        this._setZoomTransforms(t, e);
    },
    _setZoomTransforms: function (t, e) {
      for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
    },
    _setZoomTransform: function (t, e, i) {
      var o = this._map.getZoomScale(i, t.zoom),
        n = t.origin
          .multiplyBy(o)
          .subtract(this._map._getNewPixelOrigin(e, i))
          .round();
      Yt.any3d ? Ie(t.el, n, o) : Oe(t.el, n);
    },
    _resetGrid: function () {
      var t = this._map,
        e = t.options.crs,
        i = (this._tileSize = this.getTileSize()),
        o = this._tileZoom,
        n = this._map.getPixelWorldBounds(this._tileZoom);
      n && (this._globalTileRange = this._pxBoundsToTileRange(n)),
        (this._wrapX = e.wrapLng &&
          !this.options.noWrap && [
            Math.floor(t.project([0, e.wrapLng[0]], o).x / i.x),
            Math.ceil(t.project([0, e.wrapLng[1]], o).x / i.y),
          ]),
        (this._wrapY = e.wrapLat &&
          !this.options.noWrap && [
            Math.floor(t.project([e.wrapLat[0], 0], o).y / i.x),
            Math.ceil(t.project([e.wrapLat[1], 0], o).y / i.y),
          ]);
    },
    _onMoveEnd: function () {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function (t) {
      var e = this._map,
        i = e._animatingZoom
          ? Math.max(e._animateToZoom, e.getZoom())
          : e.getZoom(),
        o = e.getZoomScale(i, this._tileZoom),
        n = e.project(t, this._tileZoom).floor(),
        a = e.getSize().divideBy(2 * o);
      return new D(n.subtract(a), n.add(a));
    },
    _update: function (t) {
      var e = this._map;
      if (e) {
        var i = this._clampZoom(e.getZoom());
        if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
          var o = this._getTiledPixelBounds(t),
            n = this._pxBoundsToTileRange(o),
            a = n.getCenter(),
            s = [],
            r = this.options.keepBuffer,
            _ = new D(
              n.getBottomLeft().subtract([r, -r]),
              n.getTopRight().add([r, -r])
            );
          if (
            !(
              isFinite(n.min.x) &&
              isFinite(n.min.y) &&
              isFinite(n.max.x) &&
              isFinite(n.max.y)
            )
          )
            throw new Error('Attempted to load an infinite number of tiles');
          for (var l in this._tiles) {
            var h = this._tiles[l].coords;
            (h.z === this._tileZoom && _.contains(new B(h.x, h.y))) ||
              (this._tiles[l].current = !1);
          }
          if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
          else {
            for (var u = n.min.y; u <= n.max.y; u++)
              for (var d = n.min.x; d <= n.max.x; d++) {
                var p = new B(d, u);
                if (((p.z = this._tileZoom), this._isValidTile(p))) {
                  var c = this._tiles[this._tileCoordsToKey(p)];
                  c ? (c.current = !0) : s.push(p);
                }
              }
            if (
              (s.sort(function (t, e) {
                return t.distanceTo(a) - e.distanceTo(a);
              }),
              0 !== s.length)
            ) {
              this._loading || ((this._loading = !0), this.fire('loading'));
              var m = document.createDocumentFragment();
              for (d = 0; d < s.length; d++) this._addTile(s[d], m);
              this._level.el.appendChild(m);
            }
          }
        }
      }
    },
    _isValidTile: function (t) {
      var e = this._map.options.crs;
      if (!e.infinite) {
        var i = this._globalTileRange;
        if (
          (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
          (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
        )
          return !1;
      }
      if (!this.options.bounds) return !0;
      var o = this._tileCoordsToBounds(t);
      return H(this.options.bounds).overlaps(o);
    },
    _keyToBounds: function (t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function (t) {
      var e = this._map,
        i = this.getTileSize(),
        o = t.scaleBy(i),
        n = o.add(i);
      return [e.unproject(o, t.z), e.unproject(n, t.z)];
    },
    _tileCoordsToBounds: function (t) {
      var e = this._tileCoordsToNwSe(t),
        i = new Y(e[0], e[1]);
      return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
    },
    _tileCoordsToKey: function (t) {
      return t.x + ':' + t.y + ':' + t.z;
    },
    _keyToTileCoords: function (t) {
      var e = t.split(':'),
        i = new B(+e[0], +e[1]);
      return (i.z = +e[2]), i;
    },
    _removeTile: function (t) {
      var e = this._tiles[t];
      e &&
        (fe(e.el),
        delete this._tiles[t],
        this.fire('tileunload', {
          tile: e.el,
          coords: this._keyToTileCoords(t),
        }));
    },
    _initTile: function (t) {
      Ee(t, 'leaflet-tile');
      var e = this.getTileSize();
      (t.style.width = e.x + 'px'),
        (t.style.height = e.y + 'px'),
        (t.onselectstart = l),
        (t.onmousemove = l),
        Yt.ielt9 && this.options.opacity < 1 && Ne(t, this.options.opacity);
    },
    _addTile: function (t, e) {
      var i = this._getTilePos(t),
        o = this._tileCoordsToKey(t),
        a = this.createTile(this._wrapCoords(t), n(this._tileReady, this, t));
      this._initTile(a),
        this.createTile.length < 2 && P(n(this._tileReady, this, t, null, a)),
        Oe(a, i),
        (this._tiles[o] = { el: a, coords: t, current: !0 }),
        e.appendChild(a),
        this.fire('tileloadstart', { tile: a, coords: t });
    },
    _tileReady: function (t, e, i) {
      e && this.fire('tileerror', { error: e, tile: i, coords: t });
      var o = this._tileCoordsToKey(t);
      (i = this._tiles[o]) &&
        ((i.loaded = +new Date()),
        this._map._fadeAnimated
          ? (Ne(i.el, 0),
            C(this._fadeFrame),
            (this._fadeFrame = P(this._updateOpacity, this)))
          : ((i.active = !0), this._pruneTiles()),
        e ||
          (Ee(i.el, 'leaflet-tile-loaded'),
          this.fire('tileload', { tile: i.el, coords: t })),
        this._noTilesToLoad() &&
          ((this._loading = !1),
          this.fire('load'),
          Yt.ielt9 || !this._map._fadeAnimated
            ? P(this._pruneTiles, this)
            : setTimeout(n(this._pruneTiles, this), 250)));
    },
    _getTilePos: function (t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function (t) {
      var e = new B(
        this._wrapX ? _(t.x, this._wrapX) : t.x,
        this._wrapY ? _(t.y, this._wrapY) : t.y
      );
      return (e.z = t.z), e;
    },
    _pxBoundsToTileRange: function (t) {
      var e = this.getTileSize();
      return new D(
        t.min.unscaleBy(e).floor(),
        t.max.unscaleBy(e).ceil().subtract([1, 1])
      );
    },
    _noTilesToLoad: function () {
      for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
      return !0;
    },
  });
  function Ho(t) {
    return new Yo(t);
  }
  var Fo = Yo.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: 'abc',
      errorTileUrl: '',
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1,
      referrerPolicy: !1,
    },
    initialize: function (t, e) {
      (this._url = t),
        (e = p(this, e)).detectRetina && Yt.retina && e.maxZoom > 0
          ? ((e.tileSize = Math.floor(e.tileSize / 2)),
            e.zoomReverse
              ? (e.zoomOffset--,
                (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
              : (e.zoomOffset++,
                (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
            (e.minZoom = Math.max(0, e.minZoom)))
          : e.zoomReverse
          ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
          : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
        'string' == typeof e.subdomains &&
          (e.subdomains = e.subdomains.split('')),
        this.on('tileunload', this._onTileRemove);
    },
    setUrl: function (t, e) {
      return (
        this._url === t && void 0 === e && (e = !0),
        (this._url = t),
        e || this.redraw(),
        this
      );
    },
    createTile: function (t, e) {
      var i = document.createElement('img');
      return (
        He(i, 'load', n(this._tileOnLoad, this, e, i)),
        He(i, 'error', n(this._tileOnError, this, e, i)),
        (this.options.crossOrigin || '' === this.options.crossOrigin) &&
          (i.crossOrigin =
            !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
        'string' == typeof this.options.referrerPolicy &&
          (i.referrerPolicy = this.options.referrerPolicy),
        (i.alt = ''),
        (i.src = this.getTileUrl(t)),
        i
      );
    },
    getTileUrl: function (t) {
      var e = {
        r: Yt.retina ? '@2x' : '',
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl(),
      };
      if (this._map && !this._map.options.crs.infinite) {
        var o = this._globalTileRange.max.y - t.y;
        this.options.tms && (e.y = o), (e['-y'] = o);
      }
      return f(this._url, i(e, this.options));
    },
    _tileOnLoad: function (t, e) {
      Yt.ielt9 ? setTimeout(n(t, this, null, e), 0) : t(null, e);
    },
    _tileOnError: function (t, e, i) {
      var o = this.options.errorTileUrl;
      o && e.getAttribute('src') !== o && (e.src = o), t(i, e);
    },
    _onTileRemove: function (t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function () {
      var t = this._tileZoom,
        e = this.options.maxZoom;
      return (
        this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset
      );
    },
    _getSubdomain: function (t) {
      var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[e];
    },
    _abortLoading: function () {
      var t, e;
      for (t in this._tiles)
        if (
          this._tiles[t].coords.z !== this._tileZoom &&
          (((e = this._tiles[t].el).onload = l), (e.onerror = l), !e.complete)
        ) {
          e.src = A;
          var i = this._tiles[t].coords;
          fe(e),
            delete this._tiles[t],
            this.fire('tileabort', { tile: e, coords: i });
        }
    },
    _removeTile: function (t) {
      var e = this._tiles[t];
      if (e)
        return (
          e.el.setAttribute('src', A), Yo.prototype._removeTile.call(this, t)
        );
    },
    _tileReady: function (t, e, i) {
      if (this._map && (!i || i.getAttribute('src') !== A))
        return Yo.prototype._tileReady.call(this, t, e, i);
    },
  });
  function $o(t, e) {
    return new Fo(t, e);
  }
  var Zo = Fo.extend({
    defaultWmsParams: {
      service: 'WMS',
      request: 'GetMap',
      layers: '',
      styles: '',
      format: 'image/jpeg',
      transparent: !1,
      version: '1.1.1',
    },
    options: { crs: null, uppercase: !1 },
    initialize: function (t, e) {
      this._url = t;
      var o = i({}, this.defaultWmsParams);
      for (var n in e) n in this.options || (o[n] = e[n]);
      var a = (e = p(this, e)).detectRetina && Yt.retina ? 2 : 1,
        s = this.getTileSize();
      (o.width = s.x * a), (o.height = s.y * a), (this.wmsParams = o);
    },
    onAdd: function (t) {
      (this._crs = this.options.crs || t.options.crs),
        (this._wmsVersion = parseFloat(this.wmsParams.version));
      var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
      (this.wmsParams[e] = this._crs.code), Fo.prototype.onAdd.call(this, t);
    },
    getTileUrl: function (t) {
      var e = this._tileCoordsToNwSe(t),
        i = this._crs,
        o = M(i.project(e[0]), i.project(e[1])),
        n = o.min,
        a = o.max,
        s = (
          this._wmsVersion >= 1.3 && this._crs === Wi
            ? [n.y, n.x, a.y, a.x]
            : [n.x, n.y, a.x, a.y]
        ).join(','),
        r = Fo.prototype.getTileUrl.call(this, t);
      return (
        r +
        c(this.wmsParams, r, this.options.uppercase) +
        (this.options.uppercase ? '&BBOX=' : '&bbox=') +
        s
      );
    },
    setParams: function (t, e) {
      return i(this.wmsParams, t), e || this.redraw(), this;
    },
  });
  function Uo(t, e) {
    return new Zo(t, e);
  }
  (Fo.WMS = Zo), ($o.wms = Uo);
  var Wo = ki.extend({
      options: { padding: 0.1 },
      initialize: function (t) {
        p(this, t), s(this), (this._layers = this._layers || {});
      },
      onAdd: function () {
        this._container ||
          (this._initContainer(),
          this._zoomAnimated && Ee(this._container, 'leaflet-zoom-animated')),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on('update', this._updatePaths, this);
      },
      onRemove: function () {
        this.off('update', this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function () {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd,
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function (t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function () {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function (t, e) {
        var i = this._map.getZoomScale(e, this._zoom),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          n = this._map.project(this._center, e),
          a = o
            .multiplyBy(-i)
            .add(n)
            .subtract(this._map._getNewPixelOrigin(t, e));
        Yt.any3d ? Ie(this._container, a, i) : Oe(this._container, a);
      },
      _reset: function () {
        for (var t in (this._update(),
        this._updateTransform(this._center, this._zoom),
        this._layers))
          this._layers[t]._reset();
      },
      _onZoomEnd: function () {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function () {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function () {
        var t = this.options.padding,
          e = this._map.getSize(),
          i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        (this._bounds = new D(i, i.add(e.multiplyBy(1 + 2 * t)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      },
    }),
    zo = Wo.extend({
      options: { tolerance: 0 },
      getEvents: function () {
        var t = Wo.prototype.getEvents.call(this);
        return (t.viewprereset = this._onViewPreReset), t;
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function () {
        Wo.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function () {
        var t = (this._container = document.createElement('canvas'));
        He(t, 'mousemove', this._onMouseMove, this),
          He(
            t,
            'click dblclick mousedown mouseup contextmenu',
            this._onClick,
            this
          ),
          He(t, 'mouseout', this._handleMouseOut, this),
          (t._leaflet_disable_events = !0),
          (this._ctx = t.getContext('2d'));
      },
      _destroyContainer: function () {
        C(this._redrawRequest),
          delete this._ctx,
          fe(this._container),
          $e(this._container),
          delete this._container;
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          for (var t in ((this._redrawBounds = null), this._layers))
            this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          Wo.prototype._update.call(this);
          var t = this._bounds,
            e = this._container,
            i = t.getSize(),
            o = Yt.retina ? 2 : 1;
          Oe(e, t.min),
            (e.width = o * i.x),
            (e.height = o * i.y),
            (e.style.width = i.x + 'px'),
            (e.style.height = i.y + 'px'),
            Yt.retina && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire('update');
        }
      },
      _reset: function () {
        Wo.prototype._reset.call(this),
          this._postponeUpdatePaths &&
            ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function (t) {
        this._updateDashArray(t), (this._layers[s(t)] = t);
        var e = (t._order = { layer: t, prev: this._drawLast, next: null });
        this._drawLast && (this._drawLast.next = e),
          (this._drawLast = e),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function (t) {
        this._requestRedraw(t);
      },
      _removePath: function (t) {
        var e = t._order,
          i = e.next,
          o = e.prev;
        i ? (i.prev = o) : (this._drawLast = o),
          o ? (o.next = i) : (this._drawFirst = i),
          delete t._order,
          delete this._layers[s(t)],
          this._requestRedraw(t);
      },
      _updatePath: function (t) {
        this._extendRedrawBounds(t),
          t._project(),
          t._update(),
          this._requestRedraw(t);
      },
      _updateStyle: function (t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function (t) {
        if ('string' == typeof t.options.dashArray) {
          var e,
            i,
            o = t.options.dashArray.split(/[, ]+/),
            n = [];
          for (i = 0; i < o.length; i++) {
            if (((e = Number(o[i])), isNaN(e))) return;
            n.push(e);
          }
          t.options._dashArray = n;
        } else t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function (t) {
        this._map &&
          (this._extendRedrawBounds(t),
          (this._redrawRequest = this._redrawRequest || P(this._redraw, this)));
      },
      _extendRedrawBounds: function (t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          (this._redrawBounds = this._redrawBounds || new D()),
            this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
            this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      },
      _redraw: function () {
        (this._redrawRequest = null),
          this._redrawBounds &&
            (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function () {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else
          this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(
              0,
              0,
              this._container.width,
              this._container.height
            ),
            this._ctx.restore();
      },
      _draw: function () {
        var t,
          e = this._redrawBounds;
        if ((this._ctx.save(), e)) {
          var i = e.getSize();
          this._ctx.beginPath(),
            this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
            this._ctx.clip();
        }
        this._drawing = !0;
        for (var o = this._drawFirst; o; o = o.next)
          (t = o.layer),
            (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
              t._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function (t, e) {
        if (this._drawing) {
          var i,
            o,
            n,
            a,
            s = t._parts,
            r = s.length,
            _ = this._ctx;
          if (r) {
            for (_.beginPath(), i = 0; i < r; i++) {
              for (o = 0, n = s[i].length; o < n; o++)
                (a = s[i][o]), _[o ? 'lineTo' : 'moveTo'](a.x, a.y);
              e && _.closePath();
            }
            this._fillStroke(_, t);
          }
        }
      },
      _updateCircle: function (t) {
        if (this._drawing && !t._empty()) {
          var e = t._point,
            i = this._ctx,
            o = Math.max(Math.round(t._radius), 1),
            n = (Math.max(Math.round(t._radiusY), 1) || o) / o;
          1 !== n && (i.save(), i.scale(1, n)),
            i.beginPath(),
            i.arc(e.x, e.y / n, o, 0, 2 * Math.PI, !1),
            1 !== n && i.restore(),
            this._fillStroke(i, t);
        }
      },
      _fillStroke: function (t, e) {
        var i = e.options;
        i.fill &&
          ((t.globalAlpha = i.fillOpacity),
          (t.fillStyle = i.fillColor || i.color),
          t.fill(i.fillRule || 'evenodd')),
          i.stroke &&
            0 !== i.weight &&
            (t.setLineDash &&
              t.setLineDash((e.options && e.options._dashArray) || []),
            (t.globalAlpha = i.opacity),
            (t.lineWidth = i.weight),
            (t.strokeStyle = i.color),
            (t.lineCap = i.lineCap),
            (t.lineJoin = i.lineJoin),
            t.stroke());
      },
      _onClick: function (t) {
        for (
          var e,
            i,
            o = this._map.mouseEventToLayerPoint(t),
            n = this._drawFirst;
          n;
          n = n.next
        )
          (e = n.layer).options.interactive &&
            e._containsPoint(o) &&
            (('click' !== t.type && 'preclick' !== t.type) ||
              !this._map._draggableMoved(e)) &&
            (i = e);
        this._fireEvent(!!i && [i], t);
      },
      _onMouseMove: function (t) {
        if (
          this._map &&
          !this._map.dragging.moving() &&
          !this._map._animatingZoom
        ) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function (t) {
        var e = this._hoveredLayer;
        e &&
          (Se(this._container, 'leaflet-interactive'),
          this._fireEvent([e], t, 'mouseout'),
          (this._hoveredLayer = null),
          (this._mouseHoverThrottled = !1));
      },
      _handleMouseHover: function (t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, o, a = this._drawFirst; a; a = a.next)
            (i = a.layer).options.interactive && i._containsPoint(e) && (o = i);
          o !== this._hoveredLayer &&
            (this._handleMouseOut(t),
            o &&
              (Ee(this._container, 'leaflet-interactive'),
              this._fireEvent([o], t, 'mouseover'),
              (this._hoveredLayer = o))),
            this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
            (this._mouseHoverThrottled = !0),
            setTimeout(
              n(function () {
                this._mouseHoverThrottled = !1;
              }, this),
              32
            );
        }
      },
      _fireEvent: function (t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      },
      _bringToFront: function (t) {
        var e = t._order;
        if (e) {
          var i = e.next,
            o = e.prev;
          i &&
            ((i.prev = o),
            o ? (o.next = i) : i && (this._drawFirst = i),
            (e.prev = this._drawLast),
            (this._drawLast.next = e),
            (e.next = null),
            (this._drawLast = e),
            this._requestRedraw(t));
        }
      },
      _bringToBack: function (t) {
        var e = t._order;
        if (e) {
          var i = e.next,
            o = e.prev;
          o &&
            ((o.next = i),
            i ? (i.prev = o) : o && (this._drawLast = o),
            (e.prev = null),
            (e.next = this._drawFirst),
            (this._drawFirst.prev = e),
            (this._drawFirst = e),
            this._requestRedraw(t));
        }
      },
    });
  function ko(t) {
    return Yt.canvas ? new zo(t) : null;
  }
  var Go = (function () {
      try {
        return (
          document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
          function (t) {
            return document.createElement('<lvml:' + t + ' class="lvml">');
          }
        );
      } catch (t) {}
      return function (t) {
        return document.createElement(
          '<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
        );
      };
    })(),
    Xo = {
      _initContainer: function () {
        this._container = me('div', 'leaflet-vml-container');
      },
      _update: function () {
        this._map._animatingZoom ||
          (Wo.prototype._update.call(this), this.fire('update'));
      },
      _initPath: function (t) {
        var e = (t._container = Go('shape'));
        Ee(e, 'leaflet-vml-shape ' + (this.options.className || '')),
          (e.coordsize = '1 1'),
          (t._path = Go('path')),
          e.appendChild(t._path),
          this._updateStyle(t),
          (this._layers[s(t)] = t);
      },
      _addPath: function (t) {
        var e = t._container;
        this._container.appendChild(e),
          t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function (t) {
        var e = t._container;
        fe(e), t.removeInteractiveTarget(e), delete this._layers[s(t)];
      },
      _updateStyle: function (t) {
        var e = t._stroke,
          i = t._fill,
          o = t.options,
          n = t._container;
        (n.stroked = !!o.stroke),
          (n.filled = !!o.fill),
          o.stroke
            ? (e || (e = t._stroke = Go('stroke')),
              n.appendChild(e),
              (e.weight = o.weight + 'px'),
              (e.color = o.color),
              (e.opacity = o.opacity),
              o.dashArray
                ? (e.dashStyle = g(o.dashArray)
                    ? o.dashArray.join(' ')
                    : o.dashArray.replace(/( *, *)/g, ' '))
                : (e.dashStyle = ''),
              (e.endcap = o.lineCap.replace('butt', 'flat')),
              (e.joinstyle = o.lineJoin))
            : e && (n.removeChild(e), (t._stroke = null)),
          o.fill
            ? (i || (i = t._fill = Go('fill')),
              n.appendChild(i),
              (i.color = o.fillColor || o.color),
              (i.opacity = o.fillOpacity))
            : i && (n.removeChild(i), (t._fill = null));
      },
      _updateCircle: function (t) {
        var e = t._point.round(),
          i = Math.round(t._radius),
          o = Math.round(t._radiusY || i);
        this._setPath(
          t,
          t._empty()
            ? 'M0 0'
            : 'AL ' + e.x + ',' + e.y + ' ' + i + ',' + o + ' 0,23592600'
        );
      },
      _setPath: function (t, e) {
        t._path.v = e;
      },
      _bringToFront: function (t) {
        Te(t._container);
      },
      _bringToBack: function (t) {
        Le(t._container);
      },
    },
    qo = Yt.vml ? Go : j,
    Ko = Wo.extend({
      _initContainer: function () {
        (this._container = qo('svg')),
          this._container.setAttribute('pointer-events', 'none'),
          (this._rootGroup = qo('g')),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function () {
        fe(this._container),
          $e(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize;
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          Wo.prototype._update.call(this);
          var t = this._bounds,
            e = t.getSize(),
            i = this._container;
          (this._svgSize && this._svgSize.equals(e)) ||
            ((this._svgSize = e),
            i.setAttribute('width', e.x),
            i.setAttribute('height', e.y)),
            Oe(i, t.min),
            i.setAttribute('viewBox', [t.min.x, t.min.y, e.x, e.y].join(' ')),
            this.fire('update');
        }
      },
      _initPath: function (t) {
        var e = (t._path = qo('path'));
        t.options.className && Ee(e, t.options.className),
          t.options.interactive && Ee(e, 'leaflet-interactive'),
          this._updateStyle(t),
          (this._layers[s(t)] = t);
      },
      _addPath: function (t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path);
      },
      _removePath: function (t) {
        fe(t._path),
          t.removeInteractiveTarget(t._path),
          delete this._layers[s(t)];
      },
      _updatePath: function (t) {
        t._project(), t._update();
      },
      _updateStyle: function (t) {
        var e = t._path,
          i = t.options;
        e &&
          (i.stroke
            ? (e.setAttribute('stroke', i.color),
              e.setAttribute('stroke-opacity', i.opacity),
              e.setAttribute('stroke-width', i.weight),
              e.setAttribute('stroke-linecap', i.lineCap),
              e.setAttribute('stroke-linejoin', i.lineJoin),
              i.dashArray
                ? e.setAttribute('stroke-dasharray', i.dashArray)
                : e.removeAttribute('stroke-dasharray'),
              i.dashOffset
                ? e.setAttribute('stroke-dashoffset', i.dashOffset)
                : e.removeAttribute('stroke-dashoffset'))
            : e.setAttribute('stroke', 'none'),
          i.fill
            ? (e.setAttribute('fill', i.fillColor || i.color),
              e.setAttribute('fill-opacity', i.fillOpacity),
              e.setAttribute('fill-rule', i.fillRule || 'evenodd'))
            : e.setAttribute('fill', 'none'));
      },
      _updatePoly: function (t, e) {
        this._setPath(t, J(t._parts, e));
      },
      _updateCircle: function (t) {
        var e = t._point,
          i = Math.max(Math.round(t._radius), 1),
          o =
            'a' +
            i +
            ',' +
            (Math.max(Math.round(t._radiusY), 1) || i) +
            ' 0 1,0 ',
          n = t._empty()
            ? 'M0 0'
            : 'M' +
              (e.x - i) +
              ',' +
              e.y +
              o +
              2 * i +
              ',0 ' +
              o +
              2 * -i +
              ',0 ';
        this._setPath(t, n);
      },
      _setPath: function (t, e) {
        t._path.setAttribute('d', e);
      },
      _bringToFront: function (t) {
        Te(t._path);
      },
      _bringToBack: function (t) {
        Le(t._path);
      },
    });
  function jo(t) {
    return Yt.svg || Yt.vml ? new Ko(t) : null;
  }
  Yt.vml && Ko.include(Xo),
    ni.include({
      getRenderer: function (t) {
        var e =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          e || (e = this._renderer = this._createRenderer()),
          this.hasLayer(e) || this.addLayer(e),
          e
        );
      },
      _getPaneRenderer: function (t) {
        if ('overlayPane' === t || void 0 === t) return !1;
        var e = this._paneRenderers[t];
        return (
          void 0 === e &&
            ((e = this._createRenderer({ pane: t })),
            (this._paneRenderers[t] = e)),
          e
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && ko(t)) || jo(t);
      },
    });
  var Jo = ho.extend({
    initialize: function (t, e) {
      ho.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
    },
    setBounds: function (t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function (t) {
      return [
        (t = H(t)).getSouthWest(),
        t.getNorthWest(),
        t.getNorthEast(),
        t.getSouthEast(),
      ];
    },
  });
  function Qo(t, e) {
    return new Jo(t, e);
  }
  (Ko.create = qo),
    (Ko.pointsToPath = J),
    (po.geometryToLayer = co),
    (po.coordsToLatLng = fo),
    (po.coordsToLatLngs = go),
    (po.latLngToCoords = To),
    (po.latLngsToCoords = Lo),
    (po.getFeature = Ao),
    (po.asFeature = Eo),
    ni.mergeOptions({ boxZoom: !0 });
  var tn = gi.extend({
    initialize: function (t) {
      (this._map = t),
        (this._container = t._container),
        (this._pane = t._panes.overlayPane),
        (this._resetStateTimeout = 0),
        t.on('unload', this._destroy, this);
    },
    addHooks: function () {
      He(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function () {
      $e(this._container, 'mousedown', this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      fe(this._pane), delete this._pane;
    },
    _resetState: function () {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function (t) {
      if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        ae(),
        Ve(),
        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
        He(
          document,
          {
            contextmenu: Ke,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseMove: function (t) {
      this._moved ||
        ((this._moved = !0),
        (this._box = me('div', 'leaflet-zoom-box', this._container)),
        Ee(this._container, 'leaflet-crosshair'),
        this._map.fire('boxzoomstart')),
        (this._point = this._map.mouseEventToContainerPoint(t));
      var e = new D(this._point, this._startPoint),
        i = e.getSize();
      Oe(this._box, e.min),
        (this._box.style.width = i.x + 'px'),
        (this._box.style.height = i.y + 'px');
    },
    _finish: function () {
      this._moved && (fe(this._box), Se(this._container, 'leaflet-crosshair')),
        se(),
        Be(),
        $e(
          document,
          {
            contextmenu: Ke,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseUp: function (t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(n(this._resetState, this), 0));
        var e = new Y(
          this._map.containerPointToLatLng(this._startPoint),
          this._map.containerPointToLatLng(this._point)
        );
        this._map.fitBounds(e).fire('boxzoomend', { boxZoomBounds: e });
      }
    },
    _onKeyDown: function (t) {
      27 === t.keyCode &&
        (this._finish(), this._clearDeferredResetState(), this._resetState());
    },
  });
  ni.addInitHook('addHandler', 'boxZoom', tn),
    ni.mergeOptions({ doubleClickZoom: !0 });
  var en = gi.extend({
    addHooks: function () {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function (t) {
      var e = this._map,
        i = e.getZoom(),
        o = e.options.zoomDelta,
        n = t.originalEvent.shiftKey ? i - o : i + o;
      'center' === e.options.doubleClickZoom
        ? e.setZoom(n)
        : e.setZoomAround(t.containerPoint, n);
    },
  });
  ni.addInitHook('addHandler', 'doubleClickZoom', en),
    ni.mergeOptions({
      dragging: !0,
      inertia: !0,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0,
    });
  var on = gi.extend({
    addHooks: function () {
      if (!this._draggable) {
        var t = this._map;
        (this._draggable = new Ei(t._mapPane, t._container)),
          this._draggable.on(
            {
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          ),
          this._draggable.on('predrag', this._onPreDragLimit, this),
          t.options.worldCopyJump &&
            (this._draggable.on('predrag', this._onPreDragWrap, this),
            t.on('zoomend', this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this));
      }
      Ee(this._map._container, 'leaflet-grab leaflet-touch-drag'),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function () {
      Se(this._map._container, 'leaflet-grab'),
        Se(this._map._container, 'leaflet-touch-drag'),
        this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var t = this._map;
      if (
        (t._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
      ) {
        var e = H(this._map.options.maxBounds);
        (this._offsetLimit = M(
          this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
          this._map
            .latLngToContainerPoint(e.getSouthEast())
            .multiplyBy(-1)
            .add(this._map.getSize())
        )),
          (this._viscosity = Math.min(
            1,
            Math.max(0, this._map.options.maxBoundsViscosity)
          ));
      } else this._offsetLimit = null;
      t.fire('movestart').fire('dragstart'),
        t.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function (t) {
      if (this._map.options.inertia) {
        var e = (this._lastTime = +new Date()),
          i = (this._lastPos =
            this._draggable._absPos || this._draggable._newPos);
        this._positions.push(i), this._times.push(e), this._prunePositions(e);
      }
      this._map.fire('move', t).fire('drag', t);
    },
    _prunePositions: function (t) {
      for (; this._positions.length > 1 && t - this._times[0] > 50; )
        this._positions.shift(), this._times.shift();
    },
    _onZoomEnd: function () {
      var t = this._map.getSize().divideBy(2),
        e = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = e.subtract(t).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function (t, e) {
      return t - (t - e) * this._viscosity;
    },
    _onPreDragLimit: function () {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
          e = this._offsetLimit;
        t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
          t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
          t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
          t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
          (this._draggable._newPos = this._draggable._startPos.add(t));
      }
    },
    _onPreDragWrap: function () {
      var t = this._worldWidth,
        e = Math.round(t / 2),
        i = this._initialWorldOffset,
        o = this._draggable._newPos.x,
        n = ((o - e + i) % t) + e - i,
        a = ((o + e + i) % t) - e - i,
        s = Math.abs(n + i) < Math.abs(a + i) ? n : a;
      (this._draggable._absPos = this._draggable._newPos.clone()),
        (this._draggable._newPos.x = s);
    },
    _onDragEnd: function (t) {
      var e = this._map,
        i = e.options,
        o = !i.inertia || t.noInertia || this._times.length < 2;
      if ((e.fire('dragend', t), o)) e.fire('moveend');
      else {
        this._prunePositions(+new Date());
        var n = this._lastPos.subtract(this._positions[0]),
          a = (this._lastTime - this._times[0]) / 1e3,
          s = i.easeLinearity,
          r = n.multiplyBy(s / a),
          _ = r.distanceTo([0, 0]),
          l = Math.min(i.inertiaMaxSpeed, _),
          h = r.multiplyBy(l / _),
          u = l / (i.inertiaDeceleration * s),
          d = h.multiplyBy(-u / 2).round();
        d.x || d.y
          ? ((d = e._limitOffset(d, e.options.maxBounds)),
            P(function () {
              e.panBy(d, {
                duration: u,
                easeLinearity: s,
                noMoveStart: !0,
                animate: !0,
              });
            }))
          : e.fire('moveend');
      }
    },
  });
  ni.addInitHook('addHandler', 'dragging', on),
    ni.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  var nn = gi.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173],
    },
    initialize: function (t) {
      (this._map = t),
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function () {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = '0'),
        He(
          t,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function () {
      this._removeHooks(),
        $e(
          this._map._container,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function () {
      if (!this._focused) {
        var t = document.body,
          e = document.documentElement,
          i = t.scrollTop || e.scrollTop,
          o = t.scrollLeft || e.scrollLeft;
        this._map._container.focus(), window.scrollTo(o, i);
      }
    },
    _onFocus: function () {
      (this._focused = !0), this._map.fire('focus');
    },
    _onBlur: function () {
      (this._focused = !1), this._map.fire('blur');
    },
    _setPanDelta: function (t) {
      var e,
        i,
        o = (this._panKeys = {}),
        n = this.keyCodes;
      for (e = 0, i = n.left.length; e < i; e++) o[n.left[e]] = [-1 * t, 0];
      for (e = 0, i = n.right.length; e < i; e++) o[n.right[e]] = [t, 0];
      for (e = 0, i = n.down.length; e < i; e++) o[n.down[e]] = [0, t];
      for (e = 0, i = n.up.length; e < i; e++) o[n.up[e]] = [0, -1 * t];
    },
    _setZoomDelta: function (t) {
      var e,
        i,
        o = (this._zoomKeys = {}),
        n = this.keyCodes;
      for (e = 0, i = n.zoomIn.length; e < i; e++) o[n.zoomIn[e]] = t;
      for (e = 0, i = n.zoomOut.length; e < i; e++) o[n.zoomOut[e]] = -t;
    },
    _addHooks: function () {
      He(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function () {
      $e(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function (t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var e,
          i = t.keyCode,
          o = this._map;
        if (i in this._panKeys) {
          if (!o._panAnim || !o._panAnim._inProgress)
            if (
              ((e = this._panKeys[i]),
              t.shiftKey && (e = w(e).multiplyBy(3)),
              o.options.maxBounds &&
                (e = o._limitOffset(w(e), o.options.maxBounds)),
              o.options.worldCopyJump)
            ) {
              var n = o.wrapLatLng(
                o.unproject(o.project(o.getCenter()).add(e))
              );
              o.panTo(n);
            } else o.panBy(e);
        } else if (i in this._zoomKeys)
          o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
        else {
          if (27 !== i || !o._popup || !o._popup.options.closeOnEscapeKey)
            return;
          o.closePopup();
        }
        Ke(t);
      }
    },
  });
  ni.addInitHook('addHandler', 'keyboard', nn),
    ni.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60,
    });
  var an = gi.extend({
    addHooks: function () {
      He(this._map._container, 'wheel', this._onWheelScroll, this),
        (this._delta = 0);
    },
    removeHooks: function () {
      $e(this._map._container, 'wheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function (t) {
      var e = ti(t),
        i = this._map.options.wheelDebounceTime;
      (this._delta += e),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
        this._startTime || (this._startTime = +new Date());
      var o = Math.max(i - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer),
        (this._timer = setTimeout(n(this._performZoom, this), o)),
        Ke(t);
    },
    _performZoom: function () {
      var t = this._map,
        e = t.getZoom(),
        i = this._map.options.zoomSnap || 0;
      t._stop();
      var o = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        n = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(o))))) / Math.LN2,
        a = i ? Math.ceil(n / i) * i : n,
        s = t._limitZoom(e + (this._delta > 0 ? a : -a)) - e;
      (this._delta = 0),
        (this._startTime = null),
        s &&
          ('center' === t.options.scrollWheelZoom
            ? t.setZoom(e + s)
            : t.setZoomAround(this._lastMousePos, e + s));
    },
  });
  ni.addInitHook('addHandler', 'scrollWheelZoom', an);
  var sn = 600;
  ni.mergeOptions({
    tapHold: Yt.touchNative && Yt.safari && Yt.mobile,
    tapTolerance: 15,
  });
  var rn = gi.extend({
    addHooks: function () {
      He(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function () {
      $e(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function (t) {
      if ((clearTimeout(this._holdTimeout), 1 === t.touches.length)) {
        var e = t.touches[0];
        (this._startPos = this._newPos = new B(e.clientX, e.clientY)),
          (this._holdTimeout = setTimeout(
            n(function () {
              this._cancel(),
                this._isTapValid() &&
                  (He(document, 'touchend', qe),
                  He(
                    document,
                    'touchend touchcancel',
                    this._cancelClickPrevent
                  ),
                  this._simulateEvent('contextmenu', e));
            }, this),
            sn
          )),
          He(document, 'touchend touchcancel contextmenu', this._cancel, this),
          He(document, 'touchmove', this._onMove, this);
      }
    },
    _cancelClickPrevent: function t() {
      $e(document, 'touchend', qe), $e(document, 'touchend touchcancel', t);
    },
    _cancel: function () {
      clearTimeout(this._holdTimeout),
        $e(document, 'touchend touchcancel contextmenu', this._cancel, this),
        $e(document, 'touchmove', this._onMove, this);
    },
    _onMove: function (t) {
      var e = t.touches[0];
      this._newPos = new B(e.clientX, e.clientY);
    },
    _isTapValid: function () {
      return (
        this._newPos.distanceTo(this._startPos) <=
        this._map.options.tapTolerance
      );
    },
    _simulateEvent: function (t, e) {
      var i = new MouseEvent(t, {
        bubbles: !0,
        cancelable: !0,
        view: window,
        screenX: e.screenX,
        screenY: e.screenY,
        clientX: e.clientX,
        clientY: e.clientY,
      });
      (i._simulated = !0), e.target.dispatchEvent(i);
    },
  });
  ni.addInitHook('addHandler', 'tapHold', rn),
    ni.mergeOptions({ touchZoom: Yt.touch, bounceAtZoomLimits: !0 });
  var _n = gi.extend({
    addHooks: function () {
      Ee(this._map._container, 'leaflet-touch-zoom'),
        He(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function () {
      Se(this._map._container, 'leaflet-touch-zoom'),
        $e(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function (t) {
      var e = this._map;
      if (
        t.touches &&
        2 === t.touches.length &&
        !e._animatingZoom &&
        !this._zooming
      ) {
        var i = e.mouseEventToContainerPoint(t.touches[0]),
          o = e.mouseEventToContainerPoint(t.touches[1]);
        (this._centerPoint = e.getSize()._divideBy(2)),
          (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
          'center' !== e.options.touchZoom &&
            (this._pinchStartLatLng = e.containerPointToLatLng(
              i.add(o)._divideBy(2)
            )),
          (this._startDist = i.distanceTo(o)),
          (this._startZoom = e.getZoom()),
          (this._moved = !1),
          (this._zooming = !0),
          e._stop(),
          He(document, 'touchmove', this._onTouchMove, this),
          He(document, 'touchend touchcancel', this._onTouchEnd, this),
          qe(t);
      }
    },
    _onTouchMove: function (t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var e = this._map,
          i = e.mouseEventToContainerPoint(t.touches[0]),
          o = e.mouseEventToContainerPoint(t.touches[1]),
          a = i.distanceTo(o) / this._startDist;
        if (
          ((this._zoom = e.getScaleZoom(a, this._startZoom)),
          !e.options.bounceAtZoomLimits &&
            ((this._zoom < e.getMinZoom() && a < 1) ||
              (this._zoom > e.getMaxZoom() && a > 1)) &&
            (this._zoom = e._limitZoom(this._zoom)),
          'center' === e.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 === a)) return;
        } else {
          var s = i._add(o)._divideBy(2)._subtract(this._centerPoint);
          if (1 === a && 0 === s.x && 0 === s.y) return;
          this._center = e.unproject(
            e.project(this._pinchStartLatLng, this._zoom).subtract(s),
            this._zoom
          );
        }
        this._moved || (e._moveStart(!0, !1), (this._moved = !0)),
          C(this._animRequest);
        var r = n(
          e._move,
          e,
          this._center,
          this._zoom,
          { pinch: !0, round: !1 },
          void 0
        );
        (this._animRequest = P(r, this, !0)), qe(t);
      }
    },
    _onTouchEnd: function () {
      this._moved && this._zooming
        ? ((this._zooming = !1),
          C(this._animRequest),
          $e(document, 'touchmove', this._onTouchMove, this),
          $e(document, 'touchend touchcancel', this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              ))
        : (this._zooming = !1);
    },
  });
  ni.addInitHook('addHandler', 'touchZoom', _n),
    (ni.BoxZoom = tn),
    (ni.DoubleClickZoom = en),
    (ni.Drag = on),
    (ni.Keyboard = nn),
    (ni.ScrollWheelZoom = an),
    (ni.TapHold = rn),
    (ni.TouchZoom = _n),
    (t.Bounds = D),
    (t.Browser = Yt),
    (t.CRS = U),
    (t.Canvas = zo),
    (t.Circle = so),
    (t.CircleMarker = no),
    (t.Class = O),
    (t.Control = si),
    (t.DivIcon = Do),
    (t.DivOverlay = bo),
    (t.DomEvent = ii),
    (t.DomUtil = Ye),
    (t.Draggable = Ei),
    (t.Evented = V),
    (t.FeatureGroup = qi),
    (t.GeoJSON = po),
    (t.GridLayer = Yo),
    (t.Handler = gi),
    (t.Icon = ji),
    (t.ImageOverlay = No),
    (t.LatLng = F),
    (t.LatLngBounds = Y),
    (t.Layer = ki),
    (t.LayerGroup = Gi),
    (t.LineUtil = Di),
    (t.Map = ni),
    (t.Marker = eo),
    (t.Mixin = Li),
    (t.Path = oo),
    (t.Point = B),
    (t.PolyUtil = Hi),
    (t.Polygon = ho),
    (t.Polyline = _o),
    (t.Popup = Vo),
    (t.PosAnimation = oi),
    (t.Projection = Zi),
    (t.Rectangle = Jo),
    (t.Renderer = Wo),
    (t.SVG = Ko),
    (t.SVGOverlay = Oo),
    (t.TileLayer = Fo),
    (t.Tooltip = xo),
    (t.Transformation = G),
    (t.Util = I),
    (t.VideoOverlay = Co),
    (t.bind = n),
    (t.bounds = M),
    (t.canvas = ko),
    (t.circle = ro),
    (t.circleMarker = ao),
    (t.control = ri),
    (t.divIcon = Mo),
    (t.extend = i),
    (t.featureGroup = Ki),
    (t.geoJSON = vo),
    (t.geoJson = yo),
    (t.gridLayer = Ho),
    (t.icon = Ji),
    (t.imageOverlay = Po),
    (t.latLng = $),
    (t.latLngBounds = H),
    (t.layerGroup = Xi),
    (t.map = ai),
    (t.marker = io),
    (t.point = w),
    (t.polygon = uo),
    (t.polyline = lo),
    (t.popup = Bo),
    (t.rectangle = Qo),
    (t.setOptions = p),
    (t.stamp = s),
    (t.svg = jo),
    (t.svgOverlay = Ro),
    (t.tileLayer = $o),
    (t.tooltip = wo),
    (t.transformation = X),
    (t.version = e),
    (t.videoOverlay = Io);
  var ln = window.L;
  (t.noConflict = function () {
    return (window.L = ln), this;
  }),
    (window.L = t);
})(t);
var e = t.map('map', { scrollWheelZoom: !0 });
t
  .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 13,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  })
  .addTo(e),
  e.setView([36.148739, -86.803574], 12),
  [
    {
      'X': 1,
      'Map_.amp._Parcel': ' 092 07 0 407.00',
      'Location': ' 600 21ST AVE N, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 1 621 21ST AVE SUB LOT 1-4 &amp; LOT O OF W.C. COOPER SUB',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 11/08/2007',
      'Sale_Price': ' $1,600,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $2,727,000',
      'Land_Value': ' $1,881,800',
      'Total_Appraisal_Value': ' $4,608,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' LIGHT MANUFACTURING',
      'Zone': 2,
      'Neighborhood': 306,
      'Land_Area': ' 1.44 Acres',
      'Property_Type': ' WAREHOUSE',
      'Year_Built': 1910,
      'Square_Footage': ' 19,140',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1589,
      'long': -86.8065,
    },
    {
      'X': 2,
      'Map_.amp._Parcel': ' 092 16 0 043.00',
      'Location': ' 2019 WEST END AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE, STE 750 C/O SEAN SCAL, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 10 &amp; LOTS 11 &amp; 12 JOHN H. WILLIAMS',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 11/17/2022',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $51,000',
      'Land_Value': ' $5,600,000',
      'Total_Appraisal_Value': ' $5,651,000',
      'Assessed_Value': ' $2,260,400',
      'Property_Use': ' FAST FOOD',
      'Zone': 2,
      'Neighborhood': 911,
      'Land_Area': ' 0.48 Acres',
      'Property_Type': ' REST/BAR',
      'Year_Built': 1973,
      'Square_Footage': ' 3,431',
      'Exterior_Wall': ' STUCCO',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1503,
      'long': -86.8006,
    },
    {
      'X': 3,
      'Map_.amp._Parcel': ' 092 16 0 044.00',
      'Location': ' 110 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 22-23-24 WILLIAMS SUB.',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 02/01/1990',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $16,457,000',
      'Land_Value': ' $5,136,600',
      'Total_Appraisal_Value': ' $21,593,600',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (3 OR MORE STORIES)',
      'Zone': 2,
      'Neighborhood': 911,
      'Land_Area': ' 0.55 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1966,
      'Square_Footage': ' 135,600',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 7 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1499,
      'long': -86.8004,
    },
    {
      'X': 4,
      'Map_.amp._Parcel': ' 092 16 0 057.00',
      'Location': ' 2007 TERRACE PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 28-32 JOHN H WILLIAMS &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 11/01/2004',
      'Sale_Price': ' $850,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $2,150,900',
      'Land_Value': ' $8,232,800',
      'Total_Appraisal_Value': ' $10,383,700',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 1.05 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1910,
      'Square_Footage': ' 6,249',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1497,
      'long': -86.7993,
    },
    {
      'X': 5,
      'Map_.amp._Parcel': ' 092 16 0 063.00',
      'Location': ' 112 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 41-49 JOHN H. WILLIAMS &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 03/08/1988',
      'Sale_Price': ' $1,487,500',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $79,300',
      'Land_Value': ' $9,409,100',
      'Total_Appraisal_Value': ' $9,488,400',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.96 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1493,
      'long': -86.7999,
    },
    {
      'X': 6,
      'Map_.amp._Parcel': ' 092 16 0 070.00',
      'Location': ' 2020 BROADWAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 48 &amp; 49 JOHN H. WILLIAMS SUB. &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/26/1991',
      'Sale_Price': ' $610,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $27,800',
      'Land_Value': ' $4,116,400',
      'Total_Appraisal_Value': ' $4,144,200',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.42 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1486,
      'long': -86.7994,
    },
    {
      'X': 7,
      'Map_.amp._Parcel': ' 092 16 0 072.00',
      'Location': ' 2014 BROADWAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 40 JOHN H WILLIAMS &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/05/1989',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $893,500',
      'Land_Value': ' $4,410,500',
      'Total_Appraisal_Value': ' $5,304,000',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING GARAGE',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.45 Acres',
      'Property_Type': " PARK'G GAR",
      'Year_Built': 1982,
      'Square_Footage': ' 27,984',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1491,
      'long': -86.7993,
    },
    {
      'X': 8,
      'Map_.amp._Parcel': ' 092 16 0 073.00',
      'Location': ' 2012 BROADWAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 38 &amp; 39 JOHN WILLIAMS &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/05/1989',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $3,283,900',
      'Land_Value': ' $4,606,400',
      'Total_Appraisal_Value': ' $7,890,300',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (3 OR MORE STORIES)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.47 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1981,
      'Square_Footage': ' 35,709',
      'Exterior_Wall': ' BRICK/FRAME',
      'Story_Height': ' 3 STY',
      'Building_Condition': ' Fair',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1492,
      'long': -86.7991,
    },
    {
      'X': 9,
      'Map_.amp._Parcel': ' 092 16 0 075.00',
      'Location': ' 2008 BROADWAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 37 JOHN H WILLIAMS &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/23/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $15,500',
      'Land_Value': ' $2,254,100',
      'Total_Appraisal_Value': ' $2,269,600',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.23 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1494,
      'long': -86.7988,
    },
    {
      'X': 10,
      'Map_.amp._Parcel': ' 092 16 0 076.00',
      'Location': ' 2006 BROADWAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 36 JOHN H WILLIAMS &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/23/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $4,594,600',
      'Land_Value': ' $2,058,300',
      'Total_Appraisal_Value': ' $6,652,900',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.21 Acres',
      'Property_Type': ' MID RISE APT',
      'Year_Built': 1962,
      'Square_Footage': ' 27,400',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 5 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1495,
      'long': -86.7987,
    },
    {
      'X': 11,
      'Map_.amp._Parcel': ' 092 16 0 077.00',
      'Location': ' 2004 BROADWAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 35 JOHN H WILLIAMS',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/23/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $14,100',
      'Land_Value': ' $1,788,800',
      'Total_Appraisal_Value': ' $1,802,900',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.19 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1496,
      'long': -86.7987,
    },
    {
      'X': 12,
      'Map_.amp._Parcel': ' 092 16 0 078.00',
      'Location': ' 2002 BROADWAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 34 JOHN H WILLIAMS',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/23/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $11,500',
      'Land_Value': ' $1,372,100',
      'Total_Appraisal_Value': ' $1,383,600',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.14 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1496,
      'long': -86.7984,
    },
    {
      'X': 13,
      'Map_.amp._Parcel': ' 092 16 0 079.00',
      'Location': ' 2000 BROADWAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 33 &amp; PT 34 JOHN H WILLIAMS',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 09/24/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $18,500',
      'Land_Value': ' $1,577,300',
      'Total_Appraisal_Value': ' $1,595,800',
      'Assessed_Value': ' $638,320',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.16 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1497,
      'long': -86.7983,
    },
    {
      'X': 14,
      'Map_.amp._Parcel': ' 104 02 0 381.00',
      'Location': ' 114 30TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O SEAN SCALL, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 1 BADGER-BOGLE SUB',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 01/25/2023',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $491,300',
      'Land_Value': ' $1,536,000',
      'Total_Appraisal_Value': ' $2,027,300',
      'Assessed_Value': ' $810,920',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.28 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1982,
      'Square_Footage': ' 3,481',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1429,
      'long': -86.8136,
    },
    {
      'X': 15,
      'Map_.amp._Parcel': ' 104 02 0 382.00',
      'Location': ' 116 30TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O SEAN SCALL, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 2 HENRY GEORGE',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 01/25/2023',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $455,200',
      'Land_Value': ' $800,000',
      'Total_Appraisal_Value': ' $1,255,200',
      'Assessed_Value': ' $502,080',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.14 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1984,
      'Square_Footage': ' 3,072',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1427,
      'long': -86.8135,
    },
    {
      'X': 16,
      'Map_.amp._Parcel': ' 104 02 0 392.00',
      'Location': ' 115 29TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O SEAN SCALL, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 23 &amp; 24 WILLIAMS SUB 55 B C S',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 01/25/2023',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $996,200',
      'Land_Value': ' $1,687,500',
      'Total_Appraisal_Value': ' $2,683,700',
      'Assessed_Value': ' $1,073,480',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.31 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1997,
      'Square_Footage': ' 7,748',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.143,
      'long': -86.813,
    },
    {
      'X': 17,
      'Map_.amp._Parcel': ' 104 02 0 393.00',
      'Location': ' 113 29TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O SEAN SCALL, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 25 WILLIAMS SUB 55 B C S',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 01/25/2023',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $90,800',
      'Land_Value': ' $843,800',
      'Total_Appraisal_Value': ' $934,600',
      'Assessed_Value': ' $373,840',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.15 Acres',
      'Property_Type': ' SINGLE FAM',
      'Year_Built': 1924,
      'Square_Footage': ' 1,440',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' ONE STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' PT BSMT',
      'Number_of_Rooms': 6,
      'Number_of_Beds': 2,
      'Number_of_Baths': 1,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 5,
      'lat': 36.1432,
      'long': -86.8132,
    },
    {
      'X': 18,
      'Map_.amp._Parcel': ' 092 16 0 147.00',
      'Location': ' 114 20TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 2 VANDERBILT GRADUATE HOUSING RESUB',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 02/19/2020',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $0',
      'Land_Value': ' $1,019,300',
      'Total_Appraisal_Value': ' $1,019,300',
      'Assessed_Value': ' $407,720',
      'Property_Use': ' VACANT COMMERCIAL LAND',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.13 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1507,
      'long': -86.7985,
    },
    {
      'X': 19,
      'Map_.amp._Parcel': ' 104 03 0 022.00',
      'Location': ' 118 29TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 13 WILLIAMS SUB 55 OF B C S',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/08/2007',
      'Sale_Price': ' $709,800',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $173,300',
      'Land_Value': ' $843,800',
      'Total_Appraisal_Value': ' $1,017,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.16 Acres',
      'Property_Type': ' SINGLE FAM',
      'Year_Built': 1925,
      'Square_Footage': ' 1,983',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1.5 STORY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' CRAWL',
      'Number_of_Rooms': 6,
      'Number_of_Beds': 2,
      'Number_of_Baths': 1,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 5,
      'lat': 36.143,
      'long': -86.8125,
    },
    {
      'X': 20,
      'Map_.amp._Parcel': ' 104 03 0 046.00',
      'Location': ' 2803 WEST END AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE, STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 4 PT 3 SHIELDS &amp; PT ALLEY CLOSURE',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 08/02/2022',
      'Sale_Price': ' $3,800,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $4,200',
      'Land_Value': ' $3,301,500',
      'Total_Appraisal_Value': ' $3,305,700',
      'Assessed_Value': ' $1,322,280',
      'Property_Use': ' STRIP SHOPPING CENTER',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.27 Acres',
      'Property_Type': ' RETAIL/SHPG',
      'Year_Built': 1948,
      'Square_Footage': ' 9,053',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1449,
      'long': -86.8121,
    },
    {
      'X': 21,
      'Map_.amp._Parcel': ' 104 03 0 066.00',
      'Location': ' 2609 WEST END AVE Unit 101, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LT 1 RESUB OF LT 52 OF J.B.COCKRILL SPG TR.LTS 4-13 SHIELDS',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 08/01/2019',
      'Sale_Price': ' $13,800,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $13,600',
      'Land_Value': ' $17,007,300',
      'Total_Appraisal_Value': ' $17,020,900',
      'Assessed_Value': ' $6,808,360',
      'Property_Use': ' RESTURANT/CAFETERIA',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 1.56 Acres',
      'Property_Type': ' REST/BAR',
      'Year_Built': 1950,
      'Square_Footage': ' 14,460',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1456,
      'long': -86.8104,
    },
    {
      'X': 22,
      'Map_.amp._Parcel': ' 104 03 0 067.00',
      'Location': ' 2603 WEST END AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O SEAN SCALL, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 1-2-3-7-8-9 SHIELDS SUB OF BCS',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 01/23/2020',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $66,400',
      'Land_Value': ' $6,534,000',
      'Total_Appraisal_Value': ' $6,600,400',
      'Assessed_Value': ' $2,640,160',
      'Property_Use': ' FAST FOOD',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.60 Acres',
      'Property_Type': ' FAST FOOD',
      'Year_Built': 1978,
      'Square_Footage': ' 2,869',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Fair',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1457,
      'long': -86.81,
    },
    {
      'X': 23,
      'Map_.amp._Parcel': ' 104 03 0 086.00',
      'Location': ' 2500 KENSINGTON PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOTS 19 20 ELLISTON SUB',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 05/25/1977',
      'Sale_Price': ' $75,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $614,000',
      'Land_Value': ' $3,757,000',
      'Total_Appraisal_Value': ' $4,371,000',
      'Assessed_Value': ' $0',
      'Property_Use': ' DORMITORY/BOARDING HOUSE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 0.62 Acres',
      'Property_Type': ' RESD QUADPLX',
      'Year_Built': 1910,
      'Square_Footage': ' 8,559',
      'Exterior_Wall': ' STONE',
      'Story_Height': ' TWO STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' PT BSMT',
      'Number_of_Rooms': 14,
      'Number_of_Beds': 0,
      'Number_of_Baths': 7,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 22,
      'lat': 36.146,
      'long': -86.808,
    },
    {
      'X': 24,
      'Map_.amp._Parcel': ' 104 03 0 214.00',
      'Location': ' 2400 GARLAND AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' PT L 66 B C S TR LOTS 1-2-3-4-RE-SUB BLK A &amp; PT ALLY CL',
      'Assessment_Classification.': ' COM/EXE',
      'Sale_Date': ' 04/10/1954',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $65,700',
      'Land_Value': ' $12,360,100',
      'Total_Appraisal_Value': ' $12,425,800',
      'Assessed_Value': ' $4,224,802',
      'Property_Use': ' SPLIT CLASS',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 2.27 Acres',
      'Property_Type': ' COUNTRY CLUB',
      'Year_Built': 1969,
      'Square_Footage': ' 31,712',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1433,
      'long': -86.8042,
    },
    {
      'X': 25,
      'Map_.amp._Parcel': ' 104 03 0 240.00',
      'Location': ' 2900 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 15-16-17 WILLIAMS SUB 55 OF B.C.S.',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 12/01/2016',
      'Sale_Price': ' $5,437,040',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,573,200',
      'Land_Value': ' $2,613,600',
      'Total_Appraisal_Value': ' $4,186,800',
      'Assessed_Value': ' $1,674,720',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.48 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1985,
      'Square_Footage': ' 10,442',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1427,
      'long': -86.8121,
    },
    {
      'X': 26,
      'Map_.amp._Parcel': ' 104 03 0 246.00',
      'Location': ' 2810 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' N/S VANDERBILT PLACE W OF 28TH AVE. S.',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 12/29/1967',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $93,200',
      'Land_Value': ' $1,680,000',
      'Total_Appraisal_Value': ' $1,773,200',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 1.34 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1435,
      'long': -86.8115,
    },
    {
      'X': 27,
      'Map_.amp._Parcel': ' 104 03 0 247.00',
      'Location': ' 115 28TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' N/W COR 28TH AVE. S. &amp; VANDERBILT PLACE',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/21/1960',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,801,200',
      'Land_Value': ' $7,623,000',
      'Total_Appraisal_Value': ' $9,424,200',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 1.40 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1999,
      'Square_Footage': ' 9,962',
      'Exterior_Wall': ' CONC BLK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1437,
      'long': -86.8111,
    },
    {
      'X': 28,
      'Map_.amp._Parcel': ' 104 03 0 248.00',
      'Location': ' 124 28TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' E/S 28TH AVE. S N OF VANDERBILT PLACE',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 02/20/1971',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $38,100',
      'Land_Value': ' $6,942,400',
      'Total_Appraisal_Value': ' $6,980,500',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.85 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1439,
      'long': -86.8106,
    },
    {
      'X': 29,
      'Map_.amp._Parcel': ' 104 03 0 254.00',
      'Location': ' 2818 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O S SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 2 WEST END HOME FOR LADIES-2ND REV',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 09/15/2011',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $5,335,500',
      'Land_Value': ' $1,925,000',
      'Total_Appraisal_Value': ' $7,260,500',
      'Assessed_Value': ' $0',
      'Property_Use': ' DORMITORY/BOARDING HOUSE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 1.53 Acres',
      'Property_Type': ' APARTMENT',
      'Year_Built': 1984,
      'Square_Footage': ' 36,286',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 3 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1432,
      'long': -86.8118,
    },
    {
      'X': 30,
      'Map_.amp._Parcel': ' 104 03 0 255.00',
      'Location': ' 0 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O S SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' RES PAR A WEST END HOME FOR LADIES-2ND REV',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 09/15/2011',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $11,700',
      'Land_Value': ' $1,875,000',
      'Total_Appraisal_Value': ' $1,886,700',
      'Assessed_Value': ' $754,680',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 0.34 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1421,
      'long': -86.8127,
    },
    {
      'X': 31,
      'Map_.amp._Parcel': ' 104 03 0 257.00',
      'Location': ' 2611 WEST END AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LT 2 RESUB OF LT 52 J.B.COCKRILL SPG TR.&amp; LTS 4-13 SHEILDS',
      'Assessment_Classification.': ' EXE/COM',
      'Sale_Date': ' 08/01/2019',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $3,778,100',
      'Land_Value': ' $10,389,800',
      'Total_Appraisal_Value': ' $14,167,900',
      'Assessed_Value': ' $2,036,522',
      'Property_Use': ' SPLIT CLASS',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 1.21 Acres',
      'Property_Type': ' MED OFC',
      'Year_Built': 1958,
      'Square_Footage': ' 28,020',
      'Exterior_Wall': ' GLASS',
      'Story_Height': ' 3 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1448,
      'long': -86.8105,
    },
    {
      'X': 32,
      'Map_.amp._Parcel': ' 104 03 0 258.00',
      'Location': ' 2525 WEST END AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 1 VANDERBILT UNIVERSITY CONSOLIDATION PLAT RESUB LT 2',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 06/23/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $59,312,500',
      'Land_Value': ' $53,687,500',
      'Total_Appraisal_Value': ' $113,000,000',
      'Assessed_Value': ' $45,200,000',
      'Property_Use': ' OFFICE BLDG (3 OR MORE STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 4.93 Acres',
      'Property_Type': " PARK'G GAR",
      'Year_Built': 1987,
      'Square_Footage': ' 387,537',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 7 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1462,
      'long': -86.8088,
    },
    {
      'X': 33,
      'Map_.amp._Parcel': ' 104 04 0 023.00',
      'Location': ' 406 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 5 THRU 8 THOMPSON SUB',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 07/13/2021',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,171,000',
      'Land_Value': ' $6,300,000',
      'Total_Appraisal_Value': ' $7,471,000',
      'Assessed_Value': ' $2,988,400',
      'Property_Use': ' FAST FOOD',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.80 Acres',
      'Property_Type': ' FAST FOOD',
      'Year_Built': 2003,
      'Square_Footage': ' 5,516',
      'Exterior_Wall': ' STUCCO',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1466,
      'long': -86.7992,
    },
    {
      'X': 34,
      'Map_.amp._Parcel': ' 104 04 0 025.00',
      'Location': ' 1001 19TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN SEAN SCAL, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 38 39 40 41 42 43 &amp; 44 ALSO A, CLOSED ALLEY THOMPSON',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/13/2021',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $9,500',
      'Land_Value': ' $9,565,800',
      'Total_Appraisal_Value': ' $9,575,300',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 1.83 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1462,
      'long': -86.7981,
    },
    {
      'X': 35,
      'Map_.amp._Parcel': ' 104 04 0 027.00',
      'Location': ' 2001 GRAND AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 1 HAYES ROKEBY PLAN',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/13/2021',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $7,539,600',
      'Land_Value': ' $5,174,900',
      'Total_Appraisal_Value': ' $12,714,500',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (3 OR MORE STORIES)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.99 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1990,
      'Square_Footage': ' 66,446',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 4 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1467,
      'long': -86.7975,
    },
    {
      'X': 36,
      'Map_.amp._Parcel': ' 104 04 0 028.00',
      'Location': ' 2005 GRAND AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 1 HAYES ROKEBY PLAN',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/13/2021',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $3,300',
      'Land_Value': ' $1,045,400',
      'Total_Appraisal_Value': ' $1,048,700',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.20 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1469,
      'long': -86.7977,
    },
    {
      'X': 37,
      'Map_.amp._Parcel': ' 104 04 0 029.00',
      'Location': ' 2009 GRAND AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 1 HAYES ROKEBY PLAN',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/13/2021',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $38,900',
      'Land_Value': ' $2,352,200',
      'Total_Appraisal_Value': ' $2,391,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.45 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1469,
      'long': -86.798,
    },
    {
      'X': 38,
      'Map_.amp._Parcel': ' 104 04 0 030.00',
      'Location': ' 2011 GRAND AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 1 DAVIS PROPERTY',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 07/13/2021',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $12,900',
      'Land_Value': ' $1,097,800',
      'Total_Appraisal_Value': ' $1,110,700',
      'Assessed_Value': ' $444,280',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.21 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.147,
      'long': -86.7982,
    },
    {
      'X': 39,
      'Map_.amp._Parcel': ' 104 04 0 031.00',
      'Location': ' 2011 B GRAND AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 1 DAVIS PROPERTY',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 07/13/2021',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $15,100',
      'Land_Value': ' $365,900',
      'Total_Appraisal_Value': ' $381,000',
      'Assessed_Value': ' $152,400',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.07 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.147,
      'long': -86.7982,
    },
    {
      'X': 40,
      'Map_.amp._Parcel': ' 104 04 0 033.00',
      'Location': ' 2013 GRAND AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: SEAN SCA, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 2 &amp; 3 DAVIS PROPERTY',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 07/13/2021',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $43,200',
      'Land_Value': ' $3,056,800',
      'Total_Appraisal_Value': ' $3,100,000',
      'Assessed_Value': ' $1,240,000',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.59 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1469,
      'long': -86.7985,
    },
    {
      'X': 41,
      'Map_.amp._Parcel': ' 104 04 0 034.00',
      'Location': ' 422 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 10 11 12 34 35 36 37 PT CLOSED ALLEY THOMPSON',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 05/01/1914',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $19,028,100',
      'Land_Value': ' $7,998,000',
      'Total_Appraisal_Value': ' $27,026,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING GARAGE',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 1.56 Acres',
      'Property_Type': " PARK'G GAR",
      'Year_Built': 1995,
      'Square_Footage': ' 315,636',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 5 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1457,
      'long': -86.7982,
    },
    {
      'X': 42,
      'Map_.amp._Parcel': ' 104 04 0 040.00',
      'Location': ' 1101 19TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O S SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 45 46 47 THOMPSON',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/17/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $0',
      'Land_Value': ' $3,199,200',
      'Total_Appraisal_Value': ' $3,199,200',
      'Assessed_Value': ' $0',
      'Property_Use': ' MUSEUM OR OTHER CULTURAL ORG.',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.58 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1456,
      'long': -86.7977,
    },
    {
      'X': 43,
      'Map_.amp._Parcel': ' 104 04 0 042.00',
      'Location': ' 1110 19TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 8 &amp; 9 &amp; PT  7 &amp; 10 HAMILTON SUB ROKEBY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 02/17/2006',
      'Sale_Price': ' $1,850,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $23,800',
      'Land_Value': ' $3,972,600',
      'Total_Appraisal_Value': ' $3,996,400',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.76 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1449,
      'long': -86.797,
    },
    {
      'X': 44,
      'Map_.amp._Parcel': ' 104 04 0 046.00',
      'Location': ' 1808 EDGEHILL AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 4 J H B RESUB HAYES PLAN',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/15/2002',
      'Sale_Price': ' $425,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $518,900',
      'Land_Value': ' $900,000',
      'Total_Appraisal_Value': ' $1,418,900',
      'Assessed_Value': ' $0',
      'Property_Use': ' APARTMENT: LOW RISE (BUILT SINCE 1960)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.17 Acres',
      'Property_Type': ' APARTMENT',
      'Year_Built': 1984,
      'Square_Footage': ' 4,092',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.144,
      'long': -86.7963,
    },
    {
      'X': 45,
      'Map_.amp._Parcel': ' 104 04 0 207.00',
      'Location': ' 1203 17TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: S SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 22 HAYES ROKEBY PLAN',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 03/09/2016',
      'Sale_Price': ' $1,400,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,236,700',
      'Land_Value': ' $1,646,600',
      'Total_Appraisal_Value': ' $2,883,300',
      'Assessed_Value': ' $0',
      'Property_Use': ' APARTMENT: LOW RISE (BUILT SINCE 1960)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.42 Acres',
      'Property_Type': ' APARTMENT',
      'Year_Built': 1979,
      'Square_Footage': ' 5,184',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1433,
      'long': -86.7948,
    },
    {
      'X': 46,
      'Map_.amp._Parcel': ' 104 06 0 162.00',
      'Location': ' 3319 WEST END AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 5&amp;6 PT 4&amp;7 BRANSFORD REALTY CO WEST END HGTS',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/03/2002',
      'Sale_Price': ' $9,795,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $21,341,900',
      'Land_Value': ' $9,262,600',
      'Total_Appraisal_Value': ' $30,604,500',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (3 OR MORE STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 1.05 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1985,
      'Square_Footage': ' 133,157',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 9 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1397,
      'long': -86.8179,
    },
    {
      'X': 47,
      'Map_.amp._Parcel': ' 104 06 0 246.00',
      'Location': ' 3022 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 12&amp;13 BRANSFORD RLTY CO SUB LOT 57 BCS &amp; CLOSED R.O.W.',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 09/25/2018',
      'Sale_Price': ' $4,200,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,486,300',
      'Land_Value': ' $2,286,900',
      'Total_Appraisal_Value': ' $3,773,200',
      'Assessed_Value': ' $1,509,280',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.42 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1982,
      'Square_Footage': ' 8,700',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1418,
      'long': -86.8139,
    },
    {
      'X': 48,
      'Map_.amp._Parcel': ' 104 06 0 247.00',
      'Location': ' 123 30TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 9 HENRY GEORGE SUB BCS &amp; CLOSED R.O.W.',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 09/27/2018',
      'Sale_Price': ' $5,800,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $0',
      'Land_Value': ' $762,300',
      'Total_Appraisal_Value': ' $762,300',
      'Assessed_Value': ' $304,920',
      'Property_Use': ' VACANT COMMERCIAL LAND',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.14 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1421,
      'long': -86.8136,
    },
    {
      'X': 49,
      'Map_.amp._Parcel': ' 104 06 0 248.00',
      'Location': ' 125 30TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 8 HENRY GEORGE SUB BCS &amp; CLOSED R.O.W.',
      'Assessment_Classification.': ' RES',
      'Sale_Date': ' 09/27/2018',
      'Sale_Price': ' $5,800,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $85,300',
      'Land_Value': ' $1,089,000',
      'Total_Appraisal_Value': ' $1,174,300',
      'Assessed_Value': ' $293,575',
      'Property_Use': ' SINGLE FAMILY',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.20 Acres',
      'Property_Type': ' SINGLE FAM',
      'Year_Built': 1938,
      'Square_Footage': ' 1,670',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' ONE STY',
      'Building_Condition': ' Fair',
      'Foundation_Type': ' PT BSMT',
      'Number_of_Rooms': 8,
      'Number_of_Beds': 4,
      'Number_of_Baths': 2,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 9,
      'lat': 36.1419,
      'long': -86.8135,
    },
    {
      'X': 50,
      'Map_.amp._Parcel': ' 104 07 0 134.00',
      'Location': ' 1405 25TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 1TH 7 BROWNS SUB BOYD COCKRILL SPRGS 68 LOT 3 SCRUGGS &amp; MORGAN COCKRILL SPRINGS &amp; CL ST &amp; AC TR',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 11/18/1954',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $430,000',
      'Land_Value': ' $202,281,800',
      'Total_Appraisal_Value': ' $202,711,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 37.15 Acres',
      'Property_Type': ' TENNIS',
      'Year_Built': 1976,
      'Square_Footage': ' 30,648',
      'Exterior_Wall': ' METAL',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1402,
      'long': -86.8085,
    },
    {
      'X': 51,
      'Map_.amp._Parcel': ' 104 07 0 485.00',
      'Location': ' 2141 BLAKEMORE AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LTS 24,25,26 SCRUGGS BURCH ORCHARD SUB &amp; ADDN. TRACT',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 04/15/1992',
      'Sale_Price': ' $2,598,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $3,996,600',
      'Land_Value': ' $7,013,200',
      'Total_Appraisal_Value': ' $11,009,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 1.61 Acres',
      'Property_Type': ' MED OFC',
      'Year_Built': 1975,
      'Square_Footage': ' 10,466',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1376,
      'long': -86.8041,
    },
    {
      'X': 52,
      'Map_.amp._Parcel': ' 104 07 0 503.00',
      'Location': ' 2140 BELCOURT AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LTS 11,12 SCRUGGS BURCH ORCHARD &amp; LTS 1,2 SCRUGGS RE. SUB.',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 05/22/1991',
      'Sale_Price': ' $650,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,799,800',
      'Land_Value': ' $7,143,800',
      'Total_Appraisal_Value': ' $8,943,600',
      'Assessed_Value': ' $0',
      'Property_Use': ' DAY CARE CENTER',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 1.64 Acres',
      'Property_Type': ' DAYCARE',
      'Year_Built': 1974,
      'Square_Footage': ' 6,892',
      'Exterior_Wall': ' STUCCO',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1371,
      'long': -86.8037,
    },
    {
      'X': 53,
      'Map_.amp._Parcel': ' 104 07 0 530.00',
      'Location': ' 1404 25TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' EAST SIDE 25TH AVENUE SOUTH NORTH OF BLAKEMORE AVENUE AND PART OF CLOSED STREET',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 04/11/1967',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $44,162,100',
      'Land_Value': ' $87,670,600',
      'Total_Appraisal_Value': ' $131,832,700',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING GARAGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 16.18 Acres',
      'Property_Type': " PARK'G GAR",
      'Year_Built': 2002,
      'Square_Footage': ' 1,306,690',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 11 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1402,
      'long': -86.806,
    },
    {
      'X': 54,
      'Map_.amp._Parcel': ' 104 08 0 064.00',
      'Location': ' 1501 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 1&amp;2 WADDEY RESUB. OF SANFORD &amp; TAYLOR OF LOTS 42 TO 49',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 10/10/2008',
      'Sale_Price': ' $3,000,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $37,700',
      'Land_Value': ' $2,751,300',
      'Total_Appraisal_Value': ' $2,789,000',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 0.50 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1394,
      'long': -86.8009,
    },
    {
      'X': 55,
      'Map_.amp._Parcel': ' 104 08 0 250.00',
      'Location': ' 1400 18TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 C/O S SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 1 RESUB LOT 1 B M G MUSIC COMPLEX &amp; PT OF CL ROW',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/02/2014',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $13,667,200',
      'Land_Value': ' $8,499,500',
      'Total_Appraisal_Value': ' $22,166,700',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (3 OR MORE STORIES)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 2.71 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1916,
      'Square_Footage': ' 86,941',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 4 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1406,
      'long': -86.7955,
    },
    {
      'X': 56,
      'Map_.amp._Parcel': ' 104 08 0 254.00',
      'Location': ' 1500 18TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT D &amp; PT LOT E READY SUB 46 HAYES ROKEBY',
      'Assessment_Classification.': ' RES',
      'Sale_Date': ' 01/28/2016',
      'Sale_Price': ' $1,700,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $0',
      'Land_Value': ' $1,320,000',
      'Total_Appraisal_Value': ' $1,320,000',
      'Assessed_Value': ' $330,000',
      'Property_Use': ' VACANT RESIDENTIAL LAND',
      'Zone': 2,
      'Neighborhood': 2227,
      'Land_Area': ' 0.29 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1395,
      'long': -86.7962,
    },
    {
      'X': 57,
      'Map_.amp._Parcel': ' 104 08 0 285.00',
      'Location': ' 1503 17TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' PAR 285 O.B.HAYES ROKEBY PLAN RESUB PT LOT 46',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 03/31/2016',
      'Sale_Price': ' $810,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $289,900',
      'Land_Value': ' $881,600',
      'Total_Appraisal_Value': ' $1,171,500',
      'Assessed_Value': ' $468,600',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.21 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1910,
      'Square_Footage': ' 2,150',
      'Exterior_Wall': ' BRICK/FRAME',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1394,
      'long': -86.7955,
    },
    {
      'X': 58,
      'Map_.amp._Parcel': ' 104 08 0 287.00',
      'Location': ' 1415 17TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATT S. SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 2 BMG MUSIC COMPLEX &amp; PT OF CLOSED ROW',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 12/31/2014',
      'Sale_Price': ' $1,900,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,145,500',
      'Land_Value': ' $2,038,600',
      'Total_Appraisal_Value': ' $3,184,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' NURSING HOME',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.65 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1995,
      'Square_Footage': ' 7,749',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1398,
      'long': -86.7954,
    },
    {
      'X': 59,
      'Map_.amp._Parcel': ' 104 08 0 410.00',
      'Location': ' 2201 CHILDRENS WAY, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  9001 LIBERTY PKWY, BIRMINGHAM, AL 35242',
      'Legal_Description':
        ' S/S CAPERS AV E/S 23RD AV S PT L 8-15&amp;22 SANFORD SUB TAYLOR',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 08/31/1966',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $14,755,900',
      'Land_Value': ' $21,453,300',
      'Total_Appraisal_Value': ' $36,209,200',
      'Assessed_Value': ' $14,483,680',
      'Property_Use': ' HOSPITAL OR CLINIC',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 3.94 Acres',
      'Property_Type': ' HOSPITAL',
      'Year_Built': 1993,
      'Square_Footage': ' 106,648',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 3 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1383,
      'long': -86.8023,
    },
    {
      'X': 60,
      'Map_.amp._Parcel': ' 104 08 0 084.00',
      'Location': ' 1601 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' PT LOT 6 WADDEYS RESUB SANFORD &amp; TAYLOR 16-19',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 04/17/2018',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,968,300',
      'Land_Value': ' $630,600',
      'Total_Appraisal_Value': ' $2,598,900',
      'Assessed_Value': ' $1,039,560',
      'Property_Use': ' RESTURANT/CAFETERIA',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 0.11 Acres',
      'Property_Type': ' REST/BAR',
      'Year_Built': 1953,
      'Square_Footage': ' 6,992',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1385,
      'long': -86.8009,
    },
    {
      'X': 61,
      'Map_.amp._Parcel': ' 104 08 0 415.00',
      'Location': ' 100 VILLAGE AT VANDERBILT, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 2 VILLAGES AT VANDERBILT',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/23/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $24,870,100',
      'Land_Value': ' $6,545,000',
      'Total_Appraisal_Value': ' $31,415,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' APARTMENT: LOW RISE (BUILT SINCE 1960)',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 5.48 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1989,
      'Square_Footage': ' 1,720',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1392,
      'long': -86.7994,
    },
    {
      'X': 62,
      'Map_.amp._Parcel': ' 104 10 0 229.00',
      'Location': ' 528 CHESTERFIELD AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 1 WESTMORELAND PLACE RE-SUB LOT 1',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 12/18/1986',
      'Sale_Price': ' $250,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $3,888,800',
      'Land_Value': ' $466,100',
      'Total_Appraisal_Value': ' $4,354,900',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2426,
      'Land_Area': ' 1.07 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1939,
      'Square_Footage': ' 32,633',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Fair',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1309,
      'long': -86.8159,
    },
    {
      'X': 63,
      'Map_.amp._Parcel': ' 105 06 0 215.00',
      'Location': ' 1204 FORT NEGLEY BLVD, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 1 EDGEHILL EST. SEC. 27                                   000X000',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 10/25/1988',
      'Sale_Price': ' $1,975,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $465,700',
      'Land_Value': ' $648,600',
      'Total_Appraisal_Value': ' $1,114,300',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 1,
      'Neighborhood': 3108,
      'Land_Area': ' 5.64 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1419,
      'long': -86.7747,
    },
    {
      'X': 64,
      'Map_.amp._Parcel': ' 105 06 0 249.00',
      'Location': ' 625 CHESTNUT ST, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' S SIDE CHESTNUT ST E OF BERTHA ST',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 10/25/1988',
      'Sale_Price': ' $1,975,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $10,058,300',
      'Land_Value': ' $692,300',
      'Total_Appraisal_Value': ' $10,750,600',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 1,
      'Neighborhood': 3108,
      'Land_Area': ' 6.02 Acres',
      'Property_Type': ' WAREHOUSE',
      'Year_Built': 1965,
      'Square_Footage': ' 81,217',
      'Exterior_Wall': ' CONC BLK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1412,
      'long': -86.7738,
    },
    {
      'X': 65,
      'Map_.amp._Parcel': ' 104 03 0 259.00',
      'Location': ' 2555 WEST END AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 2 VANDERBILT UNIVERSITY CONSOLIDATION PLAT RESUB LT 2',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 06/23/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $42,291,500',
      'Land_Value': ' $15,790,500',
      'Total_Appraisal_Value': ' $58,082,000',
      'Assessed_Value': ' $23,232,800',
      'Property_Use': ' HOTEL/MOTEL',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 1.45 Acres',
      'Property_Type': ' HOTEL FS',
      'Year_Built': 2001,
      'Square_Footage': ' 214,965',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 11 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1453,
      'long': -86.8092,
    },
    {
      'X': 66,
      'Map_.amp._Parcel': ' 104 08 0 422.00',
      'Location': ' 1406 18TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AVE STE 750 ATTN: S. SCALL, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 3 RESUB LOT 1 B M G MUSIC COMPLEX',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 02/23/2018',
      'Sale_Price': ' $2,160,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $951,700',
      'Land_Value': ' $1,012,500',
      'Total_Appraisal_Value': ' $1,964,200',
      'Assessed_Value': ' $0',
      'Property_Use': ' TRIPLEX',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.26 Acres',
      'Property_Type': ' RESD TRIPLEX',
      'Year_Built': 1948,
      'Square_Footage': ' 3,106',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' TWO STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' CRAWL',
      'Number_of_Rooms': 11,
      'Number_of_Beds': 4,
      'Number_of_Baths': 4,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 18,
      'lat': 36.1399,
      'long': -86.7961,
    },
    {
      'X': 67,
      'Map_.amp._Parcel': ' 104 03 0 260.00',
      'Location': ' 2545 WEST END AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LT 3 VANDERBILT UNIVER.CONSOLIDATION PLAT RESUB LTS 1 &amp; 2',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 06/23/2015',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $55,700',
      'Land_Value': ' $6,534,000',
      'Total_Appraisal_Value': ' $6,589,700',
      'Assessed_Value': ' $2,635,880',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.60 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1457,
      'long': -86.8096,
    },
    {
      'X': 68,
      'Map_.amp._Parcel': ' 104 04 0 001.00 001',
      'Location': ' 2415 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LEASEHOLD FOR VANDERBILT UNIVERSITY',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 12/31/2012',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $18,009,500',
      'Land_Value': ' $0',
      'Total_Appraisal_Value': ' $18,009,500',
      'Assessed_Value': ' $7,203,800',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 0.00 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1462,
      'long': -86.8063,
    },
    {
      'X': 69,
      'Map_.amp._Parcel': ' 104 02 0 575.00',
      'Location': ' 0 30TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 10 HENRY GEORGE &amp; CLOSED R.O.W.',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 09/27/2018',
      'Sale_Price': ' $5,800,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $0',
      'Land_Value': ' $816,800',
      'Total_Appraisal_Value': ' $816,800',
      'Assessed_Value': ' $326,720',
      'Property_Use': ' VACANT COMMERCIAL LAND',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.15 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1297,
      'long': -86.8155,
    },
    {
      'X': 70,
      'Map_.amp._Parcel': ' 104 04 0 242.00',
      'Location': ' 2215 GARLAND AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  , ,',
      'Legal_Description': ' N E CORNER OF PIERCE AVE &amp; 24TH AVE S',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 05/11/1977',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $2,581,300',
      'Land_Value': ' $816,800',
      'Total_Appraisal_Value': ' $3,398,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 0.15 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1979,
      'Square_Footage': ' 17,248',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1421,
      'long': -86.8024,
    },
    {
      'X': 71,
      'Map_.amp._Parcel': ' 104 03 0 531.00',
      'Location': ' 0 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 2 2406 VANDERBILT PLACE MINOR SUB',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 03/27/2019',
      'Sale_Price': ' $2,300,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $5,900',
      'Land_Value': ' $1,633,500',
      'Total_Appraisal_Value': ' $1,639,400',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 0.15 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1421,
      'long': -86.8127,
    },
    {
      'X': 72,
      'Map_.amp._Parcel': ' 104 08 0A 001.00',
      'Location': ' 2120 BELCOURT AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY (THE)',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' UNITS 1&amp;2  B&amp;A CONDOMINIUM',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 05/21/1993',
      'Sale_Price': ' $600,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,097,500',
      'Land_Value': ' $1,675,600',
      'Total_Appraisal_Value': ' $2,773,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' CONDOMINIUM OFC  OR OTHER COM CONDO',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 0.00 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1974,
      'Square_Footage': ' 9,200',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.137,
      'long': -86.8024,
    },
    {
      'X': 73,
      'Map_.amp._Parcel': ' 104 08 0 119.00',
      'Location': ' 1210 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY (THE)',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 1 FREEDOM FORUM VANDERBILT UNIVERSITY &amp; ADJACENT TRACTS',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/01/1979',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $968,800',
      'Land_Value': ' $196,625,100',
      'Total_Appraisal_Value': ' $197,593,900',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 36.19 Acres',
      'Property_Type': ' DAYCARE',
      'Year_Built': 1962,
      'Square_Footage': ' 5,397',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1411,
      'long': -86.8002,
    },
    {
      'X': 74,
      'Map_.amp._Parcel': ' 104 04 0 191.00',
      'Location': ' 1200 18TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY (THE)',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 22 HAYES ROKEBY PLAN,  LTS 1-5 RESUB LOT 34 HAYES ROKEBY, LTS 6-12 EASTMAN SUB',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/01/1979',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $349,100',
      'Land_Value': ' $18,184,400',
      'Total_Appraisal_Value': ' $18,533,500',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 3.19 Acres',
      'Property_Type': ' SINGLE FAM',
      'Year_Built': 1925,
      'Square_Footage': ' 1,395',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' ONE STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' FULL BSMT',
      'Number_of_Rooms': 5,
      'Number_of_Beds': 2,
      'Number_of_Baths': 1,
      'Number_of_Half_Bath': 1,
      'Number_of_Fixtures': 8,
      'lat': 36.1423,
      'long': -86.7956,
    },
    {
      'X': 75,
      'Map_.amp._Parcel': ' 104 04 0 047.00',
      'Location': ' 1111 18TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY (THE)',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 1,2, 3 &amp; PT 4 J H B RESUB HAYES PLAN &amp; LOT 2 OF LOT 18 HAYES PLAN',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/01/1979',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $582,100',
      'Land_Value': ' $6,090,000',
      'Total_Appraisal_Value': ' $6,672,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 1.19 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1899,
      'Square_Footage': ' 3,648',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 3 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1441,
      'long': -86.7961,
    },
    {
      'X': 76,
      'Map_.amp._Parcel': ' 104 04 0 102.00',
      'Location': ' 1108 18TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY (THE)',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 1,2 &amp; 3 BROWN SUB ROKEBY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 07/01/1979',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $41,600',
      'Land_Value': ' $3,352,500',
      'Total_Appraisal_Value': ' $3,394,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.51 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1439,
      'long': -86.7953,
    },
    {
      'X': 77,
      'Map_.amp._Parcel': ' 104 04 0 001.00',
      'Location': ' 2415 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY (THE)',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS IN MURRAY SUB, DIXIE PL SUB, PLUMR SUB, VUMC SUB AND ELISTON SUB &amp;PT CL AL',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/31/1985',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $208,168,900',
      'Land_Value': ' $718,304,400',
      'Total_Appraisal_Value': ' $926,473,300',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 131.92 Acres',
      'Property_Type': " PARK'G GAR",
      'Year_Built': 1990,
      'Square_Footage': ' 1,167,398',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 8 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1462,
      'long': -86.8063,
    },
    {
      'X': 78,
      'Map_.amp._Parcel': ' 104 04 0 010.00',
      'Location': ' 1215 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY (THE)',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' PT 8-15 PLM L1-6-25 PT 7-23V&amp;M L29 PT1-28-30 DIX.PL PT CL ST',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/31/1985',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $98,508,700',
      'Land_Value': ' $42,041,600',
      'Total_Appraisal_Value': ' $140,550,300',
      'Assessed_Value': ' $0',
      'Property_Use': ' HOSPITAL OR CLINIC',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 7.80 Acres',
      'Property_Type': " PARK'G GAR",
      'Year_Built': 1977,
      'Square_Footage': ' 521,256',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 3 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1419,
      'long': -86.801,
    },
    {
      'X': 79,
      'Map_.amp._Parcel': ' 104 03 0 071.00',
      'Location': ' 2600 JESS NEELY DR, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY DUDLEY F',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' E/S NATCHEZ TRACE S OF WEST END AV-PT CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 08/02/1960',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $0',
      'Land_Value': ' $138,030,800',
      'Total_Appraisal_Value': ' $138,030,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' RECREATIONAL',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 16.90 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1429,
      'long': -86.8077,
    },
    {
      'X': 80,
      'Map_.amp._Parcel': ' 103 06 0 157.00',
      'Location': ' 5701 KNOB RD, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY MEDICAL',
      'Mailing_Address': '  3319 WEST END AVE STE 200, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 67 RE-SUB LTS 67 &amp; 68 HILLWOOD PARK',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 10/03/2018',
      'Sale_Price': ' $1,100,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,099,800',
      'Land_Value': ' $160,000',
      'Total_Appraisal_Value': ' $1,259,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' DAY CARE CENTER',
      'Zone': 2,
      'Neighborhood': 4427,
      'Land_Area': ' 1.00 Acres',
      'Property_Type': ' DAYCARE',
      'Year_Built': 1962,
      'Square_Footage': ' 9,176',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1379,
      'long': -86.8623,
    },
    {
      'X': 81,
      'Map_.amp._Parcel': ' 104 04 0 001.00 002',
      'Location': ' 0 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY MEDICAL',
      'Mailing_Address': '  3319 WEST END AVE, STE. 700, NASHVILLE, TN 37203',
      'Legal_Description': ' LEASEHOLD FOR VANDERBILT MEDICAL CENTER',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 11/22/2016',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $16,060,500',
      'Land_Value': ' $0',
      'Total_Appraisal_Value': ' $16,060,500',
      'Assessed_Value': ' $6,424,200',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 0.00 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1421,
      'long': -86.8127,
    },
    {
      'X': 82,
      'Map_.amp._Parcel': ' 159 00 0 071.00',
      'Location': ' 1000 OMAN DR, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' S SIDE OMAN DR E OF GRANNY WHITE PK',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 10/15/1951',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $821,200',
      'Land_Value': ' $835,000',
      'Total_Appraisal_Value': ' $1,656,200',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 6528,
      'Land_Area': ' 9.00 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1970,
      'Square_Footage': ' 4,224',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.0525,
      'long': -86.8048,
    },
    {
      'X': 83,
      'Map_.amp._Parcel': ' 104 08 0 414.00',
      'Location': ' 1500 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 1 VILLAGES AT VANDERBILT',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/13/2005',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $24,785,700',
      'Land_Value': ' $10,890,000',
      'Total_Appraisal_Value': ' $35,675,700',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 2.00 Acres',
      'Property_Type': " PARK'G GAR",
      'Year_Built': 1989,
      'Square_Footage': ' 153,124',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 3 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1394,
      'long': -86.8001,
    },
    {
      'X': 84,
      'Map_.amp._Parcel': ' 104 08 0 066.00',
      'Location': ' 1505 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' PT LOT 3 WADDEY RESUB OF SANFORD &amp; TAYLOR LOTS 42 TO 49',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/11/1999',
      'Sale_Price': ' $261,179',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $19,600',
      'Land_Value': ' $1,234,100',
      'Total_Appraisal_Value': ' $1,253,700',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 0.22 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1392,
      'long': -86.8009,
    },
    {
      'X': 85,
      'Map_.amp._Parcel': ' 104 08 0 067.00',
      'Location': ' 1507 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address': '  2424 RIDGE ROAD C/O KE ANDREWS, ROCKWALL, TX 75087',
      'Legal_Description':
        ' LOT 4 &amp; PT OF LOTS 3 &amp; 5  WADDEY RESUB OF SANFORD &amp; TAYLOR LOTS 42 TO 49',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 12/12/2008',
      'Sale_Price': ' $2,515,590',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,000',
      'Land_Value': ' $2,985,600',
      'Total_Appraisal_Value': ' $2,986,600',
      'Assessed_Value': ' $1,194,640',
      'Property_Use': ' CONVENIENCE MARKET WITH GAS',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 0.55 Acres',
      'Property_Type': ' MARKET',
      'Year_Built': 1981,
      'Square_Footage': ' 2,760',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1389,
      'long': -86.8009,
    },
    {
      'X': 86,
      'Map_.amp._Parcel': ' 104 07 0 535.00',
      'Location': ' 1525 NATCHEZ TRCE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' NATCHEZ TRIANGLE SOUTH &amp; LOT 4 PT LT 3 BARGATZE SUB &amp;  AC TR',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/20/2003',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $1,486,900',
      'Land_Value': ' $132,966,900',
      'Total_Appraisal_Value': ' $134,453,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 24.42 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1409,
      'long': -86.8119,
    },
    {
      'X': 87,
      'Map_.amp._Parcel': ' 104 03 0 028.00',
      'Location': ' 105 28TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' PT LOT 54 BOYD COCKRILL SPRINGS TRT &amp; PT ALLEY CL',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 10/10/2002',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $21,800',
      'Land_Value': ' $4,138,000',
      'Total_Appraisal_Value': ' $4,159,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.38 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1443,
      'long': -86.8121,
    },
    {
      'X': 88,
      'Map_.amp._Parcel': ' 104 03 0 045.00',
      'Location': ' 111 28TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOTS 15-16-17 SHIELDS SUB 153 0F B C S TRT &amp; PT ALLEY CL',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/30/1998',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $990,300',
      'Land_Value': ' $4,791,500',
      'Total_Appraisal_Value': ' $5,781,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.44 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1980,
      'Square_Footage': ' 9,888',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1445,
      'long': -86.8116,
    },
    {
      'X': 89,
      'Map_.amp._Parcel': ' 104 03 0 021.00',
      'Location': ' 120 29TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address': '  2100 WEST END AVE SUITE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 14 WILLIAMS SUB 55 OF B C S',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 07/19/2016',
      'Sale_Price': ' $1,650,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $129,700',
      'Land_Value': ' $843,800',
      'Total_Appraisal_Value': ' $973,500',
      'Assessed_Value': ' $389,400',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 2111,
      'Land_Area': ' 0.16 Acres',
      'Property_Type': ' SINGLE FAM',
      'Year_Built': 1923,
      'Square_Footage': ' 2,641',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1.75 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' PT BSMT',
      'Number_of_Rooms': 10,
      'Number_of_Beds': 0,
      'Number_of_Baths': 2,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 5,
      'lat': 36.1429,
      'long': -86.8124,
    },
    {
      'X': 90,
      'Map_.amp._Parcel': ' 104 03 0 241.00',
      'Location': ' 2300 VANDERBILT PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address': '  2201 WEST END AV, NASHVILLE, TN 37203',
      'Legal_Description': ' E OF TWENTY-FOURTH AVENUE S N OF GARLAND AVE.',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 03/16/2010',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $6,630,900',
      'Land_Value': ' $17,110,300',
      'Total_Appraisal_Value': ' $23,741,200',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 2.32 Acres',
      'Property_Type': ' RETAIL/SHPG',
      'Year_Built': 1965,
      'Square_Footage': ' 85,274',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 1 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1464,
      'long': -86.8034,
    },
    {
      'X': 91,
      'Map_.amp._Parcel': ' 092 16 0 141.00',
      'Location': ' 120 20TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address': '  2100 WEST END AVE STE 750, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 1 VANDERBILT GRADUATE HOUSING RESUB',
      'Assessment_Classification.': ' COM',
      'Sale_Date': ' 12/19/2016',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $10,231,000',
      'Land_Value': ' $23,767,300',
      'Total_Appraisal_Value': ' $33,998,300',
      'Assessed_Value': ' $13,599,320',
      'Property_Use': ' APARTMENT: HIGH RISE (3 STORIES OR GREATER)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 1.94 Acres',
      'Property_Type': ' HR APT',
      'Year_Built': 2022,
      'Square_Footage': ' 352,056',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 12 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'lat': 36.1504,
      'long': -86.7983,
    },
    {
      'X': 92,
      'Map_.amp._Parcel': ' 092 16 0 068.00',
      'Location': ' 122 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SEALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 46 JOHN H WILLIAMS &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/02/2008',
      'Sale_Price': ' $1,644,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $15,900',
      'Land_Value': ' $1,862,100',
      'Total_Appraisal_Value': ' $1,878,000',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.19 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1489,
      'long': -86.7997,
    },
    {
      'X': 93,
      'Map_.amp._Parcel': ' 092 16 0 069.00',
      'Location': ' 124 21ST AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SEALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOT 47 JOHN H WILLIAMS &amp; PT OF CL ALLEY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 01/02/2008',
      'Sale_Price': ' $1,644,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $52,600',
      'Land_Value': ' $1,862,100',
      'Total_Appraisal_Value': ' $1,914,700',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING LOT',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.19 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1488,
      'long': -86.7996,
    },
    {
      'X': 94,
      'Map_.amp._Parcel': ' 092 16 0 046.00',
      'Location': ' 2010 TERRACE PL, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 16 THRU 21 JOHN H. WILLIAMS',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 05/06/1997',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $9,578,300',
      'Land_Value': ' $9,715,000',
      'Total_Appraisal_Value': ' $19,293,300',
      'Assessed_Value': ' $0',
      'Property_Use': ' PARKING GARAGE',
      'Zone': 2,
      'Neighborhood': 911,
      'Land_Area': ' 1.07 Acres',
      'Property_Type': " PARK'G GAR",
      'Year_Built': 1997,
      'Square_Footage': ' 298,528',
      'Exterior_Wall': ' PRECAST CONC',
      'Story_Height': ' 8 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1502,
      'long': -86.7998,
    },
    {
      'X': 95,
      'Map_.amp._Parcel': ' 104 04 0 044.00',
      'Location': ' 1114 19TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LT 11 PT 10 HAMILTON SUB ROKEBY LT 19 O B HAYES SUB ROKEBY',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 03/23/2007',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $2,548,000',
      'Land_Value': ' $10,663,400',
      'Total_Appraisal_Value': ' $13,211,400',
      'Assessed_Value': ' $0',
      'Property_Use': ' HOSPITAL OR CLINIC',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 2.04 Acres',
      'Property_Type': ' MED OFC',
      'Year_Built': 1956,
      'Square_Footage': ' 27,624',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1442,
      'long': -86.7971,
    },
    {
      'X': 96,
      'Map_.amp._Parcel': ' 104 04 0 159.00',
      'Location': ' 1025 16TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description': ' LOTS 1-2-3-4-PT 5 BROWN SUB HAYS',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 05/23/2008',
      'Sale_Price': ' $6,100,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $5,386,300',
      'Land_Value': ' $4,704,800',
      'Total_Appraisal_Value': ' $10,091,100',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (3 OR MORE STORIES)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 0.70 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1987,
      'Square_Footage': ' 39,151',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 4 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1449,
      'long': -86.7932,
    },
    {
      'X': 97,
      'Map_.amp._Parcel': ' 104 04 0 205.00',
      'Location': ' 1207 17TH AVE S, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' L 1TH6 HARDIMAN SUB PT 21&amp;33 HAYES ROKEBY-L 1PT2 EASTMAN H.R',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 12/29/1993',
      'Sale_Price': ' $2,600,000',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $6,041,000',
      'Land_Value': ' $4,027,500',
      'Total_Appraisal_Value': ' $10,068,500',
      'Assessed_Value': ' $0',
      'Property_Use': ' OFFICE BLDG (ONE OR TWO STORIES)',
      'Zone': 2,
      'Neighborhood': 1011,
      'Land_Area': ' 1.28 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1984,
      'Square_Footage': ' 36,606',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 3 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1428,
      'long': -86.7949,
    },
    {
      'X': 98,
      'Map_.amp._Parcel': ' 104 04 0 237.00',
      'Location': ' 1225 STEVENSON CENTER LN, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address': '  2201 WEST END AV, NASHVILLE, TN 37203',
      'Legal_Description': ' W OF 21ST AVENUE SOUTH N OF GARLAND AVENUE',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 03/16/2010',
      'Sale_Price': ' $0',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $0',
      'Land_Value': ' $10,127,800',
      'Total_Appraisal_Value': ' $10,127,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2112,
      'Land_Area': ' 1.86 Acres',
      'Property_Type': '',
      'Square_Footage': ' 0',
      'Exterior_Wall': '',
      'Story_Height': '',
      'Building_Condition': '',
      'Foundation_Type': '',
      'lat': 36.1441,
      'long': -86.8025,
    },
    {
      'X': 99,
      'Map_.amp._Parcel': ' 104 07 0 514.00',
      'Location': ' 2149   BELCOURT AVE, Nashville, TN',
      'Current_Owner': ' VANDERBILT UNIVERSITY, THE',
      'Mailing_Address':
        '  2100 WEST END AV STE 750 C/O SEAN SCALLY, NASHVILLE, TN 37203',
      'Legal_Description':
        ' LOT 10 PT. LOT 9 SCRUGGS SUB. BURCH ORCH.                     100X138',
      'Assessment_Classification.': ' EXE',
      'Sale_Date': ' 06/26/1991',
      'Sale_Price': ' $382,500',
      'Assessment_Year': 2022,
      'Last_Reappraisal_Year': 2021,
      'Improvement_Value': ' $405,800',
      'Land_Value': ' $1,380,000',
      'Total_Appraisal_Value': ' $1,785,800',
      'Assessed_Value': ' $0',
      'Property_Use': ' SCHOOL OR COLLEGE',
      'Zone': 2,
      'Neighborhood': 2211,
      'Land_Area': ' 0.30 Acres',
      'Property_Type': ' OFFICE',
      'Year_Built': 1975,
      'Square_Footage': ' 3,302',
      'Exterior_Wall': ' BRICK',
      'Story_Height': ' 2 STY',
      'Building_Condition': ' Average',
      'Foundation_Type': ' TYPICAL',
      'Number_of_Rooms': 0,
      'Number_of_Beds': 0,
      'Number_of_Baths': 0,
      'Number_of_Half_Bath': 0,
      'Number_of_Fixtures': 0,
      'lat': 36.1367,
      'long': -86.805,
    },
  ].forEach((i) => {
    t.circleMarker([i.lat, i.long]).addTo(e).bindTooltip(i.Property_Use);
  });
//# sourceMappingURL=app.e647ebb6.js.map
