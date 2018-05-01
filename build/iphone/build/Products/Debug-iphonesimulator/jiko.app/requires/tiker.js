module.exports = function () {
	var self = {};

	var blockchain = require("requires/blockchain");
	var network = require("requires/network");

	self.getTiker = function (callback) {
		globals.tiker = { "BTC": {}, "ETH": {} };
		network.connectGET({
			"chain": "btc",
			"version": "v1",
			"method": "markets/btc",
			"callback": function (tiker) {
				globals.tiker["BTC"] = tiker;

				network.connectGET({
					"chain": "btc",
					"version": "v1",
					"method": "markets/eth",
					"callback": function (tiker) {

						globals.tiker["ETH"] = tiker;

						if (callback != null) callback(tiker);
					},
					"onError": function (error) {}
				});
			},
			"onError": function (error) {}
		});
	};

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

	self.getFiatValue = function (chain, type, currency) {

		var chainName = "BTC";

		if (chain == blockchain.ETHEREUM) {

			chainName = "ETH";
		}

		if (!self.isAvailable(chain, currency)) return null;

		return globals.tiker[chainName][currency].last;
	};

	self.getFiatSymbol = function (chain, currency) {

		var chainName = "BTC";

		if (chain == blockchain.ETHEREUM) {

			chainName = "ETH";
		}

		if (!self.isAvailable(chain, currency)) return null;

		return globals.tiker[chainName][currency].symbol;
	};

	self.to = function (chain, type, quantity, currency, digit) {

		var chainName = "BTC";

		if (chain == blockchain.ETHEREUM) {

			chainName = "ETH";
		}

		if (!self.isAvailable(chain, currency)) return null;
		if (!isFinite(quantity)) return "???";

		var price = globals.tiker[chainName][currency].last;
		var symbol = globals.tiker[chainName][currency].symbol;

		if (digit == null) digit = 4;

		if (globals.tiker[chainName].hasOwnProperty(type)) {

			var val = globals.tiker[chainName][type].last;
			return "{0}{1}".format(symbol, addCommas((quantity * price).toFixed2(digit)));
		} else if (type === "BTC" || type === "ETH") {
			return "{0}{1}".format(symbol, addCommas((quantity * price).toFixed2(digit)));
		} else {

			return "";
		}
	};

	self.swapCurrency = function (params) {

		var chainName = "BTC";
		if (params.chain == blockchain.ETHEREUM) {
			chainName = "ETH";
		}
		if (!self.isAvailable(params.chain, params.from)) return null;
		if (!self.isAvailable(params.chain, params.to)) return null;

		var BTC = params.amount / globals.tiker[chainName][params.from].last;
		var rate_to = globals.tiker[chainName][params.to].last;

		return (rate_to * BTC).toFixed2(4);
	};

	self.getRate = function (chain, currency) {
		var chainName = "BTC";
		if (chain == blockchain.ETHEREUM) {
			chainName = "ETH";
		}
		if (!self.isAvailable(chain, currency)) return null;
		var xcp_btc = globals.tiker[chainName]["XCP"].last;
		return globals.tiker[chainName][currency].last * xcp_btc;
	};

	self.isAvailable = function (chain, currency) {
		var chainName = "BTC";
		if (chain == blockchain.ETHEREUM) {
			chainName = "ETH";
		}
		if (globals.tiker == null) return false;
		return currency in globals.tiker[chainName];
	};

	return self;
}();