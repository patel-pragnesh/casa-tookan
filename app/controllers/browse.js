 
 
$.webview.height  = globals.display.height -  (Alloy.Globals.tabBarHeight + Alloy.Globals.topBarHeight);
$.webview.top = $.browseTopBar.height;
 

Alloy.Globals.lastAction = null;
setInterval(function(){ checkPressed(); }, 50);
function checkPressed(){
	if(Alloy.Globals.currentTab == 1){
	var result = $.webview.evalJS("currentTookanAction;");
	$.webview.evalJS("currentTookanAction = null;");
	
	if(result != null && result != ""){
		if(result != Alloy.Globals.lastAction){
			Alloy.Globals.lastAction = result;
			Alloy.createController("dappbrowser", {
		"url": Alloy.Globals.lastAction,
	})
			.getView();
		}
	}
	
	}
	
}