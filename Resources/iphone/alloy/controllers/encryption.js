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
  this.__controllerPath = 'encryption';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.encryption = Ti.UI.createWindow(
  { backgroundColor: "white", id: "encryption" });

  $.__views.encryption && $.addTopLevelView($.__views.encryption);
  $.__views.__alloyId50 = Ti.UI.createScrollView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: Alloy.Globals.mainColor, scrollType: "vertical", id: "__alloyId50" });

  $.__views.encryption.add($.__views.__alloyId50);
  $.__views.__alloyId51 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId51" });

  $.__views.__alloyId50.add($.__views.__alloyId51);
  $.__views.__alloyId52 = Ti.UI.createImageView(
  { width: 80, height: 80, top: 0, image: "/images/icon_settings_encryption_white.png", id: "__alloyId52" });

  $.__views.__alloyId51.add($.__views.__alloyId52);
  $.__views.__alloyId53 = Ti.UI.createLabel(
  { width: "90%", height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 30, textAlign: "center", text: L("label_encryption_decyption"), id: "__alloyId53" });

  $.__views.__alloyId51.add($.__views.__alloyId53);
  $.__views.inputPassword = Ti.UI.createTextField(
  { clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS, keyboardType: Ti.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Ti.UI.RETURNKEY_DONE, borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE, backgroundColor: "#ffffff", color: "#333300", height: 50, width: 300, padding: { left: 5 }, top: 15, id: "inputPassword", passwordMask: true });

  $.__views.__alloyId51.add($.__views.inputPassword);
  $.__views.decyptButton = Ti.UI.createView(
  { width: "90%", height: 50, backgroundColor: "#80FFFFFF", top: 10, id: "decyptButton" });

  $.__views.__alloyId51.add($.__views.decyptButton);
  $.__views.__alloyId54 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 25, fontWeight: "normal" }, text: L("label_decrypt"), id: "__alloyId54" });

  $.__views.decyptButton.add($.__views.__alloyId54);
  $.__views.signoutButton = Ti.UI.createView(
  { width: "90%", height: 35, backgroundColor: "#80FFFFFF", top: 10, id: "signoutButton" });

  $.__views.__alloyId51.add($.__views.signoutButton);
  $.__views.__alloyId55 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, text: L("label_settings_signout"), id: "__alloyId55" });

  $.__views.signoutButton.add($.__views.__alloyId55);
  $.__views.activityIndicator = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#ffffff", opacity: 0.5, id: "activityIndicator", visible: false });

  $.__views.encryption.add($.__views.activityIndicator);
  $.__views.__alloyId56 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId56" });

  $.__views.activityIndicator.add($.__views.__alloyId56);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var util = require("requires/util");
  var cache = require("requires/cache");
  var network = require("requires/network");
  var bitcoin = require("requires/bitcoin");

  $.inputPassword.hintText = L("label_password");
  $.inputPassword.hintTextColor = "gray";

  function decryptPassphrase() {
    var decryptedText = bitcoin.decryptPassphrase(cache.data.passphrase, $.inputPassword.value);
    var result = bitcoin.init(decryptedText);
    if (result !== "decrypted") {
      globals.decryptedPassphrase = decryptedText;
      args.callback();
      if (true) $.encryption.close();
    } else {

      loading.removeSelf();
      util.createDialog({
        "title": L("label_encryption_incorrect"),
        "message": L("label_encryption_incorrect_message"),
        "buttonNames": [L("label_close")] }).
      show();
    }
  }

  $.decyptButton.addEventListener("touchend", function () {

    $.inputPassword.blur();
    loading = util.showLoading($.encryption, {
      "width": Ti.UI.FILL,
      "height": Ti.UI.FILL,
      "style": "dark",
      "message": L("label_loading") });

    setTimeout(function () {
      decryptPassphrase();
    }, 200);
  });

  $.signoutButton.addEventListener("touchend", function () {
    var dialog = util.createDialog({
      "title": L("label_settings_signout"),
      "message": L("label_encryption_signout_message"),
      "buttonNames": [L("label_cancel"), L("label_settings_signout")] });

    dialog.addEventListener("click", function (e) {
      if (e.index != e.source.cancel) {
        $.activityIndicator.show();

        network.connectDELETE({
          "chain": "btc",
          "version": "v1",
          "method": "devices/" + globals.deviceToken,
          "post": {},
          "callback": function (result) {
            globals.console.info(result);
          },
          "onError": function (error) {
            globals.console.info("error remove:" + error);
          } });


        cache.init();
        cache.load();

        if (true) $.encryption.close();
        Alloy.createController("signin").getView().open();
      }
    });
    dialog.show();
  });









  _.extend($, exports);
}

module.exports = Controller;