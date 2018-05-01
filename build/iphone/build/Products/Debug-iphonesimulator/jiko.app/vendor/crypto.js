

var SecureRandom = function () {
   var Arcfour = function () {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
   };

   Arcfour.prototype.init = function (key) {
      var i, j, t;
      for (i = 0; i < 256; ++i) this.S[i] = i;
      j = 0;
      for (i = 0; i < 256; ++i) {
         j = j + this.S[i] + key[i % key.length] & 255;
         t = this.S[i];
         this.S[i] = this.S[j];
         this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
   };

   Arcfour.prototype.next = function () {
      var t;
      this.i = this.i + 1 & 255;
      this.j = this.j + this.S[this.i] & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[t + this.S[this.i] & 255];
   };

   Arcfour.create = function () {
      return new Arcfour();
   };

   Arcfour.rng_psize = 256;

   var rng_state = null;
   var rng_pool = [];
   var rng_pptr = 0;

   var rng_seed_int = function (x) {
      rng_pool[rng_pptr] ^= x & 255;
      rng_pptr++;
      rng_pool[rng_pptr] ^= x >> 8 & 255;
      rng_pptr++;
      rng_pool[rng_pptr] ^= x >> 16 & 255;
      rng_pptr++;
      rng_pool[rng_pptr] ^= x >> 24 & 255;
      rng_pptr++;

      if (rng_pptr >= Arcfour.rng_psize) rng_pptr -= Arcfour.rng_psize;
   };

   var rng_seed_time = function () {
      rng_seed_int(new Date().getTime());
   };

   var pool_init = function () {
      var t;

      while (rng_pptr < Arcfour.rng_psize) {
         t = Math.floor(65536 * Math.random());
         rng_pool[rng_pptr++] = t >>> 8;
         rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
   };

   var rng_get_byte = function (seed) {
      if (rng_state == null) {
         rng_seed_int(seed + globals.Accelerometer);
         rng_state = Arcfour.create();
         rng_state.init(rng_pool);
         for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) rng_pool[rng_pptr] = 0;
         rng_pptr = 0;
      }
      return rng_state.next();
   };

   var SecureRandom = function () {};
   SecureRandom.prototype.nextBytes = function (ba, seed) {
      for (var i = 0; i < ba.length; ++i) {
         ba[i] = rng_get_byte(seed);
      }
   };

   pool_init();

   return SecureRandom;
}();

function randomBytes(size, seed) {
   var random = new SecureRandom();
   var buf = new Array(size);
   random.nextBytes(buf, seed);

   buf.readUInt32BE = function (offset) {
      return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
   };

   return buf;
}
exports.randomBytes = randomBytes;