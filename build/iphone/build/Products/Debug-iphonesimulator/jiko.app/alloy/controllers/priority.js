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
  this.__controllerPath = 'priority';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.priority = Ti.UI.createView(
  { backgroundColor: "transparent", id: "priority" });

  $.__views.priority && $.addTopLevelView($.__views.priority);
  $.__views.background = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#000000", opacity: 0, id: "background" });

  $.__views.priority.add($.__views.background);
  $.__views.mainView = Ti.UI.createView(
  { width: Ti.UI.FILL, backgroundColor: "#ffffff", bottom: -292, height: 292, id: "mainView", layout: "vertical" });

  $.__views.priority.add($.__views.mainView);
  $.__views.topbar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 50, top: 0, backgroundColor: "#e54353", id: "topbar" });

  $.__views.mainView.add($.__views.topbar);
  $.__views.closeIcon = Ti.UI.createImageView(
  { right: 10, width: 40, height: 40, padding: 50, id: "closeIcon", image: "/images/icon_close_white.png" });

  $.__views.topbar.add($.__views.closeIcon);
  $.__views.__alloyId106 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 1, backgroundColor: "#000000", top: 0, opacity: 0.2, id: "__alloyId106" });

  $.__views.mainView.add($.__views.__alloyId106);
  $.__views.bitcoinFees = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: 0, id: "bitcoinFees", visible: false, layout: "vertical" });

  $.__views.mainView.add($.__views.bitcoinFees);
  $.__views.highButton = Ti.UI.createView(
  { top: 0, width: Ti.UI.FILL, height: 60, textAlign: "left", id: "highButton" });

  $.__views.bitcoinFees.add($.__views.highButton);
  $.__views.__alloyId107 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 10, touchEnabled: false, layout: "vertical", id: "__alloyId107" });

  $.__views.highButton.add($.__views.__alloyId107);
  $.__views.__alloyId108 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "bold" }, left: 10, text: L("label_priority_high"), touchEnabled: false, id: "__alloyId108" });

  $.__views.__alloyId107.add($.__views.__alloyId108);
  $.__views.highDesc = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, left: 10, text: L("label_priority_high_description"), touchEnabled: false, id: "highDesc" });

  $.__views.__alloyId107.add($.__views.highDesc);
  $.__views.checkedHigh = Ti.UI.createImageView(
  { right: 10, width: 25, height: 25, id: "checkedHigh", image: "/images/icon_checked.png", visible: false });

  $.__views.highButton.add($.__views.checkedHigh);
  $.__views.medButton = Ti.UI.createView(
  { top: 0, width: Ti.UI.FILL, height: 60, textAlign: "left", id: "medButton" });

  $.__views.bitcoinFees.add($.__views.medButton);
  $.__views.__alloyId109 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 10, touchEnabled: false, layout: "vertical", id: "__alloyId109" });

  $.__views.medButton.add($.__views.__alloyId109);
  $.__views.__alloyId110 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "bold" }, left: 10, text: L("label_priority_med"), touchEnabled: false, id: "__alloyId110" });

  $.__views.__alloyId109.add($.__views.__alloyId110);
  $.__views.medDesc = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, left: 10, text: L("label_priority_med_description"), touchEnabled: false, id: "medDesc" });

  $.__views.__alloyId109.add($.__views.medDesc);
  $.__views.checkedMed = Ti.UI.createImageView(
  { right: 10, width: 25, height: 25, id: "checkedMed", image: "/images/icon_checked.png", visible: false });

  $.__views.medButton.add($.__views.checkedMed);
  $.__views.lowButton = Ti.UI.createView(
  { top: 0, width: Ti.UI.FILL, height: 60, textAlign: "left", id: "lowButton" });

  $.__views.bitcoinFees.add($.__views.lowButton);
  $.__views.__alloyId111 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 10, touchEnabled: false, layout: "vertical", id: "__alloyId111" });

  $.__views.lowButton.add($.__views.__alloyId111);
  $.__views.__alloyId112 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "bold" }, left: 10, text: L("label_priority_low"), touchEnabled: false, id: "__alloyId112" });

  $.__views.__alloyId111.add($.__views.__alloyId112);
  $.__views.lowDesc = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, left: 10, text: L("label_priority_low_description"), touchEnabled: false, id: "lowDesc" });

  $.__views.__alloyId111.add($.__views.lowDesc);
  $.__views.checkedLow = Ti.UI.createImageView(
  { right: 10, width: 25, height: 25, id: "checkedLow", image: "/images/icon_checked.png", visible: false });

  $.__views.lowButton.add($.__views.checkedLow);
  $.__views.__alloyId113 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 1, backgroundColor: "#000000", top: 0, opacity: 0.2, id: "__alloyId113" });

  $.__views.bitcoinFees.add($.__views.__alloyId113);
  $.__views.customButtonBtc = Ti.UI.createView(
  { top: 0, width: Ti.UI.FILL, height: 60, textAlign: "left", id: "customButtonBtc" });

  $.__views.bitcoinFees.add($.__views.customButtonBtc);
  $.__views.__alloyId114 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 10, touchEnabled: false, layout: "vertical", id: "__alloyId114" });

  $.__views.customButtonBtc.add($.__views.__alloyId114);
  $.__views.__alloyId115 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "bold" }, left: 10, text: L("label_priority_custom"), touchEnabled: false, id: "__alloyId115" });

  $.__views.__alloyId114.add($.__views.__alloyId115);
  $.__views.__alloyId116 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, left: 10, text: L("label_priority_custom_description"), touchEnabled: false, id: "__alloyId116" });

  $.__views.__alloyId114.add($.__views.__alloyId116);
  $.__views.checkedCustom = Ti.UI.createImageView(
  { right: 10, width: 25, height: 25, id: "checkedCustom", image: "/images/icon_checked.png", visible: false });

  $.__views.customButtonBtc.add($.__views.checkedCustom);
  $.__views.ethereumFees = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: 0, id: "ethereumFees", visible: false, layout: "vertical" });

  $.__views.mainView.add($.__views.ethereumFees);
  $.__views.recommendedEthButton = Ti.UI.createView(
  { top: 0, width: Ti.UI.FILL, height: 60, textAlign: "left", id: "recommendedEthButton" });

  $.__views.ethereumFees.add($.__views.recommendedEthButton);
  $.__views.__alloyId117 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 10, touchEnabled: false, layout: "vertical", id: "__alloyId117" });

  $.__views.recommendedEthButton.add($.__views.__alloyId117);
  $.__views.recommendedEthLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "bold" }, left: 10, text: L("label_recommended_gas_eth"), touchEnabled: false, id: "recommendedEthLabel" });

  $.__views.__alloyId117.add($.__views.recommendedEthLabel);
  $.__views.highDesc = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, left: 10, text: L("label_recommended_gas_eth_desc"), touchEnabled: false, id: "highDesc" });

  $.__views.__alloyId117.add($.__views.highDesc);
  $.__views.checkedHighEth = Ti.UI.createImageView(
  { right: 10, width: 25, height: 25, id: "checkedHighEth", image: "/images/icon_checked.png", visible: false });

  $.__views.recommendedEthButton.add($.__views.checkedHighEth);
  $.__views.__alloyId118 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 1, backgroundColor: "#000000", top: 0, opacity: 0.2, id: "__alloyId118" });

  $.__views.ethereumFees.add($.__views.__alloyId118);
  $.__views.customButtonEth = Ti.UI.createView(
  { top: 0, width: Ti.UI.FILL, height: 60, textAlign: "left", id: "customButtonEth" });

  $.__views.ethereumFees.add($.__views.customButtonEth);
  $.__views.__alloyId119 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 10, touchEnabled: false, layout: "vertical", id: "__alloyId119" });

  $.__views.customButtonEth.add($.__views.__alloyId119);
  $.__views.__alloyId120 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "bold" }, left: 10, text: L("label_custom_gas_price"), touchEnabled: false, id: "__alloyId120" });

  $.__views.__alloyId119.add($.__views.__alloyId120);
  $.__views.__alloyId121 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, left: 10, text: L("label_custom_gas_price_description"), touchEnabled: false, id: "__alloyId121" });

  $.__views.__alloyId119.add($.__views.__alloyId121);
  $.__views.checkedCustomEth = Ti.UI.createImageView(
  { right: 10, width: 25, height: 25, id: "checkedCustomEth", image: "/images/icon_checked.png", visible: false });

  $.__views.customButtonEth.add($.__views.checkedCustomEth);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var blockchain = require("requires/blockchain");
  var cache = require("requires/cache");
  var util = require("requires/util");

  if (cache.data.chainId == blockchain.ETHEREUM) {
    $.bitcoinFees.height = 0;
    $.ethereumFees.top = 0;
    $.ethereumFees.visible = true;

    $.recommendedEthLabel.text = L("label_recommended_gas_eth");
  } else if (cache.data.chainId == blockchain.BITCOIN) {
    $.bitcoinFees.visible = true;
  }

  var win = Ti.UI.createWindow({
    "orientationModes": [Ti.UI.PORTRAIT],
    "navBarHidden": true,
    "backgroundColor": "transparent",
    "windowSoftInputMode": false ? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN : null });

  win.add($.priority);
  win.open();

  $.topbar.backgroundColor = globals.currentColor;

  function close() {
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
    win.addEventListener('android:back', function () {
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


  if (cache.data.chainId == blockchain.BITCOIN) {
    if (cache.data.currentFee === "fastestFee") $.checkedHigh.visible = true;else if (cache.data.currentFee === "lowFee") $.checkedLow.visible = true;else if (cache.data.currentFee === "halfHourFee") $.checkedMed.visible = true;else $.checkedCustom.visible = true;
  } else if (cache.data.chainId == blockchain.ETHEREUM) {
    if (cache.data.currentEthFee == "recommended") {
      $.checkedHighEth.visible = true;
    } else if (cache.data.currentEthFee == "custom") {

      $.checkedCustomEth.visible = true;
    }
  }

  function setCurrentFee(fee) {
    args.setFeeLabel(fee);
    cache.data.currentFee = fee;
    cache.save();

    $.checkedHigh.visible = false;
    $.checkedMed.visible = false;
    $.checkedLow.visible = false;
    $.checkedCustom.visible = false;
  }

  function setCurrentFeeEth(fee) {

    args.setEthFee(fee);

    cache.data.currentEthGasPrice = fee;
    cache.data.currentEthFee = "custom";
    cache.save();

    $.checkedHighEth.visible = false;
    $.checkedCustomEth.visible = false;
  }

  $.recommendedEthButton.addEventListener("click", function () {

    cache.data.currentEthFee = "recommended";
    args.setFeeLabel();
    cache.save();
    $.checkedCustomEth.visible = false;
    $.checkedHighEth.visible = true;
    close();
  });

  $.highButton.addEventListener("click", function () {
    setCurrentFee("fastestFee");
    $.checkedHigh.visible = true;
    close();
  });

  $.medButton.addEventListener("click", function () {
    setCurrentFee("halfHourFee");
    $.checkedMed.visible = true;
    close();
  });

  $.lowButton.addEventListener("click", function () {
    setCurrentFee("lowFee");
    $.checkedLow.visible = true;
    close();
  });

  if (cache.data.chainId == blockchain.BITCOIN) {

    $.customButtonBtc.addEventListener("click", function () {
      var dialog = util.createInputDialog({
        "title": L("label_inputcustom"),
        "message": L("label_inputcustom_message"),
        "value": "",
        "keyboardType": Ti.UI.KEYBOARD_TYPE_DECIMAL_PAD,
        "buttonNames": [L("label_close"), L("label_apply")] });

      dialog.origin.addEventListener("click", function (e) {
        var inputText = false ? dialog.androidField.getValue() : e.text;
        if (e.index != e.source.cancel) {
          if (isFinite(inputText)) {
            setCurrentFee(inputText);
            $.checkedCustom.visible = true;
            close();
          } else {
            self.createDialog({
              "message": L("label_inputcustom_error"),
              "buttonNames": [L("label_close")] }).
            show();
          }
        }
      });
      dialog.origin.show();
    });
  } else if (cache.data.chainId == blockchain.ETHEREUM) {

    $.customButtonEth.addEventListener("click", function () {
      var dialog = util.createInputDialog({
        "title": L("label_inputcustom_eth"),
        "message": L("label_inputcustom_eth_desc"),
        "value": "",
        "keyboardType": Ti.UI.KEYBOARD_TYPE_DECIMAL_PAD,
        "buttonNames": [L("label_close"), L("label_apply")] });

      dialog.origin.addEventListener("click", function (e) {
        var inputText = false ? dialog.androidField.getValue() : e.text;
        if (e.index != e.source.cancel) {
          if (isFinite(inputText)) {
            setCurrentFeeEth(inputText);
            $.checkedCustomEth.visible = true;
            close();
          } else {
            self.createDialog({
              "message": L("label_inputcustom_error"),
              "buttonNames": [L("label_close")] }).
            show();
          }
        }
      });
      dialog.origin.show();
    });
  }
  $.background.addEventListener("touchend", close);
  $.closeIcon.addEventListener("touchend", close);









  _.extend($, exports);
}

module.exports = Controller;