var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
    delete obj[key];
  }
  return arg;
}

function Controller() {

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'index';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  exports.destroy = function () {};




  _.extend($, $.__views);


  require("init");

  var util = require("requires/util");
  var cache = require("requires/cache");
  var network = require("requires/network");
  var bitcoin = require("requires/bitcoin");
  var ethereum = require("requires/ethereum");
  var blockchain = require("requires/blockchain");



  if (cache.load()) {

    blockchain.updateUI();

    function startFrame() {

      blockchain.initChains();
      blockchain.changeCurrentChain(cache.data.chainId || blockchain.BITCOIN);
      Alloy.createController("frame").getView().open();
    }

    Ti.App.addEventListener("resumed", function (e) {
      if (true) Ti.UI.iOS.setAppBadge(0);
      if (globals.isReorg) globals.backgroundfetch();

      var url = null;
      if (false && e.args != null) {
        url = e.args.url;
        if (!url.match(new RegExp("^" + Alloy.CFG.walletapp_uri))) {
          url = "indiewallet://" + e.args.url;
        }
      }
      globals._parseArguments(url, { qrcode: false, completemessage: true });
    });
    if (false) {
      Ti.Android.currentActivity.addEventListener("app:resume", function (e) {
        globals.lastUrl = null;
        Ti.App.fireEvent("resumed", { args: { url: e.data } });
      });
    }
    if (true) {
      Ti.App.iOS.addEventListener("continueactivity", function (e) {
        if (e.activityType === "NSUserActivityTypeBrowsingWeb") {
          globals.console.info("deepLinkURL:" + e.webpageURL);
          globals.lastUrl = null;
          globals._parseArguments(e.webpageURL, { qrcode: false, completemessage: true });
        }
      });
    }

    var view = null;
    if (cache.data.passphrase != null) {
      if (cache.data.passphrase === Alloy.Globals.demopassphrase) {
        globals.DEMO = true;
      }

      if (cache.data.currency == null) cache.data.currency = cache.data.currncy;

      globals.decryptedPassphrase = cache.data.passphrase;
      var encryptCheck = bitcoin.init(globals.decryptedPassphrase);
      if (encryptCheck === "decrypted") {
        Alloy.createController("encryption", { "callback": startFrame }).getView().open();
      } else startFrame();
    } else {
      Alloy.createController("signin", { "callback": startFrame }).getView().open();
    }
  } else {
    alert(L("text_access_deny") + "\nError:1000");
  }









  _.extend($, exports);
}

module.exports = Controller;