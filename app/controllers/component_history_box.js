var args = arguments[0] || {};

var network = require("requires/network");
var cache = require("requires/cache");
var util = require("requires/util");

var blockchain = require("requires/blockchain");

if( args.id >= 0 ){
	var history = args.history;
	var historyText = util.getTransactionStory(args.history);
	var address = "";
	
	var color = "#6db558";
	if(history.type == "send") color = globals.currentColor;
	else if(history.type == "order") color = "#4265d7";
	
	
	 
	if(cache.data.chainId == blockchain.BITCOIN){
	if( history.type === "send" ){
		if(history.category === "Send"){
			history.type = "send";
			if( history.destinations == null ) address = history.destination;
		}
		else{
			history.type = "receive";
			address = history.source;
		}
	}
	}
	else if(cache.data.chainId == blockchain.ETHEREUM){
		 
		if( history.type === "send" ){
			if(history.to != cache.data.address){
				history.type = "send";
				address = history.to;
			}else{
				history.type = "receive";
				address = history.from;
			}
		}
	}
	 
	$.historyAddress.text = address;
	
	var formattedTime = history.time;
	if( history.unconfirm == undefined || !history.unconfirm ){
		if(cache.data.chainId == blockchain.BITCOIN){
			var date = new Date(history.block_time * 1e3);
			formattedTime = date.getFullYear() + " " + (date.getMonth() + 1) + "/" + date.getDate() + " " + ("0"+date.getHours()).substr(-2) + ":" + ("0"+date.getMinutes()).substr(-2) + ":" + ("0" + date.getSeconds()).substr(-2);
		}else if(cache.data.chainId == blockchain.ETHEREUM){
			var date = new Date(history.blockTime * 1e3);
			formattedTime = date.getFullYear() + " " + (date.getMonth() + 1) + "/" + date.getDate() + " " + ("0"+date.getHours()).substr(-2) + ":" + ("0"+date.getMinutes()).substr(-2) + ":" + ("0" + date.getSeconds()).substr(-2);
		
		}
	}
	else{
		formattedTime = L("label_unconfirmed");
		$.historyTime.color = "#e54353";
	}
	
	$.historyTime.text = formattedTime;
	$.historyMessage.text = historyText;
	
	if(cache.data.chainId == blockchain.BITCOIN){
	if( history.token === "BTC" ){
		$.tokenImage.image = "/images/asset_btc.png";
	}
	else if( history.token === "XCP" ){
		$.tokenImage.image = "/images/asset_xcp.png";
	}
	else{
		if( history.type === "issuance" && history.unconfirm != undefined && history.unconfirm ) $.tokenImage.image = Alloy.CFG.res_uri + "btc/v1/tokens/images/" + history.token.charAt(0).toLowerCase() + ".png";
		else if( history.type === "order"){
			 
			$.tokenImage.image = Alloy.CFG.api_uri + "btc/v1/tokens/" + history.get_token + "/image?X-Api-Key=" + Alloy.Globals.api_key;
		}
		else { 
			$.tokenImage.image = Alloy.CFG.api_uri + "btc/v1/tokens/" + history.token + "/image?X-Api-Key=" + Alloy.Globals.api_key;
		}
		
		 
	}
	}
	else if(cache.data.chainId == blockchain.ETHEREUM){
		 
		if( history.token === "Ether" ){
			$.tokenImage.image = "/images/asset_eth.png";
		}else{
			if( history.contractAddress != undefined){
			 $.tokenImage.image = Alloy.CFG.api_uri + "eth/v1/tokens/" + history.contractAddress + "/image?X-Api-Key=" + Alloy.Globals.api_key;
			}
		}
	}
	globals.addButtonEvent($.infoButton, function(e){
		if(cache.data.chainId == blockchain.BITCOIN){
			var url = Alloy.CFG.walletapp_uri + "explorer/#/tx/" + history.tx_hash;
		}else if(cache.data.chainId == blockchain.ETHEREUM){
			var url = "https://etherscan.io/tx/" + history.txHash;
		}
		Alloy.createController("weblink", {
			"path": url,
			"barColor": "#009688"
		})
		.getView()
		.open();
	});
	
	if( address.length > 0 ){
		$.centerBox.addEventListener("touchend", function(){
			Ti.UI.Clipboard.setText( address );
			util.createDialog({
				"message":L("label_copied"),
				"buttonNames": [L("label_close")]
			}).show();
		});
	}
}
else{
	/*var isAdding = false;
	$.tokenBoxHistory.visible = false;
	$.tokenBoxLoading.visible = true;
	args.parent.addEventListener("scroll", function(e){
		if( e.y + globals.display.height - 110 > args.currentPos * ($.tokenBoxHistory.height + 10) ){
			if( !isAdding ){
				isAdding = true;
				args.getHistory();
			}
		}
	});*/
}
