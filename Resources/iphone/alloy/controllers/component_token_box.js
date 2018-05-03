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
  this.__controllerPath = 'component_token_box';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.component_token_box = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, id: "component_token_box" });

  $.__views.component_token_box && $.addTopLevelView($.__views.component_token_box);
  $.__views.__alloyId41 = Ti.UI.createView(
  { top: 8, right: 8, width: "94%", height: 90, borderRadius: 20, backgroundColor: "rgba(0,0,0,0.05)", id: "__alloyId41" });

  $.__views.component_token_box.add($.__views.__alloyId41);
  $.__views.tokenBox = Ti.UI.createView(
  { width: "94%", borderRadius: 20, height: 90, top: 5, padding: 10, backgroundColor: "white", id: "tokenBox", postlayout: "getBalance" });

  $.__views.component_token_box.add($.__views.tokenBox);
  $.__views.tokenImage = Ti.UI.createImageView(
  { width: 48, height: 48, top: 7, left: 7, id: "tokenImage", defaultImage: "/images/image_blank.png" });

  $.__views.tokenBox.add($.__views.tokenImage);
  $.__views.tokenName = Ti.UI.createLabel(
  { width: 150, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, top: 10, left: 65, textAlign: "left", id: "tokenName" });

  $.__views.tokenBox.add($.__views.tokenName);
  $.__views.__alloyId42 = Ti.UI.createView(
  { id: "__alloyId42" });

  $.__views.tokenBox.add($.__views.__alloyId42);
  $.__views.balances = Ti.UI.createView(
  { width: 150, top: 10, right: 10, id: "balances", layout: "vertical" });

  $.__views.__alloyId42.add($.__views.balances);
  $.__views.__alloyId43 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, right: 0, layout: "horizontal", id: "__alloyId43" });

  $.__views.balances.add($.__views.__alloyId43);
  $.__views.tokenBalance = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, right: 0, top: 0, id: "tokenBalance" });

  $.__views.__alloyId43.add($.__views.tokenBalance);
  $.__views.tokenBalanceUnconfirmed = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 10, fontWeight: "normal" }, bottom: 0, id: "tokenBalanceUnconfirmed", visible: false });

  $.__views.__alloyId43.add($.__views.tokenBalanceUnconfirmed);
  $.__views.tokenBalanceFiat = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, right: 0, top: 1, id: "tokenBalanceFiat" });

  $.__views.balances.add($.__views.tokenBalanceFiat);
  $.__views.activityIndicator = Ti.UI.createActivityIndicator(
  { right: 10, top: 15, style: Ti.UI.ActivityIndicatorStyle.DARK, id: "activityIndicator", message: "" });

  $.__views.__alloyId42.add($.__views.activityIndicator);
  $.__views.infoButton = Ti.UI.createView(
  { width: 60, height: 60, left: 45, top: 20, id: "infoButton" });

  $.__views.tokenBox.add($.__views.infoButton);
  $.__views.__alloyId44 = Ti.UI.createImageView(
  { width: 25, height: 25, image: "/images/icon_info.png", id: "__alloyId44" });

  $.__views.infoButton.add($.__views.__alloyId44);
  $.__views.sendButton = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: 50, right: 10, bottom: -22, id: "sendButton", layout: "horizontal" });

  $.__views.tokenBox.add($.__views.sendButton);
  $.__views.__alloyId45 = Ti.UI.createImageView(
  { width: 18, height: 18, image: "/images/icon_send.png", id: "__alloyId45" });

  $.__views.sendButton.add($.__views.__alloyId45);
  $.__views.__alloyId46 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, left: 5, textAlign: "center", text: L("label_send"), id: "__alloyId46" });

  $.__views.sendButton.add($.__views.__alloyId46);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};
  var blockchain = require("requires/blockchain");
  var network = require("requires/network");
  var cache = require("requires/cache");
  var tiker = require("requires/tiker");
  var ethereum = require("requires/ethereum");
  var balanceLoaded = false;
  $.activityIndicator.hide();
  $.balances.visible = true;
  $.sendButton.visible = false;

  $.tokenBox.addEventListener('postlayout', function (e) {
    if (true) {
      getBalance();
    } else if (false) {
      getBalance();
    }
  });

  if (false) {
    if (args.id < 10) {

      getBalance();
    }
  }

  if (args.type == "ethereum") {
    if (args.token !== "ETH") {
      $.tokenBox.addEventListener('swipe', function (e) {

        if (e.direction == 'left') {

          var slide = Ti.UI.createAnimation({
            left: -70,
            duration: 200 });

          $.tokenBox.animate(slide);
        }
        if (e.direction == 'right') {
          var slide = Ti.UI.createAnimation({
            left: 0,
            duration: 200 });

          $.tokenBox.animate(slide);
        }
      });
    }





  }

  function showBalances() {
    $.tokenBalance.text = args.balance.toFixed2(8);
    $.tokenBalanceFiat.text = args.balanceFiat;
    if (args.unconfirmedBalance != 0) {
      $.tokenBalanceUnconfirmed.visible = true;
      $.tokenBalanceUnconfirmed.text = args.unconfirmedBalance;
    }

    $.sendButton.visible = true;
  }

  if (args.token.length >= 13) {
    $.tokenName.text = args.token.substr(0, 13) + "...";
  } else {
    $.tokenName.text = args.token;
  }

  if (args.type == "ethereum") {
    if (args.token === "ETH") {
      $.tokenImage.image = "/images/asset_eth.png";
    } else {
      console.log(Alloy.CFG.api_uri + "eth/v1/tokens/" + args.contractAddress + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key);
      $.tokenImage.image = Alloy.CFG.api_uri + "eth/v1/tokens/" + args.contractAddress + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key;
    }
  } else if (args.type == "bitcoin") {
    if (args.token === "BTC") {
      $.tokenImage.image = "/images/asset_btc.png";
    } else if (args.token === "XCP") {
      $.tokenImage.image = "/images/asset_xcp.png";
    } else {

      $.tokenImage.image = Alloy.CFG.api_uri + "btc/v1/tokens/" + args.token + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key;
    }
  }

  if (args.type == "ethereum") {
    if (args.token === "ETH") {
      $.infoButton.visible = false;
    } else {
      globals.addButtonEvent($.infoButton, function (e) {
        Titanium.Platform.openURL("https://etherscan.io/token/" + args.contractAddress);
      });
    }
  } else if (args.type == "bitcoin") {
    if (args.token === "BTC" || args.token === "XCP") {
      $.infoButton.visible = false;
    } else {
      globals.addButtonEvent($.infoButton, function (e) {
        Titanium.Platform.openURL("walletapp.indiesquare.me/explorer/#/tokens/" + args.token);
      });
    }
  }

  var isFiatLoaded = false;
  function loadFiat() {
    if (!isFiatLoaded) {

      if (args.type == "ethereum") {

        if (args.token == "ETH") {

          console.log("getting eth " + args.type + " " + args.token + " " + args.balance);
          args.balanceFiat = tiker.to(args.type, args.token, args.balance, cache.data.currency);
          console.log("getting eth " + args.balanceFiat);
          $.tokenBalanceFiat.text = args.balanceFiat;
          isFiatLoaded = true;
        }
      } else {

        if (args.token === "BTC" || args.token === "XCP") {
          if (args.token === "XCP" && !isFinite(args.balance)) globals.reorg_occured();
          args.balanceFiat = tiker.to(args.type, args.token, args.balance, cache.data.currency);
          $.tokenBalanceFiat.text = args.balanceFiat;
          isFiatLoaded = true;
        } else {
          network.connectGET({
            "chain": "btc",
            "version": "v1",
            "method": "markets/" + args.token,
            "callback": function (result) {
              isFiatLoaded = true;
              if (result.BTC.price > 0) {
                var xcpval = result.BTC.price * args.balance;
                $.tokenBalanceFiat.text = tiker.to(args.type, "BTC", xcpval, cache.data.currency, 4);
              } else {
                $.tokenBalanceFiat.text = "-";
              }
            },
            "onError": function (error) {
              console.error(args.token, error);
            } });

        }
      }
    }

  }

  globals.addButtonEvent($.sendButton, function (e) {
    Alloy.createController("send", {
      "token": args.token,
      "balance": args.balance,
      "contractAddress": args.contractAddress }).
    getView();

  });

  function getBalance() {
    if (args.type == "ethereum") {
      if (balanceLoaded == false) {
        $.activityIndicator.show();
        $.balances.visible = false;
        var token = args.contractAddress;

        blockchain.API.getBalances({
          "chain": "ethereum",
          "contractAddress": token,
          "callback": function (balances) {
            balanceLoaded = true;
            args.balance = parseFloat(balances.balance);

            args.unconfirmedBalance = balances.unconfirmedBalance;
            loadFiat();
            showBalances();
          },
          "onError": function (error) {
            console.log(error);
            $.tokenBalance.text = "error";
          },
          "always": function () {
            $.activityIndicator.hide();

            $.balances.visible = true;
          } });

      }
    } else if (args.type == "bitcoin") {

      loadFiat();
      showBalances();
    }
  }









  _.extend($, exports);
}

module.exports = Controller;