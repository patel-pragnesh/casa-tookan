require('ti-mocha');
mocha.setup({
    reporter: 'ti-spec-studio'
});
var bitcoin = require("requires/bitcoin");
var tools = require('vendor/util/bitcoinJSLib');
var bitcoinjs = tools.bitcoin;
// create the test suite
describe('ti-mocha', function() {

    describe('Passphrases', function() {

        it('sdff', function() {

            var seed = bitcoin.getSeedFromPassphrase("pioneer acid organ walk panda female purity ecology gadget blind opinion range");

            var master = bitcoinjs.HDNode.fromSeedHex(seed);
			
            var keyPair = master.derivePath("m/0'/0/0");

            var address = keyPair.getAddress();

            if (address != "1GT8u3CSqnNvi9xyBtwLWgyc7fz5JYopeL") {
                throw new Error("address generation FAILED");
            }

        });

    });



});

// run the tests
mocha.run();