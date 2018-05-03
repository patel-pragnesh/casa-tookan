var args = arguments[0] || {};

var util = require("requires/util");
var cache = require("requires/cache");
var auth = require("requires/auth");
var blockchain = require("requires/blockchain");
var closeDuration = 1000;
var selectedBitcoin = true;
$.passphraseLabel.text = globals.decryptedPassphrase;

 
 
$.pincode.add(util.createEasyInput({
		"type": "reconfirmInstant",
		"callback": function(number) {
			cache.data.easypass = number;
			cache.save();
			if( OS_IOS ) $.scrollableView.scrollToView($.touchid);
			else close();
		},
		"cancel": function(){}
	}).view);
 
$.nextButtonPassphrase.title = "Show passphrase";
$.nextButtonPassphrase.opacity = 0.2; 
$.nextButtonTouchid.title = L("label_intro_settouchid");
$.nextButtonTouchidSkip.title = L("label_intro_skip"); 

if( args.isPassphraseOnly != null ){
	$.scrollableView.scrollToView($.passphrase);
	$.nextButtonPassphrase.title = L("label_close");
	closeDuration = 300;
}
$.nextButtonPassphrase.opacity = 1.0;


function close(){
	$.introscreens.animate({
		"curve": Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 
		"opacity": 0.0, 
		"duration": closeDuration
	});
	setTimeout(function() {
    	$.introscreens.close();
    }, closeDuration + 5);
}
$.passphraseView.opacity = 0;
 var didShowPassphrase = false;
$.nextButtonPassphrase.addEventListener("click", function(e) {
	
	if(!didShowPassphrase){
		$.passphraseView.animate({
		"curve": Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 
		"opacity": 1.0, 
		"duration": 500
	}); 
		$.nextButtonPassphrase.title = "Continue";
		didShowPassphrase = true;
	}else{
	 
		if( args.isPassphraseOnly != null ) close();
		else $.scrollableView.scrollToView($.pincode);
	}
});
/*
$.nextButtonPincode.addEventListener("click", function(e) {
	var easyInput = util.createEasyInput({
		"type": "reconfirm",
		"callback": function(number) {
			cache.data.easypass = number;
			cache.save();
			if( OS_IOS ) $.scrollableView.scrollToView($.touchid);
			else close();
		},
		"cancel": function(){}
	});
	easyInput.open();
});
*/
$.nextButtonTouchidSkip.addEventListener("click", function(e) {
	close();
});

$.nextButtonTouchid.addEventListener("click", function(e) {
	auth.useTouchID({
		"callback": function(e) {
			if( e.success ){
				cache.data.isTouchId = true;
				cache.save();
			   close();
			}
			else {
				var dialog = util.createDialog({
					"title": L("label_admin_error"),
					"message": L("label_admin_error_message"),
					"buttonNames": [L("label_close")]
				});
				dialog.addEventListener("click", function(e) {
					close();
				});
				dialog.show();
			}
		}
	});
});

 
 

 