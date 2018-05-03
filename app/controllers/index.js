require("init");

var util = require("requires/util");
var cache = require("requires/cache");
var network = require("requires/network");
var bitcoin = require("requires/bitcoin");
var ethereum = require("requires/ethereum");
var blockchain = require("requires/blockchain");
//cache.init(); // TODO



if( cache.load() ){
	globals.setCache = function(){
if(cache.data.blockchainWallets == undefined){
  cache.data.blockchainWallets = [];
    
  	cache.data.blockchainWallets.push(blockchain.basePath+"0");
  	
  	cache.data.currentPath = cache.data.blockchainWallets[0];
    cache.save();
 }
 if(cache.data.addresses == undefined){
 	cache.data.addresses = {"bitcoin":{},"ethereum":{}};
 	 cache.save();
 }
  
};

globals.setCache();
	blockchain.updateUI();
	
	function startFrame(){
	 
		blockchain.initChains();
		blockchain.changeCurrentChain( cache.data.chainId || blockchain.BITCOIN );
		Alloy.createController("frame")
		.getView()
		.open();
		
	}
	
	Ti.App.addEventListener("resumed", function(e) {
		if( OS_IOS ) Ti.UI.iOS.setAppBadge(0);
		if( globals.isReorg ) globals.backgroundfetch();
		
		var url = null;
		if( OS_ANDROID && e.args != null ){
			url = e.args.url;
			if( !url.match(new RegExp("^" + Alloy.CFG.walletapp_uri)) ){
				url = "indiewallet://" + e.args.url;
			}
		}
		globals._parseArguments(url, {qrcode: false, completemessage: true});
	});
	if( OS_ANDROID ){
		Ti.Android.currentActivity.addEventListener("app:resume", function(e) {
	     	globals.lastUrl = null;
	    	Ti.App.fireEvent("resumed", { args: { url: e.data } });
	    });
	}
	if( OS_IOS ){
		Ti.App.iOS.addEventListener("continueactivity", function(e){
			if( e.activityType === "NSUserActivityTypeBrowsingWeb" ){
				globals.console.info("deepLinkURL:" + e.webpageURL);
				globals.lastUrl = null;
				globals._parseArguments(e.webpageURL, {qrcode: false, completemessage: true});
			}
		});
	}
	
	var view = null;
	if( cache.data.passphrase != null ){
		if( cache.data.passphrase === Alloy.Globals.demopassphrase ){
			globals.DEMO = true;
		}
		
		if( cache.data.currency == null ) cache.data.currency = cache.data.currncy;
		
		globals.decryptedPassphrase = cache.data.passphrase;
		var encryptCheck = bitcoin.init(globals.decryptedPassphrase);
		if( encryptCheck === "decrypted" ){
			Alloy.createController("encryption", { "callback": startFrame })
			.getView()
			.open();
		}
		else startFrame();
	}
	else{
		Alloy.createController("signin", { "callback": startFrame })
		.getView()
		.open();
	}
}
else{
	alert(L("text_access_deny") + "\nError:1000");
}