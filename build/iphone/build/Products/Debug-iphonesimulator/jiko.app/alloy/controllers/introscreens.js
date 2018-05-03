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
  this.__controllerPath = 'introscreens';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.introscreens = Ti.UI.createWindow(
  { backgroundColor: "transparent", id: "introscreens" });

  $.__views.introscreens && $.addTopLevelView($.__views.introscreens);
  var __alloyId67 = [];
  $.__views.passphrase = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#f5f5f5", id: "passphrase" });

  __alloyId67.push($.__views.passphrase);
  $.__views.__alloyId68 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId68" });

  $.__views.passphrase.add($.__views.__alloyId68);
  $.__views.__alloyId69 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, text: L("label_intro_passphrase_text1"), id: "__alloyId69" });

  $.__views.__alloyId68.add($.__views.__alloyId69);
  $.__views.__alloyId70 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, top: 10, text: L("label_intro_passphrase_text2"), id: "__alloyId70" });

  $.__views.__alloyId68.add($.__views.__alloyId70);
  $.__views.__alloyId71 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, top: 10, text: L("label_intro_passphrase_text3"), id: "__alloyId71" });

  $.__views.__alloyId68.add($.__views.__alloyId71);
  $.__views.__alloyId72 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, top: 10, text: L("label_intro_passphrase_text4"), id: "__alloyId72" });

  $.__views.__alloyId68.add($.__views.__alloyId72);
  $.__views.passphraseView = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 150, top: 10, backgroundColor: "#48ffffff", id: "passphraseView" });

  $.__views.__alloyId68.add($.__views.passphraseView);
  $.__views.__alloyId73 = Ti.UI.createView(
  { width: "80%", id: "__alloyId73" });

  $.__views.passphraseView.add($.__views.__alloyId73);
  $.__views.passphraseLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 25, fontWeight: "bold" }, id: "passphraseLabel" });

  $.__views.__alloyId73.add($.__views.passphraseLabel);
  $.__views.nextButtonPassphrase = Ti.UI.createButton(
  { width: "90%", height: 50, top: 20, color: "gray", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonPassphrase" });

  $.__views.__alloyId68.add($.__views.nextButtonPassphrase);
  $.__views.__alloyId74 = Ti.UI.createImageView(
  { width: 90, height: 90, bottom: 0, right: 40, image: "/images/tookan.png", id: "__alloyId74" });

  $.__views.passphrase.add($.__views.__alloyId74);
  $.__views.pincode = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#f5f5f5", id: "pincode" });

  __alloyId67.push($.__views.pincode);
  $.__views.touchid = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#f5f5f5", id: "touchid" });

  __alloyId67.push($.__views.touchid);
  $.__views.__alloyId75 = Ti.UI.createImageView(
  { width: 90, height: 90, top: 40, image: "/images/icon_intro_touchid.png", id: "__alloyId75" });

  $.__views.touchid.add($.__views.__alloyId75);
  $.__views.__alloyId76 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, top: 140 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_intro_touchid_title"), id: "__alloyId76" });
    return o;
  }());

  $.__views.touchid.add($.__views.__alloyId76);
  $.__views.__alloyId77 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId77" });

  $.__views.touchid.add($.__views.__alloyId77);
  $.__views.__alloyId78 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 10, text: L("label_intro_touchid_text"), id: "__alloyId78" });

  $.__views.__alloyId77.add($.__views.__alloyId78);
  $.__views.nextButtonTouchid = Ti.UI.createButton(
  { width: "90%", height: 50, bottom: 80, color: "gray", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonTouchid" });

  $.__views.touchid.add($.__views.nextButtonTouchid);
  $.__views.nextButtonTouchidSkip = Ti.UI.createButton(
  { width: "90%", height: 50, bottom: 20, color: "gray", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonTouchidSkip" });

  $.__views.touchid.add($.__views.nextButtonTouchidSkip);
  $.__views.scrollableView = Ti.UI.createScrollableView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, views: __alloyId67, id: "scrollableView", showPagingControl: false, scrollingEnabled: false });

  $.__views.introscreens.add($.__views.scrollableView);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var util = require("requires/util");
  var cache = require("requires/cache");
  var auth = require("requires/auth");
  var blockchain = require("requires/blockchain");
  var closeDuration = 1000;
  var selectedBitcoin = true;
  $.passphraseLabel.text = globals.decryptedPassphrase;

  $.pincode.add(util.createEasyInput({
    "type": "reconfirmInstant",
    "callback": function (number) {
      cache.data.easypass = number;
      cache.save();
      if (true) $.scrollableView.scrollToView($.touchid);else close();
    },
    "cancel": function () {} }).
  view);

  $.nextButtonPassphrase.title = "Show passphrase";
  $.nextButtonPassphrase.opacity = 0.2;
  $.nextButtonTouchid.title = L("label_intro_settouchid");
  $.nextButtonTouchidSkip.title = L("label_intro_skip");

  if (args.isPassphraseOnly != null) {
    $.scrollableView.scrollToView($.passphrase);
    $.nextButtonPassphrase.title = L("label_close");
    closeDuration = 300;
  }
  $.nextButtonPassphrase.opacity = 1.0;

  function close() {
    $.introscreens.animate({
      "curve": Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
      "opacity": 0.0,
      "duration": closeDuration });

    setTimeout(function () {
      $.introscreens.close();
    }, closeDuration + 5);
  }
  $.passphraseView.opacity = 0;
  var didShowPassphrase = false;
  $.nextButtonPassphrase.addEventListener("click", function (e) {

    if (!didShowPassphrase) {
      $.passphraseView.animate({
        "curve": Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
        "opacity": 1.0,
        "duration": 500 });

      $.nextButtonPassphrase.title = "Continue";
      didShowPassphrase = true;
    } else {

      if (args.isPassphraseOnly != null) close();else $.scrollableView.scrollToView($.pincode);
    }
  });















  $.nextButtonTouchidSkip.addEventListener("click", function (e) {
    close();
  });

  $.nextButtonTouchid.addEventListener("click", function (e) {
    auth.useTouchID({
      "callback": function (e) {
        if (e.success) {
          cache.data.isTouchId = true;
          cache.save();
          close();
        } else {
          var dialog = util.createDialog({
            "title": L("label_admin_error"),
            "message": L("label_admin_error_message"),
            "buttonNames": [L("label_close")] });

          dialog.addEventListener("click", function (e) {
            close();
          });
          dialog.show();
        }
      } });

  });









  _.extend($, exports);
}

module.exports = Controller;