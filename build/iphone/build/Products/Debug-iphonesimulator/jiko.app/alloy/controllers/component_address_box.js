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
  this.__controllerPath = 'component_address_box';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.addressBox = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 100, top: 0, backgroundColor: "#ffffff", id: "addressBox" });

  $.__views.addressBox && $.addTopLevelView($.__views.addressBox);
  $.__views.addressButton = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: 10, left: 10, id: "addressButton" });

  $.__views.addressBox.add($.__views.addressButton);
  $.__views.walletIcon = Ti.UI.createImageView(
  { width: 20, height: 18, top: 0, left: 0, id: "walletIcon", image: "/images/icon_wallet_red.png" });

  $.__views.addressButton.add($.__views.walletIcon);
  $.__views.tag = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, top: 0, left: 40, id: "tag" });

  $.__views.addressButton.add($.__views.tag);
  $.__views.address = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, top: 30, left: 0, id: "address" });

  $.__views.addressButton.add($.__views.address);
  $.__views.__alloyId24 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 10, bottom: 10, layout: "horizontal", id: "__alloyId24" });

  $.__views.addressBox.add($.__views.__alloyId24);
  $.__views.changeName = Ti.UI.createView(
  { width: 60, height: 25, backgroundColor: "transparent", id: "changeName" });

  $.__views.__alloyId24.add($.__views.changeName);
  $.__views.__alloyId25 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#7083be", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, text: L("label_wallets_rename"), id: "__alloyId25" });

  $.__views.changeName.add($.__views.__alloyId25);
  $.__views.privKey = Ti.UI.createView(
  { width: 60, height: 25, left: 10, backgroundColor: "transparent", id: "privKey" });

  $.__views.__alloyId24.add($.__views.privKey);
  $.__views.__alloyId26 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#7083be", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, text: L("label_wallets_privkey"), id: "__alloyId26" });

  $.__views.privKey.add($.__views.__alloyId26);
  $.__views.remove = Ti.UI.createView(
  { width: 60, height: 25, left: 10, backgroundColor: "transparent", id: "remove" });

  $.__views.__alloyId24.add($.__views.remove);
  $.__views.__alloyId27 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#7083be", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, text: L("label_wallets_remove"), id: "__alloyId27" });

  $.__views.remove.add($.__views.__alloyId27);
  $.__views.__alloyId28 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 1, bottom: 0, backgroundColor: "#ececec", id: "__alloyId28" });

  $.__views.addressBox.add($.__views.__alloyId28);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};
  var blockchain = require("requires/blockchain");
  var util = require("requires/util");
  var cache = require("requires/cache");
  var bitcoin = require("requires/bitcoin");
  var ethereum = require("requires/ethereum");
  var auth = require("requires/auth");

  $.tag.text = args.tag;
  $.address.text = args.address;

  $.addressButton.addEventListener("touchend", function () {
    if (cache.data.address != args.address) args.setCurrent(args.pos);
  });

  globals.addButtonEvent($.changeName, function (e) {
    var dialog = util.createInputDialog({
      title: L("label_rename"),
      message: L("label_rename_message"),
      value: "",
      buttonNames: [L("label_close"), L("label_rename")] });

    dialog.origin.addEventListener("click", function (e) {
      var inputText = false ? dialog.androidField.getValue() : e.text;
      if (e.index != e.source.cancel) {
        if (inputText.length > 0) {

          var loading = util.showLoading($.addressBox, {
            "width": Ti.UI.FILL,
            "height": Ti.UI.FILL });


          for (var i = 0; i < globals.wallets.length; i++) {
            var wallet = globals.wallets[i];
            if (wallet.id == args.id) {
              globals.wallets[i].tag = inputText;
              break;
            }
          }

          globals.blockchainWallets[args.pos].tag = inputText;
          $.tag.text = inputText;
          Ti.App.Properties.setString(args.address, inputText);
        }
      }
    });
    dialog.origin.show();
  });

  globals.addButtonEvent($.privKey, function (e) {
    var dialog = util.createDialog({
      title: L("label_confirm"),
      message: L("label_privkey_message"),
      buttonNames: [L("label_close"), L("label_show")] });

    dialog.addEventListener("click", function (e) {
      if (e.index != e.source.cancel) {
        auth.check({ "title": L("label_confirmsend"), "callback": function (e) {
            if (e.success) {
              var pkey = "";
              if (cache.data.chainId == blockchain.BITCOIN) {
                pkey = bitcoin.getWIFFromPath(args.pos);
              } else if (cache.data.chainId == blockchain.ETHEREUM) {
                pkey = ethereum.getPrivKey();
              }
              util.createDialog({
                "message": pkey,
                "buttonNames": [L("label_close")] }).
              show();
            }
          } });
      }
    });
    dialog.show();
  });

  globals.addButtonEvent($.remove, function (e) {
    var dialog = util.createDialog({
      title: L("label_confirm"),
      message: L("label_address_delete"),
      buttonNames: [L("label_close"), L("label_show")] });

    dialog.addEventListener("click", function (e) {
      if (e.index != e.source.cancel) {

        var loading = util.showLoading($.addressBox, {
          "width": Ti.UI.FILL,
          "height": Ti.UI.FILL });


        args.remove($.component_address_box, args.address);
      }
    });
    dialog.show();
  });

  if (args.isLast) {
    $.remove.visible = true;
  } else {
    $.remove.visible = false;
  }

  exports.hideRemoveButton = function () {
    $.remove.visible = false;
  };
  exports.showRemoveButton = function () {
    $.remove.visible = true;
  };
  var prefix = "";

  if (cache.data.chainId == blockchain.ETHEREUM) {
    prefix = "_eth";
  }

  $.walletIcon.image = "/images/icon_wallet_red" + prefix + ".png";









  _.extend($, exports);
}

module.exports = Controller;