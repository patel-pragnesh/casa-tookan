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
	this.__controllerPath = 'component_casa_box';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.mainView = Ti.UI.createView(
	{ top: 20, height: Ti.UI.SIZE, width: Ti.UI.FILL, id: "mainView", layout: "horizontal" });

	$.__views.mainView && $.addTopLevelView($.__views.mainView);
	$.__views.casaHomeView = Ti.UI.createView(
	{ width: "29.9%", height: Ti.UI.SIZE, id: "casaHomeView" });

	$.__views.mainView.add($.__views.casaHomeView);
	$.__views.caseHomeImage = Ti.UI.createImageView(
	{ width: "90%", id: "caseHomeImage", image: "/images/casa_home.png" });

	$.__views.casaHomeView.add($.__views.caseHomeImage);
	$.__views.balancesView = Ti.UI.createView(
	{ height: Ti.UI.SIZE, width: "70%", id: "balancesView", layout: "vertical" });

	$.__views.mainView.add($.__views.balancesView);
	$.__views.btc_address = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, left: 10, top: 10, padding: 10, textAlign: "left", id: "btc_address" });

	$.__views.balancesView.add($.__views.btc_address);
	$.__views.eth_address = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, left: 10, top: 10, padding: 10, textAlign: "left", id: "eth_address" });

	$.__views.balancesView.add($.__views.eth_address);
	$.__views.usd_value = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 15, fontWeight: "normal" }, left: 10, top: 10, padding: 10, textAlign: "left", id: "usd_value" });

	$.__views.balancesView.add($.__views.usd_value);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var args = arguments[0] || {};
	var blockchain = require("requires/blockchain");
	var util = require("requires/util");
	var cache = require("requires/cache");
	var bitcoin = require("requires/bitcoin");
	var ethereum = require("requires/ethereum");
	var auth = require("requires/auth");

	console.log(args.path);
	$.btc_address.text = "BTC:" + bitcoin.getAddressForPath(args.path);
	$.eth_address.text = "ETH:" + ethereum.getAddressForPath(args.path);
	$.usd_value.text = "USD Value: $0";

	$.mainView.addEventListener("click", function () {












		args.setCurrent(args.path);
	});









	_.extend($, exports);
}

module.exports = Controller;