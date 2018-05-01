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
  this.__controllerPath = 'news';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.newsBar = Ti.UI.createView(
  { width: "100%", height: 40, layout: "horizontal", top: Alloy.Globals.tabBarHeight, backgroundColor: "#f3f3f3", id: "newsBar" });

  $.__views.newsBar && $.addTopLevelView($.__views.newsBar);
  $.__views.tabnew = Ti.UI.createView(
  { width: "24.9%", id: "tabnew", layout: "vertical" });

  $.__views.newsBar.add($.__views.tabnew);
  $.__views.__alloyId112 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: "100%", color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, text: 'NEW', id: "__alloyId112" });

  $.__views.tabnew.add($.__views.__alloyId112);
  $.__views.tabstar = Ti.UI.createView(
  { width: "24.9%", id: "tabstar", layout: "vertical" });

  $.__views.newsBar.add($.__views.tabstar);
  $.__views.__alloyId113 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: "100%", color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, text: 'STAR', id: "__alloyId113" });

  $.__views.tabstar.add($.__views.__alloyId113);
  $.__views.tabread = Ti.UI.createView(
  { width: "24.9%", id: "tabread", layout: "vertical" });

  $.__views.newsBar.add($.__views.tabread);
  $.__views.__alloyId114 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: "100%", color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, text: 'READ', id: "__alloyId114" });

  $.__views.tabread.add($.__views.__alloyId114);
  $.__views.tabfilt = Ti.UI.createView(
  { width: "24.9%", id: "tabfilt", layout: "vertical" });

  $.__views.newsBar.add($.__views.tabfilt);
  $.__views.__alloyId115 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: "100%", color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, text: 'FILTER', id: "__alloyId115" });

  $.__views.tabfilt.add($.__views.__alloyId115);
  $.__views.tableViewFooter = Ti.UI.createView(
  { height: 50, width: Ti.UI.FILL, id: "tableViewFooter", visible: false });

  $.__views.__alloyId117 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId117" });

  $.__views.tableViewFooter.add($.__views.__alloyId117);
  $.__views.__alloyId118 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId118" });

  $.__views.__alloyId117.add($.__views.__alloyId118);
  $.__views.__alloyId119 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "__alloyId119" });

  $.__views.__alloyId117.add($.__views.__alloyId119);
  $.__views.newsList = Ti.UI.createTableView(
  { width: Ti.UI.FILL, height: 0, backgroundColor: "#ececec", separatorStyle: Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE, selectionStyle: Titanium.UI.iOS.TableViewCellSelectionStyle.NONE, footerView: $.__views.tableViewFooter, id: "newsList" });

  $.__views.newsList && $.addTopLevelView($.__views.newsList);
  $.__views.errorMessage = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 60, color: "#ffffff", backgroundColor: Alloy.Globals.mainColor, id: "errorMessage", visible: false });

  $.__views.errorMessage && $.addTopLevelView($.__views.errorMessage);
  $.__views.__alloyId120 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, text: L("label_error_loading"), id: "__alloyId120" });

  $.__views.errorMessage.add($.__views.__alloyId120);
  $.__views.emptyMessage = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 60, color: "#ececec", backgroundColor: "transparent", id: "emptyMessage", visible: false });

  $.__views.emptyMessage && $.addTopLevelView($.__views.emptyMessage);
  $.__views.__alloyId121 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, text: L("label_history_empty"), id: "__alloyId121" });

  $.__views.emptyMessage.add($.__views.__alloyId121);
  $.__views.activityIndicator = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#ffffff", opacity: 0.5, id: "activityIndicator", visible: false });

  $.__views.activityIndicator && $.addTopLevelView($.__views.activityIndicator);
  $.__views.__alloyId122 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId122" });

  $.__views.activityIndicator.add($.__views.__alloyId122);
  $.__views.__alloyId123 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: true, id: "__alloyId123" });

  $.__views.__alloyId122.add($.__views.__alloyId123);
  $.__views.loadingLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: L("label_loading"), id: "loadingLabel" });

  $.__views.__alloyId122.add($.__views.loadingLabel);
  $.__views.newsTopBar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Alloy.Globals.topBarHeight, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "newsTopBar" });

  $.__views.newsTopBar && $.addTopLevelView($.__views.newsTopBar);
  $.__views.settingsButton = Ti.UI.createImageView(
  { left: 10, width: 30, bottom: 10, id: "settingsButton", image: "/images/tookan.png" });

  $.__views.newsTopBar.add($.__views.settingsButton);
  $.__views.__alloyId124 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 28 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
    Alloy.deepExtend(true, o, { text: L("label_tab_news"), id: "__alloyId124" });
    return o;
  }());

  $.__views.newsTopBar.add($.__views.__alloyId124);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var cache = require("requires/cache");
  var util = require("requires/util");
  var network = require("requires/network");
  var blockchain = require("requires/blockchain");
  var bitcoin = require("requires/bitcoin");
  var loadingRequest = null;
  var isLoading = false;

  var unkownDiff = 5;
  $.newsList.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight) - $.newsBar.height + unkownDiff;
  $.newsList.top = Alloy.Globals.topBarHeight + 40 - unkownDiff;

  $.newsList.addEventListener("scroll", function (e) {

    if (isLoading) {
      return;
    }
    loadMore = false;

    if (false) {
      if (e.firstVisibleItem == e.totalItemCount - e.visibleItemCount) {
        loadMore = true;
      }
    } else if (true) {

      var offset = e.contentSize.height - e.contentOffset.y - $.newsList.height;
      if (offset < 10 && offset >= 0) {
        loadMore = true;
      }
    }

    if (loadMore == true) {
      $.tableViewFooter.visible = true;
      page++;
      loadHistory(true);
    }
  });

  var itemNumber = 0;

  var page = 1;
  var per_page = 20;
  var historySection = null;

  var pulling = false;
  var reloading = false;
  var offset = 0;

  var control = Ti.UI.createRefreshControl({
    tintColor: globals.currentColor });

  $.newsList.refreshControl = control;

  control.addEventListener('refreshstart', function (e) {
    itemNumber = 0;
    page = 1;

    loadHistory(true);
  });

  function addHistory(history) {

    var tableData = [];

    if (page == 1) {

      historySection = Ti.UI.createTableViewSection();
    }

    for (var i = 0; i < history.length; i++) {

      itemNumber++;
      var args = {
        "id": itemNumber,
        "history": history[i],
        "parent": $.newsList };

      var historyBox = Alloy.createController('component_history_box', args).getView();

      var row = Ti.UI.createTableViewRow({
        className: 'history',
        backgroundSelectedColor: 'transparent',
        rowIndex: i,
        height: 160 });

      row.add(historyBox);
      historySection.add(row);
    }

    tableData.push(historySection);
    $.newsList.data = tableData;
  }

  $.settingsButton.addEventListener("touchend", function () {
    Alloy.createController("settings").getView();
  });

  function getHistory(callback) {
    loadingRequest = blockchain.API.getHistory({
      "per_page": per_page,
      "page": page,
      "callback": function (history) {
        callback(history);
      },
      "onError": function (error) {
        util.createDialog({
          "title": error.type,
          "message": error.message,
          "buttonNames": [L("label_close")] }).
        show();
        if (page != 1) {
          page -= 1;
        }
        $.errorMessage.show();
      },
      "always": function () {

        $.activityIndicator.hide();
        control.endRefreshing();
        $.tableViewFooter.visible = false;
        isLoading = false;
      } });

  }

  function loadHistory(hideLoading) {

    if (loadingRequest != null) {
      console.log("aborting last request");
      loadingRequest.abort();
    }

    isLoading = true;
    if (hideLoading == false) {
      $.activityIndicator.show();
    }
    getHistory(function (history) {
      if (history.length > 0) {
        $.newsList.removeAllChildren();
        addHistory(history);
      } else {
        if (page == 1) {
          $.newsList.data = [];
          $.newsList.removeAllChildren();
          $.emptyMessage.show();
        }
      }
    });
  }

  function refreshHistory() {
    itemNumber = 1;
    page = 1;

    loadHistory(false);
  }

  $.errorMessage.addEventListener("touchend", function () {
    $.errorMessage.hide();

    loadHistory(false);
  });

  $.emptyMessage.addEventListener("touchend", function () {
    $.emptyMessage.hide();

    loadHistory(false);
  });

  loadHistory(false);

  globals.refreshHistory = refreshHistory;

  globals.updateHistoryUI = function () {
    $.newsTopBar.backgroundColor = globals.currentColor;

    $.newsList.refreshControl.tintColor = globals.currentColor;
  };
  globals.updateHistoryUI();









  _.extend($, exports);
}

module.exports = Controller;