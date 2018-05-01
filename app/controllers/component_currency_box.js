var args = arguments[0] || {};

var util = require("requires/util");
var cache = require("requires/cache");

$.name.text = args.name;

if( args.currentCurrency === args.name ) $.checked.visible = true;

$.currencyBox.addEventListener("touchend", function(){
	args.callback(args.name);
});
