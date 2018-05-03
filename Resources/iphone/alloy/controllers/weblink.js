var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'weblink';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.weblink = Ti.UI.createWindow(
  { backgroundColor: "white", id: "weblink" });

  $.__views.weblink && $.addTopLevelView($.__views.weblink);
  $.__views.webview = Ti.UI.createWebView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, borderRadius: 1, top: 25, id: "webview" });

  $.__views.weblink.add($.__views.webview);
  $.__views.webTopBar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 25, backgroundColor: Alloy.Globals.mainColor, top: 0, id: "webTopBar" });

  $.__views.weblink.add($.__views.webTopBar);
  $.__views.__alloyId162 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 28 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: 'Weblink', id: "__alloyId162" });
    return o;
  }());

  $.__views.webTopBar.add($.__views.__alloyId162);
  $.__views.webBottomBar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 40, backgroundColor: Alloy.Globals.mainColor, bottom: 0, id: "webBottomBar" });

  $.__views.weblink.add($.__views.webBottomBar);
  $.__views.backButton = Ti.UI.createImageView(
  { width: 25, height: 25, left: 10, opacity: 0.3, enabled: false, id: "backButton", image: "/images/icon_weblink_back.png" });

  $.__views.webBottomBar.add($.__views.backButton);
  $.__views.reloadButton = Ti.UI.createImageView(
  { width: 22, height: 22, left: 60, id: "reloadButton", image: "/images/icon_weblink_reload.png" });

  $.__views.webBottomBar.add($.__views.reloadButton);
  $.__views.closeButton = Ti.UI.createImageView(
  { right: 10, width: 25, height: 25, id: "closeButton", image: "/images/icon_weblink_close.png" });

  $.__views.webBottomBar.add($.__views.closeButton);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var util = require("requires/util");
  var bitcoin = require("requires/bitcoin");
  var cache = require("requires/cache");

  var evaltimer = null;
  if (args.hasOwnProperty("barColor")) {
    $.webTopBar.backgroundColor = args.barColor;
    $.webBottomBar.backgroundColor = args.barColor;
  }

  if (true) {
    var sig = bitcoin.signMessage("dex.indiesquare.me");
    var tiagent = require("inc.indiesquare.customuseragent");
    tiagent.setIOSUserAgent("ios/IndieSquareWallet (iPhone; Mobile) WIP " + cache.data.address + " " + sig);
  }

  $.webTopBar.height = Alloy.Globals.topBarHeight;

  $.webview.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight);
  $.webview.top = $.webTopBar.height;
  $.webview.url = args.path;
  globals.console.info("args.path=" + args.path);

  var loading = null;
  $.webview.addEventListener("setloadings", function (e) {
    loading = util.showLoading($.webview, { width: Ti.UI.FILL, height: Ti.UI.FILL });
  });
  $.webview.fireEvent('setloadings');

  $.webview.addEventListener("load", function (e) {
    if (loading != null) loading.removeSelf();

    if (false) $.webview.userAgent = "android/IndieSquareWallet (Android; Mobile)";
    if (evaltimer == null) {
      evaltimer = setInterval(function () {
        var code = "typeof weblink=='function' && weblink();";
        var result = $.webview.evalJS(code);
        if (result != null && result !== "false" && result.length > 0 && result !== "null") {
          if (result.match(/screen_to/)) {
            $.weblink.close();
          }


        } else globals.console.info("eval resule:" + result);
      }, 500);
    }

    if ($.webview.canGoBack()) {
      $.backButton.enabled = true;
      $.backButton.opacity = 1.0;
    } else {
      $.backButton.enabled = false;
      $.backButton.opacity = 0.3;
    }
  });

  $.webview.addEventListener("error", function (e) {
    if (loading != null) loading.removeSelf();
    if (evaltimer != null) {
      clearInterval(evaltimer);
      evaltimer = null;
    }
    $.webview.hide();

    var text_notransactions = util.makeLabel({
      text: L("text_webfailed"),
      font: { fontSize: 12 },
      color: "#2b4771" });

    $.webview.add(text_notransactions);
  });

  $.backButton.addEventListener("touchend", function () {
    if ($.backButton.enabled) $.webview.goBack();
  });

  $.reloadButton.addEventListener("touchend", function () {
    $.webview.reload();
  });

  $.closeButton.addEventListener("touchend", function () {
    var dialog = util.createDialog({
      title: L("label_confirm"),
      message: L("label_weblink_close_message"),
      buttonNames: [L("label_cancel"), L("label_okay")] });

    dialog.addEventListener("click", function (e) {
      if (e.index != e.source.cancel) {
        $.weblink.close();
      }
    });
    dialog.show();
  });

  $.weblink.addEventListener("close", function (e) {
    globals.weblink = null;
    if (loading != null) loading.removeSelf();
    if (evaltimer != null) {
      clearInterval(evaltimer);
      evaltimer = null;
    }
  });









  _.extend($, exports);
}

module.exports = Controller;