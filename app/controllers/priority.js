var args = arguments[0] || {};


var blockchain = require("requires/blockchain");
var cache = require("requires/cache");
var util = require("requires/util");


if(cache.data.chainId == blockchain.ETHEREUM){
	$.bitcoinFees.height = 0;
	$.ethereumFees.top = 0;
	$.ethereumFees.visible = true;	
	
	$.recommendedEthLabel.text = L("label_recommended_gas_eth");
}
else if(cache.data.chainId == blockchain.BITCOIN){
	$.bitcoinFees.visible = true;
}


var win = Ti.UI.createWindow({
	"orientationModes": [Ti.UI.PORTRAIT],
	"navBarHidden": true,
	"backgroundColor": "transparent",
	"windowSoftInputMode": (OS_ANDROID)? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN: null
});
win.add($.priority);
win.open();

$.topbar.backgroundColor = globals.currentColor;

function close(){
	$.background.animate({
	    "opacity": 0,
	    "duration": 200
	});
	
	$.mainView.animate({
		"bottom": -292,
	    "duration": 200
	});
	
	setTimeout(function() {
		win.width = 0;
    	win.close();
    }, 200);
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
	"bottom": 0,
    "duration": 200
});

if(cache.data.chainId == blockchain.BITCOIN){
	if( cache.data.currentFee === "fastestFee" ) $.checkedHigh.visible = true;
	else if( cache.data.currentFee === "lowFee" ) $.checkedLow.visible = true;
	else if( cache.data.currentFee === "halfHourFee" ) $.checkedMed.visible = true;
	else $.checkedCustom.visible = true;
}
else if(cache.data.chainId == blockchain.ETHEREUM){ 
	if(cache.data.currentEthFee == "recommended"){
		$.checkedHighEth.visible = true;
	}
	else if(cache.data.currentEthFee == "custom"){
		
		$.checkedCustomEth.visible = true;
	}
}

function setCurrentFee( fee ){
	args.setFeeLabel(fee);
	cache.data.currentFee = fee;
	cache.save();
	
	$.checkedHigh.visible = false;
	$.checkedMed.visible = false;
	$.checkedLow.visible = false;
	$.checkedCustom.visible = false;
}

function setCurrentFeeEth( fee ){
	
	args.setEthFee(fee);
	 
	cache.data.currentEthGasPrice = fee;
	cache.data.currentEthFee = "custom";
	cache.save();
	
	$.checkedHighEth.visible = false; 
	$.checkedCustomEth.visible = false;
}

$.recommendedEthButton.addEventListener("click", function(){
 	
	cache.data.currentEthFee = "recommended";
	args.setFeeLabel();
	cache.save();
	$.checkedCustomEth.visible = false;
	$.checkedHighEth.visible = true;
	close();
}); 

$.highButton.addEventListener("click", function(){
	setCurrentFee("fastestFee");
	$.checkedHigh.visible = true;
	close();
});

$.medButton.addEventListener("click", function(){
	setCurrentFee("halfHourFee");
	$.checkedMed.visible = true;
	close();
});

$.lowButton.addEventListener("click", function(){
	setCurrentFee("lowFee");
	$.checkedLow.visible = true;
	close();
});

if(cache.data.chainId == blockchain.BITCOIN){

$.customButtonBtc.addEventListener("click", function(){
	var dialog = util.createInputDialog({
		"title" : L("label_inputcustom"),
		"message" : L("label_inputcustom_message"),
		"value" : "",
		"keyboardType" : Ti.UI.KEYBOARD_TYPE_DECIMAL_PAD,
		"buttonNames" : [L("label_close"), L("label_apply")]
	});
	dialog.origin.addEventListener("click", function(e) {
		var inputText = (OS_ANDROID) ? dialog.androidField.getValue() : e.text;
		if (e.index != e.source.cancel) {
			if( isFinite(inputText) ){
				setCurrentFee(inputText);
				$.checkedCustom.visible = true;
				close();
			}
			else{
				self.createDialog({
					"message": L("label_inputcustom_error"),
					"buttonNames": [L("label_close")]
				}).show();
			}
		}
	});
	dialog.origin.show();
});

}
else if(cache.data.chainId == blockchain.ETHEREUM){
	
$.customButtonEth.addEventListener("click", function(){
	var dialog = util.createInputDialog({
		"title" : L("label_inputcustom_eth"),
		"message" : L("label_inputcustom_eth_desc"),
		"value" : "",
		"keyboardType" : Ti.UI.KEYBOARD_TYPE_DECIMAL_PAD,
		"buttonNames" : [L("label_close"), L("label_apply")]
	});
	dialog.origin.addEventListener("click", function(e) {
		var inputText = (OS_ANDROID) ? dialog.androidField.getValue() : e.text;
		if (e.index != e.source.cancel) {
			if( isFinite(inputText) ){
				setCurrentFeeEth(inputText);
				$.checkedCustomEth.visible = true;
				close();
			}
			else{
				self.createDialog({
					"message": L("label_inputcustom_error"),
					"buttonNames": [L("label_close")]
				}).show();
			}
		}
	});
	dialog.origin.show();
});	

}
$.background.addEventListener("touchend", close);
$.closeIcon.addEventListener("touchend", close);