var args = arguments[0] || {};

var util = require("requires/util");
var cache = require("requires/cache");
var auth = require("requires/auth");
var blockchain = require("requires/blockchain");
var closeDuration = 1000;
var selectedBitcoin = true;
$.passphraseLabel.text = globals.decryptedPassphrase;

$.nextButtonSuccess.title = L("label_continue");
$.nextButtonPassphrase.title = L("label_continue");
$.nextButtonPassphrase.opacity = 0.2;
$.nextButtonPincode.title = L("label_intro_setpincode");
$.nextButtonTouchid.title = L("label_intro_settouchid");
$.nextButtonTouchidSkip.title = L("label_intro_skip");
$.nextButtonPush.title = L("label_intro_push_button");

if( args.isPassphraseOnly != null ){
	$.scrollableView.scrollToView($.passphrase);
	$.nextButtonPassphrase.title = L("label_close");
	closeDuration = 300;
}

var slider = util.createSlider({
	init: false,
	on: function(){
		$.nextButtonPassphrase.opacity = 1.0;
	},
	off: function(){
		$.nextButtonPassphrase.opacity = 0.2;
	}
});

var sliderGroup = util.group({
	"slider": slider.origin,
	"text": util.makeLabel({
		text: L("label_intro_wroteitdown"),
		textAlign: "left",
		color: "white",
		font: {
			fontFamily: "HelveticaNeue-Light",
			fontSize: 15,
			fontWeight: "light"
		},
		left: 10
	})
}, "horizontal");
sliderGroup.bottom = 80;
$.passphrase.add(sliderGroup);

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

$.nextButtonSuccess.addEventListener("click", function(e) {
	$.scrollableView.scrollToView($.passphrase);
});

$.nextButtonPassphrase.addEventListener("click", function(e) {
	if( slider.is ){
		if( args.isPassphraseOnly != null ) close();
		else $.scrollableView.scrollToView($.pincode);
	}
});

$.nextButtonPincode.addEventListener("click", function(e) {
	var easyInput = util.createEasyInput({
		"type": "reconfirm",
		"callback": function(number) {
			cache.data.easypass = number;
			cache.save();
			if( OS_IOS ) $.scrollableView.scrollToView($.touchid);
			else $.scrollableView.scrollToView($.complete);
		},
		"cancel": function(){}
	});
	easyInput.open();
});

$.nextButtonTouchidSkip.addEventListener("click", function(e) {
	$.scrollableView.scrollToView($.complete);
});

$.nextButtonTouchid.addEventListener("click", function(e) {
	auth.useTouchID({
		"callback": function(e) {
			if( e.success ){
				cache.data.isTouchId = true;
				cache.save();
			    $.scrollableView.scrollToView($.complete);
			}
			else {
				var dialog = util.createDialog({
					"title": L("label_admin_error"),
					"message": L("label_admin_error_message"),
					"buttonNames": [L("label_close")]
				});
				dialog.addEventListener("click", function(e) {
					$.scrollableView.scrollToView($.complete);
				});
				dialog.show();
			}
		}
	});
});

$.nextButtonPush.addEventListener("click", function(e) {
	var fcm = require("requires/fcm");
	fcm.start(function(){
		$.scrollableView.scrollToView($.complete);
	});
});

 

function selectBitcoin(){
	 
		selectedBitcoin = true;
		$.bitcoinCheck.image = "/images/icon_checked.png";
		$.ethereumCheck.image = "/images/icon_unchecked.png";
		
		 $.notSureCheck.image = "/images/icon_unchecked.png";
		 
		blockchain.changeCurrentChain(blockchain.BITCOIN );
     
	close();
	 
}

function selectEthereum(){
	
		selectedBitcoin = false;
		$.bitcoinCheck.image = "/images/icon_unchecked.png";
		$.ethereumCheck.image = "/images/icon_checked.png";
		 $.notSureCheck.image = "/images/icon_unchecked.png";
			blockchain.changeCurrentChain(blockchain.ETHEREUM );
	 
	close();
	
}

function selectEither(){
	
		selectedBitcoin = false;
		$.bitcoinCheck.image = "/images/icon_unchecked.png";
		$.ethereumCheck.image = "/images/icon_unchecked.png";
		$.notSureCheck.image = "/images/icon_checked.png";
		blockchain.changeCurrentChain(blockchain.BITCOIN );
     
	close();
	
}