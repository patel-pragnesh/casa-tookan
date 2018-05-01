var args = arguments[0] || {};
 

var bip39lib = require("vendor/bip39lib.js");
var util = require("requires/util");
var cache = require("requires/cache");
var network = require("requires/network");
var bitcoin = require("requires/bitcoin");
var ethereum = require("requires/ethereum");
var inputverify = require("requires/inputverify");

var b = require("crypt/bcrypt");
var crypt = require("crypt/api");

var MnemonicJS = require('vendor/mnemonic');
var crypto = require("vendor/crypto");
var generatedPassphrase = null;
$.inputFullPassphrase.hintText = L("label_recoveryphrase");
$.inputFullPassphrase.hintTextColor = "gray";
$.privecypolicy.top = globals.display.height - 60;
$.signinView.top = (globals.display.height - 400) / 2;
$.signinButton.visible = false;

$.inputEachphrase.id = 1;
$.inputEachphrase2.id = 2;

$.signinPrev.opacity = 0.5;

var loading = null;

var nextField = $.inputEachphrase;
var prevField = null;

var fieldcount = -2;
var isMoving = false;
var wordList = ["", "", "", "", "", "", "", "", "", "", "", ""];
 
function getAccelerometer(e) {
    var a = 0;
    e.timestamp % 3 == 0 ? a = e.x * e.y : e.timestamp % 3 == 1 ? a = e.y * e.z : e.timestamp % 3 == 2 && (a = e.z * e.x);
    globals.Accelerometer = 1e8 * a;
    var accel = e.x + e.y + e.z;
    if (-1 == firstAccel) firstAccel = accel; else {
        var threshAccel = firstAccel - accel;
        30 > threshAccel && (threshAccel = -1 * threshAccel);
        firstAccel = -1;
        if (threshAccel > 0 && accelArray.length < 32) {
            accelArray.push(threshAccel);
        }
    }
    val++;
    max > val && (s += (e.timestamp + parseInt(e.x) + parseInt(e.y) + parseInt(e.z) + parseInt(a)) % 2);
}

function init() {
	fieldcount = -2;
	wordList = ["", "", "", "", "", "", "", "", "", "", "", ""];
	$.inputFullPassphrase.value = "";
	$.inputEachphrase.value = "";
	$.inputEachphrase2.value = "";
}

function createAccount(params) {
	
	function continueSignIn(address){
		
	 
			 if( args.callback != null ) args.callback();
                    else {
                    	Alloy.createController("frame") // TODO
						.getView()
						.open();
                    }
                    
                    $.signin.close();
		 
		
		
		
		
	}
	globals.console.info("loading!");
	
    
    globals.console.info("loadRsa!");
    cache.loadRsa();
    var passphrase = params.passphrase;
    if ("demo" === passphrase) {
        passphrase = Alloy.Globals.demopassphrase;
        globals.DEMO = true; 
    }
    try {
        var address, pubkey;
        globals.console.info("getpassphrase!");
        passphrase = bitcoin.getpassphrase(passphrase);
        bitcoin.init(passphrase);
        ethereum.init(passphrase);
        address = bitcoin.getAddress();
        console.log("initial address is  "+address);
        pubkey = bitcoin.getPublicKey();
       
            	 
                	 
                    cache.data.address = address;
                    cache.data.passphrase = passphrase; 
                    cache.data.currentFee = "halfHourFee";
                    cache.data.currency = "ja" === L("language") ? "JPY" : "USD";
                    cache.save();
                		 
                		 continueSignIn(address);
                	
        
       
    } catch (e) {
        loading.removeSelf();
        isCreatingAccount = false;
        util.createDialog({
            "message": e,
            "buttonNames": [ L("label_close") ]
        }).show();
    }
};

function moveNext() {
	globals.console.info("isMoving="+isMoving);
	if( !isMoving ){
		var currentWord = (prevField == null)? null: prevField.value; 
		
		if( fieldcount != -2 && (MnemonicJS.words.indexOf(currentWord) == -1 && bip39lib.bip39.wordlists.EN.indexOf(currentWord) == -1) ){
			util.createDialog({
               	"message": L("label_word_incorrect"),
                "buttonNames": [ L("label_close") ]
            }).show();
		}
		else{
			fieldcount++;
			if( fieldcount >= 0 && currentWord != null ){
				globals.console.info('wordList['+fieldcount+']='+currentWord);
				wordList[fieldcount] = currentWord;
			}
			
			isMoving = true;
			if( fieldcount >= 0 ) $.signinPrev.opacity = 1.0;
			if( prevField != null ){
				prevField.animate({
			        "left": -100,
			        "opacity": 0,
			        "duration": 300
			    });
			    
			    setTimeout(function(){
			        prevField.visible = false;
			    }, 300);
			}
			
		    if( fieldcount >= 11 ){
		    	var passphrase = "";
		        for (var i = 0; 12 > i; i++) {
		            passphrase += wordList[i].toLowerCase();
		            11 > i && (passphrase += " ");
		        }
		        globals.console.info('passphrase='+passphrase);
		        
		        $.inputFullPassphrase.visible = true;
		        $.inputFullPassphrase.value = passphrase;
		        $.inputFullPassphrase.left = 500;
		        $.inputFullPassphrase.animate({
		            "left": (globals.display.width - 300) / 2,
		            "opacity": 1,
		            "duration": 300
		        });
		        
		        $.signinButton.visible = true;
		        $.signinButton.animate({
		            "top": 150,
		            "opacity": 1,
		            "duration": 300
		        });
		        isMoving = false;
		    }
		    else{
		    	if( fieldcount >= 0 ) nextField.value = wordList[fieldcount + 1];
				nextField.hintText = L("label_word_num").format({ "num": fieldcount + 2 });
				nextField.hintTextColor = "gray";
				nextField.left = 500;
				nextField.visible = true;
				globals.console.info("nextField.animate");
			    nextField.animate({
			        "left": (globals.display.width - 200) / 2,
			        "opacity": 1,
			        "duration": 300
			    });
			    
			    setTimeout(function() {
			        globals.console.info("nextField.animate callback");
			    	globals.console.info("isMoving="+isMoving);
			    	isMoving = false;
			    	nextField.focus();
			    	
			    	var temp = prevField;
			    	prevField = nextField;
			    	nextField = temp;
			    	
			    	if( nextField == null ) nextField = $.inputEachphrase2;
			    }, 305);
		    }
		}
	}
}
function movePrev() {
	if( !isMoving && fieldcount > -1 ){
		fieldcount--;
		isMoving = true;
		if( fieldcount <= -1 ) $.signinPrev.opacity = 0.5;
		
		nextField.value = wordList[fieldcount + 1];
		nextField.hintText = L("label_word_num").format({ "num": fieldcount + 2 });
		nextField.hintTextColor = "gray";
		nextField.visible = true;
		nextField.left = -100;
	    nextField.animate({
	        "left": (globals.display.width - 200) / 2,
	        "opacity": 1,
	        "duration": 300
	    });
	    
	    setTimeout(function() {
	        nextField.focus();
	    }, 300);
	    
	    prevField.animate({
	        "left": 500,
	        "opacity": 0,
	        "duration": 305
	    });
	    
	    setTimeout(function() {
	        prevField.visible = false;
	    	
	    	var temp = prevField;
	    	prevField = nextField;
	    	nextField = temp;
	    	
	    	isMoving = false;
	    }, 305);
	}
}

if( !cache.checkExists() ){
    var rsaInfo = cache.loadRsa();
    var isCreatingAccount = false;
    var password = "";
    for (var i = 0; 12 > i; i++) {
        var random = 16 * Math.random() | 0;
        password += (12 == i ? 4 : 16 == i ? 3 & random | 8 : random).toString(16);
    }
    
    var webview = Ti.UI.createWebView({
        "url":"/vendor/secureRand.html"
    });
    Ti.App.addEventListener("app:fromWebView", function(e) {
    	 if(e.message == null || e.message == undefined){
    	 	throw "not secure!";
    	 	return;
    	 }
    	generatedPassphrase = e.message;
        
    });
 
    $.csrpng.add(webview);
     
    
    var loadingTmp = util.showLoading($.signin, {
        "color": "#ffffff",
        "message": L("label_initializing")
    });
    loadingTmp.bottom = 30;
    $.signin.add(loadingTmp);
    
    if (!rsaInfo.already) {
        var PASS = password;
        var RSAkey = globals.Crypt_key = crypt.generateRSAKey(PASS, 1024);
        rsaInfo.already = true;
        rsaInfo.a = RSAkey.toString();
        cache.saveRsa(rsaInfo);
    }
    
    setTimeout(function() {
        loadingTmp.removeSelf();
        $.buttons.show();
		$.privecypolicy.show();
    }, 3e3);
    
	$.newwalletButton.addEventListener("touchend", function() {
		var dialog = util.createDialog({
			"title" : L("label_confirm"),
			"message" : L("label_createaccount_message"),
			"buttonNames" : [L("label_cancel"), L("label_create")]
		});
		dialog.addEventListener("click", function(e) {
			if (e.index != e.source.cancel) {
				$.wrapper.visible = false;
		        if (generatedPassphrase != null) {
		           
		           loading = util.showLoading($.signin, {
        "width": Ti.UI.FILL,
        "height": Ti.UI.FILL,
        "style": "dark",
        "message": L("label_loading")
    });
		                createAccount({ "passphrase": generatedPassphrase });
		          
		        } else {
		        	util.createDialog({
		                "message": L("text_error_notsecure"),
		                "buttonNames": [ L("label_close") ]
		            }).show();
		        }
			}
		});
		dialog.show();
	});
	
	$.hasuserButton.addEventListener("touchend", function() {
		if( !isMoving ){
			isMoving = true;
			
			$.newwalletButton.animate({
	            "top": 0,
	            "opacity": 0,
	            "duration": 300
	        });
	        
	        $.hasuserButton.animate({
	            "opacity": 0,
	            "duration": 300
	        });
	        
	        setTimeout(function() {
	        	isMoving = false;
	        	$.newwalletButton.visible = false;
		        $.hasuserButton.visible = false;
		    }, 305);
	        
	        $.signinButton.visible = true;
	        $.signinButton.animate({
	            "top": 150,
	            "opacity": 1,
	            "duration": 300
	        });
	        $.inputs.visible = true;
	        $.inputs.animate({
	            "opacity": 1,
	            "duration": 300
	        });
	        
	        init();
	        if( globals.display.height <= 480 ) policy.visible = false;
		}
    });
    
    function cancel(){
    	if( !isMoving ){
    		isMoving = true;
    		
			$.newwalletButton.visible = true;
			$.newwalletButton.animate({
	            "top": 50,
	            "opacity": 1,
	            "duration": 300
	        });
	        
	        $.hasuserButton.visible = true;
	        $.hasuserButton.animate({
	            "opacity": 1,
	            "duration": 300
	        });
	        
	        $.signinButton.animate({
	            "top": 210,
	            "opacity": 0,
	            "duration": 300
	        });
	        
	        $.inputs.animate({
	            "opacity": 0,
	            "duration": 300
	        });
	        
	        setTimeout(function() {
	        	$.signinButton.visible = false;
	        	$.inputs.visible = false;
	        	
	        	$.signinInput.visible = true;
	        	$.inputFullPassphrase.left = null;
	        	$.inputFullPassphrase.opacity = 1;
	        	$.inputFullPassphrase.visible = true;
	        	
	        	$.inputEachphrase.left = 500;
	        	$.inputEachphrase.opacity = 0;
	        	$.inputEachphrase.visible = false;
	        	
	        	$.inputEachphrase2.left = 500;
	        	$.inputEachphrase2.opacity = 0;
	        	$.inputEachphrase2.visible = false;
	        	
	        	nextField = $.inputEachphrase;
				prevField = null;
				
				$.signinPrev.opacity = 0.5;
				isMoving = false;
		    }, 305);
	        
	        $.signinInputEach.visible = false;
	        
	        init();
	        if( globals.display.height <= 480 ) policy.visible = true;
		}
	}
    $.signinCancel.addEventListener("touchend", cancel);
    $.signinCancelEach.addEventListener("touchend", cancel);
	
	$.signinInputbyeach.addEventListener("touchend", function() {
        $.signinButton.animate({
            "top": 210,
            "opacity": 0,
            "duration": 300
        });
        
        $.inputFullPassphrase.animate({
            "left": -100,
            "opacity": 0,
            "duration": 300
        });
        
        $.inputEachphrase.visible = true;
        $.inputEachphrase.animate({
            "left": (globals.display.width - 200) / 2,
            "opacity": 1,
            "duration": 300
        });
        
        setTimeout(function() {
        	$.signinButton.visible = false;
        	$.inputFullPassphrase.visible = false;
        	$.inputEachphrase.focus();
	    }, 305);
        
        $.signinInput.visible = false;
        $.signinInputEach.visible = true;
        
        moveNext();
    });
    
    $.signinNext.addEventListener("touchend", function(){
    	moveNext();
	});
	
	$.signinPrev.addEventListener("touchend", function(){
		movePrev();
	});
    
    $.signinButton.addEventListener("touchend", function() {
        var passphrase = $.inputFullPassphrase.value;
        inputverify.set(new Array({
            "name": L("label_recoveryphrase"),
            "type": "password",
            "target": $.inputFullPassphrase,
            "over": 0
        }));
        var result = null;
        if( true == (result = inputverify.check()) ){
            if( false == isCreatingAccount ){
                isCreatingAccount = true;
                loading = util.showLoading($.signin, {
        "width": Ti.UI.FILL,
        "height": Ti.UI.FILL,
        "style": "dark",
        "message": L("label_loading")
    });
                createAccount({ "passphrase": passphrase });
            }
        }
        else {
            var dialog = util.createDialog({
                "message": result.message,
                "buttonNames": [ L("label_close") ]
            });
            dialog.addEventListener("click", function() {
                result.target.focus();
            });
            dialog.show();
        }
    });
	
	$.privecypolicy.addEventListener("touchend", function(){
		Alloy.createController("weblink", {
			"path": Alloy.CFG.dashboard_uri + "terms",
			"barColor":  Alloy.Globals.mainColor
		})
		.getView()
		.open();
	});
}
else {
	alert(L("text_access_deny") + "\nError:1001");
}

$.signin.addEventListener("android:back", function(){
	return true;
});