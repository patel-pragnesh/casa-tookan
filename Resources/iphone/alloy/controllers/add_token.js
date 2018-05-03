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
  this.__controllerPath = 'add_token';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.add_token = Ti.UI.createView(
  { backgroundColor: "transparent", id: "add_token" });

  $.__views.add_token && $.addTopLevelView($.__views.add_token);
  $.__views.background = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#000000", opacity: 0, id: "background" });

  $.__views.add_token.add($.__views.background);
  $.__views.mainView = Ti.UI.createView(
  { width: "100%", height: Ti.UI.FILL, left: Alloy.Globals.display.width, backgroundColor: "#ffffff", id: "mainView" });

  $.__views.add_token.add($.__views.mainView);
  $.__views.listWrapper = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, id: "listWrapper" });

  $.__views.mainView.add($.__views.listWrapper);
  $.__views.search = Ti.UI.createSearchBar(
  { id: "search", barColor: "#ffffff", showCancel: true, height: 50 });

  $.__views.listWrapper.add($.__views.search);
  $.__views.tableViewFooter = Ti.UI.createView(
  { height: 50, width: Ti.UI.FILL, id: "tableViewFooter", visible: false });

  $.__views.__alloyId5 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId5" });

  $.__views.tableViewFooter.add($.__views.__alloyId5);
  $.__views.__alloyId6 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId6" });

  $.__views.__alloyId5.add($.__views.__alloyId6);
  $.__views.__alloyId7 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "__alloyId7" });

  $.__views.__alloyId5.add($.__views.__alloyId7);
  $.__views.tokenList = Ti.UI.createTableView(
  { width: Ti.UI.FILL, height: 0, top: 60, backgroundColor: "#ffffff", separatorStyle: Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE, selectionStyle: Titanium.UI.iOS.TableViewCellSelectionStyle.NONE, footerView: $.__views.tableViewFooter, id: "tokenList" });

  $.__views.listWrapper.add($.__views.tokenList);
  $.__views.errorMessage = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 60, color: "#ffffff", backgroundColor: Alloy.Globals.mainColor, id: "errorMessage", visible: false });

  $.__views.mainView.add($.__views.errorMessage);
  $.__views.__alloyId8 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, text: L("label_error_loading"), id: "__alloyId8" });

  $.__views.errorMessage.add($.__views.__alloyId8);
  $.__views.activityIndicator = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#ffffff", opacity: 0.5, id: "activityIndicator", visible: false });

  $.__views.mainView.add($.__views.activityIndicator);
  $.__views.__alloyId9 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId9" });

  $.__views.activityIndicator.add($.__views.__alloyId9);
  $.__views.activityIndicator = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#ffffff", opacity: 0.5, id: "activityIndicator", visible: false });

  $.__views.mainView.add($.__views.activityIndicator);
  $.__views.__alloyId10 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId10" });

  $.__views.activityIndicator.add($.__views.__alloyId10);
  $.__views.__alloyId11 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId11" });

  $.__views.__alloyId10.add($.__views.__alloyId11);
  $.__views.loadingLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "loadingLabel" });

  $.__views.__alloyId10.add($.__views.loadingLabel);
  $.__views.topbar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Alloy.Globals.topBarHeight, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "topbar" });

  $.__views.mainView.add($.__views.topbar);
  $.__views.backButton = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 28, left: 10 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_back"), id: "backButton" });
    return o;
  }());

  $.__views.topbar.add($.__views.backButton);
  $.__views.addTokenButton = Ti.UI.createView(
  { right: 5, top: 13, width: Ti.UI.SIZE, height: "100%", id: "addTokenButton" });

  $.__views.topbar.add($.__views.addTokenButton);
  showAddContract ? $.addListener($.__views.addTokenButton, 'click', showAddContract) : __defers['$.__views.addTokenButton!click!showAddContract'] = true;$.__views.__alloyId12 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, right: 30, textAlign: "right", text: L("label_enter_contract_address"), id: "__alloyId12" });

  $.__views.addTokenButton.add($.__views.__alloyId12);
  $.__views.__alloyId13 = Ti.UI.createImageView(
  { right: 0, width: 25, height: 25, image: "/images/icon_plus.png", id: "__alloyId13" });

  $.__views.addTokenButton.add($.__views.__alloyId13);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var network = require("requires/network");

  var util = require("requires/util");
  var cache = require("requires/cache");
  var win = Ti.UI.createWindow({
    "orientationModes": [Ti.UI.PORTRAIT],
    "navBarHidden": true,
    "backgroundColor": "transparent",
    "windowSoftInputMode": false ? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN : null });

  win.add($.add_token);
  win.open();

  if (false) {
    $.search.color = "black";
    $.search.barColor = "#d1d1d1";
  }

  var control = Ti.UI.createRefreshControl({
    tintColor: globals.currentColor });

  control.addEventListener('refreshstart', function (e) {

    $.tableViewFooter.visible = false;
    page = 1;
    loadTokens(true);
  });

  $.tokenList.refreshControl = control;

  var page = 1;
  var per_page = 20;

  var isLoading = false;
  var tableData = [];
  var tokensSection = null;

  var currentTokens = [];
  var allTokens = [];
  var searchValue = "";
  $.search.top = $.topbar.height;

  $.search.hide();
  $.search.addEventListener('blur', function (e) {

    searchValue = e.source.value;
    loadTokens(false);
  });
  $.search.addEventListener('return', function (e) {
    $.search.blur();
  });

  $.search.addEventListener('cancel', function (e) {
    $.search.blur();
  });

  $.tokenList.height = globals.display.height - $.topbar.height - $.search.height;

  $.tokenList.top = $.topbar.height + $.search.height;

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

      var offset = e.contentSize.height - e.contentOffset.y - $.tokenList.height + $.tableViewFooter.height;
      if (offset < 10 && offset >= 0) {
        loadMore = true;
      }
    }

    if (loadMore == true) {
      $.tableViewFooter.visible = true;
      page++;
      loadTokens(true);
    }
  });

  function showAddContract() {

    var child = Alloy.createController("add_contract_address_box", {
      "parent": $.add_token,
      "close": close });

    var childView = child.getView();
    child.on('close', function () {
      $.mainView.remove(childView);
    });
    $.mainView.add(childView);
  }
  function close(e) {
    $.background.animate({
      "opacity": 0,
      "duration": 200 });


    $.mainView.animate({
      "left": globals.display.width,
      "duration": 200 });


    setTimeout(function () {
      win.width = 0;
      win.close();
    }, 200);
  }
  globals.addButtonEvent($.backButton, close);
  $.background.animate({
    "opacity": 0.5,
    "duration": 200 });


  $.mainView.animate({
    "left": 0,
    "duration": 200 });


  function addTokens(tokens) {

    tableData = [];
    if (page == 1) {

      tokensSection = Ti.UI.createTableViewSection();
    }

    for (var i = 0; i < tokens.length; i++) {
      var args = {
        "id": i,
        "name": tokens[i].name,
        "symbol": tokens[i].symbol,
        "contractAddress": tokens[i].contractAddress,
        "close": close };

      var tokenBox = Alloy.createController('component_recommended_token', args).getView();
      var row = Ti.UI.createTableViewRow({
        className: 'recommended_token',
        backgroundSelectedColor: 'transparent',
        rowIndex: i,
        height: 92 });

      row.add(tokenBox);
      tokensSection.add(row);
    }

    tableData.push(tokensSection);
    $.tokenList.data = tableData;
  }

  function loadTokens(hideLoading) {

    isLoading = true;
    if (hideLoading == false) {
      $.activityIndicator.show();
    }

    network.connectGET({
      "chain": "eth",
      "version": "v1",
      "method": "tokens?page=" + page + "&per_page" + per_page + "&search=" + searchValue,
      "callback": function (result) {

        if (page == 1 && hideLoading) {
          $.tokenList.setData([]);
        }

        isLoading = false;
        allTokens = result;
        currentTokens = allTokens;
        $.activityIndicator.hide();
        addTokens(result);
        $.search.show();
      },
      "onError": function (error) {
        isLoading = false;
        $.activityIndicator.hide();
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
      },
      "always": function () {
        $.tableViewFooter.visible = false;
        control.endRefreshing();
        isLoading = false;
      } });

  }
  loadTokens(false);

  $.topbar.backgroundColor = globals.currentColor;





  __defers['$.__views.addTokenButton!click!showAddContract'] && $.addListener($.__views.addTokenButton, 'click', showAddContract);



  _.extend($, exports);
}

module.exports = Controller;