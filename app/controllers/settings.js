var args = arguments[0] || {};

var util = require("requires/util");
var cache = require("requires/cache");
var tiker = require("requires/tiker");
var auth = require("requires/auth");
var network = require("requires/network");
var bitcoin = require("requires/bitcoin");

var blockchain = require("requires/blockchain");
var inputverify = require("requires/inputverify");

var win = Ti.UI.createWindow({
	"orientationModes": [Ti.UI.PORTRAIT],
	"navBarHidden": true,
	"backgroundColor": "transparent",
	"windowSoftInputMode": (OS_ANDROID)? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN: null
});
win.add($.settings);
win.open();
 $.casaList.top = 10;
$.casaList.height = Ti.UI.FILL;
function close(e){
	$.background.animate({
	    "opacity": 0,
	    "duration": 200
	});
	
	$.mainView.animate({
		"left": globals.display.width,
	    "duration": 200
	});
	
	setTimeout(function() {
		win.width = 0;
    	win.close();
    }, 200);
}
globals.addButtonEvent($.gobackButton, close);

if( OS_ANDROID ){
	win.addEventListener('android:back', function(){
		close();
		return true;
	});
}

$.background.animate({
    "opacity": 0.5,
    "duration": 200
});

$.mainView.animate({
	"left": 0,
    "duration": 200
});

function setCasas(){

function setCurrent(path){
	
	cache.data.currentPath = path;
	cache.save();
	globals.setCurrentCasa();
	globals.refreshHistory();
	globals.refreshTokens();
	close();
	
}	

	var tableData = [];
 
var tableSection = Ti.UI.createTableViewSection();


  
for( var i = 0; i < cache.data.blockchainWallets.length; i++ ){
	var path = cache.data.blockchainWallets[i];
	console.log(path);
		var args = {
		"path": path,
		"isLast": i > 0 && (i == cache.data.blockchainWallets.length - 1),
		"parent": $.casaList,
		"setCurrent": setCurrent,
		"remove": function( box, path2 ){ 
		}
	};
	var casaBox = Alloy.createController("component_casa_box", args).getView();
		var row = Ti.UI.createTableViewRow({
    className:'casa', 
    backgroundSelectedColor:'transparent',
    rowIndex:i, 
    height:200
  });
		 row.add( casaBox);
		 tableSection.add(row);
	
}

	tableData.push(tableSection);
		$.casaList.data = tableData;
	
	
}

$.addCasa.addEventListener("click", function(){
	console.log(blockchain.basePath+""+cache.data.blockchainWallets.length);
	cache.data.blockchainWallets.push(blockchain.basePath+""+cache.data.blockchainWallets.length);
	
	setCasas();
	
	cache.save();
});
	 
	setCasas();
	
	
  

function signin(){
	cache.data.addresses = [];
	cache.save();
	cache.init();
	cache.load();
	
	Alloy.createController("signin")
	.getView()
	.open();
	win.close();
}

$.signoutButton.addEventListener("click", function(){
	var dialog = util.createDialog({
		title: L("label_settings_signout"),
		message: L("label_settings_signout_message"),
		buttonNames: [L("label_cancel"), L("label_settings_signout")]
	});
	dialog.addEventListener("click", function(e){
		if( e.index != e.source.cancel ){
			globals.console.info("loading!");
			 Ti.App.Properties.removeProperty(globals.userEthTokens);
			var loading = util.showLoading($.settings, {
		        "width": Ti.UI.FILL,
		        "height": Ti.UI.FILL,
		        "style": "dark",
		        "message": L("label_loading")
		    });
			 signin();
		}
	});
	dialog.show();
});
 