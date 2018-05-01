var args = arguments[0] || {};

var util = require("requires/util");
var cache = require("requires/cache");
var blockchain = require("requires/blockchain");
var tiker = require("requires/tiker");
var auth = require("requires/auth");
var network = require("requires/network");
var bitcoin = require("requires/bitcoin");
var inputverify = require("requires/inputverify");
var ethereum = require("requires/ethereum");
var isFiatMode = false;
var FiatSymbol = tiker.getFiatSymbol(cache.data.chainId, cache.data.currency);
var timer = null;
globals.userGasPrice = null;

var fiatValue = tiker.getFiatValue(cache.data.chainId, args.token, cache.data.currency);

if(cache.data.chainId == blockchain.BITCOIN){
if(args.btc_val != null){
	fiatValue *= args.btc_val;
}else{
	if(args.token != "BTC"){
		fiatValue = 0;
	}
}
}

console.log("fiat value is:"+fiatValue);
var inputValue = "";


console.log(FiatSymbol);
console.log("args "+JSON.stringify(args));



var win = Ti.UI.createWindow({
	"orientationModes": [Ti.UI.PORTRAIT],
	"navBarHidden": true,
	
	"backgroundColor": "transparent",
	"windowSoftInputMode": (OS_ANDROID)? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN: null
});
function isiPhoneX() {
  return (Ti.Platform.displayCaps.platformWidth === 375 && Ti.Platform.displayCaps.platformHeight == 812) || // Portrait
         (Ti.Platform.displayCaps.platformHeight === 812 && Ti.Platform.displayCaps.platformWidth == 375); // Landscape
}
if( isiPhoneX()){
	 win.extendSafeArea = false;
}
win.add($.send);
win.open();

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

if( OS_ANDROID ){
	win.addEventListener('android:back', function(){
		close();
		return true;
	});
}

$.inputDestination.hintText = L("label_send_destination");
$.inputDestination.hintTextColor = "gray";

$.background.animate({
    "opacity": 0.5,
    "duration": 200
});

$.mainView.animate({
	"left": 0,
    "duration": 200
});

$.amount.text = "0";
$.amountToken.text = args.token;

$.keypad.height = globals.display.height - 225;

$.fiat.text = tiker.to(cache.data.chainId,"XCP", 0, cache.data.currency);
$.fiat.opacity = 0.5;
$.switchIcon.opacity = 0.5;
$.balance.text = args.balance + " " + args.token;

function setFeeLabel( currentFee ){
	if(cache.data.chainId == blockchain.BITCOIN){
		if( isFinite(currentFee) ) $.priorityLabel.text = currentFee + "BTC ▼";
		else $.priorityLabel.text = globals.feeTexts[currentFee] + "▼";
	}
	else if(cache.data.chainId == blockchain.ETHEREUM){
		
		globals.userGasPrice = null;
		$.priorityLabel.text = L("label_current_gas_price")+" ▼";
			 
	}

}

function setEthFee( currentFee ){
	 
		globals.userGasPrice = currentFee;
		$.priorityLabel.text = L("label_gas_price")+" "+globals.userGasPrice + " gwei ▼";
			 
	 

}
function set( fiatBalance ){
	
	 
	$.balance.text = args.balance + " " + args.token + " (" + fiatBalance + ")";
	/*if( $.fiat.opacity == 1.0 ){
		if( args.balance > 0 ) fiatValue = fiatBalance.replace(FiatSymbol, "").replace(",", "") / args.balance;
		else fiatValue = 0;
	}*/
}

function checkAndSetValue(){
	globals.console.info("checkAndSetValue");
	if( globals.tiker ){
		clearInterval(timer);
		
		 
		if (args.token === "BTC" || args.token === "XCP" || args.token === "ETH") {
			$.fiat.opacity = 1.0;
			$.switchIcon.opacity = 1.0;
			set(tiker.to(cache.data.chainId, args.token, args.balance, cache.data.currency));
		}
		else {
			if(cache.data.chainId == blockchain.BITCOIN && args.btc_val != 0 && fiatValue != 0){
		 
						var btcval = args.btc_val * args.balance;
						$.fiat.opacity = 1.0;
						$.switchIcon.opacity = 1.0;
						set(tiker.to(cache.data.chainId,"BTC", btcval, cache.data.currency, 4));
					}
			 
		}
	}
}
timer = setInterval(checkAndSetValue, 500);

function addCommas(nStr) {
	 nStr += "";
	 x = nStr.split(".");
	 x1 = x[0];
	 x2 = x.length > 1 ? "." + x[1] : "";
	 var rgx = /(\d+)(\d{3})/;
	 while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
	 }
	 return x1 + x2;
}

function updateFields( button, abstAmount ){
	
	
	function updateTheField(button,abstAmount){
		var label = button.children[0];
		if( abstAmount != null ){
			inputValue = abstAmount;
		}
		else if( label.text === L("label_del") ){
			if( inputValue.length > 0 ) inputValue = inputValue.slice(0, inputValue.length - 1);
			if( inputValue.length <= 0 ) inputValue = "0";
			if( inputValue.length == undefined) inputValue = "0";
		}
		else if( label.text === "." ){
			if( inputValue.indexOf(".") <= -1 ) inputValue = "" + inputValue + label.text;
		}
		else {
			if( inputValue === "0" ) inputValue = label.text;
			else inputValue = inputValue + label.text;
		}
		
		return inputValue;
	}
	
	if(button != null){
		updateTheField(button,abstAmount);
	}else{
		inputValue = abstAmount;
	}
	console.log(fiatValue);
	if( !isFiatMode ){
		$.amount.text = addCommas(inputValue);
		if( $.fiat.opacity == 1.0 ){
			var val = (inputValue * fiatValue).toFixed2(4);
			if( fiatValue == 0 ) val = 0;
			$.fiat.text = FiatSymbol + addCommas(val);
		}
	}
	else {
		$.fiat.text = FiatSymbol + addCommas(inputValue);
		$.amount.text = addCommas((inputValue / fiatValue).toFixed2(8));
	}
}

function switchAmount(e){
	if( $.fiat.opacity == 1.0 ){
		if( !isFiatMode ){
			isFiatMode = true;
			inputValue = $.fiat.text.replace(FiatSymbol, "").replace(/[^\d.-]/g, "");
			
			$.fiat.top = 0;
			$.fiat.applyProperties($.createStyle({
			    classes: "size40 white",
			    apiName: "Label"
			}));
			
			$.tokenAmountView.top = 45;
			$.amountToken.bottom = 0;
			$.amount.applyProperties($.createStyle({
			    classes: "size20 white bold",
			    apiName: "Label"
			}));
			$.amountToken.applyProperties($.createStyle({
			    classes: "size12 white",
			    apiName: "Label"
			}));
		}
		else{
			isFiatMode = false;
			inputValue = $.amount.text;
			
			$.fiat.top = 45;
			$.fiat.applyProperties($.createStyle({
			    classes: "size20 white fiat",
			    apiName: "Label"
			}));
			
			$.tokenAmountView.top = 0;
			$.amountToken.bottom = 5;
			$.amount.applyProperties($.createStyle({
			    classes: "size40 white bold",
			    apiName: "Label"
			}));
			$.amountToken.applyProperties($.createStyle({
			    classes: "size20 white amountToken",
			    apiName: "Label"
			}));
		}
	}
}

function setValues( vals ){
	
	if( vals.asset == null  ) vals.asset = args.token;
	else if( vals.asset !== args.token ){
		var dialog = util.createDialog({
			"message" : L("label_send_switch_token").format({"from": args.token, "to": vals.asset}),
			"buttonNames" : [L("label_cancel"), L("label_ok")]
		});
		dialog.addEventListener("click", function(e) {
			if (e.index != e.source.cancel) {
				var sendToken = null;
				for( var i = 0; i < globals.balances.length; i++ ){
					if( globals.balances[i].token === vals.asset ){
						sendToken = globals.balances[i];
						break;
					}
				}
				if( sendToken != null ){
					args.token = sendToken.token;
					args.balance = sendToken.balance;
				}
				else{
					util.createDialog({
						"message": L("label_send_tokenfound").format({"token": vals.asset}),
						"buttonNames": [L("label_close")]
					}).show();
				}
				if( isFiatMode ) switchAmount();
				updateFields( null, 0 );
				checkAndSetValue();
			}
		});
		dialog.show();
		
		return;
	}
	
	if( vals.currency != null ) vals.extras = { "currency": vals.currency };
	if( vals.address != null ){
		$.inputDestination.value = vals.address.toString();
		
		if( vals.amount != null ){
			updateFields( null, vals.amount );
		}
	}
	if( vals.asset !== "BTC" ){
		if( vals.regular_dust_size != null ) args.regular_dust_size = parseFloat(vals.regular_dust_size);
		else args.regular_dust_size = 0;
	}
	
}

globals.addButtonEvent($.priorityLabel, function(e){
	Alloy.createController("priority", {
		"setFeeLabel": setFeeLabel,
		"setEthFee":setEthFee,
	})
	.getView();
});

globals.addButtonEvent($.switchIcon, switchAmount);

globals.addButtonEvent($.numberPad1, function(e){ updateFields($.numberPad1); });
globals.addButtonEvent($.numberPad2, function(e){ updateFields($.numberPad2); });
globals.addButtonEvent($.numberPad3, function(e){ updateFields($.numberPad3); });
globals.addButtonEvent($.numberPad4, function(e){ updateFields($.numberPad4); });
globals.addButtonEvent($.numberPad5, function(e){ updateFields($.numberPad5); });
globals.addButtonEvent($.numberPad6, function(e){ updateFields($.numberPad6); });
globals.addButtonEvent($.numberPad7, function(e){ updateFields($.numberPad7); });
globals.addButtonEvent($.numberPad8, function(e){ updateFields($.numberPad8); });
globals.addButtonEvent($.numberPad9, function(e){ updateFields($.numberPad9); });
globals.addButtonEvent($.numberPad0, function(e){ updateFields($.numberPad0); });
globals.addButtonEvent($.numberPadDot, function(e){ updateFields($.numberPadDot); });
globals.addButtonEvent($.numberPadDel, function(e){ updateFields($.numberPadDel); });

globals.addButtonEvent($.numberPadQrcode, function(e){
	util.readQRcode({
		"callback": setValues
	});
});
globals.addButtonEvent($.numberPadSend, function(e){
	
 
	
	var result = null;
	var quantity = $.amount.text.replace(/[^\d.-]/g, "");
	
	inputverify.set( new Array(
		{ name: L("label_quantity_send"), type: "number", target: quantity, over: 0, shouldvalue: true },
		{ name: L("label_destination"), type: "address", target: $.inputDestination, over: 0 }
	));
	
	if( (result = inputverify.check()) == true ){
		var fiat_conf = $.fiat.text;
		var loading = util.showLoading($.send, { width: Ti.UI.FILL, height: Ti.UI.FILL, message: L("label_please_wait")});
		blockchain.getFees({
			"callback": function(result){
			
				var type = "send";
				if(cache.data.chainId == blockchain.BITCOIN && args.token != "BTC"){
					type = "enhanced send";
				}
				if(cache.data.chainId == blockchain.ETHEREUM && args.token != "ETH"){
					type = "erc20 send";
				}
				if(cache.data.chainId == blockchain.BITCOIN){
					var sendParams = {
						"source": cache.data.address,
						"token": args.token,
						"destination": $.inputDestination.value,
						"quantity": quantity,
						"regular_dust_size": args.regular_dust_size
					};
					
					if( isFinite(cache.data.currentFee) ) sendParams.fee = cache.data.currentFee * 1e8;
					else sendParams.fee_per_kb = result[cache.data.currentFee];
				
				}else if(cache.data.chainId == blockchain.ETHEREUM){
					
					var gasPrice = result.gasPrice;
					
					if(globals.userGasPrice != null){
						gasPrice = globals.userGasPrice;
					}
					var sendParams = {
						"from": cache.data.address,
						"token": args.contractAddress,
						"to": $.inputDestination.value,
						"amount": quantity,
						"gasPrice":gasPrice,
					};
					
				}
				else{
					throw "error chain not supported";
				}
				console.log(sendParams);
				
				blockchain.API.createSend({
					"post": sendParams,
					"callback": function( result ){
						console.log(result);
						 blockchain.verifyTransaction({
						 	"type": type,
						 	"params": sendParams,
						 	"transaction": result,
						 	"callback":function(verifyResult){
								loading.removeSelf();
								
								if(cache.data.chainId == blockchain.BITCOIN){
									var feeInBTC = verifyResult.fees / 1e8;						
									var feeInCurrency = tiker.to(cache.data.chainId, "BTC", feeInBTC, cache.data.currency);
									var priority = globals.feeTexts[cache.data.currentFee];
									var message = L("label_send_confirmation").format( { "address": $.inputDestination.value, "amount": $.amount.text, "token": args.token, "amount2": (fiat_conf.length <= 0)? "": "(" + L("label_approx") + ")" + fiat_conf }); 
									message += "\n\n" + L("label_fee") + " " + feeInBTC + "BTC";
									if( feeInCurrency != null ) message += " (" + feeInCurrency + ")";
									if( priority != null ) message += "\n" + priority;
								}
								else if(cache.data.chainId == blockchain.ETHEREUM){
									
									var gasPrice = ethereum.hexToDecimal(result.gasPrice);
									var gasLimit = ethereum.hexToDecimal(result.gasLimit);
									
									var feeInETH = (gasLimit * gasPrice)/1e18;						
									var feeInCurrency = tiker.to(cache.data.chainId, "ETH", feeInETH, cache.data.currency);
									var priority = globals.feeTexts[cache.data.currentFee];
									var message = L("label_send_confirmation").format( { "address": $.inputDestination.value, "amount": $.amount.text, "token": args.token, "amount2": (fiat_conf.length <= 0)? "": "(" + L("label_approx") + ")" + fiat_conf }); 
									message += "\n\n" + L("label_fee") + " " + feeInETH + "ETH";
									if( feeInCurrency != null ) message += " (" + feeInCurrency + ")";
									if( priority != null ) message += "\n" + priority;
								}
								 
								
								var dialog = util.createDialog({
									"title": L("label_confirm"),
									"message": message,
									"buttonNames": [L("label_cancel"), L("label_ok")]
								});
								dialog.addEventListener("click", function(e){
									if( e.index != e.source.cancel ){
										auth.check({ title: L("text_confirmsend"), callback: function(e){
											if( e.success ){
												loading = util.showLoading($.send, { width: Ti.UI.FILL, height: Ti.UI.FILL, message: L("label_please_wait")});
												if(cache.data.chainId == blockchain.BITCOIN){
													var unsigned_tx = result.tx;
													unsigned_tx = bitcoin.setRBF(result.tx);
												}else if(cache.data.chainId == blockchain.ETHEREUM){
													var unsigned_tx = result.unsigned_tx;
												}
												 
												var signed_tx = blockchain.sign(unsigned_tx);
												console.log(unsigned_tx);
												console.log(signed_tx);
														blockchain.API.broadcast({
															"signed_tx": signed_tx,
															"callback": function( result ){
																if( args.channel != null ) globals.publich({"status": true});
																
																var dialog = util.createDialog({
																	message: L("label_text_sent"),
																	buttonNames: [L("label_close")]
																});
																dialog.addEventListener("click", function(e){
																	globals.refreshTokens();
																	globals.refreshHistory();
																	close();
																});
																dialog.show();
																
																network.connectPOST({
																	"url":"https://api.indiesquare.me/v2/pushnotification",
																	"chain":"btc",
																	"version":"v2",
																	"method": "pushnotification",
																	"post": {
																		"id": cache.data.id,
																		"address": cache.data.address,
																		"type": "send",
																		"token": args.token,
																		"destination": $.inputDestination.value,
																		"quantity": $.amount.value
																	},
																	"callback": function( result ){
																		globals.console.info("Pushed!");
																	},
																	"onError": function(error){
																		globals.console.info(error);
																	}
																});
																/*
																analytics.trackEvent({
																	name: "send_token",
																	parameters: sendParams
																});
																*/
															},
															"onError": function(error){
																if(error.message == undefined){
								error = error.error;
							}
																util.createDialog({
																	"title": error.type,
																	"message": error.message,
																	"buttonNames": [L("label_cancel")]
																}).show();
															},
															"always": function(){
																if( loading != null ) loading.removeSelf();
															}
														});
													 
											}
										}});
									}else{
										loading.removeSelf();
									}
								});
								dialog.show();
								
							},
							"onError": function(error){
								if(error.message == undefined){
								error = error.error;
							}
								if( loading != null ) loading.removeSelf();
									util.createDialog({
										"title": error.type,
										"message": error.message,
										buttonNames: [L("label_cancel")]
									}).show();
								}
							});
						},
						"onError": function(error){
							 
							if(error.message == undefined){
								error = error.error;
							}
							if( loading != null ) loading.removeSelf();
	      			  		var dialog = util.createDialog({
								"title": error.type,
								"message": error.message,
								"buttonNames": [L("label_close")]
							}).show();
						}
					});
			},
			"onError" : function(error) {
				if( loading != null ) loading.removeSelf();
				var dialog = util.createDialog({
					"title": error.type,
					"message": error.message,
					"buttonNames": [L("label_close")]
				}).show();
			}
		});			
	}
	else{
		var dialog = util.createDialog({
			message: result.message,
			buttonNames: [L("label_close")]
		});
		dialog.addEventListener("click", function(e){
			if( result.target.focus != undefined ) result.target.focus();
		});
		dialog.show();
	}
});

function estimateGas(){
	
	 
					var sendParams = {
						"from": cache.data.address,
						"token": args.contractAddress,
						"to": $.inputDestination.value,
						"amount": quantity,
					};
			 
	
};
 
setFeeLabel(cache.data.currentFee);

if(cache.data.chainId == blockchain.ETHEREUM){
	$.qrCodeImage.image = "/images/icon_qrcode_eth.png";
}
