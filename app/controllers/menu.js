var cache = require("requires/cache");
var util = require("requires/util");
var network = require("requires/network");
var bitcoin = require("requires/bitcoin");
var blockchain = require("requires/blockchain");
var ethereum = require("requires/ethereum");

globals.currentBlockchainWallets = [];
var win = Ti.UI.createWindow({
	"orientationModes": [Ti.UI.PORTRAIT],
	"navBarHidden": true,
	"backgroundColor": "transparent",
	"windowSoftInputMode": (OS_ANDROID)? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN: null
});
win.add($.menu);
win.open();

if(cache.data.chainId == blockchain.ETHEREUM){
	$.menuItems.remove($.priorityButton);
}

var isClosing = false;
function setBitcoinBlockchain(){
	
	 
	 blockchain.changeCurrentChain(blockchain.BITCOIN );
     
 
   	close();
   	 
}
function setEthereumBlockchain(){
	
    blockchain.changeCurrentChain(blockchain.ETHEREUM );
     
   
  	  close(); 
   
   	 
}
 
function close(){
	if( !isClosing ){
		isClosing = true;
		
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
}

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
	"left": "20%",
    "duration": 200
});
 
function setFeeLabel( currentFee ){
	if( isFinite(currentFee) ) $.priorityLabel.text = currentFee + "BTC";
	else $.priorityLabel.text = globals.feeTexts[currentFee];
}
setFeeLabel(cache.data.currentFee);

function setWalletsHeight(){
	var length = walletViews.length;
	if( walletViews.length < 4 ){
		$.addressList.height = length * 100;
		$.newaddress.top = length * 100;
	}
	else {
	    $.addressList.height = 350;
		$.newaddress.top = 350;
	}
}

function setCurrent(index ){
	
if(cache.data.chainId == blockchain.BITCOIN){
	cache.data.address = bitcoin.changeHD(index);
}
else if(cache.data.chainId == blockchain.ETHEREUM){
	cache.data.address = ethereum.changeHD(index);
}
	cache.save();
	
	$.addressCurrentWallet.text = cache.data.address;
	$.tagCurrentWallet.text = Ti.App.Properties.getString(cache.data.address);
	
	globals.refreshTokens();
	globals.refreshHistory();
	globals.refreshReceive();
}

var walletViews = [];
function addAddressBox( wallet, pos ){
	var args = {
		"id": wallet.id,
		"tag": wallet.tag,
		"address": wallet.address,
		"pos": pos,
		"isLast": pos > 0 && (pos == globals.currentBlockchainWallets.length - 1),
		"parent": $.addressList,
		"setCurrent": setCurrent,
		"remove": function( box, address ){
			if( address === cache.data.address ) setCurrent(globals.currentBlockchainWallets[0].pos );
			
			for( var i = 0; i < globals.wallets.length; i++ ){
	var wallet = globals.wallets[i];
		if(wallet.id == globals.currentBlockchainWallets[globals.currentBlockchainWallets.length-1].id){
			console.log( wallet);
			globals.wallets.splice(i, 1);
			break;
		}
	
	}
			globals.currentBlockchainWallets.pop();
			
			var view = walletViews.pop();
			if( walletViews.length > 1 ) walletViews[walletViews.length - 1].showRemoveButton();
			$.addressList.remove(view.getView());
			setWalletsHeight();
		}
	};
	var addressBox = Alloy.createController("component_address_box", args);
	$.addressList.add(addressBox.getView());
	walletViews.push(addressBox);
	setWalletsHeight();
}

 
globals.currentBlockchainWallets = [];
for( var i = 0; i < globals.wallets.length; i++ ){
	var wallet = globals.wallets[i];
		
	if(wallet.blockchain == cache.data.chainId+""){
		globals.currentBlockchainWallets.push(wallet);
		
	}
}
for( var i = 0; i < globals.currentBlockchainWallets.length; i++ ){
	var wallet = globals.currentBlockchainWallets[i];
Ti.App.Properties.setString(wallet.address, wallet.tag);
		addAddressBox(wallet, i);
		 
	}

$.addressCurrentWallet.text = cache.data.address;
$.tagCurrentWallet.text = Ti.App.Properties.getString(cache.data.address);

$.newaddress.addEventListener("touchend", function(){
	var dialog = util.createInputDialog({
		title: L("label_add_wallet"),
		message: L("label_add_wallet_message"),
		value: "",
		buttonNames: [L("label_close"), L("label_add")]
	});
	dialog.origin.addEventListener("click", function(e) {
		var inputText = (OS_ANDROID) ? dialog.androidField.getValue(): e.text;
		if (e.index != e.source.cancel) {
			if (inputText.length > 0) {

	 
						
						var numHDAddress = globals.currentBlockchainWallets.length;
							if( numHDAddress <= 0 ) numHDAddress = 1;
						if(cache.data.chainId == blockchain.BITCOIN){
							
						 
					
						var path =  bitcoin.getBasePath() + numHDAddress;
						var newAddress = bitcoin.createHDAddress(numHDAddress);
						}
						else if(cache.data.chainId == blockchain.ETHEREUM){
						
							var path =  ethereum.getBasePath() + numHDAddress;
						 
						
						var newAddress = ethereum.createHDAddress(numHDAddress);
							
						}
						
						 
					 
							   walletViews[walletViews.length - 1].hideRemoveButton();
							 	
							 	Ti.App.Properties.setString(newAddress, inputText);
										
										var wallet = {
											"id":newAddress,
											"tag": inputText,
											"address": newAddress,
											"blockchain":cache.data.chainId,
											"index":path,
											"pos": numHDAddress+1,
										};
										globals.wallets.push(wallet);
								 		globals.currentBlockchainWallets.push(wallet);
								 		
										addAddressBox(wallet,globals.currentBlockchainWallets.length - 1);

							 
			 
		}
		}
	});
	dialog.origin.show();
});

var isWalletsShowing = false;
$.currentWallet.addEventListener("click", function(){
	globals.console.info("isWalletsShowing="+isWalletsShowing);
	if( !isWalletsShowing ){
		isWalletsShowing = true;
		$.listView.animate({
		    "top": 0,
		    "duration": 300
		});
		var downArrowTransformation = Ti.UI.create2DMatrix();
	    downArrowTransformation = downArrowTransformation.rotate(90); // this does not work
	    $.arrowIcon.animate({
	    	transform : downArrowTransformation,
	    	duration: 200
	 	});
 	}
 	else{
 		isWalletsShowing = false;
 		$.listView.animate({
		    "top": -400,
		    "duration": 300
		});
 		var rightArrowTransformation = Ti.UI.create2DMatrix();
	    rightArrowTransformation = rightArrowTransformation.rotate(0);
	    $.arrowIcon.animate({
	      transform : rightArrowTransformation,
	      duration: 300
	 	});
	 }
});

globals.addButtonEvent($.faqButton, function(e){
	Alloy.createController("weblink", {
		"path": Alloy.CFG.dashboard_uri + "faqs/wallet",
		"barColor": Alloy.Globals.mainColor
	})
	.getView()
	.open();
});

globals.addButtonEvent($.priorityButton, function(e){
	Alloy.createController("priority", {
		"setFeeLabel": setFeeLabel
	})
	.getView();
});

globals.addButtonEvent($.settingsButton, function(e){
	Alloy.createController("settings")
	.getView();
});

$.background.addEventListener("touchend", close);

$.menu.addEventListener("swipe", function(e) {
	if (e.direction == "right") close();
});

globals.updateMenuUI = function(){
	
	$.walletBar.backgroundColor = globals.currentColor;
	$.blockchainBar.backgroundColor = globals.currentColor;
	$.newaddress.backgroundColor = globals.currentColor;
	
	var prefix = "";
	
	$.bitcoinChain.backgroundColor = "transparent";
	$.ethereumChain.backgroundColor = "transparent";
	
	if(cache.data.chainId == blockchain.ETHEREUM){
		prefix = "_eth";
		$.ethereumChain.backgroundColor = Alloy.Globals.ethereumColor;
	}
	else {
		$.bitcoinChain.backgroundColor = Alloy.Globals.bitcoinColor;
		
	}
	
	$.priorityIcon.image = "/images/icon_settings_priority"+prefix+".png";
	$.faqIcon.image = "/images/icon_settings_faq"+prefix+".png";
	$.settingsIcon.image = "/images/icon_settings"+prefix+".png";
	$.walletIcon.image = "/images/icon_wallet_red"+prefix+".png";
	$.arrowIcon.image = "/images/icon_arrow_right"+prefix+".png";
 
};
globals.updateMenuUI();
