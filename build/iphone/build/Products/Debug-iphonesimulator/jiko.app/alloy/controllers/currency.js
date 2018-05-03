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
  this.__controllerPath = 'currency';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.currency = Ti.UI.createView(
  { backgroundColor: "transparent", id: "currency" });

  $.__views.currency && $.addTopLevelView($.__views.currency);
  $.__views.background = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#000000", opacity: 0, id: "background" });

  $.__views.currency.add($.__views.background);
  $.__views.mainView = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 292, backgroundColor: "#ffffff", bottom: -292, id: "mainView", layout: "vertical" });

  $.__views.currency.add($.__views.mainView);
  $.__views.__alloyId47 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 50, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "__alloyId47" });

  $.__views.mainView.add($.__views.__alloyId47);
  $.__views.closeIcon = Ti.UI.createImageView(
  { right: 10, width: 40, height: 40, padding: 50, id: "closeIcon", image: "/images/icon_close_white.png" });

  $.__views.__alloyId47.add($.__views.closeIcon);
  $.__views.__alloyId48 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 1, backgroundColor: "#000000", top: 0, opacity: 0.2, id: "__alloyId48" });

  $.__views.mainView.add($.__views.__alloyId48);
  $.__views.currencyList = Ti.UI.createScrollView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, id: "currencyList", scrollType: "vertical", layout: "vertical", showVerticalScrollIndicator: true });

  $.__views.mainView.add($.__views.currencyList);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var cache = require("requires/cache");
  var util = require("requires/util");

  var blockchain = require("requires/blockchain");

  var win = Ti.UI.createWindow({
    "orientationModes": [Ti.UI.PORTRAIT],
    "navBarHidden": true,
    "backgroundColor": "transparent",
    "windowSoftInputMode": false ? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN : null });

  win.add($.currency);
  win.open();

  function close(e) {
    $.background.animate({
      "opacity": 0,
      "duration": 200 });


    $.mainView.animate({
      "bottom": -292,
      "duration": 200 });


    setTimeout(function () {
      win.width = 0;
      win.close();
    }, 200);
  }

  if (false) {
    win.addEventListener("android:back", function () {
      close();
      return true;
    });
  }

  $.background.animate({
    "opacity": 0.5,
    "duration": 200 });


  $.mainView.animate({
    "bottom": 0,
    "duration": 200 });


  var currentTiker = [];

  if (cache.data.chainId == blockchain.BITCOIN) {
    currentTiker = globals.tiker["BTC"];
  } else if (cache.data.chainId == blockchain.ETHEREUM) {
    currentTiker = globals.tiker["ETH"];
  }

  for (key in currentTiker) {
    if (key === "PEPECASH" || key === "XCP") continue;

    var tiker = currentTiker[key];
    var args2 = {
      "name": key,
      "symbol": tiker.symbol,
      "currentCurrency": cache.data.currency,
      "callback": function (currency) {
        args.setLabel(currency);
        cache.data.currency = currency;
        cache.save();
        globals.refreshTokens();
        close();
      } };

    var currencyBox = Alloy.createController("component_currency_box", args2);
    $.currencyList.add(currencyBox.getView());
  }

  $.background.addEventListener("touchend", close);
  $.closeIcon.addEventListener("touchend", close);









  _.extend($, exports);
}

module.exports = Controller;