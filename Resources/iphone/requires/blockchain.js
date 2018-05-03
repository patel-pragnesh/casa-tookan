module.exports = function () {
	var self = {};
	self.basePath = "m/0'/0/";

	self.BITCOIN = 0;
	self.ETHEREUM = 1;

	var bitcoin = require("requires/bitcoin");
	var ethereum = require("requires/ethereum");
	var cache = require("requires/cache");
	var network = require("requires/network");
	globals.blockchain = self;
	self.initChains = function (chainId) {
		bitcoin.init(globals.decryptedPassphrase);
		ethereum.init(globals.decryptedPassphrase);
	};

	self.verifyTransaction = function (params) {

		if (cache.data.chainId == self.BITCOIN) {
			bitcoin.verifyTransaction(params);
		} else if (cache.data.chainId == self.ETHEREUM) {
			ethereum.verifyTransaction(params);
		}
	};

	self.sign = function (tx) {

		if (cache.data.chainId == self.BITCOIN) {
			return bitcoin.sign(tx);
		} else if (cache.data.chainId == self.ETHEREUM) {
			return ethereum.sign(tx);
		} else {
			throw "chain not supported";
		}
	};

	self.getAddress = function () {

		if (cache.data.chainId == self.BITCOIN) {

			return bitcoin.getAddress();
		} else {

			return ethereum.getAddress();
		}
	};

	self.signMessage = function (message) {

		if (cache.data.chainId == self.BITCOIN) {

			return bitcoin.signMessage(message);
		} else {

			return ethereum.signMessage(message);
		}
	};

	self.changeCurrentChain = function (chainId) {

		cache.data.chainId = chainId;

		self.updateUI();

		if (chainId == self.BITCOIN) {

			cache.data.address = bitcoin.getAddress();
		} else {

			cache.data.address = ethereum.getAddress();
		}
		globals.console.info("Changed: chainId=" + chainId + ", address=" + cache.data.address);

		cache.save();

		if (globals.refreshTokens != undefined) {
			globals.refreshTokens();
		}

		if (globals.refreshReceive != undefined) {
			globals.refreshReceive();
		}

		if (globals.refreshHistory != undefined) {
			globals.refreshHistory();
		}
	};

	self.updateUI = function () {

		if (cache.data.chainId == self.BITCOIN) {
			globals.currentColor = globals.bitcoinColor;
		} else if (cache.data.chainId == self.ETHEREUM) {
			globals.currentColor = globals.ethereumColor;
		}
		if (globals.updateTokenUI != undefined) {
			globals.updateTokenUI();
		}

		if (globals.updateMenuUI != undefined) {
			globals.updateMenuUI();
		}

		if (globals.updateReceiveUI != undefined) {
			globals.updateReceiveUI();
		}

		if (globals.updateHistoryUI != undefined) {
			globals.updateHistoryUI();
		}

		if (globals.updateDappUI != undefined) {
			globals.updateDappUI();
		}

		if (globals.setPage != undefined) {
			globals.setPage();
		}

		if (globals.updateDappUI != undefined) {
			globals.updateDappUI();
		}
	};

	self.API = {};
	self.API.getBalances = function (params) {
		if (params.chain == "bitcoin") {
			return network.connectGET({
				"chain": "btc",
				"version": "v1",
				"method": "addresses/" + bitcoin.getAddressForPath(cache.data.currentPath) + "/balances?page=" + params.page + "&per_page=" + params.per_page,
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		} else if (params.chain == "ethereum") {
			if (params.contractAddress != undefined && params.contractAddress != "ETH") {
				return network.connectGET({
					"chain": "eth",
					"version": "v1",
					"method": "addresses/" + ethereum.getAddressForPath(cache.data.currentPath) + "/tokens/" + params.contractAddress + "/balance",
					"callback": function (balance) {
						params.callback(balance);
					},
					"onError": params.onError,
					"always": params.always
				});
			} else {
				return network.connectGET({
					"chain": "eth",
					"version": "v1",
					"method": "addresses/" + cache.data.address + "/balance",
					"callback": function (balance) {
						params.callback(balance);
					},
					"onError": params.onError,
					"always": params.always
				});
			}
		}
	};

	self.API.getToken = function (params) {
		if (params.chain == self.BITCOIN) {
			return network.connectGET({
				"chain": "btc",
				"version": "v1",
				"method": "tokens?name=" + params.tokenName,
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		} else if (params.chain == self.ETHEREUM) {
			return network.connectGET({
				"chain": "eth",
				"version": "v1",
				"method": "tokens/" + params.contractAddress,
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		}
	};

	self.API.createSend = function (params) {
		if (cache.data.chainId == self.BITCOIN) {
			return network.connectPOST({
				"chain": "btc",
				"version": "v1",
				"method": "transactions/send",
				"post": params.post,
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		} else if (cache.data.chainId == self.ETHEREUM) {
			return network.connectPOST({
				"chain": "eth",
				"version": "v1",
				"method": "transactions/send",
				"post": params.post,
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		}
	};

	self.API.estimateGas = function (params) {
		if (cache.data.chainId == self.ETHEREUM) {
			return network.connectPOST({
				"chain": "eth",
				"version": "v1",
				"method": "transactions/estimategas",
				"post": params.post,
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		} else {
			throw "chain not supported";
		}
	};

	self.getFees = function (params) {
		if (cache.data.chainId == self.BITCOIN) {
			return network.connectGET({
				"chain": "btc",
				"version": "v1",
				"method": "transactions/estimatefee",
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		} else if (cache.data.chainId == self.ETHEREUM) {
			return network.connectGET({
				"chain": "eth",
				"version": "v1",
				"method": "transactions/gasprice",
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		}
	};

	self.API.broadcast = function (params) {
		if (cache.data.chainId == self.BITCOIN) {
			return network.connectPOST({
				"chain": "btc",
				"version": "v1",
				"method": "transactions/broadcast",
				"post": {
					tx: params.signed_tx
				},
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		} else if (cache.data.chainId == self.ETHEREUM) {
			return network.connectPOST({
				"chain": "eth",
				"version": "v1",
				"method": "transactions/broadcast",
				"post": {
					tx: params.signed_tx
				},
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		}
	};

	self.API.getHistory = function (params) {
		console.log("addresses/" + cache.data.address + "/history?per_page=" + params.per_page + "&page=" + params.page);
		if (cache.data.chainId == self.BITCOIN) {
			return network.connectGET({
				"chain": "btc",
				"version": "v1",
				"method": "addresses/" + bitcoin.getAddressForPath(cache.data.currentPath) + "/history?per_page=" + params.per_page + "&page=" + params.page,
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		} else if (cache.data.chainId == self.ETHEREUM) {
			return network.connectGET({
				"chain": "eth",
				"version": "v1",
				"method": "addresses/" + cache.data.address + "/history?per_page=" + params.per_page + "&page=" + params.page,
				"callback": params.callback,
				"onError": params.onError,
				"always": params.always
			});
		}
	};

	return self;
}();