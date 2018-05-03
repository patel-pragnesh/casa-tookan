var cache = require("requires/cache");
var util = require("requires/util");
var network = require("requires/network");
var blockchain = require("requires/blockchain");
var bitcoin = require("requires/bitcoin");
 var ethereum = require("requires/ethereum");
var isLoadingBitcoin = false;
var loadingRequestBitcoin = null;
 
 
 var isLoadingEthereum = false;
var loadingRequestEthereum = null;
 
 var itemNumberBitcoin = 0;
var pageBitcoin = 1;
var perPageBitcoin= 25;  
var tokensSectionBitcoin = null;


 var itemNumberEthereum = 0;
var pageEthereum = 1;
var perPageEthereum = 25;  
var tokensSectionEthereum = null;
$.registerButton.visible = false;
globals.loadedEthereumBalances = false;
 
 $.settingsButton.addEventListener("touchend", function(){
	Alloy.createController("settings")
	.getView();
});

 
 $.tabCounterparty.backgroundColor = "rgba(0,0,0,0.2)";
 
  var tabColor = "#f3f3f3";
 
 
 $.tabCounterparty.addEventListener("touchend", function(){
 	 
 	 $.registerButton.visible = false;
	$.tabCounterparty.backgroundColor = "rgba(0,0,0,0.2)";
	$.tabEthereum.backgroundColor = tabColor;
	
	 
	
	 $.bitcoinList.visible=true;
	 $.ethereumList.visible=false;
	 
	 loadBitcoinBalance(true);
	
	
	});
	
	 $.tabEthereum.addEventListener("touchend", function(){
	  $.registerButton.visible = true;
	$.tabEthereum.backgroundColor = "rgba(0,0,0,0.2)";
	$.tabCounterparty.backgroundColor = tabColor;
	
	 
	 $.bitcoinList.visible=false;
	 $.ethereumList.visible=true;
	 
	 if(globals.loadedEthereumBalances == false){
	 globals.loadedEthereumBalances = true;
	 loadEthereumBalance(true);
	 
	 }
	
	});
  
 $.chainBar.top =  Alloy.Globals.topBarHeight;
$.bitcoinList.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight) - $.chainBar.height;
 
$.bitcoinList.top = $.chainBar.height+$.chainBar.top;


$.ethereumList.height = $.bitcoinList.height;
$.ethereumList.top = $.bitcoinList.top;

 
$.bitcoinList.addEventListener("scroll", function(e){
	 
	if(isLoadingBitcoin){
		return;
	}
	  loadMoreBitcoin = false;
	  
	if(OS_ANDROID){
	//	console.log(e.firstVisibleItem + " " +  e.totalItemCount +" "+ e.visibleItemCount);
		if(e.firstVisibleItem  ==  e.totalItemCount - e.visibleItemCount){
			loadMoreBitcoin = true;
		}
	}else if(OS_IOS){
		
	//	console.log(e.contentOffset.y + " " +  e.contentSize.height +" "+ $.tokenList.height + ": "+ (e.contentSize.height - e.contentOffset.y - $.tokenList.height));
		var offset = e.contentSize.height - e.contentOffset.y - $.bitcoinList.height;
		if(offset < 10 && offset >= 0 ){
			loadMoreBitcoin = true;
		}
	}
	
	if(loadMoreBitcoin == true ){
		$.tableViewFooterBitcoin.visible = true;
		pageBitcoin++;
		loadBitcoinBalance(true);
		
		if(OS_IOS){
			//$.tokenList.scroll
		}
	}
 
});
   
var controlBitcoin = Ti.UI.createRefreshControl({
    tintColor:globals.currentColor
});
controlBitcoin.addEventListener('refreshstart',function(e){
     
		pageBitcoin = 1;
		itemNumberBitcoin = 1; 
		loadBitcoinBalance(true);
       
});
	
$.bitcoinList.refreshControl = controlBitcoin;





 
$.ethereumList.addEventListener("scroll", function(e){
	 
	if(isLoadingEthereum){
		return;
	}
	  loadMoreEthereum = false;
	  
	if(OS_ANDROID){
	//	console.log(e.firstVisibleItem + " " +  e.totalItemCount +" "+ e.visibleItemCount);
		if(e.firstVisibleItem  ==  e.totalItemCount - e.visibleItemCount){
			loadMoreEthereum = true;
		}
	}else if(OS_IOS){
		
	//	console.log(e.contentOffset.y + " " +  e.contentSize.height +" "+ $.tokenList.height + ": "+ (e.contentSize.height - e.contentOffset.y - $.tokenList.height));
		var offset = e.contentSize.height - e.contentOffset.y - $.ethereumList.height;
		if(offset < 10 && offset >= 0 ){
			loadMoreEthereum = true;
		}
	}
	
	if(loadMoreEthereum == true ){
		$.tableViewFooterEthereum.visible = true;
		pageEthereum++;
		loadEthereumBalance(true);
		
		if(OS_IOS){
			//$.tokenList.scroll
		}
	}
 
});
   
var controlEthereum = Ti.UI.createRefreshControl({
    tintColor:globals.currentColor
});
controlEthereum.addEventListener('refreshstart',function(e){
     
		pageEthereum = 1;
		itemNumberEthereum = 1; 
		loadEthereumBalance(true);
       
});
	
$.ethereumList.refreshControl = controlEthereum;



function addBalancesBitcoin( balances ){
	
	 
	 var tableData = [];
if(pageBitcoin == 1){
 
 tokensSectionBitcoin = Ti.UI.createTableViewSection();
}
 
	for( var i = 0; i < balances.length; i++ ){
		itemNumberBitcoin++;
		var args = {
			"id":itemNumberBitcoin,
			"token": balances[i].token,
			"balance": Number(balances[i].balance),
			"unconfirmedBalance": balances[i].unconfirmedBalance,
			"balanceFiat": "",
			"type":"bitcoin",
			"parent": $.bitcoinList
		};
		var tokenBox = Alloy.createController('component_token_box', args).getView();
		
		 
		
			var row = Ti.UI.createTableViewRow({
    className:'token', 
    backgroundSelectedColor:'transparent',
    rowIndex:i, 
    height:100
  });
		 row.add( tokenBox);
		 
		 tokensSectionBitcoin.add(row);
	}
	


	
	 
		tableData.push(tokensSectionBitcoin);
		$.bitcoinList.data = tableData;
	
		 
}



function addBalancesEthereum( balances ){
	
	 
	 var tableData = [];
if(pageEthereum == 1){
 
 tokensSectionEthereum = Ti.UI.createTableViewSection();
}
 
	
		var userTokens = {};
		userTokens["ETH"]={name:"ETH"};
		
		
		userTokens = Object.assign({},userTokens, ethereum.getTokens()); 
		
	
		var tokenKeys =  Object.keys(userTokens);
		for( var i = 0; i < tokenKeys.length; i++ ){
			var aKey = tokenKeys[i];
		var args = {
			"type":"ethereum",
			"contractAddress":aKey,
			"id": i,
			"token": userTokens[aKey].name,
			"balance":-1,
			"unconfirmedBalance":-1,
			"balanceFiat": "",
			"parent": $.ethereumList
		};
		var tokenBox = Alloy.createController('component_token_box', args).getView();
			var row = Ti.UI.createTableViewRow({
    className:'token', 
    backgroundSelectedColor:'transparent',
    rowIndex:balances.length + i - 1, 
    height:100
  });
		 row.add( tokenBox);
		 tokensSectionEthereum.add(row);
	}
	 
	
	 
		tableData.push(tokensSectionEthereum);
		$.ethereumList.data = tableData;
	
		 
}

function loadBitcoinBalance(hideLoading){ 
	
	
	if(loadingRequestBitcoin != null){
		console.log("aborting last request");
		loadingRequestBitcoin.abort();
	}

	 
			isLoadingBitcoin = true;
	if(hideLoading == false){
	 $.activityIndicatorBitcoin.show();
	}
	 

	 loadingRequest = blockchain.API.getBalances({
	 	"chain":"bitcoin",
	 	"page":pageBitcoin,
 		"per_page":perPageBitcoin,
		"callback": function( balances ){
			if(pageBitcoin == 1 && hideLoading){
	 $.bitcoinList.setData([]);
	}
	 
			 
			addBalancesBitcoin(balances);  

		},
		"onError": function( error ){
			if(error.message == undefined){
				error = error.error;
			}
			util.createDialog({
				"title": error.type,
				"message": error.message,
				"buttonNames": [L("label_close")]
			}).show();
			if(pageBitcoin != 1){
				pageBitcoin--;
			}
			$.errorMessageBitcoin.show();
		},
		"always": function(){
			 
			$.activityIndicatorBitcoin.hide(); 
	 		controlBitcoin.endRefreshing();
	 		$.tableViewFooterBitcoin.visible = false;
			isLoadingBitcoin = false;
		}
	});
	 
	
	
	
}

function loadEthereumBalance(hideLoading){ 
	
	
	if(loadingRequestEthereum != null){
		console.log("aborting last request");
		loadingRequestBitcoin.abort();
	}
 
		$.activityIndicatorEthereum.hide();
		addBalancesEthereum([]);
		setTimeout(function(){
		controlEthereum.endRefreshing();},700);
	 
	
	
}

function refreshTokens(){
	pageBitcoin = 1;
	itemNumberBitcoin=0;
	if( !isLoadingBitcoin ){
		 
		loadBitcoinBalance(false);
	}
	
	pageEthereum = 1;
	itemNumberEthereum=0;
	if( !isLoadingEthereum ){
		 
		loadEthereumBalance(false);
	}
}
$.registerButton.addEventListener("click", function(){
	Alloy.createController("add_token")
	.getView(); 
});

	


$.errorMessageBitcoin.addEventListener("touchend", function(){
	$.errorMessageBitcoin.hide();
	 
	loadBitcoinBalance(false);
});

$.errorMessageEthereum.addEventListener("touchend", function(){
	$.errorMessageEthereum.hide();
	 
	loadEthereumBalance(false);
});


 $.activityIndicatorBitcoin.show();
 
 $.activityIndicatorEthereum.show();
 
 util.initialSetup(function(){
  
			loadBitcoinBalance(false);
			loadEthereumBalance(false);
	});
 

globals.refreshTokens = refreshTokens;
 
