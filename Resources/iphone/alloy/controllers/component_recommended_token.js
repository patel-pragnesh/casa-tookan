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
	this.__controllerPath = 'component_recommended_token';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.tokenBox = Ti.UI.createView(
	{ width: Ti.UI.FILL, height: 90, backgroundColor: "white", id: "tokenBox" });

	$.__views.tokenBox && $.addTopLevelView($.__views.tokenBox);
	$.__views.tokenImage = Ti.UI.createImageView(
	{ left: 8, height: 60, width: 60, id: "tokenImage", defaultImage: "/images/image_blank.png" });

	$.__views.tokenBox.add($.__views.tokenImage);
	$.__views.tokenLabels = Ti.UI.createView(
	{ left: 15, layout: "vertical", width: Ti.UI.SIZE, height: Ti.UI.SIZE, id: "tokenLabels" });

	$.__views.tokenBox.add($.__views.tokenLabels);
	$.__views.tokenSymbol = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 80, textAlign: "left", id: "tokenSymbol" });

	$.__views.tokenLabels.add($.__views.tokenSymbol);
	$.__views.tokenName = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, left: 80, textAlign: "left", id: "tokenName" });

	$.__views.tokenLabels.add($.__views.tokenName);
	$.__views.addButton = Ti.UI.createButton(
	{ right: 10, height: 40, width: 40, backgroundImage: "/images/icon_plus_blue.png", id: "addButton" });

	$.__views.tokenBox.add($.__views.addButton);
	addToken ? $.addListener($.__views.addButton, 'click', addToken) : __defers['$.__views.addButton!click!addToken'] = true;$.__views.__alloyId40 = Ti.UI.createView(
	{ width: "95%", height: 1, bottom: 0, backgroundColor: "#ececec", id: "__alloyId40" });

	$.__views.tokenBox.add($.__views.__alloyId40);
	exports.destroy = function () {};




	_.extend($, $.__views);



	var blockchain = require("requires/blockchain");
	var ethereum = require("requires/ethereum");

	var args = arguments[0] || {};
	$.tokenSymbol.text = args.symbol;
	$.tokenName.text = args.name;

	$.tokenImage.image = Alloy.CFG.api_uri + "eth/v1/tokens/" + args.contractAddress + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key;

	function addToken() {

		ethereum.addToken(args.contractAddress, { "name": args.name, "symbol": args.symbol });

		args.close();
		globals.refreshTokens();
	}





	__defers['$.__views.addButton!click!addToken'] && $.addListener($.__views.addButton, 'click', addToken);



	_.extend($, exports);
}

module.exports = Controller;