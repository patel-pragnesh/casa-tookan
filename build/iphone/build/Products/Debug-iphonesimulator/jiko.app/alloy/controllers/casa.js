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
	this.__controllerPath = 'casa';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.receiveTopBar = Ti.UI.createView(
	{ width: Ti.UI.FILL, height: Alloy.Globals.topBarHeight, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "receiveTopBar" });

	$.__views.receiveTopBar && $.addTopLevelView($.__views.receiveTopBar);
	$.__views.settingsButton = Ti.UI.createImageView(
	{ left: 10, width: 30, bottom: 10, id: "settingsButton", image: "/images/tookan.png" });

	$.__views.receiveTopBar.add($.__views.settingsButton);
	$.__views.__alloyId23 = Ti.UI.createLabel(
	function () {
		var o = {};
		Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 28 });
		if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
		Alloy.deepExtend(true, o, { text: L("label_tab_receive"), id: "__alloyId23" });
		return o;
	}());

	$.__views.receiveTopBar.add($.__views.__alloyId23);
	$.__views.mainView = Ti.UI.createView(
	{ id: "mainView", layout: "vertical" });

	$.__views.mainView && $.addTopLevelView($.__views.mainView);
	$.__views.topView = Ti.UI.createView(
	{ top: 20, height: Ti.UI.SIZE, width: Ti.UI.FILL, id: "topView", layout: "horizontal" });

	$.__views.mainView.add($.__views.topView);
	$.__views.casaHomeView = Ti.UI.createView(
	{ width: "29.9%", height: Ti.UI.SIZE, id: "casaHomeView" });

	$.__views.topView.add($.__views.casaHomeView);
	$.__views.caseHomeImage = Ti.UI.createImageView(
	{ width: "90%", id: "caseHomeImage", image: "/images/casa_home.png" });

	$.__views.casaHomeView.add($.__views.caseHomeImage);
	$.__views.balancesView = Ti.UI.createView(
	{ height: Ti.UI.SIZE, width: "70%", id: "balancesView", layout: "vertical" });

	$.__views.topView.add($.__views.balancesView);
	$.__views.btc_address = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, left: 10, top: 10, padding: 10, textAlign: "left", id: "btc_address" });

	$.__views.balancesView.add($.__views.btc_address);
	$.__views.eth_address = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, left: 10, top: 10, padding: 10, textAlign: "left", id: "eth_address" });

	$.__views.balancesView.add($.__views.eth_address);
	$.__views.usd_value = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, left: 10, top: 10, padding: 10, textAlign: "left", id: "usd_value" });

	$.__views.balancesView.add($.__views.usd_value);
	$.__views.secondView = Ti.UI.createView(
	{ top: 50, height: Ti.UI.SIZE, width: Ti.UI.FILL, id: "secondView", layout: "horizontal" });

	$.__views.mainView.add($.__views.secondView);
	$.__views.casaHomeView = Ti.UI.createView(
	{ width: "29.9%", height: Ti.UI.SIZE, id: "casaHomeView" });

	$.__views.secondView.add($.__views.casaHomeView);
	$.__views.avatarImage = Ti.UI.createImageView(
	{ width: 100, height: 100, id: "avatarImage", image: "/images/casa_avatar.png" });

	$.__views.casaHomeView.add($.__views.avatarImage);
	$.__views.buttonView = Ti.UI.createView(
	{ height: Ti.UI.SIZE, width: "70%", id: "buttonView", layout: "vertical" });

	$.__views.secondView.add($.__views.buttonView);
	$.__views.addAvatarButton = Ti.UI.createButton(
	{ width: 120, height: 40, top: 10, backgroundColor: "#6dcf7d", font: { color: "black", fontSize: 15 }, title: 'ADD AVATAR', id: "addAvatarButton" });

	$.__views.buttonView.add($.__views.addAvatarButton);
	$.__views.changeNameButton = Ti.UI.createButton(
	{ width: 120, height: 40, top: 10, backgroundColor: "#6dcf7d", font: { color: "black", fontSize: 15 }, title: 'CHANGE NAME', id: "changeNameButton" });

	$.__views.buttonView.add($.__views.changeNameButton);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var util = require("requires/util");
	var cache = require("requires/cache");
	var qrcode = require("requires/qrcode");
	var bitcoin = require("requires/bitcoin");
	var ethereum = require("requires/ethereum");












	$.mainView.top = Alloy.Globals.topBarHeight;

	$.settingsButton.addEventListener("touchend", function () {
		Alloy.createController("settings").getView();
	});

	globals.setCurrentCasa = function () {

		$.btc_address.text = "BTC: " + bitcoin.getAddressForPath(cache.data.currentPath);
		$.eth_address.text = "ETH: " + ethereum.getAddressForPath(cache.data.currentPath);
		$.usd_value.text = "USD Value: $0";


















	};
	globals.setCurrentCasa();

	globals.updateReceiveUI = function () {};

	globals.updateReceiveUI();









	_.extend($, exports);
}

module.exports = Controller;