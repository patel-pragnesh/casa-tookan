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
	{ id: "webview", url: "https://casa-tookan-store.herokuapp.com/" });

	$.__views.webview && $.addTopLevelView($.__views.webview);
	$.__views.browseTopBar = Ti.UI.createView(
	{ width: Ti.UI.FILL, height: Alloy.Globals.topBarHeight, top: 0, backgroundColor: Alloy.Globals.mainColor, id: "browseTopBar" });

	$.__views.browseTopBar && $.addTopLevelView($.__views.browseTopBar);
	$.__views.settingsButton = Ti.UI.createImageView(
	{ left: 10, width: 30, bottom: 10, id: "settingsButton", image: "/images/tookan.png" });

	$.__views.browseTopBar.add($.__views.settingsButton);
	$.__views.__alloyId29 = Ti.UI.createLabel(
	function () {
		var o = {};
		Alloy.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#gray", font: { fontFamily: "HelveticaNeue-Light", fontSize: 20, fontWeight: "normal" }, top: 28 });
		if (Alloy.Globals.isiPhoneX) Alloy.deepExtend(true, o, { top: 38 });
		Alloy.deepExtend(true, o, { text: L("label_tab_browse"), id: "__alloyId29" });
		return o;
	}());

	$.__views.browseTopBar.add($.__views.__alloyId29);
	exports.destroy = function () {};




	_.extend($, $.__views);




	$.webview.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight);
	$.webview.top = $.browseTopBar.height;

	$.settingsButton.addEventListener("touchend", function () {
		Alloy.createController("settings").getView();
	});

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