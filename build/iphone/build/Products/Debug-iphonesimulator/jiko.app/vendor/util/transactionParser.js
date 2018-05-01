
module.exports = function () {

  function TransactionParser() {}

  var network = require("requires/network");

  var tools = require('vendor/util/bitcoinJSLib');
  var bitcoin = tools.bitcoin;
  var buffer = tools.buffer;
  var crypto = bitcoin.crypto;
  var totalOutputValue = 0;
  var inputsToGetValue = [];

  var cp = require("vendor/util/counterpartyParser.js");

  TransactionParser.prototype.decodeBitcoinTransaction = function (unsignedHex, callback) {

    var transactionObject = bitcoin.Transaction.fromHex(unsignedHex);

    var decodedTransaction = { inputs: [], outputs: [] };

    var tokensToLookUp = [];

    inputsToGetValue = [];
    console.log("here ebt", unsignedHex);
    var transactionObject = bitcoin.Transaction.fromHex(unsignedHex);
    console.log("here ebt 2");

    transactionObject.ins.forEach(function (input, idx) {

      var inputHash = new Uint8Array(input.hash);
      var txid = buffer(inputHash.reverse(), 'hex').toString('hex');

      inputsToGetValue.push({ "txid": txid, "index": input.index, "info": "not set" });
    });

    transactionObject.outs.forEach(function (output, idx) {
      var anOutput = {};

      var type = bitcoin.script.classifyOutput(output.script);

      if (type == 'pubkeyhash' || type == 'scripthash') {

        var add = bitcoin.address.fromOutputScript(output.script);

        anOutput["type"] = type;
        anOutput["value"] = output.value / 100000000;

        anOutput["address"] = add;
        anOutput["token"] = "BTC";
      } else if (type == "nulldata") {

        var check = cp.decode(unsignedHex);

        if (check.id == 2) {

          var networkFlag = check.data.destination.substring(0, 2);
          var pubKeyHash = check.data.destination.substring(2, check.data.destination.length);
          var bufferPubKey = buffer.from(pubKeyHash, 'hex');
          if (networkFlag != "00") {
            throw "not supported";
          }
          var address = bitcoin.address.toBase58Check(bufferPubKey, bitcoin.networks.bitcoin.pubKeyHash);

          anOutput["type"] = "enhanced send";
          anOutput["value"] = check.data.quantity;
          anOutput["token"] = check.data.asset_id;
          anOutput["address"] = address;
          tokensToLookUp.push({ "token": check.data.asset_id, "info": "not set" });
        } else if (check.id == 10) {

          anOutput["type"] = "order";
          anOutput["get_token"] = check.data.get_id;
          anOutput["give_token"] = check.data.give_id;
          anOutput["get_value"] = check.data.get_quantity;
          anOutput["give_value"] = check.data.give_quantity;

          tokensToLookUp.push({ "token": check.data.get_id, "info": "not set" });
          tokensToLookUp.push({ "token": check.data.give_id, "info": "not set" });
        } else if (check.id == 70) {

          anOutput["type"] = "cancel";
          anOutput["txid"] = check.data.txid;
        } else {
          anOutput["type"] = "unknown output beware!";
        }
      } else {

        anOutput["type"] = "unknown output beware!";
      }
      anOutput["satoshiValue"] = output.value;
      decodedTransaction.outputs.push(anOutput);
    });

    function continueDecode() {

      decodedTransaction.inputs = inputsToGetValue;

      for (var i = 0; i < decodedTransaction.outputs.length; i++) {
        var anOutput = decodedTransaction.outputs[i];

        for (var ii = 0; ii < tokensToLookUp.length; ii++) {
          var aTokenToLookUp = tokensToLookUp[ii];
          if (anOutput.type == "enhanced send") {
            if (aTokenToLookUp.token == anOutput.token) {
              if (aTokenToLookUp.info.divisible == 1) {
                anOutput.value = anOutput.value / 100000000;
              }
            }
          } else if (anOutput.type == "order") {
            if (aTokenToLookUp.info.divisible == 1) {
              if (aTokenToLookUp.token == anOutput.get_token) {

                anOutput.get_value = anOutput.get_value / 100000000;
              }
              if (aTokenToLookUp.token == anOutput.give_token) {

                anOutput.give_value = anOutput.give_value / 100000000;
              }
            }
          }
        }
      }

      var totalInputValue = 0;
      var totalOutputValue = 0;
      for (var i = 0; i < decodedTransaction.inputs.length; i++) {

        var anInput = decodedTransaction.inputs[i];

        totalInputValue += parseInt(parseFloat(anInput.info.value) * 100000000);
      };

      for (var i = 0; i < decodedTransaction.outputs.length; i++) {

        var anOutput = decodedTransaction.outputs[i];

        totalOutputValue += anOutput.satoshiValue;
      }

      var fees = totalInputValue - totalOutputValue;

      decodedTransaction.fees = fees;

      callback(decodedTransaction, null);
    }

    function getTokenInfo() {
      var checkToken = false;

      if (tokensToLookUp.length > 0) {

        var tokenToCheck = null;

        for (var i = 0; i < tokensToLookUp.length; i++) {

          if (tokensToLookUp[i].info == "not set") {
            tokenToCheck = tokensToLookUp[i];
            break;
          }
        }
        if (tokenToCheck != null) {

          checkToken = true;
          network.connectGET({
            "chain": "btc",
            "version": "v1",
            "method": "tokens/" + tokenToCheck.token,
            "callback": function (tokenInfo) {

              for (var i = 0; i < tokensToLookUp.length; i++) {
                var aTokenToCheck = tokensToLookUp[i];
                if (tokensToLookUp[i].token == tokenInfo.token) {
                  tokensToLookUp[i].info = tokenInfo;
                  break;
                }
              }
            },
            "onError": function (e) {

              callback(null, e);
            },
            "always": function () {
              getTokenInfo();
            }
          });
        }
      }

      if (checkToken == false) {
        getInputValues();
      }
    }

    function getInputValues() {

      var checkInput = false;

      if (inputsToGetValue.length > 0) {

        var inputToCheck = null;

        for (var i = 0; i < inputsToGetValue.length; i++) {

          if (inputsToGetValue[i].info == "not set") {
            inputToCheck = inputsToGetValue[i];
            break;
          }
        }

        if (inputToCheck != null) {

          checkInput = true;
          network.connectGET({
            "chain": "btc",
            "version": "v1",
            "method": "transactions/" + inputToCheck.txid + "/raw?verbose=1",
            "callback": function (inputInfo) {

              for (var i = 0; i < inputsToGetValue.length; i++) {
                var anInputToCheck = inputsToGetValue[i];
                if (inputsToGetValue[i].txid == inputInfo.txid) {
                  inputsToGetValue[i].info = inputInfo.vout[inputsToGetValue[i].index];
                  break;
                }
              }
            },
            "onError": function (e) {

              callback(null, e);
            },
            "always": function () {
              getInputValues();
            }
          });
        }
      }

      if (checkInput == false) {

        continueDecode();
      }
    }

    getTokenInfo();
  };

  return new TransactionParser();
}();