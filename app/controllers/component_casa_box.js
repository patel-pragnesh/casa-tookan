var args = arguments[0] || {};
var blockchain = require("requires/blockchain");
var util = require("requires/util"); 
var cache = require("requires/cache");
var bitcoin = require("requires/bitcoin");
var ethereum = require("requires/ethereum");
var auth = require("requires/auth");
 
console.log(args.path);
$.btc_address.text = "BTC:"+ bitcoin.getAddressForPath(args.path);
$.eth_address.text = "ETH:"+ethereum.getAddressForPath(args.path);
$.usd_value.text = "USD Value: $0";

$.mainView.addEventListener("click", function(){
	
	/*var loading = util.showLoading($.addressBox, {
					"width": Ti.UI.FILL,
					"height": Ti.UI.FILL
				});
				
				setTimeout(function(){

	if( cache.data.address != args.address ) args.setCurrent(args.index, args.address);
	
	if( loading != null ) loading.removeSelf();
	},100);
	*/
	args.setCurrent(args.path);
	
});
