
String.prototype.toIntArray = function () {
  var w1,
      w2,
      u,
      r4 = [],
      r = [],
      i = 0;
  var s = this + '\0\0\0';
  var l = s.length - 1;

  while (i < l) {
    w1 = s.charCodeAt(i++);
    w2 = s.charCodeAt(i + 1);
    if (w1 < 0x0080) {
      r4.push(w1);
    } else if (w1 < 0x0800) {
      r4.push(w1 >>> 6 & 0x1f | 0xc0);
      r4.push(w1 >>> 0 & 0x3f | 0x80);
    } else if ((w1 & 0xf800) != 0xd800) {
      r4.push(w1 >>> 12 & 0x0f | 0xe0);
      r4.push(w1 >>> 6 & 0x3f | 0x80);
      r4.push(w1 >>> 0 & 0x3f | 0x80);
    } else if ((w1 & 0xfc00) == 0xd800 && (w2 & 0xfc00) == 0xdc00) {
      u = (w2 & 0x3f | (w1 & 0x3f) << 10) + 0x10000;
      r4.push(u >>> 18 & 0x07 | 0xf0);
      r4.push(u >>> 12 & 0x3f | 0x80);
      r4.push(u >>> 6 & 0x3f | 0x80);
      r4.push(u >>> 0 & 0x3f | 0x80);
      i++;
    } else {}

    if (r4.length > 3) {
      r.push(r4.shift() << 0 | r4.shift() << 8 | r4.shift() << 16 | r4.shift() << 24);
    }
  }

  return r;
};

var isaac = function () {
  var m = Array(256),
      acc = 0,
      brs = 0,
      cnt = 0,
      r = Array(256),
      gnt = 0;

  seed(Math.random() * 0xffffffff);

  function add(x, y) {
    var lsb = (x & 0xffff) + (y & 0xffff);
    var msb = (x >>> 16) + (y >>> 16) + (lsb >>> 16);
    return msb << 16 | lsb & 0xffff;
  }

  function reset() {
    acc = brs = cnt = 0;
    for (var i = 0; i < 256; ++i) m[i] = r[i] = 0;
    gnt = 0;
  }

  function seed(s) {
    var a, b, c, d, e, f, g, h, i;

    a = b = c = d = e = f = g = h = 0x9e3779b9;

    if (s && typeof s === 'string') s = s.toIntArray();

    if (s && typeof s === 'number') {
      s = [s];
    }

    if (s instanceof Array) {
      reset();
      for (i = 0; i < s.length; i++) r[i & 0xff] += typeof s[i] === 'number' ? s[i] : 0;
    }

    function seed_mix() {
      a ^= b << 11;d = add(d, a);b = add(b, c);
      b ^= c >>> 2;e = add(e, b);c = add(c, d);
      c ^= d << 8;f = add(f, c);d = add(d, e);
      d ^= e >>> 16;g = add(g, d);e = add(e, f);
      e ^= f << 10;h = add(h, e);f = add(f, g);
      f ^= g >>> 4;a = add(a, f);g = add(g, h);
      g ^= h << 8;b = add(b, g);h = add(h, a);
      h ^= a >>> 9;c = add(c, h);a = add(a, b);
    }

    for (i = 0; i < 4; i++) seed_mix();

    for (i = 0; i < 256; i += 8) {
      if (s) {
        a = add(a, r[i + 0]);b = add(b, r[i + 1]);
        c = add(c, r[i + 2]);d = add(d, r[i + 3]);
        e = add(e, r[i + 4]);f = add(f, r[i + 5]);
        g = add(g, r[i + 6]);h = add(h, r[i + 7]);
      }
      seed_mix();

      m[i + 0] = a;m[i + 1] = b;m[i + 2] = c;m[i + 3] = d;
      m[i + 4] = e;m[i + 5] = f;m[i + 6] = g;m[i + 7] = h;
    }
    if (s) {
      for (i = 0; i < 256; i += 8) {
        a = add(a, m[i + 0]);b = add(b, m[i + 1]);
        c = add(c, m[i + 2]);d = add(d, m[i + 3]);
        e = add(e, m[i + 4]);f = add(f, m[i + 5]);
        g = add(g, m[i + 6]);h = add(h, m[i + 7]);
        seed_mix();

        m[i + 0] = a;m[i + 1] = b;m[i + 2] = c;m[i + 3] = d;
        m[i + 4] = e;m[i + 5] = f;m[i + 6] = g;m[i + 7] = h;
      }
    }

    prng();
    gnt = 256;;
  }

  function prng(n) {
    var i, x, y;

    n = n && typeof n === 'number' ? Math.abs(Math.floor(n)) : 1;

    while (n--) {
      cnt = add(cnt, 1);
      brs = add(brs, cnt);

      for (i = 0; i < 256; i++) {
        switch (i & 3) {
          case 0:
            acc ^= acc << 13;break;
          case 1:
            acc ^= acc >>> 6;break;
          case 2:
            acc ^= acc << 2;break;
          case 3:
            acc ^= acc >>> 16;break;
        }
        acc = add(m[i + 128 & 0xff], acc);x = m[i];
        m[i] = y = add(m[x >>> 2 & 0xff], add(acc, brs));
        r[i] = brs = add(m[y >>> 10 & 0xff], x);
      }
    }
  }

  function rand() {
    if (!gnt--) {
      prng();gnt = 255;
    }
    return r[gnt];
  }

  function internals() {
    return { a: acc, b: brs, c: cnt, m: m, r: r };
  }

  function random() {
    return 0.5 + this.rand() * 2.3283064365386963e-10;
  }

  return {
    'reset': reset,
    'seed': seed,
    'prng': prng,
    'rand': rand,
    'random': random,
    'internals': internals
  };
}();

module.exports = isaac;