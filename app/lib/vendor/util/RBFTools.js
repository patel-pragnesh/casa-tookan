
module.exports = (function() {
	
function RBFTools(){
	
}
 
var TX_EMPTY_SIZE = 4 + 1 + 1 + 4;
var TX_INPUT_BASE = 32 + 4 + 1 + 4;
var TX_INPUT_PUBKEYHASH = 107;
var TX_OUTPUT_BASE = 8 + 1;
var TX_OUTPUT_PUBKEYHASH = 25;


var tools = require('vendor/util/bitcoinJSLib');
var bitcoin = tools.bitcoin;
var crypto = bitcoin.crypto;
var txObject;
var UTXOSs = [];
var spentUTXOSs = [];
var inputAmount = 0;
var outputAmounts = 0;
var oldFee = 0;
var increase = 0; 
var inputAmounts=0; 
var newTx;
var changeAmount=0;
var sourceAddress;
var bumbFeeCallback;
var checkFeeCallback;
var currentRawTx;  
var includedInputs = [];
	var oldTxid = "";

var sizeOf1Input = 0;
var sizeOfChangeOutput = 0;
var oldSize = 0;
var oldFeeSatByte = 0;
 function RBFTools() {

 }

function inputBytes (input) {
  return TX_INPUT_BASE + (input.script ? input.script.length : TX_INPUT_PUBKEYHASH);
}
function outputBytes (output) {
  return TX_OUTPUT_BASE + (output.script ? output.script.length : TX_OUTPUT_PUBKEYHASH);
}


function getUserAddressFromTx(tx){
		var addresses = [];
		tx.ins.forEach(function (input, idx) {
			  
			  var scriptSig = bitcoin.script.compile([
   input.script
    ]);
 
		var asm = bitcoin.script.toASM(scriptSig);
		var pubkey = asm.substr( asm.length - 66); //get last 66 bytes of asm

	 
		var pubKeyBuffer = tools.buffer(pubkey,'hex');
		var address = bitcoin.ECPair.fromPublicKeyBuffer(pubKeyBuffer).getAddress();
	 
		addresses.push(address);
 
		});
		
		return addresses[0];//assuming all address are the same, not a good way to get the source address
	}
 
	function selectInputsAndChange(newSatByte,utxos){

 			var updated = (oldFee+changeAmount)/(oldSize-sizeOfChangeOutput);
 				console.log("ud:"+updated+" old:"+oldFeeSatByte);
 			var dif = updated-oldFeeSatByte;
			console.log("dif:"+dif);
		var currentSatByteEst = oldFeeSatByte ;

		var requiredSatByteEst = newSatByte;

	 	var newInputs = [];

		 console.log("oldFeeSatByte:"+currentSatByteEst+" requiredSizeByteEst:"+requiredSatByteEst);

		 	var updatedSize = oldSize;
		 	var updatedFee = oldFee;

		 	var updatedSatByteEst = (updatedFee/updatedSize)+dif;

		  console.log("updatedSatByte:"+ updatedSatByteEst.toFixed(4)+" requiredSizeByteEst:"+requiredSatByteEst);

 		for(var i =0;i<utxos.length;i++){
			 
				 	var aUTXO = utxos[i];
			 
				aUTXO["sizeValRatio"] = (aUTXO.amount * 100000000) / sizeOf1Input;
					 
		}


		utxos =  utxos.sort(function(a, b) { //order utxos by value
  			return a.sizeValRatio - b.sizeValRatio;
		});
		
		
  			//see if can acheive new sat/byte by reducing change
 

  		var newSetFee = requiredSatByteEst*oldSize;

  		var reduceChangeAmount =  newSetFee - oldFee;

  	 console.log("reduceChangeAmount:"+ reduceChangeAmount);


 			 var foundChange = false;
 			 var updatedViaChange = false;
 			 var removeChange =-1;
 			  
 				newTx.tx.outs.forEach(function (output, idx) {  
			var type = bitcoin.script.classifyOutput(output.script);
			 
				if(type == 'pubkeyhash') {
 					var add = bitcoin.address.fromOutputScript(output.script);
 						if(add == sourceAddress && foundChange == false){
 							
							foundChange = true;

							var tmpVal = output.value - reduceChangeAmount;
							 console.log("new change val :"+ tmpVal);
							if(tmpVal == 0){
								updatedViaChange = true;
								removeChange = idx;

							}else if(tmpVal > 0){
								output.value -= reduceChangeAmount;
								updatedViaChange = true;
							}
								

						 } 
					}

   			 


 				
 				 });

 				 if(removeChange != -1){
 				 	newTx.tx.outs.splice(removeChange,1);
 				 }	




 		if(updatedViaChange == false){

 

		for(var i =0;i<utxos.length;i++){
		 
			var aUTXO = utxos[i];
			if(aUTXO.confirmations == 0){
				continue;
			}
			if(updatedSatByteEst <= requiredSatByteEst){


			
			 
				if(includedInputs.indexOf(aUTXO.txid+":"+aUTXO.vout) == -1 && aUTXO.txid != oldTxid){

			  
			    var anAmount = (aUTXO.amount * 100000000);
				inputAmounts+= anAmount;
					
				    updatedSize += sizeOf1Input;

				    updatedFee+= anAmount;
					
					updatedSatByteEst = updatedFee/updatedSize;

					newInputs.push(aUTXO);


					console.log("oldSize:"+oldSize+" newSize:"+updatedSize);
					console.log("oldFee:"+oldFee+" newFee:"+updatedFee);
					console.log("updatedSatByte:"+ updatedSatByteEst.toFixed(4)+" requiredSizeByteEst:"+requiredSatByteEst);


					console.log("  ");
					
				}
				 
			}else{
				break;
			}
		}

			if(updatedSatByteEst <= requiredSatByteEst){
				throw "balance error";
				return;
			}
 
	}

		newInputs.forEach(function(aUTXO) {

 			newTx.addInput(aUTXO.txid,aUTXO.vout);
		});
			
		 
 
		newTx.tx.ins.forEach(function (input, idx) {
  		input["sequence"] = 4294967293;
 		}); 

 

 

	}
	 

	RBFTools.prototype.setRBF = function(tx) {
	
		var txObj = bitcoin.Transaction.fromHex(tx);
 			txObj.ins.forEach(function (input, idx) {
  		input["sequence"] = 4294967293;
 		}); 

 		return txObj.toHex();

	};



	 function makeGetRequest(params,callback,error){
	 	 
		var xhr = Ti.Network.createHTTPClient();
	 
		xhr.open("GET", Alloy.CFG.api_uri + 'v2/' +params, true);
		xhr.setRequestHeader('X-Api-Key', Alloy.Globals.api_key);
		xhr.onload = function (e) {
			  
  		if (xhr.readyState === 4) {
  			   
  		  if (xhr.status === 200) {
  		  	   
    		 callback(xhr.responseText);
    		} else {
 error(xhr.statusText);
    		}
  		}
};
xhr.onerror = function (e) {
 error(xhr.statusText);
};
xhr.send(null);
    }

function getOutputAmount(rawtx,index){


var txObj = bitcoin.Transaction.fromHex(rawtx);

 				var output = txObj.outs[index]; //calculate the output value
	 
			return output.value;
}


var getRawTx = function(txid){
	 
		return new Promise(function(resolve, reject) {
		 
	makeGetRequest("transactions/"+txid+"/raw", 
			function callback(result){
				try{
					var jsonString = JSON.parse(result);
				 	resolve( jsonString );
				}
				catch(e){
					throw e;
				}
			},
			function error(error){
				console.log("errir "+error);
	    		resolve(null);
			}
		);
   });
 
		 

	};

		var getUTXOS = function(address){
		 return new Promise(function(resolve, reject) {

	makeGetRequest("addresses/"+address+"/utxos", 

			function callback(result){
				resolve(JSON.parse(result));

		},
		function error(error){
    		reject(error);

		}


		);
   });
 
		 

	};


   function startGetUTXOAmounts(){
    
 	 

    		var utxo = spentUTXOSs[spentUTXOSs.length-1];
    		makeGetRequest("transactions/"+utxo.txid+"/raw", 

			function callback(result){
				
				var rawtx = JSON.parse(result);
				var rawtx = rawtx+""; 
				var amount = getOutputAmount(rawtx,utxo.index);
			    inputAmounts += amount;
			    utxo.input.amount = amount;
				  spentUTXOSs.splice(-1,1);
				   

				   	if(spentUTXOSs.length > 0){
				   		 
				 startGetUTXOAmounts();

				}else{
				 
					try{
						continueCheck();
					}catch(e){
alert(e);
					}
					 
					
				   
				}

		},
		function error(error){
			  console.log("error");
    		 startGetUTXOAmounts();
		}


		);
    	 

    }

  
  function getBinarySize(string) {
    return tools.buffer.byteLength(string, 'hex');
}
	

		
	RBFTools.prototype.getBuffer = function(){
		
		return tools.buffer;
		
	};
	
	RBFTools.prototype.getBitcoin = function(){
		
		return bitcoin;
		
	};

	RBFTools.prototype.checkRBF = function(txid,callback,errorCallback) {
		
		oldTxid = txid;
		checkFeeCallback = callback;
 

		spentUTXOSs = [];
includedInputs = [];
 				  inputAmounts = 0; 
 				  outputAmounts = 0;
 				  fee= 0;



	 var isRBF = false;
		getRawTx(txid).then(function(rawTx) {
			 
			if(rawTx == null){
				errorCallback("error please try again later");
				return;
			}
   
		 
			var rawTx = rawTx+""; //for some reason need to add empty string in promise;
			
			 
			oldSize = getBinarySize(rawTx);
			currentRawTx = rawTx;
 	 
	 txObject = bitcoin.Transaction.fromHex(rawTx);
newTx = new bitcoin.TransactionBuilder();
	  
  spentUTXOSs = [];
 			txObject.ins.forEach(function (input, idx) {


 				 
 				sizeOf1Input =  inputBytes(input);
					
 		 
 				if(input.sequence == 4294967293){
 					isRBF = true; 
 				}

			var txid = tools.buffer((input.hash).reverse(),'hex').toString('hex');

			newTx.addInput(txid, input.index);
			
			includedInputs.push(txid+":"+input.index);

 			spentUTXOSs.push({"txid":txid,"index":input.index,"input":newTx.tx.ins[idx]});
  	 


  			 
 

  		 
 			}); 

 			if(isRBF == false){
				callback(false,null,null);
 				return;
 			}	

 			
 			startGetUTXOAmounts();

 		
 				 
  		  }); 
 			  


    };


 function continueCheck(){
  
 sourceAddress = getUserAddressFromTx(txObject);
console.log("sa:"+sourceAddress);

   newTx.tx["outs"] = [];

  
 				txObject.outs.forEach(function (output, idx) { //calculate the output value

 			 

				outputAmounts+=output.value;


 
 newTx.tx.outs.push(output);


 				
 				 });


console.log("output size"+sizeOfChangeOutput+" amount"+changeAmount);
 
 					  oldFee = inputAmounts - outputAmounts;

 					  oldFeeSatByte = oldFee/oldSize;

 					  checkFeeCallback(true,oldFee,oldFeeSatByte,currentRawTx);

	};
 

	RBFTools.prototype.continueBump =   function(newSatByte,callback){
 		
 		
 

 
		getUTXOS(sourceAddress).then(function(utxos) {
 
		  UTXOSs = utxos;

 
 					  
 
		 		try{

 				  selectInputsAndChange(newSatByte,UTXOSs);

 				}
 				catch(e){
 					callback(null,e);
 					return;
 				}


 				   var newTxBuilt = newTx.buildIncomplete() ;

  					var newOutputAmounts = 0;
 				  		newTxBuilt.outs.forEach(function (output, idx) { //calculate the output value

 			 				

				newOutputAmounts+=output.value;




 				
 				 });


 				
 				  			
 				  		var newFee = inputAmounts - newOutputAmounts;


 				 console.log(inputAmounts + " :: "+newOutputAmounts);
 				 
 				 try{
					var newHex = newTxBuilt.toHex();
					callback(newHex,null,newFee);
				}
				catch(e){
					
					callback(null,e,null);
				}
 				 
 				 	
 				 
 				  

 
	 		 }); 		 
  		
   };
 


 return new RBFTools();

}());
 
