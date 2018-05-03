module.exports = function () {
    var self = {};

    require("vendor/UintArray");
    var network = require("requires/network");
    var cache = require("requires/cache");
    var transactionParser = require("vendor/util/transactionParser.js");
    var tools = require('vendor/util/bitcoinJSLib');

    var bitcoin = tools.bitcoin;
    var bitcoinJSMessage = tools.bitcoinJSMessage;
    var bip39lib = require("vendor/bip39lib.js");
    var bip21lib = require("vendor/util/bip21lib.js").bip21lib;

    var rbftools = require("vendor/util/RBFTools.js");

    var MnemonicJS = require("vendor/mnemonic");
    var cryptoJS = require("vendor/crypto-js.js");

    var account = null;
    var basePath = "m/0'/0/";
    var currentHD = 0;

    self.getBasePath = function () {
        return basePath;
    };
    self.encryptPassphrase = function (passphrase, key) {
        var encrypted = cryptoJS.AES.encrypt(passphrase, key).toString();
        globals.console.info("encrypted=" + encrypted);
        cache.data.passphrase = encrypted;
        cache.save();
    };

    function isPassphraseDecrypted(passphrase) {
        var words = passphrase.split(" ");
        if (words.length == 1) return true;
        return false;
    };

    self.decryptPassphrase = function (passphrase, key) {
        var decrypted = "error";
        try {
            decrypted = cryptoJS.AES.decrypt(passphrase, key).toString(cryptoJS.enc.Utf8);
        } catch (e) {
            globals.console.info("error decrypt");
        }
        return decrypted;
    };

    self.signMessage = function (message, requestedBasePath) {

        var seed = self.getSeedFromPassphrase(globals.decryptedPassphrase);

        var master = bitcoin.HDNode.fromSeedHex(seed);
        if (requestedBasePath == null) {
            requestedBasePath = basePath + currentHD;
        }

        var keyPair = master.derivePath(requestedBasePath).keyPair;

        var privateKey = keyPair.d.toBuffer(32);

        var signature = bitcoinJSMessage.sign(message, privateKey, keyPair.compressed);
        console.log(signature.toString('base64'));

        return signature.toString('base64');
    };

    self.signMessageAnonymous = function (message) {
        globals.console.info("here1");
        var passphrase = globals.decryptedPassphrase;
        if (isPassphraseDecrypted(passphrase)) return "decrypted";

        var seed = self.getSeedFromPassphrase(passphrase);

        var master = bitcoin.HDNode.fromSeedHex(seed);

        var keyPair = master.derivePath("m/0\"/0/0/20150902");
        var privateKey = keyPair.d.toBuffer(32);

        var signature = bitcoinJSMessage.sign(message, privateKey, keyPair.compressed);
        var address = keyPair.getAddress();

        var sig = signature.toString('base64');
        return {
            "address": address,
            "sig": sig
        };
    };

    self.verifyMessage = function (message, signature, address) {

        return bitcoinJSMessage.verify(message, address, signature);
    };

    self.getCurrentHD = function () {
        return currentHD;
    };

    self.setRBF = function (rawtx) {
        if (Ti.App.Properties.getInt("dontUseRBF", 0) == 0) {
            return rbftools.setRBF(rawtx);
        }
        return rawtx;
    };

    self.verifyTransaction = function (params) {

        function checkData(decodedTransaction, type) {

            if (decodedTransaction.outputs.length < 3) {

                var firstOutput = decodedTransaction.outputs[0];
                console.log(firstOutput);
                if (type == "token") {
                    if (firstOutput.type != params.type) {
                        return "type does not match";
                    }

                    if (firstOutput.token != params.params.token) {
                        return "token does not match";
                    }
                }
                if (firstOutput.address == params.params.destination) {
                    var valueToCheck = firstOutput.satoshiValue;
                    var valueToCheckAgainst = parseFloat(params.params.quantity) * 1e8;
                    if (type == "token") {
                        var valueToCheck = firstOutput.value;
                        var valueToCheckAgainst = params.params.quantity;
                    }
                    if (valueToCheck == valueToCheckAgainst) {

                        if (decodedTransaction.outputs[1] != undefined) {
                            var changeOutput = decodedTransaction.outputs[1];
                            if (changeOutput.address == params.params.source) {

                                return "verified";
                            } else {
                                return "change does not match";
                            }
                        } else {
                            return "verified";
                        }
                    } else {
                        return "quantity does not match";
                    }
                } else {
                    return "destination does not match";
                }
            } else {
                return "too many outputs";
            }

            return "unknown error";
        }
        console.log(params);
        transactionParser.decodeBitcoinTransaction(params.transaction.tx, function (decodedTransaction, error) {

            if (error != undefined) {

                return params.onError({
                    title: "Error",
                    message: error
                });
            }

            if (params.type == "send") {

                var result = checkData(decodedTransaction, "bitcoin");

                if (result == "verified") {
                    params.callback({
                        "fees": decodedTransaction.fees
                    });
                    return;
                } else {
                    params.onError({
                        title: "Error",
                        message: result
                    });
                    return;
                }
            } else if (params.type == "enhanced send") {

                var result = checkData(decodedTransaction, "token");

                if (result == "verified") {

                    params.callback({
                        "fees": decodedTransaction.fees
                    });
                    return;
                } else {
                    params.onError({
                        title: "Error",
                        message: result
                    });
                    return;
                }
            }

            params.onError({
                title: "Error",
                message: "Unknown error"
            });
            return;
        });
    };

    self.getSeedFromPassphrase = function (passphrase) {

        try {

            var words = passphrase.split(' ');

            if (words.length != 12) {

                throw "passphrase invalid length";
            }

            var m = new MnemonicJS(words);
            var seed = m.toHex();

            return seed;
        } catch (e) {

            try {

                var isValid = false;

                if (bip39lib.bip39.validateMnemonic(passphrase, bip39lib.bip39.wordlists.EN) == true) {
                    isValid = true;
                } else if (bip39lib.bip39.validateMnemonic(passphrase, bip39lib.bip39.wordlists.JA) == true) {
                    isValid = true;
                } else if (bip39lib.bip39.validateMnemonic(passphrase, bip39lib.bip39.wordlists.french) == true) {
                    isValid = true;
                } else if (bip39lib.bip39.validateMnemonic(passphrase, bip39lib.bip39.wordlists.italian) == true) {
                    isValid = true;
                } else if (bip39lib.bip39.validateMnemonic(passphrase, bip39lib.bip39.wordlists.spanish) == true) {
                    isValid = true;
                }

                if (isValid == false) {
                    throw "passphrase invalid not bip39";
                }

                var seed = bip39lib.bip39.mnemonicToSeedHex(passphrase);

                return seed;
            } catch (e) {

                throw e;
            }
        }
    };

    self.init = function (passphrase, derive, nokeep) {

        if (passphrase == null) return null;

        if (isPassphraseDecrypted(passphrase)) return "decrypted";

        globals.decryptedPassphrase = passphrase;

        var seed = self.getSeedFromPassphrase(passphrase);
        var master = bitcoin.HDNode.fromSeedHex(seed);
        var d = basePath + "0";
        if (derive != null) d = derive;

        var masterderive = master.derivePath(d);
        if (!nokeep) {
            account = masterderive;
            currentHD = d.split("/").pop();
        }

        return masterderive;
    };

    self.createHDAddress = function (d) {
        return self.getAddressForPath(basePath + d);
    };

    self.getWIFFromPath = function (d) {
        var derive = self.init(globals.decryptedPassphrase, basePath + d, true);
        return self.getPrivKeyWif(derive);
    };

    self.changeHD = function (d) {
        self.init(globals.decryptedPassphrase, basePath + d);

        cache.data.address = self.getAddress();
        cache.save();

        var f3 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "qr_address.png");
        if (f3.exists()) {
            f3.deleteFile();
        }
        return cache.data.address;
    };

    self.getpassphrase = function (passphrase) {

        self.getSeedFromPassphrase(passphrase);

        return passphrase;
    };

    self.getAddress = function (derive) {
        if (account == null && derive == null) return null;

        return account.getAddress();
    };

    self.getAddressForPath = function (requestedBasePath) {

        globals.setCache();

        var cachedAddress = cache.data.addresses["bitcoin"][requestedBasePath];

        if (cachedAddress != undefined) {
            console.log("cache bitcoin");
            return cachedAddress;
        }

        var seed = self.getSeedFromPassphrase(globals.decryptedPassphrase);

        var master = bitcoin.HDNode.fromSeedHex(seed);
        if (requestedBasePath == null) {
            requestedBasePath = basePath + currentHD;
        }

        var keyPair = master.derivePath(requestedBasePath);
        cache.data.addresses["bitcoin"][requestedBasePath] = keyPair.getAddress();
        cache.save();
        return cache.data.addresses["bitcoin"][requestedBasePath];
    };

    self.getAddressFromWIF = function (WIF) {
        if (WIF == null) return null;
        var keyPair = bitcoin.ECPair.fromWIF(WIF);
        return keyPair.getAddress();
    };

    var getPrivKey = function () {
        if (account == null) return null;
        return account.toWIF();
    };
    self.getPrivKey = getPrivKey;

    self.getPrivKeyWif = function (derive) {
        if (account == null && derive == null) return null;

        var d = account;
        if (derive != null) d = derive;

        return d.toWIF();
    };

    self.getPrivKeyFromWIF = function (WIF) {
        if (WIF == null) return null;

        return bitcoin.ECPair.fromWIF(WIF);
    };

    self.sign = function (raw_tx, requestedBasePath) {

        var seed = self.getSeedFromPassphrase(globals.decryptedPassphrase);

        var master = bitcoin.HDNode.fromSeedHex(seed);
        if (requestedBasePath == null) {
            requestedBasePath = basePath + currentHD;
        }

        console.log(requestedBasePath);

        var keyPair = master.derivePath(requestedBasePath).keyPair;

        var unsignedTx = bitcoin.Transaction.fromHex(raw_tx);

        var txb = bitcoin.TransactionBuilder.fromTransaction(unsignedTx, bitcoin.networks.bitcoin);
        txb.inputs.forEach(function (input, idx) {
            txb.inputs[idx] = {};
            txb.sign(idx, keyPair);
        });

        var signedTx = txb.build();
        return signedTx.toHex();
    };

    self.getPublicKey = function (passphrase, bool) {

        if (bool) self.init(passphrase);
        if (account == null) return null;
        return account.getPublicKeyBuffer().toString('hex');
    };

    self.URI = function (uri) {

        try {
            var decoded = bip21lib.decode(uri);

            var uri = {
                "address": decoded.address,
                "amount": decoded.options.amount
            };

            return uri;
        } catch (e) {
            console.error(e);
            return null;
        }
    };

    return self;
}();