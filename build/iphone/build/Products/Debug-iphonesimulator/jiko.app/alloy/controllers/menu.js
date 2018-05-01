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
  this.__controllerPath = 'menu';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.menu = Ti.UI.createView(
  { backgroundColor: "transparent", id: "menu" });

  $.__views.menu && $.addTopLevelView($.__views.menu);
  $.__views.background = Ti.UI.createView(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#000000", opacity: 0, id: "background" });

  $.__views.menu.add($.__views.background);
  $.__views.mainView = Ti.UI.createView(
  { width: "80%", height: Ti.UI.FILL, left: Alloy.Globals.display.width, backgroundColor: "#ebebeb", id: "mainView" });

  $.__views.menu.add($.__views.mainView);
  $.__views.__alloyId98 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: 410, top: 0, layout: "vertical", id: "__alloyId98" });

  $.__views.mainView.add($.__views.__alloyId98);
  $.__views.blockchainBar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 40, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "blockchainBar" });

  $.__views.__alloyId98.add($.__views.blockchainBar);
  $.__views.__alloyId99 = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "white", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "bold" }, left: 5, top: 13 });
    if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { visible: false });
    Alloy.deepExtend(true, o, { text: 'blockchain', id: "__alloyId99" });
    return o;
  }());

  $.__views.blockchainBar.add($.__views.__alloyId99);
  $.__views.bitcoinChain = Ti.UI.createView(
  { top: 0, height: 48, id: "bitcoinChain", layout: "horizontal" });

  $.__views.__alloyId98.add($.__views.bitcoinChain);
  setBitcoinBlockchain ? $.addListener($.__views.bitcoinChain, 'click', setBitcoinBlockchain) : __defers['$.__views.bitcoinChain!click!setBitcoinBlockchain'] = true;$.__views.__alloyId100 = Ti.UI.createImageView(
  { left: 5, height: 30, width: 30, top: 11, image: "/images/asset_btc.png", id: "__alloyId100" });

  $.__views.bitcoinChain.add($.__views.__alloyId100);
  setBitcoinBlockchain ? $.addListener($.__views.__alloyId100, 'click', setBitcoinBlockchain) : __defers['$.__views.__alloyId100!click!setBitcoinBlockchain'] = true;$.__views.__alloyId101 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 10, top: 11, text: 'Bitcoin - Counterparty', id: "__alloyId101" });

  $.__views.bitcoinChain.add($.__views.__alloyId101);
  setBitcoinBlockchain ? $.addListener($.__views.__alloyId101, 'click', setBitcoinBlockchain) : __defers['$.__views.__alloyId101!click!setBitcoinBlockchain'] = true;$.__views.ethereumChain = Ti.UI.createView(
  { top: 0, height: 48, id: "ethereumChain", layout: "horizontal" });

  $.__views.__alloyId98.add($.__views.ethereumChain);
  setEthereumBlockchain ? $.addListener($.__views.ethereumChain, 'click', setEthereumBlockchain) : __defers['$.__views.ethereumChain!click!setEthereumBlockchain'] = true;$.__views.__alloyId102 = Ti.UI.createImageView(
  { left: 5, height: 30, width: 30, top: 11, image: "/images/asset_eth.png", id: "__alloyId102" });

  $.__views.ethereumChain.add($.__views.__alloyId102);
  setEthereumBlockchain ? $.addListener($.__views.__alloyId102, 'click', setEthereumBlockchain) : __defers['$.__views.__alloyId102!click!setEthereumBlockchain'] = true;$.__views.__alloyId103 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 10, top: 11, text: 'Ethereum - ERC-20', id: "__alloyId103" });

  $.__views.ethereumChain.add($.__views.__alloyId103);
  setEthereumBlockchain ? $.addListener($.__views.__alloyId103, 'click', setEthereumBlockchain) : __defers['$.__views.__alloyId103!click!setEthereumBlockchain'] = true;$.__views.__alloyId104 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: 112, top: 136, layout: "vertical", id: "__alloyId104" });

  $.__views.mainView.add($.__views.__alloyId104);
  $.__views.walletBar = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 40, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "walletBar" });

  $.__views.__alloyId104.add($.__views.walletBar);
  $.__views.__alloyId105 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "white", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "bold" }, left: 5, text: L("label_tab_wallet"), id: "__alloyId105" });

  $.__views.walletBar.add($.__views.__alloyId105);
  $.__views.__alloyId106 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 1, backgroundColor: "#000000", top: 0, opacity: 0.2, id: "__alloyId106" });

  $.__views.__alloyId104.add($.__views.__alloyId106);
  $.__views.currentWallet = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 70, backgroundColor: "#ffffff", id: "currentWallet" });

  $.__views.__alloyId104.add($.__views.currentWallet);
  $.__views.walletIcon = Ti.UI.createImageView(
  { width: 25, height: 23, top: 10, left: 10, id: "walletIcon", image: "/images/icon_wallet_red.png" });

  $.__views.currentWallet.add($.__views.walletIcon);
  $.__views.tagCurrentWallet = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 10, left: 50, id: "tagCurrentWallet" });

  $.__views.currentWallet.add($.__views.tagCurrentWallet);
  $.__views.addressCurrentWallet = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#929292", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, top: 40, left: 10, id: "addressCurrentWallet" });

  $.__views.currentWallet.add($.__views.addressCurrentWallet);
  $.__views.arrowIcon = Ti.UI.createImageView(
  { right: 10, width: 12, height: 16, top: 15, id: "arrowIcon", image: "/images/icon_arrow_right.png" });

  $.__views.currentWallet.add($.__views.arrowIcon);
  $.__views.__alloyId107 = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 1, backgroundColor: "#000000", top: 0, opacity: 0.2, id: "__alloyId107" });

  $.__views.__alloyId104.add($.__views.__alloyId107);
  $.__views.menuItems = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: 250, layout: "vertical", id: "menuItems" });

  $.__views.mainView.add($.__views.menuItems);
  $.__views.faqButton = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 50, top: 10, id: "faqButton" });

  $.__views.menuItems.add($.__views.faqButton);
  $.__views.faqIcon = Ti.UI.createImageView(
  { width: 25, height: 27, top: 10, left: 10, id: "faqIcon", image: "/images/icon_settings_faq.png" });

  $.__views.faqButton.add($.__views.faqIcon);
  $.__views.__alloyId108 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 10, left: 50, text: L("label_faq"), id: "__alloyId108" });

  $.__views.faqButton.add($.__views.__alloyId108);
  $.__views.priorityButton = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 50, top: 10, id: "priorityButton" });

  $.__views.menuItems.add($.__views.priorityButton);
  $.__views.priorityIcon = Ti.UI.createImageView(
  { width: 25, height: 23, top: 10, left: 10, id: "priorityIcon", image: "/images/icon_settings_priority.png" });

  $.__views.priorityButton.add($.__views.priorityIcon);
  $.__views.priorityLabel = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 10, left: 50, id: "priorityLabel" });

  $.__views.priorityButton.add($.__views.priorityLabel);
  $.__views.settingsButton = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 50, top: 10, id: "settingsButton" });

  $.__views.menuItems.add($.__views.settingsButton);
  $.__views.settingsIcon = Ti.UI.createImageView(
  { width: 25, height: 23, top: 10, left: 10, id: "settingsIcon", image: "/images/icon_settings.png" });

  $.__views.settingsButton.add($.__views.settingsIcon);
  $.__views.__alloyId109 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 10, left: 50, text: L("label_settings"), id: "__alloyId109" });

  $.__views.settingsButton.add($.__views.__alloyId109);
  $.__views.__alloyId110 = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: 250, id: "__alloyId110" });

  $.__views.mainView.add($.__views.__alloyId110);
  $.__views.listView = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: -400, backgroundColor: "#ffffff", id: "listView" });

  $.__views.__alloyId110.add($.__views.listView);
  $.__views.addressList = Ti.UI.createScrollView(
  { width: Ti.UI.FILL, height: 200, top: 0, id: "addressList", scrollType: "vertical", layout: "vertical", showVerticalScrollIndicator: true });

  $.__views.listView.add($.__views.addressList);
  $.__views.newaddress = Ti.UI.createView(
  { width: Ti.UI.FILL, height: 40, top: 300, backgroundColor: Alloy.Globals.mainColor, id: "newaddress" });

  $.__views.listView.add($.__views.newaddress);
  $.__views.__alloyId111 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#ffffff", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, text: L("label_newaddress"), id: "__alloyId111" });

  $.__views.newaddress.add($.__views.__alloyId111);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var cache = require("requires/cache");
  var util = require("requires/util");
  var network = require("requires/network");
  var bitcoin = require("requires/bitcoin");
  var blockchain = require("requires/blockchain");
  var ethereum = require("requires/ethereum");

  globals.currentBlockchainWallets = [];
  var win = Ti.UI.createWindow({
    "orientationModes": [Ti.UI.PORTRAIT],
    "navBarHidden": true,
    "backgroundColor": "transparent",
    "windowSoftInputMode": false ? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN : null });

  win.add($.menu);
  win.open();

  if (cache.data.chainId == blockchain.ETHEREUM) {
    $.menuItems.remove($.priorityButton);
  }

  var isClosing = false;
  function setBitcoinBlockchain() {

    blockchain.changeCurrentChain(blockchain.BITCOIN);

    close();
  }
  function setEthereumBlockchain() {

    blockchain.changeCurrentChain(blockchain.ETHEREUM);

    close();
  }

  function close() {
    if (!isClosing) {
      isClosing = true;

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
  }

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
    "left": "20%",
    "duration": 200 });


  function setFeeLabel(currentFee) {
    if (isFinite(currentFee)) $.priorityLabel.text = currentFee + "BTC";else $.priorityLabel.text = globals.feeTexts[currentFee];
  }
  setFeeLabel(cache.data.currentFee);

  function setWalletsHeight() {
    var length = walletViews.length;
    if (walletViews.length < 4) {
      $.addressList.height = length * 100;
      $.newaddress.top = length * 100;
    } else {
      $.addressList.height = 350;
      $.newaddress.top = 350;
    }
  }

  function setCurrent(index) {

    if (cache.data.chainId == blockchain.BITCOIN) {
      cache.data.address = bitcoin.changeHD(index);
    } else if (cache.data.chainId == blockchain.ETHEREUM) {
      cache.data.address = ethereum.changeHD(index);
    }
    cache.save();

    $.addressCurrentWallet.text = cache.data.address;
    $.tagCurrentWallet.text = Ti.App.Properties.getString(cache.data.address);

    globals.refreshTokens();
    globals.refreshHistory();
    globals.refreshReceive();
  }

  var walletViews = [];
  function addAddressBox(wallet, pos) {
    var args = {
      "id": wallet.id,
      "tag": wallet.tag,
      "address": wallet.address,
      "pos": pos,
      "isLast": pos > 0 && pos == globals.currentBlockchainWallets.length - 1,
      "parent": $.addressList,
      "setCurrent": setCurrent,
      "remove": function (box, address) {
        if (address === cache.data.address) setCurrent(globals.currentBlockchainWallets[0].pos);

        for (var i = 0; i < globals.wallets.length; i++) {
          var wallet = globals.wallets[i];
          if (wallet.id == globals.currentBlockchainWallets[globals.currentBlockchainWallets.length - 1].id) {
            console.log(wallet);
            globals.wallets.splice(i, 1);
            break;
          }
        }
        globals.currentBlockchainWallets.pop();

        var view = walletViews.pop();
        if (walletViews.length > 1) walletViews[walletViews.length - 1].showRemoveButton();
        $.addressList.remove(view.getView());
        setWalletsHeight();
      } };

    var addressBox = Alloy.createController("component_address_box", args);
    $.addressList.add(addressBox.getView());
    walletViews.push(addressBox);
    setWalletsHeight();
  }

  globals.currentBlockchainWallets = [];
  for (var i = 0; i < globals.wallets.length; i++) {
    var wallet = globals.wallets[i];

    if (wallet.blockchain == cache.data.chainId + "") {
      globals.currentBlockchainWallets.push(wallet);
    }
  }
  for (var i = 0; i < globals.currentBlockchainWallets.length; i++) {
    var wallet = globals.currentBlockchainWallets[i];
    Ti.App.Properties.setString(wallet.address, wallet.tag);
    addAddressBox(wallet, i);
  }

  $.addressCurrentWallet.text = cache.data.address;
  $.tagCurrentWallet.text = Ti.App.Properties.getString(cache.data.address);

  $.newaddress.addEventListener("touchend", function () {
    var dialog = util.createInputDialog({
      title: L("label_add_wallet"),
      message: L("label_add_wallet_message"),
      value: "",
      buttonNames: [L("label_close"), L("label_add")] });

    dialog.origin.addEventListener("click", function (e) {
      var inputText = false ? dialog.androidField.getValue() : e.text;
      if (e.index != e.source.cancel) {
        if (inputText.length > 0) {

          var numHDAddress = globals.currentBlockchainWallets.length;
          if (numHDAddress <= 0) numHDAddress = 1;
          if (cache.data.chainId == blockchain.BITCOIN) {

            var path = bitcoin.getBasePath() + numHDAddress;
            var newAddress = bitcoin.createHDAddress(numHDAddress);
          } else if (cache.data.chainId == blockchain.ETHEREUM) {

            var path = ethereum.getBasePath() + numHDAddress;

            var newAddress = ethereum.createHDAddress(numHDAddress);
          }

          walletViews[walletViews.length - 1].hideRemoveButton();

          Ti.App.Properties.setString(newAddress, inputText);

          var wallet = {
            "id": newAddress,
            "tag": inputText,
            "address": newAddress,
            "blockchain": cache.data.chainId,
            "index": path,
            "pos": numHDAddress + 1 };

          globals.wallets.push(wallet);
          globals.currentBlockchainWallets.push(wallet);

          addAddressBox(wallet, globals.currentBlockchainWallets.length - 1);
        }
      }
    });
    dialog.origin.show();
  });

  var isWalletsShowing = false;
  $.currentWallet.addEventListener("click", function () {
    globals.console.info("isWalletsShowing=" + isWalletsShowing);
    if (!isWalletsShowing) {
      isWalletsShowing = true;
      $.listView.animate({
        "top": 0,
        "duration": 300 });

      var downArrowTransformation = Ti.UI.create2DMatrix();
      downArrowTransformation = downArrowTransformation.rotate(90);
      $.arrowIcon.animate({
        transform: downArrowTransformation,
        duration: 200 });

    } else {
      isWalletsShowing = false;
      $.listView.animate({
        "top": -400,
        "duration": 300 });

      var rightArrowTransformation = Ti.UI.create2DMatrix();
      rightArrowTransformation = rightArrowTransformation.rotate(0);
      $.arrowIcon.animate({
        transform: rightArrowTransformation,
        duration: 300 });

    }
  });

  globals.addButtonEvent($.faqButton, function (e) {
    Alloy.createController("weblink", {
      "path": Alloy.CFG.dashboard_uri + "faqs/wallet",
      "barColor": Alloy.Globals.mainColor }).
    getView().open();
  });

  globals.addButtonEvent($.priorityButton, function (e) {
    Alloy.createController("priority", {
      "setFeeLabel": setFeeLabel }).
    getView();
  });

  globals.addButtonEvent($.settingsButton, function (e) {
    Alloy.createController("settings").getView();
  });

  $.background.addEventListener("touchend", close);

  $.menu.addEventListener("swipe", function (e) {
    if (e.direction == "right") close();
  });

  globals.updateMenuUI = function () {

    $.walletBar.backgroundColor = globals.currentColor;
    $.blockchainBar.backgroundColor = globals.currentColor;
    $.newaddress.backgroundColor = globals.currentColor;

    var prefix = "";

    $.bitcoinChain.backgroundColor = "transparent";
    $.ethereumChain.backgroundColor = "transparent";

    if (cache.data.chainId == blockchain.ETHEREUM) {
      prefix = "_eth";
      $.ethereumChain.backgroundColor = Alloy.Globals.ethereumColor;
    } else {
      $.bitcoinChain.backgroundColor = Alloy.Globals.bitcoinColor;
    }

    $.priorityIcon.image = "/images/icon_settings_priority" + prefix + ".png";
    $.faqIcon.image = "/images/icon_settings_faq" + prefix + ".png";
    $.settingsIcon.image = "/images/icon_settings" + prefix + ".png";
    $.walletIcon.image = "/images/icon_wallet_red" + prefix + ".png";
    $.arrowIcon.image = "/images/icon_arrow_right" + prefix + ".png";
  };
  globals.updateMenuUI();





  __defers['$.__views.bitcoinChain!click!setBitcoinBlockchain'] && $.addListener($.__views.bitcoinChain, 'click', setBitcoinBlockchain);__defers['$.__views.__alloyId100!click!setBitcoinBlockchain'] && $.addListener($.__views.__alloyId100, 'click', setBitcoinBlockchain);__defers['$.__views.__alloyId101!click!setBitcoinBlockchain'] && $.addListener($.__views.__alloyId101, 'click', setBitcoinBlockchain);__defers['$.__views.ethereumChain!click!setEthereumBlockchain'] && $.addListener($.__views.ethereumChain, 'click', setEthereumBlockchain);__defers['$.__views.__alloyId102!click!setEthereumBlockchain'] && $.addListener($.__views.__alloyId102, 'click', setEthereumBlockchain);__defers['$.__views.__alloyId103!click!setEthereumBlockchain'] && $.addListener($.__views.__alloyId103, 'click', setEthereumBlockchain);



  _.extend($, exports);
}

module.exports = Controller;