var args = arguments[0] || {};
var blockchain = require("requires/blockchain");
var network = require("requires/network");
var cache = require("requires/cache");
var tiker = require("requires/tiker");
var ethereum = require("requires/ethereum");
var balanceLoaded = false;
 $.activityIndicator.hide();
$.balances.visible = true;
$.sendButton.visible = false;

 
$.tokenBox.addEventListener('postlayout', function(e){
	if(OS_IOS){
	 getBalance();
	}
	else if(OS_ANDROID){
		getBalance();
			 
	}
});
  
   if(OS_ANDROID){
   if(args.id < 10){ //on android postlayoutisnt called on start for some reason so load the first 10 then on scroll the post layout will fire
			getBalance();
			}
			}

if(args.type == "ethereum"){
	if( args.token !== "ETH" ){
$.tokenBox.addEventListener('swipe', function(e) {
	 
  if (e.direction == 'left'){
  	
  	var slide = Ti.UI.createAnimation({
		 left: -70,
		duration : 200,
	});
	$.tokenBox.animate(slide);
   
  }
  if (e.direction == 'right'){
    var slide = Ti.UI.createAnimation({
		 left: 0,
		duration : 200,
	});
	$.tokenBox.animate(slide);
  }
});
}
/*
$.removeButton.addEventListener('click', function(e){
	ethereum.removeToken(args.contractAddress);
	globals.refreshTokens();
});*/
}





function showBalances(){
	$.tokenBalance.text = args.balance.toFixed2(8);
	$.tokenBalanceFiat.text = args.balanceFiat;
	if( args.unconfirmedBalance != 0 ){
		$.tokenBalanceUnconfirmed.visible = true;
		$.tokenBalanceUnconfirmed.text = args.unconfirmedBalance;
	}
	
	$.sendButton.visible = true;
	
	
	
}

if( args.token.length >= 13 ){
	$.tokenName.text = args.token.substr(0, 13) + "...";
}
else {
	$.tokenName.text = args.token;
}

if(args.type == "ethereum"){
	if( args.token === "ETH" ){
		$.tokenImage.image = "/images/asset_eth.png";
	}
	else{
		console.log(Alloy.CFG.api_uri + "eth/v1/tokens/" + args.contractAddress + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key);
		$.tokenImage.image = Alloy.CFG.api_uri + "eth/v1/tokens/" + args.contractAddress + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key;
	}
}
else if(args.type == "bitcoin"){
	if( args.token === "BTC" ){
		$.tokenImage.image = "/images/asset_btc.png";
	}
	else if( args.token === "XCP" ){
		$.tokenImage.image = "/images/asset_xcp.png";
	}
	else{
		
		$.tokenImage.image = Alloy.CFG.api_uri + "btc/v1/tokens/" + args.token + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key;
	}
}

if(args.type == "ethereum"){
	if( args.token === "ETH"){
	$.infoButton.visible = false;
	}
	else{
	globals.addButtonEvent($.infoButton, function(e){
		Titanium.Platform.openURL("https://etherscan.io/token/" + args.contractAddress);
	
		});
	}
}
else if(args.type == "bitcoin"){
if( args.token === "BTC" || args.token === "XCP" ){
	$.infoButton.visible = false;
}
else{
	globals.addButtonEvent($.infoButton, function(e){
			Titanium.Platform.openURL("walletapp.indiesquare.me/explorer/#/tokens/" + args.token);
			
	});
}
}

var isFiatLoaded = false;
function loadFiat(){
	if( !isFiatLoaded ){
			
			if(args.type == "ethereum"){
				
				if(args.token == "ETH"){
					
				console.log("getting eth "+args.type+" "+args.token+" "+ args.balance);
				 	args.balanceFiat=tiker.to(args.type,args.token, args.balance, cache.data.currency);
				 	console.log("getting eth "+args.balanceFiat);
				 	$.tokenBalanceFiat.text =  args.balanceFiat;
				 	isFiatLoaded = true;
				
				}
				
			}else{
		 
			
			if (args.token === "BTC" || args.token === "XCP") {
				if (args.token === "XCP" && !isFinite(args.balance)) globals.reorg_occured();
				 args.balanceFiat=tiker.to(args.type,args.token, args.balance, cache.data.currency);
				 $.tokenBalanceFiat.text =  args.balanceFiat;
				 isFiatLoaded = true;
			}
			else {
				network.connectGET({
					"chain":"btc",
            		"version":"v1",
					"method" : "markets/" + args.token,
					"callback" : function(result) {
						isFiatLoaded = true;
						if (result.BTC.price > 0) {
							var xcpval = result.BTC.price * args.balance;
							$.tokenBalanceFiat.text = tiker.to(args.type,"BTC", xcpval, cache.data.currency, 4);
						} else {
							$.tokenBalanceFiat.text = "-";
						}
					},
					"onError" : function(error) {
						 console.error( args.token,error);
					}
				});
			}
			}
		} 
	//}
}

globals.addButtonEvent($.sendButton, function(e){
	Alloy.createController("send", {
		"token": args.token,
		"balance": args.balance,
		"contractAddress": args.contractAddress
	})
	.getView();
	//.open();
});

function getBalance(){
	if(args.type == "ethereum"){
		if(balanceLoaded == false){
	 $.activityIndicator.show();
	 $.balances.visible = false;
	 var token = args.contractAddress;
	 
	blockchain.API.getBalances({
		"chain":"ethereum",
		"contractAddress":token,
		"callback": function( balances ){ 
		  balanceLoaded = true;
		 	args.balance=parseFloat(balances.balance);
			
			args.unconfirmedBalance = balances.unconfirmedBalance;
				 loadFiat();
			showBalances();
		
		},
		"onError": function( error ){
			 	console.log(error);
			 	$.tokenBalance.text = "error";
		},
		"always": function(){
		 	 $.activityIndicator.hide();
		 	
			 $.balances.visible = true;
		}
	});
	}
}else if(args.type == "bitcoin"){
	
	 loadFiat();
	showBalances();
}
}


