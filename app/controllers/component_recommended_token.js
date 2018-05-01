
var blockchain = require("requires/blockchain");
var ethereum = require("requires/ethereum");

var args = arguments[0] || {};
$.tokenSymbol.text = args.symbol;
$.tokenName.text = args.name; 
 
$.tokenImage.image = Alloy.CFG.api_uri + "eth/v1/tokens/" + args.contractAddress + "/image?width=100&X-Api-Key=" + Alloy.Globals.api_key;
 

function addToken(){
	 
	ethereum.addToken(args.contractAddress,{"name":args.name,"symbol":args.symbol});
	
	args.close();
	globals.refreshTokens();

	
}

