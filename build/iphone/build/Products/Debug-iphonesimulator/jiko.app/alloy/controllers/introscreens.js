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
  var __alloyId59 = [];
  $.__views.success = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#79af7e", id: "success" });

  __alloyId59.push($.__views.success);
  $.__views.__alloyId60 = Ti.UI.createImageView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: 90, height: 90, top: 30 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 90 });
    Alloy.deepExtend(true, o, { image: "/images/icon_intro_success.png", id: "__alloyId60" });
    return o;
  }());

  $.__views.success.add($.__views.__alloyId60);
  $.__views.__alloyId61 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, top: 140 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_intro_success_title"), id: "__alloyId61" });
    return o;
  }());

  $.__views.success.add($.__views.__alloyId61);
  $.__views.__alloyId62 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, text: L("label_intro_success_text"), id: "__alloyId62" });

  $.__views.success.add($.__views.__alloyId62);
  $.__views.nextButtonSuccess = Ti.UI.createButton(
  { width: "90%", height: 50, bottom: 20, color: "#ffffff", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonSuccess" });

  $.__views.success.add($.__views.nextButtonSuccess);
  $.__views.passphrase = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#d58645", id: "passphrase" });

  __alloyId59.push($.__views.passphrase);
  $.__views.__alloyId63 = Ti.UI.createImageView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: 90, height: 90, top: 30 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 90 });
    Alloy.deepExtend(true, o, { image: "/images/icon_intro_passphrase.png", id: "__alloyId63" });
    return o;
  }());

  $.__views.passphrase.add($.__views.__alloyId63);
  $.__views.__alloyId64 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, top: 140 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_intro_passphrase_title"), id: "__alloyId64" });
    return o;
  }());

  $.__views.passphrase.add($.__views.__alloyId64);
  $.__views.__alloyId65 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId65" });

  $.__views.passphrase.add($.__views.__alloyId65);
  $.__views.__alloyId66 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, text: L("label_intro_passphrase_text1"), id: "__alloyId66" });

  $.__views.__alloyId65.add($.__views.__alloyId66);
  $.__views.__alloyId67 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 150, top: 10, backgroundColor: "#48ffffff", id: "__alloyId67" });

  $.__views.__alloyId65.add($.__views.__alloyId67);
  $.__views.__alloyId68 = Ti.UI.createView(
  { width: "80%", id: "__alloyId68" });

  $.__views.__alloyId67.add($.__views.__alloyId68);
  $.__views.passphraseLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 25, fontWeight: "bold" }, id: "passphraseLabel" });

  $.__views.__alloyId68.add($.__views.passphraseLabel);
  $.__views.__alloyId69 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, top: 10, text: L("label_intro_passphrase_text2"), id: "__alloyId69" });

  $.__views.__alloyId65.add($.__views.__alloyId69);
  $.__views.__alloyId70 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, top: 10, text: L("label_intro_passphrase_text3"), id: "__alloyId70" });

  $.__views.__alloyId65.add($.__views.__alloyId70);
  $.__views.__alloyId71 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, top: 10, text: L("label_intro_passphrase_text4"), id: "__alloyId71" });

  $.__views.__alloyId65.add($.__views.__alloyId71);
  $.__views.nextButtonPassphrase = Ti.UI.createButton(
  { width: "90%", height: 50, bottom: 20, color: "#ffffff", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonPassphrase" });

  $.__views.passphrase.add($.__views.nextButtonPassphrase);
  $.__views.pincode = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#6a84bf", id: "pincode" });

  __alloyId59.push($.__views.pincode);
  $.__views.__alloyId72 = Ti.UI.createImageView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: 90, height: 90, top: 30 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 90 });
    Alloy.deepExtend(true, o, { image: "/images/icon_intro_pincode.png", id: "__alloyId72" });
    return o;
  }());

  $.__views.pincode.add($.__views.__alloyId72);
  $.__views.__alloyId73 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, top: 140 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_intro_pincode_title"), id: "__alloyId73" });
    return o;
  }());

  $.__views.pincode.add($.__views.__alloyId73);
  $.__views.__alloyId74 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId74" });

  $.__views.pincode.add($.__views.__alloyId74);
  $.__views.__alloyId75 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 10, text: L("label_intro_pincode_text"), id: "__alloyId75" });

  $.__views.__alloyId74.add($.__views.__alloyId75);
  $.__views.nextButtonPincode = Ti.UI.createButton(
  { width: "90%", height: 50, bottom: 20, color: "#ffffff", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonPincode" });

  $.__views.pincode.add($.__views.nextButtonPincode);
  $.__views.touchid = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#9579af", id: "touchid" });

  __alloyId59.push($.__views.touchid);
  $.__views.__alloyId76 = Ti.UI.createImageView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: 90, height: 90, top: 30 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 90 });
    Alloy.deepExtend(true, o, { image: "/images/icon_intro_touchid.png", id: "__alloyId76" });
    return o;
  }());

  $.__views.touchid.add($.__views.__alloyId76);
  $.__views.__alloyId77 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, top: 140 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_intro_touchid_title"), id: "__alloyId77" });
    return o;
  }());

  $.__views.touchid.add($.__views.__alloyId77);
  $.__views.__alloyId78 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId78" });

  $.__views.touchid.add($.__views.__alloyId78);
  $.__views.__alloyId79 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 10, text: L("label_intro_touchid_text"), id: "__alloyId79" });

  $.__views.__alloyId78.add($.__views.__alloyId79);
  $.__views.nextButtonTouchid = Ti.UI.createButton(
  { width: "90%", height: 50, bottom: 80, color: "#ffffff", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonTouchid" });

  $.__views.touchid.add($.__views.nextButtonTouchid);
  $.__views.nextButtonTouchidSkip = Ti.UI.createButton(
  { width: "90%", height: 50, bottom: 20, color: "#ffffff", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonTouchidSkip" });

  $.__views.touchid.add($.__views.nextButtonTouchidSkip);
  $.__views.push = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#9579af", id: "push" });

  __alloyId59.push($.__views.push);
  $.__views.__alloyId80 = Ti.UI.createImageView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: 90, height: 90, top: 30 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 90 });
    Alloy.deepExtend(true, o, { image: "/images/icon_intro_touchid.png", id: "__alloyId80" });
    return o;
  }());

  $.__views.push.add($.__views.__alloyId80);
  $.__views.__alloyId81 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, top: 140 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_intro_push_title"), id: "__alloyId81" });
    return o;
  }());

  $.__views.push.add($.__views.__alloyId81);
  $.__views.__alloyId82 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId82" });

  $.__views.push.add($.__views.__alloyId82);
  $.__views.__alloyId83 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 10, text: L("label_intro_push_text"), id: "__alloyId83" });

  $.__views.__alloyId82.add($.__views.__alloyId83);
  $.__views.nextButtonPush = Ti.UI.createButton(
  { width: "90%", height: 50, bottom: 20, color: "#ffffff", backgroundColor: "#48ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, id: "nextButtonPush" });

  $.__views.push.add($.__views.nextButtonPush);
  $.__views.complete = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#79af7e", id: "complete" });

  __alloyId59.push($.__views.complete);
  $.__views.__alloyId84 = Ti.UI.createImageView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: 90, height: 90, top: 30 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 90 });
    Alloy.deepExtend(true, o, { image: "/images/icon_intro_complete.png", id: "__alloyId84" });
    return o;
  }());

  $.__views.complete.add($.__views.__alloyId84);
  $.__views.__alloyId85 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "bold" }, top: 140 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_intro_complete_title"), id: "__alloyId85" });
    return o;
  }());

  $.__views.complete.add($.__views.__alloyId85);
  $.__views.__alloyId86 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId86" });

  $.__views.complete.add($.__views.__alloyId86);
  $.__views.__alloyId87 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 10, text: L("label_intro_complete_text"), id: "__alloyId87" });

  $.__views.__alloyId86.add($.__views.__alloyId87);
  $.__views.__alloyId88 = Ti.UI.createLabel(
  { width: "95%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 10, text: L("label_select_starting"), id: "__alloyId88" });

  $.__views.__alloyId86.add($.__views.__alloyId88);
  $.__views.__alloyId89 = Ti.UI.createView(
  { width: "100%", height: 70, top: 10, backgroundColor: "#33FFFFFF", id: "__alloyId89" });

  $.__views.__alloyId86.add($.__views.__alloyId89);
  selectBitcoin ? $.addListener($.__views.__alloyId89, 'click', selectBitcoin) : __defers['$.__views.__alloyId89!click!selectBitcoin'] = true;$.__views.__alloyId90 = Ti.UI.createImageView(
  { left: 15, width: 50, height: 50, image: "/images/asset_btc.png", id: "__alloyId90" });

  $.__views.__alloyId89.add($.__views.__alloyId90);
  $.__views.__alloyId91 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, text: L("label_bitcoin"), id: "__alloyId91" });

  $.__views.__alloyId89.add($.__views.__alloyId91);
  $.__views.bitcoinCheck = Ti.UI.createImageView(
  { right: 15, width: 50, height: 50, id: "bitcoinCheck", image: "/images/icon_unchecked.png" });

  $.__views.__alloyId89.add($.__views.bitcoinCheck);
  $.__views.__alloyId92 = Ti.UI.createView(
  { width: "100%", height: 70, top: 10, backgroundColor: "#33FFFFFF", id: "__alloyId92" });

  $.__views.__alloyId86.add($.__views.__alloyId92);
  selectEthereum ? $.addListener($.__views.__alloyId92, 'click', selectEthereum) : __defers['$.__views.__alloyId92!click!selectEthereum'] = true;$.__views.__alloyId93 = Ti.UI.createImageView(
  { left: 15, width: 50, height: 50, image: "/images/asset_eth.png", id: "__alloyId93" });

  $.__views.__alloyId92.add($.__views.__alloyId93);
  $.__views.__alloyId94 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, text: L("label_ethereum"), id: "__alloyId94" });

  $.__views.__alloyId92.add($.__views.__alloyId94);
  $.__views.ethereumCheck = Ti.UI.createImageView(
  { right: 15, width: 50, height: 50, id: "ethereumCheck", image: "/images/icon_unchecked.png" });

  $.__views.__alloyId92.add($.__views.ethereumCheck);
  $.__views.__alloyId95 = Ti.UI.createView(
  { width: "100%", height: 70, top: 10, backgroundColor: "#33FFFFFF", id: "__alloyId95" });

  $.__views.__alloyId86.add($.__views.__alloyId95);
  selectEither ? $.addListener($.__views.__alloyId95, 'click', selectEither) : __defers['$.__views.__alloyId95!click!selectEither'] = true;$.__views.__alloyId96 = Ti.UI.createImageView(
  { left: 15, width: 50, height: 50, image: "/images/image_question.png", opacity: 0.5, id: "__alloyId96" });

  $.__views.__alloyId95.add($.__views.__alloyId96);
  $.__views.__alloyId97 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: "normal" }, text: L("label_select_either"), id: "__alloyId97" });

  $.__views.__alloyId95.add($.__views.__alloyId97);
  $.__views.notSureCheck = Ti.UI.createImageView(
  { right: 15, width: 50, height: 50, id: "notSureCheck", image: "/images/icon_unchecked.png" });

  $.__views.__alloyId95.add($.__views.notSureCheck);
  $.__views.scrollableView = Ti.UI.createScrollableView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, views: __alloyId59, id: "scrollableView", showPagingControl: false, scrollingEnabled: false });

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

  $.nextButtonSuccess.title = L("label_continue");
  $.nextButtonPassphrase.title = L("label_continue");
  $.nextButtonPassphrase.opacity = 0.2;
  $.nextButtonPincode.title = L("label_intro_setpincode");
  $.nextButtonTouchid.title = L("label_intro_settouchid");
  $.nextButtonTouchidSkip.title = L("label_intro_skip");
  $.nextButtonPush.title = L("label_intro_push_button");

  if (args.isPassphraseOnly != null) {
    $.scrollableView.scrollToView($.passphrase);
    $.nextButtonPassphrase.title = L("label_close");
    closeDuration = 300;
  }

  var slider = util.createSlider({
    init: false,
    on: function () {
      $.nextButtonPassphrase.opacity = 1.0;
    },
    off: function () {
      $.nextButtonPassphrase.opacity = 0.2;
    } });


  var sliderGroup = util.group({
    "slider": slider.origin,
    "text": util.makeLabel({
      text: L("label_intro_wroteitdown"),
      textAlign: "left",
      color: "white",
      font: {
        fontFamily: "HelveticaNeue-Light",
        fontSize: 15,
        fontWeight: "light" },

      left: 10 }) },

  "horizontal");
  sliderGroup.bottom = 80;
  $.passphrase.add(sliderGroup);

  function close() {
    $.introscreens.animate({
      "curve": Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
      "opacity": 0.0,
      "duration": closeDuration });

    setTimeout(function () {
      $.introscreens.close();
    }, closeDuration + 5);
  }

  $.nextButtonSuccess.addEventListener("click", function (e) {
    $.scrollableView.scrollToView($.passphrase);
  });

  $.nextButtonPassphrase.addEventListener("click", function (e) {
    if (slider.is) {
      if (args.isPassphraseOnly != null) close();else $.scrollableView.scrollToView($.pincode);
    }
  });

  $.nextButtonPincode.addEventListener("click", function (e) {
    var easyInput = util.createEasyInput({
      "type": "reconfirm",
      "callback": function (number) {
        cache.data.easypass = number;
        cache.save();
        if (true) $.scrollableView.scrollToView($.touchid);else $.scrollableView.scrollToView($.complete);
      },
      "cancel": function () {} });

    easyInput.open();
  });

  $.nextButtonTouchidSkip.addEventListener("click", function (e) {
    $.scrollableView.scrollToView($.complete);
  });

  $.nextButtonTouchid.addEventListener("click", function (e) {
    auth.useTouchID({
      "callback": function (e) {
        if (e.success) {
          cache.data.isTouchId = true;
          cache.save();
          $.scrollableView.scrollToView($.complete);
        } else {
          var dialog = util.createDialog({
            "title": L("label_admin_error"),
            "message": L("label_admin_error_message"),
            "buttonNames": [L("label_close")] });

          dialog.addEventListener("click", function (e) {
            $.scrollableView.scrollToView($.complete);
          });
          dialog.show();
        }
      } });

  });

  $.nextButtonPush.addEventListener("click", function (e) {
    var fcm = require("requires/fcm");
    fcm.start(function () {
      $.scrollableView.scrollToView($.complete);
    });
  });

  function selectBitcoin() {

    selectedBitcoin = true;
    $.bitcoinCheck.image = "/images/icon_checked.png";
    $.ethereumCheck.image = "/images/icon_unchecked.png";

    $.notSureCheck.image = "/images/icon_unchecked.png";

    blockchain.changeCurrentChain(blockchain.BITCOIN);

    close();
  }

  function selectEthereum() {

    selectedBitcoin = false;
    $.bitcoinCheck.image = "/images/icon_unchecked.png";
    $.ethereumCheck.image = "/images/icon_checked.png";
    $.notSureCheck.image = "/images/icon_unchecked.png";
    blockchain.changeCurrentChain(blockchain.ETHEREUM);

    close();
  }

  function selectEither() {

    selectedBitcoin = false;
    $.bitcoinCheck.image = "/images/icon_unchecked.png";
    $.ethereumCheck.image = "/images/icon_unchecked.png";
    $.notSureCheck.image = "/images/icon_checked.png";
    blockchain.changeCurrentChain(blockchain.BITCOIN);

    close();
  }





  __defers['$.__views.__alloyId89!click!selectBitcoin'] && $.addListener($.__views.__alloyId89, 'click', selectBitcoin);__defers['$.__views.__alloyId92!click!selectEthereum'] && $.addListener($.__views.__alloyId92, 'click', selectEthereum);__defers['$.__views.__alloyId95!click!selectEither'] && $.addListener($.__views.__alloyId95, 'click', selectEither);



  _.extend($, exports);
}

module.exports = Controller;