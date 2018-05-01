var cache = require("requires/cache");
var util = require("requires/util");
var network = require("requires/network");
var blockchain = require("requires/blockchain");
var bitcoin = require("requires/bitcoin");
 var ethereum = require("requires/ethereum");
var isLoading = false;
var loadingRequest = null;
 
 var itemNumber = 0;
var page = 1;
var per_page = 25;  
var tokensSection = null;
 
$.tokenList.height = globals.display.height - (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight); 
 
$.tokenList.top = $.tokenTopBar.height;

 
$.tokenList.addEventListener("scroll", function(e){
	 
	if(isLoading){
		return;
	}
	  loadMore = false;
	  
	if(OS_ANDROID){
	//	console.log(e.firstVisibleItem + " " +  e.totalItemCount +" "+ e.visibleItemCount);
		if(e.firstVisibleItem  ==  e.totalItemCount - e.visibleItemCount){
			loadMore = true;
		}
	}else if(OS_IOS){
		
	//	console.log(e.contentOffset.y + " " +  e.contentSize.height +" "+ $.tokenList.height + ": "+ (e.contentSize.height - e.contentOffset.y - $.tokenList.height));
		var offset = e.contentSize.height - e.contentOffset.y - $.tokenList.height;
		if(offset < 10 && offset >= 0 ){
			loadMore = true;
		}
	}
	
	if(loadMore == true ){
		$.tableViewFooter.visible = true;
		page++;
		loadBalance(true);
		
		if(OS_IOS){
			//$.tokenList.scroll
		}
	}
 
});
   
var control = Ti.UI.createRefreshControl({
    tintColor:globals.currentColor
});
control.addEventListener('refreshstart',function(e){
     
		page = 1;
		itemNumber = 1; 
		loadBalance(true);
       
});
	
$.tokenList.refreshControl = control;



function addBalances( balances ){
	
	 
	 var tableData = [];
if(page == 1){
 
 tokensSection = Ti.UI.createTableViewSection();
}

if(cache.data.chainId == blockchain.BITCOIN){
 
	for( var i = 0; i < balances.length; i++ ){
		itemNumber++;
		var args = {
			"id":itemNumber,
			"token": balances[i].token,
			"balance": Number(balances[i].balance),
			"unconfirmedBalance": balances[i].unconfirmedBalance,
			"balanceFiat": "",
			"type":cache.data.chainId,
			"parent": $.tokenList
		};
		var tokenBox = Alloy.createController('component_token_box', args).getView();
		
		 
		
			var row = Ti.UI.createTableViewRow({
    className:'token', 
    backgroundSelectedColor:'transparent',
    rowIndex:i, 
    height:100
  });
		 row.add( tokenBox);
		 
		 tokensSection.add(row);
	}
	

}
	else if(cache.data.chainId == blockchain.ETHEREUM){
		var userTokens = {};
		userTokens["ETH"]={name:"ETH"};
		
		
		userTokens = Object.assign({},userTokens, ethereum.getTokens()); 
		
	
		var tokenKeys =  Object.keys(userTokens);
		for( var i = 0; i < tokenKeys.length; i++ ){
			var aKey = tokenKeys[i];
		var args = {
			"type":cache.data.chainId,
			"contractAddress":aKey,
			"id": i,
			"token": userTokens[aKey].name,
			"balance":-1,
			"unconfirmedBalance":-1,
			"balanceFiat": "",
			"parent": $.tokenList
		};
		var tokenBox = Alloy.createController('component_token_box', args).getView();
			var row = Ti.UI.createTableViewRow({
    className:'token', 
    backgroundSelectedColor:'transparent',
    rowIndex:balances.length + i - 1, 
    height:92
  });
		 row.add( tokenBox);
		 tokensSection.add(row);
	}
	}
	
	 
		tableData.push(tokensSection);
		$.tokenList.data = tableData;
	
		 
}

function loadBalance(hideLoading){ 
	
	
	if(loadingRequest != null){
		console.log("aborting last request");
		loadingRequest.abort();
	}

	if(cache.data.chainId == blockchain.BITCOIN){
			isLoading = true;
	if(hideLoading == false){
	 $.activityIndicator.show();
	}
	 

	 loadingRequest = blockchain.API.getBalances({
	 	"page":page,
 		"per_page":per_page,
		"callback": function( balances ){
			if(page == 1 && hideLoading){
	 $.tokenList.setData([]);
	}
	 
			globals.balances = balances; 
			addBalances(balances);  

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
			if(page != 1){
				page--;
			}
			$.errorMessage.show();
		},
		"always": function(){
			 
			$.activityIndicator.hide(); 
	 		control.endRefreshing();
	 		$.tableViewFooter.visible = false;
			isLoading = false;
		}
	});
	}else if(cache.data.chainId == blockchain.ETHEREUM){
		$.activityIndicator.hide();
		addBalances([]);
		setTimeout(function(){
		control.endRefreshing();},700);
	}
	
	
	
}

function refreshTokens(){
	page = 1;
	itemNumber=0;
	if( !isLoading ){
		 
		loadBalance(false);
	}
}

$.errorMessage.addEventListener("touchend", function(){
	$.errorMessage.hide();
	 
	loadBalance(false);
});


 $.activityIndicator.show();
 util.initialSetup(function(){
  
			loadBalance(false);
	});
 

globals.refreshTokens = refreshTokens;

 
globals.updateTokenUI = function(){
	
 

 
	
};

globals.updateTokenUI(); 
