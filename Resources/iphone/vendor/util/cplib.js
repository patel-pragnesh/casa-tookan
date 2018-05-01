(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.cplib = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
  }({ 1: [function (require, module, exports) {
      var rpc = require('node-json-rpc');

      var RpcClient = require('./rpc');

      module.exports = {
        Backend: RpcClient
      };
    }, { "./rpc": 2, "node-json-rpc": 54 }], 2: [function (require, module, exports) {
      var rpc = require('../../rpc');

      var RpcClient = rpc.createRpcClient();

      RpcClient.prototype.create_send = function (source, destination, asset, quantity, options) {
        var params = {
          source: source,
          destination: destination,
          asset: asset,
          quantity: quantity
        };

        for (var k in options) {
          params[k] = options[k];
        }

        return this.call('create_send', params).then(function (result) {
          return result.result;
        });
      };

      RpcClient.prototype.get_balances = function (addresses) {
        if (typeof addresses === "string") {
          addresses = [addresses];
        }

        return this.call('get_balances', { filters: [{ field: 'address', op: 'IN', value: addresses }] }).then(function (result) {
          return result.result;
        });
      };

      RpcClient.prototype.get_normalized_balances = function (addresses) {
        if (typeof addresses === "string") {
          addresses = [addresses];
        }

        return this.call('get_normalized_balances', { 'addresses': addresses }).then(function (result) {
          return result.result;
        });
      };

      module.exports = RpcClient;
    }, { "../../rpc": 5 }], 3: [function (require, module, exports) {
      module.exports = {
        counterpartyserver: require('./counterparty-server')
      };
    }, { "./counterparty-server": 1 }], 4: [function (require, module, exports) {
      module.exports = {
        utils: require('./util/utils'),
        rpc: require('./rpc'),
        Mnemonic: require('./util/mnemonic'),
        backends: require('./backends'),
        randombytes: require('randombytes'),
        counterjs: require('counterjs')
      };
    }, { "./backends": 3, "./rpc": 5, "./util/mnemonic": 6, "./util/utils": 7, "counterjs": 38, "randombytes": 59 }], 5: [function (require, module, exports) {
      (function (Buffer) {

        var Q = require('q');
        var http = require('http');
        var https = require('https');

        var noop = function () {};

        function rpc(request, callback) {
          var self = this;

          request = JSON.stringify(request);
          var auth = new Buffer(self.user + ':' + self.pass).toString('base64');

          var options = {
            host: self.host,
            path: self.path,
            method: 'POST',
            port: self.port,
            rejectUnauthorized: self.rejectUnauthorized,
            agent: self.disableAgent ? false : undefined
          };

          if (self.httpOptions) {
            for (var k in self.httpOptions) {
              options[k] = self.httpOptions[k];
            }
          }

          var called = false;
          var errorMessage = (self.errPrefix || '') + 'JSON-RPC: host=' + self.host + ' port=' + self.port + ': ';
          var req = this.protocol.request(options, function (res) {
            var buf = '';
            res.on('data', function (data) {
              buf += data;
            });

            res.on('end', function () {
              if (called) {
                return;
              }
              called = true;

              if (res.statusCode === 401) {
                callback(new Error(errorMessage + 'Connection Rejected: 401 Unnauthorized'));
                return;
              }
              if (res.statusCode === 403) {
                callback(new Error(errorMessage + 'Connection Rejected: 403 Forbidden'));
                return;
              }

              var parsedBuf;
              try {
                parsedBuf = JSON.parse(buf);
              } catch (e) {
                self.log.err(e.stack);
                self.log.err(buf);
                self.log.err('HTTP Status code:' + res.statusCode);
                var err = new Error(errorMessage + 'Error Parsing JSON: ' + e.message);
                callback(err);
                return;
              }

              callback(parsedBuf.error, parsedBuf);
            });
          });

          req.on('error', function (e) {
            var err = new Error(errorMessage + 'Request Error: ' + e.message);
            self.log.err(err);
            if (!called) {
              called = true;
              callback(err);
            }
          });

          req.setTimeout(self.timeout);
          req.setHeader('Content-Length', request.length);
          req.setHeader('Content-Type', 'application/json');
          req.setHeader('Authorization', 'Basic ' + auth);
          req.write(request);
          req.end();
        }

        function getRandomId() {
          return parseInt(Math.random() * 100000);
        }

        function createRpcClient() {
          function RpcClient(opts) {
            if (typeof opts === "string") {
              var url = opts;
              if (arguments.length > 1) {
                opts = arguments[1];
              } else {
                opts = {};
              }

              var urlParsed = require('url').parse(url);

              var username = null,
                  password = null;
              if (urlParsed.auth) {
                var auth = urlParsed.auth.split(':');
                username = auth[0];
                password = auth.length > 1 ? auth[1] : null;
              }

              opts.protocol = urlParsed.protocol.slice(0, -1);
              opts.user = username;
              opts.pass = password;
              opts.host = urlParsed.hostname;
              opts.path = urlParsed.path;
              opts.port = urlParsed.port || (opts.protocol === 'http' ? 80 : 443);
            }

            opts = opts || {};
            this.host = opts.host || '127.0.0.1';
            this.path = opts.path || '/';
            this.port = opts.port || 8332;
            this.user = opts.user || 'user';
            this.pass = opts.pass || 'pass';
            this.protocol = opts.protocol === 'http' ? http : https;
            this.batchedCalls = null;
            this.errPrefix = opts.errPrefix || '';
            this.disableAgent = opts.disableAgent || false;
            this.timeout = opts.timeout || 20000;

            var isRejectUnauthorized = typeof opts.rejectUnauthorized !== 'undefined';
            this.rejectUnauthorized = isRejectUnauthorized ? opts.rejectUnauthorized : true;

            if (RpcClient.config.log) {
              this.log = RpcClient.config.log;
            } else {
              this.log = RpcClient.loggers[RpcClient.config.logger || 'normal'];
            }
          }

          RpcClient.loggers = {
            none: { info: noop, warn: noop, err: noop, debug: noop },
            normal: { info: noop, warn: noop, err: noop, debug: noop },
            debug: { info: noop, warn: noop, err: noop, debug: noop }
          };

          RpcClient.config = {
            logger: 'normal' };

          RpcClient.prototype.call = function (methodName, params) {
            var def = Q.defer();

            rpc.call(this, {
              jsonrpc: '2.0',
              method: methodName,
              params: params,
              id: this.getId()
            }, function (err, result) {
              if (err) {
                def.reject(err);
              } else {
                def.resolve(result);
              }
            });

            return def.promise;
          };

          RpcClient.prototype.batchCall = function (methodName, params) {
            this.batchedCalls.push({
              jsonrpc: '2.0',
              method: methodName,
              params: params,
              id: this.getId()
            });
          };

          RpcClient.prototype.doBatch = function () {
            var def = Q.defer();

            rpc.call(this, this.batchedCalls, function (err, result) {
              if (err) {
                def.reject(err);
              } else {
                def.resolve(result);
              }
            });

            this.batchedCalls = null;

            return def.promise;
          };

          RpcClient.prototype.getId = function () {
            return getRandomId();
          };

          return RpcClient;
        }

        module.exports = {
          createRpcClient: createRpcClient
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162, "http": 192, "https": 166, "q": 58, "url": 198 }], 6: [function (require, module, exports) {

      var Mnemonic = function (args) {
        var bits, i, l, w1, w2, w3, n;

        if (typeof args === 'undefined' || typeof args === 'number') {
          bits = args || 96;
          if (bits % 32 !== 0) {
            throw 'Can only generate 32/64/96/128 bit passwords';
          }
          this.random = new Uint32Array(bits / 32);

          if (window.crypto && window.crypto.getRandomValues) {
            window.crypto.getRandomValues(this.random);
          } else if (window.msCrypto && window.msCrypto.getRandomValues) {
            window.msCrypto.getRandomValues(this.random);
          } else {
            var errText = "Your browser lacks a way to securely generate random values. Please use a different, newer browser.";
            bootbox.alert(errText);
            assert(false, errText);
          }
        } else {
          i = 0, n = Mnemonic.wc;
          l = args.length / 3;
          this.random = new Uint32Array(l);
          for (; i < l; i++) {
            w1 = Mnemonic.words.indexOf(args[3 * i]);
            w2 = Mnemonic.words.indexOf(args[3 * i + 1]);
            w3 = Mnemonic.words.indexOf(args[3 * i + 2]);
            this.random[i] = w1 + n * Mnemonic._mod(w2 - w1, n) + n * n * Mnemonic._mod(w3 - w2, n);
          }
        }
        return this;
      };

      Mnemonic.prototype.toHex = function () {
        var l = this.random.length,
            res = '',
            i = 0;
        for (; i < l; i++) {
          res += ('00000000' + this.random[i].toString(16)).substr(-8);
        }
        return res;
      };

      Mnemonic.prototype.toWords = function () {
        var i = 0,
            l = this.random.length,
            n = Mnemonic.wc,
            words = [],
            x,
            w1,
            w2,
            w3;
        for (; i < l; i++) {
          x = this.random[i];
          w1 = x % n;
          w2 = ((x / n >> 0) + w1) % n;
          w3 = (((x / n >> 0) / n >> 0) + w2) % n;
          words.push(Mnemonic.words[w1]);
          words.push(Mnemonic.words[w2]);
          words.push(Mnemonic.words[w3]);
        }
        return words;
      };

      Mnemonic.wc = 1626;
      Mnemonic.words = JSON.parse('["like","just","love","know","never","want","time","out","there","make","look","eye","down","only","think","heart","back","then","into","about","more","away","still","them","take","thing","even","through","long","always","world","too","friend","tell","try","hand","thought","over","here","other","need","smile","again","much","cry","been","night","ever","little","said","end","some","those","around","mind","people","girl","leave","dream","left","turn","myself","give","nothing","really","off","before","something","find","walk","wish","good","once","place","ask","stop","keep","watch","seem","everything","wait","got","yet","made","remember","start","alone","run","hope","maybe","believe","body","hate","after","close","talk","stand","own","each","hurt","help","home","god","soul","new","many","two","inside","should","true","first","fear","mean","better","play","another","gone","change","use","wonder","someone","hair","cold","open","best","any","behind","happen","water","dark","laugh","stay","forever","name","work","show","sky","break","came","deep","door","put","black","together","upon","happy","such","great","white","matter","fill","past","please","burn","cause","enough","touch","moment","soon","voice","scream","anything","stare","sound","red","everyone","hide","kiss","truth","death","beautiful","mine","blood","broken","very","pass","next","forget","tree","wrong","air","mother","understand","lip","hit","wall","memory","sleep","free","high","realize","school","might","skin","sweet","perfect","blue","kill","breath","dance","against","fly","between","grow","strong","under","listen","bring","sometimes","speak","pull","person","become","family","begin","ground","real","small","father","sure","feet","rest","young","finally","land","across","today","different","guy","line","fire","reason","reach","second","slowly","write","eat","smell","mouth","step","learn","three","floor","promise","breathe","darkness","push","earth","guess","save","song","above","along","both","color","house","almost","sorry","anymore","brother","okay","dear","game","fade","already","apart","warm","beauty","heard","notice","question","shine","began","piece","whole","shadow","secret","street","within","finger","point","morning","whisper","child","moon","green","story","glass","kid","silence","since","soft","yourself","empty","shall","angel","answer","baby","bright","dad","path","worry","hour","drop","follow","power","war","half","flow","heaven","act","chance","fact","least","tired","children","near","quite","afraid","rise","sea","taste","window","cover","nice","trust","lot","sad","cool","force","peace","return","blind","easy","ready","roll","rose","drive","held","music","beneath","hang","mom","paint","emotion","quiet","clear","cloud","few","pretty","bird","outside","paper","picture","front","rock","simple","anyone","meant","reality","road","sense","waste","bit","leaf","thank","happiness","meet","men","smoke","truly","decide","self","age","book","form","alive","carry","escape","damn","instead","able","ice","minute","throw","catch","leg","ring","course","goodbye","lead","poem","sick","corner","desire","known","problem","remind","shoulder","suppose","toward","wave","drink","jump","woman","pretend","sister","week","human","joy","crack","grey","pray","surprise","dry","knee","less","search","bleed","caught","clean","embrace","future","king","son","sorrow","chest","hug","remain","sat","worth","blow","daddy","final","parent","tight","also","create","lonely","safe","cross","dress","evil","silent","bone","fate","perhaps","anger","class","scar","snow","tiny","tonight","continue","control","dog","edge","mirror","month","suddenly","comfort","given","loud","quickly","gaze","plan","rush","stone","town","battle","ignore","spirit","stood","stupid","yours","brown","build","dust","hey","kept","pay","phone","twist","although","ball","beyond","hidden","nose","taken","fail","float","pure","somehow","wash","wrap","angry","cheek","creature","forgotten","heat","rip","single","space","special","weak","whatever","yell","anyway","blame","job","choose","country","curse","drift","echo","figure","grew","laughter","neck","suffer","worse","yeah","disappear","foot","forward","knife","mess","somewhere","stomach","storm","beg","idea","lift","offer","breeze","field","five","often","simply","stuck","win","allow","confuse","enjoy","except","flower","seek","strength","calm","grin","gun","heavy","hill","large","ocean","shoe","sigh","straight","summer","tongue","accept","crazy","everyday","exist","grass","mistake","sent","shut","surround","table","ache","brain","destroy","heal","nature","shout","sign","stain","choice","doubt","glance","glow","mountain","queen","stranger","throat","tomorrow","city","either","fish","flame","rather","shape","spin","spread","ash","distance","finish","image","imagine","important","nobody","shatter","warmth","became","feed","flesh","funny","lust","shirt","trouble","yellow","attention","bare","bite","money","protect","amaze","appear","born","choke","completely","daughter","fresh","friendship","gentle","probably","six","deserve","expect","grab","middle","nightmare","river","thousand","weight","worst","wound","barely","bottle","cream","regret","relationship","stick","test","crush","endless","fault","itself","rule","spill","art","circle","join","kick","mask","master","passion","quick","raise","smooth","unless","wander","actually","broke","chair","deal","favorite","gift","note","number","sweat","box","chill","clothes","lady","mark","park","poor","sadness","tie","animal","belong","brush","consume","dawn","forest","innocent","pen","pride","stream","thick","clay","complete","count","draw","faith","press","silver","struggle","surface","taught","teach","wet","bless","chase","climb","enter","letter","melt","metal","movie","stretch","swing","vision","wife","beside","crash","forgot","guide","haunt","joke","knock","plant","pour","prove","reveal","steal","stuff","trip","wood","wrist","bother","bottom","crawl","crowd","fix","forgive","frown","grace","loose","lucky","party","release","surely","survive","teacher","gently","grip","speed","suicide","travel","treat","vein","written","cage","chain","conversation","date","enemy","however","interest","million","page","pink","proud","sway","themselves","winter","church","cruel","cup","demon","experience","freedom","pair","pop","purpose","respect","shoot","softly","state","strange","bar","birth","curl","dirt","excuse","lord","lovely","monster","order","pack","pants","pool","scene","seven","shame","slide","ugly","among","blade","blonde","closet","creek","deny","drug","eternity","gain","grade","handle","key","linger","pale","prepare","swallow","swim","tremble","wheel","won","cast","cigarette","claim","college","direction","dirty","gather","ghost","hundred","loss","lung","orange","present","swear","swirl","twice","wild","bitter","blanket","doctor","everywhere","flash","grown","knowledge","numb","pressure","radio","repeat","ruin","spend","unknown","buy","clock","devil","early","false","fantasy","pound","precious","refuse","sheet","teeth","welcome","add","ahead","block","bury","caress","content","depth","despite","distant","marry","purple","threw","whenever","bomb","dull","easily","grasp","hospital","innocence","normal","receive","reply","rhyme","shade","someday","sword","toe","visit","asleep","bought","center","consider","flat","hero","history","ink","insane","muscle","mystery","pocket","reflection","shove","silently","smart","soldier","spot","stress","train","type","view","whether","bus","energy","explain","holy","hunger","inch","magic","mix","noise","nowhere","prayer","presence","shock","snap","spider","study","thunder","trail","admit","agree","bag","bang","bound","butterfly","cute","exactly","explode","familiar","fold","further","pierce","reflect","scent","selfish","sharp","sink","spring","stumble","universe","weep","women","wonderful","action","ancient","attempt","avoid","birthday","branch","chocolate","core","depress","drunk","especially","focus","fruit","honest","match","palm","perfectly","pillow","pity","poison","roar","shift","slightly","thump","truck","tune","twenty","unable","wipe","wrote","coat","constant","dinner","drove","egg","eternal","flight","flood","frame","freak","gasp","glad","hollow","motion","peer","plastic","root","screen","season","sting","strike","team","unlike","victim","volume","warn","weird","attack","await","awake","built","charm","crave","despair","fought","grant","grief","horse","limit","message","ripple","sanity","scatter","serve","split","string","trick","annoy","blur","boat","brave","clearly","cling","connect","fist","forth","imagination","iron","jock","judge","lesson","milk","misery","nail","naked","ourselves","poet","possible","princess","sail","size","snake","society","stroke","torture","toss","trace","wise","bloom","bullet","cell","check","cost","darling","during","footstep","fragile","hallway","hardly","horizon","invisible","journey","midnight","mud","nod","pause","relax","shiver","sudden","value","youth","abuse","admire","blink","breast","bruise","constantly","couple","creep","curve","difference","dumb","emptiness","gotta","honor","plain","planet","recall","rub","ship","slam","soar","somebody","tightly","weather","adore","approach","bond","bread","burst","candle","coffee","cousin","crime","desert","flutter","frozen","grand","heel","hello","language","level","movement","pleasure","powerful","random","rhythm","settle","silly","slap","sort","spoken","steel","threaten","tumble","upset","aside","awkward","bee","blank","board","button","card","carefully","complain","crap","deeply","discover","drag","dread","effort","entire","fairy","giant","gotten","greet","illusion","jeans","leap","liquid","march","mend","nervous","nine","replace","rope","spine","stole","terror","accident","apple","balance","boom","childhood","collect","demand","depression","eventually","faint","glare","goal","group","honey","kitchen","laid","limb","machine","mere","mold","murder","nerve","painful","poetry","prince","rabbit","shelter","shore","shower","soothe","stair","steady","sunlight","tangle","tease","treasure","uncle","begun","bliss","canvas","cheer","claw","clutch","commit","crimson","crystal","delight","doll","existence","express","fog","football","gay","goose","guard","hatred","illuminate","mass","math","mourn","rich","rough","skip","stir","student","style","support","thorn","tough","yard","yearn","yesterday","advice","appreciate","autumn","bank","beam","bowl","capture","carve","collapse","confusion","creation","dove","feather","girlfriend","glory","government","harsh","hop","inner","loser","moonlight","neighbor","neither","peach","pig","praise","screw","shield","shimmer","sneak","stab","subject","throughout","thrown","tower","twirl","wow","army","arrive","bathroom","bump","cease","cookie","couch","courage","dim","guilt","howl","hum","husband","insult","led","lunch","mock","mostly","natural","nearly","needle","nerd","peaceful","perfection","pile","price","remove","roam","sanctuary","serious","shiny","shook","sob","stolen","tap","vain","void","warrior","wrinkle","affection","apologize","blossom","bounce","bridge","cheap","crumble","decision","descend","desperately","dig","dot","flip","frighten","heartbeat","huge","lazy","lick","odd","opinion","process","puzzle","quietly","retreat","score","sentence","separate","situation","skill","soak","square","stray","taint","task","tide","underneath","veil","whistle","anywhere","bedroom","bid","bloody","burden","careful","compare","concern","curtain","decay","defeat","describe","double","dreamer","driver","dwell","evening","flare","flicker","grandma","guitar","harm","horrible","hungry","indeed","lace","melody","monkey","nation","object","obviously","rainbow","salt","scratch","shown","shy","stage","stun","third","tickle","useless","weakness","worship","worthless","afternoon","beard","boyfriend","bubble","busy","certain","chin","concrete","desk","diamond","doom","drawn","due","felicity","freeze","frost","garden","glide","harmony","hopefully","hunt","jealous","lightning","mama","mercy","peel","physical","position","pulse","punch","quit","rant","respond","salty","sane","satisfy","savior","sheep","slept","social","sport","tuck","utter","valley","wolf","aim","alas","alter","arrow","awaken","beaten","belief","brand","ceiling","cheese","clue","confidence","connection","daily","disguise","eager","erase","essence","everytime","expression","fan","flag","flirt","foul","fur","giggle","glorious","ignorance","law","lifeless","measure","mighty","muse","north","opposite","paradise","patience","patient","pencil","petal","plate","ponder","possibly","practice","slice","spell","stock","strife","strip","suffocate","suit","tender","tool","trade","velvet","verse","waist","witch","aunt","bench","bold","cap","certainly","click","companion","creator","dart","delicate","determine","dish","dragon","drama","drum","dude","everybody","feast","forehead","former","fright","fully","gas","hook","hurl","invite","juice","manage","moral","possess","raw","rebel","royal","scale","scary","several","slight","stubborn","swell","talent","tea","terrible","thread","torment","trickle","usually","vast","violence","weave","acid","agony","ashamed","awe","belly","blend","blush","character","cheat","common","company","coward","creak","danger","deadly","defense","define","depend","desperate","destination","dew","duck","dusty","embarrass","engine","example","explore","foe","freely","frustrate","generation","glove","guilty","health","hurry","idiot","impossible","inhale","jaw","kingdom","mention","mist","moan","mumble","mutter","observe","ode","pathetic","pattern","pie","prefer","puff","rape","rare","revenge","rude","scrape","spiral","squeeze","strain","sunset","suspend","sympathy","thigh","throne","total","unseen","weapon","weary"]');

      Mnemonic._mod = function (a, b) {
        return a - Math.floor(a / b) * b;
      };

      module.exports = Mnemonic;
    }, {}], 7: [function (require, module, exports) {
      var bitcoin = require('bitcoinjs-lib');

      var deriveByPath = function (hdKey, path, keyPath) {
        keyPath = keyPath || (!!hdKey.privKey ? "m" : "M");

        if (path[0].toLowerCase() !== "m" || keyPath[0].toLowerCase() !== "m") {
          throw new Error("Wallet.deriveByPath only works with absolute paths. (" + path + ", " + keyPath + ")");
        }

        if (path[0] === "m" && keyPath[0] === "M") {
          throw new Error("Wallet.deriveByPath can't derive private path from public parent. (" + path + ", " + keyPath + ")");
        }

        var toPublic = path[0] === "M" && keyPath[0] === "m";
        if (toPublic) {
          path[0] = "m";
        }

        if (path.toLowerCase().indexOf(keyPath.toLowerCase()) !== 0) {
          throw new Error("Wallet.derivePath requires path (" + path + ") to be a child of keyPath (" + keyPath + ")");
        }

        path = path.substr(keyPath.length);

        var newKey = hdKey;
        path.replace(/^\//, "").split("/").forEach(function (chunk) {
          if (!chunk) {
            return;
          }

          if (chunk.indexOf("'") !== -1) {
            chunk = parseInt(chunk.replace("'", ""), 10) + bitcoin.HDNode.HIGHEST_BIT;
          }

          newKey = newKey.derive(chunk);
        });

        if (toPublic) {
          return newKey.neutered();
        } else {
          return newKey;
        }
      };

      module.exports = {
        deriveByPath: deriveByPath
      };
    }, { "bitcoinjs-lib": 92 }], 8: [function (require, module, exports) {

      module.exports = function base(ALPHABET) {
        var ALPHABET_MAP = {};
        var BASE = ALPHABET.length;
        var LEADER = ALPHABET.charAt(0);

        for (var i = 0; i < ALPHABET.length; i++) {
          ALPHABET_MAP[ALPHABET.charAt(i)] = i;
        }

        function encode(source) {
          if (source.length === 0) return '';

          var digits = [0];
          for (var i = 0; i < source.length; ++i) {
            for (var j = 0, carry = source[i]; j < digits.length; ++j) {
              carry += digits[j] << 8;
              digits[j] = carry % BASE;
              carry = carry / BASE | 0;
            }

            while (carry > 0) {
              digits.push(carry % BASE);
              carry = carry / BASE | 0;
            }
          }

          var string = '';

          for (var k = 0; source[k] === 0 && k < source.length - 1; ++k) string += ALPHABET[0];

          for (var q = digits.length - 1; q >= 0; --q) string += ALPHABET[digits[q]];

          return string;
        }

        function decodeUnsafe(string) {
          if (string.length === 0) return [];

          var bytes = [0];
          for (var i = 0; i < string.length; i++) {
            var value = ALPHABET_MAP[string[i]];
            if (value === undefined) return;

            for (var j = 0, carry = value; j < bytes.length; ++j) {
              carry += bytes[j] * BASE;
              bytes[j] = carry & 0xff;
              carry >>= 8;
            }

            while (carry > 0) {
              bytes.push(carry & 0xff);
              carry >>= 8;
            }
          }

          for (var k = 0; string[k] === LEADER && k < string.length - 1; ++k) {
            bytes.push(0);
          }

          return bytes.reverse();
        }

        function decode(string) {
          var array = decodeUnsafe(string);
          if (array) return array;

          throw new Error('Non-base' + BASE + ' character');
        }

        return {
          encode: encode,
          decodeUnsafe: decodeUnsafe,
          decode: decode
        };
      };
    }, {}], 9: [function (require, module, exports) {
      function BigInteger(a, b, c) {
        if (!(this instanceof BigInteger)) return new BigInteger(a, b, c);

        if (a != null) {
          if ("number" == typeof a) this.fromNumber(a, b, c);else if (b == null && "string" != typeof a) this.fromString(a, 256);else this.fromString(a, b);
        }
      }

      var proto = BigInteger.prototype;

      proto.__bigi = require('../package.json').version;
      BigInteger.isBigInteger = function (obj, check_ver) {
        return obj && obj.__bigi && (!check_ver || obj.__bigi === proto.__bigi);
      };

      var dbits;

      function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
          var v = x * this[i++] + w[j] + c;
          c = Math.floor(v / 0x4000000);
          w[j++] = v & 0x3ffffff;
        }
        return c;
      }

      function am2(i, x, w, j, c, n) {
        var xl = x & 0x7fff,
            xh = x >> 15;
        while (--n >= 0) {
          var l = this[i] & 0x7fff;
          var h = this[i++] >> 15;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
          c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
          w[j++] = l & 0x3fffffff;
        }
        return c;
      }

      function am3(i, x, w, j, c, n) {
        var xl = x & 0x3fff,
            xh = x >> 14;
        while (--n >= 0) {
          var l = this[i] & 0x3fff;
          var h = this[i++] >> 14;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
          c = (l >> 28) + (m >> 14) + xh * h;
          w[j++] = l & 0xfffffff;
        }
        return c;
      }

      BigInteger.prototype.am = am1;
      dbits = 26;

      BigInteger.prototype.DB = dbits;
      BigInteger.prototype.DM = (1 << dbits) - 1;
      var DV = BigInteger.prototype.DV = 1 << dbits;

      var BI_FP = 52;
      BigInteger.prototype.FV = Math.pow(2, BI_FP);
      BigInteger.prototype.F1 = BI_FP - dbits;
      BigInteger.prototype.F2 = 2 * dbits - BI_FP;

      var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
      var BI_RC = new Array();
      var rr, vv;
      rr = "0".charCodeAt(0);
      for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
      rr = "a".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
      rr = "A".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

      function int2char(n) {
        return BI_RM.charAt(n);
      }

      function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return c == null ? -1 : c;
      }

      function bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
        r.t = this.t;
        r.s = this.s;
      }

      function bnpFromInt(x) {
        this.t = 1;
        this.s = x < 0 ? -1 : 0;
        if (x > 0) this[0] = x;else if (x < -1) this[0] = x + DV;else this.t = 0;
      }

      function nbv(i) {
        var r = new BigInteger();
        r.fromInt(i);
        return r;
      }

      function bnpFromString(s, b) {
        var self = this;

        var k;
        if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 256) k = 8;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else {
            self.fromRadix(s, b);
            return;
          }
        self.t = 0;
        self.s = 0;
        var i = s.length,
            mi = false,
            sh = 0;
        while (--i >= 0) {
          var x = k == 8 ? s[i] & 0xff : intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-") mi = true;
            continue;
          }
          mi = false;
          if (sh == 0) self[self.t++] = x;else if (sh + k > self.DB) {
            self[self.t - 1] |= (x & (1 << self.DB - sh) - 1) << sh;
            self[self.t++] = x >> self.DB - sh;
          } else self[self.t - 1] |= x << sh;
          sh += k;
          if (sh >= self.DB) sh -= self.DB;
        }
        if (k == 8 && (s[0] & 0x80) != 0) {
          self.s = -1;
          if (sh > 0) self[self.t - 1] |= (1 << self.DB - sh) - 1 << sh;
        }
        self.clamp();
        if (mi) BigInteger.ZERO.subTo(self, self);
      }

      function bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c) --this.t;
      }

      function bnToString(b) {
        var self = this;
        if (self.s < 0) return "-" + self.negate().toString(b);
        var k;
        if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else return self.toRadix(b);
        var km = (1 << k) - 1,
            d,
            m = false,
            r = "",
            i = self.t;
        var p = self.DB - i * self.DB % k;
        if (i-- > 0) {
          if (p < self.DB && (d = self[i] >> p) > 0) {
            m = true;
            r = int2char(d);
          }
          while (i >= 0) {
            if (p < k) {
              d = (self[i] & (1 << p) - 1) << k - p;
              d |= self[--i] >> (p += self.DB - k);
            } else {
              d = self[i] >> (p -= k) & km;
              if (p <= 0) {
                p += self.DB;
                --i;
              }
            }
            if (d > 0) m = true;
            if (m) r += int2char(d);
          }
        }
        return m ? r : "0";
      }

      function bnNegate() {
        var r = new BigInteger();
        BigInteger.ZERO.subTo(this, r);
        return r;
      }

      function bnAbs() {
        return this.s < 0 ? this.negate() : this;
      }

      function bnCompareTo(a) {
        var r = this.s - a.s;
        if (r != 0) return r;
        var i = this.t;
        r = i - a.t;
        if (r != 0) return this.s < 0 ? -r : r;
        while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
        return 0;
      }

      function nbits(x) {
        var r = 1,
            t;
        if ((t = x >>> 16) != 0) {
          x = t;
          r += 16;
        }
        if ((t = x >> 8) != 0) {
          x = t;
          r += 8;
        }
        if ((t = x >> 4) != 0) {
          x = t;
          r += 4;
        }
        if ((t = x >> 2) != 0) {
          x = t;
          r += 2;
        }
        if ((t = x >> 1) != 0) {
          x = t;
          r += 1;
        }
        return r;
      }

      function bnBitLength() {
        if (this.t <= 0) return 0;
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
      }

      function bnByteLength() {
        return this.bitLength() >> 3;
      }

      function bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i) r[i] = 0;
        r.t = this.t + n;
        r.s = this.s;
      }

      function bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i) r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
      }

      function bnpLShiftTo(n, r) {
        var self = this;
        var bs = n % self.DB;
        var cbs = self.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / self.DB),
            c = self.s << bs & self.DM,
            i;
        for (i = self.t - 1; i >= 0; --i) {
          r[i + ds + 1] = self[i] >> cbs | c;
          c = (self[i] & bm) << bs;
        }
        for (i = ds - 1; i >= 0; --i) r[i] = 0;
        r[ds] = c;
        r.t = self.t + ds + 1;
        r.s = self.s;
        r.clamp();
      }

      function bnpRShiftTo(n, r) {
        var self = this;
        r.s = self.s;
        var ds = Math.floor(n / self.DB);
        if (ds >= self.t) {
          r.t = 0;
          return;
        }
        var bs = n % self.DB;
        var cbs = self.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = self[ds] >> bs;
        for (var i = ds + 1; i < self.t; ++i) {
          r[i - ds - 1] |= (self[i] & bm) << cbs;
          r[i - ds] = self[i] >> bs;
        }
        if (bs > 0) r[self.t - ds - 1] |= (self.s & bm) << cbs;
        r.t = self.t - ds;
        r.clamp();
      }

      function bnpSubTo(a, r) {
        var self = this;
        var i = 0,
            c = 0,
            m = Math.min(a.t, self.t);
        while (i < m) {
          c += self[i] - a[i];
          r[i++] = c & self.DM;
          c >>= self.DB;
        }
        if (a.t < self.t) {
          c -= a.s;
          while (i < self.t) {
            c += self[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += self.s;
        } else {
          c += self.s;
          while (i < a.t) {
            c -= a[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c -= a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c < -1) r[i++] = self.DV + c;else if (c > 0) r[i++] = c;
        r.t = i;
        r.clamp();
      }

      function bnpMultiplyTo(a, r) {
        var x = this.abs(),
            y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.clamp();
        if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
      }

      function bnpSquareTo(r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
          var c = x.am(i, x[i], r, 2 * i, 0, 1);
          if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
          }
        }
        if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.clamp();
      }

      function bnpDivRemTo(m, q, r) {
        var self = this;
        var pm = m.abs();
        if (pm.t <= 0) return;
        var pt = self.abs();
        if (pt.t < pm.t) {
          if (q != null) q.fromInt(0);
          if (r != null) self.copyTo(r);
          return;
        }
        if (r == null) r = new BigInteger();
        var y = new BigInteger(),
            ts = self.s,
            ms = m.s;
        var nsh = self.DB - nbits(pm[pm.t - 1]);
        if (nsh > 0) {
          pm.lShiftTo(nsh, y);
          pt.lShiftTo(nsh, r);
        } else {
          pm.copyTo(y);
          pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) return;
        var yt = y0 * (1 << self.F1) + (ys > 1 ? y[ys - 2] >> self.F2 : 0);
        var d1 = self.FV / yt,
            d2 = (1 << self.F1) / yt,
            e = 1 << self.F2;
        var i = r.t,
            j = i - ys,
            t = q == null ? new BigInteger() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
          r[r.t++] = 1;
          r.subTo(t, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y);
        while (y.t < ys) y[y.t++] = 0;
        while (--j >= 0) {
          var qd = r[--i] == y0 ? self.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
          if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) r.subTo(t, r);
          }
        }
        if (q != null) {
          r.drShiftTo(ys, q);
          if (ts != ms) BigInteger.ZERO.subTo(q, q);
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0) r.rShiftTo(nsh, r);
        if (ts < 0) BigInteger.ZERO.subTo(r, r);
      }

      function bnMod(a) {
        var r = new BigInteger();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
        return r;
      }

      function Classic(m) {
        this.m = m;
      }

      function cConvert(x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);else return x;
      }

      function cRevert(x) {
        return x;
      }

      function cReduce(x) {
        x.divRemTo(this.m, null, x);
      }

      function cMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      function cSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      Classic.prototype.convert = cConvert;
      Classic.prototype.revert = cRevert;
      Classic.prototype.reduce = cReduce;
      Classic.prototype.mulTo = cMulTo;
      Classic.prototype.sqrTo = cSqrTo;

      function bnpInvDigit() {
        if (this.t < 1) return 0;
        var x = this[0];
        if ((x & 1) == 0) return 0;
        var y = x & 3;
        y = y * (2 - (x & 0xf) * y) & 0xf;
        y = y * (2 - (x & 0xff) * y) & 0xff;
        y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff;
        y = y * (2 - x * y % this.DV) % this.DV;
        return y > 0 ? this.DV - y : -y;
      }

      function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 0x7fff;
        this.mph = this.mp >> 15;
        this.um = (1 << m.DB - 15) - 1;
        this.mt2 = 2 * m.t;
      }

      function montConvert(x) {
        var r = new BigInteger();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
        return r;
      }

      function montRevert(x) {
        var r = new BigInteger();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }

      function montReduce(x) {
        while (x.t <= this.mt2) x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
          var j = x[i] & 0x7fff;
          var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;

          j = i + this.m.t;
          x[j] += this.m.am(0, u0, x, i, 0, this.m.t);

          while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
          }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
      }

      function montSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      function montMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      Montgomery.prototype.convert = montConvert;
      Montgomery.prototype.revert = montRevert;
      Montgomery.prototype.reduce = montReduce;
      Montgomery.prototype.mulTo = montMulTo;
      Montgomery.prototype.sqrTo = montSqrTo;

      function bnpIsEven() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }

      function bnpExp(e, z) {
        if (e > 0xffffffff || e < 1) return BigInteger.ONE;
        var r = new BigInteger(),
            r2 = new BigInteger(),
            g = z.convert(this),
            i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
          z.sqrTo(r, r2);
          if ((e & 1 << i) > 0) z.mulTo(r2, g, r);else {
            var t = r;
            r = r2;
            r2 = t;
          }
        }
        return z.revert(r);
      }

      function bnModPowInt(e, m) {
        var z;
        if (e < 256 || m.isEven()) z = new Classic(m);else z = new Montgomery(m);
        return this.exp(e, z);
      }

      proto.copyTo = bnpCopyTo;
      proto.fromInt = bnpFromInt;
      proto.fromString = bnpFromString;
      proto.clamp = bnpClamp;
      proto.dlShiftTo = bnpDLShiftTo;
      proto.drShiftTo = bnpDRShiftTo;
      proto.lShiftTo = bnpLShiftTo;
      proto.rShiftTo = bnpRShiftTo;
      proto.subTo = bnpSubTo;
      proto.multiplyTo = bnpMultiplyTo;
      proto.squareTo = bnpSquareTo;
      proto.divRemTo = bnpDivRemTo;
      proto.invDigit = bnpInvDigit;
      proto.isEven = bnpIsEven;
      proto.exp = bnpExp;

      proto.toString = bnToString;
      proto.negate = bnNegate;
      proto.abs = bnAbs;
      proto.compareTo = bnCompareTo;
      proto.bitLength = bnBitLength;
      proto.byteLength = bnByteLength;
      proto.mod = bnMod;
      proto.modPowInt = bnModPowInt;

      function bnClone() {
        var r = new BigInteger();
        this.copyTo(r);
        return r;
      }

      function bnIntValue() {
        if (this.s < 0) {
          if (this.t == 1) return this[0] - this.DV;else if (this.t == 0) return -1;
        } else if (this.t == 1) return this[0];else if (this.t == 0) return 0;

        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
      }

      function bnByteValue() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24;
      }

      function bnShortValue() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16;
      }

      function bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
      }

      function bnSigNum() {
        if (this.s < 0) return -1;else if (this.t <= 0 || this.t == 1 && this[0] <= 0) return 0;else return 1;
      }

      function bnpToRadix(b) {
        if (b == null) b = 10;
        if (this.signum() == 0 || b < 2 || b > 36) return "0";
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a),
            y = new BigInteger(),
            z = new BigInteger(),
            r = "";
        this.divRemTo(d, y, z);
        while (y.signum() > 0) {
          r = (a + z.intValue()).toString(b).substr(1) + r;
          y.divRemTo(d, y, z);
        }
        return z.intValue().toString(b) + r;
      }

      function bnpFromRadix(s, b) {
        var self = this;
        self.fromInt(0);
        if (b == null) b = 10;
        var cs = self.chunkSize(b);
        var d = Math.pow(b, cs),
            mi = false,
            j = 0,
            w = 0;
        for (var i = 0; i < s.length; ++i) {
          var x = intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-" && self.signum() == 0) mi = true;
            continue;
          }
          w = b * w + x;
          if (++j >= cs) {
            self.dMultiply(d);
            self.dAddOffset(w, 0);
            j = 0;
            w = 0;
          }
        }
        if (j > 0) {
          self.dMultiply(Math.pow(b, j));
          self.dAddOffset(w, 0);
        }
        if (mi) BigInteger.ZERO.subTo(self, self);
      }

      function bnpFromNumber(a, b, c) {
        var self = this;
        if ("number" == typeof b) {
          if (a < 2) self.fromInt(1);else {
            self.fromNumber(a, c);
            if (!self.testBit(a - 1)) self.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, self);
            if (self.isEven()) self.dAddOffset(1, 0);
            while (!self.isProbablePrime(b)) {
              self.dAddOffset(2, 0);
              if (self.bitLength() > a) self.subTo(BigInteger.ONE.shiftLeft(a - 1), self);
            }
          }
        } else {
          var x = new Array(),
              t = a & 7;
          x.length = (a >> 3) + 1;
          b.nextBytes(x);
          if (t > 0) x[0] &= (1 << t) - 1;else x[0] = 0;
          self.fromString(x, 256);
        }
      }

      function bnToByteArray() {
        var self = this;
        var i = self.t,
            r = new Array();
        r[0] = self.s;
        var p = self.DB - i * self.DB % 8,
            d,
            k = 0;
        if (i-- > 0) {
          if (p < self.DB && (d = self[i] >> p) != (self.s & self.DM) >> p) r[k++] = d | self.s << self.DB - p;
          while (i >= 0) {
            if (p < 8) {
              d = (self[i] & (1 << p) - 1) << 8 - p;
              d |= self[--i] >> (p += self.DB - 8);
            } else {
              d = self[i] >> (p -= 8) & 0xff;
              if (p <= 0) {
                p += self.DB;
                --i;
              }
            }
            if ((d & 0x80) != 0) d |= -256;
            if (k === 0 && (self.s & 0x80) != (d & 0x80)) ++k;
            if (k > 0 || d != self.s) r[k++] = d;
          }
        }
        return r;
      }

      function bnEquals(a) {
        return this.compareTo(a) == 0;
      }

      function bnMin(a) {
        return this.compareTo(a) < 0 ? this : a;
      }

      function bnMax(a) {
        return this.compareTo(a) > 0 ? this : a;
      }

      function bnpBitwiseTo(a, op, r) {
        var self = this;
        var i,
            f,
            m = Math.min(a.t, self.t);
        for (i = 0; i < m; ++i) r[i] = op(self[i], a[i]);
        if (a.t < self.t) {
          f = a.s & self.DM;
          for (i = m; i < self.t; ++i) r[i] = op(self[i], f);
          r.t = self.t;
        } else {
          f = self.s & self.DM;
          for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
          r.t = a.t;
        }
        r.s = op(self.s, a.s);
        r.clamp();
      }

      function op_and(x, y) {
        return x & y;
      }

      function bnAnd(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_and, r);
        return r;
      }

      function op_or(x, y) {
        return x | y;
      }

      function bnOr(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_or, r);
        return r;
      }

      function op_xor(x, y) {
        return x ^ y;
      }

      function bnXor(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_xor, r);
        return r;
      }

      function op_andnot(x, y) {
        return x & ~y;
      }

      function bnAndNot(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_andnot, r);
        return r;
      }

      function bnNot() {
        var r = new BigInteger();
        for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r;
      }

      function bnShiftLeft(n) {
        var r = new BigInteger();
        if (n < 0) this.rShiftTo(-n, r);else this.lShiftTo(n, r);
        return r;
      }

      function bnShiftRight(n) {
        var r = new BigInteger();
        if (n < 0) this.lShiftTo(-n, r);else this.rShiftTo(n, r);
        return r;
      }

      function lbit(x) {
        if (x == 0) return -1;
        var r = 0;
        if ((x & 0xffff) == 0) {
          x >>= 16;
          r += 16;
        }
        if ((x & 0xff) == 0) {
          x >>= 8;
          r += 8;
        }
        if ((x & 0xf) == 0) {
          x >>= 4;
          r += 4;
        }
        if ((x & 3) == 0) {
          x >>= 2;
          r += 2;
        }
        if ((x & 1) == 0) ++r;
        return r;
      }

      function bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i) if (this[i] != 0) return i * this.DB + lbit(this[i]);
        if (this.s < 0) return this.t * this.DB;
        return -1;
      }

      function cbit(x) {
        var r = 0;
        while (x != 0) {
          x &= x - 1;
          ++r;
        }
        return r;
      }

      function bnBitCount() {
        var r = 0,
            x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
        return r;
      }

      function bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t) return this.s != 0;
        return (this[j] & 1 << n % this.DB) != 0;
      }

      function bnpChangeBit(n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
      }

      function bnSetBit(n) {
        return this.changeBit(n, op_or);
      }

      function bnClearBit(n) {
        return this.changeBit(n, op_andnot);
      }

      function bnFlipBit(n) {
        return this.changeBit(n, op_xor);
      }

      function bnpAddTo(a, r) {
        var self = this;

        var i = 0,
            c = 0,
            m = Math.min(a.t, self.t);
        while (i < m) {
          c += self[i] + a[i];
          r[i++] = c & self.DM;
          c >>= self.DB;
        }
        if (a.t < self.t) {
          c += a.s;
          while (i < self.t) {
            c += self[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += self.s;
        } else {
          c += self.s;
          while (i < a.t) {
            c += a[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c > 0) r[i++] = c;else if (c < -1) r[i++] = self.DV + c;
        r.t = i;
        r.clamp();
      }

      function bnAdd(a) {
        var r = new BigInteger();
        this.addTo(a, r);
        return r;
      }

      function bnSubtract(a) {
        var r = new BigInteger();
        this.subTo(a, r);
        return r;
      }

      function bnMultiply(a) {
        var r = new BigInteger();
        this.multiplyTo(a, r);
        return r;
      }

      function bnSquare() {
        var r = new BigInteger();
        this.squareTo(r);
        return r;
      }

      function bnDivide(a) {
        var r = new BigInteger();
        this.divRemTo(a, r, null);
        return r;
      }

      function bnRemainder(a) {
        var r = new BigInteger();
        this.divRemTo(a, null, r);
        return r;
      }

      function bnDivideAndRemainder(a) {
        var q = new BigInteger(),
            r = new BigInteger();
        this.divRemTo(a, q, r);
        return new Array(q, r);
      }

      function bnpDMultiply(n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
      }

      function bnpDAddOffset(n, w) {
        if (n == 0) return;
        while (this.t <= w) this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
          this[w] -= this.DV;
          if (++w >= this.t) this[this.t++] = 0;
          ++this[w];
        }
      }

      function NullExp() {}

      function nNop(x) {
        return x;
      }

      function nMulTo(x, y, r) {
        x.multiplyTo(y, r);
      }

      function nSqrTo(x, r) {
        x.squareTo(r);
      }

      NullExp.prototype.convert = nNop;
      NullExp.prototype.revert = nNop;
      NullExp.prototype.mulTo = nMulTo;
      NullExp.prototype.sqrTo = nSqrTo;

      function bnPow(e) {
        return this.exp(e, new NullExp());
      }

      function bnpMultiplyLowerTo(a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0;
        r.t = i;
        while (i > 0) r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
        r.clamp();
      }

      function bnpMultiplyUpperTo(a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0;
        while (--i >= 0) r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a.t; ++i) r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        r.clamp();
        r.drShiftTo(1, r);
      }

      function Barrett(m) {
        this.r2 = new BigInteger();
        this.q3 = new BigInteger();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
        this.m = m;
      }

      function barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);else if (x.compareTo(this.m) < 0) return x;else {
          var r = new BigInteger();
          x.copyTo(r);
          this.reduce(r);
          return r;
        }
      }

      function barrettRevert(x) {
        return x;
      }

      function barrettReduce(x) {
        var self = this;
        x.drShiftTo(self.m.t - 1, self.r2);
        if (x.t > self.m.t + 1) {
          x.t = self.m.t + 1;
          x.clamp();
        }
        self.mu.multiplyUpperTo(self.r2, self.m.t + 1, self.q3);
        self.m.multiplyLowerTo(self.q3, self.m.t + 1, self.r2);
        while (x.compareTo(self.r2) < 0) x.dAddOffset(1, self.m.t + 1);
        x.subTo(self.r2, x);
        while (x.compareTo(self.m) >= 0) x.subTo(self.m, x);
      }

      function barrettSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      function barrettMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      Barrett.prototype.convert = barrettConvert;
      Barrett.prototype.revert = barrettRevert;
      Barrett.prototype.reduce = barrettReduce;
      Barrett.prototype.mulTo = barrettMulTo;
      Barrett.prototype.sqrTo = barrettSqrTo;

      function bnModPow(e, m) {
        var i = e.bitLength(),
            k,
            r = nbv(1),
            z;
        if (i <= 0) return r;else if (i < 18) k = 1;else if (i < 48) k = 3;else if (i < 144) k = 4;else if (i < 768) k = 5;else k = 6;
        if (i < 8) z = new Classic(m);else if (m.isEven()) z = new Barrett(m);else z = new Montgomery(m);

        var g = new Array(),
            n = 3,
            k1 = k - 1,
            km = (1 << k) - 1;
        g[1] = z.convert(this);
        if (k > 1) {
          var g2 = new BigInteger();
          z.sqrTo(g[1], g2);
          while (n <= km) {
            g[n] = new BigInteger();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2;
          }
        }

        var j = e.t - 1,
            w,
            is1 = true,
            r2 = new BigInteger(),
            t;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
          if (i >= k1) w = e[j] >> i - k1 & km;else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0) w |= e[j - 1] >> this.DB + i - k1;
          }

          n = k;
          while ((w & 1) == 0) {
            w >>= 1;
            --n;
          }
          if ((i -= n) < 0) {
            i += this.DB;
            --j;
          }
          if (is1) {
            g[w].copyTo(r);
            is1 = false;
          } else {
            while (n > 1) {
              z.sqrTo(r, r2);
              z.sqrTo(r2, r);
              n -= 2;
            }
            if (n > 0) z.sqrTo(r, r2);else {
              t = r;
              r = r2;
              r2 = t;
            }
            z.mulTo(r2, g[w], r);
          }

          while (j >= 0 && (e[j] & 1 << i) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
              i = this.DB - 1;
              --j;
            }
          }
        }
        return z.revert(r);
      }

      function bnGCD(a) {
        var x = this.s < 0 ? this.negate() : this.clone();
        var y = a.s < 0 ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
          var t = x;
          x = y;
          y = t;
        }
        var i = x.getLowestSetBit(),
            g = y.getLowestSetBit();
        if (g < 0) return x;
        if (i < g) g = i;
        if (g > 0) {
          x.rShiftTo(g, x);
          y.rShiftTo(g, y);
        }
        while (x.signum() > 0) {
          if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
          if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
          if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
          } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
          }
        }
        if (g > 0) y.lShiftTo(g, y);
        return y;
      }

      function bnpModInt(n) {
        if (n <= 0) return 0;
        var d = this.DV % n,
            r = this.s < 0 ? n - 1 : 0;
        if (this.t > 0) if (d == 0) r = this[0] % n;else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
        return r;
      }

      function bnModInverse(m) {
        var ac = m.isEven();
        if (this.signum() === 0) throw new Error('division by zero');
        if (this.isEven() && ac || m.signum() == 0) return BigInteger.ZERO;
        var u = m.clone(),
            v = this.clone();
        var a = nbv(1),
            b = nbv(0),
            c = nbv(0),
            d = nbv(1);
        while (u.signum() != 0) {
          while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
              if (!a.isEven() || !b.isEven()) {
                a.addTo(this, a);
                b.subTo(m, b);
              }
              a.rShiftTo(1, a);
            } else if (!b.isEven()) b.subTo(m, b);
            b.rShiftTo(1, b);
          }
          while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
              if (!c.isEven() || !d.isEven()) {
                c.addTo(this, c);
                d.subTo(m, d);
              }
              c.rShiftTo(1, c);
            } else if (!d.isEven()) d.subTo(m, d);
            d.rShiftTo(1, d);
          }
          if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac) a.subTo(c, a);
            b.subTo(d, b);
          } else {
            v.subTo(u, v);
            if (ac) c.subTo(a, c);
            d.subTo(b, d);
          }
        }
        if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
        while (d.compareTo(m) >= 0) d.subTo(m, d);
        while (d.signum() < 0) d.addTo(m, d);
        return d;
      }

      var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];

      var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];

      function bnIsProbablePrime(t) {
        var i,
            x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
          for (i = 0; i < lowprimes.length; ++i) if (x[0] == lowprimes[i]) return true;
          return false;
        }
        if (x.isEven()) return false;
        i = 1;
        while (i < lowprimes.length) {
          var m = lowprimes[i],
              j = i + 1;
          while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
          m = x.modInt(m);
          while (i < j) if (m % lowprimes[i++] == 0) return false;
        }
        return x.millerRabin(t);
      }

      function bnpMillerRabin(t) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0) return false;
        var r = n1.shiftRight(k);
        t = t + 1 >> 1;
        if (t > lowprimes.length) t = lowprimes.length;
        var a = new BigInteger(null);
        var j,
            bases = [];
        for (var i = 0; i < t; ++i) {
          for (;;) {
            j = lowprimes[Math.floor(Math.random() * lowprimes.length)];
            if (bases.indexOf(j) == -1) break;
          }
          bases.push(j);
          a.fromInt(j);
          var y = a.modPow(r, this);
          if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
              y = y.modPowInt(2, this);
              if (y.compareTo(BigInteger.ONE) == 0) return false;
            }
            if (y.compareTo(n1) != 0) return false;
          }
        }
        return true;
      }

      proto.chunkSize = bnpChunkSize;
      proto.toRadix = bnpToRadix;
      proto.fromRadix = bnpFromRadix;
      proto.fromNumber = bnpFromNumber;
      proto.bitwiseTo = bnpBitwiseTo;
      proto.changeBit = bnpChangeBit;
      proto.addTo = bnpAddTo;
      proto.dMultiply = bnpDMultiply;
      proto.dAddOffset = bnpDAddOffset;
      proto.multiplyLowerTo = bnpMultiplyLowerTo;
      proto.multiplyUpperTo = bnpMultiplyUpperTo;
      proto.modInt = bnpModInt;
      proto.millerRabin = bnpMillerRabin;

      proto.clone = bnClone;
      proto.intValue = bnIntValue;
      proto.byteValue = bnByteValue;
      proto.shortValue = bnShortValue;
      proto.signum = bnSigNum;
      proto.toByteArray = bnToByteArray;
      proto.equals = bnEquals;
      proto.min = bnMin;
      proto.max = bnMax;
      proto.and = bnAnd;
      proto.or = bnOr;
      proto.xor = bnXor;
      proto.andNot = bnAndNot;
      proto.not = bnNot;
      proto.shiftLeft = bnShiftLeft;
      proto.shiftRight = bnShiftRight;
      proto.getLowestSetBit = bnGetLowestSetBit;
      proto.bitCount = bnBitCount;
      proto.testBit = bnTestBit;
      proto.setBit = bnSetBit;
      proto.clearBit = bnClearBit;
      proto.flipBit = bnFlipBit;
      proto.add = bnAdd;
      proto.subtract = bnSubtract;
      proto.multiply = bnMultiply;
      proto.divide = bnDivide;
      proto.remainder = bnRemainder;
      proto.divideAndRemainder = bnDivideAndRemainder;
      proto.modPow = bnModPow;
      proto.modInverse = bnModInverse;
      proto.pow = bnPow;
      proto.gcd = bnGCD;
      proto.isProbablePrime = bnIsProbablePrime;

      proto.square = bnSquare;

      BigInteger.ZERO = nbv(0);
      BigInteger.ONE = nbv(1);
      BigInteger.valueOf = nbv;

      module.exports = BigInteger;
    }, { "../package.json": 12 }], 10: [function (require, module, exports) {
      (function (Buffer) {
        var assert = require('assert');
        var BigInteger = require('./bigi');

        BigInteger.fromByteArrayUnsigned = function (byteArray) {
          if (byteArray[0] & 0x80) {
            return new BigInteger([0].concat(byteArray));
          }

          return new BigInteger(byteArray);
        };

        BigInteger.prototype.toByteArrayUnsigned = function () {
          var byteArray = this.toByteArray();
          return byteArray[0] === 0 ? byteArray.slice(1) : byteArray;
        };

        BigInteger.fromDERInteger = function (byteArray) {
          return new BigInteger(byteArray);
        };

        BigInteger.prototype.toDERInteger = BigInteger.prototype.toByteArray;

        BigInteger.fromBuffer = function (buffer) {
          if (buffer[0] & 0x80) {
            var byteArray = Array.prototype.slice.call(buffer);

            return new BigInteger([0].concat(byteArray));
          }

          return new BigInteger(buffer);
        };

        BigInteger.fromHex = function (hex) {
          if (hex === '') return BigInteger.ZERO;

          assert.equal(hex, hex.match(/^[A-Fa-f0-9]+/), 'Invalid hex string');
          assert.equal(hex.length % 2, 0, 'Incomplete hex');
          return new BigInteger(hex, 16);
        };

        BigInteger.prototype.toBuffer = function (size) {
          var byteArray = this.toByteArrayUnsigned();
          var zeros = [];

          var padding = size - byteArray.length;
          while (zeros.length < padding) zeros.push(0);

          return new Buffer(zeros.concat(byteArray));
        };

        BigInteger.prototype.toHex = function (size) {
          return this.toBuffer(size).toString('hex');
        };
      }).call(this, require("buffer").Buffer);
    }, { "./bigi": 9, "assert": 159, "buffer": 162 }], 11: [function (require, module, exports) {
      var BigInteger = require('./bigi');

      require('./convert');

      module.exports = BigInteger;
    }, { "./bigi": 9, "./convert": 10 }], 12: [function (require, module, exports) {
      module.exports = {
        "_from": "bigi@^1.4.0",
        "_id": "bigi@1.4.2",
        "_inBundle": false,
        "_integrity": "sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=",
        "_location": "/bigi",
        "_phantomChildren": {},
        "_requested": {
          "type": "range",
          "registry": true,
          "raw": "bigi@^1.4.0",
          "name": "bigi",
          "escapedName": "bigi",
          "rawSpec": "^1.4.0",
          "saveSpec": null,
          "fetchSpec": "^1.4.0"
        },
        "_requiredBy": ["/counterjs/bitcoinjs-lib", "/ecurve"],
        "_resolved": "https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz",
        "_shasum": "9c665a95f88b8b08fc05cfd731f561859d725825",
        "_spec": "bigi@^1.4.0",
        "_where": "/Users/a/Downloads/counterparty-p2sh-demo-master/node_modules/counterjs/node_modules/bitcoinjs-lib",
        "bugs": {
          "url": "https://github.com/cryptocoinjs/bigi/issues"
        },
        "bundleDependencies": false,
        "dependencies": {},
        "deprecated": false,
        "description": "Big integers.",
        "devDependencies": {
          "coveralls": "^2.11.2",
          "istanbul": "^0.3.5",
          "jshint": "^2.5.1",
          "mocha": "^2.1.0",
          "mochify": "^2.1.0"
        },
        "homepage": "https://github.com/cryptocoinjs/bigi#readme",
        "keywords": ["cryptography", "math", "bitcoin", "arbitrary", "precision", "arithmetic", "big", "integer", "int", "number", "biginteger", "bigint", "bignumber", "decimal", "float"],
        "main": "./lib/index.js",
        "name": "bigi",
        "repository": {
          "url": "git+https://github.com/cryptocoinjs/bigi.git",
          "type": "git"
        },
        "scripts": {
          "browser-test": "mochify --wd -R spec",
          "coverage": "istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",
          "coveralls": "npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info",
          "jshint": "jshint --config jshint.json lib/*.js ; true",
          "test": "_mocha -- test/*.js",
          "unit": "mocha"
        },
        "testling": {
          "files": "test/*.js",
          "harness": "mocha",
          "browsers": ["ie/9..latest", "firefox/latest", "chrome/latest", "safari/6.0..latest", "iphone/6.0..latest", "android-browser/4.2..latest"]
        },
        "version": "1.4.2"
      };
    }, {}], 13: [function (require, module, exports) {

      var Buffer = require('safe-buffer').Buffer;

      function check(buffer) {
        if (buffer.length < 8) return false;
        if (buffer.length > 72) return false;
        if (buffer[0] !== 0x30) return false;
        if (buffer[1] !== buffer.length - 2) return false;
        if (buffer[2] !== 0x02) return false;

        var lenR = buffer[3];
        if (lenR === 0) return false;
        if (5 + lenR >= buffer.length) return false;
        if (buffer[4 + lenR] !== 0x02) return false;

        var lenS = buffer[5 + lenR];
        if (lenS === 0) return false;
        if (6 + lenR + lenS !== buffer.length) return false;

        if (buffer[4] & 0x80) return false;
        if (lenR > 1 && buffer[4] === 0x00 && !(buffer[5] & 0x80)) return false;

        if (buffer[lenR + 6] & 0x80) return false;
        if (lenS > 1 && buffer[lenR + 6] === 0x00 && !(buffer[lenR + 7] & 0x80)) return false;
        return true;
      }

      function decode(buffer) {
        if (buffer.length < 8) throw new Error('DER sequence length is too short');
        if (buffer.length > 72) throw new Error('DER sequence length is too long');
        if (buffer[0] !== 0x30) throw new Error('Expected DER sequence');
        if (buffer[1] !== buffer.length - 2) throw new Error('DER sequence length is invalid');
        if (buffer[2] !== 0x02) throw new Error('Expected DER integer');

        var lenR = buffer[3];
        if (lenR === 0) throw new Error('R length is zero');
        if (5 + lenR >= buffer.length) throw new Error('R length is too long');
        if (buffer[4 + lenR] !== 0x02) throw new Error('Expected DER integer (2)');

        var lenS = buffer[5 + lenR];
        if (lenS === 0) throw new Error('S length is zero');
        if (6 + lenR + lenS !== buffer.length) throw new Error('S length is invalid');

        if (buffer[4] & 0x80) throw new Error('R value is negative');
        if (lenR > 1 && buffer[4] === 0x00 && !(buffer[5] & 0x80)) throw new Error('R value excessively padded');

        if (buffer[lenR + 6] & 0x80) throw new Error('S value is negative');
        if (lenS > 1 && buffer[lenR + 6] === 0x00 && !(buffer[lenR + 7] & 0x80)) throw new Error('S value excessively padded');

        return {
          r: buffer.slice(4, 4 + lenR),
          s: buffer.slice(6 + lenR)
        };
      }

      function encode(r, s) {
        var lenR = r.length;
        var lenS = s.length;
        if (lenR === 0) throw new Error('R length is zero');
        if (lenS === 0) throw new Error('S length is zero');
        if (lenR > 33) throw new Error('R length is too long');
        if (lenS > 33) throw new Error('S length is too long');
        if (r[0] & 0x80) throw new Error('R value is negative');
        if (s[0] & 0x80) throw new Error('S value is negative');
        if (lenR > 1 && r[0] === 0x00 && !(r[1] & 0x80)) throw new Error('R value excessively padded');
        if (lenS > 1 && s[0] === 0x00 && !(s[1] & 0x80)) throw new Error('S value excessively padded');

        var signature = Buffer.allocUnsafe(6 + lenR + lenS);

        signature[0] = 0x30;
        signature[1] = signature.length - 2;
        signature[2] = 0x02;
        signature[3] = r.length;
        r.copy(signature, 4);
        signature[4 + lenR] = 0x02;
        signature[5 + lenR] = s.length;
        s.copy(signature, 6 + lenR);

        return signature;
      }

      module.exports = {
        check: check,
        decode: decode,
        encode: encode
      };
    }, { "safe-buffer": 61 }], 14: [function (require, module, exports) {
      var basex = require('base-x');
      var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

      module.exports = basex(ALPHABET);
    }, { "base-x": 8 }], 15: [function (require, module, exports) {
      (function (Buffer) {

        var base58 = require('bs58');
        var createHash = require('create-hash');

        function sha256x2(buffer) {
          var tmp = createHash('sha256').update(buffer).digest();
          return createHash('sha256').update(tmp).digest();
        }

        function encode(payload) {
          var checksum = sha256x2(payload);

          return base58.encode(Buffer.concat([payload, checksum], payload.length + 4));
        }

        function decodeRaw(buffer) {
          var payload = buffer.slice(0, -4);
          var checksum = buffer.slice(-4);
          var newChecksum = sha256x2(payload);

          if (checksum[0] ^ newChecksum[0] | checksum[1] ^ newChecksum[1] | checksum[2] ^ newChecksum[2] | checksum[3] ^ newChecksum[3]) return;

          return payload;
        }

        function decodeUnsafe(string) {
          var array = base58.decodeUnsafe(string);
          if (!array) return;

          var buffer = new Buffer(array);
          return decodeRaw(buffer);
        }

        function decode(string) {
          var array = base58.decode(string);
          var buffer = new Buffer(array);
          var payload = decodeRaw(buffer);
          if (!payload) throw new Error('Invalid checksum');
          return payload;
        }

        module.exports = {
          encode: encode,
          decode: decode,
          decodeUnsafe: decodeUnsafe,

          decodeRaw: decodeUnsafe
        };
      }).call(this, require("buffer").Buffer);
    }, { "bs58": 14, "buffer": 162, "create-hash": 41 }], 16: [function (require, module, exports) {
      module.exports = function (a, b) {
        if (typeof a.compare === 'function') return a.compare(b);
        if (a === b) return 0;

        var x = a.length;
        var y = b.length;

        var i = 0;
        var len = Math.min(x, y);
        while (i < len) {
          if (a[i] !== b[i]) break;

          ++i;
        }

        if (i !== len) {
          x = a[i];
          y = b[i];
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
    }, {}], 17: [function (require, module, exports) {
      (function (Buffer) {
        module.exports = function (a, b) {
          if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
            throw new TypeError('Arguments must be Buffers');
          }

          if (a === b) {
            return true;
          }

          if (typeof a.equals === 'function') {
            return a.equals(b);
          }

          if (a.length !== b.length) {
            return false;
          }

          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
              return false;
            }
          }

          return true;
        };
      }).call(this, { "isBuffer": require("../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js") });
    }, { "../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js": 169 }], 18: [function (require, module, exports) {
      (function (Buffer) {
        module.exports = function reverse(src) {
          var buffer = new Buffer(src.length);

          for (var i = 0, j = src.length - 1; i <= j; ++i, --j) {
            buffer[i] = src[j];
            buffer[j] = src[i];
          }

          return buffer;
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162 }], 19: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var Transform = require('stream').Transform;
      var StringDecoder = require('string_decoder').StringDecoder;
      var inherits = require('inherits');

      function CipherBase(hashMode) {
        Transform.call(this);
        this.hashMode = typeof hashMode === 'string';
        if (this.hashMode) {
          this[hashMode] = this._finalOrDigest;
        } else {
          this.final = this._finalOrDigest;
        }
        if (this._final) {
          this.__final = this._final;
          this._final = null;
        }
        this._decoder = null;
        this._encoding = null;
      }
      inherits(CipherBase, Transform);

      CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
        if (typeof data === 'string') {
          data = Buffer.from(data, inputEnc);
        }

        var outData = this._update(data);
        if (this.hashMode) return this;

        if (outputEnc) {
          outData = this._toString(outData, outputEnc);
        }

        return outData;
      };

      CipherBase.prototype.setAutoPadding = function () {};
      CipherBase.prototype.getAuthTag = function () {
        throw new Error('trying to get auth tag in unsupported state');
      };

      CipherBase.prototype.setAuthTag = function () {
        throw new Error('trying to set auth tag in unsupported state');
      };

      CipherBase.prototype.setAAD = function () {
        throw new Error('trying to set aad in unsupported state');
      };

      CipherBase.prototype._transform = function (data, _, next) {
        var err;
        try {
          if (this.hashMode) {
            this._update(data);
          } else {
            this.push(this._update(data));
          }
        } catch (e) {
          err = e;
        } finally {
          next(err);
        }
      };
      CipherBase.prototype._flush = function (done) {
        var err;
        try {
          this.push(this.__final());
        } catch (e) {
          err = e;
        }

        done(err);
      };
      CipherBase.prototype._finalOrDigest = function (outputEnc) {
        var outData = this.__final() || Buffer.alloc(0);
        if (outputEnc) {
          outData = this._toString(outData, outputEnc, true);
        }
        return outData;
      };

      CipherBase.prototype._toString = function (value, enc, fin) {
        if (!this._decoder) {
          this._decoder = new StringDecoder(enc);
          this._encoding = enc;
        }

        if (this._encoding !== enc) throw new Error('can\'t switch encodings');

        var out = this._decoder.write(value);
        if (fin) {
          out += this._decoder.end();
        }

        return out;
      };

      module.exports = CipherBase;
    }, { "inherits": 52, "safe-buffer": 61, "stream": 191, "string_decoder": 196 }], 20: [function (require, module, exports) {
      (function (Buffer) {
        var bs58check = require('bs58check');
        var bscript = require('./script');
        var networks = require('./networks');
        var typeforce = require('typeforce');
        var types = require('./types');

        function fromBase58Check(address) {
          var payload = bs58check.decode(address);
          if (payload.length < 21) throw new TypeError(address + ' is too short');
          if (payload.length > 21) throw new TypeError(address + ' is too long');

          var version = payload[0];
          var hash = payload.slice(1);

          return { hash: hash, version: version };
        }

        function fromOutputScript(scriptPubKey, network) {
          network = network || networks.bitcoin;

          if (bscript.isPubKeyHashOutput(scriptPubKey)) return toBase58Check(bscript.compile(scriptPubKey).slice(3, 23), network.pubKeyHash);
          if (bscript.isScriptHashOutput(scriptPubKey)) return toBase58Check(bscript.compile(scriptPubKey).slice(2, 22), network.scriptHash);

          throw new Error(bscript.toASM(scriptPubKey) + ' has no matching Address');
        }

        function toBase58Check(hash, version) {
          typeforce(types.tuple(types.Hash160bit, types.UInt8), arguments);

          var payload = new Buffer(21);
          payload.writeUInt8(version, 0);
          hash.copy(payload, 1);

          return bs58check.encode(payload);
        }

        function toOutputScript(address, network) {
          network = network || networks.bitcoin;

          var decode = fromBase58Check(address);
          if (decode.version === network.pubKeyHash) return bscript.pubKeyHashOutput(decode.hash);
          if (decode.version === network.scriptHash) return bscript.scriptHashOutput(decode.hash);

          throw new Error(address + ' has no matching Script');
        }

        module.exports = {
          fromBase58Check: fromBase58Check,
          fromOutputScript: fromOutputScript,
          toBase58Check: toBase58Check,
          toOutputScript: toOutputScript
        };
      }).call(this, require("buffer").Buffer);
    }, { "./networks": 30, "./script": 32, "./types": 36, "bs58check": 15, "buffer": 162, "typeforce": 72 }], 21: [function (require, module, exports) {
      (function (Buffer) {
        var createHash = require('create-hash');
        var bufferutils = require('./bufferutils');
        var bcrypto = require('./crypto');
        var bufferCompare = require('buffer-compare');
        var bufferReverse = require('buffer-reverse');

        var Transaction = require('./transaction');

        function Block() {
          this.version = 1;
          this.prevHash = null;
          this.merkleRoot = null;
          this.timestamp = 0;
          this.bits = 0;
          this.nonce = 0;
        }

        Block.fromBuffer = function (buffer) {
          if (buffer.length < 80) throw new Error('Buffer too small (< 80 bytes)');

          var offset = 0;
          function readSlice(n) {
            offset += n;
            return buffer.slice(offset - n, offset);
          }

          function readUInt32() {
            var i = buffer.readUInt32LE(offset);
            offset += 4;
            return i;
          }

          var block = new Block();
          block.version = readUInt32();
          block.prevHash = readSlice(32);
          block.merkleRoot = readSlice(32);
          block.timestamp = readUInt32();
          block.bits = readUInt32();
          block.nonce = readUInt32();

          if (buffer.length === 80) return block;

          function readVarInt() {
            var vi = bufferutils.readVarInt(buffer, offset);
            offset += vi.size;
            return vi.number;
          }

          function readTransaction() {
            var tx = Transaction.fromBuffer(buffer.slice(offset), true);

            offset += tx.byteLength();
            return tx;
          }

          var nTransactions = readVarInt();
          block.transactions = [];

          for (var i = 0; i < nTransactions; ++i) {
            var tx = readTransaction();
            block.transactions.push(tx);
          }

          return block;
        };

        Block.fromHex = function (hex) {
          return Block.fromBuffer(new Buffer(hex, 'hex'));
        };

        Block.prototype.getHash = function () {
          return bcrypto.hash256(this.toBuffer(true));
        };

        Block.prototype.getId = function () {
          return bufferReverse(this.getHash()).toString('hex');
        };

        Block.prototype.getUTCDate = function () {
          var date = new Date(0);
          date.setUTCSeconds(this.timestamp);

          return date;
        };

        Block.prototype.toBuffer = function (headersOnly) {
          var buffer = new Buffer(80);

          var offset = 0;
          function writeSlice(slice) {
            slice.copy(buffer, offset);
            offset += slice.length;
          }

          function writeUInt32(i) {
            buffer.writeUInt32LE(i, offset);
            offset += 4;
          }

          writeUInt32(this.version);
          writeSlice(this.prevHash);
          writeSlice(this.merkleRoot);
          writeUInt32(this.timestamp);
          writeUInt32(this.bits);
          writeUInt32(this.nonce);

          if (headersOnly || !this.transactions) return buffer;

          var txLenBuffer = bufferutils.varIntBuffer(this.transactions.length);
          var txBuffers = this.transactions.map(function (tx) {
            return tx.toBuffer();
          });

          return Buffer.concat([buffer, txLenBuffer].concat(txBuffers));
        };

        Block.prototype.toHex = function (headersOnly) {
          return this.toBuffer(headersOnly).toString('hex');
        };

        Block.calculateTarget = function (bits) {
          var exponent = ((bits & 0xff000000) >> 24) - 3;
          var mantissa = bits & 0x007fffff;
          var i = 31 - exponent;

          var target = new Buffer(32);
          target.fill(0);

          target[i] = mantissa & 0xff;
          target[i - 1] = mantissa >> 8;
          target[i - 2] = mantissa >> 16;
          target[i - 3] = mantissa >> 24;

          return target;
        };

        Block.calculateMerkleRoot = function (transactions) {
          var length = transactions.length;
          if (length === 0) throw TypeError('Cannot compute merkle root for zero transactions');

          var hashes = transactions.map(function (transaction) {
            return transaction.getHash();
          });

          while (length > 1) {
            var j = 0;

            for (var i = 0; i < length; i += 2, ++j) {
              var hasher = createHash('sha256');
              hasher.update(hashes[i]);
              hasher.update(i + 1 !== length ? hashes[i + 1] : hashes[i]);
              hashes[j] = bcrypto.sha256(hasher.digest());
            }

            length = j;
          }

          return hashes[0];
        };

        Block.prototype.checkMerkleRoot = function () {
          if (!this.transactions) return false;

          var actualMerkleRoot = Block.calculateMerkleRoot(this.transactions);
          return bufferCompare(this.merkleRoot, actualMerkleRoot) === 0;
        };

        Block.prototype.checkProofOfWork = function () {
          var hash = bufferReverse(this.getHash());
          var target = Block.calculateTarget(this.bits);

          return bufferCompare(hash, target) <= 0;
        };

        module.exports = Block;
      }).call(this, require("buffer").Buffer);
    }, { "./bufferutils": 22, "./crypto": 23, "./transaction": 34, "buffer": 162, "buffer-compare": 16, "buffer-reverse": 18, "create-hash": 41 }], 22: [function (require, module, exports) {
      (function (Buffer) {
        var opcodes = require('./opcodes.json');

        function verifuint(value, max) {
          if (typeof value !== 'number') throw new Error('cannot write a non-number as a number');
          if (value < 0) throw new Error('specified a negative value for writing an unsigned value');
          if (value > max) throw new Error('value is larger than maximum value for type');
          if (Math.floor(value) !== value) throw new Error('value has a fractional component');
        }

        function pushDataSize(i) {
          return i < opcodes.OP_PUSHDATA1 ? 1 : i <= 0xff ? 2 : i <= 0xffff ? 3 : 5;
        }

        function readPushDataInt(buffer, offset) {
          var opcode = buffer.readUInt8(offset);
          var number, size;

          if (opcode < opcodes.OP_PUSHDATA1) {
            number = opcode;
            size = 1;
          } else if (opcode === opcodes.OP_PUSHDATA1) {
            if (offset + 2 > buffer.length) return null;
            number = buffer.readUInt8(offset + 1);
            size = 2;
          } else if (opcode === opcodes.OP_PUSHDATA2) {
            if (offset + 3 > buffer.length) return null;
            number = buffer.readUInt16LE(offset + 1);
            size = 3;
          } else {
            if (offset + 5 > buffer.length) return null;
            if (opcode !== opcodes.OP_PUSHDATA4) throw new Error('Unexpected opcode');

            number = buffer.readUInt32LE(offset + 1);
            size = 5;
          }

          return {
            opcode: opcode,
            number: number,
            size: size
          };
        }

        function readUInt64LE(buffer, offset) {
          var a = buffer.readUInt32LE(offset);
          var b = buffer.readUInt32LE(offset + 4);
          b *= 0x100000000;

          verifuint(b + a, 0x001fffffffffffff);

          return b + a;
        }

        function readVarInt(buffer, offset) {
          var t = buffer.readUInt8(offset);
          var number, size;

          if (t < 253) {
            number = t;
            size = 1;
          } else if (t < 254) {
            number = buffer.readUInt16LE(offset + 1);
            size = 3;
          } else if (t < 255) {
            number = buffer.readUInt32LE(offset + 1);
            size = 5;
          } else {
            number = readUInt64LE(buffer, offset + 1);
            size = 9;
          }

          return {
            number: number,
            size: size
          };
        }

        function writePushDataInt(buffer, number, offset) {
          var size = pushDataSize(number);

          if (size === 1) {
            buffer.writeUInt8(number, offset);
          } else if (size === 2) {
            buffer.writeUInt8(opcodes.OP_PUSHDATA1, offset);
            buffer.writeUInt8(number, offset + 1);
          } else if (size === 3) {
            buffer.writeUInt8(opcodes.OP_PUSHDATA2, offset);
            buffer.writeUInt16LE(number, offset + 1);
          } else {
            buffer.writeUInt8(opcodes.OP_PUSHDATA4, offset);
            buffer.writeUInt32LE(number, offset + 1);
          }

          return size;
        }

        function writeUInt64LE(buffer, value, offset) {
          verifuint(value, 0x001fffffffffffff);

          buffer.writeInt32LE(value & -1, offset);
          buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
        }

        function varIntSize(i) {
          return i < 253 ? 1 : i < 0x10000 ? 3 : i < 0x100000000 ? 5 : 9;
        }

        function writeVarInt(buffer, number, offset) {
          var size = varIntSize(number);

          if (size === 1) {
            buffer.writeUInt8(number, offset);
          } else if (size === 3) {
            buffer.writeUInt8(253, offset);
            buffer.writeUInt16LE(number, offset + 1);
          } else if (size === 5) {
            buffer.writeUInt8(254, offset);
            buffer.writeUInt32LE(number, offset + 1);
          } else {
            buffer.writeUInt8(255, offset);
            writeUInt64LE(buffer, number, offset + 1);
          }

          return size;
        }

        function varIntBuffer(i) {
          var size = varIntSize(i);
          var buffer = new Buffer(size);
          writeVarInt(buffer, i, 0);

          return buffer;
        }

        module.exports = {
          equal: require('buffer-equals'),
          pushDataSize: pushDataSize,
          readPushDataInt: readPushDataInt,
          readUInt64LE: readUInt64LE,
          readVarInt: readVarInt,
          reverse: require('buffer-reverse'),
          varIntBuffer: varIntBuffer,
          varIntSize: varIntSize,
          writePushDataInt: writePushDataInt,
          writeUInt64LE: writeUInt64LE,
          writeVarInt: writeVarInt
        };
      }).call(this, require("buffer").Buffer);
    }, { "./opcodes.json": 31, "buffer": 162, "buffer-equals": 17, "buffer-reverse": 18 }], 23: [function (require, module, exports) {
      var createHash = require('create-hash');

      function hash160(buffer) {
        return ripemd160(sha256(buffer));
      }

      function hash256(buffer) {
        return sha256(sha256(buffer));
      }

      function ripemd160(buffer) {
        return createHash('rmd160').update(buffer).digest();
      }

      function sha1(buffer) {
        return createHash('sha1').update(buffer).digest();
      }

      function sha256(buffer) {
        return createHash('sha256').update(buffer).digest();
      }

      module.exports = {
        hash160: hash160,
        hash256: hash256,
        ripemd160: ripemd160,
        sha1: sha1,
        sha256: sha256
      };
    }, { "create-hash": 41 }], 24: [function (require, module, exports) {
      (function (Buffer) {
        var createHmac = require('create-hmac');
        var typeforce = require('typeforce');
        var types = require('./types');

        var BigInteger = require('bigi');
        var ECSignature = require('./ecsignature');

        var ZERO = new Buffer([0]);
        var ONE = new Buffer([1]);

        var ecurve = require('ecurve');
        var secp256k1 = ecurve.getCurveByName('secp256k1');

        function deterministicGenerateK(hash, x, checkSig) {
          typeforce(types.tuple(types.Hash256bit, types.Buffer256bit, types.Function), arguments);

          var k = new Buffer(32);
          var v = new Buffer(32);

          v.fill(1);

          k.fill(0);

          k = createHmac('sha256', k).update(v).update(ZERO).update(x).update(hash).digest();

          v = createHmac('sha256', k).update(v).digest();

          k = createHmac('sha256', k).update(v).update(ONE).update(x).update(hash).digest();

          v = createHmac('sha256', k).update(v).digest();

          v = createHmac('sha256', k).update(v).digest();

          var T = BigInteger.fromBuffer(v);

          while (T.signum() <= 0 || T.compareTo(secp256k1.n) >= 0 || !checkSig(T)) {
            k = createHmac('sha256', k).update(v).update(ZERO).digest();

            v = createHmac('sha256', k).update(v).digest();

            v = createHmac('sha256', k).update(v).digest();
            T = BigInteger.fromBuffer(v);
          }

          return T;
        }

        var N_OVER_TWO = secp256k1.n.shiftRight(1);

        function sign(hash, d) {
          typeforce(types.tuple(types.Hash256bit, types.BigInt), arguments);

          var x = d.toBuffer(32);
          var e = BigInteger.fromBuffer(hash);
          var n = secp256k1.n;
          var G = secp256k1.G;

          var r, s;
          deterministicGenerateK(hash, x, function (k) {
            var Q = G.multiply(k);

            if (secp256k1.isInfinity(Q)) return false;

            r = Q.affineX.mod(n);
            if (r.signum() === 0) return false;

            s = k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);
            if (s.signum() === 0) return false;

            return true;
          });

          if (s.compareTo(N_OVER_TWO) > 0) {
            s = n.subtract(s);
          }

          return new ECSignature(r, s);
        }

        function verify(hash, signature, Q) {
          typeforce(types.tuple(types.Hash256bit, types.ECSignature, types.ECPoint), arguments);

          var n = secp256k1.n;
          var G = secp256k1.G;

          var r = signature.r;
          var s = signature.s;

          if (r.signum() <= 0 || r.compareTo(n) >= 0) return false;
          if (s.signum() <= 0 || s.compareTo(n) >= 0) return false;

          var e = BigInteger.fromBuffer(hash);

          var sInv = s.modInverse(n);

          var u1 = e.multiply(sInv).mod(n);
          var u2 = r.multiply(sInv).mod(n);

          var R = G.multiplyTwo(u1, Q, u2);

          if (secp256k1.isInfinity(R)) return false;

          var xR = R.affineX;

          var v = xR.mod(n);

          return v.equals(r);
        }

        function recoverPubKey(e, signature, i) {
          typeforce(types.tuple(types.BigInt, types.ECSignature, types.UInt2), arguments);

          var n = secp256k1.n;
          var G = secp256k1.G;
          var r = signature.r;
          var s = signature.s;

          if (r.signum() <= 0 || r.compareTo(n) >= 0) throw new Error('Invalid r value');
          if (s.signum() <= 0 || s.compareTo(n) >= 0) throw new Error('Invalid s value');

          var isYOdd = i & 1;

          var isSecondKey = i >> 1;

          var x = isSecondKey ? r.add(n) : r;
          var R = secp256k1.pointFromX(isYOdd, x);

          var nR = R.multiply(n);
          if (!secp256k1.isInfinity(nR)) throw new Error('nR is not a valid curve point');

          var rInv = r.modInverse(n);

          var eNeg = e.negate().mod(n);

          var Q = R.multiplyTwo(s, G, eNeg).multiply(rInv);

          secp256k1.validate(Q);

          return Q;
        }

        function calcPubKeyRecoveryParam(e, signature, Q) {
          typeforce(types.tuple(types.BigInt, types.ECSignature, types.ECPoint), arguments);

          for (var i = 0; i < 4; i++) {
            var Qprime = recoverPubKey(e, signature, i);

            if (Qprime.equals(Q)) {
              return i;
            }
          }

          throw new Error('Unable to find valid recovery factor');
        }

        module.exports = {
          calcPubKeyRecoveryParam: calcPubKeyRecoveryParam,
          deterministicGenerateK: deterministicGenerateK,
          recoverPubKey: recoverPubKey,
          sign: sign,
          verify: verify,

          __curve: secp256k1
        };
      }).call(this, require("buffer").Buffer);
    }, { "./ecsignature": 26, "./types": 36, "bigi": 11, "buffer": 162, "create-hmac": 44, "ecurve": 48, "typeforce": 72 }], 25: [function (require, module, exports) {
      var baddress = require('./address');
      var bcrypto = require('./crypto');
      var ecdsa = require('./ecdsa');
      var randomBytes = require('randombytes');
      var typeforce = require('typeforce');
      var types = require('./types');
      var wif = require('wif');

      var NETWORKS = require('./networks');
      var BigInteger = require('bigi');

      var ecurve = require('ecurve');
      var secp256k1 = ecdsa.__curve;

      function ECPair(d, Q, options) {
        if (options) {
          typeforce({
            compressed: types.maybe(types.Boolean),
            network: types.maybe(types.Network)
          }, options);
        }

        options = options || {};

        if (d) {
          if (d.signum() <= 0) throw new Error('Private key must be greater than 0');
          if (d.compareTo(secp256k1.n) >= 0) throw new Error('Private key must be less than the curve order');
          if (Q) throw new TypeError('Unexpected publicKey parameter');

          this.d = d;
        } else {
          typeforce(types.ECPoint, Q);

          this.__Q = Q;
        }

        this.compressed = options.compressed === undefined ? true : options.compressed;
        this.network = options.network || NETWORKS.bitcoin;
      }

      Object.defineProperty(ECPair.prototype, 'Q', {
        get: function () {
          if (!this.__Q && this.d) {
            this.__Q = secp256k1.G.multiply(this.d);
          }

          return this.__Q;
        }
      });

      ECPair.fromPublicKeyBuffer = function (buffer, network) {
        var Q = ecurve.Point.decodeFrom(secp256k1, buffer);

        return new ECPair(null, Q, {
          compressed: Q.compressed,
          network: network
        });
      };

      ECPair.fromWIF = function (string, network) {
        var decoded = wif.decode(string);
        var version = decoded.version;

        if (types.Array(network)) {
          network = network.filter(function (network) {
            return version === network.wif;
          }).pop();

          if (!network) throw new Error('Unknown network version');
        } else {
          network = network || NETWORKS.bitcoin;

          if (version !== network.wif) throw new Error('Invalid network version');
        }

        var d = BigInteger.fromBuffer(decoded.privateKey);

        return new ECPair(d, null, {
          compressed: decoded.compressed,
          network: network
        });
      };

      ECPair.makeRandom = function (options) {
        options = options || {};

        var rng = options.rng || randomBytes;

        var d;
        do {
          var buffer = rng(32);
          typeforce(types.Buffer256bit, buffer);

          d = BigInteger.fromBuffer(buffer);
        } while (d.signum() <= 0 || d.compareTo(secp256k1.n) >= 0);

        return new ECPair(d, null, options);
      };

      ECPair.prototype.getAddress = function () {
        return baddress.toBase58Check(bcrypto.hash160(this.getPublicKeyBuffer()), this.getNetwork().pubKeyHash);
      };

      ECPair.prototype.getNetwork = function () {
        return this.network;
      };

      ECPair.prototype.getPublicKeyBuffer = function () {
        return this.Q.getEncoded(this.compressed);
      };

      ECPair.prototype.sign = function (hash) {
        if (!this.d) throw new Error('Missing private key');

        return ecdsa.sign(hash, this.d);
      };

      ECPair.prototype.toWIF = function () {
        if (!this.d) throw new Error('Missing private key');

        return wif.encode(this.network.wif, this.d.toBuffer(32), this.compressed);
      };

      ECPair.prototype.verify = function (hash, signature) {
        return ecdsa.verify(hash, signature, this.Q);
      };

      module.exports = ECPair;
    }, { "./address": 20, "./crypto": 23, "./ecdsa": 24, "./networks": 30, "./types": 36, "bigi": 11, "ecurve": 48, "randombytes": 59, "typeforce": 72, "wif": 74 }], 26: [function (require, module, exports) {
      (function (Buffer) {
        var bip66 = require('bip66');
        var typeforce = require('typeforce');
        var types = require('./types');

        var BigInteger = require('bigi');

        function ECSignature(r, s) {
          typeforce(types.tuple(types.BigInt, types.BigInt), arguments);

          this.r = r;
          this.s = s;
        }

        ECSignature.parseCompact = function (buffer) {
          if (buffer.length !== 65) throw new Error('Invalid signature length');

          var flagByte = buffer.readUInt8(0) - 27;
          if (flagByte !== (flagByte & 7)) throw new Error('Invalid signature parameter');

          var compressed = !!(flagByte & 4);
          var recoveryParam = flagByte & 3;

          var r = BigInteger.fromBuffer(buffer.slice(1, 33));
          var s = BigInteger.fromBuffer(buffer.slice(33));

          return {
            compressed: compressed,
            i: recoveryParam,
            signature: new ECSignature(r, s)
          };
        };

        ECSignature.fromDER = function (buffer) {
          var decode = bip66.decode(buffer);
          var r = BigInteger.fromDERInteger(decode.r);
          var s = BigInteger.fromDERInteger(decode.s);

          return new ECSignature(r, s);
        };

        ECSignature.parseScriptSignature = function (buffer) {
          var hashType = buffer.readUInt8(buffer.length - 1);
          var hashTypeMod = hashType & ~0x80;

          if (hashTypeMod <= 0x00 || hashTypeMod >= 0x04) throw new Error('Invalid hashType ' + hashType);

          return {
            signature: ECSignature.fromDER(buffer.slice(0, -1)),
            hashType: hashType
          };
        };

        ECSignature.prototype.toCompact = function (i, compressed) {
          if (compressed) {
            i += 4;
          }

          i += 27;

          var buffer = new Buffer(65);
          buffer.writeUInt8(i, 0);

          this.r.toBuffer(32).copy(buffer, 1);
          this.s.toBuffer(32).copy(buffer, 33);

          return buffer;
        };

        ECSignature.prototype.toDER = function () {
          var r = new Buffer(this.r.toDERInteger());
          var s = new Buffer(this.s.toDERInteger());

          return bip66.encode(r, s);
        };

        ECSignature.prototype.toScriptSignature = function (hashType) {
          var hashTypeMod = hashType & ~0x80;
          if (hashTypeMod <= 0 || hashTypeMod >= 4) throw new Error('Invalid hashType ' + hashType);

          var hashTypeBuffer = new Buffer(1);
          hashTypeBuffer.writeUInt8(hashType, 0);

          return Buffer.concat([this.toDER(), hashTypeBuffer]);
        };

        module.exports = ECSignature;
      }).call(this, require("buffer").Buffer);
    }, { "./types": 36, "bigi": 11, "bip66": 13, "buffer": 162, "typeforce": 72 }], 27: [function (require, module, exports) {
      (function (Buffer) {
        var base58check = require('bs58check');
        var bcrypto = require('./crypto');
        var createHmac = require('create-hmac');
        var typeforce = require('typeforce');
        var types = require('./types');
        var NETWORKS = require('./networks');

        var BigInteger = require('bigi');
        var ECPair = require('./ecpair');

        var ecurve = require('ecurve');
        var curve = ecurve.getCurveByName('secp256k1');

        function HDNode(keyPair, chainCode) {
          typeforce(types.tuple('ECPair', types.Buffer256bit), arguments);

          if (!keyPair.compressed) throw new TypeError('BIP32 only allows compressed keyPairs');

          this.keyPair = keyPair;
          this.chainCode = chainCode;
          this.depth = 0;
          this.index = 0;
          this.parentFingerprint = 0x00000000;
        }

        HDNode.HIGHEST_BIT = 0x80000000;
        HDNode.LENGTH = 78;
        HDNode.MASTER_SECRET = new Buffer('Bitcoin seed');

        HDNode.fromSeedBuffer = function (seed, network) {
          typeforce(types.tuple(types.Buffer, types.maybe(types.Network)), arguments);

          if (seed.length < 16) throw new TypeError('Seed should be at least 128 bits');
          if (seed.length > 64) throw new TypeError('Seed should be at most 512 bits');

          var I = createHmac('sha512', HDNode.MASTER_SECRET).update(seed).digest();
          var IL = I.slice(0, 32);
          var IR = I.slice(32);

          var pIL = BigInteger.fromBuffer(IL);
          var keyPair = new ECPair(pIL, null, {
            network: network
          });

          return new HDNode(keyPair, IR);
        };

        HDNode.fromSeedHex = function (hex, network) {
          return HDNode.fromSeedBuffer(new Buffer(hex, 'hex'), network);
        };

        HDNode.fromBase58 = function (string, networks) {
          var buffer = base58check.decode(string);
          if (buffer.length !== 78) throw new Error('Invalid buffer length');

          var version = buffer.readUInt32BE(0);
          var network;

          if (Array.isArray(networks)) {
            network = networks.filter(function (network) {
              return version === network.bip32.private || version === network.bip32.public;
            }).pop();

            if (!network) throw new Error('Unknown network version');
          } else {
            network = networks || NETWORKS.bitcoin;
          }

          if (version !== network.bip32.private && version !== network.bip32.public) throw new Error('Invalid network version');

          var depth = buffer[4];

          var parentFingerprint = buffer.readUInt32BE(5);
          if (depth === 0) {
            if (parentFingerprint !== 0x00000000) throw new Error('Invalid parent fingerprint');
          }

          var index = buffer.readUInt32BE(9);
          if (depth === 0 && index !== 0) throw new Error('Invalid index');

          var chainCode = buffer.slice(13, 45);
          var keyPair;

          if (version === network.bip32.private) {
            if (buffer.readUInt8(45) !== 0x00) throw new Error('Invalid private key');

            var d = BigInteger.fromBuffer(buffer.slice(46, 78));

            keyPair = new ECPair(d, null, {
              network: network
            });
          } else {
            var Q = ecurve.Point.decodeFrom(curve, buffer.slice(45, 78));
            if (!Q.compressed) throw new Error('Invalid public key');

            curve.validate(Q);

            keyPair = new ECPair(null, Q, {
              network: network
            });
          }

          var hd = new HDNode(keyPair, chainCode);
          hd.depth = depth;
          hd.index = index;
          hd.parentFingerprint = parentFingerprint;

          return hd;
        };

        HDNode.prototype.getAddress = function () {
          return this.keyPair.getAddress();
        };

        HDNode.prototype.getIdentifier = function () {
          return bcrypto.hash160(this.keyPair.getPublicKeyBuffer());
        };

        HDNode.prototype.getFingerprint = function () {
          return this.getIdentifier().slice(0, 4);
        };

        HDNode.prototype.getNetwork = function () {
          return this.keyPair.getNetwork();
        };

        HDNode.prototype.getPublicKeyBuffer = function () {
          return this.keyPair.getPublicKeyBuffer();
        };

        HDNode.prototype.neutered = function () {
          var neuteredKeyPair = new ECPair(null, this.keyPair.Q, {
            network: this.keyPair.network
          });

          var neutered = new HDNode(neuteredKeyPair, this.chainCode);
          neutered.depth = this.depth;
          neutered.index = this.index;
          neutered.parentFingerprint = this.parentFingerprint;

          return neutered;
        };

        HDNode.prototype.sign = function (hash) {
          return this.keyPair.sign(hash);
        };

        HDNode.prototype.verify = function (hash, signature) {
          return this.keyPair.verify(hash, signature);
        };

        HDNode.prototype.toBase58 = function (__isPrivate) {
          if (__isPrivate !== undefined) throw new TypeError('Unsupported argument in 2.0.0');

          var network = this.keyPair.network;
          var version = !this.isNeutered() ? network.bip32.private : network.bip32.public;
          var buffer = new Buffer(78);

          buffer.writeUInt32BE(version, 0);

          buffer.writeUInt8(this.depth, 4);

          buffer.writeUInt32BE(this.parentFingerprint, 5);

          buffer.writeUInt32BE(this.index, 9);

          this.chainCode.copy(buffer, 13);

          if (!this.isNeutered()) {
            buffer.writeUInt8(0, 45);
            this.keyPair.d.toBuffer(32).copy(buffer, 46);
          } else {
            this.keyPair.getPublicKeyBuffer().copy(buffer, 45);
          }

          return base58check.encode(buffer);
        };

        HDNode.prototype.derive = function (index) {
          typeforce(types.UInt32, index);

          var isHardened = index >= HDNode.HIGHEST_BIT;
          var data = new Buffer(37);

          if (isHardened) {
            if (this.isNeutered()) throw new TypeError('Could not derive hardened child key');

            data[0] = 0x00;
            this.keyPair.d.toBuffer(32).copy(data, 1);
            data.writeUInt32BE(index, 33);
          } else {
            this.keyPair.getPublicKeyBuffer().copy(data, 0);
            data.writeUInt32BE(index, 33);
          }

          var I = createHmac('sha512', this.chainCode).update(data).digest();
          var IL = I.slice(0, 32);
          var IR = I.slice(32);

          var pIL = BigInteger.fromBuffer(IL);

          if (pIL.compareTo(curve.n) >= 0) {
            return this.derive(index + 1);
          }

          var derivedKeyPair;
          if (!this.isNeutered()) {
            var ki = pIL.add(this.keyPair.d).mod(curve.n);

            if (ki.signum() === 0) {
              return this.derive(index + 1);
            }

            derivedKeyPair = new ECPair(ki, null, {
              network: this.keyPair.network
            });
          } else {
            var Ki = curve.G.multiply(pIL).add(this.keyPair.Q);

            if (curve.isInfinity(Ki)) {
              return this.derive(index + 1);
            }

            derivedKeyPair = new ECPair(null, Ki, {
              network: this.keyPair.network
            });
          }

          var hd = new HDNode(derivedKeyPair, IR);
          hd.depth = this.depth + 1;
          hd.index = index;
          hd.parentFingerprint = this.getFingerprint().readUInt32BE(0);

          return hd;
        };

        HDNode.prototype.deriveHardened = function (index) {
          typeforce(types.UInt31, index);

          return this.derive(index + HDNode.HIGHEST_BIT);
        };

        HDNode.prototype.isNeutered = function () {
          return !this.keyPair.d;
        };

        HDNode.prototype.derivePath = function (path) {
          typeforce(types.Bip32Path, path);

          var splitPath = path.split('/');
          if (splitPath[0] === 'm') {
            if (this.parentFingerprint) {
              throw new Error('Not a master node');
            }

            splitPath = splitPath.slice(1);
          }

          return splitPath.reduce(function (prevHd, indexStr) {
            var index;
            if (indexStr.slice(-1) === "'") {
              index = parseInt(indexStr.slice(0, -1), 10);
              return prevHd.deriveHardened(index);
            } else {
              index = parseInt(indexStr, 10);
              return prevHd.derive(index);
            }
          }, this);
        };

        HDNode.prototype.toString = HDNode.prototype.toBase58;

        module.exports = HDNode;
      }).call(this, require("buffer").Buffer);
    }, { "./crypto": 23, "./ecpair": 25, "./networks": 30, "./types": 36, "bigi": 11, "bs58check": 15, "buffer": 162, "create-hmac": 44, "ecurve": 48, "typeforce": 72 }], 28: [function (require, module, exports) {
      module.exports = {
        Block: require('./block'),
        ECPair: require('./ecpair'),
        ECSignature: require('./ecsignature'),
        HDNode: require('./hdnode'),
        Transaction: require('./transaction'),
        TransactionBuilder: require('./transaction_builder'),

        address: require('./address'),
        bufferutils: require('./bufferutils'),
        crypto: require('./crypto'),
        message: require('./message'),
        networks: require('./networks'),
        opcodes: require('./opcodes.json'),
        script: require('./script')
      };
    }, { "./address": 20, "./block": 21, "./bufferutils": 22, "./crypto": 23, "./ecpair": 25, "./ecsignature": 26, "./hdnode": 27, "./message": 29, "./networks": 30, "./opcodes.json": 31, "./script": 32, "./transaction": 34, "./transaction_builder": 35 }], 29: [function (require, module, exports) {
      (function (Buffer) {
        var bufferutils = require('./bufferutils');
        var bcrypto = require('./crypto');
        var ecdsa = require('./ecdsa');
        var networks = require('./networks');

        var BigInteger = require('bigi');
        var ECPair = require('./ecpair');
        var ECSignature = require('./ecsignature');

        function magicHash(message, network) {
          var messagePrefix = new Buffer(network.messagePrefix);
          var messageBuffer = new Buffer(message);
          var lengthBuffer = bufferutils.varIntBuffer(messageBuffer.length);

          var buffer = Buffer.concat([messagePrefix, lengthBuffer, messageBuffer]);
          return bcrypto.hash256(buffer);
        }

        function sign(keyPair, message, network) {
          network = network || networks.bitcoin;

          var hash = magicHash(message, network);
          var signature = keyPair.sign(hash);
          var e = BigInteger.fromBuffer(hash);
          var i = ecdsa.calcPubKeyRecoveryParam(e, signature, keyPair.Q);

          return signature.toCompact(i, keyPair.compressed);
        }

        function verify(address, signature, message, network) {
          if (!Buffer.isBuffer(signature)) {
            signature = new Buffer(signature, 'base64');
          }

          network = network || networks.bitcoin;

          var hash = magicHash(message, network);
          var parsed = ECSignature.parseCompact(signature);
          var e = BigInteger.fromBuffer(hash);
          var Q = ecdsa.recoverPubKey(e, parsed.signature, parsed.i);

          var keyPair = new ECPair(null, Q, {
            compressed: parsed.compressed,
            network: network
          });

          return keyPair.getAddress() === address;
        }

        module.exports = {
          magicHash: magicHash,
          sign: sign,
          verify: verify
        };
      }).call(this, require("buffer").Buffer);
    }, { "./bufferutils": 22, "./crypto": 23, "./ecdsa": 24, "./ecpair": 25, "./ecsignature": 26, "./networks": 30, "bigi": 11, "buffer": 162 }], 30: [function (require, module, exports) {

      module.exports = {
        bitcoin: {
          messagePrefix: '\x18Bitcoin Signed Message:\n',
          bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
          },
          pubKeyHash: 0x00,
          scriptHash: 0x05,
          wif: 0x80,
          dustThreshold: 546 },
        testnet: {
          messagePrefix: '\x18Bitcoin Signed Message:\n',
          bip32: {
            public: 0x043587cf,
            private: 0x04358394
          },
          pubKeyHash: 0x6f,
          scriptHash: 0xc4,
          wif: 0xef,
          dustThreshold: 546
        },
        litecoin: {
          messagePrefix: '\x19Litecoin Signed Message:\n',
          bip32: {
            public: 0x019da462,
            private: 0x019d9cfe
          },
          pubKeyHash: 0x30,
          scriptHash: 0x05,
          wif: 0xb0,
          dustThreshold: 0 },
        dogecoin: {
          messagePrefix: '\x19Dogecoin Signed Message:\n',
          bip32: {
            public: 0x02facafd,
            private: 0x02fac398
          },
          pubKeyHash: 0x1e,
          scriptHash: 0x16,
          wif: 0x9e,
          dustThreshold: 0 }
      };
    }, {}], 31: [function (require, module, exports) {
      module.exports = {
        "OP_FALSE": 0,
        "OP_0": 0,
        "OP_PUSHDATA1": 76,
        "OP_PUSHDATA2": 77,
        "OP_PUSHDATA4": 78,
        "OP_1NEGATE": 79,
        "OP_RESERVED": 80,
        "OP_1": 81,
        "OP_TRUE": 81,
        "OP_2": 82,
        "OP_3": 83,
        "OP_4": 84,
        "OP_5": 85,
        "OP_6": 86,
        "OP_7": 87,
        "OP_8": 88,
        "OP_9": 89,
        "OP_10": 90,
        "OP_11": 91,
        "OP_12": 92,
        "OP_13": 93,
        "OP_14": 94,
        "OP_15": 95,
        "OP_16": 96,

        "OP_NOP": 97,
        "OP_VER": 98,
        "OP_IF": 99,
        "OP_NOTIF": 100,
        "OP_VERIF": 101,
        "OP_VERNOTIF": 102,
        "OP_ELSE": 103,
        "OP_ENDIF": 104,
        "OP_VERIFY": 105,
        "OP_RETURN": 106,

        "OP_TOALTSTACK": 107,
        "OP_FROMALTSTACK": 108,
        "OP_2DROP": 109,
        "OP_2DUP": 110,
        "OP_3DUP": 111,
        "OP_2OVER": 112,
        "OP_2ROT": 113,
        "OP_2SWAP": 114,
        "OP_IFDUP": 115,
        "OP_DEPTH": 116,
        "OP_DROP": 117,
        "OP_DUP": 118,
        "OP_NIP": 119,
        "OP_OVER": 120,
        "OP_PICK": 121,
        "OP_ROLL": 122,
        "OP_ROT": 123,
        "OP_SWAP": 124,
        "OP_TUCK": 125,

        "OP_CAT": 126,
        "OP_SUBSTR": 127,
        "OP_LEFT": 128,
        "OP_RIGHT": 129,
        "OP_SIZE": 130,

        "OP_INVERT": 131,
        "OP_AND": 132,
        "OP_OR": 133,
        "OP_XOR": 134,
        "OP_EQUAL": 135,
        "OP_EQUALVERIFY": 136,
        "OP_RESERVED1": 137,
        "OP_RESERVED2": 138,

        "OP_1ADD": 139,
        "OP_1SUB": 140,
        "OP_2MUL": 141,
        "OP_2DIV": 142,
        "OP_NEGATE": 143,
        "OP_ABS": 144,
        "OP_NOT": 145,
        "OP_0NOTEQUAL": 146,
        "OP_ADD": 147,
        "OP_SUB": 148,
        "OP_MUL": 149,
        "OP_DIV": 150,
        "OP_MOD": 151,
        "OP_LSHIFT": 152,
        "OP_RSHIFT": 153,

        "OP_BOOLAND": 154,
        "OP_BOOLOR": 155,
        "OP_NUMEQUAL": 156,
        "OP_NUMEQUALVERIFY": 157,
        "OP_NUMNOTEQUAL": 158,
        "OP_LESSTHAN": 159,
        "OP_GREATERTHAN": 160,
        "OP_LESSTHANOREQUAL": 161,
        "OP_GREATERTHANOREQUAL": 162,
        "OP_MIN": 163,
        "OP_MAX": 164,

        "OP_WITHIN": 165,

        "OP_RIPEMD160": 166,
        "OP_SHA1": 167,
        "OP_SHA256": 168,
        "OP_HASH160": 169,
        "OP_HASH256": 170,
        "OP_CODESEPARATOR": 171,
        "OP_CHECKSIG": 172,
        "OP_CHECKSIGVERIFY": 173,
        "OP_CHECKMULTISIG": 174,
        "OP_CHECKMULTISIGVERIFY": 175,

        "OP_NOP1": 176,
        "OP_NOP2": 177,
        "OP_CHECKLOCKTIMEVERIFY": 177,

        "OP_NOP3": 178,
        "OP_NOP4": 179,
        "OP_NOP5": 180,
        "OP_NOP6": 181,
        "OP_NOP7": 182,
        "OP_NOP8": 183,
        "OP_NOP9": 184,
        "OP_NOP10": 185,

        "OP_PUBKEYHASH": 253,
        "OP_PUBKEY": 254,
        "OP_INVALIDOPCODE": 255
      };
    }, {}], 32: [function (require, module, exports) {
      (function (Buffer) {
        var bip66 = require('bip66');
        var bufferutils = require('./bufferutils');
        var typeforce = require('typeforce');
        var types = require('./types');

        var OPS = require('./opcodes.json');
        var REVERSE_OPS = function () {
          var result = {};
          for (var op in OPS) {
            var code = OPS[op];
            result[code] = op;
          }
          return result;
        }();

        var OP_INT_BASE = OPS.OP_RESERVED;

        function toASM(chunks) {
          if (Buffer.isBuffer(chunks)) {
            chunks = decompile(chunks);
          }

          return chunks.map(function (chunk) {
            if (Buffer.isBuffer(chunk)) return chunk.toString('hex');

            return REVERSE_OPS[chunk];
          }).join(' ');
        }

        function fromASM(asm) {
          typeforce(types.String, asm);

          return compile(asm.split(' ').map(function (chunkStr) {
            if (OPS[chunkStr] !== undefined) return OPS[chunkStr];

            return new Buffer(chunkStr, 'hex');
          }));
        }

        function compile(chunks) {
          if (Buffer.isBuffer(chunks)) return chunks;

          typeforce(types.Array, chunks);

          var bufferSize = chunks.reduce(function (accum, chunk) {
            if (Buffer.isBuffer(chunk)) {
              return accum + bufferutils.pushDataSize(chunk.length) + chunk.length;
            }

            return accum + 1;
          }, 0.0);

          var buffer = new Buffer(bufferSize);
          var offset = 0;

          chunks.forEach(function (chunk) {
            if (Buffer.isBuffer(chunk)) {
              offset += bufferutils.writePushDataInt(buffer, chunk.length, offset);

              chunk.copy(buffer, offset);
              offset += chunk.length;
            } else {
              buffer.writeUInt8(chunk, offset);
              offset += 1;
            }
          });

          if (offset !== buffer.length) throw new Error('Could not decode chunks');
          return buffer;
        }

        function decompile(buffer) {
          if (types.Array(buffer)) return buffer;

          typeforce(types.Buffer, buffer);

          var chunks = [];
          var i = 0;

          while (i < buffer.length) {
            var opcode = buffer[i];

            if (opcode > OPS.OP_0 && opcode <= OPS.OP_PUSHDATA4) {
              var d = bufferutils.readPushDataInt(buffer, i);

              if (d === null) return [];
              i += d.size;

              if (i + d.number > buffer.length) return [];

              var data = buffer.slice(i, i + d.number);
              i += d.number;

              chunks.push(data);
            } else {
              chunks.push(opcode);

              i += 1;
            }
          }

          return chunks;
        }

        function isCanonicalPubKey(buffer) {
          if (!Buffer.isBuffer(buffer)) return false;
          if (buffer.length < 33) return false;

          switch (buffer[0]) {
            case 0x02:
            case 0x03:
              return buffer.length === 33;
            case 0x04:
              return buffer.length === 65;
          }

          return false;
        }

        function isCanonicalSignature(buffer) {
          if (!Buffer.isBuffer(buffer)) return false;
          if (!isDefinedHashType(buffer[buffer.length - 1])) return false;

          return bip66.check(buffer.slice(0, -1));
        }

        function isDefinedHashType(hashType) {
          var hashTypeMod = hashType & ~0x80;

          return hashTypeMod > 0x00 && hashTypeMod < 0x04;
        }

        function isPubKeyHashInput(script) {
          var chunks = decompile(script);

          return chunks.length === 2 && isCanonicalSignature(chunks[0]) && isCanonicalPubKey(chunks[1]);
        }

        function isPubKeyHashOutput(script) {
          var buffer = compile(script);

          return buffer.length === 25 && buffer[0] === OPS.OP_DUP && buffer[1] === OPS.OP_HASH160 && buffer[2] === 0x14 && buffer[23] === OPS.OP_EQUALVERIFY && buffer[24] === OPS.OP_CHECKSIG;
        }

        function isPubKeyInput(script) {
          var chunks = decompile(script);

          return chunks.length === 1 && isCanonicalSignature(chunks[0]);
        }

        function isPubKeyOutput(script) {
          var chunks = decompile(script);

          return chunks.length === 2 && isCanonicalPubKey(chunks[0]) && chunks[1] === OPS.OP_CHECKSIG;
        }

        function isScriptHashInput(script, allowIncomplete) {
          var chunks = decompile(script);
          if (chunks.length < 2) return false;

          var lastChunk = chunks[chunks.length - 1];
          if (!Buffer.isBuffer(lastChunk)) return false;

          var scriptSigChunks = chunks.slice(0, -1);
          var redeemScriptChunks = decompile(lastChunk);

          if (redeemScriptChunks.length === 0) return false;

          return classifyInput(scriptSigChunks, allowIncomplete) === classifyOutput(redeemScriptChunks);
        }

        function isScriptHashOutput(script) {
          var buffer = compile(script);

          return buffer.length === 23 && buffer[0] === OPS.OP_HASH160 && buffer[1] === 0x14 && buffer[22] === OPS.OP_EQUAL;
        }

        function isWitnessPubKeyHashOutput(script) {
          var buffer = compile(script);

          return buffer.length === 22 && buffer[0] === OPS.OP_0 && buffer[1] === 0x14;
        }

        function isWitnessScriptHashOutput(script) {
          var buffer = compile(script);

          return buffer.length === 34 && buffer[0] === OPS.OP_0 && buffer[1] === 0x20;
        }

        function isMultisigInput(script, allowIncomplete) {
          var chunks = decompile(script);
          if (chunks.length < 2) return false;
          if (chunks[0] !== OPS.OP_0) return false;

          if (allowIncomplete) {
            return chunks.slice(1).every(function (chunk) {
              return chunk === OPS.OP_0 || isCanonicalSignature(chunk);
            });
          }

          return chunks.slice(1).every(isCanonicalSignature);
        }

        function isMultisigOutput(script) {
          var chunks = decompile(script);
          if (chunks.length < 4) return false;
          if (chunks[chunks.length - 1] !== OPS.OP_CHECKMULTISIG) return false;

          var mOp = chunks[0];
          var nOp = chunks[chunks.length - 2];

          if (!types.Number(mOp)) return false;
          if (!types.Number(nOp)) return false;

          var m = mOp - OP_INT_BASE;
          var n = nOp - OP_INT_BASE;

          if (m <= 0) return false;
          if (m > n) return false;
          if (n > 16) return false;
          if (n !== chunks.length - 3) return false;

          return chunks.slice(1, -2).every(isCanonicalPubKey);
        }

        function isNullDataOutput(script) {
          var chunks = decompile(script);
          return chunks[0] === OPS.OP_RETURN;
        }

        function classifyOutput(script) {
          var chunks = decompile(script);

          if (isWitnessPubKeyHashOutput(chunks)) {
            return 'witnesspubkeyhash';
          } else if (isWitnessScriptHashOutput(chunks)) {
            return 'witnessscripthash';
          } else if (isPubKeyHashOutput(chunks)) {
            return 'pubkeyhash';
          } else if (isScriptHashOutput(chunks)) {
            return 'scripthash';
          } else if (isMultisigOutput(chunks)) {
            return 'multisig';
          } else if (isPubKeyOutput(chunks)) {
            return 'pubkey';
          } else if (isNullDataOutput(chunks)) {
            return 'nulldata';
          }

          return 'nonstandard';
        }

        function classifyInput(script, allowIncomplete) {
          var chunks = decompile(script);

          if (isPubKeyHashInput(chunks)) {
            return 'pubkeyhash';
          } else if (isMultisigInput(chunks, allowIncomplete)) {
            return 'multisig';
          } else if (isScriptHashInput(chunks, allowIncomplete)) {
            return 'scripthash';
          } else if (isPubKeyInput(chunks)) {
            return 'pubkey';
          }

          return 'nonstandard';
        }

        function pubKeyOutput(pubKey) {
          return compile([pubKey, OPS.OP_CHECKSIG]);
        }

        function pubKeyHashOutput(pubKeyHash) {
          typeforce(types.Hash160bit, pubKeyHash);

          return compile([OPS.OP_DUP, OPS.OP_HASH160, pubKeyHash, OPS.OP_EQUALVERIFY, OPS.OP_CHECKSIG]);
        }

        function scriptHashOutput(scriptHash) {
          typeforce(types.Hash160bit, scriptHash);

          return compile([OPS.OP_HASH160, scriptHash, OPS.OP_EQUAL]);
        }

        function multisigOutput(m, pubKeys) {
          typeforce(types.tuple(types.Number, [types.Buffer]), arguments);

          var n = pubKeys.length;
          if (n < m) throw new Error('Not enough pubKeys provided');

          return compile([].concat(OP_INT_BASE + m, pubKeys, OP_INT_BASE + n, OPS.OP_CHECKMULTISIG));
        }

        function witnessPubKeyHashOutput(pubKeyHash) {
          typeforce(types.Hash160bit, pubKeyHash);

          return compile([OPS.OP_0, pubKeyHash]);
        }

        function witnessScriptHashOutput(scriptHash) {
          typeforce(types.Hash256bit, scriptHash);

          return compile([OPS.OP_0, scriptHash]);
        }

        function pubKeyInput(signature) {
          typeforce(types.Buffer, signature);

          return compile([signature]);
        }

        function pubKeyHashInput(signature, pubKey) {
          typeforce(types.tuple(types.Buffer, types.Buffer), arguments);

          return compile([signature, pubKey]);
        }

        function scriptHashInput(scriptSig, scriptPubKey) {
          var scriptSigChunks = decompile(scriptSig);
          var serializedScriptPubKey = compile(scriptPubKey);

          return compile([].concat(scriptSigChunks, serializedScriptPubKey));
        }

        function witnessScriptHashInput(scriptSig, scriptPubKey) {
          return scriptHashInput(scriptSig, scriptPubKey);
        }

        function multisigInput(signatures, scriptPubKey) {
          if (scriptPubKey) {
            var chunks = decompile(scriptPubKey);
            if (!isMultisigOutput(chunks)) throw new Error('Expected multisig scriptPubKey');

            var mOp = chunks[0];
            var nOp = chunks[chunks.length - 2];
            var m = mOp - OP_INT_BASE;
            var n = nOp - OP_INT_BASE;

            if (signatures.length < m) throw new Error('Not enough signatures provided');
            if (signatures.length > n) throw new Error('Too many signatures provided');
          }

          return compile([].concat(OPS.OP_0, signatures));
        }

        function nullDataOutput(data) {
          return compile([OPS.OP_RETURN, data]);
        }

        module.exports = {
          compile: compile,
          decompile: decompile,
          fromASM: fromASM,
          toASM: toASM,

          number: require('./script_number'),

          isCanonicalPubKey: isCanonicalPubKey,
          isCanonicalSignature: isCanonicalSignature,
          isDefinedHashType: isDefinedHashType,
          isPubKeyHashInput: isPubKeyHashInput,
          isPubKeyHashOutput: isPubKeyHashOutput,
          isPubKeyInput: isPubKeyInput,
          isPubKeyOutput: isPubKeyOutput,
          isScriptHashInput: isScriptHashInput,
          isScriptHashOutput: isScriptHashOutput,
          isWitnessPubKeyHashOutput: isWitnessPubKeyHashOutput,
          isWitnessScriptHashOutput: isWitnessScriptHashOutput,
          isMultisigInput: isMultisigInput,
          isMultisigOutput: isMultisigOutput,
          isNullDataOutput: isNullDataOutput,

          classifyOutput: classifyOutput,
          classifyInput: classifyInput,
          pubKeyOutput: pubKeyOutput,
          pubKeyHashOutput: pubKeyHashOutput,
          scriptHashOutput: scriptHashOutput,
          witnessPubKeyHashOutput: witnessPubKeyHashOutput,
          witnessScriptHashInput: witnessScriptHashInput,
          witnessScriptHashOutput: witnessScriptHashOutput,

          multisigOutput: multisigOutput,
          pubKeyInput: pubKeyInput,
          pubKeyHashInput: pubKeyHashInput,
          scriptHashInput: scriptHashInput,
          multisigInput: multisigInput,
          nullDataOutput: nullDataOutput
        };
      }).call(this, require("buffer").Buffer);
    }, { "./bufferutils": 22, "./opcodes.json": 31, "./script_number": 33, "./types": 36, "bip66": 13, "buffer": 162, "typeforce": 72 }], 33: [function (require, module, exports) {
      (function (Buffer) {
        function decode(buffer, maxLength, minimal) {
          maxLength = maxLength || 4;
          minimal = minimal === undefined ? true : minimal;

          var length = buffer.length;
          if (length === 0) return 0;
          if (length > maxLength) throw new TypeError('Script number overflow');
          if (minimal) {
            if ((buffer[length - 1] & 0x7f) === 0) {
              if (length <= 1 || (buffer[length - 2] & 0x80) === 0) throw new Error('Non-minimally encoded script number');
            }
          }

          if (length === 5) {
            var a = buffer.readUInt32LE(0);
            var b = buffer.readUInt8(4);

            if (b & 0x80) return -((b & ~0x80) * 0x100000000 + a);
            return b * 0x100000000 + a;
          }

          var result = 0;

          for (var i = 0; i < length; ++i) {
            result |= buffer[i] << 8 * i;
          }

          if (buffer[length - 1] & 0x80) return -(result & ~(0x80 << 8 * (length - 1)));
          return result;
        }

        function scriptNumSize(i) {
          return i > 0x7fffffff ? 5 : i > 0x7fffff ? 4 : i > 0x7fff ? 3 : i > 0x7f ? 2 : i > 0x00 ? 1 : 0;
        }

        function encode(number) {
          var value = Math.abs(number);
          var size = scriptNumSize(value);
          var buffer = new Buffer(size);
          var negative = number < 0;

          for (var i = 0; i < size; ++i) {
            buffer.writeUInt8(value & 0xff, i);
            value >>= 8;
          }

          if (buffer[size - 1] & 0x80) {
            buffer.writeUInt8(negative ? 0x80 : 0x00, size - 1);
          } else if (negative) {
            buffer[size - 1] |= 0x80;
          }

          return buffer;
        }

        module.exports = {
          decode: decode,
          encode: encode
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162 }], 34: [function (require, module, exports) {
      (function (Buffer) {
        var bcrypto = require('./crypto');
        var bscript = require('./script');
        var bufferutils = require('./bufferutils');
        var bufferReverse = require('buffer-reverse');
        var opcodes = require('./opcodes.json');
        var typeforce = require('typeforce');
        var types = require('./types');

        function Transaction() {
          this.version = 1;
          this.locktime = 0;
          this.ins = [];
          this.outs = [];
        }

        Transaction.DEFAULT_SEQUENCE = 0xffffffff;
        Transaction.SIGHASH_ALL = 0x01;
        Transaction.SIGHASH_NONE = 0x02;
        Transaction.SIGHASH_SINGLE = 0x03;
        Transaction.SIGHASH_ANYONECANPAY = 0x80;

        Transaction.fromBuffer = function (buffer, __noStrict) {
          var offset = 0;
          function readSlice(n) {
            offset += n;
            return buffer.slice(offset - n, offset);
          }

          function readUInt32() {
            var i = buffer.readUInt32LE(offset);
            offset += 4;
            return i;
          }

          function readUInt64() {
            var i = bufferutils.readUInt64LE(buffer, offset);
            offset += 8;
            return i;
          }

          function readVarInt() {
            var vi = bufferutils.readVarInt(buffer, offset);
            offset += vi.size;
            return vi.number;
          }

          function readScript() {
            return readSlice(readVarInt());
          }

          var tx = new Transaction();
          tx.version = readUInt32();

          var vinLen = readVarInt();
          for (var i = 0; i < vinLen; ++i) {
            tx.ins.push({
              hash: readSlice(32),
              index: readUInt32(),
              script: readScript(),
              sequence: readUInt32()
            });
          }

          var voutLen = readVarInt();
          for (i = 0; i < voutLen; ++i) {
            tx.outs.push({
              value: readUInt64(),
              script: readScript()
            });
          }

          tx.locktime = readUInt32();

          if (__noStrict) return tx;
          if (offset !== buffer.length) throw new Error('Transaction has unexpected data');

          return tx;
        };

        Transaction.fromHex = function (hex) {
          return Transaction.fromBuffer(new Buffer(hex, 'hex'));
        };

        Transaction.isCoinbaseHash = function (buffer) {
          typeforce(types.Hash256bit, buffer);
          for (var i = 0; i < 32; ++i) {
            if (buffer[i] !== 0) return false;
          }
          return true;
        };

        Transaction.prototype.isCoinbase = function () {
          return this.ins.length === 1 && Transaction.isCoinbaseHash(this.ins[0].hash);
        };

        var EMPTY_SCRIPT = new Buffer(0);

        Transaction.prototype.addInput = function (hash, index, sequence, scriptSig) {
          typeforce(types.tuple(types.Hash256bit, types.UInt32, types.maybe(types.UInt32), types.maybe(types.Buffer)), arguments);

          if (types.Null(sequence)) {
            sequence = Transaction.DEFAULT_SEQUENCE;
          }

          return this.ins.push({
            hash: hash,
            index: index,
            script: scriptSig || EMPTY_SCRIPT,
            sequence: sequence
          }) - 1;
        };

        Transaction.prototype.addOutput = function (scriptPubKey, value) {
          typeforce(types.tuple(types.Buffer, types.UInt53), arguments);

          return this.outs.push({
            script: scriptPubKey,
            value: value
          }) - 1;
        };

        Transaction.prototype.byteLength = function () {
          function scriptSize(someScript) {
            var length = someScript.length;

            return bufferutils.varIntSize(length) + length;
          }

          return 8 + bufferutils.varIntSize(this.ins.length) + bufferutils.varIntSize(this.outs.length) + this.ins.reduce(function (sum, input) {
            return sum + 40 + scriptSize(input.script);
          }, 0) + this.outs.reduce(function (sum, output) {
            return sum + 8 + scriptSize(output.script);
          }, 0);
        };

        Transaction.prototype.clone = function () {
          var newTx = new Transaction();
          newTx.version = this.version;
          newTx.locktime = this.locktime;

          newTx.ins = this.ins.map(function (txIn) {
            return {
              hash: txIn.hash,
              index: txIn.index,
              script: txIn.script,
              sequence: txIn.sequence
            };
          });

          newTx.outs = this.outs.map(function (txOut) {
            return {
              script: txOut.script,
              value: txOut.value
            };
          });

          return newTx;
        };

        var ONE = new Buffer('0000000000000000000000000000000000000000000000000000000000000001', 'hex');
        var VALUE_UINT64_MAX = new Buffer('ffffffffffffffff', 'hex');
        var BLANK_OUTPUT = {
          script: EMPTY_SCRIPT,
          valueBuffer: VALUE_UINT64_MAX
        };

        Transaction.prototype.hashForSignature = function (inIndex, prevOutScript, hashType) {
          typeforce(types.tuple(types.UInt32, types.Buffer, types.Number), arguments);

          if (inIndex >= this.ins.length) return ONE;

          var ourScript = bscript.compile(bscript.decompile(prevOutScript).filter(function (x) {
            return x !== opcodes.OP_CODESEPARATOR;
          }));

          var txTmp = this.clone();

          if ((hashType & 0x1f) === Transaction.SIGHASH_NONE) {
            txTmp.outs = [];

            txTmp.ins.forEach(function (input, i) {
              if (i === inIndex) return;

              input.sequence = 0;
            });
          } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE) {
            if (inIndex >= this.outs.length) return ONE;

            txTmp.outs.length = inIndex + 1;

            for (var i = 0; i < inIndex; i++) {
              txTmp.outs[i] = BLANK_OUTPUT;
            }

            txTmp.ins.forEach(function (input, i) {
              if (i === inIndex) return;

              input.sequence = 0;
            });
          }

          if (hashType & Transaction.SIGHASH_ANYONECANPAY) {
            txTmp.ins = [txTmp.ins[inIndex]];
            txTmp.ins[0].script = ourScript;
          } else {
            txTmp.ins.forEach(function (input) {
              input.script = EMPTY_SCRIPT;
            });
            txTmp.ins[inIndex].script = ourScript;
          }

          var buffer = new Buffer(txTmp.byteLength() + 4);
          buffer.writeInt32LE(hashType, buffer.length - 4);
          txTmp.toBuffer(buffer, 0);

          return bcrypto.hash256(buffer);
        };

        Transaction.prototype.getHash = function () {
          return bcrypto.hash256(this.toBuffer());
        };

        Transaction.prototype.getId = function () {
          return bufferReverse(this.getHash()).toString('hex');
        };

        Transaction.prototype.toBuffer = function (buffer, initialOffset) {
          if (!buffer) buffer = new Buffer(this.byteLength());

          var offset = initialOffset || 0;
          function writeSlice(slice) {
            slice.copy(buffer, offset);
            offset += slice.length;
          }

          function writeUInt32(i) {
            buffer.writeUInt32LE(i, offset);
            offset += 4;
          }

          function writeUInt64(i) {
            bufferutils.writeUInt64LE(buffer, i, offset);
            offset += 8;
          }

          function writeVarInt(i) {
            var n = bufferutils.writeVarInt(buffer, i, offset);
            offset += n;
          }

          writeUInt32(this.version);
          writeVarInt(this.ins.length);

          this.ins.forEach(function (txIn) {
            writeSlice(txIn.hash);
            writeUInt32(txIn.index);
            writeVarInt(txIn.script.length);
            writeSlice(txIn.script);
            writeUInt32(txIn.sequence);
          });

          writeVarInt(this.outs.length);
          this.outs.forEach(function (txOut) {
            if (!txOut.valueBuffer) {
              writeUInt64(txOut.value);
            } else {
              writeSlice(txOut.valueBuffer);
            }

            writeVarInt(txOut.script.length);
            writeSlice(txOut.script);
          });

          writeUInt32(this.locktime);

          if (initialOffset !== undefined) return buffer.slice(initialOffset, offset);

          return buffer;
        };

        Transaction.prototype.toHex = function () {
          return this.toBuffer().toString('hex');
        };

        Transaction.prototype.setInputScript = function (index, scriptSig) {
          typeforce(types.tuple(types.Number, types.Buffer), arguments);

          this.ins[index].script = scriptSig;
        };

        module.exports = Transaction;
      }).call(this, require("buffer").Buffer);
    }, { "./bufferutils": 22, "./crypto": 23, "./opcodes.json": 31, "./script": 32, "./types": 36, "buffer": 162, "buffer-reverse": 18, "typeforce": 72 }], 35: [function (require, module, exports) {
      (function (Buffer) {
        var baddress = require('./address');
        var bcrypto = require('./crypto');
        var bscript = require('./script');
        var bufferEquals = require('buffer-equals');
        var bufferReverse = require('buffer-reverse');
        var networks = require('./networks');
        var ops = require('./opcodes.json');
        var typeforce = require('typeforce');
        var types = require('./types');

        var ECPair = require('./ecpair');
        var ECSignature = require('./ecsignature');
        var Transaction = require('./transaction');

        function fixMSSignatures(transaction, vin, pubKeys, signatures, prevOutScript, hashType, skipPubKey) {
          var unmatched = signatures.slice();
          var cache = {};

          return pubKeys.map(function (pubKey) {
            if (skipPubKey && bufferEquals(skipPubKey, pubKey)) return undefined;

            var matched;
            var keyPair2 = ECPair.fromPublicKeyBuffer(pubKey);

            unmatched.some(function (signature, i) {
              if (!signature) return false;

              var signatureHash = cache[hashType] = cache[hashType] || transaction.hashForSignature(vin, prevOutScript, hashType);
              if (!keyPair2.verify(signatureHash, signature)) return false;

              unmatched[i] = undefined;
              matched = signature;

              return true;
            });

            return matched || undefined;
          });
        }

        function extractInput(transaction, txIn, vin) {
          if (txIn.script.length === 0) return {};

          var scriptSigChunks = bscript.decompile(txIn.script);
          var prevOutType = bscript.classifyInput(scriptSigChunks, true);

          function processScript(scriptType, scriptSigChunks, redeemScriptChunks) {
            scriptSigChunks = bscript.decompile(scriptSigChunks);
            redeemScriptChunks = redeemScriptChunks ? bscript.decompile(redeemScriptChunks) : undefined;

            var hashType, pubKeys, signatures, prevOutScript, redeemScript, redeemScriptType, result, parsed;

            switch (scriptType) {
              case 'scripthash':
                redeemScript = scriptSigChunks.slice(-1)[0];
                scriptSigChunks = bscript.compile(scriptSigChunks.slice(0, -1));

                redeemScriptType = bscript.classifyInput(scriptSigChunks, true);
                prevOutScript = bscript.scriptHashOutput(bcrypto.hash160(redeemScript));

                result = processScript(redeemScriptType, scriptSigChunks, bscript.decompile(redeemScript));

                result.prevOutScript = prevOutScript;
                result.redeemScript = redeemScript;
                result.redeemScriptType = redeemScriptType;

                return result;

              case 'pubkeyhash':
                parsed = ECSignature.parseScriptSignature(scriptSigChunks[0]);
                hashType = parsed.hashType;
                pubKeys = scriptSigChunks.slice(1);
                signatures = [parsed.signature];
                prevOutScript = bscript.pubKeyHashOutput(bcrypto.hash160(pubKeys[0]));

                break;

              case 'pubkey':
                parsed = ECSignature.parseScriptSignature(scriptSigChunks[0]);
                hashType = parsed.hashType;
                signatures = [parsed.signature];

                if (redeemScriptChunks) {
                  pubKeys = redeemScriptChunks.slice(0, 1);
                }

                break;

              case 'multisig':
                signatures = scriptSigChunks.slice(1).map(function (chunk) {
                  if (chunk === ops.OP_0) return undefined;

                  parsed = ECSignature.parseScriptSignature(chunk);
                  hashType = parsed.hashType;

                  return parsed.signature;
                });

                if (redeemScriptChunks) {
                  pubKeys = redeemScriptChunks.slice(1, -2);

                  if (pubKeys.length !== signatures.length) {
                    signatures = fixMSSignatures(transaction, vin, pubKeys, signatures, bscript.compile(redeemScriptChunks), hashType, redeemScript);
                  }
                }

                break;
            }

            return {
              hashType: hashType,
              pubKeys: pubKeys,
              signatures: signatures,
              prevOutScript: prevOutScript,
              redeemScript: redeemScript,
              redeemScriptType: redeemScriptType
            };
          }

          var result = processScript(prevOutType, scriptSigChunks);

          return {
            hashType: result.hashType,
            prevOutScript: result.prevOutScript,
            prevOutType: prevOutType,
            pubKeys: result.pubKeys,
            redeemScript: result.redeemScript,
            redeemScriptType: result.redeemScriptType,
            signatures: result.signatures
          };
        }

        function TransactionBuilder(network) {
          this.prevTxMap = {};
          this.prevOutScripts = {};
          this.prevOutTypes = {};
          this.network = network || networks.bitcoin;

          this.inputs = [];
          this.tx = new Transaction();
        }

        TransactionBuilder.prototype.setLockTime = function (locktime) {
          typeforce(types.UInt32, locktime);

          if (this.inputs.some(function (input) {
            if (!input.signatures) return false;

            return input.signatures.some(function (s) {
              return s;
            });
          })) {
            throw new Error('No, this would invalidate signatures');
          }

          this.tx.locktime = locktime;
        };

        TransactionBuilder.prototype.setVersion = function (version) {
          typeforce(types.UInt32, version);

          this.tx.version = version;
        };

        TransactionBuilder.fromTransaction = function (transaction, network) {
          var txb = new TransactionBuilder(network);

          txb.tx.version = transaction.version;
          txb.tx.locktime = transaction.locktime;

          transaction.ins.forEach(function (txIn) {
            txb.addInput(txIn.hash, txIn.index, txIn.sequence);
          });

          transaction.outs.forEach(function (txOut) {
            txb.addOutput(txOut.script, txOut.value);
          });

          txb.inputs = transaction.ins.map(function (txIn, vin) {
            if (Transaction.isCoinbaseHash(txIn.hash)) {
              throw new Error('coinbase inputs not supported');
            }

            return extractInput(transaction, txIn, vin);
          });

          return txb;
        };

        TransactionBuilder.prototype.addInput = function (txHash, vout, sequence, prevOutScript) {
          if (typeof txHash === 'string') {
            txHash = bufferReverse(new Buffer(txHash, 'hex'));
          } else if (txHash instanceof Transaction) {
            prevOutScript = txHash.outs[vout].script;
            txHash = txHash.getHash();
          }

          var input = {};
          if (prevOutScript) {
            var prevOutScriptChunks = bscript.decompile(prevOutScript);
            var prevOutType = bscript.classifyOutput(prevOutScriptChunks);

            switch (prevOutType) {
              case 'multisig':
                input.pubKeys = prevOutScriptChunks.slice(1, -2);
                input.signatures = input.pubKeys.map(function () {
                  return undefined;
                });

                break;

              case 'pubkey':
                input.pubKeys = prevOutScriptChunks.slice(0, 1);
                input.signatures = [undefined];

                break;
            }

            if (prevOutType !== 'scripthash') {
              input.scriptType = prevOutType;
            }

            input.prevOutScript = prevOutScript;
            input.prevOutType = prevOutType;
          }

          if (!this.inputs.every(function (otherInput) {
            if (otherInput.hashType === undefined) return true;

            return otherInput.hashType & Transaction.SIGHASH_ANYONECANPAY;
          })) {
            throw new Error('No, this would invalidate signatures');
          }

          var prevOut = txHash.toString('hex') + ':' + vout;
          if (this.prevTxMap[prevOut]) throw new Error('Transaction is already an input');

          var vin = this.tx.addInput(txHash, vout, sequence);
          this.inputs[vin] = input;
          this.prevTxMap[prevOut] = vin;

          return vin;
        };

        TransactionBuilder.prototype.addOutput = function (scriptPubKey, value) {
          var nOutputs = this.tx.outs.length;

          if (!this.inputs.every(function (input, index) {
            if (input.hashType === undefined) return true;

            var hashTypeMod = input.hashType & 0x1f;
            if (hashTypeMod === Transaction.SIGHASH_NONE) return true;
            if (hashTypeMod === Transaction.SIGHASH_SINGLE) {
              return index < nOutputs;
            }

            return false;
          })) {
            throw new Error('No, this would invalidate signatures');
          }

          if (typeof scriptPubKey === 'string') {
            scriptPubKey = baddress.toOutputScript(scriptPubKey, this.network);
          }

          return this.tx.addOutput(scriptPubKey, value);
        };

        TransactionBuilder.prototype.build = function () {
          return this.__build(false);
        };
        TransactionBuilder.prototype.buildIncomplete = function () {
          return this.__build(true);
        };

        var canBuildTypes = {
          'multisig': true,
          'pubkey': true,
          'pubkeyhash': true
        };

        function buildFromInputData(input, scriptType, parentType, redeemScript, allowIncomplete) {
          var scriptSig;

          switch (scriptType) {
            case 'pubkeyhash':
              var pkhSignature = input.signatures[0].toScriptSignature(input.hashType);
              scriptSig = bscript.pubKeyHashInput(pkhSignature, input.pubKeys[0]);
              break;

            case 'pubkey':
              var pkSignature = input.signatures[0].toScriptSignature(input.hashType);
              scriptSig = bscript.pubKeyInput(pkSignature);
              break;

            case 'multisig':
              var msSignatures = input.signatures.map(function (signature) {
                return signature && signature.toScriptSignature(input.hashType);
              });

              if (allowIncomplete) {
                for (var i = 0; i < msSignatures.length; ++i) {
                  msSignatures[i] = msSignatures[i] || ops.OP_0;
                }
              } else {
                msSignatures = msSignatures.filter(function (x) {
                  return x;
                });
              }

              scriptSig = bscript.multisigInput(msSignatures, allowIncomplete ? undefined : redeemScript);
              break;
          }

          if (parentType === 'scripthash') {
            scriptSig = bscript.scriptHashInput(scriptSig, redeemScript);
          }

          return scriptSig;
        }

        TransactionBuilder.prototype.__build = function (allowIncomplete) {
          if (!allowIncomplete) {
            if (!this.tx.ins.length) throw new Error('Transaction has no inputs');
            if (!this.tx.outs.length) throw new Error('Transaction has no outputs');
          }

          var tx = this.tx.clone();

          this.inputs.forEach(function (input, index) {
            var scriptType = input.redeemScriptType || input.prevOutType;
            var scriptSig;

            if (!allowIncomplete) {
              if (!scriptType) throw new Error('Transaction is not complete');
              if (!canBuildTypes[scriptType]) throw new Error(scriptType + ' not supported');

              if (!input.signatures) throw new Error('Transaction is missing signatures');
            }

            if (input.signatures) {
              scriptSig = buildFromInputData(input, scriptType, input.prevOutType, input.redeemScript, allowIncomplete);
            }

            if (scriptSig) {
              tx.setInputScript(index, scriptSig);
            }
          });

          return tx;
        };

        function extractFromOutputScript(outputScript, keyPair, kpPubKey) {
          var scriptType = bscript.classifyOutput(outputScript);
          var outputScriptChunks = bscript.decompile(outputScript);

          switch (scriptType) {
            case 'pubkeyhash':
              var pkh1 = outputScriptChunks[2];
              var pkh2 = bcrypto.hash160(keyPair.getPublicKeyBuffer());

              if (!bufferEquals(pkh1, pkh2)) throw new Error('privateKey cannot sign for this input');

              return {
                pubKeys: [kpPubKey],
                scriptType: scriptType
              };

            case 'pubkey':
              return {
                pubKeys: outputScriptChunks.slice(0, 1),
                scriptType: scriptType
              };

            case 'multisig':
              return {
                pubKeys: outputScriptChunks.slice(1, -2),
                scriptType: scriptType
              };
          }
        }

        TransactionBuilder.prototype.sign = function (index, keyPair, redeemScript, hashType) {
          if (keyPair.network !== this.network) throw new Error('Inconsistent network');
          if (!this.inputs[index]) throw new Error('No input at index: ' + index);
          hashType = hashType || Transaction.SIGHASH_ALL;

          var input = this.inputs[index];
          var canSign = input.hashType && input.prevOutScript && input.prevOutType && input.pubKeys && input.redeemScriptType && input.signatures && input.signatures.length === input.pubKeys.length;

          var kpPubKey = keyPair.getPublicKeyBuffer();
          var signatureScript;

          if (canSign) {
            if (redeemScript) {
              if (!bufferEquals(input.redeemScript, redeemScript)) throw new Error('Inconsistent redeemScript');
            }

            if (input.hashType !== hashType) throw new Error('Inconsistent hashType');
          } else {
            if (redeemScript) {
              if (input.prevOutScript) {
                if (input.prevOutType !== 'scripthash') throw new Error('PrevOutScript must be P2SH');

                var scriptHash = bscript.decompile(input.prevOutScript)[1];
                if (!bufferEquals(scriptHash, bcrypto.hash160(redeemScript))) throw new Error('RedeemScript does not match ' + scriptHash.toString('hex'));
              }

              var extracted = extractFromOutputScript(redeemScript, keyPair, kpPubKey);
              if (!extracted) throw new Error('RedeemScript not supported "' + bscript.toASM(redeemScript) + '"');

              if (!input.prevOutScript) {
                input.prevOutScript = bscript.scriptHashOutput(bcrypto.hash160(redeemScript));
                input.prevOutType = 'scripthash';
              }

              input.pubKeys = extracted.pubKeys;
              input.redeemScript = redeemScript;
              input.redeemScriptType = extracted.scriptType;
              input.signatures = extracted.pubKeys.map(function () {
                return undefined;
              });
            } else {
              if (input.prevOutType === 'scripthash') throw new Error('PrevOutScript is P2SH, missing redeemScript');

              if (!input.scriptType) {
                input.prevOutScript = bscript.pubKeyHashOutput(bcrypto.hash160(keyPair.getPublicKeyBuffer()));
                input.prevOutType = 'pubkeyhash';

                input.pubKeys = [kpPubKey];
                input.scriptType = input.prevOutType;
                input.signatures = [undefined];
              } else {
                if (!input.pubKeys || !input.signatures) throw new Error(input.scriptType + ' not supported');
              }
            }

            input.hashType = hashType;
          }

          signatureScript = signatureScript || input.redeemScript || input.prevOutScript;
          var signatureHash = this.tx.hashForSignature(index, signatureScript, hashType);

          var valid = input.pubKeys.some(function (pubKey, i) {
            if (!bufferEquals(kpPubKey, pubKey)) return false;
            if (input.signatures[i]) throw new Error('Signature already exists');

            input.signatures[i] = keyPair.sign(signatureHash);

            return true;
          });

          if (!valid) throw new Error('Key pair cannot sign for this input');
        };

        module.exports = TransactionBuilder;
      }).call(this, require("buffer").Buffer);
    }, { "./address": 20, "./crypto": 23, "./ecpair": 25, "./ecsignature": 26, "./networks": 30, "./opcodes.json": 31, "./script": 32, "./transaction": 34, "./types": 36, "buffer": 162, "buffer-equals": 17, "buffer-reverse": 18, "typeforce": 72 }], 36: [function (require, module, exports) {
      var typeforce = require('typeforce');

      function nBuffer(value, n) {
        typeforce(types.Buffer, value);
        if (value.length !== n) throw new typeforce.TfTypeError('Expected ' + n * 8 + '-bit Buffer, got ' + value.length * 8 + '-bit Buffer');

        return true;
      }

      function Hash160bit(value) {
        return nBuffer(value, 20);
      }
      function Hash256bit(value) {
        return nBuffer(value, 32);
      }
      function Buffer256bit(value) {
        return nBuffer(value, 32);
      }

      var UINT53_MAX = Math.pow(2, 53) - 1;
      var UINT31_MAX = Math.pow(2, 31) - 1;
      function UInt2(value) {
        return (value & 3) === value;
      }
      function UInt8(value) {
        return (value & 0xff) === value;
      }
      function UInt32(value) {
        return value >>> 0 === value;
      }
      function UInt31(value) {
        return UInt32(value) && value <= UINT31_MAX;
      }
      function UInt53(value) {
        return typeforce.Number(value) && value >= 0 && value <= UINT53_MAX && Math.floor(value) === value;
      }

      function Bip32Path(value) {
        return typeforce.String(value) && value.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
      }

      var BigInt = typeforce.quacksLike('BigInteger');
      var ECPoint = typeforce.quacksLike('Point');

      var ECSignature = typeforce.compile({ r: BigInt, s: BigInt });
      var Network = typeforce.compile({
        messagePrefix: typeforce.oneOf(typeforce.Buffer, typeforce.String),
        bip32: {
          public: UInt32,
          private: UInt32
        },
        pubKeyHash: UInt8,
        scriptHash: UInt8,
        wif: UInt8,
        dustThreshold: UInt53
      });

      var types = {
        BigInt: BigInt,
        Buffer256bit: Buffer256bit,
        ECPoint: ECPoint,
        ECSignature: ECSignature,
        Hash160bit: Hash160bit,
        Hash256bit: Hash256bit,
        Network: Network,
        UInt2: UInt2,
        UInt8: UInt8,
        UInt31: UInt31,
        UInt32: UInt32,
        UInt53: UInt53,
        Bip32Path: Bip32Path
      };

      for (var typeName in typeforce) {
        types[typeName] = typeforce[typeName];
      }

      module.exports = types;
    }, { "typeforce": 72 }], 37: [function (require, module, exports) {
      (function (Buffer) {

        const Long = require('long');
        const util = require('./util');

        var Message = function (id, data, prefix) {
          this.prefix = prefix || 'CNTRPRTY';
          this.id = id;
          this.data = data;
        };

        Message.prototype.toSerialized = function () {
          var bufid = Buffer.alloc(4);
          bufid.writeUInt32BE(this.id);
          return Buffer.concat([Buffer.from(this.prefix), bufid, this.data]);
        };

        Message.prototype.toEncrypted = function (key) {
          return util.arc4(key, this.toSerialized());
        };

        Message.TYPES = {
          30: {
            type: 'Broadcast',
            structure: [{
              label: 'timestamp',
              type: 'UInt32BE'
            }, {
              label: 'value',
              type: 'DoubleBE'
            }, {
              label: 'fee_fraction',
              type: 'UInt32BE'
            }, {
              label: 'text',
              type: 'String',
              thresholdLen: 52
            }]
          },
          70: {
            type: 'Cancel',
            structure: [{
              label: 'txid',
              type: 'Hex',
              length: 32
            }]
          },
          50: {
            type: 'Dividend',
            structure: [{
              label: 'quantity_per_unit',
              type: 'UInt64BE'
            }, {
              label: 'asset_id',
              type: 'AssetID'
            }, {
              label: 'dividend_asset_id',
              type: 'AssetID'
            }]
          },
          20: {
            type: 'Issuance',
            structure: [{
              label: 'asset_id',
              type: 'AssetID'
            }, {
              label: 'quantity',
              type: 'UInt64BE'
            }, {
              label: 'divisible',
              type: 'Boolean'
            }, {
              label: 'callable',
              type: 'Boolean'
            }, {
              label: 'call_date',
              type: 'UInt32BE'
            }, {
              label: 'call_price',
              type: 'FloatBE'
            }, {
              label: 'description',
              type: 'String',
              thresholdLen: 42
            }]
          },
          10: {
            type: 'Order',
            structure: [{
              label: 'give_id',
              type: 'AssetID'
            }, {
              label: 'give_quantity',
              type: 'UInt64BE'
            }, {
              label: 'get_id',
              type: 'AssetID'
            }, {
              label: 'get_quantity',
              type: 'UInt64BE'
            }, {
              label: 'expiration',
              type: 'UInt16BE'
            }, {
              label: 'fee_required',
              type: 'UInt64BE'
            }]
          },
          0: {
            type: 'Send',
            structure: [{
              label: 'asset_id',
              type: 'AssetID'
            }, {
              label: 'quantity',
              type: 'UInt64BE'
            }]
          },
          2: {
            type: 'Enhanced Send',
            structure: [{
              label: 'asset_id',
              type: 'AssetID'
            }, {
              label: 'quantity',
              type: 'UInt64BE'
            }, {
              label: 'destination',
              type: 'Address'
            }]
          }
        };

        Message.prototype.parse = function () {

          var struct = Message.TYPES[this.id];
          if (!struct) {
            throw new Error('Invalid message ID');
          }
          var data = {};
          var offset = 0;
          for (var i in struct.structure) {
            var item = struct.structure[i];

            switch (item.type) {
              case 'Boolean':
                data[item.label] = this.data[offset] ? true : false;
                offset += 1;
                break;
              case 'FloatBE':
                data[item.label] = this.data.readFloatBE(offset);
                offset += 4;
                break;
              case 'DoubleBE':
                data[item.label] = this.data.readDoubleBE(offset);
                offset += 8;
                break;
              case 'UInt16BE':
                data[item.label] = this.data.readUInt16BE(offset);
                offset += 2;
                break;
              case 'UInt32BE':
                data[item.label] = this.data.readUInt32BE(offset);
                offset += 4;
                break;
              case 'UInt64BE':
                data[item.label] = new Long(this.data.readUInt32BE(offset + 4), this.data.readUInt32BE(offset), true);
                offset += 8;
                break;
              case 'String':
                data[item.label] = Message.bufferToString(this.data, offset, item.thresholdLen);
                offset = this.data.length;
                break;
              case 'Hex':
                data[item.label] = this.data.toString('hex', offset, offset + item.length);
                offset += item.length;
                break;
              case 'AssetID':
                data[item.label] = util.assetIdToName(new Long(this.data.readUInt32BE(offset + 4), this.data.readUInt32BE(offset), true));
                offset += 8;
                break;
              case 'Address':
                var hexString = this.data.toString('hex');
                data[item.label] = hexString.substr(32, 42);
                break;
              default:
            }
          }
          return {
            type: struct.type,
            data: data
          };
        };

        Message.prototype.toJSON = function () {
          var parse = this.parse();
          if (typeof parse.data.quantity != "undefined") {

            parse.data.quantity = parseInt(parse.data.quantity.toString());
          }

          if (typeof parse.data.get_quantity != "undefined") {
            parse.data.get_quantity = parseInt(parse.data.get_quantity.toString());
          }

          if (typeof parse.data.give_quantity != "undefined") {
            parse.data.give_quantity = parseInt(parse.data.give_quantity.toString());
          }
          return {
            prefix: this.prefix,
            id: this.id,
            type: parse.type,
            data: parse.data
          };
        };

        Message.prototype.toString = function () {
          return JSON.stringify(this.toJSON(), null, '\t');
        };

        Message.fromSerialized = function (ser) {

          if (typeof ser == 'string') ser = Buffer.from(ser, 'hex');
          var prefix = null;
          if (ser.length >= 8 && ser.slice(0, 8).toString() == 'CNTRPRTY') {
            prefix = 'CNTRPRTY';
          }
          if (ser.length >= 2 && ser.slice(0, 2).toString() == 'XX') {
            prefix = 'XX';
          }
          if (!prefix) throw new Error('Invalid prefix.' + prefix);
          if (ser.length < prefix.length + 4) throw new Error('Insufficient data length');

          var id = ser.readUInt8(prefix.length);

          if (id == 0) {
            id = ser.readUInt32BE(prefix.length);
            var data = ser.slice(prefix.length + 4);
          } else {

            var data = ser.slice(prefix.length + 1);
          }

          return new Message(id, data, prefix);
        };

        Message.fromEncrypted = function (key, data) {
          return Message.fromSerialized(util.arc4(key, data));
        };

        Message.stringToBuffer = function (str, thresholdLen) {
          var buf = Buffer.from(str);

          if (str.length <= thresholdLen) {
            buf = Buffer.concat([Buffer.from([str.length]), buf]);
          }
          return buf;
        };

        Message.bufferToString = function (buf, offset, thresholdLen) {
          if (buf.length - offset <= thresholdLen) {
            var len = buf[offset];
            return buf.toString('utf8', offset + 1, offset + len + 1);
          }
          return buf.toString('utf8', offset);
        };

        Message.createBet = function (bet_type, deadline, wager_quantity, counterwager_quantity, target_value, leverage, expiration) {
          throw new Error('Not implemented');
        };

        Message.createBroadcast = function (text, value, fee_fraction, timestamp) {
          value = value || -1;
          fee_fraction = fee_fraction || 0;
          timestamp = timestamp || Math.floor(new Date().getTime() / 1000);

          var buf_timestamp = Buffer.alloc(4);
          buf_timestamp.writeUInt32BE(timestamp);
          var buf_value = Buffer.alloc(8);
          buf_value.writeDoubleBE(value);
          var buf_fee_fraction = Buffer.alloc(4);
          buf_fee_fraction.writeUInt32BE(fee_fraction);
          var buf_text = Message.stringToBuffer(text, 52);
          return new Message(30, Buffer.concat([buf_timestamp, buf_value, buf_fee_fraction, buf_text]));
        };

        Message.createBTCPay = function () {
          throw new Error('Not implemented');
        };

        Message.createCancel = function (txid) {
          var buf = null;
          if (typeof txid == 'string') buf = Buffer.from(txid, 'hex');
          if (txid instanceof Buffer) buf = Buffer.from(txid);
          if (!buf) throw new Error('Invalid data type');
          return new Message(70, buf);
        };

        Message.createDestroy = function () {
          throw new Error('Not implemented');
        };

        Message.createDividend = function (quantity_per_unit, asset, dividend_asset) {
          quantity_per_unit = Long.fromValue(quantity_per_unit);
          var asset_id = util.toAssetId(asset);
          var dividend_asset_id = util.toAssetId(dividend_asset);

          var buf_quantity_per_unit = Buffer.from(quantity_per_unit.toBytesBE());
          var buf_asset_id = Buffer.from(asset_id.toBytesBE());
          var buf_dividend_asset_id = Buffer.from(dividend_asset_id.toBytesBE());
          return new Message(50, Buffer.concat([buf_quantity_per_unit, buf_asset_id, buf_dividend_asset_id]));
        };

        Message.createExecute = function () {
          throw new Error('Not implemented');
        };

        Message.createIssuance = function (asset, quantity, divisible, description, callable, call_date, call_price) {
          callable = callable || false;
          call_date = call_date || 0;
          call_price = call_price || 0.0;

          var asset_id = util.toAssetId(asset);
          quantity = Long.fromValue(quantity);

          var buf_asset_id = Buffer.from(asset_id.toBytesBE());
          var buf_quantity = Buffer.from(quantity.toBytesBE());
          var buf_divisible = Buffer.from([divisible ? 1 : 0]);
          var buf_callable = Buffer.from([callable ? 1 : 0]);
          var buf_call_date = Buffer.alloc(4);
          buf_call_date.writeUInt32BE(call_date || 0);
          var buf_call_price = Buffer.alloc(4);
          buf_call_price.writeFloatBE(call_price);
          var buf_description = Message.stringToBuffer(description, 42);
          return new Message(20, Buffer.concat([buf_asset_id, buf_quantity, buf_divisible, buf_callable, buf_call_date, buf_call_price, buf_description]));
        };

        Message.createOrder = function (give_id, give_quantity, get_id, get_quantity, expiration, fee_required) {
          fee_required = fee_required || 0;

          give_id = util.toAssetId(give_id);
          give_quantity = Long.fromValue(give_quantity);
          get_id = util.toAssetId(get_id);
          get_quantity = Long.fromValue(get_quantity);
          fee_required = Long.fromValue(fee_required);

          var buf_give_id = Buffer.from(give_id.toBytesBE());
          var buf_give_quantity = Buffer.from(give_quantity.toBytesBE());
          var buf_get_id = Buffer.from(get_id.toBytesBE());
          var buf_get_quantity = Buffer.from(get_quantity.toBytesBE());
          var buf_expiration = Buffer.alloc(2);
          buf_expiration.writeUInt16BE(expiration);
          var buf_fee_required = Buffer.from(fee_required.toBytesBE());
          return new Message(10, Buffer.concat([buf_give_id, buf_give_quantity, buf_get_id, buf_get_quantity, buf_expiration, buf_fee_required]));
        };

        Message.createPublish = function () {
          throw new Error('Not implemented');
        };

        Message.createSend = function (asset, quantity) {
          var asset_id = util.toAssetId(asset);
          quantity = Long.fromValue(quantity);

          var buf_asset_id = Buffer.from(asset_id.toBytesBE());
          var buf_quantity = Buffer.from(quantity.toBytesBE());
          return new Message(0, Buffer.concat([buf_asset_id, buf_quantity]));
        };

        module.exports = Message;
      }).call(this, require("buffer").Buffer);
    }, { "./util": 40, "buffer": 162, "long": 53 }], 38: [function (require, module, exports) {

      module.exports = {
        Message: require('./Message'),
        util: require('./util')
      };
    }, { "./Message": 37, "./util": 40 }], 39: [function (require, module, exports) {
      module.exports = ["like", "just", "love", "know", "never", "want", "time", "out", "there", "make", "look", "eye", "down", "only", "think", "heart", "back", "then", "into", "about", "more", "away", "still", "them", "take", "thing", "even", "through", "long", "always", "world", "too", "friend", "tell", "try", "hand", "thought", "over", "here", "other", "need", "smile", "again", "much", "cry", "been", "night", "ever", "little", "said", "end", "some", "those", "around", "mind", "people", "girl", "leave", "dream", "left", "turn", "myself", "give", "nothing", "really", "off", "before", "something", "find", "walk", "wish", "good", "once", "place", "ask", "stop", "keep", "watch", "seem", "everything", "wait", "got", "yet", "made", "remember", "start", "alone", "run", "hope", "maybe", "believe", "body", "hate", "after", "close", "talk", "stand", "own", "each", "hurt", "help", "home", "god", "soul", "new", "many", "two", "inside", "should", "true", "first", "fear", "mean", "better", "play", "another", "gone", "change", "use", "wonder", "someone", "hair", "cold", "open", "best", "any", "behind", "happen", "water", "dark", "laugh", "stay", "forever", "name", "work", "show", "sky", "break", "came", "deep", "door", "put", "black", "together", "upon", "happy", "such", "great", "white", "matter", "fill", "past", "please", "burn", "cause", "enough", "touch", "moment", "soon", "voice", "scream", "anything", "stare", "sound", "red", "everyone", "hide", "kiss", "truth", "death", "beautiful", "mine", "blood", "broken", "very", "pass", "next", "forget", "tree", "wrong", "air", "mother", "understand", "lip", "hit", "wall", "memory", "sleep", "free", "high", "realize", "school", "might", "skin", "sweet", "perfect", "blue", "kill", "breath", "dance", "against", "fly", "between", "grow", "strong", "under", "listen", "bring", "sometimes", "speak", "pull", "person", "become", "family", "begin", "ground", "real", "small", "father", "sure", "feet", "rest", "young", "finally", "land", "across", "today", "different", "guy", "line", "fire", "reason", "reach", "second", "slowly", "write", "eat", "smell", "mouth", "step", "learn", "three", "floor", "promise", "breathe", "darkness", "push", "earth", "guess", "save", "song", "above", "along", "both", "color", "house", "almost", "sorry", "anymore", "brother", "okay", "dear", "game", "fade", "already", "apart", "warm", "beauty", "heard", "notice", "question", "shine", "began", "piece", "whole", "shadow", "secret", "street", "within", "finger", "point", "morning", "whisper", "child", "moon", "green", "story", "glass", "kid", "silence", "since", "soft", "yourself", "empty", "shall", "angel", "answer", "baby", "bright", "dad", "path", "worry", "hour", "drop", "follow", "power", "war", "half", "flow", "heaven", "act", "chance", "fact", "least", "tired", "children", "near", "quite", "afraid", "rise", "sea", "taste", "window", "cover", "nice", "trust", "lot", "sad", "cool", "force", "peace", "return", "blind", "easy", "ready", "roll", "rose", "drive", "held", "music", "beneath", "hang", "mom", "paint", "emotion", "quiet", "clear", "cloud", "few", "pretty", "bird", "outside", "paper", "picture", "front", "rock", "simple", "anyone", "meant", "reality", "road", "sense", "waste", "bit", "leaf", "thank", "happiness", "meet", "men", "smoke", "truly", "decide", "self", "age", "book", "form", "alive", "carry", "escape", "damn", "instead", "able", "ice", "minute", "throw", "catch", "leg", "ring", "course", "goodbye", "lead", "poem", "sick", "corner", "desire", "known", "problem", "remind", "shoulder", "suppose", "toward", "wave", "drink", "jump", "woman", "pretend", "sister", "week", "human", "joy", "crack", "grey", "pray", "surprise", "dry", "knee", "less", "search", "bleed", "caught", "clean", "embrace", "future", "king", "son", "sorrow", "chest", "hug", "remain", "sat", "worth", "blow", "daddy", "final", "parent", "tight", "also", "create", "lonely", "safe", "cross", "dress", "evil", "silent", "bone", "fate", "perhaps", "anger", "class", "scar", "snow", "tiny", "tonight", "continue", "control", "dog", "edge", "mirror", "month", "suddenly", "comfort", "given", "loud", "quickly", "gaze", "plan", "rush", "stone", "town", "battle", "ignore", "spirit", "stood", "stupid", "yours", "brown", "build", "dust", "hey", "kept", "pay", "phone", "twist", "although", "ball", "beyond", "hidden", "nose", "taken", "fail", "float", "pure", "somehow", "wash", "wrap", "angry", "cheek", "creature", "forgotten", "heat", "rip", "single", "space", "special", "weak", "whatever", "yell", "anyway", "blame", "job", "choose", "country", "curse", "drift", "echo", "figure", "grew", "laughter", "neck", "suffer", "worse", "yeah", "disappear", "foot", "forward", "knife", "mess", "somewhere", "stomach", "storm", "beg", "idea", "lift", "offer", "breeze", "field", "five", "often", "simply", "stuck", "win", "allow", "confuse", "enjoy", "except", "flower", "seek", "strength", "calm", "grin", "gun", "heavy", "hill", "large", "ocean", "shoe", "sigh", "straight", "summer", "tongue", "accept", "crazy", "everyday", "exist", "grass", "mistake", "sent", "shut", "surround", "table", "ache", "brain", "destroy", "heal", "nature", "shout", "sign", "stain", "choice", "doubt", "glance", "glow", "mountain", "queen", "stranger", "throat", "tomorrow", "city", "either", "fish", "flame", "rather", "shape", "spin", "spread", "ash", "distance", "finish", "image", "imagine", "important", "nobody", "shatter", "warmth", "became", "feed", "flesh", "funny", "lust", "shirt", "trouble", "yellow", "attention", "bare", "bite", "money", "protect", "amaze", "appear", "born", "choke", "completely", "daughter", "fresh", "friendship", "gentle", "probably", "six", "deserve", "expect", "grab", "middle", "nightmare", "river", "thousand", "weight", "worst", "wound", "barely", "bottle", "cream", "regret", "relationship", "stick", "test", "crush", "endless", "fault", "itself", "rule", "spill", "art", "circle", "join", "kick", "mask", "master", "passion", "quick", "raise", "smooth", "unless", "wander", "actually", "broke", "chair", "deal", "favorite", "gift", "note", "number", "sweat", "box", "chill", "clothes", "lady", "mark", "park", "poor", "sadness", "tie", "animal", "belong", "brush", "consume", "dawn", "forest", "innocent", "pen", "pride", "stream", "thick", "clay", "complete", "count", "draw", "faith", "press", "silver", "struggle", "surface", "taught", "teach", "wet", "bless", "chase", "climb", "enter", "letter", "melt", "metal", "movie", "stretch", "swing", "vision", "wife", "beside", "crash", "forgot", "guide", "haunt", "joke", "knock", "plant", "pour", "prove", "reveal", "steal", "stuff", "trip", "wood", "wrist", "bother", "bottom", "crawl", "crowd", "fix", "forgive", "frown", "grace", "loose", "lucky", "party", "release", "surely", "survive", "teacher", "gently", "grip", "speed", "suicide", "travel", "treat", "vein", "written", "cage", "chain", "conversation", "date", "enemy", "however", "interest", "million", "page", "pink", "proud", "sway", "themselves", "winter", "church", "cruel", "cup", "demon", "experience", "freedom", "pair", "pop", "purpose", "respect", "shoot", "softly", "state", "strange", "bar", "birth", "curl", "dirt", "excuse", "lord", "lovely", "monster", "order", "pack", "pants", "pool", "scene", "seven", "shame", "slide", "ugly", "among", "blade", "blonde", "closet", "creek", "deny", "drug", "eternity", "gain", "grade", "handle", "key", "linger", "pale", "prepare", "swallow", "swim", "tremble", "wheel", "won", "cast", "cigarette", "claim", "college", "direction", "dirty", "gather", "ghost", "hundred", "loss", "lung", "orange", "present", "swear", "swirl", "twice", "wild", "bitter", "blanket", "doctor", "everywhere", "flash", "grown", "knowledge", "numb", "pressure", "radio", "repeat", "ruin", "spend", "unknown", "buy", "clock", "devil", "early", "false", "fantasy", "pound", "precious", "refuse", "sheet", "teeth", "welcome", "add", "ahead", "block", "bury", "caress", "content", "depth", "despite", "distant", "marry", "purple", "threw", "whenever", "bomb", "dull", "easily", "grasp", "hospital", "innocence", "normal", "receive", "reply", "rhyme", "shade", "someday", "sword", "toe", "visit", "asleep", "bought", "center", "consider", "flat", "hero", "history", "ink", "insane", "muscle", "mystery", "pocket", "reflection", "shove", "silently", "smart", "soldier", "spot", "stress", "train", "type", "view", "whether", "bus", "energy", "explain", "holy", "hunger", "inch", "magic", "mix", "noise", "nowhere", "prayer", "presence", "shock", "snap", "spider", "study", "thunder", "trail", "admit", "agree", "bag", "bang", "bound", "butterfly", "cute", "exactly", "explode", "familiar", "fold", "further", "pierce", "reflect", "scent", "selfish", "sharp", "sink", "spring", "stumble", "universe", "weep", "women", "wonderful", "action", "ancient", "attempt", "avoid", "birthday", "branch", "chocolate", "core", "depress", "drunk", "especially", "focus", "fruit", "honest", "match", "palm", "perfectly", "pillow", "pity", "poison", "roar", "shift", "slightly", "thump", "truck", "tune", "twenty", "unable", "wipe", "wrote", "coat", "constant", "dinner", "drove", "egg", "eternal", "flight", "flood", "frame", "freak", "gasp", "glad", "hollow", "motion", "peer", "plastic", "root", "screen", "season", "sting", "strike", "team", "unlike", "victim", "volume", "warn", "weird", "attack", "await", "awake", "built", "charm", "crave", "despair", "fought", "grant", "grief", "horse", "limit", "message", "ripple", "sanity", "scatter", "serve", "split", "string", "trick", "annoy", "blur", "boat", "brave", "clearly", "cling", "connect", "fist", "forth", "imagination", "iron", "jock", "judge", "lesson", "milk", "misery", "nail", "naked", "ourselves", "poet", "possible", "princess", "sail", "size", "snake", "society", "stroke", "torture", "toss", "trace", "wise", "bloom", "bullet", "cell", "check", "cost", "darling", "during", "footstep", "fragile", "hallway", "hardly", "horizon", "invisible", "journey", "midnight", "mud", "nod", "pause", "relax", "shiver", "sudden", "value", "youth", "abuse", "admire", "blink", "breast", "bruise", "constantly", "couple", "creep", "curve", "difference", "dumb", "emptiness", "gotta", "honor", "plain", "planet", "recall", "rub", "ship", "slam", "soar", "somebody", "tightly", "weather", "adore", "approach", "bond", "bread", "burst", "candle", "coffee", "cousin", "crime", "desert", "flutter", "frozen", "grand", "heel", "hello", "language", "level", "movement", "pleasure", "powerful", "random", "rhythm", "settle", "silly", "slap", "sort", "spoken", "steel", "threaten", "tumble", "upset", "aside", "awkward", "bee", "blank", "board", "button", "card", "carefully", "complain", "crap", "deeply", "discover", "drag", "dread", "effort", "entire", "fairy", "giant", "gotten", "greet", "illusion", "jeans", "leap", "liquid", "march", "mend", "nervous", "nine", "replace", "rope", "spine", "stole", "terror", "accident", "apple", "balance", "boom", "childhood", "collect", "demand", "depression", "eventually", "faint", "glare", "goal", "group", "honey", "kitchen", "laid", "limb", "machine", "mere", "mold", "murder", "nerve", "painful", "poetry", "prince", "rabbit", "shelter", "shore", "shower", "soothe", "stair", "steady", "sunlight", "tangle", "tease", "treasure", "uncle", "begun", "bliss", "canvas", "cheer", "claw", "clutch", "commit", "crimson", "crystal", "delight", "doll", "existence", "express", "fog", "football", "gay", "goose", "guard", "hatred", "illuminate", "mass", "math", "mourn", "rich", "rough", "skip", "stir", "student", "style", "support", "thorn", "tough", "yard", "yearn", "yesterday", "advice", "appreciate", "autumn", "bank", "beam", "bowl", "capture", "carve", "collapse", "confusion", "creation", "dove", "feather", "girlfriend", "glory", "government", "harsh", "hop", "inner", "loser", "moonlight", "neighbor", "neither", "peach", "pig", "praise", "screw", "shield", "shimmer", "sneak", "stab", "subject", "throughout", "thrown", "tower", "twirl", "wow", "army", "arrive", "bathroom", "bump", "cease", "cookie", "couch", "courage", "dim", "guilt", "howl", "hum", "husband", "insult", "led", "lunch", "mock", "mostly", "natural", "nearly", "needle", "nerd", "peaceful", "perfection", "pile", "price", "remove", "roam", "sanctuary", "serious", "shiny", "shook", "sob", "stolen", "tap", "vain", "void", "warrior", "wrinkle", "affection", "apologize", "blossom", "bounce", "bridge", "cheap", "crumble", "decision", "descend", "desperately", "dig", "dot", "flip", "frighten", "heartbeat", "huge", "lazy", "lick", "odd", "opinion", "process", "puzzle", "quietly", "retreat", "score", "sentence", "separate", "situation", "skill", "soak", "square", "stray", "taint", "task", "tide", "underneath", "veil", "whistle", "anywhere", "bedroom", "bid", "bloody", "burden", "careful", "compare", "concern", "curtain", "decay", "defeat", "describe", "double", "dreamer", "driver", "dwell", "evening", "flare", "flicker", "grandma", "guitar", "harm", "horrible", "hungry", "indeed", "lace", "melody", "monkey", "nation", "object", "obviously", "rainbow", "salt", "scratch", "shown", "shy", "stage", "stun", "third", "tickle", "useless", "weakness", "worship", "worthless", "afternoon", "beard", "boyfriend", "bubble", "busy", "certain", "chin", "concrete", "desk", "diamond", "doom", "drawn", "due", "felicity", "freeze", "frost", "garden", "glide", "harmony", "hopefully", "hunt", "jealous", "lightning", "mama", "mercy", "peel", "physical", "position", "pulse", "punch", "quit", "rant", "respond", "salty", "sane", "satisfy", "savior", "sheep", "slept", "social", "sport", "tuck", "utter", "valley", "wolf", "aim", "alas", "alter", "arrow", "awaken", "beaten", "belief", "brand", "ceiling", "cheese", "clue", "confidence", "connection", "daily", "disguise", "eager", "erase", "essence", "everytime", "expression", "fan", "flag", "flirt", "foul", "fur", "giggle", "glorious", "ignorance", "law", "lifeless", "measure", "mighty", "muse", "north", "opposite", "paradise", "patience", "patient", "pencil", "petal", "plate", "ponder", "possibly", "practice", "slice", "spell", "stock", "strife", "strip", "suffocate", "suit", "tender", "tool", "trade", "velvet", "verse", "waist", "witch", "aunt", "bench", "bold", "cap", "certainly", "click", "companion", "creator", "dart", "delicate", "determine", "dish", "dragon", "drama", "drum", "dude", "everybody", "feast", "forehead", "former", "fright", "fully", "gas", "hook", "hurl", "invite", "juice", "manage", "moral", "possess", "raw", "rebel", "royal", "scale", "scary", "several", "slight", "stubborn", "swell", "talent", "tea", "terrible", "thread", "torment", "trickle", "usually", "vast", "violence", "weave", "acid", "agony", "ashamed", "awe", "belly", "blend", "blush", "character", "cheat", "common", "company", "coward", "creak", "danger", "deadly", "defense", "define", "depend", "desperate", "destination", "dew", "duck", "dusty", "embarrass", "engine", "example", "explore", "foe", "freely", "frustrate", "generation", "glove", "guilty", "health", "hurry", "idiot", "impossible", "inhale", "jaw", "kingdom", "mention", "mist", "moan", "mumble", "mutter", "observe", "ode", "pathetic", "pattern", "pie", "prefer", "puff", "rape", "rare", "revenge", "rude", "scrape", "spiral", "squeeze", "strain", "sunset", "suspend", "sympathy", "thigh", "throne", "total", "unseen", "weapon", "weary"];
    }, {}], 40: [function (require, module, exports) {
      (function (Buffer) {

        var Long = require('long');
        var bitcoin = require('bitcoinjs-lib');
        var bufferReverse = require('buffer-reverse');

        var util = {};

        util.B26DIGITS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        util.MNEMONIC_WORDS = require('./mnemonic_words.json');
        util.MAX_OP_RETURN = 80;

        util.getBitcoinJSNetwork = function (str) {
          str = str || 'mainnet';
          switch (str) {
            case 'mainnet':
              return bitcoin.networks.bitcoin;
            case 'testnet':
              return bitcoin.networks.testnet;
            default:
              throw new Error('Invalid network name specified');
          }
        };

        util.arc4 = function (key, data) {

          if (typeof key == 'string') key = Buffer.from(key, 'hex');

          if (typeof data == 'string') data = Buffer.from(data, 'hex');

          var S = [];
          for (var i = 0; i < 256; i++) {
            S[i] = i;
          }

          for (var i = 0, j = 0; i < 256; i++) {

            j = (j + S[i] + key[i % key.length]) % 256;
            var t = S[i];
            S[i] = S[j];
            S[j] = t;
          }

          var ret = [];
          for (var x = 0, i = 0, j = 0; x < data.length; x++) {

            i = (i + 1) % 256;

            j = (j + S[i]) % 256;
            var t = S[i];

            S[i] = S[j];
            S[j] = t;

            var K = S[(S[i] + S[j]) % 256];

            ret.push(data[x] ^ K);
          }

          return Buffer.from(ret);
        };

        util.mnemonicToPrivateKey = function (passphrase, index, network) {
          var getMnemonic = function (data) {
            if (data.length == 2) {
              throw new Error('Password is not implemented yet');
            } else {
              return data;
            }
          };
          var mnemonic = getMnemonic(passphrase);
          if (typeof mnemonic == 'string') {
            mnemonic = mnemonic.split(' ');
          }
          if (typeof mnemonic != 'object') {
            throw new Error('Gieven mnemonic is an invalid type: ' + typeof mnemonic);
          }
          if (mnemonic.length % 3 !== 0) {
            throw new Error('The length of mnemonic array should be divisible by 3');
          }
          var seed = Buffer.alloc(4 * mnemonic.length / 3);
          const N = util.MNEMONIC_WORDS.length;
          var mod = function (a, b) {
            return a - Math.floor(a / b) * b;
          };
          for (var i = 0; i < mnemonic.length / 3; i++) {
            var w1 = util.MNEMONIC_WORDS.indexOf(mnemonic[3 * i + 0]);
            var w2 = util.MNEMONIC_WORDS.indexOf(mnemonic[3 * i + 1]);
            var w3 = util.MNEMONIC_WORDS.indexOf(mnemonic[3 * i + 2]);
            if (w1 < 0) throw new Error('Invalid word specified: ' + mnemonic[3 * i + 0]);
            if (w2 < 0) throw new Error('Invalid word specified: ' + mnemonic[3 * i + 1]);
            if (w3 < 0) throw new Error('Invalid word specified: ' + mnemonic[3 * i + 2]);
            seed.writeUInt32BE(w1 + N * mod(w2 - w1, N) + N * N * mod(w3 - w2, N), 4 * i);
          }
          var master = bitcoin.HDNode.fromSeedBuffer(seed, util.getBitcoinJSNetwork(network));
          return master.derivePath('m/0\'/0/' + index).keyPair.toWIF();
        };

        util.assetIdToName = function (asset_id) {

          if (asset_id.equals(0)) return 'BTC';
          if (asset_id.equals(1)) return 'XCP';
          if (asset_id.lessThan(26 * 26 * 26)) {
            throw new Error('Asset ID is too low');
          }

          if (asset_id.greaterThan(Long.fromString('95428956661682176'))) {
            return 'A' + asset_id.toString();
          }
          var asset_name = '';
          var rem = Long.fromValue(asset_id);
          for (; rem.greaterThan(0); rem = rem.divide(26)) {
            var r = rem.mod(26);
            asset_name = util.B26DIGITS[r] + asset_name;
          }
          return asset_name;
        };

        util.assetNameToId = function (asset_name) {
          if (asset_name == 'BTC') return Long.fromInt(0);
          if (asset_name == 'XCP') return Long.fromInt(1);
          if (asset_name.length < 4) {
            throw new Error('Asset name is too short');
          }

          if (asset_name[0] == 'A') {
            if (!asset_name.match(/^A[0-9]+$/)) {
              throw new Error('Non-numeric asset name should not start with "A"');
            }
            var asset_id = Long.fromString(asset_name.substr(1), true);
            if (!asset_id.greaterThan(Long.fromString('95428956661682176', true))) {
              throw new Error('Asset ID is too small');
            }
            return asset_id;
          }
          if (asset_name.length >= 13) {
            throw new Error('Asset name is too long');
          }
          var asset_id = Long.fromInt(0);
          for (var i in asset_name) {
            var c = asset_name[i];
            var n = util.B26DIGITS.search(c);
            if (n < 0) throw new Error('Invalid character: ' + c);
            asset_id = asset_id.multiply(26).add(n);
          }
          if (asset_id.lessThan(26 * 26 * 26)) {
            throw new Error('Asset ID is too low');
          }
          return asset_id;
        };

        util.toAssetId = function (asset) {
          if (asset instanceof Long) return Long.fromValue(asset);
          if (typeof asset == 'number') {
            return Long.fromInteger(asset, true);
          }
          if (typeof asset == 'string') {
            if (asset[0] == 'A') {
              return Long.fromString(asset.substr(1), true);
            }
            return util.assetNameToId(asset);
          }
          throw new Error('Invalid asset type');
        };

        util.buildTransaction = function (inputs, dest, message, change, network) {
          var tx = new bitcoin.Transaction();

          for (var i in inputs) {
            var input = inputs[i];
            var hash = Buffer.from(input.txid.match(/.{2}/g).reverse().join(''), 'hex');
            tx.addInput(hash, input.vout);
          }

          if (dest) {
            if (typeof dest == 'string') {
              dest = {
                address: dest,
                value: 5430
              };
            }
            tx.addOutput(bitcoin.address.toOutputScript(dest.address, util.getBitcoinJSNetwork(network)), dest.value);
          }

          var encrypted = message.toEncrypted(inputs[0].txid);
          for (var bytesWrote = 0; bytesWrote < encrypted.length; bytesWrote += util.MAX_OP_RETURN) {
            tx.addOutput(bitcoin.script.nullDataOutput(encrypted.slice(bytesWrote, bytesWrote + util.MAX_OP_RETURN)), 0);
          }

          if (change.fee_per_kb) throw new Error('Calculating fee from change.fee_per_kb is not supported yet');
          tx.addOutput(bitcoin.address.toOutputScript(change.address, util.getBitcoinJSNetwork(network)), change.value);
          return tx.toBuffer();
        };

        util.parseTransaction = function (rawtx, network) {
          network = network || 'mainnet';
          var tx = null;
          if (rawtx instanceof Buffer) {
            tx = bitcoin.Transaction.fromBuffer(rawtx);
          }
          if (typeof rawtx == 'string') {
            tx = bitcoin.Transaction.fromHex(rawtx);
          }
          if (!tx) {
            throw new Error('Invalid data type for rawtx');
          }

          var key = bufferReverse(tx.ins[0].hash);

          var source = function (inputs) {
            var sources = [];
            for (var i in inputs) {
              var input = inputs[i];
              if (bitcoin.script.classifyInput(input.script) == 'pubkeyhash') {
                var pubkey = bitcoin.script.decompile(input.script)[1];
                sources.push(pubkey);
              }
            }

            for (var i = 1; i < sources.length; i++) {
              if (!sources[0].equals(sources[i])) {
                return null;
              }
            }
            return sources[0];
          }(tx.ins);

          var destination = null;
          var rawdata = Buffer.alloc(0);
          for (var i in tx.outs) {
            var out = tx.outs[i];
            var type = bitcoin.script.classifyOutput(out.script);
            if (type == 'pubkeyhash') {
              if (!destination && rawdata.length === 0) {
                destination = {
                  address: bitcoin.address.toBase58Check(out.script.slice(3, 23), { mainnet: 0x00, testnet: 0x6f }[network]),
                  amount: out.value
                };
              }
            }
            if (type == 'nulldata') {
              rawdata = util.arc4(key, bitcoin.script.decompile(out.script)[1]);
            }
            if (type == 'multisig') {
              var decrypted = util.arc4(key, Buffer.concat([out.script.slice(3, 33), out.script.slice(36, 68)]));
              rawdata = Buffer.concat([rawdata, decrypted.slice(1, 1 + decrypted[0])]);
            }
          }
          var message;
          try {
            message = require('./Message').fromSerialized(rawdata);
          } catch (e) {}
          return {
            key: key,
            sourcePublicKey: source,
            destination: destination,
            message: message
          };
        };

        module.exports = util;
      }).call(this, require("buffer").Buffer);
    }, { "./Message": 37, "./mnemonic_words.json": 39, "bitcoinjs-lib": 28, "buffer": 162, "buffer-reverse": 18, "long": 53 }], 41: [function (require, module, exports) {
      (function (Buffer) {
        var inherits = require('inherits');
        var md5 = require('./md5');
        var RIPEMD160 = require('ripemd160');
        var sha = require('sha.js');

        var Base = require('cipher-base');

        function HashNoConstructor(hash) {
          Base.call(this, 'digest');

          this._hash = hash;
          this.buffers = [];
        }

        inherits(HashNoConstructor, Base);

        HashNoConstructor.prototype._update = function (data) {
          this.buffers.push(data);
        };

        HashNoConstructor.prototype._final = function () {
          var buf = Buffer.concat(this.buffers);
          var r = this._hash(buf);
          this.buffers = null;

          return r;
        };

        function Hash(hash) {
          Base.call(this, 'digest');

          this._hash = hash;
        }

        inherits(Hash, Base);

        Hash.prototype._update = function (data) {
          this._hash.update(data);
        };

        Hash.prototype._final = function () {
          return this._hash.digest();
        };

        module.exports = function createHash(alg) {
          alg = alg.toLowerCase();
          if (alg === 'md5') return new HashNoConstructor(md5);
          if (alg === 'rmd160' || alg === 'ripemd160') return new Hash(new RIPEMD160());

          return new Hash(sha(alg));
        };
      }).call(this, require("buffer").Buffer);
    }, { "./md5": 43, "buffer": 162, "cipher-base": 19, "inherits": 52, "ripemd160": 60, "sha.js": 63 }], 42: [function (require, module, exports) {
      (function (Buffer) {
        var intSize = 4;
        var zeroBuffer = new Buffer(intSize);
        zeroBuffer.fill(0);

        var charSize = 8;
        var hashSize = 16;

        function toArray(buf) {
          if (buf.length % intSize !== 0) {
            var len = buf.length + (intSize - buf.length % intSize);
            buf = Buffer.concat([buf, zeroBuffer], len);
          }

          var arr = new Array(buf.length >>> 2);
          for (var i = 0, j = 0; i < buf.length; i += intSize, j++) {
            arr[j] = buf.readInt32LE(i);
          }

          return arr;
        }

        module.exports = function hash(buf, fn) {
          var arr = fn(toArray(buf), buf.length * charSize);
          buf = new Buffer(hashSize);
          for (var i = 0; i < arr.length; i++) {
            buf.writeInt32LE(arr[i], i << 2, true);
          }
          return buf;
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162 }], 43: [function (require, module, exports) {

      var makeHash = require('./make-hash');

      function core_md5(x, len) {
        x[len >> 5] |= 0x80 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;

        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
          var olda = a;
          var oldb = b;
          var oldc = c;
          var oldd = d;

          a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
          d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

          a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
          a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

          a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
          c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

          a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
          d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

          a = safe_add(a, olda);
          b = safe_add(b, oldb);
          c = safe_add(c, oldc);
          d = safe_add(d, oldd);
        }

        return [a, b, c, d];
      }

      function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
      }

      function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn(b & c | ~b & d, a, b, x, s, t);
      }

      function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn(b & d | c & ~d, a, b, x, s, t);
      }

      function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
      }

      function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xFFFF;
      }

      function bit_rol(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }

      module.exports = function md5(buf) {
        return makeHash(buf, core_md5);
      };
    }, { "./make-hash": 42 }], 44: [function (require, module, exports) {
      var inherits = require('inherits');
      var Legacy = require('./legacy');
      var Base = require('cipher-base');
      var Buffer = require('safe-buffer').Buffer;
      var md5 = require('create-hash/md5');
      var RIPEMD160 = require('ripemd160');

      var sha = require('sha.js');

      var ZEROS = Buffer.alloc(128);

      function Hmac(alg, key) {
        Base.call(this, 'digest');
        if (typeof key === 'string') {
          key = Buffer.from(key);
        }

        var blocksize = alg === 'sha512' || alg === 'sha384' ? 128 : 64;

        this._alg = alg;
        this._key = key;
        if (key.length > blocksize) {
          var hash = alg === 'rmd160' ? new RIPEMD160() : sha(alg);
          key = hash.update(key).digest();
        } else if (key.length < blocksize) {
          key = Buffer.concat([key, ZEROS], blocksize);
        }

        var ipad = this._ipad = Buffer.allocUnsafe(blocksize);
        var opad = this._opad = Buffer.allocUnsafe(blocksize);

        for (var i = 0; i < blocksize; i++) {
          ipad[i] = key[i] ^ 0x36;
          opad[i] = key[i] ^ 0x5C;
        }
        this._hash = alg === 'rmd160' ? new RIPEMD160() : sha(alg);
        this._hash.update(ipad);
      }

      inherits(Hmac, Base);

      Hmac.prototype._update = function (data) {
        this._hash.update(data);
      };

      Hmac.prototype._final = function () {
        var h = this._hash.digest();
        var hash = this._alg === 'rmd160' ? new RIPEMD160() : sha(this._alg);
        return hash.update(this._opad).update(h).digest();
      };

      module.exports = function createHmac(alg, key) {
        alg = alg.toLowerCase();
        if (alg === 'rmd160' || alg === 'ripemd160') {
          return new Hmac('rmd160', key);
        }
        if (alg === 'md5') {
          return new Legacy(md5, key);
        }
        return new Hmac(alg, key);
      };
    }, { "./legacy": 45, "cipher-base": 19, "create-hash/md5": 43, "inherits": 52, "ripemd160": 60, "safe-buffer": 61, "sha.js": 63 }], 45: [function (require, module, exports) {
      var inherits = require('inherits');
      var Buffer = require('safe-buffer').Buffer;

      var Base = require('cipher-base');

      var ZEROS = Buffer.alloc(128);
      var blocksize = 64;

      function Hmac(alg, key) {
        Base.call(this, 'digest');
        if (typeof key === 'string') {
          key = Buffer.from(key);
        }

        this._alg = alg;
        this._key = key;

        if (key.length > blocksize) {
          key = alg(key);
        } else if (key.length < blocksize) {
          key = Buffer.concat([key, ZEROS], blocksize);
        }

        var ipad = this._ipad = Buffer.allocUnsafe(blocksize);
        var opad = this._opad = Buffer.allocUnsafe(blocksize);

        for (var i = 0; i < blocksize; i++) {
          ipad[i] = key[i] ^ 0x36;
          opad[i] = key[i] ^ 0x5C;
        }

        this._hash = [ipad];
      }

      inherits(Hmac, Base);

      Hmac.prototype._update = function (data) {
        this._hash.push(data);
      };

      Hmac.prototype._final = function () {
        var h = this._alg(Buffer.concat(this._hash));
        return this._alg(Buffer.concat([this._opad, h]));
      };
      module.exports = Hmac;
    }, { "cipher-base": 19, "inherits": 52, "safe-buffer": 61 }], 46: [function (require, module, exports) {
      var assert = require('assert');
      var BigInteger = require('bigi');

      var Point = require('./point');

      function Curve(p, a, b, Gx, Gy, n, h) {
        this.p = p;
        this.a = a;
        this.b = b;
        this.G = Point.fromAffine(this, Gx, Gy);
        this.n = n;
        this.h = h;

        this.infinity = new Point(this, null, null, BigInteger.ZERO);

        this.pOverFour = p.add(BigInteger.ONE).shiftRight(2);

        this.pLength = Math.floor((this.p.bitLength() + 7) / 8);
      }

      Curve.prototype.pointFromX = function (isOdd, x) {
        var alpha = x.pow(3).add(this.a.multiply(x)).add(this.b).mod(this.p);
        var beta = alpha.modPow(this.pOverFour, this.p);

        var y = beta;
        if (beta.isEven() ^ !isOdd) {
          y = this.p.subtract(y);
        }

        return Point.fromAffine(this, x, y);
      };

      Curve.prototype.isInfinity = function (Q) {
        if (Q === this.infinity) return true;

        return Q.z.signum() === 0 && Q.y.signum() !== 0;
      };

      Curve.prototype.isOnCurve = function (Q) {
        if (this.isInfinity(Q)) return true;

        var x = Q.affineX;
        var y = Q.affineY;
        var a = this.a;
        var b = this.b;
        var p = this.p;

        if (x.signum() < 0 || x.compareTo(p) >= 0) return false;
        if (y.signum() < 0 || y.compareTo(p) >= 0) return false;

        var lhs = y.square().mod(p);
        var rhs = x.pow(3).add(a.multiply(x)).add(b).mod(p);
        return lhs.equals(rhs);
      };

      Curve.prototype.validate = function (Q) {
        assert(!this.isInfinity(Q), 'Point is at infinity');
        assert(this.isOnCurve(Q), 'Point is not on the curve');

        var nQ = Q.multiply(this.n);
        assert(this.isInfinity(nQ), 'Point is not a scalar multiple of G');

        return true;
      };

      module.exports = Curve;
    }, { "./point": 50, "assert": 159, "bigi": 11 }], 47: [function (require, module, exports) {
      module.exports = {
        "secp128r1": {
          "p": "fffffffdffffffffffffffffffffffff",
          "a": "fffffffdfffffffffffffffffffffffc",
          "b": "e87579c11079f43dd824993c2cee5ed3",
          "n": "fffffffe0000000075a30d1b9038a115",
          "h": "01",
          "Gx": "161ff7528b899b2d0c28607ca52c5b86",
          "Gy": "cf5ac8395bafeb13c02da292dded7a83"
        },
        "secp160k1": {
          "p": "fffffffffffffffffffffffffffffffeffffac73",
          "a": "00",
          "b": "07",
          "n": "0100000000000000000001b8fa16dfab9aca16b6b3",
          "h": "01",
          "Gx": "3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",
          "Gy": "938cf935318fdced6bc28286531733c3f03c4fee"
        },
        "secp160r1": {
          "p": "ffffffffffffffffffffffffffffffff7fffffff",
          "a": "ffffffffffffffffffffffffffffffff7ffffffc",
          "b": "1c97befc54bd7a8b65acf89f81d4d4adc565fa45",
          "n": "0100000000000000000001f4c8f927aed3ca752257",
          "h": "01",
          "Gx": "4a96b5688ef573284664698968c38bb913cbfc82",
          "Gy": "23a628553168947d59dcc912042351377ac5fb32"
        },
        "secp192k1": {
          "p": "fffffffffffffffffffffffffffffffffffffffeffffee37",
          "a": "00",
          "b": "03",
          "n": "fffffffffffffffffffffffe26f2fc170f69466a74defd8d",
          "h": "01",
          "Gx": "db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",
          "Gy": "9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"
        },
        "secp192r1": {
          "p": "fffffffffffffffffffffffffffffffeffffffffffffffff",
          "a": "fffffffffffffffffffffffffffffffefffffffffffffffc",
          "b": "64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",
          "n": "ffffffffffffffffffffffff99def836146bc9b1b4d22831",
          "h": "01",
          "Gx": "188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",
          "Gy": "07192b95ffc8da78631011ed6b24cdd573f977a11e794811"
        },
        "secp256k1": {
          "p": "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          "a": "00",
          "b": "07",
          "n": "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          "h": "01",
          "Gx": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "Gy": "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
        },
        "secp256r1": {
          "p": "ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",
          "a": "ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",
          "b": "5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",
          "n": "ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",
          "h": "01",
          "Gx": "6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",
          "Gy": "4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
        }
      };
    }, {}], 48: [function (require, module, exports) {
      var Point = require('./point');
      var Curve = require('./curve');

      var getCurveByName = require('./names');

      module.exports = {
        Curve: Curve,
        Point: Point,
        getCurveByName: getCurveByName
      };
    }, { "./curve": 46, "./names": 49, "./point": 50 }], 49: [function (require, module, exports) {
      var BigInteger = require('bigi');

      var curves = require('./curves.json');
      var Curve = require('./curve');

      function getCurveByName(name) {
        var curve = curves[name];
        if (!curve) return null;

        var p = new BigInteger(curve.p, 16);
        var a = new BigInteger(curve.a, 16);
        var b = new BigInteger(curve.b, 16);
        var n = new BigInteger(curve.n, 16);
        var h = new BigInteger(curve.h, 16);
        var Gx = new BigInteger(curve.Gx, 16);
        var Gy = new BigInteger(curve.Gy, 16);

        return new Curve(p, a, b, Gx, Gy, n, h);
      }

      module.exports = getCurveByName;
    }, { "./curve": 46, "./curves.json": 47, "bigi": 11 }], 50: [function (require, module, exports) {
      var assert = require('assert');
      var Buffer = require('safe-buffer').Buffer;
      var BigInteger = require('bigi');

      var THREE = BigInteger.valueOf(3);

      function Point(curve, x, y, z) {
        assert.notStrictEqual(z, undefined, 'Missing Z coordinate');

        this.curve = curve;
        this.x = x;
        this.y = y;
        this.z = z;
        this._zInv = null;

        this.compressed = true;
      }

      Object.defineProperty(Point.prototype, 'zInv', {
        get: function () {
          if (this._zInv === null) {
            this._zInv = this.z.modInverse(this.curve.p);
          }

          return this._zInv;
        }
      });

      Object.defineProperty(Point.prototype, 'affineX', {
        get: function () {
          return this.x.multiply(this.zInv).mod(this.curve.p);
        }
      });

      Object.defineProperty(Point.prototype, 'affineY', {
        get: function () {
          return this.y.multiply(this.zInv).mod(this.curve.p);
        }
      });

      Point.fromAffine = function (curve, x, y) {
        return new Point(curve, x, y, BigInteger.ONE);
      };

      Point.prototype.equals = function (other) {
        if (other === this) return true;
        if (this.curve.isInfinity(this)) return this.curve.isInfinity(other);
        if (this.curve.isInfinity(other)) return this.curve.isInfinity(this);

        var u = other.y.multiply(this.z).subtract(this.y.multiply(other.z)).mod(this.curve.p);

        if (u.signum() !== 0) return false;

        var v = other.x.multiply(this.z).subtract(this.x.multiply(other.z)).mod(this.curve.p);

        return v.signum() === 0;
      };

      Point.prototype.negate = function () {
        var y = this.curve.p.subtract(this.y);

        return new Point(this.curve, this.x, y, this.z);
      };

      Point.prototype.add = function (b) {
        if (this.curve.isInfinity(this)) return b;
        if (this.curve.isInfinity(b)) return this;

        var x1 = this.x;
        var y1 = this.y;
        var x2 = b.x;
        var y2 = b.y;

        var u = y2.multiply(this.z).subtract(y1.multiply(b.z)).mod(this.curve.p);

        var v = x2.multiply(this.z).subtract(x1.multiply(b.z)).mod(this.curve.p);

        if (v.signum() === 0) {
          if (u.signum() === 0) {
            return this.twice();
          }

          return this.curve.infinity;
        }

        var v2 = v.square();
        var v3 = v2.multiply(v);
        var x1v2 = x1.multiply(v2);
        var zu2 = u.square().multiply(this.z);

        var x3 = zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.p);

        var y3 = x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.p);

        var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.p);

        return new Point(this.curve, x3, y3, z3);
      };

      Point.prototype.twice = function () {
        if (this.curve.isInfinity(this)) return this;
        if (this.y.signum() === 0) return this.curve.infinity;

        var x1 = this.x;
        var y1 = this.y;

        var y1z1 = y1.multiply(this.z).mod(this.curve.p);
        var y1sqz1 = y1z1.multiply(y1).mod(this.curve.p);
        var a = this.curve.a;

        var w = x1.square().multiply(THREE);

        if (a.signum() !== 0) {
          w = w.add(this.z.square().multiply(a));
        }

        w = w.mod(this.curve.p);

        var x3 = w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.p);

        var y3 = w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.pow(3)).mod(this.curve.p);

        var z3 = y1z1.pow(3).shiftLeft(3).mod(this.curve.p);

        return new Point(this.curve, x3, y3, z3);
      };

      Point.prototype.multiply = function (k) {
        if (this.curve.isInfinity(this)) return this;
        if (k.signum() === 0) return this.curve.infinity;

        var e = k;
        var h = e.multiply(THREE);

        var neg = this.negate();
        var R = this;

        for (var i = h.bitLength() - 2; i > 0; --i) {
          var hBit = h.testBit(i);
          var eBit = e.testBit(i);

          R = R.twice();

          if (hBit !== eBit) {
            R = R.add(hBit ? this : neg);
          }
        }

        return R;
      };

      Point.prototype.multiplyTwo = function (j, x, k) {
        var i = Math.max(j.bitLength(), k.bitLength()) - 1;
        var R = this.curve.infinity;
        var both = this.add(x);

        while (i >= 0) {
          var jBit = j.testBit(i);
          var kBit = k.testBit(i);

          R = R.twice();

          if (jBit) {
            if (kBit) {
              R = R.add(both);
            } else {
              R = R.add(this);
            }
          } else if (kBit) {
            R = R.add(x);
          }
          --i;
        }

        return R;
      };

      Point.prototype.getEncoded = function (compressed) {
        if (compressed == null) compressed = this.compressed;
        if (this.curve.isInfinity(this)) return Buffer.alloc(1, 0);

        var x = this.affineX;
        var y = this.affineY;
        var byteLength = this.curve.pLength;
        var buffer;

        if (compressed) {
          buffer = Buffer.allocUnsafe(1 + byteLength);
          buffer.writeUInt8(y.isEven() ? 0x02 : 0x03, 0);
        } else {
          buffer = Buffer.allocUnsafe(1 + byteLength + byteLength);
          buffer.writeUInt8(0x04, 0);

          y.toBuffer(byteLength).copy(buffer, 1 + byteLength);
        }

        x.toBuffer(byteLength).copy(buffer, 1);

        return buffer;
      };

      Point.decodeFrom = function (curve, buffer) {
        var type = buffer.readUInt8(0);
        var compressed = type !== 4;

        var byteLength = Math.floor((curve.p.bitLength() + 7) / 8);
        var x = BigInteger.fromBuffer(buffer.slice(1, 1 + byteLength));

        var Q;
        if (compressed) {
          assert.equal(buffer.length, byteLength + 1, 'Invalid sequence length');
          assert(type === 0x02 || type === 0x03, 'Invalid sequence tag');

          var isOdd = type === 0x03;
          Q = curve.pointFromX(isOdd, x);
        } else {
          assert.equal(buffer.length, 1 + byteLength + byteLength, 'Invalid sequence length');

          var y = BigInteger.fromBuffer(buffer.slice(1 + byteLength));
          Q = Point.fromAffine(curve, x, y);
        }

        Q.compressed = compressed;
        return Q;
      };

      Point.prototype.toString = function () {
        if (this.curve.isInfinity(this)) return '(INFINITY)';

        return '(' + this.affineX.toString() + ',' + this.affineY.toString() + ')';
      };

      module.exports = Point;
    }, { "assert": 159, "bigi": 11, "safe-buffer": 61 }], 51: [function (require, module, exports) {
      (function (Buffer) {
        var Transform = require('stream').Transform;
        var inherits = require('inherits');

        function HashBase(blockSize) {
          Transform.call(this);

          this._block = new Buffer(blockSize);
          this._blockSize = blockSize;
          this._blockOffset = 0;
          this._length = [0, 0, 0, 0];

          this._finalized = false;
        }

        inherits(HashBase, Transform);

        HashBase.prototype._transform = function (chunk, encoding, callback) {
          var error = null;
          try {
            if (encoding !== 'buffer') chunk = new Buffer(chunk, encoding);
            this.update(chunk);
          } catch (err) {
            error = err;
          }

          callback(error);
        };

        HashBase.prototype._flush = function (callback) {
          var error = null;
          try {
            this.push(this._digest());
          } catch (err) {
            error = err;
          }

          callback(error);
        };

        HashBase.prototype.update = function (data, encoding) {
          if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer');
          if (this._finalized) throw new Error('Digest already called');
          if (!Buffer.isBuffer(data)) data = new Buffer(data, encoding || 'binary');

          var block = this._block;
          var offset = 0;
          while (this._blockOffset + data.length - offset >= this._blockSize) {
            for (var i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++];
            this._update();
            this._blockOffset = 0;
          }
          while (offset < data.length) block[this._blockOffset++] = data[offset++];

          for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
            this._length[j] += carry;
            carry = this._length[j] / 0x0100000000 | 0;
            if (carry > 0) this._length[j] -= 0x0100000000 * carry;
          }

          return this;
        };

        HashBase.prototype._update = function (data) {
          throw new Error('_update is not implemented');
        };

        HashBase.prototype.digest = function (encoding) {
          if (this._finalized) throw new Error('Digest already called');
          this._finalized = true;

          var digest = this._digest();
          if (encoding !== undefined) digest = digest.toString(encoding);
          return digest;
        };

        HashBase.prototype._digest = function () {
          throw new Error('_digest is not implemented');
        };

        module.exports = HashBase;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162, "inherits": 52, "stream": 191 }], 52: [function (require, module, exports) {
      if (typeof Object.create === 'function') {
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function () {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }
    }, {}], 53: [function (require, module, exports) {

      /**
       * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
       * Released under the Apache License, Version 2.0
       * see: https://github.com/dcodeIO/long.js for details
       */
      (function (global, factory) {
        if (typeof define === 'function' && define["amd"]) define([], factory);else if (typeof require === 'function' && typeof module === "object" && module && module["exports"]) module["exports"] = factory();else (global["dcodeIO"] = global["dcodeIO"] || {})["Long"] = factory();
      })(this, function () {
        "use strict";

        function Long(low, high, unsigned) {
          this.low = low | 0;

          this.high = high | 0;

          this.unsigned = !!unsigned;
        }

        Long.prototype.__isLong__;

        Object.defineProperty(Long.prototype, "__isLong__", {
          value: true,
          enumerable: false,
          configurable: false
        });

        function isLong(obj) {
          return (obj && obj["__isLong__"]) === true;
        }

        Long.isLong = isLong;

        var INT_CACHE = {};

        var UINT_CACHE = {};

        function fromInt(value, unsigned) {
          var obj, cachedObj, cache;
          if (unsigned) {
            value >>>= 0;
            if (cache = 0 <= value && value < 256) {
              cachedObj = UINT_CACHE[value];
              if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache) UINT_CACHE[value] = obj;
            return obj;
          } else {
            value |= 0;
            if (cache = -128 <= value && value < 128) {
              cachedObj = INT_CACHE[value];
              if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache) INT_CACHE[value] = obj;
            return obj;
          }
        }

        Long.fromInt = fromInt;

        function fromNumber(value, unsigned) {
          if (isNaN(value) || !isFinite(value)) return unsigned ? UZERO : ZERO;
          if (unsigned) {
            if (value < 0) return UZERO;
            if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
          } else {
            if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
          }
          if (value < 0) return fromNumber(-value, unsigned).neg();
          return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
        }

        Long.fromNumber = fromNumber;

        function fromBits(lowBits, highBits, unsigned) {
          return new Long(lowBits, highBits, unsigned);
        }

        Long.fromBits = fromBits;

        var pow_dbl = Math.pow;
        function fromString(str, unsigned, radix) {
          if (str.length === 0) throw Error('empty string');
          if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return ZERO;
          if (typeof unsigned === 'number') {
            radix = unsigned, unsigned = false;
          } else {
            unsigned = !!unsigned;
          }
          radix = radix || 10;
          if (radix < 2 || 36 < radix) throw RangeError('radix');

          var p;
          if ((p = str.indexOf('-')) > 0) throw Error('interior hyphen');else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
          }

          var radixToPower = fromNumber(pow_dbl(radix, 8));

          var result = ZERO;
          for (var i = 0; i < str.length; i += 8) {
            var size = Math.min(8, str.length - i),
                value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
              var power = fromNumber(pow_dbl(radix, size));
              result = result.mul(power).add(fromNumber(value));
            } else {
              result = result.mul(radixToPower);
              result = result.add(fromNumber(value));
            }
          }
          result.unsigned = unsigned;
          return result;
        }

        Long.fromString = fromString;

        function fromValue(val) {
          if (val instanceof Long) return val;
          if (typeof val === 'number') return fromNumber(val);
          if (typeof val === 'string') return fromString(val);

          return fromBits(val.low, val.high, val.unsigned);
        }

        Long.fromValue = fromValue;

        var TWO_PWR_16_DBL = 1 << 16;

        var TWO_PWR_24_DBL = 1 << 24;

        var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

        var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

        var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

        var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

        var ZERO = fromInt(0);

        Long.ZERO = ZERO;

        var UZERO = fromInt(0, true);

        Long.UZERO = UZERO;

        var ONE = fromInt(1);

        Long.ONE = ONE;

        var UONE = fromInt(1, true);

        Long.UONE = UONE;

        var NEG_ONE = fromInt(-1);

        Long.NEG_ONE = NEG_ONE;

        var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);

        Long.MAX_VALUE = MAX_VALUE;

        var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);

        Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

        var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);

        Long.MIN_VALUE = MIN_VALUE;

        var LongPrototype = Long.prototype;

        LongPrototype.toInt = function toInt() {
          return this.unsigned ? this.low >>> 0 : this.low;
        };

        LongPrototype.toNumber = function toNumber() {
          if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
          return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
        };

        LongPrototype.toString = function toString(radix) {
          radix = radix || 10;
          if (radix < 2 || 36 < radix) throw RangeError('radix');
          if (this.isZero()) return '0';
          if (this.isNegative()) {
            if (this.eq(MIN_VALUE)) {
              var radixLong = fromNumber(radix),
                  div = this.div(radixLong),
                  rem1 = div.mul(radixLong).sub(this);
              return div.toString(radix) + rem1.toInt().toString(radix);
            } else return '-' + this.neg().toString(radix);
          }

          var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
              rem = this;
          var result = '';
          while (true) {
            var remDiv = rem.div(radixToPower),
                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
                digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) return digits + result;else {
              while (digits.length < 6) digits = '0' + digits;
              result = '' + digits + result;
            }
          }
        };

        LongPrototype.getHighBits = function getHighBits() {
          return this.high;
        };

        LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
          return this.high >>> 0;
        };

        LongPrototype.getLowBits = function getLowBits() {
          return this.low;
        };

        LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
          return this.low >>> 0;
        };

        LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
          if (this.isNegative()) return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
          var val = this.high != 0 ? this.high : this.low;
          for (var bit = 31; bit > 0; bit--) if ((val & 1 << bit) != 0) break;
          return this.high != 0 ? bit + 33 : bit + 1;
        };

        LongPrototype.isZero = function isZero() {
          return this.high === 0 && this.low === 0;
        };

        LongPrototype.isNegative = function isNegative() {
          return !this.unsigned && this.high < 0;
        };

        LongPrototype.isPositive = function isPositive() {
          return this.unsigned || this.high >= 0;
        };

        LongPrototype.isOdd = function isOdd() {
          return (this.low & 1) === 1;
        };

        LongPrototype.isEven = function isEven() {
          return (this.low & 1) === 0;
        };

        LongPrototype.equals = function equals(other) {
          if (!isLong(other)) other = fromValue(other);
          if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
          return this.high === other.high && this.low === other.low;
        };

        LongPrototype.eq = LongPrototype.equals;

        LongPrototype.notEquals = function notEquals(other) {
          return !this.eq(other);
        };

        LongPrototype.neq = LongPrototype.notEquals;

        LongPrototype.lessThan = function lessThan(other) {
          return this.comp(other) < 0;
        };

        LongPrototype.lt = LongPrototype.lessThan;

        LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
          return this.comp(other) <= 0;
        };

        LongPrototype.lte = LongPrototype.lessThanOrEqual;

        LongPrototype.greaterThan = function greaterThan(other) {
          return this.comp(other) > 0;
        };

        LongPrototype.gt = LongPrototype.greaterThan;

        LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
          return this.comp(other) >= 0;
        };

        LongPrototype.gte = LongPrototype.greaterThanOrEqual;

        LongPrototype.compare = function compare(other) {
          if (!isLong(other)) other = fromValue(other);
          if (this.eq(other)) return 0;
          var thisNeg = this.isNegative(),
              otherNeg = other.isNegative();
          if (thisNeg && !otherNeg) return -1;
          if (!thisNeg && otherNeg) return 1;

          if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;

          return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
        };

        LongPrototype.comp = LongPrototype.compare;

        LongPrototype.negate = function negate() {
          if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
          return this.not().add(ONE);
        };

        LongPrototype.neg = LongPrototype.negate;

        LongPrototype.add = function add(addend) {
          if (!isLong(addend)) addend = fromValue(addend);

          var a48 = this.high >>> 16;
          var a32 = this.high & 0xFFFF;
          var a16 = this.low >>> 16;
          var a00 = this.low & 0xFFFF;

          var b48 = addend.high >>> 16;
          var b32 = addend.high & 0xFFFF;
          var b16 = addend.low >>> 16;
          var b00 = addend.low & 0xFFFF;

          var c48 = 0,
              c32 = 0,
              c16 = 0,
              c00 = 0;
          c00 += a00 + b00;
          c16 += c00 >>> 16;
          c00 &= 0xFFFF;
          c16 += a16 + b16;
          c32 += c16 >>> 16;
          c16 &= 0xFFFF;
          c32 += a32 + b32;
          c48 += c32 >>> 16;
          c32 &= 0xFFFF;
          c48 += a48 + b48;
          c48 &= 0xFFFF;
          return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        };

        LongPrototype.subtract = function subtract(subtrahend) {
          if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
          return this.add(subtrahend.neg());
        };

        LongPrototype.sub = LongPrototype.subtract;

        LongPrototype.multiply = function multiply(multiplier) {
          if (this.isZero()) return ZERO;
          if (!isLong(multiplier)) multiplier = fromValue(multiplier);
          if (multiplier.isZero()) return ZERO;
          if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
          if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;

          if (this.isNegative()) {
            if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());else return this.neg().mul(multiplier).neg();
          } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();

          if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

          var a48 = this.high >>> 16;
          var a32 = this.high & 0xFFFF;
          var a16 = this.low >>> 16;
          var a00 = this.low & 0xFFFF;

          var b48 = multiplier.high >>> 16;
          var b32 = multiplier.high & 0xFFFF;
          var b16 = multiplier.low >>> 16;
          var b00 = multiplier.low & 0xFFFF;

          var c48 = 0,
              c32 = 0,
              c16 = 0,
              c00 = 0;
          c00 += a00 * b00;
          c16 += c00 >>> 16;
          c00 &= 0xFFFF;
          c16 += a16 * b00;
          c32 += c16 >>> 16;
          c16 &= 0xFFFF;
          c16 += a00 * b16;
          c32 += c16 >>> 16;
          c16 &= 0xFFFF;
          c32 += a32 * b00;
          c48 += c32 >>> 16;
          c32 &= 0xFFFF;
          c32 += a16 * b16;
          c48 += c32 >>> 16;
          c32 &= 0xFFFF;
          c32 += a00 * b32;
          c48 += c32 >>> 16;
          c32 &= 0xFFFF;
          c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
          c48 &= 0xFFFF;
          return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        };

        LongPrototype.mul = LongPrototype.multiply;

        LongPrototype.divide = function divide(divisor) {
          if (!isLong(divisor)) divisor = fromValue(divisor);
          if (divisor.isZero()) throw Error('division by zero');
          if (this.isZero()) return this.unsigned ? UZERO : ZERO;
          var approx, rem, res;
          if (!this.unsigned) {
            if (this.eq(MIN_VALUE)) {
              if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE;else if (divisor.eq(MIN_VALUE)) return ONE;else {
                  var halfThis = this.shr(1);
                  approx = halfThis.div(divisor).shl(1);
                  if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                  } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                  }
                }
            } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
              if (divisor.isNegative()) return this.neg().div(divisor.neg());
              return this.neg().div(divisor).neg();
            } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
            res = ZERO;
          } else {
            if (!divisor.unsigned) divisor = divisor.toUnsigned();
            if (divisor.gt(this)) return UZERO;
            if (divisor.gt(this.shru(1))) return UONE;
            res = UZERO;
          }

          rem = this;
          while (rem.gte(divisor)) {
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
                delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),
                approxRes = fromNumber(approx),
                approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
              approx -= delta;
              approxRes = fromNumber(approx, this.unsigned);
              approxRem = approxRes.mul(divisor);
            }

            if (approxRes.isZero()) approxRes = ONE;

            res = res.add(approxRes);
            rem = rem.sub(approxRem);
          }
          return res;
        };

        LongPrototype.div = LongPrototype.divide;

        LongPrototype.modulo = function modulo(divisor) {
          if (!isLong(divisor)) divisor = fromValue(divisor);
          return this.sub(this.div(divisor).mul(divisor));
        };

        LongPrototype.mod = LongPrototype.modulo;

        LongPrototype.not = function not() {
          return fromBits(~this.low, ~this.high, this.unsigned);
        };

        LongPrototype.and = function and(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
        };

        LongPrototype.or = function or(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
        };

        LongPrototype.xor = function xor(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
        };

        LongPrototype.shiftLeft = function shiftLeft(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);else return fromBits(0, this.low << numBits - 32, this.unsigned);
        };

        LongPrototype.shl = LongPrototype.shiftLeft;

        LongPrototype.shiftRight = function shiftRight(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        };

        LongPrototype.shr = LongPrototype.shiftRight;

        LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          numBits &= 63;
          if (numBits === 0) return this;else {
            var high = this.high;
            if (numBits < 32) {
              var low = this.low;
              return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
            } else if (numBits === 32) return fromBits(high, 0, this.unsigned);else return fromBits(high >>> numBits - 32, 0, this.unsigned);
          }
        };

        LongPrototype.shru = LongPrototype.shiftRightUnsigned;

        LongPrototype.toSigned = function toSigned() {
          if (!this.unsigned) return this;
          return fromBits(this.low, this.high, false);
        };

        LongPrototype.toUnsigned = function toUnsigned() {
          if (this.unsigned) return this;
          return fromBits(this.low, this.high, true);
        };

        LongPrototype.toBytes = function (le) {
          return le ? this.toBytesLE() : this.toBytesBE();
        };

        LongPrototype.toBytesLE = function () {
          var hi = this.high,
              lo = this.low;
          return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24 & 0xff, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24 & 0xff];
        };

        LongPrototype.toBytesBE = function () {
          var hi = this.high,
              lo = this.low;
          return [hi >>> 24 & 0xff, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24 & 0xff, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
        };

        return Long;
      });
    }, {}], 54: [function (require, module, exports) {
      module.exports.Client = require('./rpcclient.js');

      module.exports.Server = require('./rpcserver.js');
    }, { "./rpcclient.js": 56, "./rpcserver.js": 57 }], 55: [function (require, module, exports) {
      (function (Buffer) {
        var Auth = function (options) {
          var self = this;
          options = options || {};

          var ext = {};
          var body = options.body || "<h1>401 Auth Required!</h1>";
          var users = options.users || [];
          var message = options.message || "Rpc Authentication";

          if (options.ext) {
            if (typeof options.ext.log === 'function') ext.log = options.ext.log;

            if (typeof options.ext.hash === 'function') ext.hash = option.ext.hash;

            if (typeof options.ext.users === 'function') ext.users = options.ext.users;

            if (typeof options.ext.block === 'function') ext.block = options.ext.block;
          }

          var validate = function (user) {
            var out = null;

            if (ext.users) out = ext.users(user);else {
              for (var i = 0; i < users.length; i++) {
                if (users[i].login === user[0]) {
                  if (ext.hash) {
                    if (ext.hash(user[1], users[i].hash)) out = users[i];
                  } else {
                    if (users[i].hash === user[1]) {
                      out = users[i];
                    }
                    break;
                  }
                }
              }
            }
            return out;
          };

          var checkUser = function (req) {
            var user = null;
            var header = req.headers['authorization'];

            if (header) {
              user = validate(new Buffer(header.split(" ")[1], 'base64').toString('utf8').split(':'));
            }

            return user;
          };

          var requestUser = function (res) {
            res.setHeader("WWW-Authenticate", 'Basic realm="' + message + '"');
            res.writeHead(401);
            res.end(body);
          };

          this.check = function (req, res, callback) {
            var user = null;

            user = checkUser(req);

            if (user) {
              if (ext.log) ext.log(req, res, user, callback);else callback(req, res, user);
            } else if (ext.log) ext.log(req, res, null, null);else requestUser(res);
          };
        };

        module.exports = Auth;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162 }], 56: [function (require, module, exports) {
      var http = require('http');
      var https = require('https');

      var Client = function (options) {
        var serv, agent;
        var self = this;
        options = options || {};

        var conf = {
          host: options.host || '127.0.0.1',
          path: options.path || '/',

          hash: options.hash || null,
          login: options.login || null
        };

        if (options.ssl) {
          conf.ssl = {
            sniName: options.ssl.sniName || 'RPC-Server',
            protocol: options.ssl.protocol || 'SSLv3_client_method'
          };

          if (options.ssl.pfx) {
            conf.ssl.pfx = options.ssl.pfx;
            conf.ssl.strict = options.ssl.strict || true;
          } else {
            if (options.ssl.ca) {
              conf.ssl.ca = options.ssl.ca;
              conf.ssl.strict = options.ssl.strict || true;
            }
            if (options.ssl.key && options.ssl.cert) {
              conf.ssl.key = options.ssl.key;
              conf.ssl.cert = options.ssl.certs;
            }
          }
          if (options.ssl.passphrase) {
            conf.ssl.passphrase = options.ssl.passphrase;
          }
        }

        if (conf.ssl) {
          serv = https;
          agent = new https.Agent();
          conf.port = options.port || 5433;
        } else {
          serv = http;
          agent = new http.Agent();
          conf.port = options.port || 5080;
        }

        var buildOptions = function (opts) {
          var options = {
            agent: agent,
            method: opts.method,

            host: conf.host,
            port: conf.port,
            path: opts.path,

            headers: {
              'host': conf.host + ':' + conf.port,
              'content-type': 'application/json',
              'content-length': opts.length
            }
          };

          if (opts.login && opts.hash) options.auth = opts.login + ':' + opts.hash;

          if (conf.ssl) {
            options.servername = conf.ssl.sniName || 'RPC-Server';
            options.secureProtocol = conf.ssl.protocol || 'SSLv3_client_method';

            if (conf.ssl.pfx) {
              options.pfx = conf.ssl.pfx;
              options.rejectUnauthorized = conf.ssl.strict || true;
            } else {
              if (conf.ssl.key && conf.ssl.cert) {
                options.key = conf.ssl.key;
                options.cert = conf.ssl.cert;
              }
              if (conf.ssl.ca) {
                options.ca = conf.ssl.ca;
                options.rejectUnauthorized = conf.ssl.strict || true;
              }
            }
            if (conf.ssl.passphrase) options.passphrase = conf.ssl.passphrase;
          }

          return options;
        };

        this.call = function (data, callback, opts) {
          opts = opts || {};
          var body = JSON.stringify(data);
          var options = buildOptions({
            length: body.length,
            method: opts.method || 'POST',
            path: opts.path || conf.path,

            login: opts.login || conf.login,
            hash: opts.hash || conf.hash
          });

          var request = serv.request(options);

          request.on('error', function (error) {
            console.error(error);
          });

          request.on('response', function (response) {
            var data = '';
            response.on('data', function (bytes) {
              data += bytes;
            });

            response.on('end', function () {
              var error, result;

              if (response.statusCode === 200 || response.statusCode === 304) {
                if (data.length > 0) {
                  try {
                    result = JSON.parse(data);
                  } catch (err) {
                    error = err;
                    console.error("Client error: failed to parse response from server.");
                  }
                }
              } else console.log("Client: TODO Status Code: " + response.statusCode);

              callback(error, result);
            });
          });

          request.end(body);
        };

        options = null;
      };

      module.exports = Client;
    }, { "http": 192, "https": 166 }], 57: [function (require, module, exports) {
      var http = require('http');
      var https = require('https');

      var Auth = require('./rpcauth');

      var Server = function (options) {
        var self = this;
        var serv = null;
        options = options || {};

        var conf = {
          functions: {},

          host: options.host || '127.0.0.1',
          queue: options.queue || 512,

          hash: options.hash || null,
          login: options.login || null
        };

        if (options.strict !== null) conf.strict = options.strict;else conf.strict = true;

        if (options.ssl) {
          conf.ssl = {
            sniName: options.ssl.sniName || 'RPC-Server',
            protocol: options.ssl.protocol || 'SSLv3_server_method',

            clientCert: options.ssl.clientCert || false,
            handshakeTimeout: options.ssl.handshakeTimeout || 60,

            ciphers: options.ssl.ciphers || 'AES128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH'
          };

          if (options.ssl.clientCert !== null) conf.ssl.clientCert = options.ssl.clientCert;else conf.ssl.clientCert = false;

          if (options.ssl.ciphersOrder !== null) conf.ssl.ciphersOrder = options.ssl.ciphersOrder;else conf.ssl.ciphersOrder = true;

          if (options.ssl.pfx) {
            conf.ssl.pfx = options.ssl.pfx;
            if (options.ssl.strict !== null) conf.ssl.strict = options.ssl.strict;else conf.ssl.strict = true;
          } else if (options.ssl.key && options.ssl.cert) {
            if (options.ssl.ca) {
              conf.ssl.ca = options.ssl.ca;
              if (options.ssl.strict !== null) conf.ssl.strict = options.ssl.strict;else conf.ssl.strict = true;
            }

            conf.ssl.key = options.ssl.key;
            conf.ssl.cert = options.ssl.certs;
          }


          if (options.ssl.sniCallback) conf.ssl.sniCallback = options.ssl.sniCallback;
          if (options.ssl.passphrase) conf.ssl.passphrase = options.ssl.passphrase;
        }

        if (options.auth) {
          if (options.auth.auth) conf.auth = options.auth.auth;else conf.auth = new Auth(options.auth);
        }

        var setReply = function (result, error, id) {
          if (result || error) {
            var out = {};

            if (conf.strict) {
              out.id = null, out.jsonrpc = "2.0";
            }

            if (id) out.id = id;

            if (error) out.error = error;else if (result) out.result = result;

            return out;
          } else return null;
        };

        var callHandler = function (res, requests) {
          if (requests.length > res.rpc.idx) {
            var error = null;

            var r = requests[res.rpc.idx];
            res.rpc.idx++;

            if (conf.strict && (r.jsonrpc !== '2.0' || !r.id)) error = { code: -32600, message: "Invalid Request" };else if (typeof r.method === 'string') {
              if (typeof conf.functions[r.method] === 'function') conf.functions[r.method](r.params, function (err, ret) {
                var reply = setReply(ret, err, r.id);
                if (reply) res.rpc.batch.push(reply);
                callHandler(res, requests);
              });else error = { code: -32601, message: "Method not found" };
            } else error = { code: -32600, message: "Invalid Request" };

            if (error) {
              res.rpc.batch.push(setReply(null, error, r.id));
              callHandler(res, requests);
            }
          } else {
            if (res.rpc.batch.length > 0) {
              if (res.rpc.isBatch) res.end(JSON.stringify(res.rpc.batch));else res.end(JSON.stringify(res.rpc.batch[0]));
            } else res.end();
          }
        };

        var dataHandler = function (res, data) {
          var reply = {};
          var request = null;

          res.rpc = {
            idx: 0,
            batch: [],
            isBatch: false
          };

          try {
            requests = JSON.parse(data);
          } catch (err) {
            reply = setReply(null, { code: -32700, message: "Parse error" });
            res.end(JSON.stringify(reply));
            return;
          }

          if (!Array.isArray(requests)) requests = [requests];

          if (requests.length > 1) res.rpc.isBatch = true;else res.rpc.isBatch = false;

          if (requests.length > 0) {
            callHandler(res, requests);
          } else {
            reply = setReply(null, { code: -32600, message: "Invalid Request" });
            res.end(JSON.stringify(reply));
            return;
          }
        };

        var requestHandler = function (req, res) {
          if (conf.auth) {
            conf.auth.check(req, res, function (req, res, user) {
              var data = '';
              req.on('data', function (bytes) {
                data += bytes;
              });

              req.on('end', function () {
                res.user = user;
                dataHandler(res, data);
              });
            });
          } else {
            var data = '';
            req.on('data', function (bytes) {
              data += bytes;
            });

            req.on('end', function () {
              dataHandler(res, data);
            });
          }
        };

        if (conf.ssl) {
          var opts = {
            servername: conf.sniName || 'RPC-Server',
            requestCert: conf.ssl.clientCert || false,
            secureProtocol: conf.ssl.protocol || 'SSLv3_server_method',
            handshakeTimeout: conf.ssl.handshakeTimeout || 60,

            ciphers: conf.ssl.ciphers || 'AES128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH',
            honorCipherOrder: conf.ssl.ciphersOrder || true
          };

          if (conf.ssl.pfx) {
            opts.pfx = conf.ssl.pfx;
            opts.rejectUnauthorized = conf.ssl.strict || true;
          } else {
            if (conf.ssl.ca) {
              opts.ca = conf.ssl.ca;
              opts.rejectUnauthorized = conf.ssl.strict || true;
            }
            if (conf.ssl.key && conf.ssl.cert) {
              opts.key = conf.ssl.key;
              opts.cert = conf.ssl.cert;
            }
          }
          if (conf.ssl.sniCallback) opts.SNICallback = conf.ssl.sniCallback;
          if (conf.ssl.passphrase) opts.passphrase = conf.ssl.passphrase;

          try {
            conf.port = options.port || 5433;
            serv = https.createServer(opts, requestHandler);
          } catch (error) {
            console.error(error);
          }
        } else {
          try {
            conf.port = options.port || 5080;
            serv = http.createServer(requestHandler);
          } catch (error) {
            console.error(error);
          }
        }

        serv.on('error', function (error) {
          console.error(error);
        });

        this.addMethod = function (name, func) {
          if (name && typeof func === 'function') conf.functions[name] = func;
        };

        this.delMethod = function (name) {
          if (conf.functions[name]) conf.functions[name] = null;
        };

        this.start = function (callback) {
          try {
            serv.listen(conf.port, conf.host, conf.queue, callback);
          } catch (error) {
            callback(error);
          }
        };

        this.stop = function (callback) {
          try {
            serv.close(callback);
          } catch (error) {
            callback(error);
          }
        };

        options = null;
      };

      module.exports = Server;
    }, { "./rpcauth": 55, "http": 192, "https": 166 }], 58: [function (require, module, exports) {
      (function (process) {

        (function (definition) {
          "use strict";

          if (typeof bootstrap === "function") {
            bootstrap("promise", definition);
          } else if (typeof exports === "object" && typeof module === "object") {
            module.exports = definition();
          } else if (typeof define === "function" && define.amd) {
            define(definition);
          } else if (typeof ses !== "undefined") {
            if (!ses.ok()) {
              return;
            } else {
              ses.makeQ = definition;
            }
          } else if (typeof window !== "undefined" || typeof self !== "undefined") {
            var global = typeof window !== "undefined" ? window : self;

            var previousQ = global.Q;
            global.Q = definition();

            global.Q.noConflict = function () {
              global.Q = previousQ;
              return this;
            };
          } else {
            throw new Error("This environment was not anticipated by Q. Please file a bug.");
          }
        })(function () {
          "use strict";

          var hasStacks = false;
          try {
            throw new Error();
          } catch (e) {
            hasStacks = !!e.stack;
          }

          var qStartingLine = captureLine();
          var qFileName;

          var noop = function () {};

          var nextTick = function () {
            var head = { task: void 0, next: null };
            var tail = head;
            var flushing = false;
            var requestTick = void 0;
            var isNodeJS = false;

            var laterQueue = [];

            function flush() {
              var task, domain;

              while (head.next) {
                head = head.next;
                task = head.task;
                head.task = void 0;
                domain = head.domain;

                if (domain) {
                  head.domain = void 0;
                  domain.enter();
                }
                runSingle(task, domain);
              }
              while (laterQueue.length) {
                task = laterQueue.pop();
                runSingle(task);
              }
              flushing = false;
            }

            function runSingle(task, domain) {
              try {
                task();
              } catch (e) {
                if (isNodeJS) {
                  if (domain) {
                    domain.exit();
                  }
                  setTimeout(flush, 0);
                  if (domain) {
                    domain.enter();
                  }

                  throw e;
                } else {
                  setTimeout(function () {
                    throw e;
                  }, 0);
                }
              }

              if (domain) {
                domain.exit();
              }
            }

            nextTick = function (task) {
              tail = tail.next = {
                task: task,
                domain: isNodeJS && process.domain,
                next: null
              };

              if (!flushing) {
                flushing = true;
                requestTick();
              }
            };

            if (typeof process === "object" && process.toString() === "[object process]" && process.nextTick) {
              isNodeJS = true;

              requestTick = function () {
                process.nextTick(flush);
              };
            } else if (typeof setImmediate === "function") {
              if (typeof window !== "undefined") {
                requestTick = setImmediate.bind(window, flush);
              } else {
                requestTick = function () {
                  setImmediate(flush);
                };
              }
            } else if (typeof MessageChannel !== "undefined") {
              var channel = new MessageChannel();

              channel.port1.onmessage = function () {
                requestTick = requestPortTick;
                channel.port1.onmessage = flush;
                flush();
              };
              var requestPortTick = function () {
                channel.port2.postMessage(0);
              };
              requestTick = function () {
                setTimeout(flush, 0);
                requestPortTick();
              };
            } else {
              requestTick = function () {
                setTimeout(flush, 0);
              };
            }

            nextTick.runAfter = function (task) {
              laterQueue.push(task);
              if (!flushing) {
                flushing = true;
                requestTick();
              }
            };
            return nextTick;
          }();

          var call = Function.call;
          function uncurryThis(f) {
            return function () {
              return call.apply(f, arguments);
            };
          }


          var array_slice = uncurryThis(Array.prototype.slice);

          var array_reduce = uncurryThis(Array.prototype.reduce || function (callback, basis) {
            var index = 0,
                length = this.length;

            if (arguments.length === 1) {
              do {
                if (index in this) {
                  basis = this[index++];
                  break;
                }
                if (++index >= length) {
                  throw new TypeError();
                }
              } while (1);
            }

            for (; index < length; index++) {
              if (index in this) {
                basis = callback(basis, this[index], index);
              }
            }
            return basis;
          });

          var array_indexOf = uncurryThis(Array.prototype.indexOf || function (value) {
            for (var i = 0; i < this.length; i++) {
              if (this[i] === value) {
                return i;
              }
            }
            return -1;
          });

          var array_map = uncurryThis(Array.prototype.map || function (callback, thisp) {
            var self = this;
            var collect = [];
            array_reduce(self, function (undefined, value, index) {
              collect.push(callback.call(thisp, value, index, self));
            }, void 0);
            return collect;
          });

          var object_create = Object.create || function (prototype) {
            function Type() {}
            Type.prototype = prototype;
            return new Type();
          };

          var object_defineProperty = Object.defineProperty || function (obj, prop, descriptor) {
            obj[prop] = descriptor.value;
            return obj;
          };

          var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

          var object_keys = Object.keys || function (object) {
            var keys = [];
            for (var key in object) {
              if (object_hasOwnProperty(object, key)) {
                keys.push(key);
              }
            }
            return keys;
          };

          var object_toString = uncurryThis(Object.prototype.toString);

          function isObject(value) {
            return value === Object(value);
          }

          function isStopIteration(exception) {
            return object_toString(exception) === "[object StopIteration]" || exception instanceof QReturnValue;
          }

          var QReturnValue;
          if (typeof ReturnValue !== "undefined") {
            QReturnValue = ReturnValue;
          } else {
            QReturnValue = function (value) {
              this.value = value;
            };
          }

          var STACK_JUMP_SEPARATOR = "From previous event:";

          function makeStackTraceLong(error, promise) {
            if (hasStacks && promise.stack && typeof error === "object" && error !== null && error.stack) {
              var stacks = [];
              for (var p = promise; !!p; p = p.source) {
                if (p.stack && (!error.__minimumStackCounter__ || error.__minimumStackCounter__ > p.stackCounter)) {
                  object_defineProperty(error, "__minimumStackCounter__", { value: p.stackCounter, configurable: true });
                  stacks.unshift(p.stack);
                }
              }
              stacks.unshift(error.stack);

              var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
              var stack = filterStackString(concatedStacks);
              object_defineProperty(error, "stack", { value: stack, configurable: true });
            }
          }

          function filterStackString(stackString) {
            var lines = stackString.split("\n");
            var desiredLines = [];
            for (var i = 0; i < lines.length; ++i) {
              var line = lines[i];

              if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
                desiredLines.push(line);
              }
            }
            return desiredLines.join("\n");
          }

          function isNodeFrame(stackLine) {
            return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
          }

          function getFileNameAndLineNumber(stackLine) {
            var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
            if (attempt1) {
              return [attempt1[1], Number(attempt1[2])];
            }

            var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
            if (attempt2) {
              return [attempt2[1], Number(attempt2[2])];
            }

            var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
            if (attempt3) {
              return [attempt3[1], Number(attempt3[2])];
            }
          }

          function isInternalFrame(stackLine) {
            var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

            if (!fileNameAndLineNumber) {
              return false;
            }

            var fileName = fileNameAndLineNumber[0];
            var lineNumber = fileNameAndLineNumber[1];

            return fileName === qFileName && lineNumber >= qStartingLine && lineNumber <= qEndingLine;
          }

          function captureLine() {
            if (!hasStacks) {
              return;
            }

            try {
              throw new Error();
            } catch (e) {
              var lines = e.stack.split("\n");
              var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
              var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
              if (!fileNameAndLineNumber) {
                return;
              }

              qFileName = fileNameAndLineNumber[0];
              return fileNameAndLineNumber[1];
            }
          }

          function deprecate(callback, name, alternative) {
            return function () {
              if (typeof console !== "undefined" && typeof console.warn === "function") {
                console.warn(name + " is deprecated, use " + alternative + " instead.", new Error("").stack);
              }
              return callback.apply(callback, arguments);
            };
          }

          function Q(value) {
            if (value instanceof Promise) {
              return value;
            }

            if (isPromiseAlike(value)) {
              return coerce(value);
            } else {
              return fulfill(value);
            }
          }
          Q.resolve = Q;

          Q.nextTick = nextTick;

          Q.longStackSupport = false;

          var longStackCounter = 1;

          if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
            Q.longStackSupport = true;
          }

          Q.defer = defer;
          function defer() {
            var messages = [],
                progressListeners = [],
                resolvedPromise;

            var deferred = object_create(defer.prototype);
            var promise = object_create(Promise.prototype);

            promise.promiseDispatch = function (resolve, op, operands) {
              var args = array_slice(arguments);
              if (messages) {
                messages.push(args);
                if (op === "when" && operands[1]) {
                  progressListeners.push(operands[1]);
                }
              } else {
                Q.nextTick(function () {
                  resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
                });
              }
            };

            promise.valueOf = function () {
              if (messages) {
                return promise;
              }
              var nearerValue = nearer(resolvedPromise);
              if (isPromise(nearerValue)) {
                resolvedPromise = nearerValue;
              }
              return nearerValue;
            };

            promise.inspect = function () {
              if (!resolvedPromise) {
                return { state: "pending" };
              }
              return resolvedPromise.inspect();
            };

            if (Q.longStackSupport && hasStacks) {
              try {
                throw new Error();
              } catch (e) {
                promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
                promise.stackCounter = longStackCounter++;
              }
            }

            function become(newPromise) {
              resolvedPromise = newPromise;

              if (Q.longStackSupport && hasStacks) {
                promise.source = newPromise;
              }

              array_reduce(messages, function (undefined, message) {
                Q.nextTick(function () {
                  newPromise.promiseDispatch.apply(newPromise, message);
                });
              }, void 0);

              messages = void 0;
              progressListeners = void 0;
            }

            deferred.promise = promise;
            deferred.resolve = function (value) {
              if (resolvedPromise) {
                return;
              }

              become(Q(value));
            };

            deferred.fulfill = function (value) {
              if (resolvedPromise) {
                return;
              }

              become(fulfill(value));
            };
            deferred.reject = function (reason) {
              if (resolvedPromise) {
                return;
              }

              become(reject(reason));
            };
            deferred.notify = function (progress) {
              if (resolvedPromise) {
                return;
              }

              array_reduce(progressListeners, function (undefined, progressListener) {
                Q.nextTick(function () {
                  progressListener(progress);
                });
              }, void 0);
            };

            return deferred;
          }

          defer.prototype.makeNodeResolver = function () {
            var self = this;
            return function (error, value) {
              if (error) {
                self.reject(error);
              } else if (arguments.length > 2) {
                self.resolve(array_slice(arguments, 1));
              } else {
                self.resolve(value);
              }
            };
          };

          Q.Promise = promise;
          Q.promise = promise;
          function promise(resolver) {
            if (typeof resolver !== "function") {
              throw new TypeError("resolver must be a function.");
            }
            var deferred = defer();
            try {
              resolver(deferred.resolve, deferred.reject, deferred.notify);
            } catch (reason) {
              deferred.reject(reason);
            }
            return deferred.promise;
          }

          promise.race = race;
          promise.all = all;
          promise.reject = reject;
          promise.resolve = Q;
          Q.passByCopy = function (object) {
            return object;
          };

          Promise.prototype.passByCopy = function () {
            return this;
          };

          Q.join = function (x, y) {
            return Q(x).join(y);
          };

          Promise.prototype.join = function (that) {
            return Q([this, that]).spread(function (x, y) {
              if (x === y) {
                return x;
              } else {
                throw new Error("Q can't join: not the same: " + x + " " + y);
              }
            });
          };

          Q.race = race;
          function race(answerPs) {
            return promise(function (resolve, reject) {
              for (var i = 0, len = answerPs.length; i < len; i++) {
                Q(answerPs[i]).then(resolve, reject);
              }
            });
          }

          Promise.prototype.race = function () {
            return this.then(Q.race);
          };

          Q.makePromise = Promise;
          function Promise(descriptor, fallback, inspect) {
            if (fallback === void 0) {
              fallback = function (op) {
                return reject(new Error("Promise does not support operation: " + op));
              };
            }
            if (inspect === void 0) {
              inspect = function () {
                return { state: "unknown" };
              };
            }

            var promise = object_create(Promise.prototype);

            promise.promiseDispatch = function (resolve, op, args) {
              var result;
              try {
                if (descriptor[op]) {
                  result = descriptor[op].apply(promise, args);
                } else {
                  result = fallback.call(promise, op, args);
                }
              } catch (exception) {
                result = reject(exception);
              }
              if (resolve) {
                resolve(result);
              }
            };

            promise.inspect = inspect;

            if (inspect) {
              var inspected = inspect();
              if (inspected.state === "rejected") {
                promise.exception = inspected.reason;
              }

              promise.valueOf = function () {
                var inspected = inspect();
                if (inspected.state === "pending" || inspected.state === "rejected") {
                  return promise;
                }
                return inspected.value;
              };
            }

            return promise;
          }

          Promise.prototype.toString = function () {
            return "[object Promise]";
          };

          Promise.prototype.then = function (fulfilled, rejected, progressed) {
            var self = this;
            var deferred = defer();
            var done = false;

            function _fulfilled(value) {
              try {
                return typeof fulfilled === "function" ? fulfilled(value) : value;
              } catch (exception) {
                return reject(exception);
              }
            }

            function _rejected(exception) {
              if (typeof rejected === "function") {
                makeStackTraceLong(exception, self);
                try {
                  return rejected(exception);
                } catch (newException) {
                  return reject(newException);
                }
              }
              return reject(exception);
            }

            function _progressed(value) {
              return typeof progressed === "function" ? progressed(value) : value;
            }

            Q.nextTick(function () {
              self.promiseDispatch(function (value) {
                if (done) {
                  return;
                }
                done = true;

                deferred.resolve(_fulfilled(value));
              }, "when", [function (exception) {
                if (done) {
                  return;
                }
                done = true;

                deferred.resolve(_rejected(exception));
              }]);
            });

            self.promiseDispatch(void 0, "when", [void 0, function (value) {
              var newValue;
              var threw = false;
              try {
                newValue = _progressed(value);
              } catch (e) {
                threw = true;
                if (Q.onerror) {
                  Q.onerror(e);
                } else {
                  throw e;
                }
              }

              if (!threw) {
                deferred.notify(newValue);
              }
            }]);

            return deferred.promise;
          };

          Q.tap = function (promise, callback) {
            return Q(promise).tap(callback);
          };

          Promise.prototype.tap = function (callback) {
            callback = Q(callback);

            return this.then(function (value) {
              return callback.fcall(value).thenResolve(value);
            });
          };

          Q.when = when;
          function when(value, fulfilled, rejected, progressed) {
            return Q(value).then(fulfilled, rejected, progressed);
          }

          Promise.prototype.thenResolve = function (value) {
            return this.then(function () {
              return value;
            });
          };

          Q.thenResolve = function (promise, value) {
            return Q(promise).thenResolve(value);
          };

          Promise.prototype.thenReject = function (reason) {
            return this.then(function () {
              throw reason;
            });
          };

          Q.thenReject = function (promise, reason) {
            return Q(promise).thenReject(reason);
          };

          Q.nearer = nearer;
          function nearer(value) {
            if (isPromise(value)) {
              var inspected = value.inspect();
              if (inspected.state === "fulfilled") {
                return inspected.value;
              }
            }
            return value;
          }

          Q.isPromise = isPromise;
          function isPromise(object) {
            return object instanceof Promise;
          }

          Q.isPromiseAlike = isPromiseAlike;
          function isPromiseAlike(object) {
            return isObject(object) && typeof object.then === "function";
          }

          Q.isPending = isPending;
          function isPending(object) {
            return isPromise(object) && object.inspect().state === "pending";
          }

          Promise.prototype.isPending = function () {
            return this.inspect().state === "pending";
          };

          Q.isFulfilled = isFulfilled;
          function isFulfilled(object) {
            return !isPromise(object) || object.inspect().state === "fulfilled";
          }

          Promise.prototype.isFulfilled = function () {
            return this.inspect().state === "fulfilled";
          };

          Q.isRejected = isRejected;
          function isRejected(object) {
            return isPromise(object) && object.inspect().state === "rejected";
          }

          Promise.prototype.isRejected = function () {
            return this.inspect().state === "rejected";
          };

          var unhandledReasons = [];
          var unhandledRejections = [];
          var reportedUnhandledRejections = [];
          var trackUnhandledRejections = true;

          function resetUnhandledRejections() {
            unhandledReasons.length = 0;
            unhandledRejections.length = 0;

            if (!trackUnhandledRejections) {
              trackUnhandledRejections = true;
            }
          }

          function trackRejection(promise, reason) {
            if (!trackUnhandledRejections) {
              return;
            }
            if (typeof process === "object" && typeof process.emit === "function") {
              Q.nextTick.runAfter(function () {
                if (array_indexOf(unhandledRejections, promise) !== -1) {
                  process.emit("unhandledRejection", reason, promise);
                  reportedUnhandledRejections.push(promise);
                }
              });
            }

            unhandledRejections.push(promise);
            if (reason && typeof reason.stack !== "undefined") {
              unhandledReasons.push(reason.stack);
            } else {
              unhandledReasons.push("(no stack) " + reason);
            }
          }

          function untrackRejection(promise) {
            if (!trackUnhandledRejections) {
              return;
            }

            var at = array_indexOf(unhandledRejections, promise);
            if (at !== -1) {
              if (typeof process === "object" && typeof process.emit === "function") {
                Q.nextTick.runAfter(function () {
                  var atReport = array_indexOf(reportedUnhandledRejections, promise);
                  if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                  }
                });
              }
              unhandledRejections.splice(at, 1);
              unhandledReasons.splice(at, 1);
            }
          }

          Q.resetUnhandledRejections = resetUnhandledRejections;

          Q.getUnhandledReasons = function () {
            return unhandledReasons.slice();
          };

          Q.stopUnhandledRejectionTracking = function () {
            resetUnhandledRejections();
            trackUnhandledRejections = false;
          };

          resetUnhandledRejections();

          Q.reject = reject;
          function reject(reason) {
            var rejection = Promise({
              "when": function (rejected) {
                if (rejected) {
                  untrackRejection(this);
                }
                return rejected ? rejected(reason) : this;
              }
            }, function fallback() {
              return this;
            }, function inspect() {
              return { state: "rejected", reason: reason };
            });

            trackRejection(rejection, reason);

            return rejection;
          }

          Q.fulfill = fulfill;
          function fulfill(value) {
            return Promise({
              "when": function () {
                return value;
              },
              "get": function (name) {
                return value[name];
              },
              "set": function (name, rhs) {
                value[name] = rhs;
              },
              "delete": function (name) {
                delete value[name];
              },
              "post": function (name, args) {
                if (name === null || name === void 0) {
                  return value.apply(void 0, args);
                } else {
                  return value[name].apply(value, args);
                }
              },
              "apply": function (thisp, args) {
                return value.apply(thisp, args);
              },
              "keys": function () {
                return object_keys(value);
              }
            }, void 0, function inspect() {
              return { state: "fulfilled", value: value };
            });
          }

          function coerce(promise) {
            var deferred = defer();
            Q.nextTick(function () {
              try {
                promise.then(deferred.resolve, deferred.reject, deferred.notify);
              } catch (exception) {
                deferred.reject(exception);
              }
            });
            return deferred.promise;
          }

          Q.master = master;
          function master(object) {
            return Promise({
              "isDef": function () {}
            }, function fallback(op, args) {
              return dispatch(object, op, args);
            }, function () {
              return Q(object).inspect();
            });
          }

          Q.spread = spread;
          function spread(value, fulfilled, rejected) {
            return Q(value).spread(fulfilled, rejected);
          }

          Promise.prototype.spread = function (fulfilled, rejected) {
            return this.all().then(function (array) {
              return fulfilled.apply(void 0, array);
            }, rejected);
          };

          Q.async = async;
          function async(makeGenerator) {
            return function () {
              function continuer(verb, arg) {
                var result;

                if (typeof StopIteration === "undefined") {
                  try {
                    result = generator[verb](arg);
                  } catch (exception) {
                    return reject(exception);
                  }
                  if (result.done) {
                    return Q(result.value);
                  } else {
                    return when(result.value, callback, errback);
                  }
                } else {
                  try {
                    result = generator[verb](arg);
                  } catch (exception) {
                    if (isStopIteration(exception)) {
                      return Q(exception.value);
                    } else {
                      return reject(exception);
                    }
                  }
                  return when(result, callback, errback);
                }
              }
              var generator = makeGenerator.apply(this, arguments);
              var callback = continuer.bind(continuer, "next");
              var errback = continuer.bind(continuer, "throw");
              return callback();
            };
          }

          Q.spawn = spawn;
          function spawn(makeGenerator) {
            Q.done(Q.async(makeGenerator)());
          }

          Q["return"] = _return;
          function _return(value) {
            throw new QReturnValue(value);
          }

          Q.promised = promised;
          function promised(callback) {
            return function () {
              return spread([this, all(arguments)], function (self, args) {
                return callback.apply(self, args);
              });
            };
          }

          Q.dispatch = dispatch;
          function dispatch(object, op, args) {
            return Q(object).dispatch(op, args);
          }

          Promise.prototype.dispatch = function (op, args) {
            var self = this;
            var deferred = defer();
            Q.nextTick(function () {
              self.promiseDispatch(deferred.resolve, op, args);
            });
            return deferred.promise;
          };

          Q.get = function (object, key) {
            return Q(object).dispatch("get", [key]);
          };

          Promise.prototype.get = function (key) {
            return this.dispatch("get", [key]);
          };

          Q.set = function (object, key, value) {
            return Q(object).dispatch("set", [key, value]);
          };

          Promise.prototype.set = function (key, value) {
            return this.dispatch("set", [key, value]);
          };

          Q.del = Q["delete"] = function (object, key) {
            return Q(object).dispatch("delete", [key]);
          };

          Promise.prototype.del = Promise.prototype["delete"] = function (key) {
            return this.dispatch("delete", [key]);
          };

          Q.mapply = Q.post = function (object, name, args) {
            return Q(object).dispatch("post", [name, args]);
          };

          Promise.prototype.mapply = Promise.prototype.post = function (name, args) {
            return this.dispatch("post", [name, args]);
          };

          Q.send = Q.mcall = Q.invoke = function (object, name) {
            return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
          };

          Promise.prototype.send = Promise.prototype.mcall = Promise.prototype.invoke = function (name) {
            return this.dispatch("post", [name, array_slice(arguments, 1)]);
          };

          Q.fapply = function (object, args) {
            return Q(object).dispatch("apply", [void 0, args]);
          };

          Promise.prototype.fapply = function (args) {
            return this.dispatch("apply", [void 0, args]);
          };

          Q["try"] = Q.fcall = function (object) {
            return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
          };

          Promise.prototype.fcall = function () {
            return this.dispatch("apply", [void 0, array_slice(arguments)]);
          };

          Q.fbind = function (object) {
            var promise = Q(object);
            var args = array_slice(arguments, 1);
            return function fbound() {
              return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
            };
          };
          Promise.prototype.fbind = function () {
            var promise = this;
            var args = array_slice(arguments);
            return function fbound() {
              return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
            };
          };

          Q.keys = function (object) {
            return Q(object).dispatch("keys", []);
          };

          Promise.prototype.keys = function () {
            return this.dispatch("keys", []);
          };

          Q.all = all;
          function all(promises) {
            return when(promises, function (promises) {
              var pendingCount = 0;
              var deferred = defer();
              array_reduce(promises, function (undefined, promise, index) {
                var snapshot;
                if (isPromise(promise) && (snapshot = promise.inspect()).state === "fulfilled") {
                  promises[index] = snapshot.value;
                } else {
                  ++pendingCount;
                  when(promise, function (value) {
                    promises[index] = value;
                    if (--pendingCount === 0) {
                      deferred.resolve(promises);
                    }
                  }, deferred.reject, function (progress) {
                    deferred.notify({ index: index, value: progress });
                  });
                }
              }, void 0);
              if (pendingCount === 0) {
                deferred.resolve(promises);
              }
              return deferred.promise;
            });
          }

          Promise.prototype.all = function () {
            return all(this);
          };

          Q.any = any;

          function any(promises) {
            if (promises.length === 0) {
              return Q.resolve();
            }

            var deferred = Q.defer();
            var pendingCount = 0;
            array_reduce(promises, function (prev, current, index) {
              var promise = promises[index];

              pendingCount++;

              when(promise, onFulfilled, onRejected, onProgress);
              function onFulfilled(result) {
                deferred.resolve(result);
              }
              function onRejected(err) {
                pendingCount--;
                if (pendingCount === 0) {
                  var rejection = err || new Error("" + err);

                  rejection.message = "Q can't get fulfillment value from any promise, all " + "promises were rejected. Last error message: " + rejection.message;

                  deferred.reject(rejection);
                }
              }
              function onProgress(progress) {
                deferred.notify({
                  index: index,
                  value: progress
                });
              }
            }, undefined);

            return deferred.promise;
          }

          Promise.prototype.any = function () {
            return any(this);
          };

          Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
          function allResolved(promises) {
            return when(promises, function (promises) {
              promises = array_map(promises, Q);
              return when(all(array_map(promises, function (promise) {
                return when(promise, noop, noop);
              })), function () {
                return promises;
              });
            });
          }

          Promise.prototype.allResolved = function () {
            return allResolved(this);
          };

          Q.allSettled = allSettled;
          function allSettled(promises) {
            return Q(promises).allSettled();
          }

          Promise.prototype.allSettled = function () {
            return this.then(function (promises) {
              return all(array_map(promises, function (promise) {
                promise = Q(promise);
                function regardless() {
                  return promise.inspect();
                }
                return promise.then(regardless, regardless);
              }));
            });
          };

          Q.fail = Q["catch"] = function (object, rejected) {
            return Q(object).then(void 0, rejected);
          };

          Promise.prototype.fail = Promise.prototype["catch"] = function (rejected) {
            return this.then(void 0, rejected);
          };

          Q.progress = progress;
          function progress(object, progressed) {
            return Q(object).then(void 0, void 0, progressed);
          }

          Promise.prototype.progress = function (progressed) {
            return this.then(void 0, void 0, progressed);
          };

          Q.fin = Q["finally"] = function (object, callback) {
            return Q(object)["finally"](callback);
          };

          Promise.prototype.fin = Promise.prototype["finally"] = function (callback) {
            if (!callback || typeof callback.apply !== "function") {
              throw new Error("Q can't apply finally callback");
            }
            callback = Q(callback);
            return this.then(function (value) {
              return callback.fcall().then(function () {
                return value;
              });
            }, function (reason) {
              return callback.fcall().then(function () {
                throw reason;
              });
            });
          };

          Q.done = function (object, fulfilled, rejected, progress) {
            return Q(object).done(fulfilled, rejected, progress);
          };

          Promise.prototype.done = function (fulfilled, rejected, progress) {
            var onUnhandledError = function (error) {
              Q.nextTick(function () {
                makeStackTraceLong(error, promise);
                if (Q.onerror) {
                  Q.onerror(error);
                } else {
                  throw error;
                }
              });
            };

            var promise = fulfilled || rejected || progress ? this.then(fulfilled, rejected, progress) : this;

            if (typeof process === "object" && process && process.domain) {
              onUnhandledError = process.domain.bind(onUnhandledError);
            }

            promise.then(void 0, onUnhandledError);
          };

          Q.timeout = function (object, ms, error) {
            return Q(object).timeout(ms, error);
          };

          Promise.prototype.timeout = function (ms, error) {
            var deferred = defer();
            var timeoutId = setTimeout(function () {
              if (!error || "string" === typeof error) {
                error = new Error(error || "Timed out after " + ms + " ms");
                error.code = "ETIMEDOUT";
              }
              deferred.reject(error);
            }, ms);

            this.then(function (value) {
              clearTimeout(timeoutId);
              deferred.resolve(value);
            }, function (exception) {
              clearTimeout(timeoutId);
              deferred.reject(exception);
            }, deferred.notify);

            return deferred.promise;
          };

          Q.delay = function (object, timeout) {
            if (timeout === void 0) {
              timeout = object;
              object = void 0;
            }
            return Q(object).delay(timeout);
          };

          Promise.prototype.delay = function (timeout) {
            return this.then(function (value) {
              var deferred = defer();
              setTimeout(function () {
                deferred.resolve(value);
              }, timeout);
              return deferred.promise;
            });
          };

          Q.nfapply = function (callback, args) {
            return Q(callback).nfapply(args);
          };

          Promise.prototype.nfapply = function (args) {
            var deferred = defer();
            var nodeArgs = array_slice(args);
            nodeArgs.push(deferred.makeNodeResolver());
            this.fapply(nodeArgs).fail(deferred.reject);
            return deferred.promise;
          };

          Q.nfcall = function (callback) {
            var args = array_slice(arguments, 1);
            return Q(callback).nfapply(args);
          };

          Promise.prototype.nfcall = function () {
            var nodeArgs = array_slice(arguments);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            this.fapply(nodeArgs).fail(deferred.reject);
            return deferred.promise;
          };

          Q.nfbind = Q.denodeify = function (callback) {
            if (callback === undefined) {
              throw new Error("Q can't wrap an undefined function");
            }
            var baseArgs = array_slice(arguments, 1);
            return function () {
              var nodeArgs = baseArgs.concat(array_slice(arguments));
              var deferred = defer();
              nodeArgs.push(deferred.makeNodeResolver());
              Q(callback).fapply(nodeArgs).fail(deferred.reject);
              return deferred.promise;
            };
          };

          Promise.prototype.nfbind = Promise.prototype.denodeify = function () {
            var args = array_slice(arguments);
            args.unshift(this);
            return Q.denodeify.apply(void 0, args);
          };

          Q.nbind = function (callback, thisp) {
            var baseArgs = array_slice(arguments, 2);
            return function () {
              var nodeArgs = baseArgs.concat(array_slice(arguments));
              var deferred = defer();
              nodeArgs.push(deferred.makeNodeResolver());
              function bound() {
                return callback.apply(thisp, arguments);
              }
              Q(bound).fapply(nodeArgs).fail(deferred.reject);
              return deferred.promise;
            };
          };

          Promise.prototype.nbind = function () {
            var args = array_slice(arguments, 0);
            args.unshift(this);
            return Q.nbind.apply(void 0, args);
          };

          Q.nmapply = Q.npost = function (object, name, args) {
            return Q(object).npost(name, args);
          };

          Promise.prototype.nmapply = Promise.prototype.npost = function (name, args) {
            var nodeArgs = array_slice(args || []);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
            return deferred.promise;
          };

          Q.nsend = Q.nmcall = Q.ninvoke = function (object, name) {
            var nodeArgs = array_slice(arguments, 2);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
            return deferred.promise;
          };

          Promise.prototype.nsend = Promise.prototype.nmcall = Promise.prototype.ninvoke = function (name) {
            var nodeArgs = array_slice(arguments, 1);
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
            return deferred.promise;
          };

          Q.nodeify = nodeify;
          function nodeify(object, nodeback) {
            return Q(object).nodeify(nodeback);
          }

          Promise.prototype.nodeify = function (nodeback) {
            if (nodeback) {
              this.then(function (value) {
                Q.nextTick(function () {
                  nodeback(null, value);
                });
              }, function (error) {
                Q.nextTick(function () {
                  nodeback(error);
                });
              });
            } else {
              return this;
            }
          };

          Q.noConflict = function () {
            throw new Error("Q.noConflict only works when Q is used as a global");
          };

          var qEndingLine = captureLine();

          return Q;
        });
      }).call(this, require('_process'));
    }, { "_process": 172 }], 59: [function (require, module, exports) {
      (function (process, global) {

        function oldBrowser() {
          throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');
        }

        var Buffer = require('safe-buffer').Buffer;
        var crypto = global.crypto || global.msCrypto;

        if (crypto && crypto.getRandomValues) {
          module.exports = randomBytes;
        } else {
          module.exports = oldBrowser;
        }

        function randomBytes(size, cb) {
          if (size > 65536) throw new Error('requested too many random bytes');

          var rawBytes = new global.Uint8Array(size);

          if (size > 0) {
            crypto.getRandomValues(rawBytes);
          }

          var bytes = Buffer.from(rawBytes.buffer);

          if (typeof cb === 'function') {
            return process.nextTick(function () {
              cb(null, bytes);
            });
          }

          return bytes;
        }
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "_process": 172, "safe-buffer": 61 }], 60: [function (require, module, exports) {
      (function (Buffer) {
        var inherits = require('inherits');
        var HashBase = require('hash-base');

        function RIPEMD160() {
          HashBase.call(this, 64);

          this._a = 0x67452301;
          this._b = 0xefcdab89;
          this._c = 0x98badcfe;
          this._d = 0x10325476;
          this._e = 0xc3d2e1f0;
        }

        inherits(RIPEMD160, HashBase);

        RIPEMD160.prototype._update = function () {
          var m = new Array(16);
          for (var i = 0; i < 16; ++i) m[i] = this._block.readInt32LE(i * 4);

          var al = this._a;
          var bl = this._b;
          var cl = this._c;
          var dl = this._d;
          var el = this._e;

          al = fn1(al, bl, cl, dl, el, m[0], 0x00000000, 11);cl = rotl(cl, 10);
          el = fn1(el, al, bl, cl, dl, m[1], 0x00000000, 14);bl = rotl(bl, 10);
          dl = fn1(dl, el, al, bl, cl, m[2], 0x00000000, 15);al = rotl(al, 10);
          cl = fn1(cl, dl, el, al, bl, m[3], 0x00000000, 12);el = rotl(el, 10);
          bl = fn1(bl, cl, dl, el, al, m[4], 0x00000000, 5);dl = rotl(dl, 10);
          al = fn1(al, bl, cl, dl, el, m[5], 0x00000000, 8);cl = rotl(cl, 10);
          el = fn1(el, al, bl, cl, dl, m[6], 0x00000000, 7);bl = rotl(bl, 10);
          dl = fn1(dl, el, al, bl, cl, m[7], 0x00000000, 9);al = rotl(al, 10);
          cl = fn1(cl, dl, el, al, bl, m[8], 0x00000000, 11);el = rotl(el, 10);
          bl = fn1(bl, cl, dl, el, al, m[9], 0x00000000, 13);dl = rotl(dl, 10);
          al = fn1(al, bl, cl, dl, el, m[10], 0x00000000, 14);cl = rotl(cl, 10);
          el = fn1(el, al, bl, cl, dl, m[11], 0x00000000, 15);bl = rotl(bl, 10);
          dl = fn1(dl, el, al, bl, cl, m[12], 0x00000000, 6);al = rotl(al, 10);
          cl = fn1(cl, dl, el, al, bl, m[13], 0x00000000, 7);el = rotl(el, 10);
          bl = fn1(bl, cl, dl, el, al, m[14], 0x00000000, 9);dl = rotl(dl, 10);
          al = fn1(al, bl, cl, dl, el, m[15], 0x00000000, 8);cl = rotl(cl, 10);

          el = fn2(el, al, bl, cl, dl, m[7], 0x5a827999, 7);bl = rotl(bl, 10);
          dl = fn2(dl, el, al, bl, cl, m[4], 0x5a827999, 6);al = rotl(al, 10);
          cl = fn2(cl, dl, el, al, bl, m[13], 0x5a827999, 8);el = rotl(el, 10);
          bl = fn2(bl, cl, dl, el, al, m[1], 0x5a827999, 13);dl = rotl(dl, 10);
          al = fn2(al, bl, cl, dl, el, m[10], 0x5a827999, 11);cl = rotl(cl, 10);
          el = fn2(el, al, bl, cl, dl, m[6], 0x5a827999, 9);bl = rotl(bl, 10);
          dl = fn2(dl, el, al, bl, cl, m[15], 0x5a827999, 7);al = rotl(al, 10);
          cl = fn2(cl, dl, el, al, bl, m[3], 0x5a827999, 15);el = rotl(el, 10);
          bl = fn2(bl, cl, dl, el, al, m[12], 0x5a827999, 7);dl = rotl(dl, 10);
          al = fn2(al, bl, cl, dl, el, m[0], 0x5a827999, 12);cl = rotl(cl, 10);
          el = fn2(el, al, bl, cl, dl, m[9], 0x5a827999, 15);bl = rotl(bl, 10);
          dl = fn2(dl, el, al, bl, cl, m[5], 0x5a827999, 9);al = rotl(al, 10);
          cl = fn2(cl, dl, el, al, bl, m[2], 0x5a827999, 11);el = rotl(el, 10);
          bl = fn2(bl, cl, dl, el, al, m[14], 0x5a827999, 7);dl = rotl(dl, 10);
          al = fn2(al, bl, cl, dl, el, m[11], 0x5a827999, 13);cl = rotl(cl, 10);
          el = fn2(el, al, bl, cl, dl, m[8], 0x5a827999, 12);bl = rotl(bl, 10);

          dl = fn3(dl, el, al, bl, cl, m[3], 0x6ed9eba1, 11);al = rotl(al, 10);
          cl = fn3(cl, dl, el, al, bl, m[10], 0x6ed9eba1, 13);el = rotl(el, 10);
          bl = fn3(bl, cl, dl, el, al, m[14], 0x6ed9eba1, 6);dl = rotl(dl, 10);
          al = fn3(al, bl, cl, dl, el, m[4], 0x6ed9eba1, 7);cl = rotl(cl, 10);
          el = fn3(el, al, bl, cl, dl, m[9], 0x6ed9eba1, 14);bl = rotl(bl, 10);
          dl = fn3(dl, el, al, bl, cl, m[15], 0x6ed9eba1, 9);al = rotl(al, 10);
          cl = fn3(cl, dl, el, al, bl, m[8], 0x6ed9eba1, 13);el = rotl(el, 10);
          bl = fn3(bl, cl, dl, el, al, m[1], 0x6ed9eba1, 15);dl = rotl(dl, 10);
          al = fn3(al, bl, cl, dl, el, m[2], 0x6ed9eba1, 14);cl = rotl(cl, 10);
          el = fn3(el, al, bl, cl, dl, m[7], 0x6ed9eba1, 8);bl = rotl(bl, 10);
          dl = fn3(dl, el, al, bl, cl, m[0], 0x6ed9eba1, 13);al = rotl(al, 10);
          cl = fn3(cl, dl, el, al, bl, m[6], 0x6ed9eba1, 6);el = rotl(el, 10);
          bl = fn3(bl, cl, dl, el, al, m[13], 0x6ed9eba1, 5);dl = rotl(dl, 10);
          al = fn3(al, bl, cl, dl, el, m[11], 0x6ed9eba1, 12);cl = rotl(cl, 10);
          el = fn3(el, al, bl, cl, dl, m[5], 0x6ed9eba1, 7);bl = rotl(bl, 10);
          dl = fn3(dl, el, al, bl, cl, m[12], 0x6ed9eba1, 5);al = rotl(al, 10);

          cl = fn4(cl, dl, el, al, bl, m[1], 0x8f1bbcdc, 11);el = rotl(el, 10);
          bl = fn4(bl, cl, dl, el, al, m[9], 0x8f1bbcdc, 12);dl = rotl(dl, 10);
          al = fn4(al, bl, cl, dl, el, m[11], 0x8f1bbcdc, 14);cl = rotl(cl, 10);
          el = fn4(el, al, bl, cl, dl, m[10], 0x8f1bbcdc, 15);bl = rotl(bl, 10);
          dl = fn4(dl, el, al, bl, cl, m[0], 0x8f1bbcdc, 14);al = rotl(al, 10);
          cl = fn4(cl, dl, el, al, bl, m[8], 0x8f1bbcdc, 15);el = rotl(el, 10);
          bl = fn4(bl, cl, dl, el, al, m[12], 0x8f1bbcdc, 9);dl = rotl(dl, 10);
          al = fn4(al, bl, cl, dl, el, m[4], 0x8f1bbcdc, 8);cl = rotl(cl, 10);
          el = fn4(el, al, bl, cl, dl, m[13], 0x8f1bbcdc, 9);bl = rotl(bl, 10);
          dl = fn4(dl, el, al, bl, cl, m[3], 0x8f1bbcdc, 14);al = rotl(al, 10);
          cl = fn4(cl, dl, el, al, bl, m[7], 0x8f1bbcdc, 5);el = rotl(el, 10);
          bl = fn4(bl, cl, dl, el, al, m[15], 0x8f1bbcdc, 6);dl = rotl(dl, 10);
          al = fn4(al, bl, cl, dl, el, m[14], 0x8f1bbcdc, 8);cl = rotl(cl, 10);
          el = fn4(el, al, bl, cl, dl, m[5], 0x8f1bbcdc, 6);bl = rotl(bl, 10);
          dl = fn4(dl, el, al, bl, cl, m[6], 0x8f1bbcdc, 5);al = rotl(al, 10);
          cl = fn4(cl, dl, el, al, bl, m[2], 0x8f1bbcdc, 12);el = rotl(el, 10);

          bl = fn5(bl, cl, dl, el, al, m[4], 0xa953fd4e, 9);dl = rotl(dl, 10);
          al = fn5(al, bl, cl, dl, el, m[0], 0xa953fd4e, 15);cl = rotl(cl, 10);
          el = fn5(el, al, bl, cl, dl, m[5], 0xa953fd4e, 5);bl = rotl(bl, 10);
          dl = fn5(dl, el, al, bl, cl, m[9], 0xa953fd4e, 11);al = rotl(al, 10);
          cl = fn5(cl, dl, el, al, bl, m[7], 0xa953fd4e, 6);el = rotl(el, 10);
          bl = fn5(bl, cl, dl, el, al, m[12], 0xa953fd4e, 8);dl = rotl(dl, 10);
          al = fn5(al, bl, cl, dl, el, m[2], 0xa953fd4e, 13);cl = rotl(cl, 10);
          el = fn5(el, al, bl, cl, dl, m[10], 0xa953fd4e, 12);bl = rotl(bl, 10);
          dl = fn5(dl, el, al, bl, cl, m[14], 0xa953fd4e, 5);al = rotl(al, 10);
          cl = fn5(cl, dl, el, al, bl, m[1], 0xa953fd4e, 12);el = rotl(el, 10);
          bl = fn5(bl, cl, dl, el, al, m[3], 0xa953fd4e, 13);dl = rotl(dl, 10);
          al = fn5(al, bl, cl, dl, el, m[8], 0xa953fd4e, 14);cl = rotl(cl, 10);
          el = fn5(el, al, bl, cl, dl, m[11], 0xa953fd4e, 11);bl = rotl(bl, 10);
          dl = fn5(dl, el, al, bl, cl, m[6], 0xa953fd4e, 8);al = rotl(al, 10);
          cl = fn5(cl, dl, el, al, bl, m[15], 0xa953fd4e, 5);el = rotl(el, 10);
          bl = fn5(bl, cl, dl, el, al, m[13], 0xa953fd4e, 6);dl = rotl(dl, 10);

          var ar = this._a;
          var br = this._b;
          var cr = this._c;
          var dr = this._d;
          var er = this._e;

          ar = fn5(ar, br, cr, dr, er, m[5], 0x50a28be6, 8);cr = rotl(cr, 10);
          er = fn5(er, ar, br, cr, dr, m[14], 0x50a28be6, 9);br = rotl(br, 10);
          dr = fn5(dr, er, ar, br, cr, m[7], 0x50a28be6, 9);ar = rotl(ar, 10);
          cr = fn5(cr, dr, er, ar, br, m[0], 0x50a28be6, 11);er = rotl(er, 10);
          br = fn5(br, cr, dr, er, ar, m[9], 0x50a28be6, 13);dr = rotl(dr, 10);
          ar = fn5(ar, br, cr, dr, er, m[2], 0x50a28be6, 15);cr = rotl(cr, 10);
          er = fn5(er, ar, br, cr, dr, m[11], 0x50a28be6, 15);br = rotl(br, 10);
          dr = fn5(dr, er, ar, br, cr, m[4], 0x50a28be6, 5);ar = rotl(ar, 10);
          cr = fn5(cr, dr, er, ar, br, m[13], 0x50a28be6, 7);er = rotl(er, 10);
          br = fn5(br, cr, dr, er, ar, m[6], 0x50a28be6, 7);dr = rotl(dr, 10);
          ar = fn5(ar, br, cr, dr, er, m[15], 0x50a28be6, 8);cr = rotl(cr, 10);
          er = fn5(er, ar, br, cr, dr, m[8], 0x50a28be6, 11);br = rotl(br, 10);
          dr = fn5(dr, er, ar, br, cr, m[1], 0x50a28be6, 14);ar = rotl(ar, 10);
          cr = fn5(cr, dr, er, ar, br, m[10], 0x50a28be6, 14);er = rotl(er, 10);
          br = fn5(br, cr, dr, er, ar, m[3], 0x50a28be6, 12);dr = rotl(dr, 10);
          ar = fn5(ar, br, cr, dr, er, m[12], 0x50a28be6, 6);cr = rotl(cr, 10);

          er = fn4(er, ar, br, cr, dr, m[6], 0x5c4dd124, 9);br = rotl(br, 10);
          dr = fn4(dr, er, ar, br, cr, m[11], 0x5c4dd124, 13);ar = rotl(ar, 10);
          cr = fn4(cr, dr, er, ar, br, m[3], 0x5c4dd124, 15);er = rotl(er, 10);
          br = fn4(br, cr, dr, er, ar, m[7], 0x5c4dd124, 7);dr = rotl(dr, 10);
          ar = fn4(ar, br, cr, dr, er, m[0], 0x5c4dd124, 12);cr = rotl(cr, 10);
          er = fn4(er, ar, br, cr, dr, m[13], 0x5c4dd124, 8);br = rotl(br, 10);
          dr = fn4(dr, er, ar, br, cr, m[5], 0x5c4dd124, 9);ar = rotl(ar, 10);
          cr = fn4(cr, dr, er, ar, br, m[10], 0x5c4dd124, 11);er = rotl(er, 10);
          br = fn4(br, cr, dr, er, ar, m[14], 0x5c4dd124, 7);dr = rotl(dr, 10);
          ar = fn4(ar, br, cr, dr, er, m[15], 0x5c4dd124, 7);cr = rotl(cr, 10);
          er = fn4(er, ar, br, cr, dr, m[8], 0x5c4dd124, 12);br = rotl(br, 10);
          dr = fn4(dr, er, ar, br, cr, m[12], 0x5c4dd124, 7);ar = rotl(ar, 10);
          cr = fn4(cr, dr, er, ar, br, m[4], 0x5c4dd124, 6);er = rotl(er, 10);
          br = fn4(br, cr, dr, er, ar, m[9], 0x5c4dd124, 15);dr = rotl(dr, 10);
          ar = fn4(ar, br, cr, dr, er, m[1], 0x5c4dd124, 13);cr = rotl(cr, 10);
          er = fn4(er, ar, br, cr, dr, m[2], 0x5c4dd124, 11);br = rotl(br, 10);

          dr = fn3(dr, er, ar, br, cr, m[15], 0x6d703ef3, 9);ar = rotl(ar, 10);
          cr = fn3(cr, dr, er, ar, br, m[5], 0x6d703ef3, 7);er = rotl(er, 10);
          br = fn3(br, cr, dr, er, ar, m[1], 0x6d703ef3, 15);dr = rotl(dr, 10);
          ar = fn3(ar, br, cr, dr, er, m[3], 0x6d703ef3, 11);cr = rotl(cr, 10);
          er = fn3(er, ar, br, cr, dr, m[7], 0x6d703ef3, 8);br = rotl(br, 10);
          dr = fn3(dr, er, ar, br, cr, m[14], 0x6d703ef3, 6);ar = rotl(ar, 10);
          cr = fn3(cr, dr, er, ar, br, m[6], 0x6d703ef3, 6);er = rotl(er, 10);
          br = fn3(br, cr, dr, er, ar, m[9], 0x6d703ef3, 14);dr = rotl(dr, 10);
          ar = fn3(ar, br, cr, dr, er, m[11], 0x6d703ef3, 12);cr = rotl(cr, 10);
          er = fn3(er, ar, br, cr, dr, m[8], 0x6d703ef3, 13);br = rotl(br, 10);
          dr = fn3(dr, er, ar, br, cr, m[12], 0x6d703ef3, 5);ar = rotl(ar, 10);
          cr = fn3(cr, dr, er, ar, br, m[2], 0x6d703ef3, 14);er = rotl(er, 10);
          br = fn3(br, cr, dr, er, ar, m[10], 0x6d703ef3, 13);dr = rotl(dr, 10);
          ar = fn3(ar, br, cr, dr, er, m[0], 0x6d703ef3, 13);cr = rotl(cr, 10);
          er = fn3(er, ar, br, cr, dr, m[4], 0x6d703ef3, 7);br = rotl(br, 10);
          dr = fn3(dr, er, ar, br, cr, m[13], 0x6d703ef3, 5);ar = rotl(ar, 10);

          cr = fn2(cr, dr, er, ar, br, m[8], 0x7a6d76e9, 15);er = rotl(er, 10);
          br = fn2(br, cr, dr, er, ar, m[6], 0x7a6d76e9, 5);dr = rotl(dr, 10);
          ar = fn2(ar, br, cr, dr, er, m[4], 0x7a6d76e9, 8);cr = rotl(cr, 10);
          er = fn2(er, ar, br, cr, dr, m[1], 0x7a6d76e9, 11);br = rotl(br, 10);
          dr = fn2(dr, er, ar, br, cr, m[3], 0x7a6d76e9, 14);ar = rotl(ar, 10);
          cr = fn2(cr, dr, er, ar, br, m[11], 0x7a6d76e9, 14);er = rotl(er, 10);
          br = fn2(br, cr, dr, er, ar, m[15], 0x7a6d76e9, 6);dr = rotl(dr, 10);
          ar = fn2(ar, br, cr, dr, er, m[0], 0x7a6d76e9, 14);cr = rotl(cr, 10);
          er = fn2(er, ar, br, cr, dr, m[5], 0x7a6d76e9, 6);br = rotl(br, 10);
          dr = fn2(dr, er, ar, br, cr, m[12], 0x7a6d76e9, 9);ar = rotl(ar, 10);
          cr = fn2(cr, dr, er, ar, br, m[2], 0x7a6d76e9, 12);er = rotl(er, 10);
          br = fn2(br, cr, dr, er, ar, m[13], 0x7a6d76e9, 9);dr = rotl(dr, 10);
          ar = fn2(ar, br, cr, dr, er, m[9], 0x7a6d76e9, 12);cr = rotl(cr, 10);
          er = fn2(er, ar, br, cr, dr, m[7], 0x7a6d76e9, 5);br = rotl(br, 10);
          dr = fn2(dr, er, ar, br, cr, m[10], 0x7a6d76e9, 15);ar = rotl(ar, 10);
          cr = fn2(cr, dr, er, ar, br, m[14], 0x7a6d76e9, 8);er = rotl(er, 10);

          br = fn1(br, cr, dr, er, ar, m[12], 0x00000000, 8);dr = rotl(dr, 10);
          ar = fn1(ar, br, cr, dr, er, m[15], 0x00000000, 5);cr = rotl(cr, 10);
          er = fn1(er, ar, br, cr, dr, m[10], 0x00000000, 12);br = rotl(br, 10);
          dr = fn1(dr, er, ar, br, cr, m[4], 0x00000000, 9);ar = rotl(ar, 10);
          cr = fn1(cr, dr, er, ar, br, m[1], 0x00000000, 12);er = rotl(er, 10);
          br = fn1(br, cr, dr, er, ar, m[5], 0x00000000, 5);dr = rotl(dr, 10);
          ar = fn1(ar, br, cr, dr, er, m[8], 0x00000000, 14);cr = rotl(cr, 10);
          er = fn1(er, ar, br, cr, dr, m[7], 0x00000000, 6);br = rotl(br, 10);
          dr = fn1(dr, er, ar, br, cr, m[6], 0x00000000, 8);ar = rotl(ar, 10);
          cr = fn1(cr, dr, er, ar, br, m[2], 0x00000000, 13);er = rotl(er, 10);
          br = fn1(br, cr, dr, er, ar, m[13], 0x00000000, 6);dr = rotl(dr, 10);
          ar = fn1(ar, br, cr, dr, er, m[14], 0x00000000, 5);cr = rotl(cr, 10);
          er = fn1(er, ar, br, cr, dr, m[0], 0x00000000, 15);br = rotl(br, 10);
          dr = fn1(dr, er, ar, br, cr, m[3], 0x00000000, 13);ar = rotl(ar, 10);
          cr = fn1(cr, dr, er, ar, br, m[9], 0x00000000, 11);er = rotl(er, 10);
          br = fn1(br, cr, dr, er, ar, m[11], 0x00000000, 11);dr = rotl(dr, 10);

          var t = this._b + cl + dr | 0;
          this._b = this._c + dl + er | 0;
          this._c = this._d + el + ar | 0;
          this._d = this._e + al + br | 0;
          this._e = this._a + bl + cr | 0;
          this._a = t;
        };

        RIPEMD160.prototype._digest = function () {
          this._block[this._blockOffset++] = 0x80;
          if (this._blockOffset > 56) {
            this._block.fill(0, this._blockOffset, 64);
            this._update();
            this._blockOffset = 0;
          }

          this._block.fill(0, this._blockOffset, 56);
          this._block.writeUInt32LE(this._length[0], 56);
          this._block.writeUInt32LE(this._length[1], 60);
          this._update();

          var buffer = new Buffer(20);
          buffer.writeInt32LE(this._a, 0);
          buffer.writeInt32LE(this._b, 4);
          buffer.writeInt32LE(this._c, 8);
          buffer.writeInt32LE(this._d, 12);
          buffer.writeInt32LE(this._e, 16);
          return buffer;
        };

        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }

        function fn1(a, b, c, d, e, m, k, s) {
          return rotl(a + (b ^ c ^ d) + m + k | 0, s) + e | 0;
        }

        function fn2(a, b, c, d, e, m, k, s) {
          return rotl(a + (b & c | ~b & d) + m + k | 0, s) + e | 0;
        }

        function fn3(a, b, c, d, e, m, k, s) {
          return rotl(a + ((b | ~c) ^ d) + m + k | 0, s) + e | 0;
        }

        function fn4(a, b, c, d, e, m, k, s) {
          return rotl(a + (b & d | c & ~d) + m + k | 0, s) + e | 0;
        }

        function fn5(a, b, c, d, e, m, k, s) {
          return rotl(a + (b ^ (c | ~d)) + m + k | 0, s) + e | 0;
        }

        module.exports = RIPEMD160;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162, "hash-base": 51, "inherits": 52 }], 61: [function (require, module, exports) {
      var buffer = require('buffer');
      var Buffer = buffer.Buffer;

      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }

      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length);
      }

      copyProps(Buffer, SafeBuffer);

      SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if (typeof arg === 'number') {
          throw new TypeError('Argument must not be a number');
        }
        return Buffer(arg, encodingOrOffset, length);
      };

      SafeBuffer.alloc = function (size, fill, encoding) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        var buf = Buffer(size);
        if (fill !== undefined) {
          if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };

      SafeBuffer.allocUnsafe = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        return Buffer(size);
      };

      SafeBuffer.allocUnsafeSlow = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        return buffer.SlowBuffer(size);
      };
    }, { "buffer": 162 }], 62: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;

      function Hash(blockSize, finalSize) {
        this._block = Buffer.alloc(blockSize);
        this._finalSize = finalSize;
        this._blockSize = blockSize;
        this._len = 0;
      }

      Hash.prototype.update = function (data, enc) {
        if (typeof data === 'string') {
          enc = enc || 'utf8';
          data = Buffer.from(data, enc);
        }

        var block = this._block;
        var blockSize = this._blockSize;
        var length = data.length;
        var accum = this._len;

        for (var offset = 0; offset < length;) {
          var assigned = accum % blockSize;
          var remainder = Math.min(length - offset, blockSize - assigned);

          for (var i = 0; i < remainder; i++) {
            block[assigned + i] = data[offset + i];
          }

          accum += remainder;
          offset += remainder;

          if (accum % blockSize === 0) {
            this._update(block);
          }
        }

        this._len += length;
        return this;
      };

      Hash.prototype.digest = function (enc) {
        var rem = this._len % this._blockSize;

        this._block[rem] = 0x80;

        this._block.fill(0, rem + 1);

        if (rem >= this._finalSize) {
          this._update(this._block);
          this._block.fill(0);
        }

        var bits = this._len * 8;

        if (bits <= 0xffffffff) {
          this._block.writeUInt32BE(bits, this._blockSize - 4);
        } else {
          var lowBits = bits & 0xffffffff;
          var highBits = (bits - lowBits) / 0x100000000;

          this._block.writeUInt32BE(highBits, this._blockSize - 8);
          this._block.writeUInt32BE(lowBits, this._blockSize - 4);
        }

        this._update(this._block);
        var hash = this._hash();

        return enc ? hash.toString(enc) : hash;
      };

      Hash.prototype._update = function () {
        throw new Error('_update must be implemented by subclass');
      };

      module.exports = Hash;
    }, { "safe-buffer": 61 }], 63: [function (require, module, exports) {
      var exports = module.exports = function SHA(algorithm) {
        algorithm = algorithm.toLowerCase();

        var Algorithm = exports[algorithm];
        if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)');

        return new Algorithm();
      };

      exports.sha = require('./sha');
      exports.sha1 = require('./sha1');
      exports.sha224 = require('./sha224');
      exports.sha256 = require('./sha256');
      exports.sha384 = require('./sha384');
      exports.sha512 = require('./sha512');
    }, { "./sha": 64, "./sha1": 65, "./sha224": 66, "./sha256": 67, "./sha384": 68, "./sha512": 69 }], 64: [function (require, module, exports) {

      var inherits = require('inherits');
      var Hash = require('./hash');
      var Buffer = require('safe-buffer').Buffer;

      var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

      var W = new Array(80);

      function Sha() {
        this.init();
        this._w = W;

        Hash.call(this, 64, 56);
      }

      inherits(Sha, Hash);

      Sha.prototype.init = function () {
        this._a = 0x67452301;
        this._b = 0xefcdab89;
        this._c = 0x98badcfe;
        this._d = 0x10325476;
        this._e = 0xc3d2e1f0;

        return this;
      };

      function rotl5(num) {
        return num << 5 | num >>> 27;
      }

      function rotl30(num) {
        return num << 30 | num >>> 2;
      }

      function ft(s, b, c, d) {
        if (s === 0) return b & c | ~b & d;
        if (s === 2) return b & c | b & d | c & d;
        return b ^ c ^ d;
      }

      Sha.prototype._update = function (M) {
        var W = this._w;

        var a = this._a | 0;
        var b = this._b | 0;
        var c = this._c | 0;
        var d = this._d | 0;
        var e = this._e | 0;

        for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
        for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];

        for (var j = 0; j < 80; ++j) {
          var s = ~~(j / 20);
          var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;

          e = d;
          d = c;
          c = rotl30(b);
          b = a;
          a = t;
        }

        this._a = a + this._a | 0;
        this._b = b + this._b | 0;
        this._c = c + this._c | 0;
        this._d = d + this._d | 0;
        this._e = e + this._e | 0;
      };

      Sha.prototype._hash = function () {
        var H = Buffer.allocUnsafe(20);

        H.writeInt32BE(this._a | 0, 0);
        H.writeInt32BE(this._b | 0, 4);
        H.writeInt32BE(this._c | 0, 8);
        H.writeInt32BE(this._d | 0, 12);
        H.writeInt32BE(this._e | 0, 16);

        return H;
      };

      module.exports = Sha;
    }, { "./hash": 62, "inherits": 52, "safe-buffer": 61 }], 65: [function (require, module, exports) {

      var inherits = require('inherits');
      var Hash = require('./hash');
      var Buffer = require('safe-buffer').Buffer;

      var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

      var W = new Array(80);

      function Sha1() {
        this.init();
        this._w = W;

        Hash.call(this, 64, 56);
      }

      inherits(Sha1, Hash);

      Sha1.prototype.init = function () {
        this._a = 0x67452301;
        this._b = 0xefcdab89;
        this._c = 0x98badcfe;
        this._d = 0x10325476;
        this._e = 0xc3d2e1f0;

        return this;
      };

      function rotl1(num) {
        return num << 1 | num >>> 31;
      }

      function rotl5(num) {
        return num << 5 | num >>> 27;
      }

      function rotl30(num) {
        return num << 30 | num >>> 2;
      }

      function ft(s, b, c, d) {
        if (s === 0) return b & c | ~b & d;
        if (s === 2) return b & c | b & d | c & d;
        return b ^ c ^ d;
      }

      Sha1.prototype._update = function (M) {
        var W = this._w;

        var a = this._a | 0;
        var b = this._b | 0;
        var c = this._c | 0;
        var d = this._d | 0;
        var e = this._e | 0;

        for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
        for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);

        for (var j = 0; j < 80; ++j) {
          var s = ~~(j / 20);
          var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;

          e = d;
          d = c;
          c = rotl30(b);
          b = a;
          a = t;
        }

        this._a = a + this._a | 0;
        this._b = b + this._b | 0;
        this._c = c + this._c | 0;
        this._d = d + this._d | 0;
        this._e = e + this._e | 0;
      };

      Sha1.prototype._hash = function () {
        var H = Buffer.allocUnsafe(20);

        H.writeInt32BE(this._a | 0, 0);
        H.writeInt32BE(this._b | 0, 4);
        H.writeInt32BE(this._c | 0, 8);
        H.writeInt32BE(this._d | 0, 12);
        H.writeInt32BE(this._e | 0, 16);

        return H;
      };

      module.exports = Sha1;
    }, { "./hash": 62, "inherits": 52, "safe-buffer": 61 }], 66: [function (require, module, exports) {

      var inherits = require('inherits');
      var Sha256 = require('./sha256');
      var Hash = require('./hash');
      var Buffer = require('safe-buffer').Buffer;

      var W = new Array(64);

      function Sha224() {
        this.init();

        this._w = W;

        Hash.call(this, 64, 56);
      }

      inherits(Sha224, Sha256);

      Sha224.prototype.init = function () {
        this._a = 0xc1059ed8;
        this._b = 0x367cd507;
        this._c = 0x3070dd17;
        this._d = 0xf70e5939;
        this._e = 0xffc00b31;
        this._f = 0x68581511;
        this._g = 0x64f98fa7;
        this._h = 0xbefa4fa4;

        return this;
      };

      Sha224.prototype._hash = function () {
        var H = Buffer.allocUnsafe(28);

        H.writeInt32BE(this._a, 0);
        H.writeInt32BE(this._b, 4);
        H.writeInt32BE(this._c, 8);
        H.writeInt32BE(this._d, 12);
        H.writeInt32BE(this._e, 16);
        H.writeInt32BE(this._f, 20);
        H.writeInt32BE(this._g, 24);

        return H;
      };

      module.exports = Sha224;
    }, { "./hash": 62, "./sha256": 67, "inherits": 52, "safe-buffer": 61 }], 67: [function (require, module, exports) {

      var inherits = require('inherits');
      var Hash = require('./hash');
      var Buffer = require('safe-buffer').Buffer;

      var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];

      var W = new Array(64);

      function Sha256() {
        this.init();

        this._w = W;

        Hash.call(this, 64, 56);
      }

      inherits(Sha256, Hash);

      Sha256.prototype.init = function () {
        this._a = 0x6a09e667;
        this._b = 0xbb67ae85;
        this._c = 0x3c6ef372;
        this._d = 0xa54ff53a;
        this._e = 0x510e527f;
        this._f = 0x9b05688c;
        this._g = 0x1f83d9ab;
        this._h = 0x5be0cd19;

        return this;
      };

      function ch(x, y, z) {
        return z ^ x & (y ^ z);
      }

      function maj(x, y, z) {
        return x & y | z & (x | y);
      }

      function sigma0(x) {
        return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
      }

      function sigma1(x) {
        return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
      }

      function gamma0(x) {
        return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
      }

      function gamma1(x) {
        return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
      }

      Sha256.prototype._update = function (M) {
        var W = this._w;

        var a = this._a | 0;
        var b = this._b | 0;
        var c = this._c | 0;
        var d = this._d | 0;
        var e = this._e | 0;
        var f = this._f | 0;
        var g = this._g | 0;
        var h = this._h | 0;

        for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
        for (; i < 64; ++i) W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;

        for (var j = 0; j < 64; ++j) {
          var T1 = h + sigma1(e) + ch(e, f, g) + K[j] + W[j] | 0;
          var T2 = sigma0(a) + maj(a, b, c) | 0;

          h = g;
          g = f;
          f = e;
          e = d + T1 | 0;
          d = c;
          c = b;
          b = a;
          a = T1 + T2 | 0;
        }

        this._a = a + this._a | 0;
        this._b = b + this._b | 0;
        this._c = c + this._c | 0;
        this._d = d + this._d | 0;
        this._e = e + this._e | 0;
        this._f = f + this._f | 0;
        this._g = g + this._g | 0;
        this._h = h + this._h | 0;
      };

      Sha256.prototype._hash = function () {
        var H = Buffer.allocUnsafe(32);

        H.writeInt32BE(this._a, 0);
        H.writeInt32BE(this._b, 4);
        H.writeInt32BE(this._c, 8);
        H.writeInt32BE(this._d, 12);
        H.writeInt32BE(this._e, 16);
        H.writeInt32BE(this._f, 20);
        H.writeInt32BE(this._g, 24);
        H.writeInt32BE(this._h, 28);

        return H;
      };

      module.exports = Sha256;
    }, { "./hash": 62, "inherits": 52, "safe-buffer": 61 }], 68: [function (require, module, exports) {
      var inherits = require('inherits');
      var SHA512 = require('./sha512');
      var Hash = require('./hash');
      var Buffer = require('safe-buffer').Buffer;

      var W = new Array(160);

      function Sha384() {
        this.init();
        this._w = W;

        Hash.call(this, 128, 112);
      }

      inherits(Sha384, SHA512);

      Sha384.prototype.init = function () {
        this._ah = 0xcbbb9d5d;
        this._bh = 0x629a292a;
        this._ch = 0x9159015a;
        this._dh = 0x152fecd8;
        this._eh = 0x67332667;
        this._fh = 0x8eb44a87;
        this._gh = 0xdb0c2e0d;
        this._hh = 0x47b5481d;

        this._al = 0xc1059ed8;
        this._bl = 0x367cd507;
        this._cl = 0x3070dd17;
        this._dl = 0xf70e5939;
        this._el = 0xffc00b31;
        this._fl = 0x68581511;
        this._gl = 0x64f98fa7;
        this._hl = 0xbefa4fa4;

        return this;
      };

      Sha384.prototype._hash = function () {
        var H = Buffer.allocUnsafe(48);

        function writeInt64BE(h, l, offset) {
          H.writeInt32BE(h, offset);
          H.writeInt32BE(l, offset + 4);
        }

        writeInt64BE(this._ah, this._al, 0);
        writeInt64BE(this._bh, this._bl, 8);
        writeInt64BE(this._ch, this._cl, 16);
        writeInt64BE(this._dh, this._dl, 24);
        writeInt64BE(this._eh, this._el, 32);
        writeInt64BE(this._fh, this._fl, 40);

        return H;
      };

      module.exports = Sha384;
    }, { "./hash": 62, "./sha512": 69, "inherits": 52, "safe-buffer": 61 }], 69: [function (require, module, exports) {
      var inherits = require('inherits');
      var Hash = require('./hash');
      var Buffer = require('safe-buffer').Buffer;

      var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

      var W = new Array(160);

      function Sha512() {
        this.init();
        this._w = W;

        Hash.call(this, 128, 112);
      }

      inherits(Sha512, Hash);

      Sha512.prototype.init = function () {
        this._ah = 0x6a09e667;
        this._bh = 0xbb67ae85;
        this._ch = 0x3c6ef372;
        this._dh = 0xa54ff53a;
        this._eh = 0x510e527f;
        this._fh = 0x9b05688c;
        this._gh = 0x1f83d9ab;
        this._hh = 0x5be0cd19;

        this._al = 0xf3bcc908;
        this._bl = 0x84caa73b;
        this._cl = 0xfe94f82b;
        this._dl = 0x5f1d36f1;
        this._el = 0xade682d1;
        this._fl = 0x2b3e6c1f;
        this._gl = 0xfb41bd6b;
        this._hl = 0x137e2179;

        return this;
      };

      function Ch(x, y, z) {
        return z ^ x & (y ^ z);
      }

      function maj(x, y, z) {
        return x & y | z & (x | y);
      }

      function sigma0(x, xl) {
        return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
      }

      function sigma1(x, xl) {
        return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
      }

      function Gamma0(x, xl) {
        return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
      }

      function Gamma0l(x, xl) {
        return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
      }

      function Gamma1(x, xl) {
        return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
      }

      function Gamma1l(x, xl) {
        return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
      }

      function getCarry(a, b) {
        return a >>> 0 < b >>> 0 ? 1 : 0;
      }

      Sha512.prototype._update = function (M) {
        var W = this._w;

        var ah = this._ah | 0;
        var bh = this._bh | 0;
        var ch = this._ch | 0;
        var dh = this._dh | 0;
        var eh = this._eh | 0;
        var fh = this._fh | 0;
        var gh = this._gh | 0;
        var hh = this._hh | 0;

        var al = this._al | 0;
        var bl = this._bl | 0;
        var cl = this._cl | 0;
        var dl = this._dl | 0;
        var el = this._el | 0;
        var fl = this._fl | 0;
        var gl = this._gl | 0;
        var hl = this._hl | 0;

        for (var i = 0; i < 32; i += 2) {
          W[i] = M.readInt32BE(i * 4);
          W[i + 1] = M.readInt32BE(i * 4 + 4);
        }
        for (; i < 160; i += 2) {
          var xh = W[i - 15 * 2];
          var xl = W[i - 15 * 2 + 1];
          var gamma0 = Gamma0(xh, xl);
          var gamma0l = Gamma0l(xl, xh);

          xh = W[i - 2 * 2];
          xl = W[i - 2 * 2 + 1];
          var gamma1 = Gamma1(xh, xl);
          var gamma1l = Gamma1l(xl, xh);

          var Wi7h = W[i - 7 * 2];
          var Wi7l = W[i - 7 * 2 + 1];

          var Wi16h = W[i - 16 * 2];
          var Wi16l = W[i - 16 * 2 + 1];

          var Wil = gamma0l + Wi7l | 0;
          var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
          Wil = Wil + gamma1l | 0;
          Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
          Wil = Wil + Wi16l | 0;
          Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;

          W[i] = Wih;
          W[i + 1] = Wil;
        }

        for (var j = 0; j < 160; j += 2) {
          Wih = W[j];
          Wil = W[j + 1];

          var majh = maj(ah, bh, ch);
          var majl = maj(al, bl, cl);

          var sigma0h = sigma0(ah, al);
          var sigma0l = sigma0(al, ah);
          var sigma1h = sigma1(eh, el);
          var sigma1l = sigma1(el, eh);

          var Kih = K[j];
          var Kil = K[j + 1];

          var chh = Ch(eh, fh, gh);
          var chl = Ch(el, fl, gl);

          var t1l = hl + sigma1l | 0;
          var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
          t1l = t1l + chl | 0;
          t1h = t1h + chh + getCarry(t1l, chl) | 0;
          t1l = t1l + Kil | 0;
          t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
          t1l = t1l + Wil | 0;
          t1h = t1h + Wih + getCarry(t1l, Wil) | 0;

          var t2l = sigma0l + majl | 0;
          var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;

          hh = gh;
          hl = gl;
          gh = fh;
          gl = fl;
          fh = eh;
          fl = el;
          el = dl + t1l | 0;
          eh = dh + t1h + getCarry(el, dl) | 0;
          dh = ch;
          dl = cl;
          ch = bh;
          cl = bl;
          bh = ah;
          bl = al;
          al = t1l + t2l | 0;
          ah = t1h + t2h + getCarry(al, t1l) | 0;
        }

        this._al = this._al + al | 0;
        this._bl = this._bl + bl | 0;
        this._cl = this._cl + cl | 0;
        this._dl = this._dl + dl | 0;
        this._el = this._el + el | 0;
        this._fl = this._fl + fl | 0;
        this._gl = this._gl + gl | 0;
        this._hl = this._hl + hl | 0;

        this._ah = this._ah + ah + getCarry(this._al, al) | 0;
        this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
        this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
        this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
        this._eh = this._eh + eh + getCarry(this._el, el) | 0;
        this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
        this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
        this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
      };

      Sha512.prototype._hash = function () {
        var H = Buffer.allocUnsafe(64);

        function writeInt64BE(h, l, offset) {
          H.writeInt32BE(h, offset);
          H.writeInt32BE(l, offset + 4);
        }

        writeInt64BE(this._ah, this._al, 0);
        writeInt64BE(this._bh, this._bl, 8);
        writeInt64BE(this._ch, this._cl, 16);
        writeInt64BE(this._dh, this._dl, 24);
        writeInt64BE(this._eh, this._el, 32);
        writeInt64BE(this._fh, this._fl, 40);
        writeInt64BE(this._gh, this._gl, 48);
        writeInt64BE(this._hh, this._hl, 56);

        return H;
      };

      module.exports = Sha512;
    }, { "./hash": 62, "inherits": 52, "safe-buffer": 61 }], 70: [function (require, module, exports) {
      var native = require('./native');

      function getTypeName(fn) {
        return fn.name || fn.toString().match(/function (.*?)\s*\(/)[1];
      }

      function getValueTypeName(value) {
        return native.Nil(value) ? '' : getTypeName(value.constructor);
      }

      function getValue(value) {
        if (native.Function(value)) return '';
        if (native.String(value)) return JSON.stringify(value);
        if (value && native.Object(value)) return '';
        return value;
      }

      function tfJSON(type) {
        if (native.Function(type)) return type.toJSON ? type.toJSON() : getTypeName(type);
        if (native.Array(type)) return 'Array';
        if (type && native.Object(type)) return 'Object';

        return type !== undefined ? type : '';
      }

      function tfErrorString(type, value, valueTypeName) {
        var valueJson = getValue(value);

        return 'Expected ' + tfJSON(type) + ', got' + (valueTypeName !== '' ? ' ' + valueTypeName : '') + (valueJson !== '' ? ' ' + valueJson : '');
      }

      function TfTypeError(type, value, valueTypeName) {
        valueTypeName = valueTypeName || getValueTypeName(value);
        this.message = tfErrorString(type, value, valueTypeName);

        Error.captureStackTrace(this, TfTypeError);
        this.__type = type;
        this.__value = value;
        this.__valueTypeName = valueTypeName;
      }

      TfTypeError.prototype = Object.create(Error.prototype);
      TfTypeError.prototype.constructor = TfTypeError;

      function tfPropertyErrorString(type, label, name, value, valueTypeName) {
        var description = '" of type ';
        if (label === 'key') description = '" with key type ';

        return tfErrorString('property "' + tfJSON(name) + description + tfJSON(type), value, valueTypeName);
      }

      function TfPropertyTypeError(type, property, label, value, valueTypeName) {
        if (type) {
          valueTypeName = valueTypeName || getValueTypeName(value);
          this.message = tfPropertyErrorString(type, label, property, value, valueTypeName);
        } else {
          this.message = 'Unexpected property "' + property + '"';
        }

        Error.captureStackTrace(this, TfTypeError);
        this.__label = label;
        this.__property = property;
        this.__type = type;
        this.__value = value;
        this.__valueTypeName = valueTypeName;
      }

      TfPropertyTypeError.prototype = Object.create(Error.prototype);
      TfPropertyTypeError.prototype.constructor = TfTypeError;

      function tfCustomError(expected, actual) {
        return new TfTypeError(expected, {}, actual);
      }

      function tfSubError(e, property, label) {
        if (e instanceof TfPropertyTypeError) {
          property = property + '.' + e.__property;

          e = new TfPropertyTypeError(e.__type, property, e.__label, e.__value, e.__valueTypeName);
        } else if (e instanceof TfTypeError) {
          e = new TfPropertyTypeError(e.__type, property, label, e.__value, e.__valueTypeName);
        }

        Error.captureStackTrace(e);
        return e;
      }

      module.exports = {
        TfTypeError: TfTypeError,
        TfPropertyTypeError: TfPropertyTypeError,
        tfCustomError: tfCustomError,
        tfSubError: tfSubError,
        tfJSON: tfJSON,
        getValueTypeName: getValueTypeName
      };
    }, { "./native": 73 }], 71: [function (require, module, exports) {
      (function (Buffer) {
        var NATIVE = require('./native');
        var ERRORS = require('./errors');

        function _Buffer(value) {
          return Buffer.isBuffer(value);
        }

        function Hex(value) {
          return typeof value === 'string' && /^([0-9a-f]{2})+$/i.test(value);
        }

        function _LengthN(type, length) {
          var name = type.toJSON();

          function Length(value) {
            if (!type(value)) return false;
            if (value.length === length) return true;

            throw ERRORS.tfCustomError(name + '(Length: ' + length + ')', name + '(Length: ' + value.length + ')');
          }
          Length.toJSON = function () {
            return name;
          };

          return Length;
        }

        var _ArrayN = _LengthN.bind(null, NATIVE.Array);
        var _BufferN = _LengthN.bind(null, _Buffer);
        var _HexN = _LengthN.bind(null, Hex);
        var _StringN = _LengthN.bind(null, NATIVE.String);

        var UINT53_MAX = Math.pow(2, 53) - 1;

        function Finite(value) {
          return typeof value === 'number' && isFinite(value);
        }
        function Int8(value) {
          return value << 24 >> 24 === value;
        }
        function Int16(value) {
          return value << 16 >> 16 === value;
        }
        function Int32(value) {
          return (value | 0) === value;
        }
        function UInt8(value) {
          return (value & 0xff) === value;
        }
        function UInt16(value) {
          return (value & 0xffff) === value;
        }
        function UInt32(value) {
          return value >>> 0 === value;
        }
        function UInt53(value) {
          return typeof value === 'number' && value >= 0 && value <= UINT53_MAX && Math.floor(value) === value;
        }

        var types = {
          ArrayN: _ArrayN,
          Buffer: _Buffer,
          BufferN: _BufferN,
          Finite: Finite,
          Hex: Hex,
          HexN: _HexN,
          Int8: Int8,
          Int16: Int16,
          Int32: Int32,
          StringN: _StringN,
          UInt8: UInt8,
          UInt16: UInt16,
          UInt32: UInt32,
          UInt53: UInt53
        };

        for (var typeName in types) {
          types[typeName].toJSON = function (t) {
            return t;
          }.bind(null, typeName);
        }

        module.exports = types;
      }).call(this, { "isBuffer": require("../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js") });
    }, { "../../../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js": 169, "./errors": 70, "./native": 73 }], 72: [function (require, module, exports) {
      var ERRORS = require('./errors');
      var NATIVE = require('./native');

      var tfJSON = ERRORS.tfJSON;
      var TfTypeError = ERRORS.TfTypeError;
      var TfPropertyTypeError = ERRORS.TfPropertyTypeError;
      var tfSubError = ERRORS.tfSubError;
      var getValueTypeName = ERRORS.getValueTypeName;

      var TYPES = {
        arrayOf: function arrayOf(type) {
          type = compile(type);

          function _arrayOf(array, strict) {
            if (!NATIVE.Array(array)) return false;
            if (NATIVE.Nil(array)) return false;

            return array.every(function (value, i) {
              try {
                return typeforce(type, value, strict);
              } catch (e) {
                throw tfSubError(e, i);
              }
            });
          }
          _arrayOf.toJSON = function () {
            return '[' + tfJSON(type) + ']';
          };

          return _arrayOf;
        },

        maybe: function maybe(type) {
          type = compile(type);

          function _maybe(value, strict) {
            return NATIVE.Nil(value) || type(value, strict, maybe);
          }
          _maybe.toJSON = function () {
            return '?' + tfJSON(type);
          };

          return _maybe;
        },

        map: function map(propertyType, propertyKeyType) {
          propertyType = compile(propertyType);
          if (propertyKeyType) propertyKeyType = compile(propertyKeyType);

          function _map(value, strict) {
            if (!NATIVE.Object(value)) return false;
            if (NATIVE.Nil(value)) return false;

            for (var propertyName in value) {
              try {
                if (propertyKeyType) {
                  typeforce(propertyKeyType, propertyName, strict);
                }
              } catch (e) {
                throw tfSubError(e, propertyName, 'key');
              }

              try {
                var propertyValue = value[propertyName];
                typeforce(propertyType, propertyValue, strict);
              } catch (e) {
                throw tfSubError(e, propertyName);
              }
            }

            return true;
          }

          if (propertyKeyType) {
            _map.toJSON = function () {
              return '{' + tfJSON(propertyKeyType) + ': ' + tfJSON(propertyType) + '}';
            };
          } else {
            _map.toJSON = function () {
              return '{' + tfJSON(propertyType) + '}';
            };
          }

          return _map;
        },

        object: function object(uncompiled) {
          var type = {};

          for (var typePropertyName in uncompiled) {
            type[typePropertyName] = compile(uncompiled[typePropertyName]);
          }

          function _object(value, strict) {
            if (!NATIVE.Object(value)) return false;
            if (NATIVE.Nil(value)) return false;

            var propertyName;

            try {
              for (propertyName in type) {
                var propertyType = type[propertyName];
                var propertyValue = value[propertyName];

                typeforce(propertyType, propertyValue, strict);
              }
            } catch (e) {
              throw tfSubError(e, propertyName);
            }

            if (strict) {
              for (propertyName in value) {
                if (type[propertyName]) continue;

                throw new TfPropertyTypeError(undefined, propertyName);
              }
            }

            return true;
          }
          _object.toJSON = function () {
            return tfJSON(type);
          };

          return _object;
        },

        oneOf: function oneOf() {
          var types = [].slice.call(arguments).map(compile);

          function _oneOf(value, strict) {
            return types.some(function (type) {
              try {
                return typeforce(type, value, strict);
              } catch (e) {
                return false;
              }
            });
          }
          _oneOf.toJSON = function () {
            return types.map(tfJSON).join('|');
          };

          return _oneOf;
        },

        quacksLike: function quacksLike(type) {
          function _quacksLike(value) {
            return type === getValueTypeName(value);
          }
          _quacksLike.toJSON = function () {
            return type;
          };

          return _quacksLike;
        },

        tuple: function tuple() {
          var types = [].slice.call(arguments).map(compile);

          function _tuple(values, strict) {
            if (NATIVE.Nil(values)) return false;
            if (NATIVE.Nil(values.length)) return false;
            if (strict && values.length !== types.length) return false;

            return types.every(function (type, i) {
              try {
                return typeforce(type, values[i], strict);
              } catch (e) {
                throw tfSubError(e, i);
              }
            });
          }
          _tuple.toJSON = function () {
            return '(' + types.map(tfJSON).join(', ') + ')';
          };

          return _tuple;
        },

        value: function value(expected) {
          function _value(actual) {
            return actual === expected;
          }
          _value.toJSON = function () {
            return expected;
          };

          return _value;
        }
      };

      function compile(type) {
        if (NATIVE.String(type)) {
          if (type[0] === '?') return TYPES.maybe(type.slice(1));

          return NATIVE[type] || TYPES.quacksLike(type);
        } else if (type && NATIVE.Object(type)) {
          if (NATIVE.Array(type)) return TYPES.arrayOf(type[0]);

          return TYPES.object(type);
        } else if (NATIVE.Function(type)) {
          return type;
        }

        return TYPES.value(type);
      }

      function typeforce(type, value, strict, surrogate) {
        if (NATIVE.Function(type)) {
          if (type(value, strict)) return true;

          throw new TfTypeError(surrogate || type, value);
        }

        return typeforce(compile(type), value, strict);
      }

      for (var typeName in NATIVE) {
        typeforce[typeName] = NATIVE[typeName];
      }

      for (typeName in TYPES) {
        typeforce[typeName] = TYPES[typeName];
      }

      var EXTRA = require('./extra');
      for (typeName in EXTRA) {
        typeforce[typeName] = EXTRA[typeName];
      }

      function __async(type, value, strict, callback) {
        if (typeof strict === 'function') return __async(type, value, false, strict);

        try {
          typeforce(type, value, strict);
        } catch (e) {
          return callback(e);
        }

        callback();
      }

      typeforce.async = __async;
      typeforce.compile = compile;
      typeforce.TfTypeError = TfTypeError;
      typeforce.TfPropertyTypeError = TfPropertyTypeError;

      module.exports = typeforce;
    }, { "./errors": 70, "./extra": 71, "./native": 73 }], 73: [function (require, module, exports) {
      var types = {
        Array: function (value) {
          return value !== null && value !== undefined && value.constructor === Array;
        },
        Boolean: function (value) {
          return typeof value === 'boolean';
        },
        Function: function (value) {
          return typeof value === 'function';
        },
        Nil: function (value) {
          return value === undefined || value === null;
        },
        Number: function (value) {
          return typeof value === 'number';
        },
        Object: function (value) {
          return typeof value === 'object';
        },
        String: function (value) {
          return typeof value === 'string';
        },
        '': function () {
          return true;
        }
      };

      types.Null = types.Nil;

      for (var typeName in types) {
        types[typeName].toJSON = function (t) {
          return t;
        }.bind(null, typeName);
      }

      module.exports = types;
    }, {}], 74: [function (require, module, exports) {
      (function (Buffer) {
        var bs58check = require('bs58check');

        function decodeRaw(buffer, version) {
          if (version !== undefined && buffer[0] !== version) throw new Error('Invalid network version');

          if (buffer.length === 33) {
            return {
              version: buffer[0],
              privateKey: buffer.slice(1, 33),
              compressed: false
            };
          }

          if (buffer.length !== 34) throw new Error('Invalid WIF length');

          if (buffer[33] !== 0x01) throw new Error('Invalid compression flag');

          return {
            version: buffer[0],
            privateKey: buffer.slice(1, 33),
            compressed: true
          };
        }

        function encodeRaw(version, privateKey, compressed) {
          var result = new Buffer(compressed ? 34 : 33);

          result.writeUInt8(version, 0);
          privateKey.copy(result, 1);

          if (compressed) {
            result[33] = 0x01;
          }

          return result;
        }

        function decode(string, version) {
          return decodeRaw(bs58check.decode(string), version);
        }

        function encode(version, privateKey, compressed) {
          if (typeof version === 'number') return bs58check.encode(encodeRaw(version, privateKey, compressed));

          return bs58check.encode(encodeRaw(version.version, version.privateKey, version.compressed));
        }

        module.exports = {
          decode: decode,
          decodeRaw: decodeRaw,
          encode: encode,
          encodeRaw: encodeRaw
        };
      }).call(this, require("buffer").Buffer);
    }, { "bs58check": 15, "buffer": 162 }], 75: [function (require, module, exports) {

      var Buffer = require('safe-buffer').Buffer;

      module.exports = function base(ALPHABET) {
        var ALPHABET_MAP = {};
        var BASE = ALPHABET.length;
        var LEADER = ALPHABET.charAt(0);

        for (var z = 0; z < ALPHABET.length; z++) {
          var x = ALPHABET.charAt(z);

          if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous');
          ALPHABET_MAP[x] = z;
        }

        function encode(source) {
          if (source.length === 0) return '';

          var digits = [0];
          for (var i = 0; i < source.length; ++i) {
            for (var j = 0, carry = source[i]; j < digits.length; ++j) {
              carry += digits[j] << 8;
              digits[j] = carry % BASE;
              carry = carry / BASE | 0;
            }

            while (carry > 0) {
              digits.push(carry % BASE);
              carry = carry / BASE | 0;
            }
          }

          var string = '';

          for (var k = 0; source[k] === 0 && k < source.length - 1; ++k) string += ALPHABET[0];

          for (var q = digits.length - 1; q >= 0; --q) string += ALPHABET[digits[q]];

          return string;
        }

        function decodeUnsafe(string) {
          if (string.length === 0) return Buffer.allocUnsafe(0);

          var bytes = [0];
          for (var i = 0; i < string.length; i++) {
            var value = ALPHABET_MAP[string[i]];
            if (value === undefined) return;

            for (var j = 0, carry = value; j < bytes.length; ++j) {
              carry += bytes[j] * BASE;
              bytes[j] = carry & 0xff;
              carry >>= 8;
            }

            while (carry > 0) {
              bytes.push(carry & 0xff);
              carry >>= 8;
            }
          }

          for (var k = 0; string[k] === LEADER && k < string.length - 1; ++k) {
            bytes.push(0);
          }

          return Buffer.from(bytes.reverse());
        }

        function decode(string) {
          var buffer = decodeUnsafe(string);
          if (buffer) return buffer;

          throw new Error('Non-base' + BASE + ' character');
        }

        return {
          encode: encode,
          decodeUnsafe: decodeUnsafe,
          decode: decode
        };
      };
    }, { "safe-buffer": 144 }], 76: [function (require, module, exports) {
      var ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

      var ALPHABET_MAP = {};
      for (var z = 0; z < ALPHABET.length; z++) {
        var x = ALPHABET.charAt(z);

        if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous');
        ALPHABET_MAP[x] = z;
      }

      function polymodStep(pre) {
        var b = pre >> 25;
        return (pre & 0x1FFFFFF) << 5 ^ -(b >> 0 & 1) & 0x3b6a57b2 ^ -(b >> 1 & 1) & 0x26508e6d ^ -(b >> 2 & 1) & 0x1ea119fa ^ -(b >> 3 & 1) & 0x3d4233dd ^ -(b >> 4 & 1) & 0x2a1462b3;
      }

      function prefixChk(prefix) {
        var chk = 1;
        for (var i = 0; i < prefix.length; ++i) {
          var c = prefix.charCodeAt(i);
          if (c < 33 || c > 126) throw new Error('Invalid prefix (' + prefix + ')');

          chk = polymodStep(chk) ^ c >> 5;
        }
        chk = polymodStep(chk);

        for (var i = 0; i < prefix.length; ++i) {
          var v = prefix.charCodeAt(i);
          chk = polymodStep(chk) ^ v & 0x1f;
        }
        return chk;
      }

      function encode(prefix, words) {
        if (prefix.length + 7 + words.length > 90) throw new TypeError('Exceeds Bech32 maximum length');
        prefix = prefix.toLowerCase();

        var chk = prefixChk(prefix);
        var result = prefix + '1';
        for (var i = 0; i < words.length; ++i) {
          var x = words[i];
          if (x >> 5 !== 0) throw new Error('Non 5-bit word');

          chk = polymodStep(chk) ^ x;
          result += ALPHABET.charAt(x);
        }

        for (var i = 0; i < 6; ++i) {
          chk = polymodStep(chk);
        }
        chk ^= 1;

        for (var i = 0; i < 6; ++i) {
          var v = chk >> (5 - i) * 5 & 0x1f;
          result += ALPHABET.charAt(v);
        }

        return result;
      }

      function decode(str) {
        if (str.length < 8) throw new TypeError(str + ' too short');
        if (str.length > 90) throw new TypeError(str + ' too long');

        var lowered = str.toLowerCase();
        var uppered = str.toUpperCase();
        if (str !== lowered && str !== uppered) throw new Error('Mixed-case string ' + str);
        str = lowered;

        var split = str.lastIndexOf('1');
        if (split === 0) throw new Error('Missing prefix for ' + str);

        var prefix = str.slice(0, split);
        var wordChars = str.slice(split + 1);
        if (wordChars.length < 6) throw new Error('Data too short');

        var chk = prefixChk(prefix);
        var words = [];
        for (var i = 0; i < wordChars.length; ++i) {
          var c = wordChars.charAt(i);
          var v = ALPHABET_MAP[c];
          if (v === undefined) throw new Error('Unknown character ' + c);
          chk = polymodStep(chk) ^ v;

          if (i + 6 >= wordChars.length) continue;
          words.push(v);
        }

        if (chk !== 1) throw new Error('Invalid checksum for ' + str);
      }

      function convert(data, inBits, outBits, pad) {
        var value = 0;
        var bits = 0;
        var maxV = (1 << outBits) - 1;

        var result = [];
        for (var i = 0; i < data.length; ++i) {
          value = value << inBits | data[i];
          bits += inBits;

          while (bits >= outBits) {
            bits -= outBits;
            result.push(value >> bits & maxV);
          }
        }

        if (pad) {
          if (bits > 0) {
            result.push(value << outBits - bits & maxV);
          }
        } else {
          if (bits >= inBits) throw new Error('Excess padding');
          if (value << outBits - bits & maxV) throw new Error('Non-zero padding');
        }

        return result;
      }

      function toWords(bytes) {
        return convert(bytes, 8, 5, true);
      }

      function fromWords(words) {
        return convert(words, 5, 8, false);
      }
    }, {}], 77: [function (require, module, exports) {
      function BigInteger(a, b, c) {
        if (!(this instanceof BigInteger)) return new BigInteger(a, b, c);

        if (a != null) {
          if ("number" == typeof a) this.fromNumber(a, b, c);else if (b == null && "string" != typeof a) this.fromString(a, 256);else this.fromString(a, b);
        }
      }

      var proto = BigInteger.prototype;

      proto.__bigi = require('../package.json').version;
      BigInteger.isBigInteger = function (obj, check_ver) {
        return obj && obj.__bigi && (!check_ver || obj.__bigi === proto.__bigi);
      };

      var dbits;

      function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
          var v = x * this[i++] + w[j] + c;
          c = Math.floor(v / 0x4000000);
          w[j++] = v & 0x3ffffff;
        }
        return c;
      }

      function am2(i, x, w, j, c, n) {
        var xl = x & 0x7fff,
            xh = x >> 15;
        while (--n >= 0) {
          var l = this[i] & 0x7fff;
          var h = this[i++] >> 15;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
          c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
          w[j++] = l & 0x3fffffff;
        }
        return c;
      }

      function am3(i, x, w, j, c, n) {
        var xl = x & 0x3fff,
            xh = x >> 14;
        while (--n >= 0) {
          var l = this[i] & 0x3fff;
          var h = this[i++] >> 14;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
          c = (l >> 28) + (m >> 14) + xh * h;
          w[j++] = l & 0xfffffff;
        }
        return c;
      }

      BigInteger.prototype.am = am1;
      dbits = 26;

      BigInteger.prototype.DB = dbits;
      BigInteger.prototype.DM = (1 << dbits) - 1;
      var DV = BigInteger.prototype.DV = 1 << dbits;

      var BI_FP = 52;
      BigInteger.prototype.FV = Math.pow(2, BI_FP);
      BigInteger.prototype.F1 = BI_FP - dbits;
      BigInteger.prototype.F2 = 2 * dbits - BI_FP;

      var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
      var BI_RC = new Array();
      var rr, vv;
      rr = "0".charCodeAt(0);
      for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
      rr = "a".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
      rr = "A".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

      function int2char(n) {
        return BI_RM.charAt(n);
      }

      function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return c == null ? -1 : c;
      }

      function bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
        r.t = this.t;
        r.s = this.s;
      }

      function bnpFromInt(x) {
        this.t = 1;
        this.s = x < 0 ? -1 : 0;
        if (x > 0) this[0] = x;else if (x < -1) this[0] = x + DV;else this.t = 0;
      }

      function nbv(i) {
        var r = new BigInteger();
        r.fromInt(i);
        return r;
      }

      function bnpFromString(s, b) {
        var self = this;

        var k;
        if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 256) k = 8;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else {
            self.fromRadix(s, b);
            return;
          }
        self.t = 0;
        self.s = 0;
        var i = s.length,
            mi = false,
            sh = 0;
        while (--i >= 0) {
          var x = k == 8 ? s[i] & 0xff : intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-") mi = true;
            continue;
          }
          mi = false;
          if (sh == 0) self[self.t++] = x;else if (sh + k > self.DB) {
            self[self.t - 1] |= (x & (1 << self.DB - sh) - 1) << sh;
            self[self.t++] = x >> self.DB - sh;
          } else self[self.t - 1] |= x << sh;
          sh += k;
          if (sh >= self.DB) sh -= self.DB;
        }
        if (k == 8 && (s[0] & 0x80) != 0) {
          self.s = -1;
          if (sh > 0) self[self.t - 1] |= (1 << self.DB - sh) - 1 << sh;
        }
        self.clamp();
        if (mi) BigInteger.ZERO.subTo(self, self);
      }

      function bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c) --this.t;
      }

      function bnToString(b) {
        var self = this;
        if (self.s < 0) return "-" + self.negate().toString(b);
        var k;
        if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else return self.toRadix(b);
        var km = (1 << k) - 1,
            d,
            m = false,
            r = "",
            i = self.t;
        var p = self.DB - i * self.DB % k;
        if (i-- > 0) {
          if (p < self.DB && (d = self[i] >> p) > 0) {
            m = true;
            r = int2char(d);
          }
          while (i >= 0) {
            if (p < k) {
              d = (self[i] & (1 << p) - 1) << k - p;
              d |= self[--i] >> (p += self.DB - k);
            } else {
              d = self[i] >> (p -= k) & km;
              if (p <= 0) {
                p += self.DB;
                --i;
              }
            }
            if (d > 0) m = true;
            if (m) r += int2char(d);
          }
        }
        return m ? r : "0";
      }

      function bnNegate() {
        var r = new BigInteger();
        BigInteger.ZERO.subTo(this, r);
        return r;
      }

      function bnAbs() {
        return this.s < 0 ? this.negate() : this;
      }

      function bnCompareTo(a) {
        var r = this.s - a.s;
        if (r != 0) return r;
        var i = this.t;
        r = i - a.t;
        if (r != 0) return this.s < 0 ? -r : r;
        while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
        return 0;
      }

      function nbits(x) {
        var r = 1,
            t;
        if ((t = x >>> 16) != 0) {
          x = t;
          r += 16;
        }
        if ((t = x >> 8) != 0) {
          x = t;
          r += 8;
        }
        if ((t = x >> 4) != 0) {
          x = t;
          r += 4;
        }
        if ((t = x >> 2) != 0) {
          x = t;
          r += 2;
        }
        if ((t = x >> 1) != 0) {
          x = t;
          r += 1;
        }
        return r;
      }

      function bnBitLength() {
        if (this.t <= 0) return 0;
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
      }

      function bnByteLength() {
        return this.bitLength() >> 3;
      }

      function bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i) r[i] = 0;
        r.t = this.t + n;
        r.s = this.s;
      }

      function bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i) r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
      }

      function bnpLShiftTo(n, r) {
        var self = this;
        var bs = n % self.DB;
        var cbs = self.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / self.DB),
            c = self.s << bs & self.DM,
            i;
        for (i = self.t - 1; i >= 0; --i) {
          r[i + ds + 1] = self[i] >> cbs | c;
          c = (self[i] & bm) << bs;
        }
        for (i = ds - 1; i >= 0; --i) r[i] = 0;
        r[ds] = c;
        r.t = self.t + ds + 1;
        r.s = self.s;
        r.clamp();
      }

      function bnpRShiftTo(n, r) {
        var self = this;
        r.s = self.s;
        var ds = Math.floor(n / self.DB);
        if (ds >= self.t) {
          r.t = 0;
          return;
        }
        var bs = n % self.DB;
        var cbs = self.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = self[ds] >> bs;
        for (var i = ds + 1; i < self.t; ++i) {
          r[i - ds - 1] |= (self[i] & bm) << cbs;
          r[i - ds] = self[i] >> bs;
        }
        if (bs > 0) r[self.t - ds - 1] |= (self.s & bm) << cbs;
        r.t = self.t - ds;
        r.clamp();
      }

      function bnpSubTo(a, r) {
        var self = this;
        var i = 0,
            c = 0,
            m = Math.min(a.t, self.t);
        while (i < m) {
          c += self[i] - a[i];
          r[i++] = c & self.DM;
          c >>= self.DB;
        }
        if (a.t < self.t) {
          c -= a.s;
          while (i < self.t) {
            c += self[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += self.s;
        } else {
          c += self.s;
          while (i < a.t) {
            c -= a[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c -= a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c < -1) r[i++] = self.DV + c;else if (c > 0) r[i++] = c;
        r.t = i;
        r.clamp();
      }

      function bnpMultiplyTo(a, r) {
        var x = this.abs(),
            y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.clamp();
        if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
      }

      function bnpSquareTo(r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
          var c = x.am(i, x[i], r, 2 * i, 0, 1);
          if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
          }
        }
        if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.clamp();
      }

      function bnpDivRemTo(m, q, r) {
        var self = this;
        var pm = m.abs();
        if (pm.t <= 0) return;
        var pt = self.abs();
        if (pt.t < pm.t) {
          if (q != null) q.fromInt(0);
          if (r != null) self.copyTo(r);
          return;
        }
        if (r == null) r = new BigInteger();
        var y = new BigInteger(),
            ts = self.s,
            ms = m.s;
        var nsh = self.DB - nbits(pm[pm.t - 1]);
        if (nsh > 0) {
          pm.lShiftTo(nsh, y);
          pt.lShiftTo(nsh, r);
        } else {
          pm.copyTo(y);
          pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) return;
        var yt = y0 * (1 << self.F1) + (ys > 1 ? y[ys - 2] >> self.F2 : 0);
        var d1 = self.FV / yt,
            d2 = (1 << self.F1) / yt,
            e = 1 << self.F2;
        var i = r.t,
            j = i - ys,
            t = q == null ? new BigInteger() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
          r[r.t++] = 1;
          r.subTo(t, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y);
        while (y.t < ys) y[y.t++] = 0;
        while (--j >= 0) {
          var qd = r[--i] == y0 ? self.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
          if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) r.subTo(t, r);
          }
        }
        if (q != null) {
          r.drShiftTo(ys, q);
          if (ts != ms) BigInteger.ZERO.subTo(q, q);
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0) r.rShiftTo(nsh, r);
        if (ts < 0) BigInteger.ZERO.subTo(r, r);
      }

      function bnMod(a) {
        var r = new BigInteger();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
        return r;
      }

      function Classic(m) {
        this.m = m;
      }

      function cConvert(x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);else return x;
      }

      function cRevert(x) {
        return x;
      }

      function cReduce(x) {
        x.divRemTo(this.m, null, x);
      }

      function cMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      function cSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      Classic.prototype.convert = cConvert;
      Classic.prototype.revert = cRevert;
      Classic.prototype.reduce = cReduce;
      Classic.prototype.mulTo = cMulTo;
      Classic.prototype.sqrTo = cSqrTo;

      function bnpInvDigit() {
        if (this.t < 1) return 0;
        var x = this[0];
        if ((x & 1) == 0) return 0;
        var y = x & 3;
        y = y * (2 - (x & 0xf) * y) & 0xf;
        y = y * (2 - (x & 0xff) * y) & 0xff;
        y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff;
        y = y * (2 - x * y % this.DV) % this.DV;
        return y > 0 ? this.DV - y : -y;
      }

      function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 0x7fff;
        this.mph = this.mp >> 15;
        this.um = (1 << m.DB - 15) - 1;
        this.mt2 = 2 * m.t;
      }

      function montConvert(x) {
        var r = new BigInteger();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
        return r;
      }

      function montRevert(x) {
        var r = new BigInteger();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }

      function montReduce(x) {
        while (x.t <= this.mt2) x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
          var j = x[i] & 0x7fff;
          var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;

          j = i + this.m.t;
          x[j] += this.m.am(0, u0, x, i, 0, this.m.t);

          while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
          }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
      }

      function montSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      function montMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      Montgomery.prototype.convert = montConvert;
      Montgomery.prototype.revert = montRevert;
      Montgomery.prototype.reduce = montReduce;
      Montgomery.prototype.mulTo = montMulTo;
      Montgomery.prototype.sqrTo = montSqrTo;

      function bnpIsEven() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }

      function bnpExp(e, z) {
        if (e > 0xffffffff || e < 1) return BigInteger.ONE;
        var r = new BigInteger(),
            r2 = new BigInteger(),
            g = z.convert(this),
            i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
          z.sqrTo(r, r2);
          if ((e & 1 << i) > 0) z.mulTo(r2, g, r);else {
            var t = r;
            r = r2;
            r2 = t;
          }
        }
        return z.revert(r);
      }

      function bnModPowInt(e, m) {
        var z;
        if (e < 256 || m.isEven()) z = new Classic(m);else z = new Montgomery(m);
        return this.exp(e, z);
      }

      proto.copyTo = bnpCopyTo;
      proto.fromInt = bnpFromInt;
      proto.fromString = bnpFromString;
      proto.clamp = bnpClamp;
      proto.dlShiftTo = bnpDLShiftTo;
      proto.drShiftTo = bnpDRShiftTo;
      proto.lShiftTo = bnpLShiftTo;
      proto.rShiftTo = bnpRShiftTo;
      proto.subTo = bnpSubTo;
      proto.multiplyTo = bnpMultiplyTo;
      proto.squareTo = bnpSquareTo;
      proto.divRemTo = bnpDivRemTo;
      proto.invDigit = bnpInvDigit;
      proto.isEven = bnpIsEven;
      proto.exp = bnpExp;

      proto.toString = bnToString;
      proto.negate = bnNegate;
      proto.abs = bnAbs;
      proto.compareTo = bnCompareTo;
      proto.bitLength = bnBitLength;
      proto.byteLength = bnByteLength;
      proto.mod = bnMod;
      proto.modPowInt = bnModPowInt;

      function bnClone() {
        var r = new BigInteger();
        this.copyTo(r);
        return r;
      }

      function bnIntValue() {
        if (this.s < 0) {
          if (this.t == 1) return this[0] - this.DV;else if (this.t == 0) return -1;
        } else if (this.t == 1) return this[0];else if (this.t == 0) return 0;

        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
      }

      function bnByteValue() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24;
      }

      function bnShortValue() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16;
      }

      function bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
      }

      function bnSigNum() {
        if (this.s < 0) return -1;else if (this.t <= 0 || this.t == 1 && this[0] <= 0) return 0;else return 1;
      }

      function bnpToRadix(b) {
        if (b == null) b = 10;
        if (this.signum() == 0 || b < 2 || b > 36) return "0";
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a),
            y = new BigInteger(),
            z = new BigInteger(),
            r = "";
        this.divRemTo(d, y, z);
        while (y.signum() > 0) {
          r = (a + z.intValue()).toString(b).substr(1) + r;
          y.divRemTo(d, y, z);
        }
        return z.intValue().toString(b) + r;
      }

      function bnpFromRadix(s, b) {
        var self = this;
        self.fromInt(0);
        if (b == null) b = 10;
        var cs = self.chunkSize(b);
        var d = Math.pow(b, cs),
            mi = false,
            j = 0,
            w = 0;
        for (var i = 0; i < s.length; ++i) {
          var x = intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-" && self.signum() == 0) mi = true;
            continue;
          }
          w = b * w + x;
          if (++j >= cs) {
            self.dMultiply(d);
            self.dAddOffset(w, 0);
            j = 0;
            w = 0;
          }
        }
        if (j > 0) {
          self.dMultiply(Math.pow(b, j));
          self.dAddOffset(w, 0);
        }
        if (mi) BigInteger.ZERO.subTo(self, self);
      }

      function bnpFromNumber(a, b, c) {
        var self = this;
        if ("number" == typeof b) {
          if (a < 2) self.fromInt(1);else {
            self.fromNumber(a, c);
            if (!self.testBit(a - 1)) self.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, self);
            if (self.isEven()) self.dAddOffset(1, 0);
            while (!self.isProbablePrime(b)) {
              self.dAddOffset(2, 0);
              if (self.bitLength() > a) self.subTo(BigInteger.ONE.shiftLeft(a - 1), self);
            }
          }
        } else {
          var x = new Array(),
              t = a & 7;
          x.length = (a >> 3) + 1;
          b.nextBytes(x);
          if (t > 0) x[0] &= (1 << t) - 1;else x[0] = 0;
          self.fromString(x, 256);
        }
      }

      function bnToByteArray() {
        var self = this;
        var i = self.t,
            r = new Array();
        r[0] = self.s;
        var p = self.DB - i * self.DB % 8,
            d,
            k = 0;
        if (i-- > 0) {
          if (p < self.DB && (d = self[i] >> p) != (self.s & self.DM) >> p) r[k++] = d | self.s << self.DB - p;
          while (i >= 0) {
            if (p < 8) {
              d = (self[i] & (1 << p) - 1) << 8 - p;
              d |= self[--i] >> (p += self.DB - 8);
            } else {
              d = self[i] >> (p -= 8) & 0xff;
              if (p <= 0) {
                p += self.DB;
                --i;
              }
            }
            if ((d & 0x80) != 0) d |= -256;
            if (k === 0 && (self.s & 0x80) != (d & 0x80)) ++k;
            if (k > 0 || d != self.s) r[k++] = d;
          }
        }
        return r;
      }

      function bnEquals(a) {
        return this.compareTo(a) == 0;
      }

      function bnMin(a) {
        return this.compareTo(a) < 0 ? this : a;
      }

      function bnMax(a) {
        return this.compareTo(a) > 0 ? this : a;
      }

      function bnpBitwiseTo(a, op, r) {
        var self = this;
        var i,
            f,
            m = Math.min(a.t, self.t);
        for (i = 0; i < m; ++i) r[i] = op(self[i], a[i]);
        if (a.t < self.t) {
          f = a.s & self.DM;
          for (i = m; i < self.t; ++i) r[i] = op(self[i], f);
          r.t = self.t;
        } else {
          f = self.s & self.DM;
          for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
          r.t = a.t;
        }
        r.s = op(self.s, a.s);
        r.clamp();
      }

      function op_and(x, y) {
        return x & y;
      }

      function bnAnd(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_and, r);
        return r;
      }

      function op_or(x, y) {
        return x | y;
      }

      function bnOr(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_or, r);
        return r;
      }

      function op_xor(x, y) {
        return x ^ y;
      }

      function bnXor(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_xor, r);
        return r;
      }

      function op_andnot(x, y) {
        return x & ~y;
      }

      function bnAndNot(a) {
        var r = new BigInteger();
        this.bitwiseTo(a, op_andnot, r);
        return r;
      }

      function bnNot() {
        var r = new BigInteger();
        for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r;
      }

      function bnShiftLeft(n) {
        var r = new BigInteger();
        if (n < 0) this.rShiftTo(-n, r);else this.lShiftTo(n, r);
        return r;
      }

      function bnShiftRight(n) {
        var r = new BigInteger();
        if (n < 0) this.lShiftTo(-n, r);else this.rShiftTo(n, r);
        return r;
      }

      function lbit(x) {
        if (x == 0) return -1;
        var r = 0;
        if ((x & 0xffff) == 0) {
          x >>= 16;
          r += 16;
        }
        if ((x & 0xff) == 0) {
          x >>= 8;
          r += 8;
        }
        if ((x & 0xf) == 0) {
          x >>= 4;
          r += 4;
        }
        if ((x & 3) == 0) {
          x >>= 2;
          r += 2;
        }
        if ((x & 1) == 0) ++r;
        return r;
      }

      function bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i) if (this[i] != 0) return i * this.DB + lbit(this[i]);
        if (this.s < 0) return this.t * this.DB;
        return -1;
      }

      function cbit(x) {
        var r = 0;
        while (x != 0) {
          x &= x - 1;
          ++r;
        }
        return r;
      }

      function bnBitCount() {
        var r = 0,
            x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
        return r;
      }

      function bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t) return this.s != 0;
        return (this[j] & 1 << n % this.DB) != 0;
      }

      function bnpChangeBit(n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
      }

      function bnSetBit(n) {
        return this.changeBit(n, op_or);
      }

      function bnClearBit(n) {
        return this.changeBit(n, op_andnot);
      }

      function bnFlipBit(n) {
        return this.changeBit(n, op_xor);
      }

      function bnpAddTo(a, r) {
        var self = this;

        var i = 0,
            c = 0,
            m = Math.min(a.t, self.t);
        while (i < m) {
          c += self[i] + a[i];
          r[i++] = c & self.DM;
          c >>= self.DB;
        }
        if (a.t < self.t) {
          c += a.s;
          while (i < self.t) {
            c += self[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += self.s;
        } else {
          c += self.s;
          while (i < a.t) {
            c += a[i];
            r[i++] = c & self.DM;
            c >>= self.DB;
          }
          c += a.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c > 0) r[i++] = c;else if (c < -1) r[i++] = self.DV + c;
        r.t = i;
        r.clamp();
      }

      function bnAdd(a) {
        var r = new BigInteger();
        this.addTo(a, r);
        return r;
      }

      function bnSubtract(a) {
        var r = new BigInteger();
        this.subTo(a, r);
        return r;
      }

      function bnMultiply(a) {
        var r = new BigInteger();
        this.multiplyTo(a, r);
        return r;
      }

      function bnSquare() {
        var r = new BigInteger();
        this.squareTo(r);
        return r;
      }

      function bnDivide(a) {
        var r = new BigInteger();
        this.divRemTo(a, r, null);
        return r;
      }

      function bnRemainder(a) {
        var r = new BigInteger();
        this.divRemTo(a, null, r);
        return r;
      }

      function bnDivideAndRemainder(a) {
        var q = new BigInteger(),
            r = new BigInteger();
        this.divRemTo(a, q, r);
        return new Array(q, r);
      }

      function bnpDMultiply(n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
      }

      function bnpDAddOffset(n, w) {
        if (n == 0) return;
        while (this.t <= w) this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
          this[w] -= this.DV;
          if (++w >= this.t) this[this.t++] = 0;
          ++this[w];
        }
      }

      function NullExp() {}

      function nNop(x) {
        return x;
      }

      function nMulTo(x, y, r) {
        x.multiplyTo(y, r);
      }

      function nSqrTo(x, r) {
        x.squareTo(r);
      }

      NullExp.prototype.convert = nNop;
      NullExp.prototype.revert = nNop;
      NullExp.prototype.mulTo = nMulTo;
      NullExp.prototype.sqrTo = nSqrTo;

      function bnPow(e) {
        return this.exp(e, new NullExp());
      }

      function bnpMultiplyLowerTo(a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0;
        r.t = i;
        while (i > 0) r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
        r.clamp();
      }

      function bnpMultiplyUpperTo(a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0;
        while (--i >= 0) r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a.t; ++i) r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        r.clamp();
        r.drShiftTo(1, r);
      }

      function Barrett(m) {
        this.r2 = new BigInteger();
        this.q3 = new BigInteger();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
        this.m = m;
      }

      function barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);else if (x.compareTo(this.m) < 0) return x;else {
          var r = new BigInteger();
          x.copyTo(r);
          this.reduce(r);
          return r;
        }
      }

      function barrettRevert(x) {
        return x;
      }

      function barrettReduce(x) {
        var self = this;
        x.drShiftTo(self.m.t - 1, self.r2);
        if (x.t > self.m.t + 1) {
          x.t = self.m.t + 1;
          x.clamp();
        }
        self.mu.multiplyUpperTo(self.r2, self.m.t + 1, self.q3);
        self.m.multiplyLowerTo(self.q3, self.m.t + 1, self.r2);
        while (x.compareTo(self.r2) < 0) x.dAddOffset(1, self.m.t + 1);
        x.subTo(self.r2, x);
        while (x.compareTo(self.m) >= 0) x.subTo(self.m, x);
      }

      function barrettSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }

      function barrettMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }

      Barrett.prototype.convert = barrettConvert;
      Barrett.prototype.revert = barrettRevert;
      Barrett.prototype.reduce = barrettReduce;
      Barrett.prototype.mulTo = barrettMulTo;
      Barrett.prototype.sqrTo = barrettSqrTo;

      function bnModPow(e, m) {
        var i = e.bitLength(),
            k,
            r = nbv(1),
            z;
        if (i <= 0) return r;else if (i < 18) k = 1;else if (i < 48) k = 3;else if (i < 144) k = 4;else if (i < 768) k = 5;else k = 6;
        if (i < 8) z = new Classic(m);else if (m.isEven()) z = new Barrett(m);else z = new Montgomery(m);

        var g = new Array(),
            n = 3,
            k1 = k - 1,
            km = (1 << k) - 1;
        g[1] = z.convert(this);
        if (k > 1) {
          var g2 = new BigInteger();
          z.sqrTo(g[1], g2);
          while (n <= km) {
            g[n] = new BigInteger();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2;
          }
        }

        var j = e.t - 1,
            w,
            is1 = true,
            r2 = new BigInteger(),
            t;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
          if (i >= k1) w = e[j] >> i - k1 & km;else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0) w |= e[j - 1] >> this.DB + i - k1;
          }

          n = k;
          while ((w & 1) == 0) {
            w >>= 1;
            --n;
          }
          if ((i -= n) < 0) {
            i += this.DB;
            --j;
          }
          if (is1) {
            g[w].copyTo(r);
            is1 = false;
          } else {
            while (n > 1) {
              z.sqrTo(r, r2);
              z.sqrTo(r2, r);
              n -= 2;
            }
            if (n > 0) z.sqrTo(r, r2);else {
              t = r;
              r = r2;
              r2 = t;
            }
            z.mulTo(r2, g[w], r);
          }

          while (j >= 0 && (e[j] & 1 << i) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
              i = this.DB - 1;
              --j;
            }
          }
        }
        return z.revert(r);
      }

      function bnGCD(a) {
        var x = this.s < 0 ? this.negate() : this.clone();
        var y = a.s < 0 ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
          var t = x;
          x = y;
          y = t;
        }
        var i = x.getLowestSetBit(),
            g = y.getLowestSetBit();
        if (g < 0) return x;
        if (i < g) g = i;
        if (g > 0) {
          x.rShiftTo(g, x);
          y.rShiftTo(g, y);
        }
        while (x.signum() > 0) {
          if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
          if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
          if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
          } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
          }
        }
        if (g > 0) y.lShiftTo(g, y);
        return y;
      }

      function bnpModInt(n) {
        if (n <= 0) return 0;
        var d = this.DV % n,
            r = this.s < 0 ? n - 1 : 0;
        if (this.t > 0) if (d == 0) r = this[0] % n;else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
        return r;
      }

      function bnModInverse(m) {
        var ac = m.isEven();
        if (this.signum() === 0) throw new Error('division by zero');
        if (this.isEven() && ac || m.signum() == 0) return BigInteger.ZERO;
        var u = m.clone(),
            v = this.clone();
        var a = nbv(1),
            b = nbv(0),
            c = nbv(0),
            d = nbv(1);
        while (u.signum() != 0) {
          while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
              if (!a.isEven() || !b.isEven()) {
                a.addTo(this, a);
                b.subTo(m, b);
              }
              a.rShiftTo(1, a);
            } else if (!b.isEven()) b.subTo(m, b);
            b.rShiftTo(1, b);
          }
          while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
              if (!c.isEven() || !d.isEven()) {
                c.addTo(this, c);
                d.subTo(m, d);
              }
              c.rShiftTo(1, c);
            } else if (!d.isEven()) d.subTo(m, d);
            d.rShiftTo(1, d);
          }
          if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac) a.subTo(c, a);
            b.subTo(d, b);
          } else {
            v.subTo(u, v);
            if (ac) c.subTo(a, c);
            d.subTo(b, d);
          }
        }
        if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
        if (d.compareTo(m) >= 0) return d.subtract(m);
        if (d.signum() < 0) d.addTo(m, d);else return d;
        if (d.signum() < 0) return d.add(m);else return d;
      }

      var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];

      var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];

      function bnIsProbablePrime(t) {
        var i,
            x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
          for (i = 0; i < lowprimes.length; ++i) if (x[0] == lowprimes[i]) return true;
          return false;
        }
        if (x.isEven()) return false;
        i = 1;
        while (i < lowprimes.length) {
          var m = lowprimes[i],
              j = i + 1;
          while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
          m = x.modInt(m);
          while (i < j) if (m % lowprimes[i++] == 0) return false;
        }
        return x.millerRabin(t);
      }

      function bnpMillerRabin(t) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0) return false;
        var r = n1.shiftRight(k);
        t = t + 1 >> 1;
        if (t > lowprimes.length) t = lowprimes.length;
        var a = new BigInteger(null);
        var j,
            bases = [];
        for (var i = 0; i < t; ++i) {
          for (;;) {
            j = lowprimes[Math.floor(Math.random() * lowprimes.length)];
            if (bases.indexOf(j) == -1) break;
          }
          bases.push(j);
          a.fromInt(j);
          var y = a.modPow(r, this);
          if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
              y = y.modPowInt(2, this);
              if (y.compareTo(BigInteger.ONE) == 0) return false;
            }
            if (y.compareTo(n1) != 0) return false;
          }
        }
        return true;
      }

      proto.chunkSize = bnpChunkSize;
      proto.toRadix = bnpToRadix;
      proto.fromRadix = bnpFromRadix;
      proto.fromNumber = bnpFromNumber;
      proto.bitwiseTo = bnpBitwiseTo;
      proto.changeBit = bnpChangeBit;
      proto.addTo = bnpAddTo;
      proto.dMultiply = bnpDMultiply;
      proto.dAddOffset = bnpDAddOffset;
      proto.multiplyLowerTo = bnpMultiplyLowerTo;
      proto.multiplyUpperTo = bnpMultiplyUpperTo;
      proto.modInt = bnpModInt;
      proto.millerRabin = bnpMillerRabin;

      proto.clone = bnClone;
      proto.intValue = bnIntValue;
      proto.byteValue = bnByteValue;
      proto.shortValue = bnShortValue;
      proto.signum = bnSigNum;
      proto.toByteArray = bnToByteArray;
      proto.equals = bnEquals;
      proto.min = bnMin;
      proto.max = bnMax;
      proto.and = bnAnd;
      proto.or = bnOr;
      proto.xor = bnXor;
      proto.andNot = bnAndNot;
      proto.not = bnNot;
      proto.shiftLeft = bnShiftLeft;
      proto.shiftRight = bnShiftRight;
      proto.getLowestSetBit = bnGetLowestSetBit;
      proto.bitCount = bnBitCount;
      proto.testBit = bnTestBit;
      proto.setBit = bnSetBit;
      proto.clearBit = bnClearBit;
      proto.flipBit = bnFlipBit;
      proto.add = bnAdd;
      proto.subtract = bnSubtract;
      proto.multiply = bnMultiply;
      proto.divide = bnDivide;
      proto.remainder = bnRemainder;
      proto.divideAndRemainder = bnDivideAndRemainder;
      proto.modPow = bnModPow;
      proto.modInverse = bnModInverse;
      proto.pow = bnPow;
      proto.gcd = bnGCD;
      proto.isProbablePrime = bnIsProbablePrime;

      proto.square = bnSquare;

      BigInteger.ZERO = nbv(0);
      BigInteger.ONE = nbv(1);
      BigInteger.valueOf = nbv;

      module.exports = BigInteger;
    }, { "../package.json": 80 }], 78: [function (require, module, exports) {
      arguments[4][10][0].apply(exports, arguments);
    }, { "./bigi": 77, "assert": 159, "buffer": 162, "dup": 10 }], 79: [function (require, module, exports) {
      arguments[4][11][0].apply(exports, arguments);
    }, { "./bigi": 77, "./convert": 78, "dup": 11 }], 80: [function (require, module, exports) {
      module.exports = {
        "name": "bigi",
        "version": "1.4.1",
        "description": "Big integers.",
        "keywords": ["cryptography", "math", "bitcoin", "arbitrary", "precision", "arithmetic", "big", "integer", "int", "number", "biginteger", "bigint", "bignumber", "decimal", "float"],
        "devDependencies": {
          "coveralls": "^2.11.2",
          "istanbul": "^0.3.5",
          "jshint": "^2.5.1",
          "mocha": "^2.1.0",
          "mochify": "^2.1.0"
        },
        "repository": {
          "url": "git+https://github.com/cryptocoinjs/bigi.git",
          "type": "git"
        },
        "main": "./lib/index.js",
        "scripts": {
          "browser-test": "mochify --wd -R spec",
          "test": "_mocha -- test/*.js",
          "jshint": "jshint --config jshint.json lib/*.js ; true",
          "unit": "mocha",
          "coverage": "istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",
          "coveralls": "npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"
        },
        "dependencies": {},
        "testling": {
          "files": "test/*.js",
          "harness": "mocha",
          "browsers": ["ie/9..latest", "firefox/latest", "chrome/latest", "safari/6.0..latest", "iphone/6.0..latest", "android-browser/4.2..latest"]
        },
        "gitHead": "7d034a1b38ca90f68daa9de472dda2fb813836f1",
        "bugs": {
          "url": "https://github.com/cryptocoinjs/bigi/issues"
        },
        "homepage": "https://github.com/cryptocoinjs/bigi#readme",
        "_id": "bigi@1.4.1",
        "_shasum": "726e8ab08d1fe1dfb8aa6bb6309bffecf93a21b7",
        "_from": "bigi@*",
        "_npmVersion": "2.10.1",
        "_nodeVersion": "2.1.0",
        "_npmUser": {
          "name": "jprichardson",
          "email": "jprichardson@gmail.com"
        },
        "maintainers": [{
          "name": "midnightlightning",
          "email": "boydb@midnightdesign.ws"
        }, {
          "name": "sidazhang",
          "email": "sidazhang89@gmail.com"
        }, {
          "name": "nadav",
          "email": "npm@shesek.info"
        }, {
          "name": "jprichardson",
          "email": "jprichardson@gmail.com"
        }],
        "dist": {
          "shasum": "726e8ab08d1fe1dfb8aa6bb6309bffecf93a21b7",
          "tarball": "https://registry.npmjs.org/bigi/-/bigi-1.4.1.tgz"
        },
        "directories": {},
        "_resolved": "https://registry.npmjs.org/bigi/-/bigi-1.4.1.tgz",
        "readme": "ERROR: No README data found!"
      };
    }, {}], 81: [function (require, module, exports) {
      arguments[4][13][0].apply(exports, arguments);
    }, { "dup": 13, "safe-buffer": 144 }], 82: [function (require, module, exports) {
      arguments[4][31][0].apply(exports, arguments);
    }, { "dup": 31 }], 83: [function (require, module, exports) {
      var OPS = require('./index.json');

      var map = {};
      for (var op in OPS) {
        var code = OPS[op];
        map[code] = op;
      }

      module.exports = map;
    }, { "./index.json": 82 }], 84: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var bech32 = require('bech32');
      var bs58check = require('bs58check');
      var bscript = require('./script');
      var networks = require('./networks');
      var typeforce = require('typeforce');
      var types = require('./types');

      function fromBase58Check(address) {
        var payload = bs58check.decode(address);

        if (payload.length < 21) throw new TypeError(address + ' is too short');
        if (payload.length > 21) throw new TypeError(address + ' is too long');

        var version = payload.readUInt8(0);
        var hash = payload.slice(1);

        return { version: version, hash: hash };
      }

      function fromBech32(address) {
        var result = bech32.decode(address);
        var data = bech32.fromWords(result.words.slice(1));

        return {
          version: result.words[0],
          prefix: result.prefix,
          data: Buffer.from(data)
        };
      }

      function toBase58Check(hash, version) {
        typeforce(types.tuple(types.Hash160bit, types.UInt8), arguments);

        var payload = Buffer.allocUnsafe(21);
        payload.writeUInt8(version, 0);
        hash.copy(payload, 1);

        return bs58check.encode(payload);
      }

      function toBech32(data, version, prefix) {
        var words = bech32.toWords(data);
        words.unshift(version);

        return bech32.encode(prefix, words);
      }

      function fromOutputScript(outputScript, network) {
        network = network || networks.bitcoin;

        if (bscript.pubKeyHash.output.check(outputScript)) return toBase58Check(bscript.compile(outputScript).slice(3, 23), network.pubKeyHash);
        if (bscript.scriptHash.output.check(outputScript)) return toBase58Check(bscript.compile(outputScript).slice(2, 22), network.scriptHash);
        if (bscript.witnessPubKeyHash.output.check(outputScript)) return toBech32(bscript.compile(outputScript).slice(2, 22), 0, network.bech32);
        if (bscript.witnessScriptHash.output.check(outputScript)) return toBech32(bscript.compile(outputScript).slice(2, 34), 0, network.bech32);

        throw new Error(bscript.toASM(outputScript) + ' has no matching Address');
      }

      function toOutputScript(address, network) {
        network = network || networks.bitcoin;

        var decode;
        try {
          decode = fromBase58Check(address);
        } catch (e) {}

        if (decode) {
          if (decode.version === network.pubKeyHash) return bscript.pubKeyHash.output.encode(decode.hash);
          if (decode.version === network.scriptHash) return bscript.scriptHash.output.encode(decode.hash);
        } else {
          try {
            decode = fromBech32(address);
          } catch (e) {}

          if (decode) {
            if (decode.prefix !== network.bech32) throw new Error(address + ' has an invalid prefix');
            if (decode.version === 0) {
              if (decode.data.length === 20) return bscript.witnessPubKeyHash.output.encode(decode.data);
              if (decode.data.length === 32) return bscript.witnessScriptHash.output.encode(decode.data);
            }
          }
        }

        throw new Error(address + ' has no matching Script');
      }

      module.exports = {
        fromBase58Check: fromBase58Check,
        fromBech32: fromBech32,
        fromOutputScript: fromOutputScript,
        toBase58Check: toBase58Check,
        toBech32: toBech32,
        toOutputScript: toOutputScript
      };
    }, { "./networks": 93, "./script": 94, "./types": 120, "bech32": 76, "bs58check": 121, "safe-buffer": 144, "typeforce": 155 }], 85: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var bcrypto = require('./crypto');
      var fastMerkleRoot = require('merkle-lib/fastRoot');
      var typeforce = require('typeforce');
      var types = require('./types');
      var varuint = require('varuint-bitcoin');

      var Transaction = require('./transaction');

      function Block() {
        this.version = 1;
        this.prevHash = null;
        this.merkleRoot = null;
        this.timestamp = 0;
        this.bits = 0;
        this.nonce = 0;
      }

      Block.fromBuffer = function (buffer) {
        if (buffer.length < 80) throw new Error('Buffer too small (< 80 bytes)');

        var offset = 0;
        function readSlice(n) {
          offset += n;
          return buffer.slice(offset - n, offset);
        }

        function readUInt32() {
          var i = buffer.readUInt32LE(offset);
          offset += 4;
          return i;
        }

        function readInt32() {
          var i = buffer.readInt32LE(offset);
          offset += 4;
          return i;
        }

        var block = new Block();
        block.version = readInt32();
        block.prevHash = readSlice(32);
        block.merkleRoot = readSlice(32);
        block.timestamp = readUInt32();
        block.bits = readUInt32();
        block.nonce = readUInt32();

        if (buffer.length === 80) return block;

        function readVarInt() {
          var vi = varuint.decode(buffer, offset);
          offset += varuint.decode.bytes;
          return vi;
        }

        function readTransaction() {
          var tx = Transaction.fromBuffer(buffer.slice(offset), true);
          offset += tx.byteLength();
          return tx;
        }

        var nTransactions = readVarInt();
        block.transactions = [];

        for (var i = 0; i < nTransactions; ++i) {
          var tx = readTransaction();
          block.transactions.push(tx);
        }

        return block;
      };

      Block.prototype.byteLength = function (headersOnly) {
        if (headersOnly || !this.transactions) return 80;

        return 80 + varuint.encodingLength(this.transactions.length) + this.transactions.reduce(function (a, x) {
          return a + x.byteLength();
        }, 0);
      };

      Block.fromHex = function (hex) {
        return Block.fromBuffer(Buffer.from(hex, 'hex'));
      };

      Block.prototype.getHash = function () {
        return bcrypto.hash256(this.toBuffer(true));
      };

      Block.prototype.getId = function () {
        return this.getHash().reverse().toString('hex');
      };

      Block.prototype.getUTCDate = function () {
        var date = new Date(0);
        date.setUTCSeconds(this.timestamp);

        return date;
      };

      Block.prototype.toBuffer = function (headersOnly) {
        var buffer = Buffer.allocUnsafe(this.byteLength(headersOnly));

        var offset = 0;
        function writeSlice(slice) {
          slice.copy(buffer, offset);
          offset += slice.length;
        }

        function writeInt32(i) {
          buffer.writeInt32LE(i, offset);
          offset += 4;
        }
        function writeUInt32(i) {
          buffer.writeUInt32LE(i, offset);
          offset += 4;
        }

        writeInt32(this.version);
        writeSlice(this.prevHash);
        writeSlice(this.merkleRoot);
        writeUInt32(this.timestamp);
        writeUInt32(this.bits);
        writeUInt32(this.nonce);

        if (headersOnly || !this.transactions) return buffer;

        varuint.encode(this.transactions.length, buffer, offset);
        offset += varuint.encode.bytes;

        this.transactions.forEach(function (tx) {
          var txSize = tx.byteLength();
          tx.toBuffer(buffer, offset);
          offset += txSize;
        });

        return buffer;
      };

      Block.prototype.toHex = function (headersOnly) {
        return this.toBuffer(headersOnly).toString('hex');
      };

      Block.calculateTarget = function (bits) {
        var exponent = ((bits & 0xff000000) >> 24) - 3;
        var mantissa = bits & 0x007fffff;
        var target = Buffer.alloc(32, 0);
        target.writeUInt32BE(mantissa, 28 - exponent);
        return target;
      };

      Block.calculateMerkleRoot = function (transactions) {
        typeforce([{ getHash: types.Function }], transactions);
        if (transactions.length === 0) throw TypeError('Cannot compute merkle root for zero transactions');

        var hashes = transactions.map(function (transaction) {
          return transaction.getHash();
        });

        return fastMerkleRoot(hashes, bcrypto.hash256);
      };

      Block.prototype.checkMerkleRoot = function () {
        if (!this.transactions) return false;

        var actualMerkleRoot = Block.calculateMerkleRoot(this.transactions);
        return this.merkleRoot.compare(actualMerkleRoot) === 0;
      };

      Block.prototype.checkProofOfWork = function () {
        var hash = this.getHash().reverse();
        var target = Block.calculateTarget(this.bits);

        return hash.compare(target) <= 0;
      };

      module.exports = Block;
    }, { "./crypto": 87, "./transaction": 118, "./types": 120, "merkle-lib/fastRoot": 140, "safe-buffer": 144, "typeforce": 155, "varuint-bitcoin": 157 }], 86: [function (require, module, exports) {
      var pushdata = require('pushdata-bitcoin');
      var varuint = require('varuint-bitcoin');

      function verifuint(value, max) {
        if (typeof value !== 'number') throw new Error('cannot write a non-number as a number');
        if (value < 0) throw new Error('specified a negative value for writing an unsigned value');
        if (value > max) throw new Error('RangeError: value out of range');
        if (Math.floor(value) !== value) throw new Error('value has a fractional component');
      }

      function readUInt64LE(buffer, offset) {
        var a = buffer.readUInt32LE(offset);
        var b = buffer.readUInt32LE(offset + 4);
        b *= 0x100000000;

        verifuint(b + a, 0x001fffffffffffff);

        return b + a;
      }

      function writeUInt64LE(buffer, value, offset) {
        verifuint(value, 0x001fffffffffffff);

        buffer.writeInt32LE(value & -1, offset);
        buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
        return offset + 8;
      }

      function readVarInt(buffer, offset) {
        var result = varuint.decode(buffer, offset);

        return {
          number: result,
          size: varuint.decode.bytes
        };
      }

      function writeVarInt(buffer, number, offset) {
        varuint.encode(number, buffer, offset);
        return varuint.encode.bytes;
      }

      module.exports = {
        pushDataSize: pushdata.encodingLength,
        readPushDataInt: pushdata.decode,
        readUInt64LE: readUInt64LE,
        readVarInt: readVarInt,
        varIntBuffer: varuint.encode,
        varIntSize: varuint.encodingLength,
        writePushDataInt: pushdata.encode,
        writeUInt64LE: writeUInt64LE,
        writeVarInt: writeVarInt
      };
    }, { "pushdata-bitcoin": 141, "varuint-bitcoin": 157 }], 87: [function (require, module, exports) {
      var createHash = require('create-hash');

      function ripemd160(buffer) {
        return createHash('rmd160').update(buffer).digest();
      }

      function sha1(buffer) {
        return createHash('sha1').update(buffer).digest();
      }

      function sha256(buffer) {
        return createHash('sha256').update(buffer).digest();
      }

      function hash160(buffer) {
        return ripemd160(sha256(buffer));
      }

      function hash256(buffer) {
        return sha256(sha256(buffer));
      }

      module.exports = {
        hash160: hash160,
        hash256: hash256,
        ripemd160: ripemd160,
        sha1: sha1,
        sha256: sha256
      };
    }, { "create-hash": 124 }], 88: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var createHmac = require('create-hmac');
      var typeforce = require('typeforce');
      var types = require('./types');

      var BigInteger = require('bigi');
      var ECSignature = require('./ecsignature');

      var ZERO = Buffer.alloc(1, 0);
      var ONE = Buffer.alloc(1, 1);

      var ecurve = require('ecurve');
      var secp256k1 = ecurve.getCurveByName('secp256k1');

      function deterministicGenerateK(hash, x, checkSig) {
        typeforce(types.tuple(types.Hash256bit, types.Buffer256bit, types.Function), arguments);

        var k = Buffer.alloc(32, 0);
        var v = Buffer.alloc(32, 1);

        k = createHmac('sha256', k).update(v).update(ZERO).update(x).update(hash).digest();

        v = createHmac('sha256', k).update(v).digest();

        k = createHmac('sha256', k).update(v).update(ONE).update(x).update(hash).digest();

        v = createHmac('sha256', k).update(v).digest();

        v = createHmac('sha256', k).update(v).digest();

        var T = BigInteger.fromBuffer(v);

        while (T.signum() <= 0 || T.compareTo(secp256k1.n) >= 0 || !checkSig(T)) {
          k = createHmac('sha256', k).update(v).update(ZERO).digest();

          v = createHmac('sha256', k).update(v).digest();

          v = createHmac('sha256', k).update(v).digest();
          T = BigInteger.fromBuffer(v);
        }

        return T;
      }

      var N_OVER_TWO = secp256k1.n.shiftRight(1);

      function sign(hash, d) {
        typeforce(types.tuple(types.Hash256bit, types.BigInt), arguments);

        var x = d.toBuffer(32);
        var e = BigInteger.fromBuffer(hash);
        var n = secp256k1.n;
        var G = secp256k1.G;

        var r, s;
        deterministicGenerateK(hash, x, function (k) {
          var Q = G.multiply(k);

          if (secp256k1.isInfinity(Q)) return false;

          r = Q.affineX.mod(n);
          if (r.signum() === 0) return false;

          s = k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);
          if (s.signum() === 0) return false;

          return true;
        });

        if (s.compareTo(N_OVER_TWO) > 0) {
          s = n.subtract(s);
        }

        return new ECSignature(r, s);
      }

      function verify(hash, signature, Q) {
        typeforce(types.tuple(types.Hash256bit, types.ECSignature, types.ECPoint), arguments);

        var n = secp256k1.n;
        var G = secp256k1.G;

        var r = signature.r;
        var s = signature.s;

        if (r.signum() <= 0 || r.compareTo(n) >= 0) return false;
        if (s.signum() <= 0 || s.compareTo(n) >= 0) return false;

        var e = BigInteger.fromBuffer(hash);

        var sInv = s.modInverse(n);

        var u1 = e.multiply(sInv).mod(n);
        var u2 = r.multiply(sInv).mod(n);

        var R = G.multiplyTwo(u1, Q, u2);

        if (secp256k1.isInfinity(R)) return false;

        var xR = R.affineX;

        var v = xR.mod(n);

        return v.equals(r);
      }

      module.exports = {
        deterministicGenerateK: deterministicGenerateK,
        sign: sign,
        verify: verify,

        __curve: secp256k1
      };
    }, { "./ecsignature": 90, "./types": 120, "bigi": 79, "create-hmac": 127, "ecurve": 131, "safe-buffer": 144, "typeforce": 155 }], 89: [function (require, module, exports) {
      var baddress = require('./address');
      var bcrypto = require('./crypto');
      var ecdsa = require('./ecdsa');
      var randomBytes = require('randombytes');
      var typeforce = require('typeforce');
      var types = require('./types');
      var wif = require('wif');

      var NETWORKS = require('./networks');
      var BigInteger = require('bigi');

      var ecurve = require('ecurve');
      var secp256k1 = ecdsa.__curve;

      function ECPair(d, Q, options) {
        if (options) {
          typeforce({
            compressed: types.maybe(types.Boolean),
            network: types.maybe(types.Network)
          }, options);
        }

        options = options || {};

        if (d) {
          if (d.signum() <= 0) throw new Error('Private key must be greater than 0');
          if (d.compareTo(secp256k1.n) >= 0) throw new Error('Private key must be less than the curve order');
          if (Q) throw new TypeError('Unexpected publicKey parameter');

          this.d = d;
        } else {
          typeforce(types.ECPoint, Q);

          this.__Q = Q;
        }

        this.compressed = options.compressed === undefined ? true : options.compressed;
        this.network = options.network || NETWORKS.bitcoin;
      }

      Object.defineProperty(ECPair.prototype, 'Q', {
        get: function () {
          if (!this.__Q && this.d) {
            this.__Q = secp256k1.G.multiply(this.d);
          }

          return this.__Q;
        }
      });

      ECPair.fromPublicKeyBuffer = function (buffer, network) {
        var Q = ecurve.Point.decodeFrom(secp256k1, buffer);

        return new ECPair(null, Q, {
          compressed: Q.compressed,
          network: network
        });
      };

      ECPair.fromWIF = function (string, network) {
        var decoded = wif.decode(string);
        var version = decoded.version;

        if (types.Array(network)) {
          network = network.filter(function (x) {
            return version === x.wif;
          }).pop();

          if (!network) throw new Error('Unknown network version');
        } else {
          network = network || NETWORKS.bitcoin;

          if (version !== network.wif) throw new Error('Invalid network version');
        }

        var d = BigInteger.fromBuffer(decoded.privateKey);

        return new ECPair(d, null, {
          compressed: decoded.compressed,
          network: network
        });
      };

      ECPair.makeRandom = function (options) {
        options = options || {};

        var rng = options.rng || randomBytes;

        var d;
        do {
          var buffer = rng(32);
          typeforce(types.Buffer256bit, buffer);

          d = BigInteger.fromBuffer(buffer);
        } while (d.signum() <= 0 || d.compareTo(secp256k1.n) >= 0);

        return new ECPair(d, null, options);
      };

      ECPair.prototype.getAddress = function () {
        return baddress.toBase58Check(bcrypto.hash160(this.getPublicKeyBuffer()), this.getNetwork().pubKeyHash);
      };

      ECPair.prototype.getNetwork = function () {
        return this.network;
      };

      ECPair.prototype.getPublicKeyBuffer = function () {
        return this.Q.getEncoded(this.compressed);
      };

      ECPair.prototype.sign = function (hash) {
        if (!this.d) throw new Error('Missing private key');

        return ecdsa.sign(hash, this.d);
      };

      ECPair.prototype.toWIF = function () {
        if (!this.d) throw new Error('Missing private key');

        return wif.encode(this.network.wif, this.d.toBuffer(32), this.compressed);
      };

      ECPair.prototype.verify = function (hash, signature) {
        return ecdsa.verify(hash, signature, this.Q);
      };

      module.exports = ECPair;
    }, { "./address": 84, "./crypto": 87, "./ecdsa": 88, "./networks": 93, "./types": 120, "bigi": 79, "ecurve": 131, "randombytes": 142, "typeforce": 155, "wif": 158 }], 90: [function (require, module, exports) {
      (function (Buffer) {
        var bip66 = require('bip66');
        var typeforce = require('typeforce');
        var types = require('./types');

        var BigInteger = require('bigi');

        function ECSignature(r, s) {
          typeforce(types.tuple(types.BigInt, types.BigInt), arguments);

          this.r = r;
          this.s = s;
        }

        ECSignature.parseCompact = function (buffer) {
          if (buffer.length !== 65) throw new Error('Invalid signature length');

          var flagByte = buffer.readUInt8(0) - 27;
          if (flagByte !== (flagByte & 7)) throw new Error('Invalid signature parameter');

          var compressed = !!(flagByte & 4);
          var recoveryParam = flagByte & 3;

          var r = BigInteger.fromBuffer(buffer.slice(1, 33));
          var s = BigInteger.fromBuffer(buffer.slice(33));

          return {
            compressed: compressed,
            i: recoveryParam,
            signature: new ECSignature(r, s)
          };
        };

        ECSignature.fromDER = function (buffer) {
          var decode = bip66.decode(buffer);
          var r = BigInteger.fromDERInteger(decode.r);
          var s = BigInteger.fromDERInteger(decode.s);

          return new ECSignature(r, s);
        };

        ECSignature.parseScriptSignature = function (buffer) {
          var hashType = buffer.readUInt8(buffer.length - 1);
          var hashTypeMod = hashType & ~0x80;

          if (hashTypeMod <= 0x00 || hashTypeMod >= 0x04) throw new Error('Invalid hashType ' + hashType);

          return {
            signature: ECSignature.fromDER(buffer.slice(0, -1)),
            hashType: hashType
          };
        };

        ECSignature.prototype.toCompact = function (i, compressed) {
          if (compressed) {
            i += 4;
          }

          i += 27;

          var buffer = Buffer.alloc(65);
          buffer.writeUInt8(i, 0);
          this.r.toBuffer(32).copy(buffer, 1);
          this.s.toBuffer(32).copy(buffer, 33);

          return buffer;
        };

        ECSignature.prototype.toDER = function () {
          var r = Buffer.from(this.r.toDERInteger());
          var s = Buffer.from(this.s.toDERInteger());

          return bip66.encode(r, s);
        };

        ECSignature.prototype.toScriptSignature = function (hashType) {
          var hashTypeMod = hashType & ~0x80;
          if (hashTypeMod <= 0 || hashTypeMod >= 4) throw new Error('Invalid hashType ' + hashType);

          var hashTypeBuffer = Buffer.alloc(1);
          hashTypeBuffer.writeUInt8(hashType, 0);

          return Buffer.concat([this.toDER(), hashTypeBuffer]);
        };

        module.exports = ECSignature;
      }).call(this, require("buffer").Buffer);
    }, { "./types": 120, "bigi": 79, "bip66": 81, "buffer": 162, "typeforce": 155 }], 91: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var base58check = require('bs58check');
      var bcrypto = require('./crypto');
      var createHmac = require('create-hmac');
      var typeforce = require('typeforce');
      var types = require('./types');
      var NETWORKS = require('./networks');

      var BigInteger = require('bigi');
      var ECPair = require('./ecpair');

      var ecurve = require('ecurve');
      var curve = ecurve.getCurveByName('secp256k1');

      function HDNode(keyPair, chainCode) {
        typeforce(types.tuple('ECPair', types.Buffer256bit), arguments);

        if (!keyPair.compressed) throw new TypeError('BIP32 only allows compressed keyPairs');

        this.keyPair = keyPair;
        this.chainCode = chainCode;
        this.depth = 0;
        this.index = 0;
        this.parentFingerprint = 0x00000000;
      }

      HDNode.HIGHEST_BIT = 0x80000000;
      HDNode.LENGTH = 78;
      HDNode.MASTER_SECRET = Buffer.from('Bitcoin seed', 'utf8');

      HDNode.fromSeedBuffer = function (seed, network) {
        typeforce(types.tuple(types.Buffer, types.maybe(types.Network)), arguments);

        if (seed.length < 16) throw new TypeError('Seed should be at least 128 bits');
        if (seed.length > 64) throw new TypeError('Seed should be at most 512 bits');

        var I = createHmac('sha512', HDNode.MASTER_SECRET).update(seed).digest();
        var IL = I.slice(0, 32);
        var IR = I.slice(32);

        var pIL = BigInteger.fromBuffer(IL);
        var keyPair = new ECPair(pIL, null, {
          network: network
        });

        return new HDNode(keyPair, IR);
      };

      HDNode.fromSeedHex = function (hex, network) {
        return HDNode.fromSeedBuffer(Buffer.from(hex, 'hex'), network);
      };

      HDNode.fromBase58 = function (string, networks) {
        var buffer = base58check.decode(string);
        if (buffer.length !== 78) throw new Error('Invalid buffer length');

        var version = buffer.readUInt32BE(0);
        var network;

        if (Array.isArray(networks)) {
          network = networks.filter(function (x) {
            return version === x.bip32.private || version === x.bip32.public;
          }).pop();

          if (!network) throw new Error('Unknown network version');
        } else {
          network = networks || NETWORKS.bitcoin;
        }

        if (version !== network.bip32.private && version !== network.bip32.public) throw new Error('Invalid network version');

        var depth = buffer[4];

        var parentFingerprint = buffer.readUInt32BE(5);
        if (depth === 0) {
          if (parentFingerprint !== 0x00000000) throw new Error('Invalid parent fingerprint');
        }

        var index = buffer.readUInt32BE(9);
        if (depth === 0 && index !== 0) throw new Error('Invalid index');

        var chainCode = buffer.slice(13, 45);
        var keyPair;

        if (version === network.bip32.private) {
          if (buffer.readUInt8(45) !== 0x00) throw new Error('Invalid private key');

          var d = BigInteger.fromBuffer(buffer.slice(46, 78));
          keyPair = new ECPair(d, null, { network: network });
        } else {
          var Q = ecurve.Point.decodeFrom(curve, buffer.slice(45, 78));

          curve.validate(Q);

          keyPair = new ECPair(null, Q, { network: network });
        }

        var hd = new HDNode(keyPair, chainCode);
        hd.depth = depth;
        hd.index = index;
        hd.parentFingerprint = parentFingerprint;

        return hd;
      };

      HDNode.prototype.getAddress = function () {
        return this.keyPair.getAddress();
      };

      HDNode.prototype.getIdentifier = function () {
        return bcrypto.hash160(this.keyPair.getPublicKeyBuffer());
      };

      HDNode.prototype.getFingerprint = function () {
        return this.getIdentifier().slice(0, 4);
      };

      HDNode.prototype.getNetwork = function () {
        return this.keyPair.getNetwork();
      };

      HDNode.prototype.getPublicKeyBuffer = function () {
        return this.keyPair.getPublicKeyBuffer();
      };

      HDNode.prototype.neutered = function () {
        var neuteredKeyPair = new ECPair(null, this.keyPair.Q, {
          network: this.keyPair.network
        });

        var neutered = new HDNode(neuteredKeyPair, this.chainCode);
        neutered.depth = this.depth;
        neutered.index = this.index;
        neutered.parentFingerprint = this.parentFingerprint;

        return neutered;
      };

      HDNode.prototype.sign = function (hash) {
        return this.keyPair.sign(hash);
      };

      HDNode.prototype.verify = function (hash, signature) {
        return this.keyPair.verify(hash, signature);
      };

      HDNode.prototype.toBase58 = function (__isPrivate) {
        if (__isPrivate !== undefined) throw new TypeError('Unsupported argument in 2.0.0');

        var network = this.keyPair.network;
        var version = !this.isNeutered() ? network.bip32.private : network.bip32.public;
        var buffer = Buffer.allocUnsafe(78);

        buffer.writeUInt32BE(version, 0);

        buffer.writeUInt8(this.depth, 4);

        buffer.writeUInt32BE(this.parentFingerprint, 5);

        buffer.writeUInt32BE(this.index, 9);

        this.chainCode.copy(buffer, 13);

        if (!this.isNeutered()) {
          buffer.writeUInt8(0, 45);
          this.keyPair.d.toBuffer(32).copy(buffer, 46);
        } else {
          this.keyPair.getPublicKeyBuffer().copy(buffer, 45);
        }

        return base58check.encode(buffer);
      };

      HDNode.prototype.derive = function (index) {
        typeforce(types.UInt32, index);

        var isHardened = index >= HDNode.HIGHEST_BIT;
        var data = Buffer.allocUnsafe(37);

        if (isHardened) {
          if (this.isNeutered()) throw new TypeError('Could not derive hardened child key');

          data[0] = 0x00;
          this.keyPair.d.toBuffer(32).copy(data, 1);
          data.writeUInt32BE(index, 33);
        } else {
          this.keyPair.getPublicKeyBuffer().copy(data, 0);
          data.writeUInt32BE(index, 33);
        }

        var I = createHmac('sha512', this.chainCode).update(data).digest();
        var IL = I.slice(0, 32);
        var IR = I.slice(32);

        var pIL = BigInteger.fromBuffer(IL);

        if (pIL.compareTo(curve.n) >= 0) {
          return this.derive(index + 1);
        }

        var derivedKeyPair;
        if (!this.isNeutered()) {
          var ki = pIL.add(this.keyPair.d).mod(curve.n);

          if (ki.signum() === 0) {
            return this.derive(index + 1);
          }

          derivedKeyPair = new ECPair(ki, null, {
            network: this.keyPair.network
          });
        } else {
          var Ki = curve.G.multiply(pIL).add(this.keyPair.Q);

          if (curve.isInfinity(Ki)) {
            return this.derive(index + 1);
          }

          derivedKeyPair = new ECPair(null, Ki, {
            network: this.keyPair.network
          });
        }

        var hd = new HDNode(derivedKeyPair, IR);
        hd.depth = this.depth + 1;
        hd.index = index;
        hd.parentFingerprint = this.getFingerprint().readUInt32BE(0);

        return hd;
      };

      HDNode.prototype.deriveHardened = function (index) {
        typeforce(types.UInt31, index);

        return this.derive(index + HDNode.HIGHEST_BIT);
      };

      HDNode.prototype.isNeutered = function () {
        return !this.keyPair.d;
      };

      HDNode.prototype.derivePath = function (path) {
        typeforce(types.BIP32Path, path);

        var splitPath = path.split('/');
        if (splitPath[0] === 'm') {
          if (this.parentFingerprint) {
            throw new Error('Not a master node');
          }

          splitPath = splitPath.slice(1);
        }

        return splitPath.reduce(function (prevHd, indexStr) {
          var index;
          if (indexStr.slice(-1) === "'") {
            index = parseInt(indexStr.slice(0, -1), 10);
            return prevHd.deriveHardened(index);
          } else {
            index = parseInt(indexStr, 10);
            return prevHd.derive(index);
          }
        }, this);
      };

      module.exports = HDNode;
    }, { "./crypto": 87, "./ecpair": 89, "./networks": 93, "./types": 120, "bigi": 79, "bs58check": 121, "create-hmac": 127, "ecurve": 131, "safe-buffer": 144, "typeforce": 155 }], 92: [function (require, module, exports) {
      module.exports = {
        Block: require('./block'),
        ECPair: require('./ecpair'),
        ECSignature: require('./ecsignature'),
        HDNode: require('./hdnode'),
        Transaction: require('./transaction'),
        TransactionBuilder: require('./transaction_builder'),

        address: require('./address'),
        bufferutils: require('./bufferutils'),
        crypto: require('./crypto'),
        networks: require('./networks'),
        opcodes: require('bitcoin-ops'),
        script: require('./script')
      };
    }, { "./address": 84, "./block": 85, "./bufferutils": 86, "./crypto": 87, "./ecpair": 89, "./ecsignature": 90, "./hdnode": 91, "./networks": 93, "./script": 94, "./transaction": 118, "./transaction_builder": 119, "bitcoin-ops": 82 }], 93: [function (require, module, exports) {

      module.exports = {
        bitcoin: {
          messagePrefix: '\x18Bitcoin Signed Message:\n',
          bech32: 'bc',
          bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
          },
          pubKeyHash: 0x00,
          scriptHash: 0x05,
          wif: 0x80
        },
        testnet: {
          messagePrefix: '\x18Bitcoin Signed Message:\n',
          bech32: 'tb',
          bip32: {
            public: 0x043587cf,
            private: 0x04358394
          },
          pubKeyHash: 0x6f,
          scriptHash: 0xc4,
          wif: 0xef
        },
        litecoin: {
          messagePrefix: '\x19Litecoin Signed Message:\n',
          bip32: {
            public: 0x019da462,
            private: 0x019d9cfe
          },
          pubKeyHash: 0x30,
          scriptHash: 0x32,
          wif: 0xb0
        }
      };
    }, {}], 94: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var bip66 = require('bip66');
      var pushdata = require('pushdata-bitcoin');
      var typeforce = require('typeforce');
      var types = require('./types');
      var scriptNumber = require('./script_number');

      var OPS = require('bitcoin-ops');
      var REVERSE_OPS = require('bitcoin-ops/map');
      var OP_INT_BASE = OPS.OP_RESERVED;

      function isOPInt(value) {
        return types.Number(value) && (value === OPS.OP_0 || value >= OPS.OP_1 && value <= OPS.OP_16 || value === OPS.OP_1NEGATE);
      }

      function isPushOnlyChunk(value) {
        return types.Buffer(value) || isOPInt(value);
      }

      function isPushOnly(value) {
        return types.Array(value) && value.every(isPushOnlyChunk);
      }

      function asMinimalOP(buffer) {
        if (buffer.length === 0) return OPS.OP_0;
        if (buffer.length !== 1) return;
        if (buffer[0] >= 1 && buffer[0] <= 16) return OP_INT_BASE + buffer[0];
        if (buffer[0] === 0x81) return OPS.OP_1NEGATE;
      }

      function compile(chunks) {
        if (Buffer.isBuffer(chunks)) return chunks;

        typeforce(types.Array, chunks);

        var bufferSize = chunks.reduce(function (accum, chunk) {
          if (Buffer.isBuffer(chunk)) {
            if (chunk.length === 1 && asMinimalOP(chunk) !== undefined) {
              return accum + 1;
            }

            return accum + pushdata.encodingLength(chunk.length) + chunk.length;
          }

          return accum + 1;
        }, 0.0);

        var buffer = Buffer.allocUnsafe(bufferSize);
        var offset = 0;

        chunks.forEach(function (chunk) {
          if (Buffer.isBuffer(chunk)) {
            var opcode = asMinimalOP(chunk);
            if (opcode !== undefined) {
              buffer.writeUInt8(opcode, offset);
              offset += 1;
              return;
            }

            offset += pushdata.encode(buffer, chunk.length, offset);
            chunk.copy(buffer, offset);
            offset += chunk.length;
          } else {
            buffer.writeUInt8(chunk, offset);
            offset += 1;
          }
        });

        if (offset !== buffer.length) throw new Error('Could not decode chunks');
        return buffer;
      }

      function decompile(buffer) {
        if (types.Array(buffer)) return buffer;

        typeforce(types.Buffer, buffer);

        var chunks = [];
        var i = 0;

        while (i < buffer.length) {
          var opcode = buffer[i];

          if (opcode > OPS.OP_0 && opcode <= OPS.OP_PUSHDATA4) {
            var d = pushdata.decode(buffer, i);

            if (d === null) return [];
            i += d.size;

            if (i + d.number > buffer.length) return [];

            var data = buffer.slice(i, i + d.number);
            i += d.number;

            var op = asMinimalOP(data);
            if (op !== undefined) {
              chunks.push(op);
            } else {
              chunks.push(data);
            }
          } else {
            chunks.push(opcode);

            i += 1;
          }
        }

        return chunks;
      }

      function toASM(chunks) {
        if (Buffer.isBuffer(chunks)) {
          chunks = decompile(chunks);
        }

        return chunks.map(function (chunk) {
          if (Buffer.isBuffer(chunk)) {
            var op = asMinimalOP(chunk);
            if (op === undefined) return chunk.toString('hex');
            chunk = op;
          }

          return REVERSE_OPS[chunk];
        }).join(' ');
      }

      function fromASM(asm) {
        typeforce(types.String, asm);

        return compile(asm.split(' ').map(function (chunkStr) {
          if (OPS[chunkStr] !== undefined) return OPS[chunkStr];
          typeforce(types.Hex, chunkStr);

          return Buffer.from(chunkStr, 'hex');
        }));
      }

      function toStack(chunks) {
        chunks = decompile(chunks);
        typeforce(isPushOnly, chunks);

        return chunks.map(function (op) {
          if (Buffer.isBuffer(op)) return op;
          if (op === OPS.OP_0) return Buffer.allocUnsafe(0);

          return scriptNumber.encode(op - OP_INT_BASE);
        });
      }

      function isCanonicalPubKey(buffer) {
        if (!Buffer.isBuffer(buffer)) return false;
        if (buffer.length < 33) return false;

        switch (buffer[0]) {
          case 0x02:
          case 0x03:
            return buffer.length === 33;
          case 0x04:
            return buffer.length === 65;
        }

        return false;
      }

      function isDefinedHashType(hashType) {
        var hashTypeMod = hashType & ~0x80;

        return hashTypeMod > 0x00 && hashTypeMod < 0x04;
      }

      function isCanonicalSignature(buffer) {
        if (!Buffer.isBuffer(buffer)) return false;
        if (!isDefinedHashType(buffer[buffer.length - 1])) return false;

        return bip66.check(buffer.slice(0, -1));
      }

      module.exports = {
        compile: compile,
        decompile: decompile,
        fromASM: fromASM,
        toASM: toASM,
        toStack: toStack,

        number: require('./script_number'),

        isCanonicalPubKey: isCanonicalPubKey,
        isCanonicalSignature: isCanonicalSignature,
        isPushOnly: isPushOnly,
        isDefinedHashType: isDefinedHashType
      };

      var templates = require('./templates');
      for (var key in templates) {
        module.exports[key] = templates[key];
      }
    }, { "./script_number": 95, "./templates": 96, "./types": 120, "bip66": 81, "bitcoin-ops": 82, "bitcoin-ops/map": 83, "pushdata-bitcoin": 141, "safe-buffer": 144, "typeforce": 155 }], 95: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;

      function decode(buffer, maxLength, minimal) {
        maxLength = maxLength || 4;
        minimal = minimal === undefined ? true : minimal;

        var length = buffer.length;
        if (length === 0) return 0;
        if (length > maxLength) throw new TypeError('Script number overflow');
        if (minimal) {
          if ((buffer[length - 1] & 0x7f) === 0) {
            if (length <= 1 || (buffer[length - 2] & 0x80) === 0) throw new Error('Non-minimally encoded script number');
          }
        }

        if (length === 5) {
          var a = buffer.readUInt32LE(0);
          var b = buffer.readUInt8(4);

          if (b & 0x80) return -((b & ~0x80) * 0x100000000 + a);
          return b * 0x100000000 + a;
        }

        var result = 0;

        for (var i = 0; i < length; ++i) {
          result |= buffer[i] << 8 * i;
        }

        if (buffer[length - 1] & 0x80) return -(result & ~(0x80 << 8 * (length - 1)));
        return result;
      }

      function scriptNumSize(i) {
        return i > 0x7fffffff ? 5 : i > 0x7fffff ? 4 : i > 0x7fff ? 3 : i > 0x7f ? 2 : i > 0x00 ? 1 : 0;
      }

      function encode(number) {
        var value = Math.abs(number);
        var size = scriptNumSize(value);
        var buffer = Buffer.allocUnsafe(size);
        var negative = number < 0;

        for (var i = 0; i < size; ++i) {
          buffer.writeUInt8(value & 0xff, i);
          value >>= 8;
        }

        if (buffer[size - 1] & 0x80) {
          buffer.writeUInt8(negative ? 0x80 : 0x00, size - 1);
        } else if (negative) {
          buffer[size - 1] |= 0x80;
        }

        return buffer;
      }

      module.exports = {
        decode: decode,
        encode: encode
      };
    }, { "safe-buffer": 144 }], 96: [function (require, module, exports) {
      var decompile = require('../script').decompile;
      var multisig = require('./multisig');
      var nullData = require('./nulldata');
      var pubKey = require('./pubkey');
      var pubKeyHash = require('./pubkeyhash');
      var scriptHash = require('./scripthash');
      var witnessPubKeyHash = require('./witnesspubkeyhash');
      var witnessScriptHash = require('./witnessscripthash');
      var witnessCommitment = require('./witnesscommitment');

      var types = {
        MULTISIG: 'multisig',
        NONSTANDARD: 'nonstandard',
        NULLDATA: 'nulldata',
        P2PK: 'pubkey',
        P2PKH: 'pubkeyhash',
        P2SH: 'scripthash',
        P2WPKH: 'witnesspubkeyhash',
        P2WSH: 'witnessscripthash',
        WITNESS_COMMITMENT: 'witnesscommitment'
      };

      function classifyOutput(script) {
        if (witnessPubKeyHash.output.check(script)) return types.P2WPKH;
        if (witnessScriptHash.output.check(script)) return types.P2WSH;
        if (pubKeyHash.output.check(script)) return types.P2PKH;
        if (scriptHash.output.check(script)) return types.P2SH;

        var chunks = decompile(script);
        if (multisig.output.check(chunks)) return types.MULTISIG;
        if (pubKey.output.check(chunks)) return types.P2PK;
        if (witnessCommitment.output.check(chunks)) return types.WITNESS_COMMITMENT;
        if (nullData.output.check(chunks)) return types.NULLDATA;

        return types.NONSTANDARD;
      }

      function classifyInput(script, allowIncomplete) {
        var chunks = decompile(script);

        if (pubKeyHash.input.check(chunks)) return types.P2PKH;
        if (scriptHash.input.check(chunks, allowIncomplete)) return types.P2SH;
        if (multisig.input.check(chunks, allowIncomplete)) return types.MULTISIG;
        if (pubKey.input.check(chunks)) return types.P2PK;

        return types.NONSTANDARD;
      }

      function classifyWitness(script, allowIncomplete) {
        var chunks = decompile(script);

        if (witnessPubKeyHash.input.check(chunks)) return types.P2WPKH;
        if (witnessScriptHash.input.check(chunks, allowIncomplete)) return types.P2WSH;

        return types.NONSTANDARD;
      }

      module.exports = {
        classifyInput: classifyInput,
        classifyOutput: classifyOutput,
        classifyWitness: classifyWitness,
        multisig: multisig,
        nullData: nullData,
        pubKey: pubKey,
        pubKeyHash: pubKeyHash,
        scriptHash: scriptHash,
        witnessPubKeyHash: witnessPubKeyHash,
        witnessScriptHash: witnessScriptHash,
        witnessCommitment: witnessCommitment,
        types: types
      };
    }, { "../script": 94, "./multisig": 97, "./nulldata": 100, "./pubkey": 101, "./pubkeyhash": 104, "./scripthash": 107, "./witnesscommitment": 110, "./witnesspubkeyhash": 112, "./witnessscripthash": 115 }], 97: [function (require, module, exports) {
      module.exports = {
        input: require('./input'),
        output: require('./output')
      };
    }, { "./input": 98, "./output": 99 }], 98: [function (require, module, exports) {

      var Buffer = require('safe-buffer').Buffer;
      var bscript = require('../../script');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');

      function partialSignature(value) {
        return value === OPS.OP_0 || bscript.isCanonicalSignature(value);
      }

      function check(script, allowIncomplete) {
        var chunks = bscript.decompile(script);
        if (chunks.length < 2) return false;
        if (chunks[0] !== OPS.OP_0) return false;

        if (allowIncomplete) {
          return chunks.slice(1).every(partialSignature);
        }

        return chunks.slice(1).every(bscript.isCanonicalSignature);
      }
      check.toJSON = function () {
        return 'multisig input';
      };

      var EMPTY_BUFFER = Buffer.allocUnsafe(0);

      function encodeStack(signatures, scriptPubKey) {
        typeforce([partialSignature], signatures);

        if (scriptPubKey) {
          var scriptData = bscript.multisig.output.decode(scriptPubKey);

          if (signatures.length < scriptData.m) {
            throw new TypeError('Not enough signatures provided');
          }

          if (signatures.length > scriptData.pubKeys.length) {
            throw new TypeError('Too many signatures provided');
          }
        }

        return [].concat(EMPTY_BUFFER, signatures.map(function (sig) {
          if (sig === OPS.OP_0) {
            return EMPTY_BUFFER;
          }
          return sig;
        }));
      }

      function encode(signatures, scriptPubKey) {
        return bscript.compile(encodeStack(signatures, scriptPubKey));
      }

      function decodeStack(stack, allowIncomplete) {
        typeforce(check, stack, allowIncomplete);
        return stack.slice(1);
      }

      function decode(buffer, allowIncomplete) {
        var stack = bscript.decompile(buffer);
        return decodeStack(stack, allowIncomplete);
      }

      module.exports = {
        check: check,
        decode: decode,
        decodeStack: decodeStack,
        encode: encode,
        encodeStack: encodeStack
      };
    }, { "../../script": 94, "bitcoin-ops": 82, "safe-buffer": 144, "typeforce": 155 }], 99: [function (require, module, exports) {

      var bscript = require('../../script');
      var types = require('../../types');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');
      var OP_INT_BASE = OPS.OP_RESERVED;

      function check(script, allowIncomplete) {
        var chunks = bscript.decompile(script);

        if (chunks.length < 4) return false;
        if (chunks[chunks.length - 1] !== OPS.OP_CHECKMULTISIG) return false;
        if (!types.Number(chunks[0])) return false;
        if (!types.Number(chunks[chunks.length - 2])) return false;
        var m = chunks[0] - OP_INT_BASE;
        var n = chunks[chunks.length - 2] - OP_INT_BASE;

        if (m <= 0) return false;
        if (n > 16) return false;
        if (m > n) return false;
        if (n !== chunks.length - 3) return false;
        if (allowIncomplete) return true;

        var keys = chunks.slice(1, -2);
        return keys.every(bscript.isCanonicalPubKey);
      }
      check.toJSON = function () {
        return 'multi-sig output';
      };

      function encode(m, pubKeys) {
        typeforce({
          m: types.Number,
          pubKeys: [bscript.isCanonicalPubKey]
        }, {
          m: m,
          pubKeys: pubKeys
        });

        var n = pubKeys.length;
        if (n < m) throw new TypeError('Not enough pubKeys provided');

        return bscript.compile([].concat(OP_INT_BASE + m, pubKeys, OP_INT_BASE + n, OPS.OP_CHECKMULTISIG));
      }

      function decode(buffer, allowIncomplete) {
        var chunks = bscript.decompile(buffer);
        typeforce(check, chunks, allowIncomplete);

        return {
          m: chunks[0] - OP_INT_BASE,
          pubKeys: chunks.slice(1, -2)
        };
      }

      module.exports = {
        check: check,
        decode: decode,
        encode: encode
      };
    }, { "../../script": 94, "../../types": 120, "bitcoin-ops": 82, "typeforce": 155 }], 100: [function (require, module, exports) {

      var bscript = require('../script');
      var types = require('../types');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');

      function check(script) {
        var buffer = bscript.compile(script);

        return buffer.length > 1 && buffer[0] === OPS.OP_RETURN;
      }
      check.toJSON = function () {
        return 'null data output';
      };

      function encode(data) {
        typeforce(types.Buffer, data);

        return bscript.compile([OPS.OP_RETURN, data]);
      }

      function decode(buffer) {
        typeforce(check, buffer);

        return buffer.slice(2);
      }

      module.exports = {
        output: {
          check: check,
          decode: decode,
          encode: encode
        }
      };
    }, { "../script": 94, "../types": 120, "bitcoin-ops": 82, "typeforce": 155 }], 101: [function (require, module, exports) {
      arguments[4][97][0].apply(exports, arguments);
    }, { "./input": 102, "./output": 103, "dup": 97 }], 102: [function (require, module, exports) {

      var bscript = require('../../script');
      var typeforce = require('typeforce');

      function check(script) {
        var chunks = bscript.decompile(script);

        return chunks.length === 1 && bscript.isCanonicalSignature(chunks[0]);
      }
      check.toJSON = function () {
        return 'pubKey input';
      };

      function encodeStack(signature) {
        typeforce(bscript.isCanonicalSignature, signature);
        return [signature];
      }

      function encode(signature) {
        return bscript.compile(encodeStack(signature));
      }

      function decodeStack(stack) {
        typeforce(check, stack);
        return stack[0];
      }

      function decode(buffer) {
        var stack = bscript.decompile(buffer);
        return decodeStack(stack);
      }

      module.exports = {
        check: check,
        decode: decode,
        decodeStack: decodeStack,
        encode: encode,
        encodeStack: encodeStack
      };
    }, { "../../script": 94, "typeforce": 155 }], 103: [function (require, module, exports) {

      var bscript = require('../../script');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');

      function check(script) {
        var chunks = bscript.decompile(script);

        return chunks.length === 2 && bscript.isCanonicalPubKey(chunks[0]) && chunks[1] === OPS.OP_CHECKSIG;
      }
      check.toJSON = function () {
        return 'pubKey output';
      };

      function encode(pubKey) {
        typeforce(bscript.isCanonicalPubKey, pubKey);

        return bscript.compile([pubKey, OPS.OP_CHECKSIG]);
      }

      function decode(buffer) {
        var chunks = bscript.decompile(buffer);
        typeforce(check, chunks);

        return chunks[0];
      }

      module.exports = {
        check: check,
        decode: decode,
        encode: encode
      };
    }, { "../../script": 94, "bitcoin-ops": 82, "typeforce": 155 }], 104: [function (require, module, exports) {
      arguments[4][97][0].apply(exports, arguments);
    }, { "./input": 105, "./output": 106, "dup": 97 }], 105: [function (require, module, exports) {

      var bscript = require('../../script');
      var typeforce = require('typeforce');

      function check(script) {
        var chunks = bscript.decompile(script);

        return chunks.length === 2 && bscript.isCanonicalSignature(chunks[0]) && bscript.isCanonicalPubKey(chunks[1]);
      }
      check.toJSON = function () {
        return 'pubKeyHash input';
      };

      function encodeStack(signature, pubKey) {
        typeforce({
          signature: bscript.isCanonicalSignature,
          pubKey: bscript.isCanonicalPubKey
        }, {
          signature: signature,
          pubKey: pubKey
        });

        return [signature, pubKey];
      }

      function encode(signature, pubKey) {
        return bscript.compile(encodeStack(signature, pubKey));
      }

      function decodeStack(stack) {
        typeforce(check, stack);

        return {
          signature: stack[0],
          pubKey: stack[1]
        };
      }

      function decode(buffer) {
        var stack = bscript.decompile(buffer);
        return decodeStack(stack);
      }

      module.exports = {
        check: check,
        decode: decode,
        decodeStack: decodeStack,
        encode: encode,
        encodeStack: encodeStack
      };
    }, { "../../script": 94, "typeforce": 155 }], 106: [function (require, module, exports) {

      var bscript = require('../../script');
      var types = require('../../types');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');

      function check(script) {
        var buffer = bscript.compile(script);

        return buffer.length === 25 && buffer[0] === OPS.OP_DUP && buffer[1] === OPS.OP_HASH160 && buffer[2] === 0x14 && buffer[23] === OPS.OP_EQUALVERIFY && buffer[24] === OPS.OP_CHECKSIG;
      }
      check.toJSON = function () {
        return 'pubKeyHash output';
      };

      function encode(pubKeyHash) {
        typeforce(types.Hash160bit, pubKeyHash);

        return bscript.compile([OPS.OP_DUP, OPS.OP_HASH160, pubKeyHash, OPS.OP_EQUALVERIFY, OPS.OP_CHECKSIG]);
      }

      function decode(buffer) {
        typeforce(check, buffer);

        return buffer.slice(3, 23);
      }

      module.exports = {
        check: check,
        decode: decode,
        encode: encode
      };
    }, { "../../script": 94, "../../types": 120, "bitcoin-ops": 82, "typeforce": 155 }], 107: [function (require, module, exports) {
      arguments[4][97][0].apply(exports, arguments);
    }, { "./input": 108, "./output": 109, "dup": 97 }], 108: [function (require, module, exports) {

      var Buffer = require('safe-buffer').Buffer;
      var bscript = require('../../script');
      var typeforce = require('typeforce');

      function check(script, allowIncomplete) {
        var chunks = bscript.decompile(script);
        if (chunks.length < 1) return false;

        var lastChunk = chunks[chunks.length - 1];
        if (!Buffer.isBuffer(lastChunk)) return false;

        var scriptSigChunks = bscript.decompile(bscript.compile(chunks.slice(0, -1)));
        var redeemScriptChunks = bscript.decompile(lastChunk);

        if (redeemScriptChunks.length === 0) return false;

        if (!bscript.isPushOnly(scriptSigChunks)) return false;

        var inputType = bscript.classifyInput(scriptSigChunks, allowIncomplete);
        var outputType = bscript.classifyOutput(redeemScriptChunks);
        if (chunks.length === 1) {
          return outputType === bscript.types.P2WSH || outputType === bscript.types.P2WPKH;
        }
        return inputType === outputType;
      }
      check.toJSON = function () {
        return 'scriptHash input';
      };

      function encodeStack(redeemScriptStack, redeemScript) {
        var serializedScriptPubKey = bscript.compile(redeemScript);

        return [].concat(redeemScriptStack, serializedScriptPubKey);
      }

      function encode(redeemScriptSig, redeemScript) {
        var redeemScriptStack = bscript.decompile(redeemScriptSig);

        return bscript.compile(encodeStack(redeemScriptStack, redeemScript));
      }

      function decodeStack(stack) {
        typeforce(check, stack);

        return {
          redeemScriptStack: stack.slice(0, -1),
          redeemScript: stack[stack.length - 1]
        };
      }

      function decode(buffer) {
        var stack = bscript.decompile(buffer);
        var result = decodeStack(stack);
        result.redeemScriptSig = bscript.compile(result.redeemScriptStack);
        delete result.redeemScriptStack;
        return result;
      }

      module.exports = {
        check: check,
        decode: decode,
        decodeStack: decodeStack,
        encode: encode,
        encodeStack: encodeStack
      };
    }, { "../../script": 94, "safe-buffer": 144, "typeforce": 155 }], 109: [function (require, module, exports) {

      var bscript = require('../../script');
      var types = require('../../types');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');

      function check(script) {
        var buffer = bscript.compile(script);

        return buffer.length === 23 && buffer[0] === OPS.OP_HASH160 && buffer[1] === 0x14 && buffer[22] === OPS.OP_EQUAL;
      }
      check.toJSON = function () {
        return 'scriptHash output';
      };

      function encode(scriptHash) {
        typeforce(types.Hash160bit, scriptHash);

        return bscript.compile([OPS.OP_HASH160, scriptHash, OPS.OP_EQUAL]);
      }

      function decode(buffer) {
        typeforce(check, buffer);

        return buffer.slice(2, 22);
      }

      module.exports = {
        check: check,
        decode: decode,
        encode: encode
      };
    }, { "../../script": 94, "../../types": 120, "bitcoin-ops": 82, "typeforce": 155 }], 110: [function (require, module, exports) {
      module.exports = {
        output: require('./output')
      };
    }, { "./output": 111 }], 111: [function (require, module, exports) {

      var Buffer = require('safe-buffer').Buffer;
      var bscript = require('../../script');
      var types = require('../../types');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');

      var HEADER = Buffer.from('aa21a9ed', 'hex');

      function check(script) {
        var buffer = bscript.compile(script);

        return buffer.length > 37 && buffer[0] === OPS.OP_RETURN && buffer[1] === 0x24 && buffer.slice(2, 6).equals(HEADER);
      }

      check.toJSON = function () {
        return 'Witness commitment output';
      };

      function encode(commitment) {
        typeforce(types.Hash256bit, commitment);

        var buffer = Buffer.allocUnsafe(36);
        HEADER.copy(buffer, 0);
        commitment.copy(buffer, 4);

        return bscript.compile([OPS.OP_RETURN, buffer]);
      }

      function decode(buffer) {
        typeforce(check, buffer);

        return bscript.decompile(buffer)[1].slice(4, 36);
      }

      module.exports = {
        check: check,
        decode: decode,
        encode: encode
      };
    }, { "../../script": 94, "../../types": 120, "bitcoin-ops": 82, "safe-buffer": 144, "typeforce": 155 }], 112: [function (require, module, exports) {
      arguments[4][97][0].apply(exports, arguments);
    }, { "./input": 113, "./output": 114, "dup": 97 }], 113: [function (require, module, exports) {

      var bscript = require('../../script');
      var typeforce = require('typeforce');

      function isCompressedCanonicalPubKey(pubKey) {
        return bscript.isCanonicalPubKey(pubKey) && pubKey.length === 33;
      }

      function check(script) {
        var chunks = bscript.decompile(script);

        return chunks.length === 2 && bscript.isCanonicalSignature(chunks[0]) && isCompressedCanonicalPubKey(chunks[1]);
      }
      check.toJSON = function () {
        return 'witnessPubKeyHash input';
      };

      function encodeStack(signature, pubKey) {
        typeforce({
          signature: bscript.isCanonicalSignature,
          pubKey: isCompressedCanonicalPubKey
        }, {
          signature: signature,
          pubKey: pubKey
        });

        return [signature, pubKey];
      }

      function decodeStack(stack) {
        typeforce(check, stack);

        return {
          signature: stack[0],
          pubKey: stack[1]
        };
      }

      module.exports = {
        check: check,
        decodeStack: decodeStack,
        encodeStack: encodeStack
      };
    }, { "../../script": 94, "typeforce": 155 }], 114: [function (require, module, exports) {

      var bscript = require('../../script');
      var types = require('../../types');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');

      function check(script) {
        var buffer = bscript.compile(script);

        return buffer.length === 22 && buffer[0] === OPS.OP_0 && buffer[1] === 0x14;
      }
      check.toJSON = function () {
        return 'Witness pubKeyHash output';
      };

      function encode(pubKeyHash) {
        typeforce(types.Hash160bit, pubKeyHash);

        return bscript.compile([OPS.OP_0, pubKeyHash]);
      }

      function decode(buffer) {
        typeforce(check, buffer);

        return buffer.slice(2);
      }

      module.exports = {
        check: check,
        decode: decode,
        encode: encode
      };
    }, { "../../script": 94, "../../types": 120, "bitcoin-ops": 82, "typeforce": 155 }], 115: [function (require, module, exports) {
      arguments[4][97][0].apply(exports, arguments);
    }, { "./input": 116, "./output": 117, "dup": 97 }], 116: [function (require, module, exports) {

      var p2sh = require('../scripthash/input');

      module.exports = {
        check: p2sh.check,
        decodeStack: p2sh.decodeStack,
        encodeStack: p2sh.encodeStack
      };
    }, { "../scripthash/input": 108 }], 117: [function (require, module, exports) {

      var bscript = require('../../script');
      var types = require('../../types');
      var typeforce = require('typeforce');
      var OPS = require('bitcoin-ops');

      function check(script) {
        var buffer = bscript.compile(script);

        return buffer.length === 34 && buffer[0] === OPS.OP_0 && buffer[1] === 0x20;
      }
      check.toJSON = function () {
        return 'Witness scriptHash output';
      };

      function encode(scriptHash) {
        typeforce(types.Hash256bit, scriptHash);

        return bscript.compile([OPS.OP_0, scriptHash]);
      }

      function decode(buffer) {
        typeforce(check, buffer);

        return buffer.slice(2);
      }

      module.exports = {
        check: check,
        decode: decode,
        encode: encode
      };
    }, { "../../script": 94, "../../types": 120, "bitcoin-ops": 82, "typeforce": 155 }], 118: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var bcrypto = require('./crypto');
      var bscript = require('./script');
      var bufferutils = require('./bufferutils');
      var opcodes = require('bitcoin-ops');
      var typeforce = require('typeforce');
      var types = require('./types');
      var varuint = require('varuint-bitcoin');

      function varSliceSize(someScript) {
        var length = someScript.length;

        return varuint.encodingLength(length) + length;
      }

      function vectorSize(someVector) {
        var length = someVector.length;

        return varuint.encodingLength(length) + someVector.reduce(function (sum, witness) {
          return sum + varSliceSize(witness);
        }, 0);
      }

      function Transaction() {
        this.version = 1;
        this.locktime = 0;
        this.ins = [];
        this.outs = [];
      }

      Transaction.DEFAULT_SEQUENCE = 0xffffffff;
      Transaction.SIGHASH_ALL = 0x01;
      Transaction.SIGHASH_NONE = 0x02;
      Transaction.SIGHASH_SINGLE = 0x03;
      Transaction.SIGHASH_ANYONECANPAY = 0x80;
      Transaction.ADVANCED_TRANSACTION_MARKER = 0x00;
      Transaction.ADVANCED_TRANSACTION_FLAG = 0x01;

      var EMPTY_SCRIPT = Buffer.allocUnsafe(0);
      var EMPTY_WITNESS = [];
      var ZERO = Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex');
      var ONE = Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex');
      var VALUE_UINT64_MAX = Buffer.from('ffffffffffffffff', 'hex');
      var BLANK_OUTPUT = {
        script: EMPTY_SCRIPT,
        valueBuffer: VALUE_UINT64_MAX
      };

      Transaction.fromBuffer = function (buffer, __noStrict) {
        var offset = 0;
        function readSlice(n) {
          offset += n;
          return buffer.slice(offset - n, offset);
        }

        function readUInt32() {
          var i = buffer.readUInt32LE(offset);
          offset += 4;
          return i;
        }

        function readInt32() {
          var i = buffer.readInt32LE(offset);
          offset += 4;
          return i;
        }

        function readUInt64() {
          var i = bufferutils.readUInt64LE(buffer, offset);
          offset += 8;
          return i;
        }

        function readVarInt() {
          var vi = varuint.decode(buffer, offset);
          offset += varuint.decode.bytes;
          return vi;
        }

        function readVarSlice() {
          return readSlice(readVarInt());
        }

        function readVector() {
          var count = readVarInt();
          var vector = [];
          for (var i = 0; i < count; i++) vector.push(readVarSlice());
          return vector;
        }

        var tx = new Transaction();
        tx.version = readInt32();

        var marker = buffer.readUInt8(offset);
        var flag = buffer.readUInt8(offset + 1);

        var hasWitnesses = false;
        if (marker === Transaction.ADVANCED_TRANSACTION_MARKER && flag === Transaction.ADVANCED_TRANSACTION_FLAG) {
          offset += 2;
          hasWitnesses = true;
        }

        var vinLen = readVarInt();
        for (var i = 0; i < vinLen; ++i) {
          tx.ins.push({
            hash: readSlice(32),
            index: readUInt32(),
            script: readVarSlice(),
            sequence: readUInt32(),
            witness: EMPTY_WITNESS
          });
        }

        var voutLen = readVarInt();
        for (i = 0; i < voutLen; ++i) {
          tx.outs.push({
            value: readUInt64(),
            script: readVarSlice()
          });
        }

        if (hasWitnesses) {
          for (i = 0; i < vinLen; ++i) {
            tx.ins[i].witness = readVector();
          }

          if (!tx.hasWitnesses()) throw new Error('Transaction has superfluous witness data');
        }

        tx.locktime = readUInt32();

        if (__noStrict) return tx;
        if (offset !== buffer.length) throw new Error('Transaction has unexpected data');

        return tx;
      };

      Transaction.fromHex = function (hex) {
        return Transaction.fromBuffer(Buffer.from(hex, 'hex'));
      };

      Transaction.isCoinbaseHash = function (buffer) {
        typeforce(types.Hash256bit, buffer);
        for (var i = 0; i < 32; ++i) {
          if (buffer[i] !== 0) return false;
        }
        return true;
      };

      Transaction.prototype.isCoinbase = function () {
        return this.ins.length === 1 && Transaction.isCoinbaseHash(this.ins[0].hash);
      };

      Transaction.prototype.addInput = function (hash, index, sequence, scriptSig) {
        typeforce(types.tuple(types.Hash256bit, types.UInt32, types.maybe(types.UInt32), types.maybe(types.Buffer)), arguments);

        if (types.Null(sequence)) {
          sequence = Transaction.DEFAULT_SEQUENCE;
        }

        return this.ins.push({
          hash: hash,
          index: index,
          script: scriptSig || EMPTY_SCRIPT,
          sequence: sequence,
          witness: EMPTY_WITNESS
        }) - 1;
      };

      Transaction.prototype.addOutput = function (scriptPubKey, value) {
        typeforce(types.tuple(types.Buffer, types.Satoshi), arguments);

        return this.outs.push({
          script: scriptPubKey,
          value: value
        }) - 1;
      };

      Transaction.prototype.hasWitnesses = function () {
        return this.ins.some(function (x) {
          return x.witness.length !== 0;
        });
      };

      Transaction.prototype.weight = function () {
        var base = this.__byteLength(false);
        var total = this.__byteLength(true);
        return base * 3 + total;
      };

      Transaction.prototype.virtualSize = function () {
        return Math.ceil(this.weight() / 4);
      };

      Transaction.prototype.byteLength = function () {
        return this.__byteLength(true);
      };

      Transaction.prototype.__byteLength = function (__allowWitness) {
        var hasWitnesses = __allowWitness && this.hasWitnesses();

        return (hasWitnesses ? 10 : 8) + varuint.encodingLength(this.ins.length) + varuint.encodingLength(this.outs.length) + this.ins.reduce(function (sum, input) {
          return sum + 40 + varSliceSize(input.script);
        }, 0) + this.outs.reduce(function (sum, output) {
          return sum + 8 + varSliceSize(output.script);
        }, 0) + (hasWitnesses ? this.ins.reduce(function (sum, input) {
          return sum + vectorSize(input.witness);
        }, 0) : 0);
      };

      Transaction.prototype.clone = function () {
        var newTx = new Transaction();
        newTx.version = this.version;
        newTx.locktime = this.locktime;

        newTx.ins = this.ins.map(function (txIn) {
          return {
            hash: txIn.hash,
            index: txIn.index,
            script: txIn.script,
            sequence: txIn.sequence,
            witness: txIn.witness
          };
        });

        newTx.outs = this.outs.map(function (txOut) {
          return {
            script: txOut.script,
            value: txOut.value
          };
        });

        return newTx;
      };

      Transaction.prototype.hashForSignature = function (inIndex, prevOutScript, hashType) {
        typeforce(types.tuple(types.UInt32, types.Buffer, types.Number), arguments);

        if (inIndex >= this.ins.length) return ONE;

        var ourScript = bscript.compile(bscript.decompile(prevOutScript).filter(function (x) {
          return x !== opcodes.OP_CODESEPARATOR;
        }));

        var txTmp = this.clone();

        if ((hashType & 0x1f) === Transaction.SIGHASH_NONE) {
          txTmp.outs = [];

          txTmp.ins.forEach(function (input, i) {
            if (i === inIndex) return;

            input.sequence = 0;
          });
        } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE) {
          if (inIndex >= this.outs.length) return ONE;

          txTmp.outs.length = inIndex + 1;

          for (var i = 0; i < inIndex; i++) {
            txTmp.outs[i] = BLANK_OUTPUT;
          }

          txTmp.ins.forEach(function (input, y) {
            if (y === inIndex) return;

            input.sequence = 0;
          });
        }

        if (hashType & Transaction.SIGHASH_ANYONECANPAY) {
          txTmp.ins = [txTmp.ins[inIndex]];
          txTmp.ins[0].script = ourScript;
        } else {
          txTmp.ins.forEach(function (input) {
            input.script = EMPTY_SCRIPT;
          });
          txTmp.ins[inIndex].script = ourScript;
        }

        var buffer = Buffer.allocUnsafe(txTmp.__byteLength(false) + 4);
        buffer.writeInt32LE(hashType, buffer.length - 4);
        txTmp.__toBuffer(buffer, 0, false);

        return bcrypto.hash256(buffer);
      };

      Transaction.prototype.hashForWitnessV0 = function (inIndex, prevOutScript, value, hashType) {
        typeforce(types.tuple(types.UInt32, types.Buffer, types.Satoshi, types.UInt32), arguments);

        var tbuffer, toffset;
        function writeSlice(slice) {
          toffset += slice.copy(tbuffer, toffset);
        }
        function writeUInt32(i) {
          toffset = tbuffer.writeUInt32LE(i, toffset);
        }
        function writeUInt64(i) {
          toffset = bufferutils.writeUInt64LE(tbuffer, i, toffset);
        }
        function writeVarInt(i) {
          varuint.encode(i, tbuffer, toffset);
          toffset += varuint.encode.bytes;
        }
        function writeVarSlice(slice) {
          writeVarInt(slice.length);writeSlice(slice);
        }

        var hashOutputs = ZERO;
        var hashPrevouts = ZERO;
        var hashSequence = ZERO;

        if (!(hashType & Transaction.SIGHASH_ANYONECANPAY)) {
          tbuffer = Buffer.allocUnsafe(36 * this.ins.length);
          toffset = 0;

          this.ins.forEach(function (txIn) {
            writeSlice(txIn.hash);
            writeUInt32(txIn.index);
          });

          hashPrevouts = bcrypto.hash256(tbuffer);
        }

        if (!(hashType & Transaction.SIGHASH_ANYONECANPAY) && (hashType & 0x1f) !== Transaction.SIGHASH_SINGLE && (hashType & 0x1f) !== Transaction.SIGHASH_NONE) {
          tbuffer = Buffer.allocUnsafe(4 * this.ins.length);
          toffset = 0;

          this.ins.forEach(function (txIn) {
            writeUInt32(txIn.sequence);
          });

          hashSequence = bcrypto.hash256(tbuffer);
        }

        if ((hashType & 0x1f) !== Transaction.SIGHASH_SINGLE && (hashType & 0x1f) !== Transaction.SIGHASH_NONE) {
          var txOutsSize = this.outs.reduce(function (sum, output) {
            return sum + 8 + varSliceSize(output.script);
          }, 0);

          tbuffer = Buffer.allocUnsafe(txOutsSize);
          toffset = 0;

          this.outs.forEach(function (out) {
            writeUInt64(out.value);
            writeVarSlice(out.script);
          });

          hashOutputs = bcrypto.hash256(tbuffer);
        } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE && inIndex < this.outs.length) {
          var output = this.outs[inIndex];

          tbuffer = Buffer.allocUnsafe(8 + varSliceSize(output.script));
          toffset = 0;
          writeUInt64(output.value);
          writeVarSlice(output.script);

          hashOutputs = bcrypto.hash256(tbuffer);
        }

        tbuffer = Buffer.allocUnsafe(156 + varSliceSize(prevOutScript));
        toffset = 0;

        var input = this.ins[inIndex];
        writeUInt32(this.version);
        writeSlice(hashPrevouts);
        writeSlice(hashSequence);
        writeSlice(input.hash);
        writeUInt32(input.index);
        writeVarSlice(prevOutScript);
        writeUInt64(value);
        writeUInt32(input.sequence);
        writeSlice(hashOutputs);
        writeUInt32(this.locktime);
        writeUInt32(hashType);
        return bcrypto.hash256(tbuffer);
      };

      Transaction.prototype.getHash = function () {
        return bcrypto.hash256(this.__toBuffer(undefined, undefined, false));
      };

      Transaction.prototype.getId = function () {
        return this.getHash().reverse().toString('hex');
      };

      Transaction.prototype.toBuffer = function (buffer, initialOffset) {
        return this.__toBuffer(buffer, initialOffset, true);
      };

      Transaction.prototype.__toBuffer = function (buffer, initialOffset, __allowWitness) {
        if (!buffer) buffer = Buffer.allocUnsafe(this.__byteLength(__allowWitness));

        var offset = initialOffset || 0;
        function writeSlice(slice) {
          offset += slice.copy(buffer, offset);
        }
        function writeUInt8(i) {
          offset = buffer.writeUInt8(i, offset);
        }
        function writeUInt32(i) {
          offset = buffer.writeUInt32LE(i, offset);
        }
        function writeInt32(i) {
          offset = buffer.writeInt32LE(i, offset);
        }
        function writeUInt64(i) {
          offset = bufferutils.writeUInt64LE(buffer, i, offset);
        }
        function writeVarInt(i) {
          varuint.encode(i, buffer, offset);
          offset += varuint.encode.bytes;
        }
        function writeVarSlice(slice) {
          writeVarInt(slice.length);writeSlice(slice);
        }
        function writeVector(vector) {
          writeVarInt(vector.length);vector.forEach(writeVarSlice);
        }

        writeInt32(this.version);

        var hasWitnesses = __allowWitness && this.hasWitnesses();

        if (hasWitnesses) {
          writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER);
          writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG);
        }

        writeVarInt(this.ins.length);

        this.ins.forEach(function (txIn) {
          writeSlice(txIn.hash);
          writeUInt32(txIn.index);
          writeVarSlice(txIn.script);
          writeUInt32(txIn.sequence);
        });

        writeVarInt(this.outs.length);
        this.outs.forEach(function (txOut) {
          if (!txOut.valueBuffer) {
            writeUInt64(txOut.value);
          } else {
            writeSlice(txOut.valueBuffer);
          }

          writeVarSlice(txOut.script);
        });

        if (hasWitnesses) {
          this.ins.forEach(function (input) {
            writeVector(input.witness);
          });
        }

        writeUInt32(this.locktime);

        if (initialOffset !== undefined) return buffer.slice(initialOffset, offset);
        return buffer;
      };

      Transaction.prototype.toHex = function () {
        return this.toBuffer().toString('hex');
      };

      Transaction.prototype.setInputScript = function (index, scriptSig) {
        typeforce(types.tuple(types.Number, types.Buffer), arguments);

        this.ins[index].script = scriptSig;
      };

      Transaction.prototype.setWitness = function (index, witness) {
        typeforce(types.tuple(types.Number, [types.Buffer]), arguments);

        this.ins[index].witness = witness;
      };

      module.exports = Transaction;
    }, { "./bufferutils": 86, "./crypto": 87, "./script": 94, "./types": 120, "bitcoin-ops": 82, "safe-buffer": 144, "typeforce": 155, "varuint-bitcoin": 157 }], 119: [function (require, module, exports) {
      var Buffer = require('safe-buffer').Buffer;
      var baddress = require('./address');
      var bcrypto = require('./crypto');
      var bscript = require('./script');
      var networks = require('./networks');
      var ops = require('bitcoin-ops');
      var typeforce = require('typeforce');
      var types = require('./types');
      var scriptTypes = bscript.types;
      var SIGNABLE = [bscript.types.P2PKH, bscript.types.P2PK, bscript.types.MULTISIG];
      var P2SH = SIGNABLE.concat([bscript.types.P2WPKH, bscript.types.P2WSH]);

      var ECPair = require('./ecpair');
      var ECSignature = require('./ecsignature');
      var Transaction = require('./transaction');

      function supportedType(type) {
        return SIGNABLE.indexOf(type) !== -1;
      }

      function supportedP2SHType(type) {
        return P2SH.indexOf(type) !== -1;
      }

      function extractChunks(type, chunks, script) {
        var pubKeys = [];
        var signatures = [];
        switch (type) {
          case scriptTypes.P2PKH:
            pubKeys = chunks.slice(1);
            signatures = chunks.slice(0, 1);
            break;

          case scriptTypes.P2PK:
            pubKeys[0] = script ? bscript.pubKey.output.decode(script) : undefined;
            signatures = chunks.slice(0, 1);
            break;

          case scriptTypes.MULTISIG:
            if (script) {
              var multisig = bscript.multisig.output.decode(script);
              pubKeys = multisig.pubKeys;
            }

            signatures = chunks.slice(1).map(function (chunk) {
              return chunk.length === 0 ? undefined : chunk;
            });
            break;
        }

        return {
          pubKeys: pubKeys,
          signatures: signatures
        };
      }
      function expandInput(scriptSig, witnessStack) {
        if (scriptSig.length === 0 && witnessStack.length === 0) return {};

        var prevOutScript;
        var prevOutType;
        var scriptType;
        var script;
        var redeemScript;
        var witnessScript;
        var witnessScriptType;
        var redeemScriptType;
        var witness = false;
        var p2wsh = false;
        var p2sh = false;
        var witnessProgram;
        var chunks;

        var scriptSigChunks = bscript.decompile(scriptSig);
        var sigType = bscript.classifyInput(scriptSigChunks, true);
        if (sigType === scriptTypes.P2SH) {
          p2sh = true;
          redeemScript = scriptSigChunks[scriptSigChunks.length - 1];
          redeemScriptType = bscript.classifyOutput(redeemScript);
          prevOutScript = bscript.scriptHash.output.encode(bcrypto.hash160(redeemScript));
          prevOutType = scriptTypes.P2SH;
          script = redeemScript;
        }

        var classifyWitness = bscript.classifyWitness(witnessStack, true);
        if (classifyWitness === scriptTypes.P2WSH) {
          witnessScript = witnessStack[witnessStack.length - 1];
          witnessScriptType = bscript.classifyOutput(witnessScript);
          p2wsh = true;
          witness = true;
          if (scriptSig.length === 0) {
            prevOutScript = bscript.witnessScriptHash.output.encode(bcrypto.sha256(witnessScript));
            prevOutType = scriptTypes.P2WSH;
            if (redeemScript !== undefined) {
              throw new Error('Redeem script given when unnecessary');
            }
          } else {
            if (!redeemScript) {
              throw new Error('No redeemScript provided for P2WSH, but scriptSig non-empty');
            }
            witnessProgram = bscript.witnessScriptHash.output.encode(bcrypto.sha256(witnessScript));
            if (!redeemScript.equals(witnessProgram)) {
              throw new Error('Redeem script didn\'t match witnessScript');
            }
          }

          if (!supportedType(bscript.classifyOutput(witnessScript))) {
            throw new Error('unsupported witness script');
          }

          script = witnessScript;
          scriptType = witnessScriptType;
          chunks = witnessStack.slice(0, -1);
        } else if (classifyWitness === scriptTypes.P2WPKH) {
          witness = true;
          var key = witnessStack[witnessStack.length - 1];
          var keyHash = bcrypto.hash160(key);
          if (scriptSig.length === 0) {
            prevOutScript = bscript.witnessPubKeyHash.output.encode(keyHash);
            prevOutType = scriptTypes.P2WPKH;
            if (typeof redeemScript !== 'undefined') {
              throw new Error('Redeem script given when unnecessary');
            }
          } else {
            if (!redeemScript) {
              throw new Error('No redeemScript provided for P2WPKH, but scriptSig wasn\'t empty');
            }
            witnessProgram = bscript.witnessPubKeyHash.output.encode(keyHash);
            if (!redeemScript.equals(witnessProgram)) {
              throw new Error('Redeem script did not have the right witness program');
            }
          }

          scriptType = scriptTypes.P2PKH;
          chunks = witnessStack;
        } else if (redeemScript) {
          if (!supportedP2SHType(redeemScriptType)) {
            throw new Error('Bad redeemscript!');
          }

          script = redeemScript;
          scriptType = redeemScriptType;
          chunks = scriptSigChunks.slice(0, -1);
        } else {
          prevOutType = scriptType = bscript.classifyInput(scriptSig);
          chunks = scriptSigChunks;
        }

        var expanded = extractChunks(scriptType, chunks, script);

        var result = {
          pubKeys: expanded.pubKeys,
          signatures: expanded.signatures,
          prevOutScript: prevOutScript,
          prevOutType: prevOutType,
          signType: scriptType,
          signScript: script,
          witness: Boolean(witness)
        };

        if (p2sh) {
          result.redeemScript = redeemScript;
          result.redeemScriptType = redeemScriptType;
        }

        if (p2wsh) {
          result.witnessScript = witnessScript;
          result.witnessScriptType = witnessScriptType;
        }

        return result;
      }

      function fixMultisigOrder(input, transaction, vin) {
        if (input.redeemScriptType !== scriptTypes.MULTISIG || !input.redeemScript) return;
        if (input.pubKeys.length === input.signatures.length) return;

        var unmatched = input.signatures.concat();

        input.signatures = input.pubKeys.map(function (pubKey) {
          var keyPair = ECPair.fromPublicKeyBuffer(pubKey);
          var match;

          unmatched.some(function (signature, i) {
            if (!signature) return false;

            var parsed = ECSignature.parseScriptSignature(signature);
            var hash = transaction.hashForSignature(vin, input.redeemScript, parsed.hashType);

            if (!keyPair.verify(hash, parsed.signature)) return false;

            unmatched[i] = undefined;
            match = signature;

            return true;
          });

          return match;
        });
      }

      function expandOutput(script, scriptType, ourPubKey) {
        typeforce(types.Buffer, script);

        var scriptChunks = bscript.decompile(script);
        if (!scriptType) {
          scriptType = bscript.classifyOutput(script);
        }

        var pubKeys = [];

        switch (scriptType) {
          case scriptTypes.P2PKH:
            if (!ourPubKey) break;

            var pkh1 = scriptChunks[2];
            var pkh2 = bcrypto.hash160(ourPubKey);
            if (pkh1.equals(pkh2)) pubKeys = [ourPubKey];
            break;

          case scriptTypes.P2WPKH:
            if (!ourPubKey) break;

            var wpkh1 = scriptChunks[1];
            var wpkh2 = bcrypto.hash160(ourPubKey);
            if (wpkh1.equals(wpkh2)) pubKeys = [ourPubKey];
            break;

          case scriptTypes.P2PK:
            pubKeys = scriptChunks.slice(0, 1);
            break;

          case scriptTypes.MULTISIG:
            pubKeys = scriptChunks.slice(1, -2);
            break;

          default:
            return { scriptType: scriptType };
        }

        return {
          pubKeys: pubKeys,
          scriptType: scriptType,
          signatures: pubKeys.map(function () {
            return undefined;
          })
        };
      }

      function checkP2shInput(input, redeemScriptHash) {
        if (input.prevOutType) {
          if (input.prevOutType !== scriptTypes.P2SH) throw new Error('PrevOutScript must be P2SH');

          var prevOutScriptScriptHash = bscript.decompile(input.prevOutScript)[1];
          if (!prevOutScriptScriptHash.equals(redeemScriptHash)) throw new Error('Inconsistent hash160(RedeemScript)');
        }
      }

      function checkP2WSHInput(input, witnessScriptHash) {
        if (input.prevOutType) {
          if (input.prevOutType !== scriptTypes.P2WSH) throw new Error('PrevOutScript must be P2WSH');

          var scriptHash = bscript.decompile(input.prevOutScript)[1];
          if (!scriptHash.equals(witnessScriptHash)) throw new Error('Inconsistent sha25(WitnessScript)');
        }
      }

      function prepareInput(input, kpPubKey, redeemScript, witnessValue, witnessScript) {
        var expanded;
        var prevOutType;
        var prevOutScript;

        var p2sh = false;
        var p2shType;
        var redeemScriptHash;

        var witness = false;
        var p2wsh = false;
        var witnessType;
        var witnessScriptHash;

        var signType;
        var signScript;

        if (redeemScript && witnessScript) {
          redeemScriptHash = bcrypto.hash160(redeemScript);
          witnessScriptHash = bcrypto.sha256(witnessScript);
          checkP2shInput(input, redeemScriptHash);

          if (!redeemScript.equals(bscript.witnessScriptHash.output.encode(witnessScriptHash))) throw new Error('Witness script inconsistent with redeem script');

          expanded = expandOutput(witnessScript, undefined, kpPubKey);
          if (!expanded.pubKeys) throw new Error('WitnessScript not supported "' + bscript.toASM(redeemScript) + '"');
          prevOutType = bscript.types.P2SH;
          prevOutScript = bscript.scriptHash.output.encode(redeemScriptHash);
          p2sh = witness = p2wsh = true;
          p2shType = bscript.types.P2WSH;
          signType = witnessType = expanded.scriptType;
          signScript = witnessScript;
        } else if (redeemScript) {
          redeemScriptHash = bcrypto.hash160(redeemScript);
          checkP2shInput(input, redeemScriptHash);

          expanded = expandOutput(redeemScript, undefined, kpPubKey);
          if (!expanded.pubKeys) throw new Error('RedeemScript not supported "' + bscript.toASM(redeemScript) + '"');

          prevOutType = bscript.types.P2SH;
          prevOutScript = bscript.scriptHash.output.encode(redeemScriptHash);
          p2sh = true;
          signType = p2shType = expanded.scriptType;
          signScript = redeemScript;
          witness = signType === bscript.types.P2WPKH;
        } else if (witnessScript) {
          witnessScriptHash = bcrypto.sha256(witnessScript);
          checkP2WSHInput(input, witnessScriptHash);

          expanded = expandOutput(witnessScript, undefined, kpPubKey);
          if (!expanded.pubKeys) throw new Error('WitnessScript not supported "' + bscript.toASM(redeemScript) + '"');

          prevOutType = bscript.types.P2WSH;
          prevOutScript = bscript.witnessScriptHash.output.encode(witnessScriptHash);
          witness = p2wsh = true;
          signType = witnessType = expanded.scriptType;
          signScript = witnessScript;
        } else if (input.prevOutType) {
          if (input.prevOutType === scriptTypes.P2SH || input.prevOutType === scriptTypes.P2WSH) {
            throw new Error('PrevOutScript is ' + input.prevOutType + ', requires redeemScript');
          }

          prevOutType = input.prevOutType;
          prevOutScript = input.prevOutScript;
          expanded = expandOutput(input.prevOutScript, input.prevOutType, kpPubKey);
          if (!expanded.pubKeys) return;

          witness = input.prevOutType === scriptTypes.P2WPKH;
          signType = prevOutType;
          signScript = prevOutScript;
        } else {
          prevOutScript = bscript.pubKeyHash.output.encode(bcrypto.hash160(kpPubKey));
          expanded = expandOutput(prevOutScript, scriptTypes.P2PKH, kpPubKey);
          prevOutType = scriptTypes.P2PKH;
          witness = false;
          signType = prevOutType;
          signScript = prevOutScript;
        }

        if (witnessValue !== undefined || witness) {
          typeforce(types.Satoshi, witnessValue);
          if (input.value !== undefined && input.value !== witnessValue) throw new Error('Input didn\'t match witnessValue');
          input.value = witnessValue;
        }

        if (signType === scriptTypes.P2WPKH) {
          signScript = bscript.pubKeyHash.output.encode(bscript.witnessPubKeyHash.output.decode(signScript));
        }

        if (p2sh) {
          input.redeemScript = redeemScript;
          input.redeemScriptType = p2shType;
        }

        if (p2wsh) {
          input.witnessScript = witnessScript;
          input.witnessScriptType = witnessType;
        }

        input.pubKeys = expanded.pubKeys;
        input.signatures = expanded.signatures;
        input.signScript = signScript;
        input.signType = signType;
        input.prevOutScript = prevOutScript;
        input.prevOutType = prevOutType;
        input.witness = witness;
      }

      function buildStack(type, signatures, pubKeys, allowIncomplete) {
        if (type === scriptTypes.P2PKH) {
          if (signatures.length === 1 && Buffer.isBuffer(signatures[0]) && pubKeys.length === 1) return bscript.pubKeyHash.input.encodeStack(signatures[0], pubKeys[0]);
        } else if (type === scriptTypes.P2PK) {
          if (signatures.length === 1 && Buffer.isBuffer(signatures[0])) return bscript.pubKey.input.encodeStack(signatures[0]);
        } else if (type === scriptTypes.MULTISIG) {
          if (signatures.length > 0) {
            signatures = signatures.map(function (signature) {
              return signature || ops.OP_0;
            });
            if (!allowIncomplete) {
              signatures = signatures.filter(function (x) {
                return x !== ops.OP_0;
              });
            }

            return bscript.multisig.input.encodeStack(signatures);
          }
        } else {
          throw new Error('Not yet supported');
        }

        if (!allowIncomplete) throw new Error('Not enough signatures provided');
        return [];
      }

      function buildInput(input, allowIncomplete) {
        var scriptType = input.prevOutType;
        var sig = [];
        var witness = [];

        if (supportedType(scriptType)) {
          sig = buildStack(scriptType, input.signatures, input.pubKeys, allowIncomplete);
        }

        var p2sh = false;
        if (scriptType === bscript.types.P2SH) {
          if (!allowIncomplete && !supportedP2SHType(input.redeemScriptType)) {
            throw new Error('Impossible to sign this type');
          }

          if (supportedType(input.redeemScriptType)) {
            sig = buildStack(input.redeemScriptType, input.signatures, input.pubKeys, allowIncomplete);
          }

          if (input.redeemScriptType) {
            p2sh = true;
            scriptType = input.redeemScriptType;
          }
        }

        switch (scriptType) {
          case bscript.types.P2WPKH:
            witness = buildStack(bscript.types.P2PKH, input.signatures, input.pubKeys, allowIncomplete);
            break;

          case bscript.types.P2WSH:
            if (!allowIncomplete && !supportedType(input.witnessScriptType)) {
              throw new Error('Impossible to sign this type');
            }

            if (supportedType(input.witnessScriptType)) {
              witness = buildStack(input.witnessScriptType, input.signatures, input.pubKeys, allowIncomplete);
              witness.push(input.witnessScript);
              scriptType = input.witnessScriptType;
            }

            break;
        }

        if (p2sh) {
          sig.push(input.redeemScript);
        }

        return {
          type: scriptType,
          script: bscript.compile(sig),
          witness: witness
        };
      }

      function TransactionBuilder(network, maximumFeeRate) {
        this.prevTxMap = {};
        this.network = network || networks.bitcoin;

        this.maximumFeeRate = maximumFeeRate || 1000;

        this.inputs = [];
        this.tx = new Transaction();
      }

      TransactionBuilder.prototype.setLockTime = function (locktime) {
        typeforce(types.UInt32, locktime);

        if (this.inputs.some(function (input) {
          if (!input.signatures) return false;

          return input.signatures.some(function (s) {
            return s;
          });
        })) {
          throw new Error('No, this would invalidate signatures');
        }

        this.tx.locktime = locktime;
      };

      TransactionBuilder.prototype.setVersion = function (version) {
        typeforce(types.UInt32, version);

        this.tx.version = version;
      };

      TransactionBuilder.fromTransaction = function (transaction, network) {
        var txb = new TransactionBuilder(network);

        txb.setVersion(transaction.version);
        txb.setLockTime(transaction.locktime);

        transaction.outs.forEach(function (txOut) {
          txb.addOutput(txOut.script, txOut.value);
        });

        transaction.ins.forEach(function (txIn) {
          txb.__addInputUnsafe(txIn.hash, txIn.index, {
            sequence: txIn.sequence,
            script: txIn.script,
            witness: txIn.witness
          });
        });

        txb.inputs.forEach(function (input, i) {
          fixMultisigOrder(input, transaction, i);
        });

        return txb;
      };

      TransactionBuilder.prototype.addInput = function (txHash, vout, sequence, prevOutScript) {
        if (!this.__canModifyInputs()) {
          throw new Error('No, this would invalidate signatures');
        }

        var value;

        if (typeof txHash === 'string') {
          txHash = Buffer.from(txHash, 'hex').reverse();
        } else if (txHash instanceof Transaction) {
          var txOut = txHash.outs[vout];
          prevOutScript = txOut.script;
          value = txOut.value;

          txHash = txHash.getHash();
        }

        return this.__addInputUnsafe(txHash, vout, {
          sequence: sequence,
          prevOutScript: prevOutScript,
          value: value
        });
      };

      TransactionBuilder.prototype.__addInputUnsafe = function (txHash, vout, options) {
        if (Transaction.isCoinbaseHash(txHash)) {
          throw new Error('coinbase inputs not supported');
        }

        var prevTxOut = txHash.toString('hex') + ':' + vout;
        if (this.prevTxMap[prevTxOut] !== undefined) throw new Error('Duplicate TxOut: ' + prevTxOut);

        var input = {};

        if (options.script !== undefined) {
          input = expandInput(options.script, options.witness || []);
        }

        if (options.value !== undefined) {
          input.value = options.value;
        }

        if (!input.prevOutScript && options.prevOutScript) {
          var prevOutType;

          if (!input.pubKeys && !input.signatures) {
            var expanded = expandOutput(options.prevOutScript);

            if (expanded.pubKeys) {
              input.pubKeys = expanded.pubKeys;
              input.signatures = expanded.signatures;
            }

            prevOutType = expanded.scriptType;
          }

          input.prevOutScript = options.prevOutScript;
          input.prevOutType = prevOutType || bscript.classifyOutput(options.prevOutScript);
        }

        var vin = this.tx.addInput(txHash, vout, options.sequence, options.scriptSig);
        this.inputs[vin] = input;
        this.prevTxMap[prevTxOut] = vin;
        return vin;
      };

      TransactionBuilder.prototype.addOutput = function (scriptPubKey, value) {
        if (!this.__canModifyOutputs()) {
          throw new Error('No, this would invalidate signatures');
        }

        if (typeof scriptPubKey === 'string') {
          scriptPubKey = baddress.toOutputScript(scriptPubKey, this.network);
        }

        return this.tx.addOutput(scriptPubKey, value);
      };

      TransactionBuilder.prototype.build = function () {
        return this.__build(false);
      };
      TransactionBuilder.prototype.buildIncomplete = function () {
        return this.__build(true);
      };

      TransactionBuilder.prototype.__build = function (allowIncomplete) {
        if (!allowIncomplete) {
          if (!this.tx.ins.length) throw new Error('Transaction has no inputs');
          if (!this.tx.outs.length) throw new Error('Transaction has no outputs');
        }

        var tx = this.tx.clone();

        this.inputs.forEach(function (input, i) {
          var scriptType = input.witnessScriptType || input.redeemScriptType || input.prevOutType;
          if (!scriptType && !allowIncomplete) throw new Error('Transaction is not complete');
          var result = buildInput(input, allowIncomplete);

          if (!allowIncomplete) {
            if (!supportedType(result.type) && result.type !== bscript.types.P2WPKH) {
              throw new Error(result.type + ' not supported');
            }
          }

          tx.setInputScript(i, result.script);
          tx.setWitness(i, result.witness);
        });

        if (!allowIncomplete) {
          if (this.__overMaximumFees(tx.virtualSize())) {
            throw new Error('Transaction has absurd fees');
          }
        }

        return tx;
      };

      function canSign(input) {
        return input.prevOutScript !== undefined && input.signScript !== undefined && input.pubKeys !== undefined && input.signatures !== undefined && input.signatures.length === input.pubKeys.length && input.pubKeys.length > 0 && input.witness !== undefined;
      }

      TransactionBuilder.prototype.sign = function (vin, keyPair, redeemScript, hashType, witnessValue, witnessScript) {
        if (keyPair.network !== this.network) throw new Error('Inconsistent network');
        if (!this.inputs[vin]) throw new Error('No input at index: ' + vin);
        hashType = hashType || Transaction.SIGHASH_ALL;

        var input = this.inputs[vin];

        if (input.redeemScript !== undefined && redeemScript && !input.redeemScript.equals(redeemScript)) {
          throw new Error('Inconsistent redeemScript');
        }

        var kpPubKey = keyPair.getPublicKeyBuffer();
        if (!canSign(input)) {
          prepareInput(input, kpPubKey, redeemScript, witnessValue, witnessScript);
          if (!canSign(input)) throw Error(input.prevOutType + ' not supported');
        }

        var signatureHash;
        if (input.witness) {
          signatureHash = this.tx.hashForWitnessV0(vin, input.signScript, input.value, hashType);
        } else {
          signatureHash = this.tx.hashForSignature(vin, input.signScript, hashType);
        }

        var signed = input.pubKeys.some(function (pubKey, i) {
          if (!kpPubKey.equals(pubKey)) return false;
          if (input.signatures[i]) throw new Error('Signature already exists');
          if (!keyPair.compressed && input.signType === scriptTypes.P2WPKH) throw new Error('BIP143 rejects uncompressed public keys in P2WPKH or P2WSH');

          input.signatures[i] = keyPair.sign(signatureHash).toScriptSignature(hashType);
          return true;
        });

        if (!signed) throw new Error('Key pair cannot sign for this input');
      };

      function signatureHashType(buffer) {
        return buffer.readUInt8(buffer.length - 1);
      }

      TransactionBuilder.prototype.__canModifyInputs = function () {
        return this.inputs.every(function (input) {
          if (input.signatures === undefined) return true;

          return input.signatures.every(function (signature) {
            if (!signature) return true;
            var hashType = signatureHashType(signature);

            return hashType & Transaction.SIGHASH_ANYONECANPAY;
          });
        });
      };

      TransactionBuilder.prototype.__canModifyOutputs = function () {
        var nInputs = this.tx.ins.length;
        var nOutputs = this.tx.outs.length;

        return this.inputs.every(function (input) {
          if (input.signatures === undefined) return true;

          return input.signatures.every(function (signature) {
            if (!signature) return true;
            var hashType = signatureHashType(signature);

            var hashTypeMod = hashType & 0x1f;
            if (hashTypeMod === Transaction.SIGHASH_NONE) return true;
            if (hashTypeMod === Transaction.SIGHASH_SINGLE) {
              return nInputs <= nOutputs;
            }
          });
        });
      };

      TransactionBuilder.prototype.__overMaximumFees = function (bytes) {
        var incoming = this.inputs.reduce(function (a, x) {
          return a + (x.value >>> 0);
        }, 0);

        var outgoing = this.tx.outs.reduce(function (a, x) {
          return a + x.value;
        }, 0);
        var fee = incoming - outgoing;
        var feeRate = fee / bytes;

        return feeRate > this.maximumFeeRate;
      };

      module.exports = TransactionBuilder;
    }, { "./address": 84, "./crypto": 87, "./ecpair": 89, "./ecsignature": 90, "./networks": 93, "./script": 94, "./transaction": 118, "./types": 120, "bitcoin-ops": 82, "safe-buffer": 144, "typeforce": 155 }], 120: [function (require, module, exports) {
      var typeforce = require('typeforce');

      var UINT31_MAX = Math.pow(2, 31) - 1;
      function UInt31(value) {
        return typeforce.UInt32(value) && value <= UINT31_MAX;
      }

      function BIP32Path(value) {
        return typeforce.String(value) && value.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
      }
      BIP32Path.toJSON = function () {
        return 'BIP32 derivation path';
      };

      var SATOSHI_MAX = 21 * 1e14;
      function Satoshi(value) {
        return typeforce.UInt53(value) && value <= SATOSHI_MAX;
      }

      var BigInt = typeforce.quacksLike('BigInteger');
      var ECPoint = typeforce.quacksLike('Point');

      var ECSignature = typeforce.compile({ r: BigInt, s: BigInt });
      var Network = typeforce.compile({
        messagePrefix: typeforce.oneOf(typeforce.Buffer, typeforce.String),
        bip32: {
          public: typeforce.UInt32,
          private: typeforce.UInt32
        },
        pubKeyHash: typeforce.UInt8,
        scriptHash: typeforce.UInt8,
        wif: typeforce.UInt8
      });

      var types = {
        BigInt: BigInt,
        BIP32Path: BIP32Path,
        Buffer256bit: typeforce.BufferN(32),
        ECPoint: ECPoint,
        ECSignature: ECSignature,
        Hash160bit: typeforce.BufferN(20),
        Hash256bit: typeforce.BufferN(32),
        Network: Network,
        Satoshi: Satoshi,
        UInt31: UInt31
      };

      for (var typeName in typeforce) {
        types[typeName] = typeforce[typeName];
      }

      module.exports = types;
    }, { "typeforce": 155 }], 121: [function (require, module, exports) {
      (function (Buffer) {

        var base58 = require('bs58');
        var createHash = require('create-hash');

        function sha256x2(buffer) {
          var tmp = createHash('sha256').update(buffer).digest();
          return createHash('sha256').update(tmp).digest();
        }

        function encode(payload) {
          var checksum = sha256x2(payload);

          return base58.encode(Buffer.concat([payload, checksum], payload.length + 4));
        }

        function decodeRaw(buffer) {
          var payload = buffer.slice(0, -4);
          var checksum = buffer.slice(-4);
          var newChecksum = sha256x2(payload);

          if (checksum[0] ^ newChecksum[0] | checksum[1] ^ newChecksum[1] | checksum[2] ^ newChecksum[2] | checksum[3] ^ newChecksum[3]) return;

          return payload;
        }

        function decodeUnsafe(string) {
          var buffer = base58.decodeUnsafe(string);
          if (!buffer) return;

          return decodeRaw(buffer);
        }

        function decode(string) {
          var buffer = base58.decode(string);
          var payload = decodeRaw(buffer);
          if (!payload) throw new Error('Invalid checksum');
          return payload;
        }

        module.exports = {
          encode: encode,
          decode: decode,
          decodeUnsafe: decodeUnsafe
        };
      }).call(this, require("buffer").Buffer);
    }, { "bs58": 122, "buffer": 162, "create-hash": 124 }], 122: [function (require, module, exports) {
      arguments[4][14][0].apply(exports, arguments);
    }, { "base-x": 75, "dup": 14 }], 123: [function (require, module, exports) {
      arguments[4][19][0].apply(exports, arguments);
    }, { "dup": 19, "inherits": 139, "safe-buffer": 144, "stream": 191, "string_decoder": 196 }], 124: [function (require, module, exports) {
      arguments[4][41][0].apply(exports, arguments);
    }, { "./md5": 126, "buffer": 162, "cipher-base": 123, "dup": 41, "inherits": 139, "ripemd160": 143, "sha.js": 146 }], 125: [function (require, module, exports) {
      arguments[4][42][0].apply(exports, arguments);
    }, { "buffer": 162, "dup": 42 }], 126: [function (require, module, exports) {
      arguments[4][43][0].apply(exports, arguments);
    }, { "./make-hash": 125, "dup": 43 }], 127: [function (require, module, exports) {
      arguments[4][44][0].apply(exports, arguments);
    }, { "./legacy": 128, "cipher-base": 123, "create-hash/md5": 126, "dup": 44, "inherits": 139, "ripemd160": 143, "safe-buffer": 144, "sha.js": 146 }], 128: [function (require, module, exports) {
      arguments[4][45][0].apply(exports, arguments);
    }, { "cipher-base": 123, "dup": 45, "inherits": 139, "safe-buffer": 144 }], 129: [function (require, module, exports) {
      var assert = require('assert');
      var BigInteger = require('bigi');

      var Point = require('./point');

      function Curve(p, a, b, Gx, Gy, n, h) {
        this.p = p;
        this.a = a;
        this.b = b;
        this.G = Point.fromAffine(this, Gx, Gy);
        this.n = n;
        this.h = h;

        this.infinity = new Point(this, null, null, BigInteger.ZERO);

        this.pOverFour = p.add(BigInteger.ONE).shiftRight(2);
      }

      Curve.prototype.pointFromX = function (isOdd, x) {
        var alpha = x.pow(3).add(this.a.multiply(x)).add(this.b).mod(this.p);
        var beta = alpha.modPow(this.pOverFour, this.p);

        var y = beta;
        if (beta.isEven() ^ !isOdd) {
          y = this.p.subtract(y);
        }

        return Point.fromAffine(this, x, y);
      };

      Curve.prototype.isInfinity = function (Q) {
        if (Q === this.infinity) return true;

        return Q.z.signum() === 0 && Q.y.signum() !== 0;
      };

      Curve.prototype.isOnCurve = function (Q) {
        if (this.isInfinity(Q)) return true;

        var x = Q.affineX;
        var y = Q.affineY;
        var a = this.a;
        var b = this.b;
        var p = this.p;

        if (x.signum() < 0 || x.compareTo(p) >= 0) return false;
        if (y.signum() < 0 || y.compareTo(p) >= 0) return false;

        var lhs = y.square().mod(p);
        var rhs = x.pow(3).add(a.multiply(x)).add(b).mod(p);
        return lhs.equals(rhs);
      };

      Curve.prototype.validate = function (Q) {
        assert(!this.isInfinity(Q), 'Point is at infinity');
        assert(this.isOnCurve(Q), 'Point is not on the curve');

        var nQ = Q.multiply(this.n);
        assert(this.isInfinity(nQ), 'Point is not a scalar multiple of G');

        return true;
      };

      module.exports = Curve;
    }, { "./point": 133, "assert": 159, "bigi": 136 }], 130: [function (require, module, exports) {
      arguments[4][47][0].apply(exports, arguments);
    }, { "dup": 47 }], 131: [function (require, module, exports) {
      arguments[4][48][0].apply(exports, arguments);
    }, { "./curve": 129, "./names": 132, "./point": 133, "dup": 48 }], 132: [function (require, module, exports) {
      arguments[4][49][0].apply(exports, arguments);
    }, { "./curve": 129, "./curves.json": 130, "bigi": 136, "dup": 49 }], 133: [function (require, module, exports) {
      (function (Buffer) {
        var assert = require('assert');
        var BigInteger = require('bigi');

        var THREE = BigInteger.valueOf(3);

        function Point(curve, x, y, z) {
          assert.notStrictEqual(z, undefined, 'Missing Z coordinate');

          this.curve = curve;
          this.x = x;
          this.y = y;
          this.z = z;
          this._zInv = null;

          this.compressed = true;
        }

        Object.defineProperty(Point.prototype, 'zInv', {
          get: function () {
            if (this._zInv === null) {
              this._zInv = this.z.modInverse(this.curve.p);
            }

            return this._zInv;
          }
        });

        Object.defineProperty(Point.prototype, 'affineX', {
          get: function () {
            return this.x.multiply(this.zInv).mod(this.curve.p);
          }
        });

        Object.defineProperty(Point.prototype, 'affineY', {
          get: function () {
            return this.y.multiply(this.zInv).mod(this.curve.p);
          }
        });

        Point.fromAffine = function (curve, x, y) {
          return new Point(curve, x, y, BigInteger.ONE);
        };

        Point.prototype.equals = function (other) {
          if (other === this) return true;
          if (this.curve.isInfinity(this)) return this.curve.isInfinity(other);
          if (this.curve.isInfinity(other)) return this.curve.isInfinity(this);

          var u = other.y.multiply(this.z).subtract(this.y.multiply(other.z)).mod(this.curve.p);

          if (u.signum() !== 0) return false;

          var v = other.x.multiply(this.z).subtract(this.x.multiply(other.z)).mod(this.curve.p);

          return v.signum() === 0;
        };

        Point.prototype.negate = function () {
          var y = this.curve.p.subtract(this.y);

          return new Point(this.curve, this.x, y, this.z);
        };

        Point.prototype.add = function (b) {
          if (this.curve.isInfinity(this)) return b;
          if (this.curve.isInfinity(b)) return this;

          var x1 = this.x;
          var y1 = this.y;
          var x2 = b.x;
          var y2 = b.y;

          var u = y2.multiply(this.z).subtract(y1.multiply(b.z)).mod(this.curve.p);

          var v = x2.multiply(this.z).subtract(x1.multiply(b.z)).mod(this.curve.p);

          if (v.signum() === 0) {
            if (u.signum() === 0) {
              return this.twice();
            }

            return this.curve.infinity;
          }

          var v2 = v.square();
          var v3 = v2.multiply(v);
          var x1v2 = x1.multiply(v2);
          var zu2 = u.square().multiply(this.z);

          var x3 = zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.p);

          var y3 = x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.p);

          var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.p);

          return new Point(this.curve, x3, y3, z3);
        };

        Point.prototype.twice = function () {
          if (this.curve.isInfinity(this)) return this;
          if (this.y.signum() === 0) return this.curve.infinity;

          var x1 = this.x;
          var y1 = this.y;

          var y1z1 = y1.multiply(this.z);
          var y1sqz1 = y1z1.multiply(y1).mod(this.curve.p);
          var a = this.curve.a;

          var w = x1.square().multiply(THREE);

          if (a.signum() !== 0) {
            w = w.add(this.z.square().multiply(a));
          }

          w = w.mod(this.curve.p);

          var x3 = w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.p);

          var y3 = w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.pow(3)).mod(this.curve.p);

          var z3 = y1z1.pow(3).shiftLeft(3).mod(this.curve.p);

          return new Point(this.curve, x3, y3, z3);
        };

        Point.prototype.multiply = function (k) {
          if (this.curve.isInfinity(this)) return this;
          if (k.signum() === 0) return this.curve.infinity;

          var e = k;
          var h = e.multiply(THREE);

          var neg = this.negate();
          var R = this;

          for (var i = h.bitLength() - 2; i > 0; --i) {
            var hBit = h.testBit(i);
            var eBit = e.testBit(i);

            R = R.twice();

            if (hBit !== eBit) {
              R = R.add(hBit ? this : neg);
            }
          }

          return R;
        };

        Point.prototype.multiplyTwo = function (j, x, k) {
          var i = Math.max(j.bitLength(), k.bitLength()) - 1;
          var R = this.curve.infinity;
          var both = this.add(x);

          while (i >= 0) {
            var jBit = j.testBit(i);
            var kBit = k.testBit(i);

            R = R.twice();

            if (jBit) {
              if (kBit) {
                R = R.add(both);
              } else {
                R = R.add(this);
              }
            } else if (kBit) {
              R = R.add(x);
            }
            --i;
          }

          return R;
        };

        Point.prototype.getEncoded = function (compressed) {
          if (compressed == null) compressed = this.compressed;
          if (this.curve.isInfinity(this)) return new Buffer('00', 'hex');

          var x = this.affineX;
          var y = this.affineY;

          var buffer;

          var byteLength = Math.floor((this.curve.p.bitLength() + 7) / 8);

          if (compressed) {
            buffer = new Buffer(1 + byteLength);
            buffer.writeUInt8(y.isEven() ? 0x02 : 0x03, 0);
          } else {
            buffer = new Buffer(1 + byteLength + byteLength);
            buffer.writeUInt8(0x04, 0);

            y.toBuffer(byteLength).copy(buffer, 1 + byteLength);
          }

          x.toBuffer(byteLength).copy(buffer, 1);

          return buffer;
        };

        Point.decodeFrom = function (curve, buffer) {
          var type = buffer.readUInt8(0);
          var compressed = type !== 4;

          var byteLength = Math.floor((curve.p.bitLength() + 7) / 8);
          var x = BigInteger.fromBuffer(buffer.slice(1, 1 + byteLength));

          var Q;
          if (compressed) {
            assert.equal(buffer.length, byteLength + 1, 'Invalid sequence length');
            assert(type === 0x02 || type === 0x03, 'Invalid sequence tag');

            var isOdd = type === 0x03;
            Q = curve.pointFromX(isOdd, x);
          } else {
            assert.equal(buffer.length, 1 + byteLength + byteLength, 'Invalid sequence length');

            var y = BigInteger.fromBuffer(buffer.slice(1 + byteLength));
            Q = Point.fromAffine(curve, x, y);
          }

          Q.compressed = compressed;
          return Q;
        };

        Point.prototype.toString = function () {
          if (this.curve.isInfinity(this)) return '(INFINITY)';

          return '(' + this.affineX.toString() + ',' + this.affineY.toString() + ')';
        };

        module.exports = Point;
      }).call(this, require("buffer").Buffer);
    }, { "assert": 159, "bigi": 136, "buffer": 162 }], 134: [function (require, module, exports) {
      arguments[4][77][0].apply(exports, arguments);
    }, { "../package.json": 137, "dup": 77 }], 135: [function (require, module, exports) {
      arguments[4][10][0].apply(exports, arguments);
    }, { "./bigi": 134, "assert": 159, "buffer": 162, "dup": 10 }], 136: [function (require, module, exports) {
      arguments[4][11][0].apply(exports, arguments);
    }, { "./bigi": 134, "./convert": 135, "dup": 11 }], 137: [function (require, module, exports) {
      module.exports = {
        "name": "bigi",
        "version": "1.4.1",
        "description": "Big integers.",
        "keywords": ["cryptography", "math", "bitcoin", "arbitrary", "precision", "arithmetic", "big", "integer", "int", "number", "biginteger", "bigint", "bignumber", "decimal", "float"],
        "devDependencies": {
          "coveralls": "^2.11.2",
          "istanbul": "^0.3.5",
          "jshint": "^2.5.1",
          "mocha": "^2.1.0",
          "mochify": "^2.1.0"
        },
        "repository": {
          "url": "git+https://github.com/cryptocoinjs/bigi.git",
          "type": "git"
        },
        "main": "./lib/index.js",
        "scripts": {
          "browser-test": "mochify --wd -R spec",
          "test": "_mocha -- test/*.js",
          "jshint": "jshint --config jshint.json lib/*.js ; true",
          "unit": "mocha",
          "coverage": "istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",
          "coveralls": "npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"
        },
        "dependencies": {},
        "testling": {
          "files": "test/*.js",
          "harness": "mocha",
          "browsers": ["ie/9..latest", "firefox/latest", "chrome/latest", "safari/6.0..latest", "iphone/6.0..latest", "android-browser/4.2..latest"]
        },
        "gitHead": "7d034a1b38ca90f68daa9de472dda2fb813836f1",
        "bugs": {
          "url": "https://github.com/cryptocoinjs/bigi/issues"
        },
        "homepage": "https://github.com/cryptocoinjs/bigi#readme",
        "_id": "bigi@1.4.1",
        "_shasum": "726e8ab08d1fe1dfb8aa6bb6309bffecf93a21b7",
        "_from": "bigi@>=1.1.0 <2.0.0",
        "_npmVersion": "2.10.1",
        "_nodeVersion": "2.1.0",
        "_npmUser": {
          "name": "jprichardson",
          "email": "jprichardson@gmail.com"
        },
        "maintainers": [{
          "name": "midnightlightning",
          "email": "boydb@midnightdesign.ws"
        }, {
          "name": "sidazhang",
          "email": "sidazhang89@gmail.com"
        }, {
          "name": "nadav",
          "email": "npm@shesek.info"
        }, {
          "name": "jprichardson",
          "email": "jprichardson@gmail.com"
        }],
        "dist": {
          "shasum": "726e8ab08d1fe1dfb8aa6bb6309bffecf93a21b7",
          "tarball": "https://registry.npmjs.org/bigi/-/bigi-1.4.1.tgz"
        },
        "directories": {},
        "_resolved": "https://registry.npmjs.org/bigi/-/bigi-1.4.1.tgz",
        "readme": "ERROR: No README data found!"
      };
    }, {}], 138: [function (require, module, exports) {
      arguments[4][51][0].apply(exports, arguments);
    }, { "buffer": 162, "dup": 51, "inherits": 139, "stream": 191 }], 139: [function (require, module, exports) {
      arguments[4][52][0].apply(exports, arguments);
    }, { "dup": 52 }], 140: [function (require, module, exports) {
      (function (Buffer) {
        module.exports = function fastRoot(values, digestFn) {
          if (!Array.isArray(values)) throw TypeError('Expected values Array');
          if (typeof digestFn !== 'function') throw TypeError('Expected digest Function');

          var length = values.length;
          var results = values.concat();

          while (length > 1) {
            var j = 0;

            for (var i = 0; i < length; i += 2, ++j) {
              var left = results[i];
              var right = i + 1 === length ? left : results[i + 1];
              var data = Buffer.concat([left, right]);

              results[j] = digestFn(data);
            }

            length = j;
          }

          return results[0];
        };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162 }], 141: [function (require, module, exports) {
      var OPS = require('bitcoin-ops');

      function encodingLength(i) {
        return i < OPS.OP_PUSHDATA1 ? 1 : i <= 0xff ? 2 : i <= 0xffff ? 3 : 5;
      }

      function encode(buffer, number, offset) {
        var size = encodingLength(number);

        if (size === 1) {
          buffer.writeUInt8(number, offset);
        } else if (size === 2) {
          buffer.writeUInt8(OPS.OP_PUSHDATA1, offset);
          buffer.writeUInt8(number, offset + 1);
        } else if (size === 3) {
          buffer.writeUInt8(OPS.OP_PUSHDATA2, offset);
          buffer.writeUInt16LE(number, offset + 1);
        } else {
          buffer.writeUInt8(OPS.OP_PUSHDATA4, offset);
          buffer.writeUInt32LE(number, offset + 1);
        }

        return size;
      }

      function decode(buffer, offset) {
        var opcode = buffer.readUInt8(offset);
        var number, size;

        if (opcode < OPS.OP_PUSHDATA1) {
          number = opcode;
          size = 1;
        } else if (opcode === OPS.OP_PUSHDATA1) {
          if (offset + 2 > buffer.length) return null;
          number = buffer.readUInt8(offset + 1);
          size = 2;
        } else if (opcode === OPS.OP_PUSHDATA2) {
          if (offset + 3 > buffer.length) return null;
          number = buffer.readUInt16LE(offset + 1);
          size = 3;
        } else {
          if (offset + 5 > buffer.length) return null;
          if (opcode !== OPS.OP_PUSHDATA4) throw new Error('Unexpected opcode');

          number = buffer.readUInt32LE(offset + 1);
          size = 5;
        }

        return {
          opcode: opcode,
          number: number,
          size: size
        };
      }

      module.exports = {
        encodingLength: encodingLength,
        encode: encode,
        decode: decode
      };
    }, { "bitcoin-ops": 82 }], 142: [function (require, module, exports) {
      arguments[4][59][0].apply(exports, arguments);
    }, { "_process": 172, "dup": 59, "safe-buffer": 144 }], 143: [function (require, module, exports) {
      arguments[4][60][0].apply(exports, arguments);
    }, { "buffer": 162, "dup": 60, "hash-base": 138, "inherits": 139 }], 144: [function (require, module, exports) {
      arguments[4][61][0].apply(exports, arguments);
    }, { "buffer": 162, "dup": 61 }], 145: [function (require, module, exports) {
      (function (Buffer) {
        function Hash(blockSize, finalSize) {
          this._block = new Buffer(blockSize);
          this._finalSize = finalSize;
          this._blockSize = blockSize;
          this._len = 0;
          this._s = 0;
        }

        Hash.prototype.update = function (data, enc) {
          if (typeof data === 'string') {
            enc = enc || 'utf8';
            data = new Buffer(data, enc);
          }

          var l = this._len += data.length;
          var s = this._s || 0;
          var f = 0;
          var buffer = this._block;

          while (s < l) {
            var t = Math.min(data.length, f + this._blockSize - s % this._blockSize);
            var ch = t - f;

            for (var i = 0; i < ch; i++) {
              buffer[s % this._blockSize + i] = data[i + f];
            }

            s += ch;
            f += ch;

            if (s % this._blockSize === 0) {
              this._update(buffer);
            }
          }
          this._s = s;

          return this;
        };

        Hash.prototype.digest = function (enc) {
          var l = this._len * 8;

          this._block[this._len % this._blockSize] = 0x80;

          this._block.fill(0, this._len % this._blockSize + 1);

          if (l % (this._blockSize * 8) >= this._finalSize * 8) {
            this._update(this._block);
            this._block.fill(0);
          }

          this._block.writeInt32BE(l, this._blockSize - 4);

          var hash = this._update(this._block) || this._hash();

          return enc ? hash.toString(enc) : hash;
        };

        Hash.prototype._update = function () {
          throw new Error('_update must be implemented by subclass');
        };

        module.exports = Hash;
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162 }], 146: [function (require, module, exports) {
      arguments[4][63][0].apply(exports, arguments);
    }, { "./sha": 147, "./sha1": 148, "./sha224": 149, "./sha256": 150, "./sha384": 151, "./sha512": 152, "dup": 63 }], 147: [function (require, module, exports) {
      (function (Buffer) {

        var inherits = require('inherits');
        var Hash = require('./hash');

        var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

        var W = new Array(80);

        function Sha() {
          this.init();
          this._w = W;

          Hash.call(this, 64, 56);
        }

        inherits(Sha, Hash);

        Sha.prototype.init = function () {
          this._a = 0x67452301;
          this._b = 0xefcdab89;
          this._c = 0x98badcfe;
          this._d = 0x10325476;
          this._e = 0xc3d2e1f0;

          return this;
        };

        function rotl5(num) {
          return num << 5 | num >>> 27;
        }

        function rotl30(num) {
          return num << 30 | num >>> 2;
        }

        function ft(s, b, c, d) {
          if (s === 0) return b & c | ~b & d;
          if (s === 2) return b & c | b & d | c & d;
          return b ^ c ^ d;
        }

        Sha.prototype._update = function (M) {
          var W = this._w;

          var a = this._a | 0;
          var b = this._b | 0;
          var c = this._c | 0;
          var d = this._d | 0;
          var e = this._e | 0;

          for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
          for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];

          for (var j = 0; j < 80; ++j) {
            var s = ~~(j / 20);
            var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;

            e = d;
            d = c;
            c = rotl30(b);
            b = a;
            a = t;
          }

          this._a = a + this._a | 0;
          this._b = b + this._b | 0;
          this._c = c + this._c | 0;
          this._d = d + this._d | 0;
          this._e = e + this._e | 0;
        };

        Sha.prototype._hash = function () {
          var H = new Buffer(20);

          H.writeInt32BE(this._a | 0, 0);
          H.writeInt32BE(this._b | 0, 4);
          H.writeInt32BE(this._c | 0, 8);
          H.writeInt32BE(this._d | 0, 12);
          H.writeInt32BE(this._e | 0, 16);

          return H;
        };

        module.exports = Sha;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 145, "buffer": 162, "inherits": 139 }], 148: [function (require, module, exports) {
      (function (Buffer) {

        var inherits = require('inherits');
        var Hash = require('./hash');

        var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

        var W = new Array(80);

        function Sha1() {
          this.init();
          this._w = W;

          Hash.call(this, 64, 56);
        }

        inherits(Sha1, Hash);

        Sha1.prototype.init = function () {
          this._a = 0x67452301;
          this._b = 0xefcdab89;
          this._c = 0x98badcfe;
          this._d = 0x10325476;
          this._e = 0xc3d2e1f0;

          return this;
        };

        function rotl1(num) {
          return num << 1 | num >>> 31;
        }

        function rotl5(num) {
          return num << 5 | num >>> 27;
        }

        function rotl30(num) {
          return num << 30 | num >>> 2;
        }

        function ft(s, b, c, d) {
          if (s === 0) return b & c | ~b & d;
          if (s === 2) return b & c | b & d | c & d;
          return b ^ c ^ d;
        }

        Sha1.prototype._update = function (M) {
          var W = this._w;

          var a = this._a | 0;
          var b = this._b | 0;
          var c = this._c | 0;
          var d = this._d | 0;
          var e = this._e | 0;

          for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
          for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);

          for (var j = 0; j < 80; ++j) {
            var s = ~~(j / 20);
            var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;

            e = d;
            d = c;
            c = rotl30(b);
            b = a;
            a = t;
          }

          this._a = a + this._a | 0;
          this._b = b + this._b | 0;
          this._c = c + this._c | 0;
          this._d = d + this._d | 0;
          this._e = e + this._e | 0;
        };

        Sha1.prototype._hash = function () {
          var H = new Buffer(20);

          H.writeInt32BE(this._a | 0, 0);
          H.writeInt32BE(this._b | 0, 4);
          H.writeInt32BE(this._c | 0, 8);
          H.writeInt32BE(this._d | 0, 12);
          H.writeInt32BE(this._e | 0, 16);

          return H;
        };

        module.exports = Sha1;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 145, "buffer": 162, "inherits": 139 }], 149: [function (require, module, exports) {
      (function (Buffer) {

        var inherits = require('inherits');
        var Sha256 = require('./sha256');
        var Hash = require('./hash');

        var W = new Array(64);

        function Sha224() {
          this.init();

          this._w = W;

          Hash.call(this, 64, 56);
        }

        inherits(Sha224, Sha256);

        Sha224.prototype.init = function () {
          this._a = 0xc1059ed8;
          this._b = 0x367cd507;
          this._c = 0x3070dd17;
          this._d = 0xf70e5939;
          this._e = 0xffc00b31;
          this._f = 0x68581511;
          this._g = 0x64f98fa7;
          this._h = 0xbefa4fa4;

          return this;
        };

        Sha224.prototype._hash = function () {
          var H = new Buffer(28);

          H.writeInt32BE(this._a, 0);
          H.writeInt32BE(this._b, 4);
          H.writeInt32BE(this._c, 8);
          H.writeInt32BE(this._d, 12);
          H.writeInt32BE(this._e, 16);
          H.writeInt32BE(this._f, 20);
          H.writeInt32BE(this._g, 24);

          return H;
        };

        module.exports = Sha224;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 145, "./sha256": 150, "buffer": 162, "inherits": 139 }], 150: [function (require, module, exports) {
      (function (Buffer) {

        var inherits = require('inherits');
        var Hash = require('./hash');

        var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];

        var W = new Array(64);

        function Sha256() {
          this.init();

          this._w = W;

          Hash.call(this, 64, 56);
        }

        inherits(Sha256, Hash);

        Sha256.prototype.init = function () {
          this._a = 0x6a09e667;
          this._b = 0xbb67ae85;
          this._c = 0x3c6ef372;
          this._d = 0xa54ff53a;
          this._e = 0x510e527f;
          this._f = 0x9b05688c;
          this._g = 0x1f83d9ab;
          this._h = 0x5be0cd19;

          return this;
        };

        function ch(x, y, z) {
          return z ^ x & (y ^ z);
        }

        function maj(x, y, z) {
          return x & y | z & (x | y);
        }

        function sigma0(x) {
          return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
        }

        function sigma1(x) {
          return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
        }

        function gamma0(x) {
          return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
        }

        function gamma1(x) {
          return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
        }

        Sha256.prototype._update = function (M) {
          var W = this._w;

          var a = this._a | 0;
          var b = this._b | 0;
          var c = this._c | 0;
          var d = this._d | 0;
          var e = this._e | 0;
          var f = this._f | 0;
          var g = this._g | 0;
          var h = this._h | 0;

          for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);
          for (; i < 64; ++i) W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;

          for (var j = 0; j < 64; ++j) {
            var T1 = h + sigma1(e) + ch(e, f, g) + K[j] + W[j] | 0;
            var T2 = sigma0(a) + maj(a, b, c) | 0;

            h = g;
            g = f;
            f = e;
            e = d + T1 | 0;
            d = c;
            c = b;
            b = a;
            a = T1 + T2 | 0;
          }

          this._a = a + this._a | 0;
          this._b = b + this._b | 0;
          this._c = c + this._c | 0;
          this._d = d + this._d | 0;
          this._e = e + this._e | 0;
          this._f = f + this._f | 0;
          this._g = g + this._g | 0;
          this._h = h + this._h | 0;
        };

        Sha256.prototype._hash = function () {
          var H = new Buffer(32);

          H.writeInt32BE(this._a, 0);
          H.writeInt32BE(this._b, 4);
          H.writeInt32BE(this._c, 8);
          H.writeInt32BE(this._d, 12);
          H.writeInt32BE(this._e, 16);
          H.writeInt32BE(this._f, 20);
          H.writeInt32BE(this._g, 24);
          H.writeInt32BE(this._h, 28);

          return H;
        };

        module.exports = Sha256;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 145, "buffer": 162, "inherits": 139 }], 151: [function (require, module, exports) {
      (function (Buffer) {
        var inherits = require('inherits');
        var SHA512 = require('./sha512');
        var Hash = require('./hash');

        var W = new Array(160);

        function Sha384() {
          this.init();
          this._w = W;

          Hash.call(this, 128, 112);
        }

        inherits(Sha384, SHA512);

        Sha384.prototype.init = function () {
          this._ah = 0xcbbb9d5d;
          this._bh = 0x629a292a;
          this._ch = 0x9159015a;
          this._dh = 0x152fecd8;
          this._eh = 0x67332667;
          this._fh = 0x8eb44a87;
          this._gh = 0xdb0c2e0d;
          this._hh = 0x47b5481d;

          this._al = 0xc1059ed8;
          this._bl = 0x367cd507;
          this._cl = 0x3070dd17;
          this._dl = 0xf70e5939;
          this._el = 0xffc00b31;
          this._fl = 0x68581511;
          this._gl = 0x64f98fa7;
          this._hl = 0xbefa4fa4;

          return this;
        };

        Sha384.prototype._hash = function () {
          var H = new Buffer(48);

          function writeInt64BE(h, l, offset) {
            H.writeInt32BE(h, offset);
            H.writeInt32BE(l, offset + 4);
          }

          writeInt64BE(this._ah, this._al, 0);
          writeInt64BE(this._bh, this._bl, 8);
          writeInt64BE(this._ch, this._cl, 16);
          writeInt64BE(this._dh, this._dl, 24);
          writeInt64BE(this._eh, this._el, 32);
          writeInt64BE(this._fh, this._fl, 40);

          return H;
        };

        module.exports = Sha384;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 145, "./sha512": 152, "buffer": 162, "inherits": 139 }], 152: [function (require, module, exports) {
      (function (Buffer) {
        var inherits = require('inherits');
        var Hash = require('./hash');

        var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

        var W = new Array(160);

        function Sha512() {
          this.init();
          this._w = W;

          Hash.call(this, 128, 112);
        }

        inherits(Sha512, Hash);

        Sha512.prototype.init = function () {
          this._ah = 0x6a09e667;
          this._bh = 0xbb67ae85;
          this._ch = 0x3c6ef372;
          this._dh = 0xa54ff53a;
          this._eh = 0x510e527f;
          this._fh = 0x9b05688c;
          this._gh = 0x1f83d9ab;
          this._hh = 0x5be0cd19;

          this._al = 0xf3bcc908;
          this._bl = 0x84caa73b;
          this._cl = 0xfe94f82b;
          this._dl = 0x5f1d36f1;
          this._el = 0xade682d1;
          this._fl = 0x2b3e6c1f;
          this._gl = 0xfb41bd6b;
          this._hl = 0x137e2179;

          return this;
        };

        function Ch(x, y, z) {
          return z ^ x & (y ^ z);
        }

        function maj(x, y, z) {
          return x & y | z & (x | y);
        }

        function sigma0(x, xl) {
          return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
        }

        function sigma1(x, xl) {
          return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
        }

        function Gamma0(x, xl) {
          return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
        }

        function Gamma0l(x, xl) {
          return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
        }

        function Gamma1(x, xl) {
          return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
        }

        function Gamma1l(x, xl) {
          return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
        }

        function getCarry(a, b) {
          return a >>> 0 < b >>> 0 ? 1 : 0;
        }

        Sha512.prototype._update = function (M) {
          var W = this._w;

          var ah = this._ah | 0;
          var bh = this._bh | 0;
          var ch = this._ch | 0;
          var dh = this._dh | 0;
          var eh = this._eh | 0;
          var fh = this._fh | 0;
          var gh = this._gh | 0;
          var hh = this._hh | 0;

          var al = this._al | 0;
          var bl = this._bl | 0;
          var cl = this._cl | 0;
          var dl = this._dl | 0;
          var el = this._el | 0;
          var fl = this._fl | 0;
          var gl = this._gl | 0;
          var hl = this._hl | 0;

          for (var i = 0; i < 32; i += 2) {
            W[i] = M.readInt32BE(i * 4);
            W[i + 1] = M.readInt32BE(i * 4 + 4);
          }
          for (; i < 160; i += 2) {
            var xh = W[i - 15 * 2];
            var xl = W[i - 15 * 2 + 1];
            var gamma0 = Gamma0(xh, xl);
            var gamma0l = Gamma0l(xl, xh);

            xh = W[i - 2 * 2];
            xl = W[i - 2 * 2 + 1];
            var gamma1 = Gamma1(xh, xl);
            var gamma1l = Gamma1l(xl, xh);

            var Wi7h = W[i - 7 * 2];
            var Wi7l = W[i - 7 * 2 + 1];

            var Wi16h = W[i - 16 * 2];
            var Wi16l = W[i - 16 * 2 + 1];

            var Wil = gamma0l + Wi7l | 0;
            var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
            Wil = Wil + gamma1l | 0;
            Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
            Wil = Wil + Wi16l | 0;
            Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;

            W[i] = Wih;
            W[i + 1] = Wil;
          }

          for (var j = 0; j < 160; j += 2) {
            Wih = W[j];
            Wil = W[j + 1];

            var majh = maj(ah, bh, ch);
            var majl = maj(al, bl, cl);

            var sigma0h = sigma0(ah, al);
            var sigma0l = sigma0(al, ah);
            var sigma1h = sigma1(eh, el);
            var sigma1l = sigma1(el, eh);

            var Kih = K[j];
            var Kil = K[j + 1];

            var chh = Ch(eh, fh, gh);
            var chl = Ch(el, fl, gl);

            var t1l = hl + sigma1l | 0;
            var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
            t1l = t1l + chl | 0;
            t1h = t1h + chh + getCarry(t1l, chl) | 0;
            t1l = t1l + Kil | 0;
            t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
            t1l = t1l + Wil | 0;
            t1h = t1h + Wih + getCarry(t1l, Wil) | 0;

            var t2l = sigma0l + majl | 0;
            var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;

            hh = gh;
            hl = gl;
            gh = fh;
            gl = fl;
            fh = eh;
            fl = el;
            el = dl + t1l | 0;
            eh = dh + t1h + getCarry(el, dl) | 0;
            dh = ch;
            dl = cl;
            ch = bh;
            cl = bl;
            bh = ah;
            bl = al;
            al = t1l + t2l | 0;
            ah = t1h + t2h + getCarry(al, t1l) | 0;
          }

          this._al = this._al + al | 0;
          this._bl = this._bl + bl | 0;
          this._cl = this._cl + cl | 0;
          this._dl = this._dl + dl | 0;
          this._el = this._el + el | 0;
          this._fl = this._fl + fl | 0;
          this._gl = this._gl + gl | 0;
          this._hl = this._hl + hl | 0;

          this._ah = this._ah + ah + getCarry(this._al, al) | 0;
          this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
          this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
          this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
          this._eh = this._eh + eh + getCarry(this._el, el) | 0;
          this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
          this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
          this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
        };

        Sha512.prototype._hash = function () {
          var H = new Buffer(64);

          function writeInt64BE(h, l, offset) {
            H.writeInt32BE(h, offset);
            H.writeInt32BE(l, offset + 4);
          }

          writeInt64BE(this._ah, this._al, 0);
          writeInt64BE(this._bh, this._bl, 8);
          writeInt64BE(this._ch, this._cl, 16);
          writeInt64BE(this._dh, this._dl, 24);
          writeInt64BE(this._eh, this._el, 32);
          writeInt64BE(this._fh, this._fl, 40);
          writeInt64BE(this._gh, this._gl, 48);
          writeInt64BE(this._hh, this._hl, 56);

          return H;
        };

        module.exports = Sha512;
      }).call(this, require("buffer").Buffer);
    }, { "./hash": 145, "buffer": 162, "inherits": 139 }], 153: [function (require, module, exports) {
      arguments[4][70][0].apply(exports, arguments);
    }, { "./native": 156, "dup": 70 }], 154: [function (require, module, exports) {
      (function (Buffer) {
        var NATIVE = require('./native');
        var ERRORS = require('./errors');

        function _Buffer(value) {
          return Buffer.isBuffer(value);
        }

        function Hex(value) {
          return typeof value === 'string' && /^([0-9a-f]{2})+$/i.test(value);
        }

        function _LengthN(type, length) {
          var name = type.toJSON();

          function Length(value) {
            if (!type(value)) return false;
            if (value.length === length) return true;

            throw ERRORS.tfCustomError(name + '(Length: ' + length + ')', name + '(Length: ' + value.length + ')');
          }
          Length.toJSON = function () {
            return name;
          };

          return Length;
        }

        var _ArrayN = _LengthN.bind(null, NATIVE.Array);
        var _BufferN = _LengthN.bind(null, _Buffer);
        var _HexN = _LengthN.bind(null, Hex);

        var UINT53_MAX = Math.pow(2, 53) - 1;

        function Finite(value) {
          return typeof value === 'number' && isFinite(value);
        }
        function Int8(value) {
          return value << 24 >> 24 === value;
        }
        function Int16(value) {
          return value << 16 >> 16 === value;
        }
        function Int32(value) {
          return (value | 0) === value;
        }
        function UInt8(value) {
          return (value & 0xff) === value;
        }
        function UInt16(value) {
          return (value & 0xffff) === value;
        }
        function UInt32(value) {
          return value >>> 0 === value;
        }
        function UInt53(value) {
          return typeof value === 'number' && value >= 0 && value <= UINT53_MAX && Math.floor(value) === value;
        }

        var types = {
          ArrayN: _ArrayN,
          Buffer: _Buffer,
          BufferN: _BufferN,
          Finite: Finite,
          Hex: Hex,
          HexN: _HexN,
          Int8: Int8,
          Int16: Int16,
          Int32: Int32,
          UInt8: UInt8,
          UInt16: UInt16,
          UInt32: UInt32,
          UInt53: UInt53
        };

        for (var typeName in types) {
          types[typeName].toJSON = function (t) {
            return t;
          }.bind(null, typeName);
        }

        module.exports = types;
      }).call(this, { "isBuffer": require("../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js") });
    }, { "../../../../usr/local/lib/node_modules/browserify/node_modules/is-buffer/index.js": 169, "./errors": 153, "./native": 156 }], 155: [function (require, module, exports) {
      var ERRORS = require('./errors');
      var NATIVE = require('./native');

      var tfJSON = ERRORS.tfJSON;
      var TfTypeError = ERRORS.TfTypeError;
      var TfPropertyTypeError = ERRORS.TfPropertyTypeError;
      var tfSubError = ERRORS.tfSubError;
      var getValueTypeName = ERRORS.getValueTypeName;

      var TYPES = {
        arrayOf: function arrayOf(type) {
          type = compile(type);

          function _arrayOf(array, strict) {
            if (!NATIVE.Array(array)) return false;

            return array.every(function (value, i) {
              try {
                return typeforce(type, value, strict);
              } catch (e) {
                throw tfSubError(e, i);
              }
            });
          }
          _arrayOf.toJSON = function () {
            return '[' + tfJSON(type) + ']';
          };

          return _arrayOf;
        },

        maybe: function maybe(type) {
          type = compile(type);

          function _maybe(value, strict) {
            return NATIVE.Nil(value) || type(value, strict, maybe);
          }
          _maybe.toJSON = function () {
            return '?' + tfJSON(type);
          };

          return _maybe;
        },

        map: function map(propertyType, propertyKeyType) {
          propertyType = compile(propertyType);
          if (propertyKeyType) propertyKeyType = compile(propertyKeyType);

          function _map(value, strict) {
            if (!NATIVE.Object(value, strict)) return false;
            if (NATIVE.Nil(value, strict)) return false;

            for (var propertyName in value) {
              try {
                if (propertyKeyType) {
                  typeforce(propertyKeyType, propertyName, strict);
                }
              } catch (e) {
                throw tfSubError(e, propertyName, 'key');
              }

              try {
                var propertyValue = value[propertyName];
                typeforce(propertyType, propertyValue, strict);
              } catch (e) {
                throw tfSubError(e, propertyName);
              }
            }

            return true;
          }

          if (propertyKeyType) {
            _map.toJSON = function () {
              return '{' + tfJSON(propertyKeyType) + ': ' + tfJSON(propertyType) + '}';
            };
          } else {
            _map.toJSON = function () {
              return '{' + tfJSON(propertyType) + '}';
            };
          }

          return _map;
        },

        object: function object(uncompiled) {
          var type = {};

          for (var typePropertyName in uncompiled) {
            type[typePropertyName] = compile(uncompiled[typePropertyName]);
          }

          function _object(value, strict) {
            if (!NATIVE.Object(value)) return false;
            if (NATIVE.Nil(value)) return false;

            var propertyName;

            try {
              for (propertyName in type) {
                var propertyType = type[propertyName];
                var propertyValue = value[propertyName];

                typeforce(propertyType, propertyValue, strict);
              }
            } catch (e) {
              throw tfSubError(e, propertyName);
            }

            if (strict) {
              for (propertyName in value) {
                if (type[propertyName]) continue;

                throw new TfPropertyTypeError(undefined, propertyName);
              }
            }

            return true;
          }
          _object.toJSON = function () {
            return tfJSON(type);
          };

          return _object;
        },

        oneOf: function oneOf() {
          var types = [].slice.call(arguments).map(compile);

          function _oneOf(value, strict) {
            return types.some(function (type) {
              try {
                return typeforce(type, value, strict);
              } catch (e) {
                return false;
              }
            });
          }
          _oneOf.toJSON = function () {
            return types.map(tfJSON).join('|');
          };

          return _oneOf;
        },

        quacksLike: function quacksLike(type) {
          function _quacksLike(value) {
            return type === getValueTypeName(value);
          }
          _quacksLike.toJSON = function () {
            return type;
          };

          return _quacksLike;
        },

        tuple: function tuple() {
          var types = [].slice.call(arguments).map(compile);

          function _tuple(values, strict) {
            return types.every(function (type, i) {
              try {
                return typeforce(type, values[i], strict);
              } catch (e) {
                throw tfSubError(e, i);
              }
            }) && (!strict || values.length === arguments.length);
          }
          _tuple.toJSON = function () {
            return '(' + types.map(tfJSON).join(', ') + ')';
          };

          return _tuple;
        },

        value: function value(expected) {
          function _value(actual) {
            return actual === expected;
          }
          _value.toJSON = function () {
            return expected;
          };

          return _value;
        }
      };

      function compile(type) {
        if (NATIVE.String(type)) {
          if (type[0] === '?') return TYPES.maybe(type.slice(1));

          return NATIVE[type] || TYPES.quacksLike(type);
        } else if (type && NATIVE.Object(type)) {
          if (NATIVE.Array(type)) return TYPES.arrayOf(type[0]);

          return TYPES.object(type);
        } else if (NATIVE.Function(type)) {
          return type;
        }

        return TYPES.value(type);
      }

      function typeforce(type, value, strict, surrogate) {
        if (NATIVE.Function(type)) {
          if (type(value, strict)) return true;

          throw new TfTypeError(surrogate || type, value);
        }

        return typeforce(compile(type), value, strict);
      }

      for (var typeName in NATIVE) {
        typeforce[typeName] = NATIVE[typeName];
      }

      for (typeName in TYPES) {
        typeforce[typeName] = TYPES[typeName];
      }

      var EXTRA = require('./extra');
      for (typeName in EXTRA) {
        typeforce[typeName] = EXTRA[typeName];
      }

      function __async(type, value, strict, callback) {
        if (typeof strict === 'function') return __async(type, value, false, strict);

        try {
          typeforce(type, value, strict);
        } catch (e) {
          return callback(e);
        }

        callback();
      }

      typeforce.async = __async;
      typeforce.compile = compile;
      typeforce.TfTypeError = TfTypeError;
      typeforce.TfPropertyTypeError = TfPropertyTypeError;

      module.exports = typeforce;
    }, { "./errors": 153, "./extra": 154, "./native": 156 }], 156: [function (require, module, exports) {
      arguments[4][73][0].apply(exports, arguments);
    }, { "dup": 73 }], 157: [function (require, module, exports) {
      (function (Buffer) {
        var MAX_SAFE_INTEGER = 9007199254740991;

        function checkUInt53(n) {
          if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0) throw new RangeError('value out of range');
        }

        function encode(number, buffer, offset) {
          checkUInt53(number);

          if (!buffer) buffer = new Buffer(encodingLength(number));
          if (!Buffer.isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance');
          if (!offset) offset = 0;

          if (number < 0xfd) {
            buffer.writeUInt8(number, offset);
            encode.bytes = 1;
          } else if (number <= 0xffff) {
            buffer.writeUInt8(0xfd, offset);
            buffer.writeUInt16LE(number, offset + 1);
            encode.bytes = 3;
          } else if (number <= 0xffffffff) {
            buffer.writeUInt8(0xfe, offset);
            buffer.writeUInt32LE(number, offset + 1);
            encode.bytes = 5;
          } else {
            buffer.writeUInt8(0xff, offset);
            buffer.writeUInt32LE(number >>> 0, offset + 1);
            buffer.writeUInt32LE(number / 0x100000000 | 0, offset + 5);
            encode.bytes = 9;
          }

          return buffer;
        }

        function decode(buffer, offset) {
          if (!Buffer.isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance');
          if (!offset) offset = 0;

          var first = buffer.readUInt8(offset);

          if (first < 0xfd) {
            decode.bytes = 1;
            return first;
          } else if (first === 0xfd) {
            decode.bytes = 3;
            return buffer.readUInt16LE(offset + 1);
          } else if (first === 0xfe) {
            decode.bytes = 5;
            return buffer.readUInt32LE(offset + 1);
          } else {
            decode.bytes = 9;
            var lo = buffer.readUInt32LE(offset + 1);
            var hi = buffer.readUInt32LE(offset + 5);
            var number = hi * 0x0100000000 + lo;
            checkUInt53(number);

            return number;
          }
        }

        function encodingLength(number) {
          checkUInt53(number);

          return number < 0xfd ? 1 : number <= 0xffff ? 3 : number <= 0xffffffff ? 5 : 9;
        }

        module.exports = { encode: encode, decode: decode, encodingLength: encodingLength };
      }).call(this, require("buffer").Buffer);
    }, { "buffer": 162 }], 158: [function (require, module, exports) {
      arguments[4][74][0].apply(exports, arguments);
    }, { "bs58check": 121, "buffer": 162, "dup": 74 }], 159: [function (require, module, exports) {
      (function (global) {

        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        function compare(a, b) {
          if (a === b) {
            return 0;
          }

          var x = a.length;
          var y = b.length;

          for (var i = 0, len = Math.min(x, y); i < len; ++i) {
            if (a[i] !== b[i]) {
              x = a[i];
              y = b[i];
              break;
            }
          }

          if (x < y) {
            return -1;
          }
          if (y < x) {
            return 1;
          }
          return 0;
        }
        function isBuffer(b) {
          if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
            return global.Buffer.isBuffer(b);
          }
          return !!(b != null && b._isBuffer);
        }

        var util = require('util/');
        var hasOwn = Object.prototype.hasOwnProperty;
        var pSlice = Array.prototype.slice;
        var functionsHaveNames = function () {
          return function foo() {}.name === 'foo';
        }();
        function pToString(obj) {
          return Object.prototype.toString.call(obj);
        }
        function isView(arrbuf) {
          if (isBuffer(arrbuf)) {
            return false;
          }
          if (typeof global.ArrayBuffer !== 'function') {
            return false;
          }
          if (typeof ArrayBuffer.isView === 'function') {
            return ArrayBuffer.isView(arrbuf);
          }
          if (!arrbuf) {
            return false;
          }
          if (arrbuf instanceof DataView) {
            return true;
          }
          if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
            return true;
          }
          return false;
        }


        var assert = module.exports = ok;

        var regex = /\s*function\s+([^\(\s]*)\s*/;

        function getName(func) {
          if (!util.isFunction(func)) {
            return;
          }
          if (functionsHaveNames) {
            return func.name;
          }
          var str = func.toString();
          var match = str.match(regex);
          return match && match[1];
        }
        assert.AssertionError = function AssertionError(options) {
          this.name = 'AssertionError';
          this.actual = options.actual;
          this.expected = options.expected;
          this.operator = options.operator;
          if (options.message) {
            this.message = options.message;
            this.generatedMessage = false;
          } else {
            this.message = getMessage(this);
            this.generatedMessage = true;
          }
          var stackStartFunction = options.stackStartFunction || fail;
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, stackStartFunction);
          } else {
            var err = new Error();
            if (err.stack) {
              var out = err.stack;

              var fn_name = getName(stackStartFunction);
              var idx = out.indexOf('\n' + fn_name);
              if (idx >= 0) {
                var next_line = out.indexOf('\n', idx + 1);
                out = out.substring(next_line + 1);
              }

              this.stack = out;
            }
          }
        };

        util.inherits(assert.AssertionError, Error);

        function truncate(s, n) {
          if (typeof s === 'string') {
            return s.length < n ? s : s.slice(0, n);
          } else {
            return s;
          }
        }
        function inspect(something) {
          if (functionsHaveNames || !util.isFunction(something)) {
            return util.inspect(something);
          }
          var rawname = getName(something);
          var name = rawname ? ': ' + rawname : '';
          return '[Function' + name + ']';
        }
        function getMessage(self) {
          return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
        }

        function fail(actual, expected, message, operator, stackStartFunction) {
          throw new assert.AssertionError({
            message: message,
            actual: actual,
            expected: expected,
            operator: operator,
            stackStartFunction: stackStartFunction
          });
        }

        assert.fail = fail;

        function ok(value, message) {
          if (!value) fail(value, true, message, '==', assert.ok);
        }
        assert.ok = ok;

        assert.equal = function equal(actual, expected, message) {
          if (actual != expected) fail(actual, expected, message, '==', assert.equal);
        };

        assert.notEqual = function notEqual(actual, expected, message) {
          if (actual == expected) {
            fail(actual, expected, message, '!=', assert.notEqual);
          }
        };

        assert.deepEqual = function deepEqual(actual, expected, message) {
          if (!_deepEqual(actual, expected, false)) {
            fail(actual, expected, message, 'deepEqual', assert.deepEqual);
          }
        };

        assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
          if (!_deepEqual(actual, expected, true)) {
            fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
          }
        };

        function _deepEqual(actual, expected, strict, memos) {
          if (actual === expected) {
            return true;
          } else if (isBuffer(actual) && isBuffer(expected)) {
            return compare(actual, expected) === 0;
          } else if (util.isDate(actual) && util.isDate(expected)) {
            return actual.getTime() === expected.getTime();
          } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
            return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
          } else if ((actual === null || typeof actual !== 'object') && (expected === null || typeof expected !== 'object')) {
            return strict ? actual === expected : actual == expected;
          } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
            return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;
          } else if (isBuffer(actual) !== isBuffer(expected)) {
            return false;
          } else {
            memos = memos || { actual: [], expected: [] };

            var actualIndex = memos.actual.indexOf(actual);
            if (actualIndex !== -1) {
              if (actualIndex === memos.expected.indexOf(expected)) {
                return true;
              }
            }

            memos.actual.push(actual);
            memos.expected.push(expected);

            return objEquiv(actual, expected, strict, memos);
          }
        }

        function isArguments(object) {
          return Object.prototype.toString.call(object) == '[object Arguments]';
        }

        function objEquiv(a, b, strict, actualVisitedObjects) {
          if (a === null || a === undefined || b === null || b === undefined) return false;

          if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
          if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
          var aIsArgs = isArguments(a);
          var bIsArgs = isArguments(b);
          if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
          if (aIsArgs) {
            a = pSlice.call(a);
            b = pSlice.call(b);
            return _deepEqual(a, b, strict);
          }
          var ka = objectKeys(a);
          var kb = objectKeys(b);
          var key, i;

          if (ka.length !== kb.length) return false;

          ka.sort();
          kb.sort();

          for (i = ka.length - 1; i >= 0; i--) {
            if (ka[i] !== kb[i]) return false;
          }

          for (i = ka.length - 1; i >= 0; i--) {
            key = ka[i];
            if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
          }
          return true;
        }

        assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
          if (_deepEqual(actual, expected, false)) {
            fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
          }
        };

        assert.notDeepStrictEqual = notDeepStrictEqual;
        function notDeepStrictEqual(actual, expected, message) {
          if (_deepEqual(actual, expected, true)) {
            fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
          }
        }

        assert.strictEqual = function strictEqual(actual, expected, message) {
          if (actual !== expected) {
            fail(actual, expected, message, '===', assert.strictEqual);
          }
        };

        assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
          if (actual === expected) {
            fail(actual, expected, message, '!==', assert.notStrictEqual);
          }
        };

        function expectedException(actual, expected) {
          if (!actual || !expected) {
            return false;
          }

          if (Object.prototype.toString.call(expected) == '[object RegExp]') {
            return expected.test(actual);
          }

          try {
            if (actual instanceof expected) {
              return true;
            }
          } catch (e) {}

          if (Error.isPrototypeOf(expected)) {
            return false;
          }

          return expected.call({}, actual) === true;
        }

        function _tryBlock(block) {
          var error;
          try {
            block();
          } catch (e) {
            error = e;
          }
          return error;
        }

        function _throws(shouldThrow, block, expected, message) {
          var actual;

          if (typeof block !== 'function') {
            throw new TypeError('"block" argument must be a function');
          }

          if (typeof expected === 'string') {
            message = expected;
            expected = null;
          }

          actual = _tryBlock(block);

          message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

          if (shouldThrow && !actual) {
            fail(actual, expected, 'Missing expected exception' + message);
          }

          var userProvidedMessage = typeof message === 'string';
          var isUnwantedException = !shouldThrow && util.isError(actual);
          var isUnexpectedException = !shouldThrow && actual && !expected;

          if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
            fail(actual, expected, 'Got unwanted exception' + message);
          }

          if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
            throw actual;
          }
        }

        assert.throws = function (block, error, message) {
          _throws(true, block, error, message);
        };

        assert.doesNotThrow = function (block, error, message) {
          _throws(false, block, error, message);
        };

        assert.ifError = function (err) {
          if (err) throw err;
        };

        var objectKeys = Object.keys || function (obj) {
          var keys = [];
          for (var key in obj) {
            if (hasOwn.call(obj, key)) keys.push(key);
          }
          return keys;
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "util/": 203 }], 160: [function (require, module, exports) {

      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;

      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;

      function placeHoldersCount(b64) {
        var len = b64.length;
        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        }

        return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
      }

      function byteLength(b64) {
        return b64.length * 3 / 4 - placeHoldersCount(b64);
      }

      function toByteArray(b64) {
        var i, l, tmp, placeHolders, arr;
        var len = b64.length;
        placeHolders = placeHoldersCount(b64);

        arr = new Arr(len * 3 / 4 - placeHolders);

        l = placeHolders > 0 ? len - 4 : len;

        var L = 0;

        for (i = 0; i < l; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[L++] = tmp >> 16 & 0xFF;
          arr[L++] = tmp >> 8 & 0xFF;
          arr[L++] = tmp & 0xFF;
        }

        if (placeHolders === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[L++] = tmp & 0xFF;
        } else if (placeHolders === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[L++] = tmp >> 8 & 0xFF;
          arr[L++] = tmp & 0xFF;
        }

        return arr;
      }

      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }

      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
          output.push(tripletToBase64(tmp));
        }
        return output.join('');
      }

      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3;
        var output = '';
        var parts = [];
        var maxChunkLength = 16383;
        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        }

        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          output += lookup[tmp >> 2];
          output += lookup[tmp << 4 & 0x3F];
          output += '==';
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          output += lookup[tmp >> 10];
          output += lookup[tmp >> 4 & 0x3F];
          output += lookup[tmp << 2 & 0x3F];
          output += '=';
        }

        parts.push(output);

        return parts.join('');
      }
    }, {}], 161: [function (require, module, exports) {}, {}], 162: [function (require, module, exports) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      var base64 = require('base64-js');
      var ieee754 = require('ieee754');

      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;

      var K_MAX_LENGTH = 0x7fffffff;
      exports.kMaxLength = K_MAX_LENGTH;

      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

      if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
      }

      function typedArraySupport() {
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () {
              return 42;
            } };
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }

      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('Invalid typed array length');
        }

        var buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
        return buf;
      }

      function Buffer(arg, encodingOrOffset, length) {
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new Error('If encoding is specified then the first argument must be a string');
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }

      if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true,
          enumerable: false,
          writable: false
        });
      }

      Buffer.poolSize = 8192;

      function from(value, encodingOrOffset, length) {
        if (typeof value === 'number') {
          throw new TypeError('"value" argument must not be a number');
        }

        if (isArrayBuffer(value)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }

        if (typeof value === 'string') {
          return fromString(value, encodingOrOffset);
        }

        return fromObject(value);
      }

      Buffer.from = function (value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };

      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;

      function assertSize(size) {
        if (typeof size !== 'number') {
          throw new TypeError('"size" argument must be a number');
        } else if (size < 0) {
          throw new RangeError('"size" argument must not be negative');
        }
      }

      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== undefined) {
          return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }

      Buffer.alloc = function (size, fill, encoding) {
        return alloc(size, fill, encoding);
      };

      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }

      Buffer.allocUnsafe = function (size) {
        return allocUnsafe(size);
      };

      Buffer.allocUnsafeSlow = function (size) {
        return allocUnsafe(size);
      };

      function fromString(string, encoding) {
        if (typeof encoding !== 'string' || encoding === '') {
          encoding = 'utf8';
        }

        if (!Buffer.isEncoding(encoding)) {
          throw new TypeError('"encoding" must be a valid string encoding');
        }

        var length = byteLength(string, encoding) | 0;
        var buf = createBuffer(length);

        var actual = buf.write(string, encoding);

        if (actual !== length) {
          buf = buf.slice(0, actual);
        }

        return buf;
      }

      function fromArrayLike(array) {
        var length = array.length < 0 ? 0 : checked(array.length) | 0;
        var buf = createBuffer(length);
        for (var i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }

      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('\'offset\' is out of bounds');
        }

        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('\'length\' is out of bounds');
        }

        var buf;
        if (byteOffset === undefined && length === undefined) {
          buf = new Uint8Array(array);
        } else if (length === undefined) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }

        buf.__proto__ = Buffer.prototype;
        return buf;
      }

      function fromObject(obj) {
        if (Buffer.isBuffer(obj)) {
          var len = checked(obj.length) | 0;
          var buf = createBuffer(len);

          if (buf.length === 0) {
            return buf;
          }

          obj.copy(buf, 0, 0, len);
          return buf;
        }

        if (obj) {
          if (isArrayBufferView(obj) || 'length' in obj) {
            if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
              return createBuffer(0);
            }
            return fromArrayLike(obj);
          }

          if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
            return fromArrayLike(obj.data);
          }
        }

        throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
      }

      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
        }
        return length | 0;
      }

      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer.alloc(+length);
      }

      Buffer.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true;
      };

      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
          throw new TypeError('Arguments must be Buffers');
        }

        if (a === b) return 0;

        var x = a.length;
        var y = b.length;

        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true;
          default:
            return false;
        }
      };

      Buffer.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }

        if (list.length === 0) {
          return Buffer.alloc(0);
        }

        var i;
        if (length === undefined) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }

        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };

      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) {
          return string.length;
        }
        if (isArrayBufferView(string) || isArrayBuffer(string)) {
          return string.byteLength;
        }
        if (typeof string !== 'string') {
          string = '' + string;
        }

        var len = string.length;
        if (len === 0) return 0;

        var loweredCase = false;
        for (;;) {
          switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return len;
            case 'utf8':
            case 'utf-8':
            case undefined:
              return utf8ToBytes(string).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return len * 2;
            case 'hex':
              return len >>> 1;
            case 'base64':
              return base64ToBytes(string).length;
            default:
              if (loweredCase) return utf8ToBytes(string).length;
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer.byteLength = byteLength;

      function slowToString(encoding, start, end) {
        var loweredCase = false;

        if (start === undefined || start < 0) {
          start = 0;
        }

        if (start > this.length) {
          return '';
        }

        if (end === undefined || end > this.length) {
          end = this.length;
        }

        if (end <= 0) {
          return '';
        }

        end >>>= 0;
        start >>>= 0;

        if (end <= start) {
          return '';
        }

        if (!encoding) encoding = 'utf8';

        while (true) {
          switch (encoding) {
            case 'hex':
              return hexSlice(this, start, end);

            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, start, end);

            case 'ascii':
              return asciiSlice(this, start, end);

            case 'latin1':
            case 'binary':
              return latin1Slice(this, start, end);

            case 'base64':
              return base64Slice(this, start, end);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, start, end);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = (encoding + '').toLowerCase();
              loweredCase = true;
          }
        }
      }

      Buffer.prototype._isBuffer = true;

      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }

      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 16-bits');
        }
        for (var i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };

      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 32-bits');
        }
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };

      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 64-bits');
        }
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };

      Buffer.prototype.toString = function toString() {
        var length = this.length;
        if (length === 0) return '';
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };

      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
        if (this === b) return true;
        return Buffer.compare(this, b) === 0;
      };

      Buffer.prototype.inspect = function inspect() {
        var str = '';
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
          if (this.length > max) str += ' ... ';
        }
        return '<Buffer ' + str + '>';
      };

      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) {
          throw new TypeError('Argument must be a Buffer');
        }

        if (start === undefined) {
          start = 0;
        }
        if (end === undefined) {
          end = target ? target.length : 0;
        }
        if (thisStart === undefined) {
          thisStart = 0;
        }
        if (thisEnd === undefined) {
          thisEnd = this.length;
        }

        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError('out of range index');
        }

        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }

        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;

        if (this === target) return 0;

        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);

        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);

        for (var i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0) return -1;

        if (typeof byteOffset === 'string') {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 0x7fffffff) {
          byteOffset = 0x7fffffff;
        } else if (byteOffset < -0x80000000) {
          byteOffset = -0x80000000;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }

        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1;else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;else return -1;
        }

        if (typeof val === 'string') {
          val = Buffer.from(val, encoding);
        }

        if (Buffer.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === 'number') {
          val = val & 0xFF;
          if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }

        throw new TypeError('val must be string, number or Buffer');
      }

      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;

        if (encoding !== undefined) {
          encoding = String(encoding).toLowerCase();
          if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }

        function read(buf, i) {
          if (indexSize === 1) {
            return buf[i];
          } else {
            return buf.readUInt16BE(i * indexSize);
          }
        }

        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found) return i;
          }
        }

        return -1;
      }

      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };

      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };

      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };

      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }

        var strLen = string.length;
        if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

        if (length > strLen / 2) {
          length = strLen / 2;
        }
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }

      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }

      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }

      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }

      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }

      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }

      Buffer.prototype.write = function write(string, offset, length, encoding) {
        if (offset === undefined) {
          encoding = 'utf8';
          length = this.length;
          offset = 0;
        } else if (length === undefined && typeof offset === 'string') {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
          } else {
            encoding = length;
            length = undefined;
          }
        } else {
          throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        }

        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;

        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError('Attempt to write outside buffer bounds');
        }

        if (!encoding) encoding = 'utf8';

        var loweredCase = false;
        for (;;) {
          switch (encoding) {
            case 'hex':
              return hexWrite(this, string, offset, length);

            case 'utf8':
            case 'utf-8':
              return utf8Write(this, string, offset, length);

            case 'ascii':
              return asciiWrite(this, string, offset, length);

            case 'latin1':
            case 'binary':
              return latin1Write(this, string, offset, length);

            case 'base64':
              return base64Write(this, string, offset, length);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return ucs2Write(this, string, offset, length);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };

      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };

      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }

      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];

        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;

            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 0x80) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                  if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                  if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                  if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }

          if (codePoint === null) {
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
          } else if (codePoint > 0xFFFF) {
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
          }

          res.push(codePoint);
          i += bytesPerSequence;
        }

        return decodeCodePointsArray(res);
      }

      var MAX_ARGUMENTS_LENGTH = 0x1000;

      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }

        var res = '';
        var i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }
        return res;
      }

      function asciiSlice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 0x7F);
        }
        return ret;
      }

      function latin1Slice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }

      function hexSlice(buf, start, end) {
        var len = buf.length;

        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;

        var out = '';
        for (var i = start; i < end; ++i) {
          out += toHex(buf[i]);
        }
        return out;
      }

      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = '';
        for (var i = 0; i < bytes.length; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }

      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;

        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }

        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }

        if (end < start) end = start;

        var newBuf = this.subarray(start, end);

        newBuf.__proto__ = Buffer.prototype;
        return newBuf;
      };

      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
        if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
      }

      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        return val;
      };

      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength, this.length);
        }

        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 0x100)) {
          val += this[offset + --byteLength] * mul;
        }

        return val;
      };

      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };

      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };

      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };

      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);

        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
      };

      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };

      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }
        mul *= 0x80;

        if (val >= mul) val -= Math.pow(2, 8 * byteLength);

        return val;
      };

      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);

        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 0x100)) {
          val += this[offset + --i] * mul;
        }
        mul *= 0x80;

        if (val >= mul) val -= Math.pow(2, 8 * byteLength);

        return val;
      };

      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 0x80)) return this[offset];
        return (0xff - this[offset] + 1) * -1;
      };

      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };

      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);

        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };

      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };

      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };

      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };

      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };

      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
      }

      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var mul = 1;
        var i = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);

          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);

          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
        if (value < 0) value = 0xff + value + 1;
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };

      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (value < 0) value = 0xffffffff + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
        if (offset < 0) throw new RangeError('Index out of range');
      }

      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }

      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };

      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }

      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };

      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;

        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;

        if (targetStart < 0) {
          throw new RangeError('targetStart out of bounds');
        }
        if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
        if (end < 0) throw new RangeError('sourceEnd out of bounds');

        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }

        var len = end - start;
        var i;

        if (this === target && start < targetStart && targetStart < end) {
          for (i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
          }
        } else if (len < 1000) {
          for (i = 0; i < len; ++i) {
            target[i + targetStart] = this[i + start];
          }
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        }

        return len;
      };

      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === 'string') {
          if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
          }
          if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (code < 256) {
              val = code;
            }
          }
          if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
          }
          if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
          }
        } else if (typeof val === 'number') {
          val = val & 255;
        }

        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError('Out of range index');
        }

        if (end <= start) {
          return this;
        }

        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;

        if (!val) val = 0;

        var i;
        if (typeof val === 'number') {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = Buffer.isBuffer(val) ? val : new Buffer(val, encoding);
          var len = bytes.length;
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }

        return this;
      };

      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

      function base64clean(str) {
        str = str.trim().replace(INVALID_BASE64_RE, '');

        if (str.length < 2) return '';

        while (str.length % 4 !== 0) {
          str = str + '=';
        }
        return str;
      }

      function toHex(n) {
        if (n < 16) return '0' + n.toString(16);
        return n.toString(16);
      }

      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];

        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);

          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            if (!leadSurrogate) {
              if (codePoint > 0xDBFF) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              }

              leadSurrogate = codePoint;

              continue;
            }

            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            }

            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          }

          leadSurrogate = null;

          if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
            throw new Error('Invalid code point');
          }
        }

        return bytes;
      }

      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 0xFF);
        }
        return byteArray;
      }

      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;

          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }

        return byteArray;
      }

      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }

      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }

      function isArrayBuffer(obj) {
        return obj instanceof ArrayBuffer || obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' && typeof obj.byteLength === 'number';
      }

      function isArrayBufferView(obj) {
        return typeof ArrayBuffer.isView === 'function' && ArrayBuffer.isView(obj);
      }

      function numberIsNaN(obj) {
        return obj !== obj;
      }
    }, { "base64-js": 160, "ieee754": 167 }], 163: [function (require, module, exports) {
      module.exports = {
        "100": "Continue",
        "101": "Switching Protocols",
        "102": "Processing",
        "200": "OK",
        "201": "Created",
        "202": "Accepted",
        "203": "Non-Authoritative Information",
        "204": "No Content",
        "205": "Reset Content",
        "206": "Partial Content",
        "207": "Multi-Status",
        "208": "Already Reported",
        "226": "IM Used",
        "300": "Multiple Choices",
        "301": "Moved Permanently",
        "302": "Found",
        "303": "See Other",
        "304": "Not Modified",
        "305": "Use Proxy",
        "307": "Temporary Redirect",
        "308": "Permanent Redirect",
        "400": "Bad Request",
        "401": "Unauthorized",
        "402": "Payment Required",
        "403": "Forbidden",
        "404": "Not Found",
        "405": "Method Not Allowed",
        "406": "Not Acceptable",
        "407": "Proxy Authentication Required",
        "408": "Request Timeout",
        "409": "Conflict",
        "410": "Gone",
        "411": "Length Required",
        "412": "Precondition Failed",
        "413": "Payload Too Large",
        "414": "URI Too Long",
        "415": "Unsupported Media Type",
        "416": "Range Not Satisfiable",
        "417": "Expectation Failed",
        "418": "I'm a teapot",
        "421": "Misdirected Request",
        "422": "Unprocessable Entity",
        "423": "Locked",
        "424": "Failed Dependency",
        "425": "Unordered Collection",
        "426": "Upgrade Required",
        "428": "Precondition Required",
        "429": "Too Many Requests",
        "431": "Request Header Fields Too Large",
        "451": "Unavailable For Legal Reasons",
        "500": "Internal Server Error",
        "501": "Not Implemented",
        "502": "Bad Gateway",
        "503": "Service Unavailable",
        "504": "Gateway Timeout",
        "505": "HTTP Version Not Supported",
        "506": "Variant Also Negotiates",
        "507": "Insufficient Storage",
        "508": "Loop Detected",
        "509": "Bandwidth Limit Exceeded",
        "510": "Not Extended",
        "511": "Network Authentication Required"
      };
    }, {}], 164: [function (require, module, exports) {
      (function (Buffer) {

        function isArray(arg) {
          if (Array.isArray) {
            return Array.isArray(arg);
          }
          return objectToString(arg) === '[object Array]';
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
          return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
          return objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;

        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
          return objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
          return objectToString(e) === '[object Error]' || e instanceof Error;
        }
        exports.isError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        exports.isBuffer = Buffer.isBuffer;

        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }
      }).call(this, { "isBuffer": require("../../is-buffer/index.js") });
    }, { "../../is-buffer/index.js": 169 }], 165: [function (require, module, exports) {

      function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
      }
      module.exports = EventEmitter;

      EventEmitter.EventEmitter = EventEmitter;

      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._maxListeners = undefined;

      EventEmitter.defaultMaxListeners = 10;

      EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
      };

      EventEmitter.prototype.emit = function (type) {
        var er, handler, len, args, i, listeners;

        if (!this._events) this._events = {};

        if (type === 'error') {
          if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) {
              throw er;
            } else {
              var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
              err.context = er;
              throw err;
            }
          }
        }

        handler = this._events[type];

        if (isUndefined(handler)) return false;

        if (isFunction(handler)) {
          switch (arguments.length) {
            case 1:
              handler.call(this);
              break;
            case 2:
              handler.call(this, arguments[1]);
              break;
            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;

            default:
              args = Array.prototype.slice.call(arguments, 1);
              handler.apply(this, args);
          }
        } else if (isObject(handler)) {
          args = Array.prototype.slice.call(arguments, 1);
          listeners = handler.slice();
          len = listeners.length;
          for (i = 0; i < len; i++) listeners[i].apply(this, args);
        }

        return true;
      };

      EventEmitter.prototype.addListener = function (type, listener) {
        var m;

        if (!isFunction(listener)) throw TypeError('listener must be a function');

        if (!this._events) this._events = {};

        if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

        if (!this._events[type]) this._events[type] = listener;else if (isObject(this._events[type])) this._events[type].push(listener);else this._events[type] = [this._events[type], listener];

        if (isObject(this._events[type]) && !this._events[type].warned) {
          if (!isUndefined(this._maxListeners)) {
            m = this._maxListeners;
          } else {
            m = EventEmitter.defaultMaxListeners;
          }

          if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
            if (typeof console.trace === 'function') {
              console.trace();
            }
          }
        }

        return this;
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener;

      EventEmitter.prototype.once = function (type, listener) {
        if (!isFunction(listener)) throw TypeError('listener must be a function');

        var fired = false;

        function g() {
          this.removeListener(type, g);

          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
      };

      EventEmitter.prototype.removeListener = function (type, listener) {
        var list, position, length, i;

        if (!isFunction(listener)) throw TypeError('listener must be a function');

        if (!this._events || !this._events[type]) return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener || isFunction(list.listener) && list.listener === listener) {
          delete this._events[type];
          if (this._events.removeListener) this.emit('removeListener', type, listener);
        } else if (isObject(list)) {
          for (i = length; i-- > 0;) {
            if (list[i] === listener || list[i].listener && list[i].listener === listener) {
              position = i;
              break;
            }
          }

          if (position < 0) return this;

          if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
          } else {
            list.splice(position, 1);
          }

          if (this._events.removeListener) this.emit('removeListener', type, listener);
        }

        return this;
      };

      EventEmitter.prototype.removeAllListeners = function (type) {
        var key, listeners;

        if (!this._events) return this;

        if (!this._events.removeListener) {
          if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
          return this;
        }

        if (arguments.length === 0) {
          for (key in this._events) {
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = {};
          return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
          this.removeListener(type, listeners);
        } else if (listeners) {
          while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
      };

      EventEmitter.prototype.listeners = function (type) {
        var ret;
        if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
        return ret;
      };

      EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
          var evlistener = this._events[type];

          if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
        }
        return 0;
      };

      EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type);
      };

      function isFunction(arg) {
        return typeof arg === 'function';
      }

      function isNumber(arg) {
        return typeof arg === 'number';
      }

      function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
      }

      function isUndefined(arg) {
        return arg === void 0;
      }
    }, {}], 166: [function (require, module, exports) {
      var http = require('http');
      var url = require('url');

      var https = module.exports;

      for (var key in http) {
        if (http.hasOwnProperty(key)) https[key] = http[key];
      }

      https.request = function (params, cb) {
        params = validateParams(params);
        return http.request.call(this, params, cb);
      };

      https.get = function (params, cb) {
        params = validateParams(params);
        return http.get.call(this, params, cb);
      };

      function validateParams(params) {
        if (typeof params === 'string') {
          params = url.parse(params);
        }
        if (!params.protocol) {
          params.protocol = 'https:';
        }
        if (params.protocol !== 'https:') {
          throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"');
        }
        return params;
      }
    }, { "http": 192, "url": 198 }], 167: [function (require, module, exports) {
      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];

        i += d;

        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
      };
    }, {}], 168: [function (require, module, exports) {
      arguments[4][52][0].apply(exports, arguments);
    }, { "dup": 52 }], 169: [function (require, module, exports) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */

      module.exports = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
      };

      function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
      }

      function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
      }
    }, {}], 170: [function (require, module, exports) {
      var toString = {}.toString;

      module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
      };
    }, {}], 171: [function (require, module, exports) {
      (function (process) {

        if (!process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
          module.exports = nextTick;
        } else {
          module.exports = process.nextTick;
        }

        function nextTick(fn, arg1, arg2, arg3) {
          if (typeof fn !== 'function') {
            throw new TypeError('"callback" argument must be a function');
          }
          var len = arguments.length;
          var args, i;
          switch (len) {
            case 0:
            case 1:
              return process.nextTick(fn);
            case 2:
              return process.nextTick(function afterTickOne() {
                fn.call(null, arg1);
              });
            case 3:
              return process.nextTick(function afterTickTwo() {
                fn.call(null, arg1, arg2);
              });
            case 4:
              return process.nextTick(function afterTickThree() {
                fn.call(null, arg1, arg2, arg3);
              });
            default:
              args = new Array(len - 1);
              i = 0;
              while (i < args.length) {
                args[i++] = arguments[i];
              }
              return process.nextTick(function afterTick() {
                fn.apply(null, args);
              });
          }
        }
      }).call(this, require('_process'));
    }, { "_process": 172 }], 172: [function (require, module, exports) {
      var process = module.exports = {};

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }

        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }

        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = '';
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };
    }, {}], 173: [function (require, module, exports) {
      (function (global) {
        ;(function (root) {
          var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
          var freeModule = typeof module == 'object' && module && !module.nodeType && module;
          var freeGlobal = typeof global == 'object' && global;
          if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
            root = freeGlobal;
          }

          var punycode,
              maxInt = 2147483647,
              base = 36,
              tMin = 1,
              tMax = 26,
              skew = 38,
              damp = 700,
              initialBias = 72,
              initialN = 128,
              delimiter = '-',
              regexPunycode = /^xn--/,
              regexNonASCII = /[^\x20-\x7E]/,
              regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
              errors = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
          },
              baseMinusTMin = base - tMin,
              floor = Math.floor,
              stringFromCharCode = String.fromCharCode,
              key;

          function error(type) {
            throw new RangeError(errors[type]);
          }

          function map(array, fn) {
            var length = array.length;
            var result = [];
            while (length--) {
              result[length] = fn(array[length]);
            }
            return result;
          }

          function mapDomain(string, fn) {
            var parts = string.split('@');
            var result = '';
            if (parts.length > 1) {
              result = parts[0] + '@';
              string = parts[1];
            }

            string = string.replace(regexSeparators, '\x2E');
            var labels = string.split('.');
            var encoded = map(labels, fn).join('.');
            return result + encoded;
          }

          function ucs2decode(string) {
            var output = [],
                counter = 0,
                length = string.length,
                value,
                extra;
            while (counter < length) {
              value = string.charCodeAt(counter++);
              if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                  output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                  output.push(value);
                  counter--;
                }
              } else {
                output.push(value);
              }
            }
            return output;
          }

          function ucs2encode(array) {
            return map(array, function (value) {
              var output = '';
              if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
              }
              output += stringFromCharCode(value);
              return output;
            }).join('');
          }

          function basicToDigit(codePoint) {
            if (codePoint - 48 < 10) {
              return codePoint - 22;
            }
            if (codePoint - 65 < 26) {
              return codePoint - 65;
            }
            if (codePoint - 97 < 26) {
              return codePoint - 97;
            }
            return base;
          }

          function digitToBasic(digit, flag) {
            return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
          }

          function adapt(delta, numPoints, firstTime) {
            var k = 0;
            delta = firstTime ? floor(delta / damp) : delta >> 1;
            delta += floor(delta / numPoints);
            for (; delta > baseMinusTMin * tMax >> 1; k += base) {
              delta = floor(delta / baseMinusTMin);
            }
            return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
          }

          function decode(input) {
            var output = [],
                inputLength = input.length,
                out,
                i = 0,
                n = initialN,
                bias = initialBias,
                basic,
                j,
                index,
                oldi,
                w,
                k,
                digit,
                t,
                baseMinusT;

            basic = input.lastIndexOf(delimiter);
            if (basic < 0) {
              basic = 0;
            }

            for (j = 0; j < basic; ++j) {
              if (input.charCodeAt(j) >= 0x80) {
                error('not-basic');
              }
              output.push(input.charCodeAt(j));
            }

            for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
              for (oldi = i, w = 1, k = base;; k += base) {

                if (index >= inputLength) {
                  error('invalid-input');
                }

                digit = basicToDigit(input.charCodeAt(index++));

                if (digit >= base || digit > floor((maxInt - i) / w)) {
                  error('overflow');
                }

                i += digit * w;
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                if (digit < t) {
                  break;
                }

                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) {
                  error('overflow');
                }

                w *= baseMinusT;
              }

              out = output.length + 1;
              bias = adapt(i - oldi, out, oldi == 0);

              if (floor(i / out) > maxInt - n) {
                error('overflow');
              }

              n += floor(i / out);
              i %= out;

              output.splice(i++, 0, n);
            }

            return ucs2encode(output);
          }

          function encode(input) {
            var n,
                delta,
                handledCPCount,
                basicLength,
                bias,
                j,
                m,
                q,
                k,
                t,
                currentValue,
                output = [],
                inputLength,
                handledCPCountPlusOne,
                baseMinusT,
                qMinusT;

            input = ucs2decode(input);

            inputLength = input.length;

            n = initialN;
            delta = 0;
            bias = initialBias;

            for (j = 0; j < inputLength; ++j) {
              currentValue = input[j];
              if (currentValue < 0x80) {
                output.push(stringFromCharCode(currentValue));
              }
            }

            handledCPCount = basicLength = output.length;

            if (basicLength) {
              output.push(delimiter);
            }

            while (handledCPCount < inputLength) {
              for (m = maxInt, j = 0; j < inputLength; ++j) {
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) {
                  m = currentValue;
                }
              }

              handledCPCountPlusOne = handledCPCount + 1;
              if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                error('overflow');
              }

              delta += (m - n) * handledCPCountPlusOne;
              n = m;

              for (j = 0; j < inputLength; ++j) {
                currentValue = input[j];

                if (currentValue < n && ++delta > maxInt) {
                  error('overflow');
                }

                if (currentValue == n) {
                  for (q = delta, k = base;; k += base) {
                    t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) {
                      break;
                    }
                    qMinusT = q - t;
                    baseMinusT = base - t;
                    output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                    q = floor(qMinusT / baseMinusT);
                  }

                  output.push(stringFromCharCode(digitToBasic(q, 0)));
                  bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                  delta = 0;
                  ++handledCPCount;
                }
              }

              ++delta;
              ++n;
            }
            return output.join('');
          }

          function toUnicode(input) {
            return mapDomain(input, function (string) {
              return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
            });
          }

          function toASCII(input) {
            return mapDomain(input, function (string) {
              return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
            });
          }

          punycode = {
            'version': '1.4.1',

            'ucs2': {
              'decode': ucs2decode,
              'encode': ucs2encode
            },
            'decode': decode,
            'encode': encode,
            'toASCII': toASCII,
            'toUnicode': toUnicode
          };

          if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
            define('punycode', function () {
              return punycode;
            });
          } else if (freeExports && freeModule) {
            if (module.exports == freeExports) {
              freeModule.exports = punycode;
            } else {
              for (key in punycode) {
                punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
              }
            }
          } else {
            root.punycode = punycode;
          }
        })(this);
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 174: [function (require, module, exports) {
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      module.exports = function (qs, sep, eq, options) {
        sep = sep || '&';
        eq = eq || '=';
        var obj = {};

        if (typeof qs !== 'string' || qs.length === 0) {
          return obj;
        }

        var regexp = /\+/g;
        qs = qs.split(sep);

        var maxKeys = 1000;
        if (options && typeof options.maxKeys === 'number') {
          maxKeys = options.maxKeys;
        }

        var len = qs.length;

        if (maxKeys > 0 && len > maxKeys) {
          len = maxKeys;
        }

        for (var i = 0; i < len; ++i) {
          var x = qs[i].replace(regexp, '%20'),
              idx = x.indexOf(eq),
              kstr,
              vstr,
              k,
              v;

          if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
          } else {
            kstr = x;
            vstr = '';
          }

          k = decodeURIComponent(kstr);
          v = decodeURIComponent(vstr);

          if (!hasOwnProperty(obj, k)) {
            obj[k] = v;
          } else if (isArray(obj[k])) {
            obj[k].push(v);
          } else {
            obj[k] = [obj[k], v];
          }
        }

        return obj;
      };

      var isArray = Array.isArray || function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]';
      };
    }, {}], 175: [function (require, module, exports) {

      var stringifyPrimitive = function (v) {
        switch (typeof v) {
          case 'string':
            return v;

          case 'boolean':
            return v ? 'true' : 'false';

          case 'number':
            return isFinite(v) ? v : '';

          default:
            return '';
        }
      };

      module.exports = function (obj, sep, eq, name) {
        sep = sep || '&';
        eq = eq || '=';
        if (obj === null) {
          obj = undefined;
        }

        if (typeof obj === 'object') {
          return map(objectKeys(obj), function (k) {
            var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
            if (isArray(obj[k])) {
              return map(obj[k], function (v) {
                return ks + encodeURIComponent(stringifyPrimitive(v));
              }).join(sep);
            } else {
              return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
            }
          }).join(sep);
        }

        if (!name) return '';
        return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
      };

      var isArray = Array.isArray || function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]';
      };

      function map(xs, f) {
        if (xs.map) return xs.map(f);
        var res = [];
        for (var i = 0; i < xs.length; i++) {
          res.push(f(xs[i], i));
        }
        return res;
      }

      var objectKeys = Object.keys || function (obj) {
        var res = [];
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
        }
        return res;
      };
    }, {}], 176: [function (require, module, exports) {

      exports.decode = exports.parse = require('./decode');
      exports.encode = exports.stringify = require('./encode');
    }, { "./decode": 174, "./encode": 175 }], 177: [function (require, module, exports) {
      module.exports = require('./lib/_stream_duplex.js');
    }, { "./lib/_stream_duplex.js": 178 }], 178: [function (require, module, exports) {

      var processNextTick = require('process-nextick-args');

      var objectKeys = Object.keys || function (obj) {
        var keys = [];
        for (var key in obj) {
          keys.push(key);
        }return keys;
      };


      module.exports = Duplex;

      var util = require('core-util-is');
      util.inherits = require('inherits');


      var Readable = require('./_stream_readable');
      var Writable = require('./_stream_writable');

      util.inherits(Duplex, Readable);

      var keys = objectKeys(Writable.prototype);
      for (var v = 0; v < keys.length; v++) {
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }

      function Duplex(options) {
        if (!(this instanceof Duplex)) return new Duplex(options);

        Readable.call(this, options);
        Writable.call(this, options);

        if (options && options.readable === false) this.readable = false;

        if (options && options.writable === false) this.writable = false;

        this.allowHalfOpen = true;
        if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

        this.once('end', onend);
      }

      function onend() {
        if (this.allowHalfOpen || this._writableState.ended) return;

        processNextTick(onEndNT, this);
      }

      function onEndNT(self) {
        self.end();
      }

      Object.defineProperty(Duplex.prototype, 'destroyed', {
        get: function () {
          if (this._readableState === undefined || this._writableState === undefined) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function (value) {
          if (this._readableState === undefined || this._writableState === undefined) {
            return;
          }

          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      });

      Duplex.prototype._destroy = function (err, cb) {
        this.push(null);
        this.end();

        processNextTick(cb, err);
      };

      function forEach(xs, f) {
        for (var i = 0, l = xs.length; i < l; i++) {
          f(xs[i], i);
        }
      }
    }, { "./_stream_readable": 180, "./_stream_writable": 182, "core-util-is": 164, "inherits": 168, "process-nextick-args": 171 }], 179: [function (require, module, exports) {

      module.exports = PassThrough;

      var Transform = require('./_stream_transform');

      var util = require('core-util-is');
      util.inherits = require('inherits');


      util.inherits(PassThrough, Transform);

      function PassThrough(options) {
        if (!(this instanceof PassThrough)) return new PassThrough(options);

        Transform.call(this, options);
      }

      PassThrough.prototype._transform = function (chunk, encoding, cb) {
        cb(null, chunk);
      };
    }, { "./_stream_transform": 181, "core-util-is": 164, "inherits": 168 }], 180: [function (require, module, exports) {
      (function (process, global) {

        var processNextTick = require('process-nextick-args');


        module.exports = Readable;

        var isArray = require('isarray');

        var Duplex;


        Readable.ReadableState = ReadableState;

        var EE = require('events').EventEmitter;

        var EElistenerCount = function (emitter, type) {
          return emitter.listeners(type).length;
        };

        var Stream = require('./internal/streams/stream');

        var Buffer = require('safe-buffer').Buffer;
        var OurUint8Array = global.Uint8Array || function () {};
        function _uint8ArrayToBuffer(chunk) {
          return Buffer.from(chunk);
        }
        function _isUint8Array(obj) {
          return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
        }

        var util = require('core-util-is');
        util.inherits = require('inherits');

        var debugUtil = require('util');
        var debug = void 0;
        if (debugUtil && debugUtil.debuglog) {
          debug = debugUtil.debuglog('stream');
        } else {
          debug = function () {};
        }


        var BufferList = require('./internal/streams/BufferList');
        var destroyImpl = require('./internal/streams/destroy');
        var StringDecoder;

        util.inherits(Readable, Stream);

        var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

        function prependListener(emitter, event, fn) {
          if (typeof emitter.prependListener === 'function') {
            return emitter.prependListener(event, fn);
          } else {
            if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
          }
        }

        function ReadableState(options, stream) {
          Duplex = Duplex || require('./_stream_duplex');

          options = options || {};

          this.objectMode = !!options.objectMode;

          if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

          var hwm = options.highWaterMark;
          var defaultHwm = this.objectMode ? 16 : 16 * 1024;
          this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

          this.highWaterMark = Math.floor(this.highWaterMark);

          this.buffer = new BufferList();
          this.length = 0;
          this.pipes = null;
          this.pipesCount = 0;
          this.flowing = null;
          this.ended = false;
          this.endEmitted = false;
          this.reading = false;

          this.sync = true;

          this.needReadable = false;
          this.emittedReadable = false;
          this.readableListening = false;
          this.resumeScheduled = false;

          this.destroyed = false;

          this.defaultEncoding = options.defaultEncoding || 'utf8';

          this.awaitDrain = 0;

          this.readingMore = false;

          this.decoder = null;
          this.encoding = null;
          if (options.encoding) {
            if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
            this.decoder = new StringDecoder(options.encoding);
            this.encoding = options.encoding;
          }
        }

        function Readable(options) {
          Duplex = Duplex || require('./_stream_duplex');

          if (!(this instanceof Readable)) return new Readable(options);

          this._readableState = new ReadableState(options, this);

          this.readable = true;

          if (options) {
            if (typeof options.read === 'function') this._read = options.read;

            if (typeof options.destroy === 'function') this._destroy = options.destroy;
          }

          Stream.call(this);
        }

        Object.defineProperty(Readable.prototype, 'destroyed', {
          get: function () {
            if (this._readableState === undefined) {
              return false;
            }
            return this._readableState.destroyed;
          },
          set: function (value) {
            if (!this._readableState) {
              return;
            }

            this._readableState.destroyed = value;
          }
        });

        Readable.prototype.destroy = destroyImpl.destroy;
        Readable.prototype._undestroy = destroyImpl.undestroy;
        Readable.prototype._destroy = function (err, cb) {
          this.push(null);
          cb(err);
        };

        Readable.prototype.push = function (chunk, encoding) {
          var state = this._readableState;
          var skipChunkCheck;

          if (!state.objectMode) {
            if (typeof chunk === 'string') {
              encoding = encoding || state.defaultEncoding;
              if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
              }
              skipChunkCheck = true;
            }
          } else {
            skipChunkCheck = true;
          }

          return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
        };

        Readable.prototype.unshift = function (chunk) {
          return readableAddChunk(this, chunk, null, true, false);
        };

        function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
          var state = stream._readableState;
          if (chunk === null) {
            state.reading = false;
            onEofChunk(stream, state);
          } else {
            var er;
            if (!skipChunkCheck) er = chunkInvalid(state, chunk);
            if (er) {
              stream.emit('error', er);
            } else if (state.objectMode || chunk && chunk.length > 0) {
              if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                chunk = _uint8ArrayToBuffer(chunk);
              }

              if (addToFront) {
                if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
              } else if (state.ended) {
                stream.emit('error', new Error('stream.push() after EOF'));
              } else {
                state.reading = false;
                if (state.decoder && !encoding) {
                  chunk = state.decoder.write(chunk);
                  if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
                } else {
                  addChunk(stream, state, chunk, false);
                }
              }
            } else if (!addToFront) {
              state.reading = false;
            }
          }

          return needMoreData(state);
        }

        function addChunk(stream, state, chunk, addToFront) {
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

            if (state.needReadable) emitReadable(stream);
          }
          maybeReadMore(stream, state);
        }

        function chunkInvalid(state, chunk) {
          var er;
          if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
            er = new TypeError('Invalid non-string/buffer chunk');
          }
          return er;
        }

        function needMoreData(state) {
          return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
        }

        Readable.prototype.isPaused = function () {
          return this._readableState.flowing === false;
        };

        Readable.prototype.setEncoding = function (enc) {
          if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
          this._readableState.decoder = new StringDecoder(enc);
          this._readableState.encoding = enc;
          return this;
        };

        var MAX_HWM = 0x800000;
        function computeNewHighWaterMark(n) {
          if (n >= MAX_HWM) {
            n = MAX_HWM;
          } else {
            n--;
            n |= n >>> 1;
            n |= n >>> 2;
            n |= n >>> 4;
            n |= n >>> 8;
            n |= n >>> 16;
            n++;
          }
          return n;
        }

        function howMuchToRead(n, state) {
          if (n <= 0 || state.length === 0 && state.ended) return 0;
          if (state.objectMode) return 1;
          if (n !== n) {
            if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
          }

          if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
          if (n <= state.length) return n;

          if (!state.ended) {
            state.needReadable = true;
            return 0;
          }
          return state.length;
        }

        Readable.prototype.read = function (n) {
          debug('read', n);
          n = parseInt(n, 10);
          var state = this._readableState;
          var nOrig = n;

          if (n !== 0) state.emittedReadable = false;

          if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
            debug('read: emitReadable', state.length, state.ended);
            if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
            return null;
          }

          n = howMuchToRead(n, state);

          if (n === 0 && state.ended) {
            if (state.length === 0) endReadable(this);
            return null;
          }

          var doRead = state.needReadable;
          debug('need readable', doRead);

          if (state.length === 0 || state.length - n < state.highWaterMark) {
            doRead = true;
            debug('length less than watermark', doRead);
          }

          if (state.ended || state.reading) {
            doRead = false;
            debug('reading or ended', doRead);
          } else if (doRead) {
            debug('do read');
            state.reading = true;
            state.sync = true;

            if (state.length === 0) state.needReadable = true;

            this._read(state.highWaterMark);
            state.sync = false;

            if (!state.reading) n = howMuchToRead(nOrig, state);
          }

          var ret;
          if (n > 0) ret = fromList(n, state);else ret = null;

          if (ret === null) {
            state.needReadable = true;
            n = 0;
          } else {
            state.length -= n;
          }

          if (state.length === 0) {
            if (!state.ended) state.needReadable = true;

            if (nOrig !== n && state.ended) endReadable(this);
          }

          if (ret !== null) this.emit('data', ret);

          return ret;
        };

        function onEofChunk(stream, state) {
          if (state.ended) return;
          if (state.decoder) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) {
              state.buffer.push(chunk);
              state.length += state.objectMode ? 1 : chunk.length;
            }
          }
          state.ended = true;

          emitReadable(stream);
        }

        function emitReadable(stream) {
          var state = stream._readableState;
          state.needReadable = false;
          if (!state.emittedReadable) {
            debug('emitReadable', state.flowing);
            state.emittedReadable = true;
            if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
          }
        }

        function emitReadable_(stream) {
          debug('emit readable');
          stream.emit('readable');
          flow(stream);
        }

        function maybeReadMore(stream, state) {
          if (!state.readingMore) {
            state.readingMore = true;
            processNextTick(maybeReadMore_, stream, state);
          }
        }

        function maybeReadMore_(stream, state) {
          var len = state.length;
          while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
            debug('maybeReadMore read 0');
            stream.read(0);
            if (len === state.length) break;else len = state.length;
          }
          state.readingMore = false;
        }

        Readable.prototype._read = function (n) {
          this.emit('error', new Error('_read() is not implemented'));
        };

        Readable.prototype.pipe = function (dest, pipeOpts) {
          var src = this;
          var state = this._readableState;

          switch (state.pipesCount) {
            case 0:
              state.pipes = dest;
              break;
            case 1:
              state.pipes = [state.pipes, dest];
              break;
            default:
              state.pipes.push(dest);
              break;
          }
          state.pipesCount += 1;
          debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

          var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

          var endFn = doEnd ? onend : unpipe;
          if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

          dest.on('unpipe', onunpipe);
          function onunpipe(readable, unpipeInfo) {
            debug('onunpipe');
            if (readable === src) {
              if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
              }
            }
          }

          function onend() {
            debug('onend');
            dest.end();
          }

          var ondrain = pipeOnDrain(src);
          dest.on('drain', ondrain);

          var cleanedUp = false;
          function cleanup() {
            debug('cleanup');

            dest.removeListener('close', onclose);
            dest.removeListener('finish', onfinish);
            dest.removeListener('drain', ondrain);
            dest.removeListener('error', onerror);
            dest.removeListener('unpipe', onunpipe);
            src.removeListener('end', onend);
            src.removeListener('end', unpipe);
            src.removeListener('data', ondata);

            cleanedUp = true;

            if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
          }

          var increasedAwaitDrain = false;
          src.on('data', ondata);
          function ondata(chunk) {
            debug('ondata');
            increasedAwaitDrain = false;
            var ret = dest.write(chunk);
            if (false === ret && !increasedAwaitDrain) {
              if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', src._readableState.awaitDrain);
                src._readableState.awaitDrain++;
                increasedAwaitDrain = true;
              }
              src.pause();
            }
          }

          function onerror(er) {
            debug('onerror', er);
            unpipe();
            dest.removeListener('error', onerror);
            if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
          }

          prependListener(dest, 'error', onerror);

          function onclose() {
            dest.removeListener('finish', onfinish);
            unpipe();
          }
          dest.once('close', onclose);
          function onfinish() {
            debug('onfinish');
            dest.removeListener('close', onclose);
            unpipe();
          }
          dest.once('finish', onfinish);

          function unpipe() {
            debug('unpipe');
            src.unpipe(dest);
          }

          dest.emit('pipe', src);

          if (!state.flowing) {
            debug('pipe resume');
            src.resume();
          }

          return dest;
        };

        function pipeOnDrain(src) {
          return function () {
            var state = src._readableState;
            debug('pipeOnDrain', state.awaitDrain);
            if (state.awaitDrain) state.awaitDrain--;
            if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
              state.flowing = true;
              flow(src);
            }
          };
        }

        Readable.prototype.unpipe = function (dest) {
          var state = this._readableState;
          var unpipeInfo = { hasUnpiped: false };

          if (state.pipesCount === 0) return this;

          if (state.pipesCount === 1) {
            if (dest && dest !== state.pipes) return this;

            if (!dest) dest = state.pipes;

            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;
            if (dest) dest.emit('unpipe', this, unpipeInfo);
            return this;
          }

          if (!dest) {
            var dests = state.pipes;
            var len = state.pipesCount;
            state.pipes = null;
            state.pipesCount = 0;
            state.flowing = false;

            for (var i = 0; i < len; i++) {
              dests[i].emit('unpipe', this, unpipeInfo);
            }return this;
          }

          var index = indexOf(state.pipes, dest);
          if (index === -1) return this;

          state.pipes.splice(index, 1);
          state.pipesCount -= 1;
          if (state.pipesCount === 1) state.pipes = state.pipes[0];

          dest.emit('unpipe', this, unpipeInfo);

          return this;
        };

        Readable.prototype.on = function (ev, fn) {
          var res = Stream.prototype.on.call(this, ev, fn);

          if (ev === 'data') {
            if (this._readableState.flowing !== false) this.resume();
          } else if (ev === 'readable') {
            var state = this._readableState;
            if (!state.endEmitted && !state.readableListening) {
              state.readableListening = state.needReadable = true;
              state.emittedReadable = false;
              if (!state.reading) {
                processNextTick(nReadingNextTick, this);
              } else if (state.length) {
                emitReadable(this);
              }
            }
          }

          return res;
        };
        Readable.prototype.addListener = Readable.prototype.on;

        function nReadingNextTick(self) {
          debug('readable nexttick read 0');
          self.read(0);
        }

        Readable.prototype.resume = function () {
          var state = this._readableState;
          if (!state.flowing) {
            debug('resume');
            state.flowing = true;
            resume(this, state);
          }
          return this;
        };

        function resume(stream, state) {
          if (!state.resumeScheduled) {
            state.resumeScheduled = true;
            processNextTick(resume_, stream, state);
          }
        }

        function resume_(stream, state) {
          if (!state.reading) {
            debug('resume read 0');
            stream.read(0);
          }

          state.resumeScheduled = false;
          state.awaitDrain = 0;
          stream.emit('resume');
          flow(stream);
          if (state.flowing && !state.reading) stream.read(0);
        }

        Readable.prototype.pause = function () {
          debug('call pause flowing=%j', this._readableState.flowing);
          if (false !== this._readableState.flowing) {
            debug('pause');
            this._readableState.flowing = false;
            this.emit('pause');
          }
          return this;
        };

        function flow(stream) {
          var state = stream._readableState;
          debug('flow', state.flowing);
          while (state.flowing && stream.read() !== null) {}
        }

        Readable.prototype.wrap = function (stream) {
          var state = this._readableState;
          var paused = false;

          var self = this;
          stream.on('end', function () {
            debug('wrapped end');
            if (state.decoder && !state.ended) {
              var chunk = state.decoder.end();
              if (chunk && chunk.length) self.push(chunk);
            }

            self.push(null);
          });

          stream.on('data', function (chunk) {
            debug('wrapped data');
            if (state.decoder) chunk = state.decoder.write(chunk);

            if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

            var ret = self.push(chunk);
            if (!ret) {
              paused = true;
              stream.pause();
            }
          });

          for (var i in stream) {
            if (this[i] === undefined && typeof stream[i] === 'function') {
              this[i] = function (method) {
                return function () {
                  return stream[method].apply(stream, arguments);
                };
              }(i);
            }
          }

          for (var n = 0; n < kProxyEvents.length; n++) {
            stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
          }

          self._read = function (n) {
            debug('wrapped _read', n);
            if (paused) {
              paused = false;
              stream.resume();
            }
          };

          return self;
        };

        Readable._fromList = fromList;

        function fromList(n, state) {
          if (state.length === 0) return null;

          var ret;
          if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
            if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
            state.buffer.clear();
          } else {
            ret = fromListPartial(n, state.buffer, state.decoder);
          }

          return ret;
        }

        function fromListPartial(n, list, hasStrings) {
          var ret;
          if (n < list.head.data.length) {
            ret = list.head.data.slice(0, n);
            list.head.data = list.head.data.slice(n);
          } else if (n === list.head.data.length) {
            ret = list.shift();
          } else {
            ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
          }
          return ret;
        }

        function copyFromBufferString(n, list) {
          var p = list.head;
          var c = 1;
          var ret = p.data;
          n -= ret.length;
          while (p = p.next) {
            var str = p.data;
            var nb = n > str.length ? str.length : n;
            if (nb === str.length) ret += str;else ret += str.slice(0, n);
            n -= nb;
            if (n === 0) {
              if (nb === str.length) {
                ++c;
                if (p.next) list.head = p.next;else list.head = list.tail = null;
              } else {
                list.head = p;
                p.data = str.slice(nb);
              }
              break;
            }
            ++c;
          }
          list.length -= c;
          return ret;
        }

        function copyFromBuffer(n, list) {
          var ret = Buffer.allocUnsafe(n);
          var p = list.head;
          var c = 1;
          p.data.copy(ret);
          n -= p.data.length;
          while (p = p.next) {
            var buf = p.data;
            var nb = n > buf.length ? buf.length : n;
            buf.copy(ret, ret.length - n, 0, nb);
            n -= nb;
            if (n === 0) {
              if (nb === buf.length) {
                ++c;
                if (p.next) list.head = p.next;else list.head = list.tail = null;
              } else {
                list.head = p;
                p.data = buf.slice(nb);
              }
              break;
            }
            ++c;
          }
          list.length -= c;
          return ret;
        }

        function endReadable(stream) {
          var state = stream._readableState;

          if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

          if (!state.endEmitted) {
            state.ended = true;
            processNextTick(endReadableNT, state, stream);
          }
        }

        function endReadableNT(state, stream) {
          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit('end');
          }
        }

        function forEach(xs, f) {
          for (var i = 0, l = xs.length; i < l; i++) {
            f(xs[i], i);
          }
        }

        function indexOf(xs, x) {
          for (var i = 0, l = xs.length; i < l; i++) {
            if (xs[i] === x) return i;
          }
          return -1;
        }
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./_stream_duplex": 178, "./internal/streams/BufferList": 183, "./internal/streams/destroy": 184, "./internal/streams/stream": 185, "_process": 172, "core-util-is": 164, "events": 165, "inherits": 168, "isarray": 170, "process-nextick-args": 171, "safe-buffer": 190, "string_decoder/": 196, "util": 161 }], 181: [function (require, module, exports) {

      module.exports = Transform;

      var Duplex = require('./_stream_duplex');

      var util = require('core-util-is');
      util.inherits = require('inherits');


      util.inherits(Transform, Duplex);

      function TransformState(stream) {
        this.afterTransform = function (er, data) {
          return afterTransform(stream, er, data);
        };

        this.needTransform = false;
        this.transforming = false;
        this.writecb = null;
        this.writechunk = null;
        this.writeencoding = null;
      }

      function afterTransform(stream, er, data) {
        var ts = stream._transformState;
        ts.transforming = false;

        var cb = ts.writecb;

        if (!cb) {
          return stream.emit('error', new Error('write callback called multiple times'));
        }

        ts.writechunk = null;
        ts.writecb = null;

        if (data !== null && data !== undefined) stream.push(data);

        cb(er);

        var rs = stream._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
          stream._read(rs.highWaterMark);
        }
      }

      function Transform(options) {
        if (!(this instanceof Transform)) return new Transform(options);

        Duplex.call(this, options);

        this._transformState = new TransformState(this);

        var stream = this;

        this._readableState.needReadable = true;

        this._readableState.sync = false;

        if (options) {
          if (typeof options.transform === 'function') this._transform = options.transform;

          if (typeof options.flush === 'function') this._flush = options.flush;
        }

        this.once('prefinish', function () {
          if (typeof this._flush === 'function') this._flush(function (er, data) {
            done(stream, er, data);
          });else done(stream);
        });
      }

      Transform.prototype.push = function (chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
      };

      Transform.prototype._transform = function (chunk, encoding, cb) {
        throw new Error('_transform() is not implemented');
      };

      Transform.prototype._write = function (chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
          var rs = this._readableState;
          if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
        }
      };

      Transform.prototype._read = function (n) {
        var ts = this._transformState;

        if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
          ts.transforming = true;
          this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
          ts.needTransform = true;
        }
      };

      Transform.prototype._destroy = function (err, cb) {
        var _this = this;

        Duplex.prototype._destroy.call(this, err, function (err2) {
          cb(err2);
          _this.emit('close');
        });
      };

      function done(stream, er, data) {
        if (er) return stream.emit('error', er);

        if (data !== null && data !== undefined) stream.push(data);

        var ws = stream._writableState;
        var ts = stream._transformState;

        if (ws.length) throw new Error('Calling transform done when ws.length != 0');

        if (ts.transforming) throw new Error('Calling transform done when still transforming');

        return stream.push(null);
      }
    }, { "./_stream_duplex": 178, "core-util-is": 164, "inherits": 168 }], 182: [function (require, module, exports) {
      (function (process, global) {

        var processNextTick = require('process-nextick-args');


        module.exports = Writable;

        function WriteReq(chunk, encoding, cb) {
          this.chunk = chunk;
          this.encoding = encoding;
          this.callback = cb;
          this.next = null;
        }

        function CorkedRequest(state) {
          var _this = this;

          this.next = null;
          this.entry = null;
          this.finish = function () {
            onCorkedFinish(_this, state);
          };
        }

        var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;

        var Duplex;


        Writable.WritableState = WritableState;

        var util = require('core-util-is');
        util.inherits = require('inherits');

        var internalUtil = {
          deprecate: require('util-deprecate')
        };

        var Stream = require('./internal/streams/stream');

        var Buffer = require('safe-buffer').Buffer;
        var OurUint8Array = global.Uint8Array || function () {};
        function _uint8ArrayToBuffer(chunk) {
          return Buffer.from(chunk);
        }
        function _isUint8Array(obj) {
          return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
        }


        var destroyImpl = require('./internal/streams/destroy');

        util.inherits(Writable, Stream);

        function nop() {}

        function WritableState(options, stream) {
          Duplex = Duplex || require('./_stream_duplex');

          options = options || {};

          this.objectMode = !!options.objectMode;

          if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

          var hwm = options.highWaterMark;
          var defaultHwm = this.objectMode ? 16 : 16 * 1024;
          this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

          this.highWaterMark = Math.floor(this.highWaterMark);

          this.finalCalled = false;

          this.needDrain = false;

          this.ending = false;

          this.ended = false;

          this.finished = false;

          this.destroyed = false;

          var noDecode = options.decodeStrings === false;
          this.decodeStrings = !noDecode;

          this.defaultEncoding = options.defaultEncoding || 'utf8';

          this.length = 0;

          this.writing = false;

          this.corked = 0;

          this.sync = true;

          this.bufferProcessing = false;

          this.onwrite = function (er) {
            onwrite(stream, er);
          };

          this.writecb = null;

          this.writelen = 0;

          this.bufferedRequest = null;
          this.lastBufferedRequest = null;

          this.pendingcb = 0;

          this.prefinished = false;

          this.errorEmitted = false;

          this.bufferedRequestCount = 0;

          this.corkedRequestsFree = new CorkedRequest(this);
        }

        WritableState.prototype.getBuffer = function getBuffer() {
          var current = this.bufferedRequest;
          var out = [];
          while (current) {
            out.push(current);
            current = current.next;
          }
          return out;
        };

        (function () {
          try {
            Object.defineProperty(WritableState.prototype, 'buffer', {
              get: internalUtil.deprecate(function () {
                return this.getBuffer();
              }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
            });
          } catch (_) {}
        })();

        var realHasInstance;
        if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
          realHasInstance = Function.prototype[Symbol.hasInstance];
          Object.defineProperty(Writable, Symbol.hasInstance, {
            value: function (object) {
              if (realHasInstance.call(this, object)) return true;

              return object && object._writableState instanceof WritableState;
            }
          });
        } else {
          realHasInstance = function (object) {
            return object instanceof this;
          };
        }

        function Writable(options) {
          Duplex = Duplex || require('./_stream_duplex');

          if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
            return new Writable(options);
          }

          this._writableState = new WritableState(options, this);

          this.writable = true;

          if (options) {
            if (typeof options.write === 'function') this._write = options.write;

            if (typeof options.writev === 'function') this._writev = options.writev;

            if (typeof options.destroy === 'function') this._destroy = options.destroy;

            if (typeof options.final === 'function') this._final = options.final;
          }

          Stream.call(this);
        }

        Writable.prototype.pipe = function () {
          this.emit('error', new Error('Cannot pipe, not readable'));
        };

        function writeAfterEnd(stream, cb) {
          var er = new Error('write after end');

          stream.emit('error', er);
          processNextTick(cb, er);
        }

        function validChunk(stream, state, chunk, cb) {
          var valid = true;
          var er = false;

          if (chunk === null) {
            er = new TypeError('May not write null values to stream');
          } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
            er = new TypeError('Invalid non-string/buffer chunk');
          }
          if (er) {
            stream.emit('error', er);
            processNextTick(cb, er);
            valid = false;
          }
          return valid;
        }

        Writable.prototype.write = function (chunk, encoding, cb) {
          var state = this._writableState;
          var ret = false;
          var isBuf = _isUint8Array(chunk) && !state.objectMode;

          if (isBuf && !Buffer.isBuffer(chunk)) {
            chunk = _uint8ArrayToBuffer(chunk);
          }

          if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
          }

          if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

          if (typeof cb !== 'function') cb = nop;

          if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
            state.pendingcb++;
            ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
          }

          return ret;
        };

        Writable.prototype.cork = function () {
          var state = this._writableState;

          state.corked++;
        };

        Writable.prototype.uncork = function () {
          var state = this._writableState;

          if (state.corked) {
            state.corked--;

            if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
          }
        };

        Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
          if (typeof encoding === 'string') encoding = encoding.toLowerCase();
          if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
          this._writableState.defaultEncoding = encoding;
          return this;
        };

        function decodeChunk(state, chunk, encoding) {
          if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
            chunk = Buffer.from(chunk, encoding);
          }
          return chunk;
        }

        function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
          if (!isBuf) {
            var newChunk = decodeChunk(state, chunk, encoding);
            if (chunk !== newChunk) {
              isBuf = true;
              encoding = 'buffer';
              chunk = newChunk;
            }
          }
          var len = state.objectMode ? 1 : chunk.length;

          state.length += len;

          var ret = state.length < state.highWaterMark;

          if (!ret) state.needDrain = true;

          if (state.writing || state.corked) {
            var last = state.lastBufferedRequest;
            state.lastBufferedRequest = {
              chunk: chunk,
              encoding: encoding,
              isBuf: isBuf,
              callback: cb,
              next: null
            };
            if (last) {
              last.next = state.lastBufferedRequest;
            } else {
              state.bufferedRequest = state.lastBufferedRequest;
            }
            state.bufferedRequestCount += 1;
          } else {
            doWrite(stream, state, false, len, chunk, encoding, cb);
          }

          return ret;
        }

        function doWrite(stream, state, writev, len, chunk, encoding, cb) {
          state.writelen = len;
          state.writecb = cb;
          state.writing = true;
          state.sync = true;
          if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
          state.sync = false;
        }

        function onwriteError(stream, state, sync, er, cb) {
          --state.pendingcb;

          if (sync) {
            processNextTick(cb, er);

            processNextTick(finishMaybe, stream, state);
            stream._writableState.errorEmitted = true;
            stream.emit('error', er);
          } else {
            cb(er);
            stream._writableState.errorEmitted = true;
            stream.emit('error', er);

            finishMaybe(stream, state);
          }
        }

        function onwriteStateUpdate(state) {
          state.writing = false;
          state.writecb = null;
          state.length -= state.writelen;
          state.writelen = 0;
        }

        function onwrite(stream, er) {
          var state = stream._writableState;
          var sync = state.sync;
          var cb = state.writecb;

          onwriteStateUpdate(state);

          if (er) onwriteError(stream, state, sync, er, cb);else {
            var finished = needFinish(state);

            if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
              clearBuffer(stream, state);
            }

            if (sync) {
              asyncWrite(afterWrite, stream, state, finished, cb);
            } else {
              afterWrite(stream, state, finished, cb);
            }
          }
        }

        function afterWrite(stream, state, finished, cb) {
          if (!finished) onwriteDrain(stream, state);
          state.pendingcb--;
          cb();
          finishMaybe(stream, state);
        }

        function onwriteDrain(stream, state) {
          if (state.length === 0 && state.needDrain) {
            state.needDrain = false;
            stream.emit('drain');
          }
        }

        function clearBuffer(stream, state) {
          state.bufferProcessing = true;
          var entry = state.bufferedRequest;

          if (stream._writev && entry && entry.next) {
            var l = state.bufferedRequestCount;
            var buffer = new Array(l);
            var holder = state.corkedRequestsFree;
            holder.entry = entry;

            var count = 0;
            var allBuffers = true;
            while (entry) {
              buffer[count] = entry;
              if (!entry.isBuf) allBuffers = false;
              entry = entry.next;
              count += 1;
            }
            buffer.allBuffers = allBuffers;

            doWrite(stream, state, true, state.length, buffer, '', holder.finish);

            state.pendingcb++;
            state.lastBufferedRequest = null;
            if (holder.next) {
              state.corkedRequestsFree = holder.next;
              holder.next = null;
            } else {
              state.corkedRequestsFree = new CorkedRequest(state);
            }
          } else {
            while (entry) {
              var chunk = entry.chunk;
              var encoding = entry.encoding;
              var cb = entry.callback;
              var len = state.objectMode ? 1 : chunk.length;

              doWrite(stream, state, false, len, chunk, encoding, cb);
              entry = entry.next;

              if (state.writing) {
                break;
              }
            }

            if (entry === null) state.lastBufferedRequest = null;
          }

          state.bufferedRequestCount = 0;
          state.bufferedRequest = entry;
          state.bufferProcessing = false;
        }

        Writable.prototype._write = function (chunk, encoding, cb) {
          cb(new Error('_write() is not implemented'));
        };

        Writable.prototype._writev = null;

        Writable.prototype.end = function (chunk, encoding, cb) {
          var state = this._writableState;

          if (typeof chunk === 'function') {
            cb = chunk;
            chunk = null;
            encoding = null;
          } else if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
          }

          if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

          if (state.corked) {
            state.corked = 1;
            this.uncork();
          }

          if (!state.ending && !state.finished) endWritable(this, state, cb);
        };

        function needFinish(state) {
          return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
        }
        function callFinal(stream, state) {
          stream._final(function (err) {
            state.pendingcb--;
            if (err) {
              stream.emit('error', err);
            }
            state.prefinished = true;
            stream.emit('prefinish');
            finishMaybe(stream, state);
          });
        }
        function prefinish(stream, state) {
          if (!state.prefinished && !state.finalCalled) {
            if (typeof stream._final === 'function') {
              state.pendingcb++;
              state.finalCalled = true;
              processNextTick(callFinal, stream, state);
            } else {
              state.prefinished = true;
              stream.emit('prefinish');
            }
          }
        }

        function finishMaybe(stream, state) {
          var need = needFinish(state);
          if (need) {
            prefinish(stream, state);
            if (state.pendingcb === 0) {
              state.finished = true;
              stream.emit('finish');
            }
          }
          return need;
        }

        function endWritable(stream, state, cb) {
          state.ending = true;
          finishMaybe(stream, state);
          if (cb) {
            if (state.finished) processNextTick(cb);else stream.once('finish', cb);
          }
          state.ended = true;
          stream.writable = false;
        }

        function onCorkedFinish(corkReq, state, err) {
          var entry = corkReq.entry;
          corkReq.entry = null;
          while (entry) {
            var cb = entry.callback;
            state.pendingcb--;
            cb(err);
            entry = entry.next;
          }
          if (state.corkedRequestsFree) {
            state.corkedRequestsFree.next = corkReq;
          } else {
            state.corkedRequestsFree = corkReq;
          }
        }

        Object.defineProperty(Writable.prototype, 'destroyed', {
          get: function () {
            if (this._writableState === undefined) {
              return false;
            }
            return this._writableState.destroyed;
          },
          set: function (value) {
            if (!this._writableState) {
              return;
            }

            this._writableState.destroyed = value;
          }
        });

        Writable.prototype.destroy = destroyImpl.destroy;
        Writable.prototype._undestroy = destroyImpl.undestroy;
        Writable.prototype._destroy = function (err, cb) {
          this.end();
          cb(err);
        };
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./_stream_duplex": 178, "./internal/streams/destroy": 184, "./internal/streams/stream": 185, "_process": 172, "core-util-is": 164, "inherits": 168, "process-nextick-args": 171, "safe-buffer": 190, "util-deprecate": 200 }], 183: [function (require, module, exports) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Buffer = require('safe-buffer').Buffer;


      function copyBuffer(src, target, offset) {
        src.copy(target, offset);
      }

      module.exports = function () {
        function BufferList() {
          _classCallCheck(this, BufferList);

          this.head = null;
          this.tail = null;
          this.length = 0;
        }

        BufferList.prototype.push = function push(v) {
          var entry = { data: v, next: null };
          if (this.length > 0) this.tail.next = entry;else this.head = entry;
          this.tail = entry;
          ++this.length;
        };

        BufferList.prototype.unshift = function unshift(v) {
          var entry = { data: v, next: this.head };
          if (this.length === 0) this.tail = entry;
          this.head = entry;
          ++this.length;
        };

        BufferList.prototype.shift = function shift() {
          if (this.length === 0) return;
          var ret = this.head.data;
          if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
          --this.length;
          return ret;
        };

        BufferList.prototype.clear = function clear() {
          this.head = this.tail = null;
          this.length = 0;
        };

        BufferList.prototype.join = function join(s) {
          if (this.length === 0) return '';
          var p = this.head;
          var ret = '' + p.data;
          while (p = p.next) {
            ret += s + p.data;
          }return ret;
        };

        BufferList.prototype.concat = function concat(n) {
          if (this.length === 0) return Buffer.alloc(0);
          if (this.length === 1) return this.head.data;
          var ret = Buffer.allocUnsafe(n >>> 0);
          var p = this.head;
          var i = 0;
          while (p) {
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
          }
          return ret;
        };

        return BufferList;
      }();
    }, { "safe-buffer": 190 }], 184: [function (require, module, exports) {

      var processNextTick = require('process-nextick-args');

      function destroy(err, cb) {
        var _this = this;

        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;

        if (readableDestroyed || writableDestroyed) {
          if (cb) {
            cb(err);
          } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
            processNextTick(emitErrorNT, this, err);
          }
          return;
        }

        if (this._readableState) {
          this._readableState.destroyed = true;
        }

        if (this._writableState) {
          this._writableState.destroyed = true;
        }

        this._destroy(err || null, function (err) {
          if (!cb && err) {
            processNextTick(emitErrorNT, _this, err);
            if (_this._writableState) {
              _this._writableState.errorEmitted = true;
            }
          } else if (cb) {
            cb(err);
          }
        });
      }

      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }

        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      }

      function emitErrorNT(self, err) {
        self.emit('error', err);
      }

      module.exports = {
        destroy: destroy,
        undestroy: undestroy
      };
    }, { "process-nextick-args": 171 }], 185: [function (require, module, exports) {
      module.exports = require('events').EventEmitter;
    }, { "events": 165 }], 186: [function (require, module, exports) {
      module.exports = require('./readable').PassThrough;
    }, { "./readable": 187 }], 187: [function (require, module, exports) {
      exports = module.exports = require('./lib/_stream_readable.js');
      exports.Stream = exports;
      exports.Readable = exports;
      exports.Writable = require('./lib/_stream_writable.js');
      exports.Duplex = require('./lib/_stream_duplex.js');
      exports.Transform = require('./lib/_stream_transform.js');
      exports.PassThrough = require('./lib/_stream_passthrough.js');
    }, { "./lib/_stream_duplex.js": 178, "./lib/_stream_passthrough.js": 179, "./lib/_stream_readable.js": 180, "./lib/_stream_transform.js": 181, "./lib/_stream_writable.js": 182 }], 188: [function (require, module, exports) {
      module.exports = require('./readable').Transform;
    }, { "./readable": 187 }], 189: [function (require, module, exports) {
      module.exports = require('./lib/_stream_writable.js');
    }, { "./lib/_stream_writable.js": 182 }], 190: [function (require, module, exports) {
      arguments[4][61][0].apply(exports, arguments);
    }, { "buffer": 162, "dup": 61 }], 191: [function (require, module, exports) {

      module.exports = Stream;

      var EE = require('events').EventEmitter;
      var inherits = require('inherits');

      inherits(Stream, EE);
      Stream.Readable = require('readable-stream/readable.js');
      Stream.Writable = require('readable-stream/writable.js');
      Stream.Duplex = require('readable-stream/duplex.js');
      Stream.Transform = require('readable-stream/transform.js');
      Stream.PassThrough = require('readable-stream/passthrough.js');

      Stream.Stream = Stream;

      function Stream() {
        EE.call(this);
      }

      Stream.prototype.pipe = function (dest, options) {
        var source = this;

        function ondata(chunk) {
          if (dest.writable) {
            if (false === dest.write(chunk) && source.pause) {
              source.pause();
            }
          }
        }

        source.on('data', ondata);

        function ondrain() {
          if (source.readable && source.resume) {
            source.resume();
          }
        }

        dest.on('drain', ondrain);

        if (!dest._isStdio && (!options || options.end !== false)) {
          source.on('end', onend);
          source.on('close', onclose);
        }

        var didOnEnd = false;
        function onend() {
          if (didOnEnd) return;
          didOnEnd = true;

          dest.end();
        }

        function onclose() {
          if (didOnEnd) return;
          didOnEnd = true;

          if (typeof dest.destroy === 'function') dest.destroy();
        }

        function onerror(er) {
          cleanup();
          if (EE.listenerCount(this, 'error') === 0) {
            throw er;
          }
        }

        source.on('error', onerror);
        dest.on('error', onerror);

        function cleanup() {
          source.removeListener('data', ondata);
          dest.removeListener('drain', ondrain);

          source.removeListener('end', onend);
          source.removeListener('close', onclose);

          source.removeListener('error', onerror);
          dest.removeListener('error', onerror);

          source.removeListener('end', cleanup);
          source.removeListener('close', cleanup);

          dest.removeListener('close', cleanup);
        }

        source.on('end', cleanup);
        source.on('close', cleanup);

        dest.on('close', cleanup);

        dest.emit('pipe', source);

        return dest;
      };
    }, { "events": 165, "inherits": 168, "readable-stream/duplex.js": 177, "readable-stream/passthrough.js": 186, "readable-stream/readable.js": 187, "readable-stream/transform.js": 188, "readable-stream/writable.js": 189 }], 192: [function (require, module, exports) {
      (function (global) {
        var ClientRequest = require('./lib/request');
        var extend = require('xtend');
        var statusCodes = require('builtin-status-codes');
        var url = require('url');

        var http = exports;

        http.request = function (opts, cb) {
          if (typeof opts === 'string') opts = url.parse(opts);else opts = extend(opts);

          var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : '';

          var protocol = opts.protocol || defaultProtocol;
          var host = opts.hostname || opts.host;
          var port = opts.port;
          var path = opts.path || '/';

          if (host && host.indexOf(':') !== -1) host = '[' + host + ']';

          opts.url = (host ? protocol + '//' + host : '') + (port ? ':' + port : '') + path;
          opts.method = (opts.method || 'GET').toUpperCase();
          opts.headers = opts.headers || {};

          var req = new ClientRequest(opts);
          if (cb) req.on('response', cb);
          return req;
        };

        http.get = function get(opts, cb) {
          var req = http.request(opts, cb);
          req.end();
          return req;
        };

        http.Agent = function () {};
        http.Agent.defaultMaxSockets = 4;

        http.STATUS_CODES = statusCodes;

        http.METHODS = ['CHECKOUT', 'CONNECT', 'COPY', 'DELETE', 'GET', 'HEAD', 'LOCK', 'M-SEARCH', 'MERGE', 'MKACTIVITY', 'MKCOL', 'MOVE', 'NOTIFY', 'OPTIONS', 'PATCH', 'POST', 'PROPFIND', 'PROPPATCH', 'PURGE', 'PUT', 'REPORT', 'SEARCH', 'SUBSCRIBE', 'TRACE', 'UNLOCK', 'UNSUBSCRIBE'];
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./lib/request": 194, "builtin-status-codes": 163, "url": 198, "xtend": 204 }], 193: [function (require, module, exports) {
      (function (global) {
        exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream);

        exports.blobConstructor = false;
        try {
          new Blob([new ArrayBuffer(1)]);
          exports.blobConstructor = true;
        } catch (e) {}

        var xhr;
        function getXHR() {
          if (xhr !== undefined) return xhr;

          if (global.XMLHttpRequest) {
            xhr = new global.XMLHttpRequest();

            try {
              xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com');
            } catch (e) {
              xhr = null;
            }
          } else {
            xhr = null;
          }
          return xhr;
        }

        function checkTypeSupport(type) {
          var xhr = getXHR();
          if (!xhr) return false;
          try {
            xhr.responseType = type;
            return xhr.responseType === type;
          } catch (e) {}
          return false;
        }

        var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined';
        var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice);

        exports.arraybuffer = exports.fetch || haveArrayBuffer && checkTypeSupport('arraybuffer');

        exports.msstream = !exports.fetch && haveSlice && checkTypeSupport('ms-stream');
        exports.mozchunkedarraybuffer = !exports.fetch && haveArrayBuffer && checkTypeSupport('moz-chunked-arraybuffer');

        exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false);

        exports.vbArray = isFunction(global.VBArray);

        function isFunction(value) {
          return typeof value === 'function';
        }

        xhr = null;
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 194: [function (require, module, exports) {
      (function (process, global, Buffer) {
        var capability = require('./capability');
        var inherits = require('inherits');
        var response = require('./response');
        var stream = require('readable-stream');
        var toArrayBuffer = require('to-arraybuffer');

        var IncomingMessage = response.IncomingMessage;
        var rStates = response.readyStates;

        function decideMode(preferBinary, useFetch) {
          if (capability.fetch && useFetch) {
            return 'fetch';
          } else if (capability.mozchunkedarraybuffer) {
            return 'moz-chunked-arraybuffer';
          } else if (capability.msstream) {
            return 'ms-stream';
          } else if (capability.arraybuffer && preferBinary) {
            return 'arraybuffer';
          } else if (capability.vbArray && preferBinary) {
            return 'text:vbarray';
          } else {
            return 'text';
          }
        }

        var ClientRequest = module.exports = function (opts) {
          var self = this;
          stream.Writable.call(self);

          self._opts = opts;
          self._body = [];
          self._headers = {};
          if (opts.auth) self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'));
          Object.keys(opts.headers).forEach(function (name) {
            self.setHeader(name, opts.headers[name]);
          });

          var preferBinary;
          var useFetch = true;
          if (opts.mode === 'disable-fetch' || 'timeout' in opts) {
            useFetch = false;
            preferBinary = true;
          } else if (opts.mode === 'prefer-streaming') {
            preferBinary = false;
          } else if (opts.mode === 'allow-wrong-content-type') {
            preferBinary = !capability.overrideMimeType;
          } else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
            preferBinary = true;
          } else {
            throw new Error('Invalid value for opts.mode');
          }
          self._mode = decideMode(preferBinary, useFetch);

          self.on('finish', function () {
            self._onFinish();
          });
        };

        inherits(ClientRequest, stream.Writable);

        ClientRequest.prototype.setHeader = function (name, value) {
          var self = this;
          var lowerName = name.toLowerCase();

          if (unsafeHeaders.indexOf(lowerName) !== -1) return;

          self._headers[lowerName] = {
            name: name,
            value: value
          };
        };

        ClientRequest.prototype.getHeader = function (name) {
          var header = this._headers[name.toLowerCase()];
          if (header) return header.value;
          return null;
        };

        ClientRequest.prototype.removeHeader = function (name) {
          var self = this;
          delete self._headers[name.toLowerCase()];
        };

        ClientRequest.prototype._onFinish = function () {
          var self = this;

          if (self._destroyed) return;
          var opts = self._opts;

          var headersObj = self._headers;
          var body = null;
          if (opts.method !== 'GET' && opts.method !== 'HEAD') {
            if (capability.blobConstructor) {
              body = new global.Blob(self._body.map(function (buffer) {
                return toArrayBuffer(buffer);
              }), {
                type: (headersObj['content-type'] || {}).value || ''
              });
            } else {
              body = Buffer.concat(self._body).toString();
            }
          }

          var headersList = [];
          Object.keys(headersObj).forEach(function (keyName) {
            var name = headersObj[keyName].name;
            var value = headersObj[keyName].value;
            if (Array.isArray(value)) {
              value.forEach(function (v) {
                headersList.push([name, v]);
              });
            } else {
              headersList.push([name, value]);
            }
          });

          if (self._mode === 'fetch') {
            global.fetch(self._opts.url, {
              method: self._opts.method,
              headers: headersList,
              body: body || undefined,
              mode: 'cors',
              credentials: opts.withCredentials ? 'include' : 'same-origin'
            }).then(function (response) {
              self._fetchResponse = response;
              self._connect();
            }, function (reason) {
              self.emit('error', reason);
            });
          } else {
            var xhr = self._xhr = new global.XMLHttpRequest();
            try {
              xhr.open(self._opts.method, self._opts.url, true);
            } catch (err) {
              process.nextTick(function () {
                self.emit('error', err);
              });
              return;
            }

            if ('responseType' in xhr) xhr.responseType = self._mode.split(':')[0];

            if ('withCredentials' in xhr) xhr.withCredentials = !!opts.withCredentials;

            if (self._mode === 'text' && 'overrideMimeType' in xhr) xhr.overrideMimeType('text/plain; charset=x-user-defined');

            if ('timeout' in opts) {
              xhr.timeout = opts.timeout;
              xhr.ontimeout = function () {
                self.emit('timeout');
              };
            }

            headersList.forEach(function (header) {
              xhr.setRequestHeader(header[0], header[1]);
            });

            self._response = null;
            xhr.onreadystatechange = function () {
              switch (xhr.readyState) {
                case rStates.LOADING:
                case rStates.DONE:
                  self._onXHRProgress();
                  break;
              }
            };

            if (self._mode === 'moz-chunked-arraybuffer') {
              xhr.onprogress = function () {
                self._onXHRProgress();
              };
            }

            xhr.onerror = function () {
              if (self._destroyed) return;
              self.emit('error', new Error('XHR error'));
            };

            try {
              xhr.send(body);
            } catch (err) {
              process.nextTick(function () {
                self.emit('error', err);
              });
              return;
            }
          }
        };

        function statusValid(xhr) {
          try {
            var status = xhr.status;
            return status !== null && status !== 0;
          } catch (e) {
            return false;
          }
        }

        ClientRequest.prototype._onXHRProgress = function () {
          var self = this;

          if (!statusValid(self._xhr) || self._destroyed) return;

          if (!self._response) self._connect();

          self._response._onXHRProgress();
        };

        ClientRequest.prototype._connect = function () {
          var self = this;

          if (self._destroyed) return;

          self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode);
          self._response.on('error', function (err) {
            self.emit('error', err);
          });

          self.emit('response', self._response);
        };

        ClientRequest.prototype._write = function (chunk, encoding, cb) {
          var self = this;

          self._body.push(chunk);
          cb();
        };

        ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function () {
          var self = this;
          self._destroyed = true;
          if (self._response) self._response._destroyed = true;
          if (self._xhr) self._xhr.abort();
        };

        ClientRequest.prototype.end = function (data, encoding, cb) {
          var self = this;
          if (typeof data === 'function') {
            cb = data;
            data = undefined;
          }

          stream.Writable.prototype.end.call(self, data, encoding, cb);
        };

        ClientRequest.prototype.flushHeaders = function () {};
        ClientRequest.prototype.setTimeout = function () {};
        ClientRequest.prototype.setNoDelay = function () {};
        ClientRequest.prototype.setSocketKeepAlive = function () {};

        var unsafeHeaders = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'user-agent', 'via'];
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer);
    }, { "./capability": 193, "./response": 195, "_process": 172, "buffer": 162, "inherits": 168, "readable-stream": 187, "to-arraybuffer": 197 }], 195: [function (require, module, exports) {
      (function (process, global, Buffer) {
        var capability = require('./capability');
        var inherits = require('inherits');
        var stream = require('readable-stream');

        var rStates = exports.readyStates = {
          UNSENT: 0,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: 4
        };

        var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode) {
          var self = this;
          stream.Readable.call(self);

          self._mode = mode;
          self.headers = {};
          self.rawHeaders = [];
          self.trailers = {};
          self.rawTrailers = [];

          self.on('end', function () {
            process.nextTick(function () {
              self.emit('close');
            });
          });

          if (mode === 'fetch') {
            self._fetchResponse = response;

            self.url = response.url;
            self.statusCode = response.status;
            self.statusMessage = response.statusText;

            response.headers.forEach(function (header, key) {
              self.headers[key.toLowerCase()] = header;
              self.rawHeaders.push(key, header);
            });

            var reader = response.body.getReader();
            function read() {
              reader.read().then(function (result) {
                if (self._destroyed) return;
                if (result.done) {
                  self.push(null);
                  return;
                }
                self.push(new Buffer(result.value));
                read();
              }).catch(function (err) {
                self.emit('error', err);
              });
            }
            read();
          } else {
            self._xhr = xhr;
            self._pos = 0;

            self.url = xhr.responseURL;
            self.statusCode = xhr.status;
            self.statusMessage = xhr.statusText;
            var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
            headers.forEach(function (header) {
              var matches = header.match(/^([^:]+):\s*(.*)/);
              if (matches) {
                var key = matches[1].toLowerCase();
                if (key === 'set-cookie') {
                  if (self.headers[key] === undefined) {
                    self.headers[key] = [];
                  }
                  self.headers[key].push(matches[2]);
                } else if (self.headers[key] !== undefined) {
                  self.headers[key] += ', ' + matches[2];
                } else {
                  self.headers[key] = matches[2];
                }
                self.rawHeaders.push(matches[1], matches[2]);
              }
            });

            self._charset = 'x-user-defined';
            if (!capability.overrideMimeType) {
              var mimeType = self.rawHeaders['mime-type'];
              if (mimeType) {
                var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
                if (charsetMatch) {
                  self._charset = charsetMatch[1].toLowerCase();
                }
              }
              if (!self._charset) self._charset = 'utf-8';
            }
          }
        };

        inherits(IncomingMessage, stream.Readable);

        IncomingMessage.prototype._read = function () {};

        IncomingMessage.prototype._onXHRProgress = function () {
          var self = this;

          var xhr = self._xhr;

          var response = null;
          switch (self._mode) {
            case 'text:vbarray':
              if (xhr.readyState !== rStates.DONE) break;
              try {
                response = new global.VBArray(xhr.responseBody).toArray();
              } catch (e) {}
              if (response !== null) {
                self.push(new Buffer(response));
                break;
              }

            case 'text':
              try {
                response = xhr.responseText;
              } catch (e) {
                self._mode = 'text:vbarray';
                break;
              }
              if (response.length > self._pos) {
                var newData = response.substr(self._pos);
                if (self._charset === 'x-user-defined') {
                  var buffer = new Buffer(newData.length);
                  for (var i = 0; i < newData.length; i++) buffer[i] = newData.charCodeAt(i) & 0xff;

                  self.push(buffer);
                } else {
                  self.push(newData, self._charset);
                }
                self._pos = response.length;
              }
              break;
            case 'arraybuffer':
              if (xhr.readyState !== rStates.DONE || !xhr.response) break;
              response = xhr.response;
              self.push(new Buffer(new Uint8Array(response)));
              break;
            case 'moz-chunked-arraybuffer':
              response = xhr.response;
              if (xhr.readyState !== rStates.LOADING || !response) break;
              self.push(new Buffer(new Uint8Array(response)));
              break;
            case 'ms-stream':
              response = xhr.response;
              if (xhr.readyState !== rStates.LOADING) break;
              var reader = new global.MSStreamReader();
              reader.onprogress = function () {
                if (reader.result.byteLength > self._pos) {
                  self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))));
                  self._pos = reader.result.byteLength;
                }
              };
              reader.onload = function () {
                self.push(null);
              };

              reader.readAsArrayBuffer(response);
              break;
          }

          if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
            self.push(null);
          }
        };
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer);
    }, { "./capability": 193, "_process": 172, "buffer": 162, "inherits": 168, "readable-stream": 187 }], 196: [function (require, module, exports) {

      var Buffer = require('safe-buffer').Buffer;

      var isEncoding = Buffer.isEncoding || function (encoding) {
        encoding = '' + encoding;
        switch (encoding && encoding.toLowerCase()) {
          case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
            return true;
          default:
            return false;
        }
      };

      function _normalizeEncoding(enc) {
        if (!enc) return 'utf8';
        var retried;
        while (true) {
          switch (enc) {
            case 'utf8':
            case 'utf-8':
              return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 'utf16le';
            case 'latin1':
            case 'binary':
              return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
              return enc;
            default:
              if (retried) return;
              enc = ('' + enc).toLowerCase();
              retried = true;
          }
        }
      };

      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
        return nenc || enc;
      }

      exports.StringDecoder = StringDecoder;
      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
          case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
          case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
          case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer.allocUnsafe(nb);
      }

      StringDecoder.prototype.write = function (buf) {
        if (buf.length === 0) return '';
        var r;
        var i;
        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === undefined) return '';
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }
        if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || '';
      };

      StringDecoder.prototype.end = utf8End;

      StringDecoder.prototype.text = utf8Text;

      StringDecoder.prototype.fillLast = function (buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      };

      function utf8CheckByte(byte) {
        if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
        return -1;
      }

      function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) self.lastNeed = nb - 1;
          return nb;
        }
        if (--j < i) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) self.lastNeed = nb - 2;
          return nb;
        }
        if (--j < i) return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
          }
          return nb;
        }
        return 0;
      }

      function utf8CheckExtraBytes(self, buf, p) {
        if ((buf[0] & 0xC0) !== 0x80) {
          self.lastNeed = 0;
          return '\ufffd'.repeat(p);
        }
        if (self.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd'.repeat(p + 1);
          }
          if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
              self.lastNeed = 2;
              return '\ufffd'.repeat(p + 2);
            }
          }
        }
      }

      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== undefined) return r;
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      }

      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString('utf8', i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString('utf8', i, end);
      }

      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + '\ufffd'.repeat(this.lastTotal - this.lastNeed);
        return r;
      }

      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString('utf16le', i);
          if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString('utf16le', i, buf.length - 1);
      }

      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString('utf16le', 0, end);
        }
        return r;
      }

      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0) return buf.toString('base64', i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;
        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString('base64', i, buf.length - n);
      }

      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
        return r;
      }

      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }

      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : '';
      }
    }, { "safe-buffer": 190 }], 197: [function (require, module, exports) {
      var Buffer = require('buffer').Buffer;

      module.exports = function (buf) {
        if (buf instanceof Uint8Array) {
          if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
            return buf.buffer;
          } else if (typeof buf.buffer.slice === 'function') {
            return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
          }
        }

        if (Buffer.isBuffer(buf)) {
          var arrayCopy = new Uint8Array(buf.length);
          var len = buf.length;
          for (var i = 0; i < len; i++) {
            arrayCopy[i] = buf[i];
          }
          return arrayCopy.buffer;
        } else {
          throw new Error('Argument must be a Buffer');
        }
      };
    }, { "buffer": 162 }], 198: [function (require, module, exports) {

      var punycode = require('punycode');
      var util = require('./util');

      exports.parse = urlParse;
      exports.resolve = urlResolve;
      exports.resolveObject = urlResolveObject;
      exports.format = urlFormat;

      exports.Url = Url;

      function Url() {
        this.protocol = null;
        this.slashes = null;
        this.auth = null;
        this.host = null;
        this.port = null;
        this.hostname = null;
        this.hash = null;
        this.search = null;
        this.query = null;
        this.pathname = null;
        this.path = null;
        this.href = null;
      }

      var protocolPattern = /^([a-z0-9.+-]+:)/i,
          portPattern = /:[0-9]*$/,
          simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
          unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
          autoEscape = ['\''].concat(unwise),
          nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
          hostEndingChars = ['/', '?', '#'],
          hostnameMaxLen = 255,
          hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
          hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          unsafeProtocol = {
        'javascript': true,
        'javascript:': true
      },
          hostlessProtocol = {
        'javascript': true,
        'javascript:': true
      },
          slashedProtocol = {
        'http': true,
        'https': true,
        'ftp': true,
        'gopher': true,
        'file': true,
        'http:': true,
        'https:': true,
        'ftp:': true,
        'gopher:': true,
        'file:': true
      },
          querystring = require('querystring');

      function urlParse(url, parseQueryString, slashesDenoteHost) {
        if (url && util.isObject(url) && url instanceof Url) return url;

        var u = new Url();
        u.parse(url, parseQueryString, slashesDenoteHost);
        return u;
      }

      Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
        if (!util.isString(url)) {
          throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
        }

        var queryIndex = url.indexOf('?'),
            splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
            uSplit = url.split(splitter),
            slashRegex = /\\/g;
        uSplit[0] = uSplit[0].replace(slashRegex, '/');
        url = uSplit.join(splitter);

        var rest = url;

        rest = rest.trim();

        if (!slashesDenoteHost && url.split('#').length === 1) {
          var simplePath = simplePathPattern.exec(rest);
          if (simplePath) {
            this.path = rest;
            this.href = rest;
            this.pathname = simplePath[1];
            if (simplePath[2]) {
              this.search = simplePath[2];
              if (parseQueryString) {
                this.query = querystring.parse(this.search.substr(1));
              } else {
                this.query = this.search.substr(1);
              }
            } else if (parseQueryString) {
              this.search = '';
              this.query = {};
            }
            return this;
          }
        }

        var proto = protocolPattern.exec(rest);
        if (proto) {
          proto = proto[0];
          var lowerProto = proto.toLowerCase();
          this.protocol = lowerProto;
          rest = rest.substr(proto.length);
        }

        if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var slashes = rest.substr(0, 2) === '//';
          if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
          }
        }

        if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
          var hostEnd = -1;
          for (var i = 0; i < hostEndingChars.length; i++) {
            var hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
          }

          var auth, atSign;
          if (hostEnd === -1) {
            atSign = rest.lastIndexOf('@');
          } else {
            atSign = rest.lastIndexOf('@', hostEnd);
          }

          if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = decodeURIComponent(auth);
          }

          hostEnd = -1;
          for (var i = 0; i < nonHostChars.length; i++) {
            var hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
          }

          if (hostEnd === -1) hostEnd = rest.length;

          this.host = rest.slice(0, hostEnd);
          rest = rest.slice(hostEnd);

          this.parseHost();

          this.hostname = this.hostname || '';

          var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

          if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for (var i = 0, l = hostparts.length; i < l; i++) {
              var part = hostparts[i];
              if (!part) continue;
              if (!part.match(hostnamePartPattern)) {
                var newpart = '';
                for (var j = 0, k = part.length; j < k; j++) {
                  if (part.charCodeAt(j) > 127) {
                    newpart += 'x';
                  } else {
                    newpart += part[j];
                  }
                }

                if (!newpart.match(hostnamePartPattern)) {
                  var validParts = hostparts.slice(0, i);
                  var notHost = hostparts.slice(i + 1);
                  var bit = part.match(hostnamePartStart);
                  if (bit) {
                    validParts.push(bit[1]);
                    notHost.unshift(bit[2]);
                  }
                  if (notHost.length) {
                    rest = '/' + notHost.join('.') + rest;
                  }
                  this.hostname = validParts.join('.');
                  break;
                }
              }
            }
          }

          if (this.hostname.length > hostnameMaxLen) {
            this.hostname = '';
          } else {
            this.hostname = this.hostname.toLowerCase();
          }

          if (!ipv6Hostname) {
            this.hostname = punycode.toASCII(this.hostname);
          }

          var p = this.port ? ':' + this.port : '';
          var h = this.hostname || '';
          this.host = h + p;
          this.href += this.host;

          if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            if (rest[0] !== '/') {
              rest = '/' + rest;
            }
          }
        }

        if (!unsafeProtocol[lowerProto]) {
          for (var i = 0, l = autoEscape.length; i < l; i++) {
            var ae = autoEscape[i];
            if (rest.indexOf(ae) === -1) continue;
            var esc = encodeURIComponent(ae);
            if (esc === ae) {
              esc = escape(ae);
            }
            rest = rest.split(ae).join(esc);
          }
        }

        var hash = rest.indexOf('#');
        if (hash !== -1) {
          this.hash = rest.substr(hash);
          rest = rest.slice(0, hash);
        }
        var qm = rest.indexOf('?');
        if (qm !== -1) {
          this.search = rest.substr(qm);
          this.query = rest.substr(qm + 1);
          if (parseQueryString) {
            this.query = querystring.parse(this.query);
          }
          rest = rest.slice(0, qm);
        } else if (parseQueryString) {
          this.search = '';
          this.query = {};
        }
        if (rest) this.pathname = rest;
        if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
          this.pathname = '/';
        }

        if (this.pathname || this.search) {
          var p = this.pathname || '';
          var s = this.search || '';
          this.path = p + s;
        }

        this.href = this.format();
        return this;
      };

      function urlFormat(obj) {
        if (util.isString(obj)) obj = urlParse(obj);
        if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
        return obj.format();
      }

      Url.prototype.format = function () {
        var auth = this.auth || '';
        if (auth) {
          auth = encodeURIComponent(auth);
          auth = auth.replace(/%3A/i, ':');
          auth += '@';
        }

        var protocol = this.protocol || '',
            pathname = this.pathname || '',
            hash = this.hash || '',
            host = false,
            query = '';

        if (this.host) {
          host = auth + this.host;
        } else if (this.hostname) {
          host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
          if (this.port) {
            host += ':' + this.port;
          }
        }

        if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
          query = querystring.stringify(this.query);
        }

        var search = this.search || query && '?' + query || '';

        if (protocol && protocol.substr(-1) !== ':') protocol += ':';

        if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
          host = '//' + (host || '');
          if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
        } else if (!host) {
          host = '';
        }

        if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
        if (search && search.charAt(0) !== '?') search = '?' + search;

        pathname = pathname.replace(/[?#]/g, function (match) {
          return encodeURIComponent(match);
        });
        search = search.replace('#', '%23');

        return protocol + host + pathname + search + hash;
      };

      function urlResolve(source, relative) {
        return urlParse(source, false, true).resolve(relative);
      }

      Url.prototype.resolve = function (relative) {
        return this.resolveObject(urlParse(relative, false, true)).format();
      };

      function urlResolveObject(source, relative) {
        if (!source) return relative;
        return urlParse(source, false, true).resolveObject(relative);
      }

      Url.prototype.resolveObject = function (relative) {
        if (util.isString(relative)) {
          var rel = new Url();
          rel.parse(relative, false, true);
          relative = rel;
        }

        var result = new Url();
        var tkeys = Object.keys(this);
        for (var tk = 0; tk < tkeys.length; tk++) {
          var tkey = tkeys[tk];
          result[tkey] = this[tkey];
        }

        result.hash = relative.hash;

        if (relative.href === '') {
          result.href = result.format();
          return result;
        }

        if (relative.slashes && !relative.protocol) {
          var rkeys = Object.keys(relative);
          for (var rk = 0; rk < rkeys.length; rk++) {
            var rkey = rkeys[rk];
            if (rkey !== 'protocol') result[rkey] = relative[rkey];
          }

          if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
            result.path = result.pathname = '/';
          }

          result.href = result.format();
          return result;
        }

        if (relative.protocol && relative.protocol !== result.protocol) {
          if (!slashedProtocol[relative.protocol]) {
            var keys = Object.keys(relative);
            for (var v = 0; v < keys.length; v++) {
              var k = keys[v];
              result[k] = relative[k];
            }
            result.href = result.format();
            return result;
          }

          result.protocol = relative.protocol;
          if (!relative.host && !hostlessProtocol[relative.protocol]) {
            var relPath = (relative.pathname || '').split('/');
            while (relPath.length && !(relative.host = relPath.shift()));
            if (!relative.host) relative.host = '';
            if (!relative.hostname) relative.hostname = '';
            if (relPath[0] !== '') relPath.unshift('');
            if (relPath.length < 2) relPath.unshift('');
            result.pathname = relPath.join('/');
          } else {
            result.pathname = relative.pathname;
          }
          result.search = relative.search;
          result.query = relative.query;
          result.host = relative.host || '';
          result.auth = relative.auth;
          result.hostname = relative.hostname || relative.host;
          result.port = relative.port;

          if (result.pathname || result.search) {
            var p = result.pathname || '';
            var s = result.search || '';
            result.path = p + s;
          }
          result.slashes = result.slashes || relative.slashes;
          result.href = result.format();
          return result;
        }

        var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
            isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
            mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
            removeAllDots = mustEndAbs,
            srcPath = result.pathname && result.pathname.split('/') || [],
            relPath = relative.pathname && relative.pathname.split('/') || [],
            psychotic = result.protocol && !slashedProtocol[result.protocol];

        if (psychotic) {
          result.hostname = '';
          result.port = null;
          if (result.host) {
            if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
          }
          result.host = '';
          if (relative.protocol) {
            relative.hostname = null;
            relative.port = null;
            if (relative.host) {
              if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
            }
            relative.host = null;
          }
          mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
        }

        if (isRelAbs) {
          result.host = relative.host || relative.host === '' ? relative.host : result.host;
          result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
          result.search = relative.search;
          result.query = relative.query;
          srcPath = relPath;
        } else if (relPath.length) {
          if (!srcPath) srcPath = [];
          srcPath.pop();
          srcPath = srcPath.concat(relPath);
          result.search = relative.search;
          result.query = relative.query;
        } else if (!util.isNullOrUndefined(relative.search)) {
          if (psychotic) {
            result.hostname = result.host = srcPath.shift();

            var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
            if (authInHost) {
              result.auth = authInHost.shift();
              result.host = result.hostname = authInHost.shift();
            }
          }
          result.search = relative.search;
          result.query = relative.query;

          if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
            result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
          }
          result.href = result.format();
          return result;
        }

        if (!srcPath.length) {
          result.pathname = null;

          if (result.search) {
            result.path = '/' + result.search;
          } else {
            result.path = null;
          }
          result.href = result.format();
          return result;
        }

        var last = srcPath.slice(-1)[0];
        var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

        var up = 0;
        for (var i = srcPath.length; i >= 0; i--) {
          last = srcPath[i];
          if (last === '.') {
            srcPath.splice(i, 1);
          } else if (last === '..') {
            srcPath.splice(i, 1);
            up++;
          } else if (up) {
            srcPath.splice(i, 1);
            up--;
          }
        }

        if (!mustEndAbs && !removeAllDots) {
          for (; up--; up) {
            srcPath.unshift('..');
          }
        }

        if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
          srcPath.unshift('');
        }

        if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
          srcPath.push('');
        }

        var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

        if (psychotic) {
          result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';

          var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }

        mustEndAbs = mustEndAbs || result.host && srcPath.length;

        if (mustEndAbs && !isAbsolute) {
          srcPath.unshift('');
        }

        if (!srcPath.length) {
          result.pathname = null;
          result.path = null;
        } else {
          result.pathname = srcPath.join('/');
        }

        if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
        }
        result.auth = relative.auth || result.auth;
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      };

      Url.prototype.parseHost = function () {
        var host = this.host;
        var port = portPattern.exec(host);
        if (port) {
          port = port[0];
          if (port !== ':') {
            this.port = port.substr(1);
          }
          host = host.substr(0, host.length - port.length);
        }
        if (host) this.hostname = host;
      };
    }, { "./util": 199, "punycode": 173, "querystring": 176 }], 199: [function (require, module, exports) {

      module.exports = {
        isString: function (arg) {
          return typeof arg === 'string';
        },
        isObject: function (arg) {
          return typeof arg === 'object' && arg !== null;
        },
        isNull: function (arg) {
          return arg === null;
        },
        isNullOrUndefined: function (arg) {
          return arg == null;
        }
      };
    }, {}], 200: [function (require, module, exports) {
      (function (global) {

        module.exports = deprecate;

        function deprecate(fn, msg) {
          if (config('noDeprecation')) {
            return fn;
          }

          var warned = false;
          function deprecated() {
            if (!warned) {
              if (config('throwDeprecation')) {
                throw new Error(msg);
              } else if (config('traceDeprecation')) {
                console.trace(msg);
              } else {
                console.warn(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }

          return deprecated;
        }

        function config(name) {
          try {
            if (!global.localStorage) return false;
          } catch (_) {
            return false;
          }
          var val = global.localStorage[name];
          if (null == val) return false;
          return String(val).toLowerCase() === 'true';
        }
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 201: [function (require, module, exports) {
      arguments[4][52][0].apply(exports, arguments);
    }, { "dup": 52 }], 202: [function (require, module, exports) {
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };
    }, {}], 203: [function (require, module, exports) {
      (function (process, global) {

        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }

          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += ' ' + x;
            } else {
              str += ' ' + inspect(x);
            }
          }
          return str;
        };

        exports.deprecate = function (fn, msg) {
          if (isUndefined(global.process)) {
            return function () {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }

          if (process.noDeprecation === true) {
            return fn;
          }

          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }

          return deprecated;
        };

        var debugs = {};
        var debugEnviron;
        exports.debuglog = function (set) {
          if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
              var pid = process.pid;
              debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function () {};
            }
          }
          return debugs[set];
        };

        function inspect(obj, opts) {
          var ctx = {
            seen: [],
            stylize: stylizeNoColor
          };

          if (arguments.length >= 3) ctx.depth = arguments[2];
          if (arguments.length >= 4) ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            ctx.showHidden = opts;
          } else if (opts) {
            exports._extend(ctx, opts);
          }

          if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
          if (isUndefined(ctx.depth)) ctx.depth = 2;
          if (isUndefined(ctx.colors)) ctx.colors = false;
          if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
          if (ctx.colors) ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;

        inspect.colors = {
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
        };

        inspect.styles = {
          'special': 'cyan',
          'number': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',

          'regexp': 'red'
        };

        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];

          if (style) {
            return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }

        function stylizeNoColor(str, styleType) {
          return str;
        }

        function arrayToHash(array) {
          var hash = {};

          array.forEach(function (val, idx) {
            hash[val] = true;
          });

          return hash;
        }

        function formatValue(ctx, value, recurseTimes) {
          if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }

          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }

          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);

          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }

          if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
            return formatError(value);
          }

          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ': ' + value.name : '';
              return ctx.stylize('[Function' + name + ']', 'special');
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), 'date');
            }
            if (isError(value)) {
              return formatError(value);
            }
          }

          var base = '',
              array = false,
              braces = ['{', '}'];

          if (isArray(value)) {
            array = true;
            braces = ['[', ']'];
          }

          if (isFunction(value)) {
            var n = value.name ? ': ' + value.name : '';
            base = ' [Function' + n + ']';
          }

          if (isRegExp(value)) {
            base = ' ' + RegExp.prototype.toString.call(value);
          }

          if (isDate(value)) {
            base = ' ' + Date.prototype.toUTCString.call(value);
          }

          if (isError(value)) {
            base = ' ' + formatError(value);
          }

          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }

          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            } else {
              return ctx.stylize('[Object]', 'special');
            }
          }

          ctx.seen.push(value);

          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function (key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }

          ctx.seen.pop();

          return reduceToSingleString(output, base, braces);
        }

        function formatPrimitive(ctx, value) {
          if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value)) return ctx.stylize('' + value, 'number');
          if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');

          if (isNull(value)) return ctx.stylize('null', 'null');
        }

        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }

        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0, l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function (key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
            }
          });
          return output;
        }

        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name, str, desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize('[Getter/Setter]', 'special');
            } else {
              str = ctx.stylize('[Getter]', 'special');
            }
          } else {
            if (desc.set) {
              str = ctx.stylize('[Setter]', 'special');
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = '[' + key + ']';
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf('\n') > -1) {
                if (array) {
                  str = str.split('\n').map(function (line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function (line) {
                    return '   ' + line;
                  }).join('\n');
                }
              }
            } else {
              str = ctx.stylize('[Circular]', 'special');
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify('' + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.substr(1, name.length - 2);
              name = ctx.stylize(name, 'name');
            } else {
              name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }

          return name + ': ' + str;
        }

        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function (prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0) numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);

          if (length > 60) {
            return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
          }

          return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }

        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
          return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
          return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;

        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
          return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;

        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        exports.isBuffer = require('./support/isBuffer');

        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }

        function pad(n) {
          return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }

        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }

        exports.log = function () {
          console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };

        exports.inherits = require('inherits');

        exports._extend = function (origin, add) {
          if (!add || !isObject(add)) return origin;

          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };

        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
      }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./support/isBuffer": 202, "_process": 172, "inherits": 201 }], 204: [function (require, module, exports) {
      module.exports = extend;

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      function extend() {
        var target = {};

        for (var i = 0; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      }
    }, {}] }, {}, [4])(4);
});