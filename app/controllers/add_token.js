var network = require("requires/network");

var cache = require("requires/cache");
var win = Ti.UI.createWindow({
	"orientationModes": [Ti.UI.PORTRAIT],
	"navBarHidden": true,
	"backgroundColor": "transparent",
	"windowSoftInputMode": (OS_ANDROID)? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN: null
});
win.add($.add_token);
win.open();

if(OS_ANDROID){
	$.search.color="black";
	$.search.barColor="#d1d1d1";
	
}
 
 
var control = Ti.UI.createRefreshControl({
    tintColor:globals.currentColor
});
control.addEventListener('refreshstart',function(e){
    
 $.tableViewFooter.visible = false;
		page = 1;
		loadTokens(true);
       
});
	
$.tokenList.refreshControl = control;

var page = 1;
var per_page = 20;
 
 var isLoading = false;
var tableData = []; 
var tokensSection = null;
 
var currentTokens = [];
var allTokens = [];
var searchValue = "";
$.search.top = $.topbar.height;
 
 $.search.hide();
$.search.addEventListener('blur', function(e){
	 
	searchValue = e.source.value;
	loadTokens(false); 
});
$.search.addEventListener('return', function(e){
	$.search.blur(); 
});

$.search.addEventListener('cancel', function(e){
	$.search.blur(); 
});


$.tokenList.height = globals.display.height - $.topbar.height - $.search.height;

$.tokenList.top = $.topbar.height + $.search.height;

$.tokenList.addEventListener("scroll", function(e){
	 
	if(isLoading){
		return;
	}
	  loadMore = false;
	  
	if(OS_ANDROID){
	 if(e.firstVisibleItem  ==  e.totalItemCount - e.visibleItemCount){
			loadMore = true;
		}
	}else if(OS_IOS){
		
		var offset = (e.contentSize.height - e.contentOffset.y - $.tokenList.height) + $.tableViewFooter.height;
		if(offset < 10 && offset >= 0 ){
			loadMore = true;
		}
	}
	
	if(loadMore == true ){
		$.tableViewFooter.visible = true;
		page++;
		loadTokens(true);
		 
	}
 
});
   

function showAddContract(){
 
var child = Alloy.createController("add_contract_address_box",{
		"parent":$.add_token,
			"close": close,
	});
	var childView = child.getView();
child.on('close', function () {
  $.mainView.remove(childView);
});
$.mainView.add(childView);
	
}
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
globals.addButtonEvent($.backButton, close);
$.background.animate({
    "opacity": 0.5,
    "duration": 200
});

$.mainView.animate({
	"left": 0,
    "duration": 200
});

 
function addTokens( tokens ){
	
 tableData = [];
if(page == 1){
 
 tokensSection = Ti.UI.createTableViewSection();
}
 
 
 
	for( var i = 0; i < tokens.length; i++ ){
		var args = {
			"id": i,
			"name": tokens[i].name,
			"symbol": tokens[i].symbol,
			"contractAddress": tokens[i].contractAddress,
			"close": close,
		};
		var tokenBox = Alloy.createController('component_recommended_token', args).getView();
			var row = Ti.UI.createTableViewRow({
    className:'recommended_token', 
    backgroundSelectedColor:'transparent',
    rowIndex:i, 
    height:92
  });
		 row.add( tokenBox);
		 tokensSection.add(row);
	}
	
	 
		tableData.push(tokensSection);
		$.tokenList.data = tableData;
		
	 
}

function loadTokens(hideLoading){ 
	
	
	
	isLoading = true;
	if(hideLoading == false){
	 $.activityIndicator.show();
	}
	 
network.connectGET({
				"chain":"eth",
				"version":"v1",
				"method": "tokens?page="+page+"&per_page"+per_page+"&search="+searchValue,
				"callback":function(result){
					
					if(page == 1 && hideLoading){
	 $.tokenList.setData([]);
	}
	
					isLoading = false;
					 allTokens = result;
					 currentTokens = allTokens;
					$.activityIndicator.hide();
					addTokens(result);
					$.search.show();
					
				},
				"onError": function(error){
					isLoading = false;
					$.activityIndicator.hide(); 
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
				},
		"always": function(){
			 $.tableViewFooter.visible = false;
	 		control.endRefreshing();
			isLoading = false;
		}
			});
 
}
loadTokens(false);

 $.topbar.backgroundColor = globals.currentColor;


