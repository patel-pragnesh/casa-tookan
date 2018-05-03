var util = require("requires/util");
var network = require("requires/network");
var cache = require("requires/cache");


var bitcoin = require("requires/bitcoin");
var ethereum = require("requires/ethereum");
var blockchain = require("requires/blockchain");




 
function showIntro(){
 if( cache.data.easypass === undefined ){ 
  
			Alloy.createController("introscreens")
			.getView()
			.open();
			
		
		}
	}
		
 

var styleTabOn = $.createStyle({
    classes: "size10 red",
    apiName: "Label"
});

var styleTabOff = $.createStyle({
    classes: "size10 gray",
    apiName: "Label"
});

function reset(){
	$.tabNewsImage.image = "/images/icon_news.png";
  
    $.tabBrowseImage.image = "/images/icon_browse.png";
   
    $.tabCasaImage.image = "/images/icon_casa.png";
    
    $.tabBalancesImage.image = "/images/icon_balances.png";  
 
}

function setPage(){
	 
	reset();
	 
	if( Alloy.Globals.currentTab == 0 ){
		$.tabNewsImage.image = "/images/icon_news_active.png";
     
	}
	else if( Alloy.Globals.currentTab == 1 ){
		$.tabBrowseImage.image = "/images/icon_browse_active.png";
   
	}
	else if( Alloy.Globals.currentTab == 2 ){
		$.tabCasaImage.image = "/images/icon_casa_active.png";
    	 
	}
	else if( Alloy.Globals.currentTab == 3 ){
		$.tabBalancesImage.image = "/images/icon_balances_active.png";
		if(OS_ANDROID){
			globals.callCheckIfLoaded();	
		}
		
    	 
	}
	 
}

 
globals.setPage = setPage;
Alloy.Globals.currentTab = 0;
setPage();
/*
$.scroller.addEventListener("scrollEnd", function(){
	setPage();
});*/

$.tabnews.addEventListener("touchend", function(){
	Alloy.Globals.currentTab = 0;
		$.viewOne.visible = true;
	$.viewTwo.visible = false;
	$.viewThree.visible = false;
	$.viewFour.visible = false;
	//$.scroller.setCurrentPage(Alloy.Globals.currentTab);
	setPage();
});

$.tabbrowse.addEventListener("touchend", function(){
	Alloy.Globals.currentTab = 1;
		$.viewOne.visible = false;
	$.viewTwo.visible = true;
	$.viewThree.visible = false;
	$.viewFour.visible = false;
	//$.scroller.setCurrentPage(Alloy.Globals.currentTab);
	setPage();
});

$.tabcasa.addEventListener("touchend", function(){
	Alloy.Globals.currentTab = 2;
		$.viewOne.visible = false;
	$.viewTwo.visible = false;
	$.viewThree.visible = true;
	$.viewFour.visible = false;
	//$.scroller.setCurrentPage(Alloy.Globals.currentTab);
	setPage();
});

$.tabbalances.addEventListener("touchend", function(){
	Alloy.Globals.currentTab = 3;
	$.viewOne.visible = false;
	$.viewTwo.visible = false;
	$.viewThree.visible = false;
	$.viewFour.visible = true;
	//$.scroller.setCurrentPage(Alloy.Globals.currentTab); 
	setPage();
});
 
 