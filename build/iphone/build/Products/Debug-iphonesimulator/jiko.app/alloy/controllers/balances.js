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







  $.__views.listWrapper = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, id: "listWrapper" });

  $.__views.listWrapper && $.addTopLevelView($.__views.listWrapper);
  $.__views.tableViewFooter = Ti.UI.createView(
  { height: 50, width: Ti.UI.FILL, id: "tableViewFooter", visible: false });

  $.__views.__alloyId15 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId15" });

  $.__views.tableViewFooter.add($.__views.__alloyId15);
  $.__views.__alloyId16 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId16" });

  $.__views.__alloyId15.add($.__views.__alloyId16);
  $.__views.__alloyId17 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "__alloyId17" });

  $.__views.__alloyId15.add($.__views.__alloyId17);
  $.__views.tokenList = Ti.UI.createTableView(
  { width: Ti.UI.FILL, height: 0, top: 60, backgroundColor: "#ececec", separatorStyle: Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE, selectionStyle: Titanium.UI.iOS.TableViewCellSelectionStyle.NONE, footerView: $.__views.tableViewFooter, id: "tokenList" });

  $.__views.listWrapper.add($.__views.tokenList);
  $.__views.errorMessage = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 60, color: "#ffffff", backgroundColor: Alloy.Globals.mainColor, id: "errorMessage", visible: false });

  $.__views.errorMessage && $.addTopLevelView($.__views.errorMessage);
  $.__views.__alloyId18 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, text: L("label_error_loading"), id: "__alloyId18" });

  $.__views.errorMessage.add($.__views.__alloyId18);
  $.__views.activityIndicator = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#ffffff", opacity: 0.5, id: "activityIndicator", visible: false });

  $.__views.activityIndicator && $.addTopLevelView($.__views.activityIndicator);
  $.__views.__alloyId19 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId19" });

  $.__views.activityIndicator.add($.__views.__alloyId19);
  $.__views.__alloyId20 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId20" });

  $.__views.__alloyId19.add($.__views.__alloyId20);
  $.__views.loadingLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "loadingLabel" });

  $.__views.__alloyId19.add($.__views.loadingLabel);
  $.__views.tokenTopBar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Alloy.Globals.topBarHeight, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "tokenTopBar" });

  $.__views.tokenTopBar && $.addTopLevelView($.__views.tokenTopBar);
  $.__views.__alloyId21 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 28 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_tab_casa"), id: "__alloyId21" });
    return o;
  }());

  $.__views.tokenTopBar.add($.__views.__alloyId21);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var cache = require("requires/cache");
  var util = require("requires/util");
  var network = require("requires/network");
  var blockchain = require("requires/blockchain");
  var bitcoin = require("requires/bitcoin");
  var ethereum = require("requires/ethereum");
  var isLoading = false;
  var loadingRequest = null;

  var itemNumber = 0;
  var page = 1;
  var per_page = 25;
  var tokensSection = null;

  $.tokenList.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight);

  $.tokenList.top = $.tokenTopBar.height;

  $.tokenList.addEventListener("scroll", function (e) {

    if (isLoading) {
      return;
    }
    loadMore = false;

    if (false) {

      if (e.firstVisibleItem == e.totalItemCount - e.visibleItemCount) {
        loadMore = true;
      }
    } else if (true) {


      var offset = e.contentSize.height - e.contentOffset.y - $.tokenList.height;
      if (offset < 10 && offset >= 0) {
        loadMore = true;
      }
    }

    if (loadMore == true) {
      $.tableViewFooter.visible = true;
      page++;
      loadBalance(true);

      if (true) {

      }
    }
  });

  var control = Ti.UI.createRefreshControl({
    tintColor: globals.currentColor });

  control.addEventListener('refreshstart', function (e) {

    page = 1;
    itemNumber = 1;
    loadBalance(true);
  });

  $.tokenList.refreshControl = control;

  function addBalances(balances) {

    var tableData = [];
    if (page == 1) {

      tokensSection = Ti.UI.createTableViewSection();
    }

    if (cache.data.chainId == blockchain.BITCOIN) {

      for (var i = 0; i < balances.length; i++) {
        itemNumber++;
        var args = {
          "id": itemNumber,
          "token": balances[i].token,
          "balance": Number(balances[i].balance),
          "unconfirmedBalance": balances[i].unconfirmedBalance,
          "balanceFiat": "",
          "type": cache.data.chainId,
          "parent": $.tokenList };

        var tokenBox = Alloy.createController('component_token_box', args).getView();

        var row = Ti.UI.createTableViewRow({
          className: 'token',
          backgroundSelectedColor: 'transparent',
          rowIndex: i,
          height: 100 });

        row.add(tokenBox);

        tokensSection.add(row);
      }
    } else if (cache.data.chainId == blockchain.ETHEREUM) {
      var userTokens = {};
      userTokens["ETH"] = { name: "ETH" };

      userTokens = Object.assign({}, userTokens, ethereum.getTokens());

      var tokenKeys = Object.keys(userTokens);
      for (var i = 0; i < tokenKeys.length; i++) {
        var aKey = tokenKeys[i];
        var args = {
          "type": cache.data.chainId,
          "contractAddress": aKey,
          "id": i,
          "token": userTokens[aKey].name,
          "balance": -1,
          "unconfirmedBalance": -1,
          "balanceFiat": "",
          "parent": $.tokenList };

        var tokenBox = Alloy.createController('component_token_box', args).getView();
        var row = Ti.UI.createTableViewRow({
          className: 'token',
          backgroundSelectedColor: 'transparent',
          rowIndex: balances.length + i - 1,
          height: 92 });

        row.add(tokenBox);
        tokensSection.add(row);
      }
    }

    tableData.push(tokensSection);
    $.tokenList.data = tableData;
  }

  function loadBalance(hideLoading) {

    if (loadingRequest != null) {
      console.log("aborting last request");
      loadingRequest.abort();
    }

    if (cache.data.chainId == blockchain.BITCOIN) {
      isLoading = true;
      if (hideLoading == false) {
        $.activityIndicator.show();
      }

      loadingRequest = blockchain.API.getBalances({
        "page": page,
        "per_page": per_page,
        "callback": function (balances) {
          if (page == 1 && hideLoading) {
            $.tokenList.setData([]);
          }

          globals.balances = balances;
          addBalances(balances);
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
          if (page != 1) {
            page--;
          }
          $.errorMessage.show();
        },
        "always": function () {

          $.activityIndicator.hide();
          control.endRefreshing();
          $.tableViewFooter.visible = false;
          isLoading = false;
        } });

    } else if (cache.data.chainId == blockchain.ETHEREUM) {
      $.activityIndicator.hide();
      addBalances([]);
      setTimeout(function () {
        control.endRefreshing();
      }, 700);
    }
  }

  function refreshTokens() {
    page = 1;
    itemNumber = 0;
    if (!isLoading) {

      loadBalance(false);
    }
  }

  $.errorMessage.addEventListener("touchend", function () {
    $.errorMessage.hide();

    loadBalance(false);
  });

  $.activityIndicator.show();
  util.initialSetup(function () {

    loadBalance(false);
  });

  globals.refreshTokens = refreshTokens;

  globals.updateTokenUI = function () {};

  globals.updateTokenUI();









  _.extend($, exports);
}

module.exports = Controller;