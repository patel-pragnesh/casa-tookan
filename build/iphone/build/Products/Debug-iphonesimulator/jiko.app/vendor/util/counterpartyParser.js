
module.exports = function () {

	function CounterpartyParser() {}
	var cplib = require('vendor/util/cplib');
	var tools = require('vendor/util/bitcoinJSLib');
	var bitcoin = tools.bitcoin;
	var crypto = bitcoin.crypto;
	var txObject;
	var UTXOSs = [];
	var spentUTXOSs = [];
	var inputAmount = 0;
	var outputAmount = 0;
	var fee = 0;
	var increase = 0;
	var includedInput;
	var includedInputAmount;
	var newInputAmount = 0;
	var newTx;
	var sourceAddress;
	var bumbFeeCallback;

	CounterpartyParser.prototype.checkSendTransaction = function (unsignedtx, source, destination, token, amount, divisible) {

		if (divisible) {
			amount *= 100000000;
		}

		var jsonData = parse(unsignedtx);


		if ("Enhanced Send" != jsonData.type) {
			console.log("e-1");
			return false;
		}
		if (source != jsonData.destination.address) {
			console.log("e0 " + source + " " + jsonData.destination.address);
			return false;
		}

		var destinationAddress = jsonData.data.destination;
		var network = destinationAddress.substr(0, 2);
		var pubkeyhash = destinationAddress.substr(2, 40);
		var address = bitcoin.address.toBase58Check(tools.buffer(pubkeyhash, 'hex'), parseInt(network));

		if (destination != address) {
			console.log("e1");
			return false;
		}

		if (token != jsonData.data.asset_id) {
			console.log("e2");
			return false;
		}

		if (amount != jsonData.data.quantity) {
			console.log("e3 " + amount + " " + jsonData.data.quantity);
			return false;
		}

		console.log("e4");
		return true;
	};

	CounterpartyParser.prototype.checkOrderTransaction = function (unsignedtx, address, get_token, get_quantity, give_token, give_quantity, getDivisible, giveDivisible) {

		if (getDivisible) {
			get_quantity *= 100000000;
		}
		if (giveDivisible) {

			give_quantity = give_quantity * 100000000;
		}
		var jsonData = parse(unsignedtx);

		if ("Order" != jsonData.type) {
			return false;
		}

		if (address != jsonData.destination.address) {
			return false;
		}

		if (get_token != jsonData.data.get_id) {
			console.log(get_token + " " + jsonData.data.get_id);
			return false;
		}

		if (give_token != jsonData.data.give_id) {
			return false;
		}

		if (get_quantity != jsonData.data.get_quantity) {
			console.log(get_quantity + " " + jsonData.data.get_quantity);
			return false;
		}

		if (give_quantity != jsonData.data.give_quantity) {
			console.log(give_quantity + " " + jsonData.data.give_quantity);
			return false;
		}

		return true;
	};

	CounterpartyParser.prototype.checkCancelTransaction = function (unsignedtx) {

		var jsonData = parse(unsignedtx);

		if ("Cancel" != jsonData.type) {
			return false;
		}

		return true;
	};

	CounterpartyParser.prototype.decode = function (rawtx) {

		return parse(rawtx);
	};

	parse = function (rawtx) {

		var network = 'mainnet';
		var rawdata = [];
		var txObj = bitcoin.Transaction.fromHex(rawtx);
		var cpDataCount = 0;
		var destination = null;
		var rawdata = tools.buffer.alloc(0);

		var key = tools.bufferReverse(txObj.ins[0].hash);

		txObj.outs.forEach(function (out, idx) {

			var type = bitcoin.script.classifyOutput(out.script);

			if (type == 'pubkeyhash') {

				if (!destination) {

					destination = {
						address: bitcoin.address.toBase58Check(out.script.slice(3, 23), { mainnet: 0x00, testnet: 0x6f }[network]),
						amount: out.value
					};
				}
			}

			if (type == 'nulldata') {
				cpDataCount++;
				rawdata = cplib.counterjs.util.arc4(key, bitcoin.script.decompile(out.script)[1]);
			}
			if (type == 'multisig') {
				cpDataCount++;
				var decrypted = cplib.counterjs.util.arc4(key, Buffer.concat([out.script.slice(3, 33), out.script.slice(36, 68)]));
				rawdata = Buffer.concat([rawdata, decrypted.slice(1, 1 + decrypted[0])]);
			}
		});

		var message;
		try {
			message = cplib.counterjs.Message.fromSerialized(rawdata);
		} catch (e) {
			console.log("error" + e);
		}
		var jsonMessage = message.toJSON();
		jsonMessage.destination = destination;

		if (cpDataCount > 1) {
			return [];
		}
		return jsonMessage;
	};

	return new CounterpartyParser();
}();