module.exports = (function() {
	var self = {};
require('ti-mocha');


var bitcoin = require("requires/bitcoin");
var ethereum = require("requires/ethereum");
var tools = require('vendor/util/bitcoinJSLib');
var bitcoinjs = tools.bitcoin;
var hdkey = globals.hdkey;
var bip39 = globals.bip39;
// create the test suite
describe('ti-mocha', function() {

    describe('Passphrases', function() {

        it('Should generate correct address from bip39 passphrase: bitcoin', function() {

            var seed = bitcoin.getSeedFromPassphrase("pioneer acid organ walk panda female purity ecology gadget blind opinion range");

            var master = bitcoinjs.HDNode.fromSeedHex(seed);

            var keyPair = master.derivePath("m/0'/0/0");

            var address = keyPair.getAddress();

            if (address != "1GT8u3CSqnNvi9xyBtwLWgyc7fz5JYopeL") {
                throw new Error("address generation FAILED");
            }

        });
        
        it('Should generate correct address from legacy passphrase: bitcoin', function() {

            var seed = bitcoin.getSeedFromPassphrase("guitar pay throughout blank enjoy relationship flame work smoke tease football inside");

            var master = bitcoinjs.HDNode.fromSeedHex(seed);

            var keyPair = master.derivePath("m/0'/0/0");

            var address = keyPair.getAddress();

            if (address != "14JRsWbBapWRC6HMDU2mx5XW9VL1rGtB6p") {
                throw new Error("address generation FAILED");
            }

        });
        
        it('Should not generate same address from different passphrases: bitcoin', function() {

            var seed = bitcoin.getSeedFromPassphrase("guitar pay throughout blank enjoy relationship flame work smoke tease football inside");

            var master = bitcoinjs.HDNode.fromSeedHex(seed);

            var keyPair = master.derivePath("m/0'/0/0");

            var address1 = keyPair.getAddress();
            
            var seed2 = bitcoin.getSeedFromPassphrase("pioneer acid organ walk panda female purity ecology gadget blind opinion range");

            var master2 = bitcoinjs.HDNode.fromSeedHex(seed2);

            var keyPair2 = master2.derivePath("m/0'/0/0");

            var address2 = keyPair2.getAddress();

            if (address1 == address2) {
                throw new Error("addresses differ FAILED");
            }
            
            seed = bitcoin.getSeedFromPassphrase("prologue omettre vignette rituel minorer socle miracle effigie climat tiroir échelle pipette");

            master = bitcoinjs.HDNode.fromSeedHex(seed);

            keyPair = master.derivePath("m/0'/0/0");

            address1 = keyPair.getAddress();
            
            seed2 = bitcoin.getSeedFromPassphrase("はけん　にあう　あずき　なまえ　いらい　みなと　ぎしき　りんご　にんち　むちゅう　そいとげる　かようび");

            master2 = bitcoinjs.HDNode.fromSeedHex(seed2);

            keyPair2 = master2.derivePath("m/0'/0/0");

            address2 = keyPair2.getAddress();

            if (address1 == address2) {
                throw new Error("addresses differ FAILED");
            }
            
            
             seed = bitcoin.getSeedFromPassphrase("view next discover purple actually tool mud gas constant curtain blend heal");

            master = bitcoinjs.HDNode.fromSeedHex(seed);

            keyPair = master.derivePath("m/0'/0/0");

            address1 = keyPair.getAddress();
            
            seed2 = bitcoin.getSeedFromPassphrase("refuse night block ring hit heard figure tiny stubborn join try bomb");

            master2 = bitcoinjs.HDNode.fromSeedHex(seed2);

            keyPair2 = master2.derivePath("m/0'/0/0");

            address2 = keyPair2.getAddress();

            if (address1 == address2) {
                throw new Error("addresses differ FAILED");
            }
          

        });
        
        
        
        
        
        
        
        
        
        
         it('Should generate correct address from bip39 passphrase: ethereum', function() {
 
               var masterseed = bip39.mnemonicToSeed("pioneer acid organ walk panda female purity ecology gadget blind opinion range", '');
                 
         var hdnode = hdkey.fromMasterSeed(masterseed);
		 
          
  			  var keyPair = hdnode.derivePath("m/44'/60'/0'/0/0");
        
              var address = keyPair.getWallet().getAddressString();
            
            if (address != "0x79c875f4438ce39ec7356b1a1b03a2a814bd2eca") {
              throw new Error("address generation FAILED");
            }

 
			 
 

        });
        
        
        it('Should generate correct address from bip39 passphrase: ethereum', function() {
 
               var masterseed = bip39.mnemonicToSeed("はけん　にあう　あずき　なまえ　いらい　みなと　ぎしき　りんご　にんち　むちゅう　そいとげる　かようひ", '');
                 
         var hdnode = hdkey.fromMasterSeed(masterseed);
		 
          
  			  var keyPair = hdnode.derivePath("m/44'/60'/0'/0/0");
        
              var address = keyPair.getWallet().getAddressString();
       
            if (address != "0xf50abb240a5b5bd839df01683ce834c0bc46ade0") {
              throw new Error("address generation FAILED");
            }

 
			didFinish();
 

        });
        
        
         it('Should generate different addresses from bip39 passphrase: ethereum', function() {
 
               var masterseed = bip39.mnemonicToSeed("prologue omettre vignette rituel minorer socle miracle effigie climat tiroir échelle pipette", '');
                 
         var hdnode = hdkey.fromMasterSeed(masterseed);
		 
          
  			  var keyPair = hdnode.derivePath("m/44'/60'/0'/0/0");
        
              var address = keyPair.getWallet().getAddressString();
              
              
                     var masterseed2 = bip39.mnemonicToSeed("pioneer acid organ walk panda female purity ecology gadget blind opinion range", '');
                 
         var hdnode2 = hdkey.fromMasterSeed(masterseed2);
		 
          
  			  var keyPair2 = hdnode2.derivePath("m/44'/60'/0'/0/0");
        
              var address2 = keyPair2.getWallet().getAddressString();
           
            if (address == address2) {
              throw new Error("same address generation check FAILED");
            }

 
			didFinish();
 

        });
        
        


    });



});

self.runWalletTests = function(callback){
	
mocha.setup({
    reporter: 'ti-spec-studio'
});
	didFinish = callback;
	mocha.run();
};
// run the tests

 return self;
}());