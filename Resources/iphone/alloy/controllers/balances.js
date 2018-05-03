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
  this.__controllerPath = 'balances';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.chainBar = Ti.UI.createView(
  { width: "100%", height: 40, top: Alloy.Globals.tabBarHeight, backgroundColor: "#f3f3f3", id: "chainBar" });

  $.__views.chainBar && $.addTopLevelView($.__views.chainBar);
  $.__views.tabCounterparty = Ti.UI.createView(
  { width: "50%", left: 0, id: "tabCounterparty", layout: "vertical" });

  $.__views.chainBar.add($.__views.tabCounterparty);
  $.__views.tabCounterpartyButton = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: "100%", color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, text: 'Counterparty', id: "tabCounterpartyButton" });

  $.__views.tabCounterparty.add($.__views.tabCounterpartyButton);
  $.__views.tabEthereum = Ti.UI.createView(
  { width: "50%", right: 0, id: "tabEthereum", layout: "vertical" });

  $.__views.chainBar.add($.__views.tabEthereum);
  $.__views.tabEthereumButton = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: "100%", color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, text: 'Ethereum', id: "tabEthereumButton" });

  $.__views.tabEthereum.add($.__views.tabEthereumButton);
  $.__views.tableViewFooterBitcoin = Ti.UI.createView(
  { height: 50, width: Ti.UI.FILL, id: "tableViewFooterBitcoin", visible: false });

  $.__views.__alloyId15 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId15" });

  $.__views.tableViewFooterBitcoin.add($.__views.__alloyId15);
  $.__views.__alloyId16 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId16" });

  $.__views.__alloyId15.add($.__views.__alloyId16);
  $.__views.__alloyId17 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "__alloyId17" });

  $.__views.__alloyId15.add($.__views.__alloyId17);
  $.__views.bitcoinList = Ti.UI.createTableView(
  { width: Ti.UI.FILL, height: 0, top: 60, backgroundColor: "#ececec", separatorStyle: Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE, selectionStyle: Titanium.UI.iOS.TableViewCellSelectionStyle.NONE, footerView: $.__views.tableViewFooterBitcoin, id: "bitcoinList" });

  $.__views.bitcoinList && $.addTopLevelView($.__views.bitcoinList);
  $.__views.tableViewFooterEthereum = Ti.UI.createView(
  { height: 50, width: Ti.UI.FILL, id: "tableViewFooterEthereum", visible: false });

  $.__views.__alloyId19 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId19" });

  $.__views.tableViewFooterEthereum.add($.__views.__alloyId19);
  $.__views.__alloyId20 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId20" });

  $.__views.__alloyId19.add($.__views.__alloyId20);
  $.__views.__alloyId21 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "__alloyId21" });

  $.__views.__alloyId19.add($.__views.__alloyId21);
  $.__views.ethereumList = Ti.UI.createTableView(
  { width: Ti.UI.FILL, height: 0, top: 60, backgroundColor: "#ececec", separatorStyle: Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE, selectionStyle: Titanium.UI.iOS.TableViewCellSelectionStyle.NONE, footerView: $.__views.tableViewFooterEthereum, id: "ethereumList", visible: false });

  $.__views.ethereumList && $.addTopLevelView($.__views.ethereumList);
  $.__views.errorMessageBitcoin = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 60, color: "#ffffff", backgroundColor: Alloy.Globals.mainColor, id: "errorMessageBitcoin", visible: false });

  $.__views.errorMessageBitcoin && $.addTopLevelView($.__views.errorMessageBitcoin);
  $.__views.__alloyId22 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, text: L("label_error_loading"), id: "__alloyId22" });

  $.__views.errorMessageBitcoin.add($.__views.__alloyId22);
  $.__views.errorMessageEthereum = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 60, color: "#ffffff", backgroundColor: Alloy.Globals.mainColor, id: "errorMessageEthereum", visible: false });

  $.__views.errorMessageEthereum && $.addTopLevelView($.__views.errorMessageEthereum);
  $.__views.__alloyId23 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, text: L("label_error_loading"), id: "__alloyId23" });

  $.__views.errorMessageEthereum.add($.__views.__alloyId23);
  $.__views.activityIndicatorBitcoin = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#ffffff", opacity: 0.5, id: "activityIndicatorBitcoin", visible: false });

  $.__views.activityIndicatorBitcoin && $.addTopLevelView($.__views.activityIndicatorBitcoin);
  $.__views.__alloyId24 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId24" });

  $.__views.activityIndicatorBitcoin.add($.__views.__alloyId24);
  $.__views.__alloyId25 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId25" });

  $.__views.__alloyId24.add($.__views.__alloyId25);
  $.__views.loadingLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "loadingLabel" });

  $.__views.__alloyId24.add($.__views.loadingLabel);
  $.__views.activityIndicatorEthereum = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#ffffff", opacity: 0.5, id: "activityIndicatorEthereum", visible: false });

  $.__views.activityIndicatorEthereum && $.addTopLevelView($.__views.activityIndicatorEthereum);
  $.__views.__alloyId26 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId26" });

  $.__views.activityIndicatorEthereum.add($.__views.__alloyId26);
  $.__views.__alloyId27 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId27" });

  $.__views.__alloyId26.add($.__views.__alloyId27);
  $.__views.loadingLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "loadingLabel" });

  $.__views.__alloyId26.add($.__views.loadingLabel);
  $.__views.tokenTopBar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Alloy.Globals.topBarHeight, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "tokenTopBar" });

  $.__views.tokenTopBar && $.addTopLevelView($.__views.tokenTopBar);
  $.__views.settingsButton = Ti.UI.createImageView(
  { left: 10, width: 30, bottom: 10, id: "settingsButton", image: "/images/tookan.png" });

  $.__views.tokenTopBar.add($.__views.settingsButton);
  $.__views.registerButton = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, bottom: 10, right: 5, text: 'register token', id: "registerButton" });

  $.__views.tokenTopBar.add($.__views.registerButton);
  $.__views.__alloyId28 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 28 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_tab_casa"), id: "__alloyId28" });
    return o;
  }());

  $.__views.tokenTopBar.add($.__views.__alloyId28);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var cache = require("requires/cache");
  var util = require("requires/util");
  var network = require("requires/network");
  var blockchain = require("requires/blockchain");
  var bitcoin = require("requires/bitcoin");
  var ethereum = require("requires/ethereum");
  var isLoadingBitcoin = false;
  var loadingRequestBitcoin = null;

  var isLoadingEthereum = false;
  var loadingRequestEthereum = null;

  var itemNumberBitcoin = 0;
  var pageBitcoin = 1;
  var perPageBitcoin = 25;
  var tokensSectionBitcoin = null;

  var itemNumberEthereum = 0;
  var pageEthereum = 1;
  var perPageEthereum = 25;
  var tokensSectionEthereum = null;
  $.registerButton.visible = false;
  globals.loadedEthereumBalances = false;

  $.settingsButton.addEventListener("touchend", function () {
    Alloy.createController("settings").getView();
  });

  $.tabCounterparty.backgroundColor = "rgba(0,0,0,0.2)";

  var tabColor = "#f3f3f3";

  $.tabCounterparty.addEventListener("touchend", function () {

    $.registerButton.visible = false;
    $.tabCounterparty.backgroundColor = "rgba(0,0,0,0.2)";
    $.tabEthereum.backgroundColor = tabColor;

    $.bitcoinList.visible = true;
    $.ethereumList.visible = false;

    loadBitcoinBalance(true);
  });

  $.tabEthereum.addEventListener("touchend", function () {
    $.registerButton.visible = true;
    $.tabEthereum.backgroundColor = "rgba(0,0,0,0.2)";
    $.tabCounterparty.backgroundColor = tabColor;

    $.bitcoinList.visible = false;
    $.ethereumList.visible = true;

    if (globals.loadedEthereumBalances == false) {
      globals.loadedEthereumBalances = true;
      loadEthereumBalance(true);
    }
  });

  $.chainBar.top = Alloy.Globals.topBarHeight;
  $.bitcoinList.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight) - $.chainBar.height;

  $.bitcoinList.top = $.chainBar.height + $.chainBar.top;

  $.ethereumList.height = $.bitcoinList.height;
  $.ethereumList.top = $.bitcoinList.top;

  $.bitcoinList.addEventListener("scroll", function (e) {

    if (isLoadingBitcoin) {
      return;
    }
    loadMoreBitcoin = false;

    if (false) {

      if (e.firstVisibleItem == e.totalItemCount - e.visibleItemCount) {
        loadMoreBitcoin = true;
      }
    } else if (true) {


      var offset = e.contentSize.height - e.contentOffset.y - $.bitcoinList.height;
      if (offset < 10 && offset >= 0) {
        loadMoreBitcoin = true;
      }
    }

    if (loadMoreBitcoin == true) {
      $.tableViewFooterBitcoin.visible = true;
      pageBitcoin++;
      loadBitcoinBalance(true);

      if (true) {

      }
    }
  });

  var controlBitcoin = Ti.UI.createRefreshControl({
    tintColor: globals.currentColor });

  controlBitcoin.addEventListener('refreshstart', function (e) {

    pageBitcoin = 1;
    itemNumberBitcoin = 1;
    loadBitcoinBalance(true);
  });

  $.bitcoinList.refreshControl = controlBitcoin;

  $.ethereumList.addEventListener("scroll", function (e) {

    if (isLoadingEthereum) {
      return;
    }
    loadMoreEthereum = false;

    if (false) {

      if (e.firstVisibleItem == e.totalItemCount - e.visibleItemCount) {
        loadMoreEthereum = true;
      }
    } else if (true) {


      var offset = e.contentSize.height - e.contentOffset.y - $.ethereumList.height;
      if (offset < 10 && offset >= 0) {
        loadMoreEthereum = true;
      }
    }

    if (loadMoreEthereum == true) {
      $.tableViewFooterEthereum.visible = true;
      pageEthereum++;
      loadEthereumBalance(true);

      if (true) {

      }
    }
  });

  var controlEthereum = Ti.UI.createRefreshControl({
    tintColor: globals.currentColor });

  controlEthereum.addEventListener('refreshstart', function (e) {

    pageEthereum = 1;
    itemNumberEthereum = 1;
    loadEthereumBalance(true);
  });

  $.ethereumList.refreshControl = controlEthereum;

  function addBalancesBitcoin(balances) {

    var tableData = [];
    if (pageBitcoin == 1) {

      tokensSectionBitcoin = Ti.UI.createTableViewSection();
    }

    for (var i = 0; i < balances.length; i++) {
      itemNumberBitcoin++;
      var args = {
        "id": itemNumberBitcoin,
        "token": balances[i].token,
        "balance": Number(balances[i].balance),
        "unconfirmedBalance": balances[i].unconfirmedBalance,
        "balanceFiat": "",
        "type": "bitcoin",
        "parent": $.bitcoinList };

      var tokenBox = Alloy.createController('component_token_box', args).getView();

      var row = Ti.UI.createTableViewRow({
        className: 'token',
        backgroundSelectedColor: 'transparent',
        rowIndex: i,
        height: 100 });

      row.add(tokenBox);

      tokensSectionBitcoin.add(row);
    }

    tableData.push(tokensSectionBitcoin);
    $.bitcoinList.data = tableData;
  }

  function addBalancesEthereum(balances) {

    var tableData = [];
    if (pageEthereum == 1) {

      tokensSectionEthereum = Ti.UI.createTableViewSection();
    }

    var userTokens = {};
    userTokens["ETH"] = { name: "ETH" };

    userTokens = Object.assign({}, userTokens, ethereum.getTokens());

    var tokenKeys = Object.keys(userTokens);
    for (var i = 0; i < tokenKeys.length; i++) {
      var aKey = tokenKeys[i];
      var args = {
        "type": "ethereum",
        "contractAddress": aKey,
        "id": i,
        "token": userTokens[aKey].name,
        "balance": -1,
        "unconfirmedBalance": -1,
        "balanceFiat": "",
        "parent": $.ethereumList };

      var tokenBox = Alloy.createController('component_token_box', args).getView();
      var row = Ti.UI.createTableViewRow({
        className: 'token',
        backgroundSelectedColor: 'transparent',
        rowIndex: balances.length + i - 1,
        height: 100 });

      row.add(tokenBox);
      tokensSectionEthereum.add(row);
    }

    tableData.push(tokensSectionEthereum);
    $.ethereumList.data = tableData;
  }

  function loadBitcoinBalance(hideLoading) {

    if (loadingRequestBitcoin != null) {
      console.log("aborting last request");
      loadingRequestBitcoin.abort();
    }

    isLoadingBitcoin = true;
    if (hideLoading == false) {
      $.activityIndicatorBitcoin.show();
    }

    loadingRequest = blockchain.API.getBalances({
      "chain": "bitcoin",
      "page": pageBitcoin,
      "per_page": perPageBitcoin,
      "callback": function (balances) {
        if (pageBitcoin == 1 && hideLoading) {
          $.bitcoinList.setData([]);
        }

        addBalancesBitcoin(balances);
      },
      "onError": function (error) {
        if (error.message == undefined) {
          error = error.error;
        }
        util.createDialog({
          "title": error.type,
          "message": error.message,
          "buttonNames": [L("label_close")] }).
        show();
        if (pageBitcoin != 1) {
          pageBitcoin--;
        }
        $.errorMessageBitcoin.show();
      },
      "always": function () {

        $.activityIndicatorBitcoin.hide();
        controlBitcoin.endRefreshing();
        $.tableViewFooterBitcoin.visible = false;
        isLoadingBitcoin = false;
      } });

  }

  function loadEthereumBalance(hideLoading) {

    if (loadingRequestEthereum != null) {
      console.log("aborting last request");
      loadingRequestBitcoin.abort();
    }

    $.activityIndicatorEthereum.hide();
    addBalancesEthereum([]);
    setTimeout(function () {
      controlEthereum.endRefreshing();
    }, 700);
  }

  function refreshTokens() {
    pageBitcoin = 1;
    itemNumberBitcoin = 0;
    if (!isLoadingBitcoin) {

      loadBitcoinBalance(false);
    }

    pageEthereum = 1;
    itemNumberEthereum = 0;
    if (!isLoadingEthereum) {

      loadEthereumBalance(false);
    }
  }
  $.registerButton.addEventListener("click", function () {
    Alloy.createController("add_token").getView();
  });

  $.errorMessageBitcoin.addEventListener("touchend", function () {
    $.errorMessageBitcoin.hide();

    loadBitcoinBalance(false);
  });

  $.errorMessageEthereum.addEventListener("touchend", function () {
    $.errorMessageEthereum.hide();

    loadEthereumBalance(false);
  });

  $.activityIndicatorBitcoin.show();

  $.activityIndicatorEthereum.show();

  util.initialSetup(function () {

    loadBitcoinBalance(false);
    loadEthereumBalance(false);
  });

  globals.refreshTokens = refreshTokens;









  _.extend($, exports);
}

module.exports = Controller;