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
  this.__controllerPath = 'settings';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.settings = Ti.UI.createView(
  { backgroundColor: "transparent", id: "settings" });

  $.__views.settings && $.addTopLevelView($.__views.settings);
  $.__views.background = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#000000", opacity: 0, id: "background" });

  $.__views.settings.add($.__views.background);
  $.__views.mainView = Ti.UI.createView(
  { width: "100%", height: Ti.UI.FILL, backgroundColor: "#ffffff", left: Alloy.Globals.display.width, id: "mainView", layout: "vertical" });

  $.__views.settings.add($.__views.mainView);
  $.__views.__alloyId145 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Alloy.Globals.topBarHeight, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "__alloyId145" });

  $.__views.mainView.add($.__views.__alloyId145);
  $.__views.gobackButton = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, left: 10, bottom: 10, text: L("label_goback"), id: "gobackButton" });

  $.__views.__alloyId145.add($.__views.gobackButton);
  $.__views.signoutButton = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, bottom: 10, right: 5, text: L("label_settings_signout"), id: "signoutButton" });

  $.__views.__alloyId145.add($.__views.signoutButton);
  $.__views.topView = Ti.UI.createView(
  { top: 20, height: Ti.UI.SIZE, width: Ti.UI.FILL, id: "topView", layout: "horizontal" });

  $.__views.mainView.add($.__views.topView);
  $.__views.casaHomeView = Ti.UI.createView(
  { width: "29.9%", height: Ti.UI.SIZE, id: "casaHomeView" });

  $.__views.topView.add($.__views.casaHomeView);
  $.__views.caseHomeImage = Ti.UI.createImageView(
  { width: "90%", id: "caseHomeImage", image: "/images/tookan.png" });

  $.__views.casaHomeView.add($.__views.caseHomeImage);
  $.__views.balancesView = Ti.UI.createView(
  { height: Ti.UI.SIZE, width: "70%", id: "balancesView", layout: "vertical" });

  $.__views.topView.add($.__views.balancesView);
  $.__views.__alloyId146 = Ti.UI.createTextField(
  { clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS, keyboardType: Ti.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Ti.UI.RETURNKEY_DONE, borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL, backgroundColor: "#ffffff", color: "#333300", height: 35, width: 250, padding: { left: 5 }, keyboardToolbarColor: "#999", keyboardToolbarHeight: 40, top: 10, value: "", hintText: "username", id: "__alloyId146" });

  $.__views.balancesView.add($.__views.__alloyId146);
  $.__views.__alloyId147 = Ti.UI.createTextField(
  { clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS, keyboardType: Ti.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Ti.UI.RETURNKEY_DONE, borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL, backgroundColor: "#ffffff", color: "#333300", height: 35, width: 250, padding: { left: 5 }, keyboardToolbarColor: "#999", keyboardToolbarHeight: 40, top: 10, hintText: "password", id: "__alloyId147" });

  $.__views.balancesView.add($.__views.__alloyId147);
  $.__views.addAvatarButton = Ti.UI.createButton(
  { width: 140, height: 40, top: 10, backgroundColor: "#6dcf7d", font: { color: "black", fontSize: 15 }, title: 'CHANGE PASSWORD', id: "addAvatarButton" });

  $.__views.balancesView.add($.__views.addAvatarButton);
  $.__views.__alloyId148 = Ti.UI.createTextField(
  { clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS, keyboardType: Ti.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Ti.UI.RETURNKEY_DONE, borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL, backgroundColor: "#ffffff", color: "#333300", height: 35, width: 250, padding: { left: 5 }, keyboardToolbarColor: "#999", keyboardToolbarHeight: 40, top: 10, hintText: "pincode", id: "__alloyId148" });

  $.__views.balancesView.add($.__views.__alloyId148);
  $.__views.addAvatarButton = Ti.UI.createButton(
  { width: 140, height: 40, top: 10, backgroundColor: "#6dcf7d", font: { color: "black", fontSize: 15 }, title: 'CHANGE PINCODE', id: "addAvatarButton" });

  $.__views.balancesView.add($.__views.addAvatarButton);
  $.__views.tableViewFooter = Ti.UI.createView(
  { height: 50, width: Ti.UI.FILL, id: "tableViewFooter" });

  $.__views.__alloyId150 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, id: "__alloyId150" });

  $.__views.tableViewFooter.add($.__views.__alloyId150);
  $.__views.__alloyId151 = Ti.UI.createActivityIndicator(
  { style: Ti.UI.ActivityIndicatorStyle.DARK, visible: false, id: "__alloyId151" });

  $.__views.__alloyId150.add($.__views.__alloyId151);
  $.__views.addCasa = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 5, text: 'add new casa', id: "addCasa" });

  $.__views.__alloyId150.add($.__views.addCasa);
  $.__views.casaList = Ti.UI.createTableView(
  { width: Ti.UI.FILL, height: 300, backgroundColor: "#ececec", separatorStyle: Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE, selectionStyle: Titanium.UI.iOS.TableViewCellSelectionStyle.NONE, footerView: $.__views.tableViewFooter, id: "casaList" });

  $.__views.mainView.add($.__views.casaList);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = arguments[0] || {};

  var util = require("requires/util");
  var cache = require("requires/cache");
  var tiker = require("requires/tiker");
  var auth = require("requires/auth");
  var network = require("requires/network");
  var bitcoin = require("requires/bitcoin");

  var blockchain = require("requires/blockchain");
  var inputverify = require("requires/inputverify");

  var win = Ti.UI.createWindow({
    "orientationModes": [Ti.UI.PORTRAIT],
    "navBarHidden": true,
    "backgroundColor": "transparent",
    "windowSoftInputMode": false ? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN : null });

  win.add($.settings);
  win.open();
  $.casaList.top = 10;
  $.casaList.height = Ti.UI.FILL;
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
  globals.addButtonEvent($.gobackButton, close);

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
    "left": 0,
    "duration": 200 });


  function setCasas() {

    function setCurrent(path) {

      cache.data.currentPath = path;
      cache.save();
      globals.setCurrentCasa();
      globals.refreshHistory();
      globals.refreshTokens();
      close();
    }

    var tableData = [];

    var tableSection = Ti.UI.createTableViewSection();

    for (var i = 0; i < cache.data.blockchainWallets.length; i++) {
      var path = cache.data.blockchainWallets[i];
      console.log(path);
      var args = {
        "path": path,
        "isLast": i > 0 && i == cache.data.blockchainWallets.length - 1,
        "parent": $.casaList,
        "setCurrent": setCurrent,
        "remove": function (box, path2) {} };

      var casaBox = Alloy.createController("component_casa_box", args).getView();
      var row = Ti.UI.createTableViewRow({
        className: 'casa',
        backgroundSelectedColor: 'transparent',
        rowIndex: i,
        height: 200 });

      row.add(casaBox);
      tableSection.add(row);
    }

    tableData.push(tableSection);
    $.casaList.data = tableData;
  }

  $.addCasa.addEventListener("click", function () {
    console.log(blockchain.basePath + "" + cache.data.blockchainWallets.length);
    cache.data.blockchainWallets.push(blockchain.basePath + "" + cache.data.blockchainWallets.length);

    setCasas();

    cache.save();
  });

  setCasas();

  function signin() {
    cache.data.addresses = [];
    cache.save();
    cache.init();
    cache.load();

    Alloy.createController("signin").getView().open();
    win.close();
  }

  $.signoutButton.addEventListener("click", function () {
    var dialog = util.createDialog({
      title: L("label_settings_signout"),
      message: L("label_settings_signout_message"),
      buttonNames: [L("label_cancel"), L("label_settings_signout")] });

    dialog.addEventListener("click", function (e) {
      if (e.index != e.source.cancel) {
        globals.console.info("loading!");
        Ti.App.Properties.removeProperty(globals.userEthTokens);
        var loading = util.showLoading($.settings, {
          "width": Ti.UI.FILL,
          "height": Ti.UI.FILL,
          "style": "dark",
          "message": L("label_loading") });

        signin();
      }
    });
    dialog.show();
  });









  _.extend($, exports);
}

module.exports = Controller;