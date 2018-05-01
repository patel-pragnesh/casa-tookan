var args = arguments[0] || {};

var cache = require("requires/cache");
var util = require("requires/util");

var blockchain = require("requires/blockchain");

var win = Ti.UI.createWindow({
	"orientationModes": [Ti.UI.PORTRAIT],
	"navBarHidden": true,
	"backgroundColor": "transparent",
	"windowSoftInputMode": (OS_ANDROID)? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN: null
});
win.add($.currency);
win.open();

function close(e){
	$.background.animate({
	    "opacity": 0,
	    "duration": 200
	});
	
	$.mainView.animate({
		"bottom": -292,
	    "duration": 200
	});
	
	setTimeout(function() {
		win.width = 0;
    	win.close();
    }, 200);
}

if( OS_ANDROID ){
	win.addEventListener("android:back", function(){
		close();
		return true;
	});
}

$.background.animate({
    "opacity": 0.5,
    "duration": 200
});

$.mainView.animate({
	"bottom": 0,
    "duration": 200
});

var currentTiker = [];

if(cache.data.chainId == blockchain.BITCOIN){
	currentTiker = globals.tiker["BTC"];
}
else if(cache.data.chainId == blockchain.ETHEREUM){
	currentTiker = globals.tiker["ETH"];
}

for( key in currentTiker ){
	if( key === "PEPECASH" || key === "XCP" ) continue;
	
	var tiker = currentTiker[key];
	var args2 = {
		"name": key,
		"symbol": tiker.symbol,
		"currentCurrency": cache.data.currency,
		"callback": function( currency ){
			args.setLabel( currency );
			cache.data.currency = currency;
			cache.save();
			globals.refreshTokens();
			close();
		}
	};
	var currencyBox = Alloy.createController("component_currency_box", args2);
	$.currencyList.add(currencyBox.getView());
}

$.background.addEventListener("touchend", close);
$.closeIcon.addEventListener("touchend", close);