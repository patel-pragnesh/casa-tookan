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
		this.__controllerPath = 'add_contract_address_box';
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
		{ width: "100%", height: Ti.UI.FILL, top: 0, left: 0, backgroundColor: "#transparent", id: "mainView" });

		$.__views.mainView && $.addTopLevelView($.__views.mainView);
		$.__views.background = Ti.UI.createView(
		{ width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: "#000000", opacity: 0, id: "background" });

		$.__views.mainView.add($.__views.background);
		$.__views.__alloyId0 = Ti.UI.createView(
		{ backgroundColor: "#ebebeb", width: 300, height: 200, borderRadius: 10, id: "__alloyId0" });

		$.__views.mainView.add($.__views.__alloyId0);
		$.__views.closeButton = Ti.UI.createButton(
		{ left: 5, top: 5, height: 18, width: 18, backgroundImage: "/images/browser_close_blue.png", id: "closeButton" });

		$.__views.__alloyId0.add($.__views.closeButton);
		close ? $.addListener($.__views.closeButton, 'click', close) : __defers['$.__views.closeButton!click!close'] = true;$.__views.searchControls = Ti.UI.createView(
		{ top: 20, layout: "vertical", id: "searchControls" });

		$.__views.__alloyId0.add($.__views.searchControls);
		$.__views.title = Ti.UI.createLabel(
		{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#7083be", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "bold" }, top: 10, text: 'enter contract address', id: "title" });

		$.__views.searchControls.add($.__views.title);
		$.__views.contractAddressField = Ti.UI.createTextField(
		{ clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS, keyboardType: Ti.UI.KEYBOARD_TYPE_DEFAULT, returnKeyType: Ti.UI.RETURNKEY_DONE, borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE, backgroundColor: "#ffffff", color: "#333300", height: 40, width: 250, padding: { left: 5 }, top: 15, id: "contractAddressField" });

		$.__views.searchControls.add($.__views.contractAddressField);
		$.__views.__alloyId1 = Ti.UI.createView(
		{ id: "__alloyId1" });

		$.__views.searchControls.add($.__views.__alloyId1);
		$.__views.searchButton = Ti.UI.createButton(
		{ top: 15, height: 40, width: 100, backgroundColor: "#7083be", color: "white", id: "searchButton" });

		$.__views.__alloyId1.add($.__views.searchButton);
		searchToken ? $.addListener($.__views.searchButton, 'click', searchToken) : __defers['$.__views.searchButton!click!searchToken'] = true;$.__views.activityIndicator = Ti.UI.createActivityIndicator(
		{ style: Ti.UI.ActivityIndicatorStyle.DARK, id: "activityIndicator", message: "" });

		$.__views.__alloyId1.add($.__views.activityIndicator);
		$.__views.tokenInfo = Ti.UI.createView(
		{ top: 20, layout: "vertical", id: "tokenInfo", visible: false });

		$.__views.__alloyId0.add($.__views.tokenInfo);
		$.__views.__alloyId2 = Ti.UI.createView(
		{ top: 15, width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId2" });

		$.__views.tokenInfo.add($.__views.__alloyId2);
		$.__views.tokenImage = Ti.UI.createImageView(
		{ height: 50, width: 50, id: "tokenImage", defaultImage: "/images/image_blank.png" });

		$.__views.__alloyId2.add($.__views.tokenImage);
		$.__views.tokenLabels = Ti.UI.createView(
		{ left: 15, layout: "vertical", width: Ti.UI.SIZE, height: Ti.UI.SIZE, id: "tokenLabels" });

		$.__views.__alloyId2.add($.__views.tokenLabels);
		$.__views.tokenSymbol = Ti.UI.createLabel(
		{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, textAlign: "left", id: "tokenSymbol" });

		$.__views.tokenLabels.add($.__views.tokenSymbol);
		$.__views.tokenName = Ti.UI.createLabel(
		{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000000", font: { fontFamily: "HelveticaNeue-Light", fontSize: 18, fontWeight: "normal" }, textAlign: "left", id: "tokenName" });

		$.__views.tokenLabels.add($.__views.tokenName);
		$.__views.__alloyId3 = Ti.UI.createView(
		{ width: Ti.UI.SIZE, height: Ti.UI.SIZE, layout: "horizontal", id: "__alloyId3" });

		$.__views.tokenInfo.add($.__views.__alloyId3);
		$.__views.backButton = Ti.UI.createButton(
		{ top: 15, height: 40, width: 100, backgroundColor: "#7083be", color: "white", id: "backButton" });

		$.__views.__alloyId3.add($.__views.backButton);
		backToSearch ? $.addListener($.__views.backButton, 'click', backToSearch) : __defers['$.__views.backButton!click!backToSearch'] = true;$.__views.addButton = Ti.UI.createButton(
		{ left: 10, top: 15, height: 40, width: 100, backgroundColor: "#7083be", color: "white", id: "addButton" });

		$.__views.__alloyId3.add($.__views.addButton);
		addToken ? $.addListener($.__views.addButton, 'click', addToken) : __defers['$.__views.addButton!click!addToken'] = true;exports.destroy = function () {};




		_.extend($, $.__views);


		var blockchain = require("requires/blockchain");
		var ethereum = require("requires/ethereum");
		var args = arguments[0] || {};
		var currentTokenInfo = null;

		$.background.animate({
				"opacity": 0.5,
				"duration": 200 });

		$.activityIndicator.hide();
		$.searchButton.title = L("label_search");
		$.backButton.title = L("label_goback").toLowerCase();
		$.addButton.title = L("label_add").toLowerCase();

		function addToken() {

				if (currentTokenInfo != null) {

						ethereum.addToken($.contractAddressField.value, currentTokenInfo);
				}
				args.close();

				globals.refreshTokens();
		}
		function backToSearch() {
				$.searchControls.visible = true;
				$.tokenInfo.visible = false;
		}

		function searchToken() {
				$.searchButton.hide();
				$.activityIndicator.show();

				blockchain.API.getToken({
						"chain": blockchain.ETHEREUM,
						"contractAddress": $.contractAddressField.value,
						"callback": function (tokenInfo) {
								currentTokenInfo = tokenInfo;
								$.searchControls.visible = false;
								$.tokenInfo.visible = true;
								$.tokenSymbol.text = tokenInfo.symbol;
								$.tokenName.text = tokenInfo.name;
								$.tokenImage.image = Alloy.CFG.api_uri + "eth/v1/tokens/" + $.contractAddressField.value + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key;
								console.log(tokenInfo);
						},
						"onError": function (error) {
								alert(L('label_error_finding_token'));
						},
						"always": function () {

								$.searchButton.show();
								$.activityIndicator.hide();
						} });

		}
		function close() {

				$.background.animate({
						"opacity": 0,
						"duration": 200 });


				$.trigger('close');
		}





		__defers['$.__views.closeButton!click!close'] && $.addListener($.__views.closeButton, 'click', close);__defers['$.__views.searchButton!click!searchToken'] && $.addListener($.__views.searchButton, 'click', searchToken);__defers['$.__views.backButton!click!backToSearch'] && $.addListener($.__views.backButton, 'click', backToSearch);__defers['$.__views.addButton!click!addToken'] && $.addListener($.__views.addButton, 'click', addToken);



		_.extend($, exports);
}

module.exports = Controller;