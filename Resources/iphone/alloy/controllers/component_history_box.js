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
  this.__controllerPath = 'component_history_box';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.component_history_box = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, id: "component_history_box" });

  $.__views.component_history_box && $.addTopLevelView($.__views.component_history_box);
  $.__views.__alloyId25 = Ti.UI.createView(
  { top: 8, right: 8, width: "94%", height: 150, borderRadius: 20, backgroundColor: "rgba(0,0,0,0.05)", id: "__alloyId25" });

  $.__views.component_history_box.add($.__views.__alloyId25);
  $.__views.tokenBoxHistory = Ti.UI.createView(
  { width: "94%", height: 150, top: 5, borderRadius: 20, padding: 10, backgroundColor: "white", id: "tokenBoxHistory" });

  $.__views.component_history_box.add($.__views.tokenBoxHistory);
  $.__views.__alloyId26 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: "100%", left: 10, id: "__alloyId26" });

  $.__views.tokenBoxHistory.add($.__views.__alloyId26);
  $.__views.tokenImage = Ti.UI.createImageView(
  { width: 40, height: 40, left: 4, top: 10, id: "tokenImage", defaultImage: "/images/image_blank.png" });

  $.__views.__alloyId26.add($.__views.tokenImage);
  $.__views.centerBox = Ti.UI.createView(
  { width: "65%", id: "centerBox" });

  $.__views.tokenBoxHistory.add($.__views.centerBox);
  $.__views.__alloyId27 = Ti.UI.createView(
  { height: Ti.UI.SIZE, layout: "vertical", id: "__alloyId27" });

  $.__views.centerBox.add($.__views.__alloyId27);
  $.__views.historyMessage = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, textAlign: "center", id: "historyMessage" });

  $.__views.__alloyId27.add($.__views.historyMessage);
  $.__views.historyAddress = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#0000ff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, id: "historyAddress" });

  $.__views.__alloyId27.add($.__views.historyAddress);
  $.__views.__alloyId28 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: "100%", right: 0, id: "__alloyId28" });

  $.__views.tokenBoxHistory.add($.__views.__alloyId28);
  $.__views.historyTime = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 8, fontWeight: "normal" }, right: 10, top: 5, id: "historyTime" });

  $.__views.__alloyId28.add($.__views.historyTime);
  $.__views.infoButton = Ti.UI.createView(
  { width: 40, height: 40, right: 5, id: "infoButton" });

  $.__views.__alloyId28.add($.__views.infoButton);
  $.__views.__alloyId29 = Ti.UI.createImageView(
  { width: 25, height: 25, image: "/images/icon_info.png", id: "__alloyId29" });

  $.__views.infoButton.add($.__views.__alloyId29);
  $.__views.tokenBoxLoading = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 40, top: 10, padding: 10, id: "tokenBoxLoading", visible: false });

  $.__views.component_history_box.add($.__views.tokenBoxLoading);
  $.__views.__alloyId30 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId30" });

  $.__views.tokenBoxLoading.add($.__views.__alloyId30);
  $.__views.__alloyId31 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId31" });

  $.__views.__alloyId30.add($.__views.__alloyId31);
  $.__views.__alloyId32 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, text: 'loading...', id: "__alloyId32" });

  $.__views.__alloyId30.add($.__views.__alloyId32);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var network = require("requires/network");
  var cache = require("requires/cache");
  var util = require("requires/util");

  var blockchain = require("requires/blockchain");

  if (args.id >= 0) {
    var history = args.history;
    var historyText = util.getTransactionStory(args.history);
    var address = "";

    var color = "#6db558";
    if (history.type == "send") color = globals.currentColor;else if (history.type == "order") color = "#4265d7";

    if (cache.data.chainId == blockchain.BITCOIN) {
      if (history.type === "send") {
        if (history.category === "Send") {
          history.type = "send";
          if (history.destinations == null) address = history.destination;
        } else {
          history.type = "receive";
          address = history.source;
        }
      }
    } else if (cache.data.chainId == blockchain.ETHEREUM) {

      if (history.type === "send") {
        if (history.to != cache.data.address) {
          history.type = "send";
          address = history.to;
        } else {
          history.type = "receive";
          address = history.from;
        }
      }
    }

    $.historyAddress.text = address;

    var formattedTime = history.time;
    if (history.unconfirm == undefined || !history.unconfirm) {
      if (cache.data.chainId == blockchain.BITCOIN) {
        var date = new Date(history.block_time * 1e3);
        formattedTime = date.getFullYear() + " " + (date.getMonth() + 1) + "/" + date.getDate() + " " + ("0" + date.getHours()).substr(-2) + ":" + ("0" + date.getMinutes()).substr(-2) + ":" + ("0" + date.getSeconds()).substr(-2);
      } else if (cache.data.chainId == blockchain.ETHEREUM) {
        var date = new Date(history.blockTime * 1e3);
        formattedTime = date.getFullYear() + " " + (date.getMonth() + 1) + "/" + date.getDate() + " " + ("0" + date.getHours()).substr(-2) + ":" + ("0" + date.getMinutes()).substr(-2) + ":" + ("0" + date.getSeconds()).substr(-2);
      }
    } else {
      formattedTime = L("label_unconfirmed");
      $.historyTime.color = "#e54353";
    }

    $.historyTime.text = formattedTime;
    $.historyMessage.text = historyText;

    if (cache.data.chainId == blockchain.BITCOIN) {
      if (history.token === "BTC") {
        $.tokenImage.image = "/images/asset_btc.png";
      } else if (history.token === "XCP") {
        $.tokenImage.image = "/images/asset_xcp.png";
      } else {
        if (history.type === "issuance" && history.unconfirm != undefined && history.unconfirm) $.tokenImage.image = Alloy.CFG.res_uri + "btc/v1/tokens/images/" + history.token.charAt(0).toLowerCase() + ".png";else if (history.type === "order") {

          $.tokenImage.image = Alloy.CFG.api_uri + "btc/v1/tokens/" + history.get_token + "/image?X-Api-Key=" + Alloy.Globals.api_key;
        } else {
          $.tokenImage.image = Alloy.CFG.api_uri + "btc/v1/tokens/" + history.token + "/image?X-Api-Key=" + Alloy.Globals.api_key;
        }
      }
    } else if (cache.data.chainId == blockchain.ETHEREUM) {

      if (history.token === "Ether") {
        $.tokenImage.image = "/images/asset_eth.png";
      } else {
        if (history.contractAddress != undefined) {
          $.tokenImage.image = Alloy.CFG.api_uri + "eth/v1/tokens/" + history.contractAddress + "/image?X-Api-Key=" + Alloy.Globals.api_key;
        }
      }
    }
    globals.addButtonEvent($.infoButton, function (e) {
      if (cache.data.chainId == blockchain.BITCOIN) {
        var url = Alloy.CFG.walletapp_uri + "explorer/#/tx/" + history.tx_hash;
      } else if (cache.data.chainId == blockchain.ETHEREUM) {
        var url = "https://etherscan.io/tx/" + history.txHash;
      }
      Alloy.createController("weblink", {
        "path": url,
        "barColor": "#009688" }).
      getView().open();
    });

    if (address.length > 0) {
      $.centerBox.addEventListener("touchend", function () {
        Ti.UI.Clipboard.setText(address);
        util.createDialog({
          "message": L("label_copied"),
          "buttonNames": [L("label_close")] }).
        show();
      });
    }
  } else {











  }









  _.extend($, exports);
}

module.exports = Controller;