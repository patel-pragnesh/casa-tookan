var args = arguments[0] || {};

var util = require("requires/util");
var bitcoin = require("requires/bitcoin");
var cache = require("requires/cache");

var evaltimer = null;
if( args.hasOwnProperty("barColor") ){
	$.webTopBar.backgroundColor = args.barColor;
	$.webBottomBar.backgroundColor = args.barColor;
}

if( OS_IOS ){
	var sig = bitcoin.signMessage("dex.indiesquare.me");
	var tiagent = require("inc.indiesquare.customuseragent");
	tiagent.setIOSUserAgent("ios/IndieSquareWallet (iPhone; Mobile) WIP " + cache.data.address + " " + sig);
}

$.webTopBar.height = Alloy.Globals.topBarHeight; 
 
$.webview.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight);
$.webview.top = $.webTopBar.height;
$.webview.url = args.path;
globals.console.info("args.path="+args.path);

var loading = null;
$.webview.addEventListener("setloadings", function(e) {
	loading = util.showLoading($.webview, { width: Ti.UI.FILL, height: Ti.UI.FILL});
});
$.webview.fireEvent('setloadings');

$.webview.addEventListener("load", function(e) {
	if( loading != null ) loading.removeSelf();
	
	if( OS_ANDROID ) $.webview.userAgent = "android/IndieSquareWallet (Android; Mobile)";
	if( evaltimer == null ){
		evaltimer = setInterval(function () {
			var code = "typeof weblink=='function' && weblink();";
			var result = $.webview.evalJS(code);
			if( result != null && result !== "false" && result.length > 0 && result !== "null" ){
    			if( result.match(/screen_to/) ){
    				$.weblink.close();
    			}
    			//globals.console.info("eval resule _parseArguments:" + result);
    			//globals._parseArguments(result, {qrcode: false, completemessage: false});
    		}
    		else globals.console.info("eval resule:" + result);
	    }, 500);
	}
	
	if( $.webview.canGoBack() ){
		$.backButton.enabled = true;
		$.backButton.opacity = 1.0;
	}
	else {
		$.backButton.enabled = false;
		$.backButton.opacity = 0.3;
	}
});

$.webview.addEventListener("error", function(e) {
	if( loading != null ) loading.removeSelf();
	if( evaltimer != null ){
        clearInterval(evaltimer);
        evaltimer = null;
    }
	$.webview.hide();
	
	var text_notransactions = util.makeLabel({
		text: L("text_webfailed"),
		font: { fontSize: 12 },
		color: "#2b4771"
	});
	$.webview.add(text_notransactions);
});

$.backButton.addEventListener("touchend", function() {
	if( $.backButton.enabled ) $.webview.goBack();
});

$.reloadButton.addEventListener("touchend", function() {
	$.webview.reload();
});

$.closeButton.addEventListener("touchend", function() {
	var dialog = util.createDialog({
		title : L("label_confirm"),
		message : L("label_weblink_close_message"),
		buttonNames : [L("label_cancel"), L("label_okay")]
	});
	dialog.addEventListener("click", function(e) {
		if (e.index != e.source.cancel) {
			$.weblink.close();
		} 
	});
	dialog.show();
});

$.weblink.addEventListener("close", function(e) {
	globals.weblink = null;
	if( loading != null ) loading.removeSelf();
	if( evaltimer != null ){
        clearInterval(evaltimer);
        evaltimer = null;
    }
});