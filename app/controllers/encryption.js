var args = arguments[0] || {};

var util = require("requires/util");
var cache = require("requires/cache");
var network = require("requires/network");
var bitcoin = require("requires/bitcoin");

$.inputPassword.hintText = L("label_password");
$.inputPassword.hintTextColor = "gray";

function decryptPassphrase(){
	var decryptedText = bitcoin.decryptPassphrase(cache.data.passphrase, $.inputPassword.value);
	var result = bitcoin.init(decryptedText);
	if( result !== "decrypted" ){
		globals.decryptedPassphrase = decryptedText;
		args.callback();
		if( OS_IOS ) $.encryption.close();
	}
	else {
		
		loading.removeSelf();
		util.createDialog({
			"title": L("label_encryption_incorrect"),
			"message": L("label_encryption_incorrect_message"),
			"buttonNames": [L("label_close")]
		}).show();
	}
}

$.decyptButton.addEventListener("touchend", function(){
	
	         $.inputPassword.blur();
		           loading = util.showLoading($.encryption, {
        "width": Ti.UI.FILL,
        "height": Ti.UI.FILL,
        "style": "dark",
        "message": L("label_loading")
    });
	setTimeout(function(){
		decryptPassphrase();
	},200);
	
});

$.signoutButton.addEventListener("touchend", function(){
	var dialog = util.createDialog({
		"title": L("label_settings_signout"),
		"message": L("label_encryption_signout_message"),
		"buttonNames": [L("label_cancel"), L("label_settings_signout")]
	});
	dialog.addEventListener("click", function(e){
		if( e.index != e.source.cancel ){
			$.activityIndicator.show();
			
			network.connectDELETE({
				"chain":"btc",
				"version":"v1",
				"method" : "devices/"+globals.deviceToken,
				"post" : {},
				"callback" : function(result) {
					globals.console.info(result);
				},
				"onError" : function(error) {
					globals.console.info("error remove:" + error);
				}
			});
			
			cache.init();
			cache.load();
			//if( globals.weblink != null ) globals.weblink.window.close(); TODO
			if( OS_IOS ) $.encryption.close();
			Alloy.createController("signin")
			.getView()
			.open();
		}
	});
	dialog.show();
});