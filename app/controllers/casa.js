var util = require("requires/util");
var cache = require("requires/cache");
var qrcode = require("requires/qrcode");
var bitcoin = require("requires/bitcoin");
	var ethereum = require("requires/ethereum");
/*
$.receiveView.top = (globals.display.height - 300) / 2;

$.qrcode.addEventListener("touchend", function(){
	Ti.UI.Clipboard.setText( cache.data.address );
	util.createDialog({
		"message":L("label_copied"),
		"buttonNames": [L("label_close")]
	}).show();
});
*/

$.mainView.top =  Alloy.Globals.topBarHeight;

$.settingsButton.addEventListener("touchend", function(){
	Alloy.createController("settings")
	.getView();
});

globals.setCurrentCasa = function(){ 
	
	$.btc_address.text = "BTC: "+bitcoin.getAddressForPath(cache.data.currentPath);
	$.eth_address.text = "ETH: "+ethereum.getAddressForPath(cache.data.currentPath);
	$.usd_value.text = "USD Value: $0";
	
	/*
	Ti.API.info("refreshReceive");
	Ti.API.info(cache.data.address);
	$.qrcode.removeAllChildren();
	
	$.address.text = cache.data.address;
	var newQrcodeView = qrcode.QRCode({
	    "typeNumber": 4,
	    "errorCorrectLevel": "L"
	})
	.createQRCodeView({
	    "width": 250,
	    "height": 250,
	    "text": cache.data.address
	});
	$.qrcode.add(newQrcodeView);
	*/
};
globals.setCurrentCasa();
 
globals.updateReceiveUI = function(){
	 
};

globals.updateReceiveUI();