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
	this.__controllerPath = 'component_currency_box';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.currencyBox = Ti.UI.createView(
	{ width: Ti.UI.FILL, height: 50, top: 0, backgroundColor: "#ffffff", id: "currencyBox" });

	$.__views.currencyBox && $.addTopLevelView($.__views.currencyBox);
	$.__views.name = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, left: 10, id: "name" });

	$.__views.currencyBox.add($.__views.name);
	$.__views.checked = Ti.UI.createImageView(
	{ right: 10, width: 25, height: 25, id: "checked", image: "/images/icon_checked.png", visible: false });

	$.__views.currencyBox.add($.__views.checked);
	$.__views.__alloyId31 = Ti.UI.createView(
	{ width: Ti.UI.FILL, height: 1, bottom: 0, backgroundColor: "#ececec", id: "__alloyId31" });

	$.__views.currencyBox.add($.__views.__alloyId31);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var args = arguments[0] || {};

	var util = require("requires/util");
	var cache = require("requires/cache");

	$.name.text = args.name;

	if (args.currentCurrency === args.name) $.checked.visible = true;

	$.currencyBox.addEventListener("touchend", function () {
		args.callback(args.name);
	});









	_.extend($, exports);
}

module.exports = Controller;