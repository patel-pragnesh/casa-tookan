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
	this.__controllerPath = 'browse';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.webview = Ti.UI.createWebView(
	{ id: "webview", url: "http://localhost:4200" });

	$.__views.webview && $.addTopLevelView($.__views.webview);
	$.__views.browseTopBar = Ti.UI.createView(
	{ width: Ti.UI.FILL, height: Alloy.Globals.topBarHeight, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "browseTopBar" });

	$.__views.browseTopBar && $.addTopLevelView($.__views.browseTopBar);
	$.__views.__alloyId22 = Ti.UI.createLabel(
	function () {
		var o = {};
		Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 28 });
		if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
		Alloy.deepExtend(true, o, { text: L("label_tab_browse"), id: "__alloyId22" });
		return o;
	}());

	$.__views.browseTopBar.add($.__views.__alloyId22);
	exports.destroy = function () {};




	_.extend($, $.__views);




	$.webview.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight);
	$.webview.top = $.browseTopBar.height;

	Alloy.Globals.lastAction = null;
	setInterval(function () {
		checkPressed();
	}, 50);
	function checkPressed() {
		if (Alloy.Globals.currentTab == 1) {
			var result = $.webview.evalJS("currentTookanAction;");
			$.webview.evalJS("currentTookanAction = null;");

			if (result != null && result != "") {
				if (result != Alloy.Globals.lastAction) {
					Alloy.Globals.lastAction = result;
					Alloy.createController("dappbrowser", {
						"url": Alloy.Globals.lastAction }).
					getView();
				}
			}
		}
	}









	_.extend($, exports);
}

module.exports = Controller;