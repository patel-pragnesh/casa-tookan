var cache = require("requires/cache");
var util = require("requires/util");
var network = require("requires/network");
var blockchain = require("requires/blockchain");
var bitcoin = require("requires/bitcoin");
var loadingRequest = null;
var isLoading = false;

var unkownDiff = 5;
$.newsList.height  = globals.display.height -  (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight) - $.newsBar.height + unkownDiff; 
$.newsList.top =  Alloy.Globals.topBarHeight + 40 - unkownDiff;

 
$.newsList.addEventListener("scroll", function(e){
	 
	if(isLoading){
		return;
	}
	  loadMore = false;
	  
	if(OS_ANDROID){
		 if(e.firstVisibleItem  ==  e.totalItemCount - e.visibleItemCount){
			loadMore = true;
		}
	}else if(OS_IOS){
		
		var offset = e.contentSize.height - e.contentOffset.y - $.newsList.height;
		if(offset < 10 && offset >= 0 ){
			loadMore = true;
		}
	}
	
	if(loadMore == true ){
		$.tableViewFooter.visible = true;
		page++;
		loadHistory(true);
		 
	}
 
});
   
 
var itemNumber = 0;

var page = 1;
var per_page = 20;  
var historySection = null;

 
var pulling = false;
var reloading = false;
var offset = 0;

   var control = Ti.UI.createRefreshControl({
    tintColor:globals.currentColor
});
$.newsList.refreshControl = control;

control.addEventListener('refreshstart',function(e){
	itemNumber = 0;
	page = 1;
		 
    loadHistory(true);
});

function addHistory( history ){
	
	var tableData = [];
 
if(page == 1){
 
 historySection = Ti.UI.createTableViewSection();
}

	for( var i = 0; i < history.length; i++ ){
		
			itemNumber++;
		var args = {
			"id": itemNumber,
			"history": history[i],
			"parent": $.newsList
		};
		var historyBox = Alloy.createController('component_history_box', args).getView();
		
		var row = Ti.UI.createTableViewRow({
    className:'history', 
    backgroundSelectedColor:'transparent',
    rowIndex:i, 
    height:160
  });
		 row.add( historyBox);
		 historySection.add(row);
	}
	
	
	
	tableData.push(historySection);
		$.newsList.data = tableData;
		
	 
}

$.settingsButton.addEventListener("touchend", function(){
	Alloy.createController("settings")
	.getView();
});

function getHistory( callback ){
	loadingRequest = blockchain.API.getHistory({
		"per_page":per_page,
		"page":page,
		"callback" : function( history ) {
			callback( history );
		},
		"onError" : function( error ) {
			util.createDialog({
				"title": error.type,
				"message": error.message,
				"buttonNames": [L("label_close")]
			}).show();
			 if(page != 1){
			 	page -= 1;
			 }
			$.errorMessage.show();
		},
		"always" : function() {
			
			
			$.activityIndicator.hide();
	 		control.endRefreshing();
	 		$.tableViewFooter.visible = false;
			isLoading = false;
		}
	});
}

 
 
 
function loadHistory(hideLoading){
	
	if(loadingRequest != null){
		console.log("aborting last request");
		loadingRequest.abort();
	}

	 
	
	isLoading = true;
	if(hideLoading == false){
		$.activityIndicator.show();
	}
	getHistory(
		function( history ){
		if( history.length > 0 ){
			$.newsList.removeAllChildren();
			addHistory( history );
			 
		}
		else{
			if(page == 1){
				$.newsList.data = [];
				$.newsList.removeAllChildren();
				$.emptyMessage.show();
			}
		}
	});
}

function refreshHistory(){
	itemNumber = 1;
	page = 1;
	
		
		loadHistory(false);
	
}

$.errorMessage.addEventListener("touchend", function(){
	$.errorMessage.hide();
	
	loadHistory(false);
});

$.emptyMessage.addEventListener("touchend", function(){
	$.emptyMessage.hide();

	loadHistory(false);
});


loadHistory(false);


globals.refreshHistory = refreshHistory;

globals.updateHistoryUI = function(){
	$.newsTopBar.backgroundColor = globals.currentColor;
  
 
$.newsList.refreshControl.tintColor = globals.currentColor;
  
};
globals.updateHistoryUI();