module.exports = (function() {
    var self = {};

    require("vendor/ethereum");
    self.tokenTransferMethod = "0xa9059cbb";
    var util = require("vendor/ethereumjs-util").ethereumjsutil;
    var cache = require("requires/cache");
    var bip39 = globals.bip39;
    var hdkey = globals.hdkey;
    var Tx = globals.Tx;
    var Buffer = globals.Buffer;
    var hdnode = null;

    var basePath = "m/44'/60'/0'/0/";
    var account = null;

    self.hexToDecimal = function(hexString) {
        return parseInt(hexString, 16);
    };
	self.getBasePath = function(){
		return basePath;
	};
    self.init = function(passphrase, derive) {
        var password = "";
        var masterseed = bip39.mnemonicToSeed(passphrase, password);
        hdnode = hdkey.fromMasterSeed(masterseed);

        var d = basePath + "0";
        if (derive != null) d = derive;

        account = hdnode.derivePath(d);
    };
    
     self.changeHD = function(d) {
        self.init(globals.decryptedPassphrase, basePath + d);

        cache.data.address = self.getAddress( basePath + d);
        cache.save();

        var f3 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "qr_address.png");
        if (f3.exists()) {
            f3.deleteFile();
        }
        return cache.data.address;
    };


    self.verifyTransaction = function(params) {


        var errorMessage = "";

        console.log(params);

        var contractData = params.transaction.data;
        if (contractData.substring(0, self.tokenTransferMethod.length) == self.tokenTransferMethod) {
            globals.blockchain.API.getToken({
                "contractAddress": params.params.token,
                "callback": function(tokeninfo) {
                    var unpackedData = self.unpackData(contractData, parseInt(tokeninfo.decimals));
                    console.log(unpackedData);
                    if (params.params.token == params.transaction.to) {
                        if (params.params.to == unpackedData.to) {
                            if (params.transaction.value == 0x00) {

                                if (params.params.amount == unpackedData.amount) {

                                    params.callback({
                                        "fees": 0,
                                    });

                                } else {
                                    errorMessage = "amount does not match";
                                }

                            } else {
                                errorMessage = "ether value is not zero";
                            }

                        } else {
                            errorMessage = "destination does not match destination";
                        }
                    } else {
                        errorMessage = "destination is not contract address";
                    }
                    params.onError({
                        title: "Error",
                        message: errorMessage
                    });

                    return;
                },
                "onError": function(error) {
                    errorMessage = "error getting token info";
                    params.onError({
                        title: "Error",
                        message: errorMessage
                    });

                    return;
                },
                "always": function() {}
            });
        } else {

            if (params.transaction.to == params.params.to) {
                var decimalAmount = self.hexToDecimal(params.transaction.value);
                var weiAmount = parseFloat(params.params.amount) * 1e18;

                if (weiAmount == decimalAmount) {
                    params.callback({
                        "fees": 0,
                    });

                } else {
                    errorMessage = "amount does not match";
                }
            } else {
                errorMessage = "destination does not match";
            }

            params.onError({
                title: "Error",
                message: errorMessage
            });

            return;

        }



    };
	 self.getAddressForPath = function(requestedBasePath) {

globals.setCache();
		if(requestedBasePath == null){
    		 
       	  	requestedBasePath = basePath + "0";
        	      
       	}
       	
       var cachedAddress = cache.data.addresses["ethereum"][requestedBasePath];
       
       if(cachedAddress != undefined){
       	 	console.log("cache ethereum");
       		return cachedAddress;
       }
       
        var keyPair = hdnode.derivePath(requestedBasePath);
        
       cache.data.addresses["ethereum"][requestedBasePath] = keyPair.getWallet().getAddressString();
       cache.save();
       return cache.data.addresses["ethereum"][requestedBasePath];


    };
    self.getAddress = function(requestedBasePath) {
        
        if(requestedBasePath == null){
    		 
       	  	requestedBasePath = basePath + "0";
        	      
       	}
       
        var keyPair = hdnode.derivePath(requestedBasePath);
        
        return keyPair.getWallet().getAddressString();
    };
	 self.createHDAddress = function(d) {
      return self.getAddress(basePath+d);
    };
    self.getPrivKey = function(requestedBasePath) {
        
        if(requestedBasePath == null){
    		 
       	  	requestedBasePath = basePath + "0";
        	      
       	}
       
        var keyPair = hdnode.derivePath(requestedBasePath);
        
        return keyPair.getWallet().getPrivateKeyString();
        
    };

    self.weiToEther = function(wei) {
        return wei / 1000000000000000000;
    };

    self.signMessage = function(rawMsg,requestedBasePath) {
    	
        if(requestedBasePath == null){
    		 
       	  	requestedBasePath = basePath + "0";
        	      
       	}
       
        var keyPair = hdnode.derivePath(requestedBasePath);

        var msgHash = util.addHexPrefix(util.sha3(rawMsg).toString('hex'));
       
        var privKey = keyPair.getWallet().getPrivateKeyString();
        
        var privateKey = new Buffer(privKey.substr(2, privKey.length - 2), "hex");

        var sig = util.ecsign(new Buffer(util.stripHexPrefix(msgHash), 'hex'), privateKey);

        var r = util.stripHexPrefix(sig.r.toString('hex'));

        var s = util.stripHexPrefix(sig.s.toString('hex'));

        var v = sig.v;

        v = parseInt(v).toString(16);

        return util.addHexPrefix(r + s + v);
    };

    self.sign = function(txobj,requestedBasePath) {
    	
       	if(requestedBasePath == null){
    		 
       	  requestedBasePath = basePath + "0";
        	      
       	}
       	
       	console.log(requestedBasePath);
       
        var keyPair = hdnode.derivePath(requestedBasePath);
    	var privkey = keyPair.getWallet().getPrivateKeyString();
    	 
        var tx = new Tx(txobj);
        var privateKey = new Buffer(privkey.substr(2, privkey.length - 2), "hex");
        tx.sign(privateKey);

        var serializedTx = tx.serialize();
        var serialized = "0x" + serializedTx.toString("hex");

        return serialized;
    };

    self.unpackData = function(data, decimals) {
        data = data.replace(/0xa9059cbb/, "");

        var to = "0x" + data.substr(0, 64).substr(-40);
        var amount = data.substr(-(decimals + 1));
        amount = parseInt(amount, 16);

        amount = amount / Math.pow(10, decimals);
        return {
            "to": to,
            "amount": amount
        };
    };

    self.calculateFee = function(gasPrice, gasLimit) {
        globals.console.info("gasPrice");
        globals.console.info(parseInt(gasPrice, 16));
        gasPrice = Math.divide(parseInt(gasPrice, 16), 1e18);
        globals.console.info(gasPrice);

        globals.console.info("gasLimit");
        gasLimit = parseInt(gasLimit, 16);
        globals.console.info(gasLimit);

        return {
            "gasPrice": gasPrice,
            "gasLimit": gasLimit
        };
    };

    self.addToken = function(contractAddress, tokenInfo) {
        var tokens = Ti.App.Properties.getString(globals.userEthTokens, "empty");
        console.log(tokens);
        if (tokens == "empty") {
            tokens = {};
        } else {
            tokens = JSON.parse(tokens);
        }

		var walletTokens =  tokens[cache.data.address];
		if(walletTokens == undefined){
			walletTokens = {};
		}
        walletTokens[contractAddress] = tokenInfo;
        tokens[cache.data.address] = walletTokens;
        console.log(tokens);
        Ti.App.Properties.setString(globals.userEthTokens, JSON.stringify(tokens));

    };
    self.removeToken = function(contractAddress) {
    	
        var tokens = Ti.App.Properties.getString(globals.userEthTokens, "empty");
        
		delete tokens[cache.data.address][contractAddress];
        
        Ti.App.Properties.setString(globals.userEthTokens, JSON.stringify(tokens));

    };
    self.getTokens = function() {
        var tokens = Ti.App.Properties.getString(globals.userEthTokens, "{}");
        tokens = JSON.parse(tokens);
        var walletTokens = tokens[cache.data.address];
        if(walletTokens != undefined){
        	 return walletTokens;
        }
        return {};
    };



    return self;
}());