 var blockchain = require("requires/blockchain");
  var ethereum = require("requires/ethereum");
 var args = arguments[0] || {};
 var currentTokenInfo = null;

$.background.animate({
    "opacity": 0.5,
    "duration": 200
});
$.activityIndicator.hide();
$.searchButton.title = L("label_search");
$.backButton.title = L("label_goback").toLowerCase();
$.addButton.title = L("label_add").toLowerCase();

function addToken(){
	
	if(currentTokenInfo != null){
		
		ethereum.addToken($.contractAddressField.value,currentTokenInfo);
	
	}
	args.close();
	
	globals.refreshTokens();
	
	
}
function backToSearch(){
	$.searchControls.visible = true;
    $.tokenInfo.visible = false;
}


function searchToken(){
	$.searchButton.hide();
	$.activityIndicator.show();
	
	     blockchain.API.getToken({
	     	 "chain":blockchain.ETHEREUM,
             "contractAddress": $.contractAddressField.value,
             "callback": function(tokenInfo) {
             	currentTokenInfo = tokenInfo;
             	$.searchControls.visible = false;
             	$.tokenInfo.visible = true;
             	$.tokenSymbol.text = tokenInfo.symbol;
             	$.tokenName.text = tokenInfo.name;
             	$.tokenImage.image = Alloy.CFG.api_uri + "eth/v1/tokens/" + $.contractAddressField.value + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key;
               console.log(tokenInfo);
             },
             "onError": function(error) {
                alert(L('label_error_finding_token'));
             },
             "always": function() {
             	
             	$.searchButton.show();
				$.activityIndicator.hide();
             	
             }
         });
	
	
	
}
function close(){
	 
	$.background.animate({
	    "opacity": 0,
	    "duration": 200
	});
	 
  $.trigger('close');
 

	
}
