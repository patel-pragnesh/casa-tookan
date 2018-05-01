module.exports = (function() {
	var self = {};
require('ti-mocha');
var bitcoin = require("requires/bitcoin");
var tools = require('vendor/util/bitcoinJSLib');
var bitcoinjs = tools.bitcoin;
var didFinish;
// create the test suite
describe('ti-mocha', function() {


    describe('Passphrases', function() {
    	
    	
    	 it('Should verify bitcoin send transaction', function(done) {
        	
         
			 var unsignedTx = "0100000001ff65dc103ac773f06ef674498c10c5fed3bd2d4782509f4148472f4858b78a9f000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888acfdffffff0210270000000000001976a9141485d9d03b41aaa9dca7d70d7f63ff4a0826100e88ac6fc20000000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888ac00000000";
 
			 bitcoin.verifyTransaction({
						 "type": "send",
						 "params": {
							"source":"14JRsWbBapWRC6HMDU2mx5XW9VL1rGtB6p",
							"token": "BTC",
							"destination": "12sWrxRY7E7Nhmuyjbz4TtGE9jRewGqEZD",
							"quantity": 0.0001
						 },
						 "transaction": {"unsigned_tx":unsignedTx},	
						 "callback": function(verifyResult){
						 	console.log("1 verified");
						 	done();
							
						 },
						 "onError":function(error){
						 	console.log("1 error");
						 	throw new Error("transaction should be verified");
						 }
						 
						 });
						 
		 

        });
        
        
            	 it('Should fail verify btc send transaction with incorrect amount', function(done) {
        	
         
			 var unsignedTx = "0100000001ff65dc103ac773f06ef674498c10c5fed3bd2d4782509f4148472f4858b78a9f000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888acfdffffff0210270000000000001976a9141485d9d03b41aaa9dca7d70d7f63ff4a0826100e88ac6fc20000000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888ac00000000";
 
			 bitcoin.verifyTransaction({
						 "type": "send",
						 "params": {
							"source":"14JRsWbBapWRC6HMDU2mx5XW9VL1rGtB6p",
							"token": "BTC",
							"destination": "12sWrxRY7E7Nhmuyjbz4TtGE9jRewGqEZD",
							"quantity": 0.001
						 },
						 "transaction": {"unsigned_tx":unsignedTx},	
						 "callback": function(verifyResult){
						 	console.log("2 error");
						 	 throw new Error("transaction should fail to verify");
							
						 },
						 "onError":function(error){
						 	console.log("2 verified");
						 	 done();
						 }
						 
						 });
						 
		 

        });
        
         it('Should fail verify btc send transaction with incorrect address', function(done) {
        	
         
			 var unsignedTx = "0100000001ff65dc103ac773f06ef674498c10c5fed3bd2d4782509f4148472f4858b78a9f000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888acfdffffff0210270000000000001976a9141485d9d03b41aaa9dca7d70d7f63ff4a0826100e88ac6fc20000000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888ac00000000";
 
			 bitcoin.verifyTransaction({
						 "type": "send",
						 "params": {
							"source":"14JRsWbBapWRC6HMDU2mx5XW9VL1rGtB6p",
							"token": "BTC",
							"destination": "17ZgzoQUAiCrCgSieYfGhAvToW9kn6uaLt",
							"quantity": 0.0001
						 },
						 "transaction": {"unsigned_tx":unsignedTx},	
						 "callback": function(verifyResult){
						 	console.log("3 error");
							throw new Error("transaction should fail to verify");
						 },
						 "onError":function(error){
						 	console.log("3 verified");
						 	done();
						 	
						 }
						 
						 });
						 
		 

        });

        it('Should verify token send transaction', function(done) {
        	
         
			 var unsignedTx = "0100000001334cdceeef5d9b14be183e2e989265f206851f2787351125f5cde5add8e26a68000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888acfdffffff020000000000000000306a2e5e16fa2a3324e38f5d976207131b19c484b028a56427afaa7ef0aa139f960835306d8485b6cbf44676b907164669f7250000000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888ac00000000";
 
			 bitcoin.verifyTransaction({
						 "type": "enhanced send",
						 "params": {
							"source":"14JRsWbBapWRC6HMDU2mx5XW9VL1rGtB6p",
							"token": "SARUTOBICARD",
							"destination": "12sWrxRY7E7Nhmuyjbz4TtGE9jRewGqEZD",
							"quantity": 1
						 },
						 "transaction": {"unsigned_tx":unsignedTx},	
						 "callback": function(verifyResult){
						 	console.log("4 verified");
						 	done();
							
						 },
						 "onError":function(error){
						 	console.log("4 error");
						 	 throw new Error("transaction should be verified");
						 }
						 
						 });
						 
		 

        });
        
                it('Should fail verify token send transaction with incorrect amount', function(done) {
        	
         
			 var unsignedTx = "0100000001334cdceeef5d9b14be183e2e989265f206851f2787351125f5cde5add8e26a68000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888acfdffffff020000000000000000306a2e5e16fa2a3324e38f5d976207131b19c484b028a56427afaa7ef0aa139f960835306d8485b6cbf44676b907164669f7250000000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888ac00000000";
 
			 bitcoin.verifyTransaction({
						 "type": "enhanced send",
						 "params": {
							"source":"14JRsWbBapWRC6HMDU2mx5XW9VL1rGtB6p",
							"token": "SARUTOBICARD",
							"destination": "12sWrxRY7E7Nhmuyjbz4TtGE9jRewGqEZD",
							"quantity": 2
						 },
						 "transaction": {"unsigned_tx":unsignedTx},	
						 "callback": function(verifyResult){
						 	console.log("5 error");
						 throw new Error("transaction should fail to verify");
						 	
							
						 },
						 "onError":function(error){
						 	console.log("5 verified");
						 	 done();
						 }
						 
						 });
						 
		 

        });
        
        
                        it('Should fail verify token send transaction with incorrect address', function(done) {
        	
         
			 var unsignedTx = "0100000001334cdceeef5d9b14be183e2e989265f206851f2787351125f5cde5add8e26a68000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888acfdffffff020000000000000000306a2e5e16fa2a3324e38f5d976207131b19c484b028a56427afaa7ef0aa139f960835306d8485b6cbf44676b907164669f7250000000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888ac00000000";
 
			 bitcoin.verifyTransaction({
						 "type": "enhanced send",
						 "params": {
							"source":"14JRsWbBapWRC6HMDU2mx5XW9VL1rGtB6p",
							"token": "SARUTOBICARD",
							"destination": "17ZgzoQUAiCrCgSieYfGhAvToW9kn6uaLt",
							"quantity": 1
						 },
						 "transaction": {"unsigned_tx":unsignedTx},	
						 "callback": function(verifyResult){
						 	console.log("6 error");
						 	throw new Error("transaction should fail to verify");
						 	
							
						 },
						 "onError":function(error){
						 	console.log("6 verified");
						 	 done();
						 }
						 
						 });
						 
		 

        });
        
                                it('Should fail verify token send transaction with incorrect token', function(done) {
        	
         
			 var unsignedTx = "0100000001334cdceeef5d9b14be183e2e989265f206851f2787351125f5cde5add8e26a68000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888acfdffffff020000000000000000306a2e5e16fa2a3324e38f5d976207131b19c484b028a56427afaa7ef0aa139f960835306d8485b6cbf44676b907164669f7250000000000001976a914243435b90147bfd8f8992a4654022f83397b6f1888ac00000000";
 
			 bitcoin.verifyTransaction({
						 "type": "enhanced send",
						 "params": {
							"source":"14JRsWbBapWRC6HMDU2mx5XW9VL1rGtB6p",
							"token": "SATOSHICARD",
							"destination": "12sWrxRY7E7Nhmuyjbz4TtGE9jRewGqEZD",
							"quantity": 1
						 },
						 "transaction": {"unsigned_tx":unsignedTx},	
						 "callback": function(verifyResult){
						 	console.log("7 error");
						 	throw new Error("transaction should fail to verify");
						 	
							
						 },
						 "onError":function(error){
						 	console.log("7 verified");
						 	 done();
						 	 
						 	 didFinish();
						 }
						 
						 });
						 
		 

        });


    });



});
 

self.runBitcoinTests = function(callback){
	
mocha.setup({
    reporter: 'ti-spec-studio'
});
	didFinish = callback;
	mocha.run();
};
// run the tests

 return self;
}());