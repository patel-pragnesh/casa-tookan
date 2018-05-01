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
  this.__controllerPath = 'frame';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.frame = Ti.UI.createWindow(
  { backgroundColor: "white", id: "frame" });

  $.__views.frame && $.addTopLevelView($.__views.frame);
  showIntro ? $.addListener($.__views.frame, 'postlayout', showIntro) : __defers['$.__views.frame!postlayout!showIntro'] = true;$.__views.scroller = Ti.UI.createView(
  { id: "scroller" });

  $.__views.frame.add($.__views.scroller);
  $.__views.viewOne = Ti.UI.createView(
  { visible: true, id: "viewOne" });

  $.__views.scroller.add($.__views.viewOne);
  $.__views.__alloyId49 = Alloy.createController('news', { id: "__alloyId49", __parentSymbol: $.__views.viewOne });
  $.__views.__alloyId49.setParent($.__views.viewOne);
  $.__views.viewTwo = Ti.UI.createView(
  { visible: false, id: "viewTwo" });

  $.__views.scroller.add($.__views.viewTwo);
  $.__views.__alloyId50 = Alloy.createController('browse', { id: "__alloyId50", __parentSymbol: $.__views.viewTwo });
  $.__views.__alloyId50.setParent($.__views.viewTwo);
  $.__views.viewThree = Ti.UI.createView(
  { visible: false, id: "viewThree" });

  $.__views.scroller.add($.__views.viewThree);
  $.__views.__alloyId51 = Alloy.createController('casa', { id: "__alloyId51", __parentSymbol: $.__views.viewThree });
  $.__views.__alloyId51.setParent($.__views.viewThree);
  $.__views.viewFour = Ti.UI.createView(
  { visible: false, id: "viewFour" });

  $.__views.scroller.add($.__views.viewFour);
  $.__views.__alloyId52 = Alloy.createController('balances', { id: "__alloyId52", __parentSymbol: $.__views.viewFour });
  $.__views.__alloyId52.setParent($.__views.viewFour);
  $.__views.__alloyId53 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Alloy.Globals.tabBarHeight, bottom: 0, backgroundColor: "#ececec", layout: "horizontal", id: "__alloyId53" });

  $.__views.frame.add($.__views.__alloyId53);
  $.__views.__alloyId54 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 1, backgroundColor: "#000000", top: 0, opacity: 0.2, id: "__alloyId54" });

  $.__views.__alloyId53.add($.__views.__alloyId54);
  $.__views.tabnews = Ti.UI.createView(
  { width: "24.9%", top: 5, id: "tabnews", layout: "vertical" });

  $.__views.__alloyId53.add($.__views.tabnews);
  $.__views.tabNewsImage = Ti.UI.createImageView(
  { width: 30, height: 30, id: "tabNewsImage", image: "/images/icon_news_active.png" });

  $.__views.tabnews.add($.__views.tabNewsImage);
  $.__views.__alloyId55 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, text: 'News', id: "__alloyId55" });

  $.__views.tabnews.add($.__views.__alloyId55);
  $.__views.tabbrowse = Ti.UI.createView(
  { width: "24.9%", top: 5, id: "tabbrowse", layout: "vertical" });

  $.__views.__alloyId53.add($.__views.tabbrowse);
  $.__views.tabBrowseImage = Ti.UI.createImageView(
  { width: 30, height: 30, id: "tabBrowseImage", image: "/images/icon_browse.png" });

  $.__views.tabbrowse.add($.__views.tabBrowseImage);
  $.__views.__alloyId56 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, text: 'Browse', id: "__alloyId56" });

  $.__views.tabbrowse.add($.__views.__alloyId56);
  $.__views.tabcasa = Ti.UI.createView(
  { width: "24.9%", top: 5, id: "tabcasa", layout: "vertical" });

  $.__views.__alloyId53.add($.__views.tabcasa);
  $.__views.tabCasaImage = Ti.UI.createImageView(
  { width: 30, height: 30, id: "tabCasaImage", image: "/images/icon_casa.png" });

  $.__views.tabcasa.add($.__views.tabCasaImage);
  $.__views.__alloyId57 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, text: 'My Casa', id: "__alloyId57" });

  $.__views.tabcasa.add($.__views.__alloyId57);
  $.__views.tabbalances = Ti.UI.createView(
  { width: "24.9%", top: 5, id: "tabbalances", layout: "vertical" });

  $.__views.__alloyId53.add($.__views.tabbalances);
  $.__views.tabBalancesImage = Ti.UI.createImageView(
  { width: 30, height: 30, id: "tabBalancesImage", image: "/images/icon_balances.png" });

  $.__views.tabbalances.add($.__views.tabBalancesImage);
  $.__views.__alloyId58 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 12, fontWeight: "normal" }, text: 'Balances', id: "__alloyId58" });

  $.__views.tabbalances.add($.__views.__alloyId58);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var util = require("requires/util");
  var network = require("requires/network");
  var cache = require("requires/cache");
  var bitcoin = require("requires/bitcoin");
  var ethereum = require("requires/ethereum");
  var blockchain = require("requires/blockchain");

  if (cache.data.blockchainWallets == undefined) {
    cache.data.blockchainWallets = [];

    cache.data.blockchainWallets.push(blockchain.basePath + "0");

    cache.data.currentPath = cache.data.blockchainWallets[0];
    cache.save();
  }

  function showIntro() {
    if (cache.data.easypass === undefined) {

      Alloy.createController("introscreens").getView().open();
    }
  }

  var styleTabOn = $.createStyle({
    classes: "size10 red",
    apiName: "Label" });


  var styleTabOff = $.createStyle({
    classes: "size10 gray",
    apiName: "Label" });


  function reset() {
    $.tabNewsImage.image = "/images/icon_news.png";

    $.tabBrowseImage.image = "/images/icon_browse.png";

    $.tabCasaImage.image = "/images/icon_casa.png";

    $.tabBalancesImage.image = "/images/icon_balances.png";
  }

  function setPage() {

    reset();

    if (Alloy.Globals.currentTab == 0) {
      $.tabNewsImage.image = "/images/icon_news_active.png";
    } else if (Alloy.Globals.currentTab == 1) {
      $.tabBrowseImage.image = "/images/icon_browse_active.png";
    } else if (Alloy.Globals.currentTab == 2) {
      $.tabCasaImage.image = "/images/icon_casa_active.png";
    } else if (Alloy.Globals.currentTab == 3) {
      $.tabBalancesImage.image = "/images/icon_balances_active.png";
      if (false) {
        globals.callCheckIfLoaded();
      }
    }
  }

  globals.setPage = setPage;
  Alloy.Globals.currentTab = 0;
  setPage();





  $.tabnews.addEventListener("touchend", function () {
    Alloy.Globals.currentTab = 0;
    $.viewOne.visible = true;
    $.viewTwo.visible = false;
    $.viewThree.visible = false;
    $.viewFour.visible = false;

    setPage();
  });

  $.tabbrowse.addEventListener("touchend", function () {
    Alloy.Globals.currentTab = 1;
    $.viewOne.visible = false;
    $.viewTwo.visible = true;
    $.viewThree.visible = false;
    $.viewFour.visible = false;

    setPage();
  });

  $.tabcasa.addEventListener("touchend", function () {
    Alloy.Globals.currentTab = 2;
    $.viewOne.visible = false;
    $.viewTwo.visible = false;
    $.viewThree.visible = true;
    $.viewFour.visible = false;

    setPage();
  });

  $.tabbalances.addEventListener("touchend", function () {
    Alloy.Globals.currentTab = 3;
    $.viewOne.visible = false;
    $.viewTwo.visible = false;
    $.viewThree.visible = false;
    $.viewFour.visible = true;

    setPage();
  });





  __defers['$.__views.frame!postlayout!showIntro'] && $.addListener($.__views.frame, 'postlayout', showIntro);



  _.extend($, exports);
}

module.exports = Controller;