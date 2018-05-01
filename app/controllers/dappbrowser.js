
var args = arguments[0] || {};
 
var win = Ti.UI.createWindow({
	"orientationModes": [Ti.UI.PORTRAIT],
	"navBarHidden": true,
	"backgroundColor": "transparent",
	"windowSoftInputMode": (OS_ANDROID)? Ti.UI.Android.SOFT_INPUT_STATE_ALWAYS_HIDDEN: null
});
$.main.height = Ti.Platform.displayCaps.platformHeight;

$.main.top = Ti.Platform.displayCaps.platformHeight;
win.add($.dappbrowser);
win.open();


 var blockchain = require("requires/blockchain");
 var transactionParser = require("vendor/util/transactionParser.js");

 var checkDataInterval = null;
 var webView = null;
 var didPostLayout = false;
 var ethereum = require("requires/ethereum");
 var bitcoin = require("requires/bitcoin");


 var checkIfLoadedTimeout = null;　
 var util = require("requires/util");
 auth = require("requires/auth");

 var accountUnlocked = false;

 var url = args.url;
 
 if(url.indexOf("https:") == -1){
 	url.split(' ').join('+');
 url = "https://www.google.com/search?q="+url;	
 }
 console.log(url);

 var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'web3indie.txt');
 var web3Script = f.read().text;

 function getCurrentUrl() {
     if (OS_IOS) {
         return webView.URL;
     } else {
         return webView.getUrl();
     }

 }

 function isTrustedDapp(dappUrl) {
     return true;
     if (dappUrl == "http://localhost:4200") {
         return true;
     } else {
         return false;
     }
 }

 //if (isTrustedDapp(getCurrentUrl())) {

 accountUnlocked = true;

 //}
 var tabBarSize = 40;
 if(Alloy.Globals.isiPhoneX){
 	tabBarSize = 52;
 }
 var webViewHeight = 0;


 $.topBar.top = 0;
 
 $.search.width =  Ti.Platform.displayCaps.platformWidth - 30; 
 
 if (OS_ANDROID) {
     $.topBar.height = 30;
 } else if (OS_IOS) {
     $.topBar.height = 42;
     
     $.search.tintColor = "white";
      $.search.showCancel = false;
     $.search.style =  Ti.UI.iOS.SEARCH_BAR_STYLE_MINIMAL;
 
     $.rightOptions.bottom = 17;
     
     if(Alloy.Globals.isiPhoneX){
     	$.topBar.height = 95;
      
     $.rightOptions.bottom = 17;
     }
 }

function close(){
	Alloy.Globals.lastAction = null;
	console.log("closed2");
	$.main.animate({
	    "top": Ti.Platform.displayCaps.platformHeight,
	    "duration": 400
	});
	
	setTimeout(function() {
    	win.close();
    }, 400);
}

$.tabhome.addEventListener("click", function(){
	console.log("closed");
	close();
});

$.tabback.addEventListener("click", function(){
	goBack();
});

$.tabforward.addEventListener("click", function(){
	goFoward();
});




 
 $.topBar.layout = "absolute";
 
 webTop = $.topBar.height +$.topBar.top;
 
 if (OS_ANDROID) {
     $.web.top = webTop;
 }

 webViewHeight = Ti.Platform.displayCaps.platformHeight - $.tabbar.height - $.topBar.height - $.topBar.top;




 if (OS_IOS) {

     var TiApp = require('Titanium/TiApp');
     var WebKit = require('WebKit');
     var web3 = require('web3/browser');

     var web3Obj = new web3();

     var lock = false;
     var WKWebView = require("WebKit/WKWebView"),
     	
         WKNavigation = require("WebKit/WKNavigation"),
         NSURLRequest = require("Foundation/NSURLRequest"),
         NSURL = require("Foundation/NSURL"),
         UIScreen = require("UIKit/UIScreen"),
         CGRectMake = require('CoreGraphics').CGRectMake;
     // function tht creates our delegate
     function createWebViewDelegate() {
         var WebViewDelegate = Hyperloop.defineClass('WebViewDelegate', 'NSObject', ['WKNavigationDelegate']);
         WebViewDelegate.addMethod({
             selector: 'webView:didFinishNavigation:',
             instance: true,
             arguments: ['WKWebView', 'WKNavigation'],
             callback: function(webView, navigation) {
                 if (this.didFinishNavigation) {
                     this.didFinishNavigation(webView, navigation);
                 }
             }
         });
         WebViewDelegate.addMethod({
             selector: 'webView:didStartProvisionalNavigation:',
             instance: true,
             arguments: ['WKWebView', 'WKNavigation'],
             callback: function(webView, navigation) {
                 if (this.didStartProvisionalNavigation) {
                     this.didStartProvisionalNavigation(webView, navigation);
                 }
             }
         });
         return WebViewDelegate;
     }

     function loadWebViewIOS() {
          
         webView = web3Obj.getBrowserAndHeightAndUrlAndController(Ti.Platform.displayCaps.platformWidth, webViewHeight, url, TiApp.app());
	webView.allowsBackForwardNavigationGestures = true;
         $.web.add(webView);
         $.web.top = webTop;
         // init a new WKWebView, plus delegate
         WebViewDelegate = createWebViewDelegate(),
             delegate = new WebViewDelegate();
         // need an add event listener method for Ti & Alloy


         webView.addEventListener = function(event, handler) {
             webView[event] = handler;
         };
         // need a remove event listener method
         webView.removeEventListener = function(event, handler) {
             webView[event] = null;
             delete webView[event];
         };
         // need a fire event method
         webView.fireEvent = function(event, args) {
             webView[event] && webView[event](args);
         };

         // fire our load event -- you could also just do webView.load()
         delegate.didFinishNavigation = function(webView, navigation) {
			 lock = false;
             $.activityIndicator.hide();
             $.reloadButton.show();
             updateButtons();
             webView.fireEvent("load", {
                 url: getCurrentUrl()
             });

             startCheckData();


         };
         // fire our load event -- you could also just do webView.load()
         delegate.didStartProvisionalNavigation = function(webView, navigation) {
             $.activityIndicator.show();
             $.reloadButton.hide();
         };
         // Assign the deleate to the webView
         webView.setNavigationDelegate(delegate);
     };




 } else if (OS_ANDROID) {

     var WebView = require("android.webkit.WebView");
     var WebViewClient = require("android.webkit.WebViewClient");
     var ValueCallback = require("android.webkit.ValueCallback");
     var WebChromeClient = require("android.webkit.WebChromeClient");
     var ConsoleMessage = require("android.webkit.ConsoleMessage");
     var JsResult = require("android.webkit.JsResult");
     var Activity = require('android.app.Activity');

     var LayoutParams = require('android.widget.FrameLayout.LayoutParams');



     var Gravity = require('android.view.Gravity');

     function loadWebViewAndroid() {

         webViewHeight = Ti.Platform.displayCaps.platformHeight - ((tabBarSize * Ti.Platform.displayCaps.logicalDensityFactor) * 2) - webTop;


         var activity = new Activity(Ti.Android.currentActivity);

         webView = new WebView(activity);
         webView.getSettings().setJavaScriptEnabled(true);
         webView.setWebChromeClient(new WebChromeClient()); // opens links inside same chrome webview 
         webView.setWebViewClient(new WebViewClient()); // opens links inside same webview 



         var layoutParams = new LayoutParams(Ti.Platform.displayCaps.platformWidth, webViewHeight, Gravity.TOP);
         webView.setLayoutParams(layoutParams);
         $.web.add(webView);

         webView.getSettings().setDomStorageEnabled(true);

         webView.getSettings().setDatabaseEnabled(true);


         webView.loadUrl(url);


         globals.callCheckIfLoaded = function() {
			
			if(checkIfLoadedTimeout != null){
				clearTimeout(checkIfLoadedTimeout);	
			}
             checkIfLoadedTimeout = setTimeout(function() {
                 checkIfLoaded();
             }, 1000);

         }
         
         setInterval(function(){checkButtons();},1000);
		
		function checkButtons(){
			if(Alloy.Globals.currentTab != 3){
	return;	
}
		 //console.log("check buttons");
             webView.evaluateJavascript("document.readyState", new ValueCallback({

                 onReceiveValue: function(res) {
                     updateButtons();
                     if (res == "\"loading\"") {
                         $.activityIndicator.show();
                         $.reloadButton.hide();

                     } else {
                         $.activityIndicator.hide();
                         $.reloadButton.show();

                     }
                     return false;
                 }
             })); 	
		}
         function checkIfLoaded() {
if(Alloy.Globals.currentTab != 3){
	return;	
}



             webView.evaluateJavascript("typeof web3", new ValueCallback({

                 onReceiveValue: function(res) {

                     if (res == "\"undefined\"") {



                         var injectjs =
                             "function injectCode() {if(typeof web3 === 'undefined'){var parent = document.getElementsByTagName('head').item(0);" +
                             "var script = document.createElement('script');" +
                             "script.type = 'text/javascript';" +
                             "script.innerHTML =  " + web3Script + ";" +
                             "parent.appendChild(script); return 'injected'}else {return 'already added'}} injectCode();";

                         webView.evaluateJavascript(injectjs, new ValueCallback({
                             onReceiveValue: function(s) {

                                 if (s != "'already added'") {

                                     console.log(s);

                                     startCheckData();

                                    globals.callCheckIfLoaded();

                                 }

                                 return false;
                             }
                         }));


                     } else {
						 
                          globals.callCheckIfLoaded();

                     }
                     return false;
                 }
             }));


         }
         console.log("called from there");
         checkIfLoaded();

     }

 }


 function loadWebView() {
console.log("start load webview");
     if (OS_IOS) {
         setTimeout(function() {
             loadWebViewIOS();
         }, 100);

     } else if (OS_ANDROID) {
         setTimeout(function() {
             if (didPostLayout == false) {
                 didPostLayout = true;
                 loadWebViewAndroid();

             }
         }, 500);

     }
 }



 function updateButtons() {
 	var canGoBack;
 	var canGoForward;
 	if(OS_ANDROID){ 
 	 	if(getCurrentUrl() == url){
 	 		canGoBack = false;
 	 	}else {
 	 		canGoBack = true;
 	 	}
 	}
 	else if(OS_IOS){
 		canGoBack = webView.canGoBack;
 	}
 	
 	if(OS_ANDROID){ 
 	 	 
 	 		canGoForward = false;
 	  
 	}
 	else if(OS_IOS){
 		canGoForward = webView.canGoForward;
 	}
 	
     if(canGoBack){
     	 

     	$.tabBackImage.image = "/images/browser_left.png";
     	
		}
		else{
		$.tabBackImage.image = "/images/browser_left_inactive.png";
			 
			}
			
			 if(canGoForward){
     	 

     	$.tabForwardImage.image = "/images/browser_right.png";
     	
		}
		else{
		$.tabForwardImage.image = "/images/browser_right_inactive.png";
			 
			}
 }

 
 function goBack() {
 	
     if (webView.canGoBack) {
         webView.goBack();
         updateButtons();

     }
 }


 function goFoward() {
 	
     if (webView.canGoForward) {
     	console.log("Can go foward");
         webView.goForward();
         updateButtons();

     }else{
     		console.log("cant go foward");
     	}
 }
 
$.search.addEventListener('blur', function(e){
	 
	loadUrl(e.source.value); 
});
$.search.addEventListener('return', function(e){
	$.search.blur(); 
});

$.search.addEventListener('cancel', function(e){
	$.search.blur(); 
});

function loadUrl(newUrl){
	console.log(newUrl);
	if(newUrl.length > 0){
		url = newUrl;	
		
		 if(url.indexOf("http:") == -1 || url.indexOf("https:") == -1){
 	url.split(' ').join('+');
 url = "https://www.google.com/search?q="+url;	
 }
 console.log(url);

 if(OS_ANDROID){
 webView.loadUrl(url);
 }
 else if(OS_IOS){
webView.loadRequest(NSURLRequest.alloc().initWithURL(NSURL.alloc().initWithString(url)));
 
 
 	
 }
 
	}
	
	
}

 function reload() {

     if (OS_ANDROID) {
         webView.clearCache(true);
     }

     webView.reload();
 }

 function startCheckData() {
     if (checkDataInterval != null) {
         clearInterval(checkDataInterval);
     }
     checkDataInterval = setInterval(function() {
         checkData();
     }, 500);
 }

 function evaluateJS(js, callback) {

     if (OS_IOS) {
         webView.evaluateJavaScriptCompletionHandler(js, function(response, error) {

             callback(response, error);
         });
     } else if (OS_ANDROID) {

         webView.evaluateJavascript(js, new ValueCallback({
             onReceiveValue: function(response) {

                 if (response == "null") {
                     callback(undefined, null);
                 } else {

                     response = response.substring(1, response.length - 1); //remove string quotes
                     response = response.replace(/\\/g, ""); //string backslashes from json string


                     callback(response, null);
                 }

                 return false;
             }
         }));


     }



 }


 function checkData() {

     if (lock == true) {
         console.debug("locked");
         return;
     }
     console.debug("unlocked");
     if (webView != null) {

         evaluateJS("if(typeof web3 !== 'undefined' && typeof GET_CURRENT_TASK !== 'undefined'){GET_CURRENT_TASK();}", function(evalResult, error) {
             //  evaluateJS("GET_CURRENT_TASK()", function(evalResult, error) {

             if (error != null) {
                 alert(error);
                 lock = false;
                 return;
             }

             if (evalResult != undefined && evalResult != "undefined") {

                 try {
                     evalResult = JSON.parse(evalResult);
                 } catch (e) {
                     console.log(e);
                     return;
                 }
                 console.log(evalResult);
                 console.log("gm" + evalResult.chain);
                 if (evalResult.chain == "eth") {
                     console.log("raw " + evalResult.type);
                     if (evalResult.type == "getAccount") {
                         lock = true;
                         handleGetAccountEth(evalResult);
                     } else if (evalResult.type == "signMessage") {
                         lock = true;
                         handleSignMessageEth(evalResult);
                     } else if (evalResult.type == "signTransaction") {
                         lock = true;
                         handleSignTransactionEth(evalResult);
                     } else if (evalResult.type == "sendTransaction") {
                         lock = true;
                         handleSendTransactionEth(evalResult);
                     } else {
                         clearTask();
                         clearCallback('type not supported');
                     }
                 } else if (evalResult.chain == "XCP") {
                     if (evalResult.type == "getAccount") {
                         lock = true;
                         handleGetAccountXCP(evalResult);
                     } else if (evalResult.type == "signMessage") {
                         lock = true;
                         handleSignMessageXCP(evalResult);
                     } else if (evalResult.type == "signTransaction") {
                         lock = true;
                         handleSignTransactionXCP(evalResult);
                     } else {
                         clearTask();
                         clearCallback('type not supported');
                     }
                 }
             } else {
                 lock = false;
             }
         });
     } else {
         lock = false;
     }
 }

 function clearTask() {
     evaluateJS("CLEAR_TASK()", function(response, error) {
         if (error != undefined) {
             console.error(error);
         }
         lock = false;
     });
 }

 function clearCallback(err) {
     evaluateJS("CLEAR_CALLBACK('" + err + "')", function(response, error) {
         if (error != undefined) {
             console.error(error);
         }
         lock = false;
     });
 }

 function handleGetAccountEth(evalResult) {
     function returnAccount() {
         var account = ethereum.getAddress();
         var returnMessage = JSON.stringify({
             "chain": evalResult.chain,
             "type": evalResult.type,
             "data": account
         });
         evaluateJS("START_CALLBACK('" + returnMessage + "')", function(response, error) {
             if (error != undefined) {
                 console.error(error);
             }
             lock = false;
         });
     }
     if (accountUnlocked == true) {
         returnAccount();
         return;
     }
     var dialog = util.createDialog({
         title: L("label_confirm"),
         message: L('text_request_address').format( { "url": getCurrentUrl() }),
         buttonNames: [L("label_cancel"), L("label_ok")]
     });
     dialog.addEventListener("click", function(e) {
         if (e.index != e.source.cancel) {
             auth.check({
                 title: L("text_confirmsend"),
                 callback: function(e) {
                     if (e.success) {
                         accountUnlocked = true;
                         returnAccount();
                     } else {
                         clearTask();
                         clearCallback('user cancelled');
                     }
                 }
             });
         } else {
             clearTask();
             clearCallback('user cancelled');
         }
     });
     dialog.show();
 }

 function handleSignMessageEth(evalResult) {
     var message = evalResult.data.data;
     var dialog = util.createDialog({
         title: L("label_confirm"),
         message:L('text_request_sign_message').format( { "url": getCurrentUrl(), "message":message, "address":ethereum.getAddress() }),
         buttonNames: [L("label_cancel"), L("label_ok")]
     });
     dialog.addEventListener("click", function(e) {
         if (e.index != e.source.cancel) {
             auth.check({
                 title: L("text_confirmsend"),
                 callback: function(e) {
                     if (e.success) {
                         var sig = ethereum.signMessage(message);
                         var returnMessage = JSON.stringify({
                             "chain": evalResult.chain,
                             "type": evalResult.type,
                             "data": sig
                         });
                         console.log(sig);
                         evaluateJS("START_CALLBACK('" + returnMessage + "')", function(response, error) {
                             if (error != undefined) {
                                 console.error(error);
                             }
                             lock = false;
                         });
                     } else {
                         clearTask();
                         clearCallback('user cancelled');
                     }
                 }
             });
         } else {
             clearTask();
             clearCallback('user cancelled');
         }
     });
     dialog.show();
 }

 function handleSignTransactionEth(evalResult) {
     function confirmTransaction(message) {
         var dialog = util.createDialog({
             title: L("label_confirm"),
             message: message,
             buttonNames: [L("label_cancel"), L("label_ok")]
         });
         dialog.addEventListener("click", function(e) {
             if (e.index != e.source.cancel) {
                 auth.check({
                     title: L("text_confirmsend"),
                     callback: function(e) {
                         if (e.success) {
                             var sig = ethereum.sign(evalResult.data);

                             var returnMessage = JSON.stringify({
                                 "chain": evalResult.chain,
                                 "type": evalResult.type,
                                 "data": sig
                             });
                             console.log(returnMessage);
                             evaluateJS("START_CALLBACK('" + returnMessage + "')", function(response, error) {
                                 if (error != undefined) {
                                     console.error(error);
                                 }
                                 lock = false;
                             });
                         } else {
                             clearTask();
                             clearCallback('user cancelled');
                         }
                     }
                 });
             } else {
                 clearTask();
                 clearCallback('user cancelled');
             }
         });
         dialog.show();
     }
     lock = true;
     var contractData = evalResult.data.data;
     if (contractData.substring(0, ethereum.tokenTransferMethod.length) == ethereum.tokenTransferMethod) {
         blockchain.API.getToken({
         	 "chain":blockchain.ETHEREUM,
             "contractAddress": evalResult.data.to,
             "callback": function(tokeninfo) {
                 var unpackedData = ethereum.unpackData(contractData, parseInt(tokeninfo.decimals));
                 console.log(unpackedData);
                 var message = L('text_request_sign_transaction_eth').format( { "url": getCurrentUrl(), "amount":unpackedData.amount, "token":tokeninfo.name, "destination":unpackedData.to });
                 confirmTransaction(message);
             },
             "onError": function(error) {
                 clearTask();
                 clearCallback(error);
             },
             "always": function() {}
         });
     } else {
         var message = L('text_request_sign_transaction_eth').format( { "url": getCurrentUrl(), "amount":ethereum.weiToEther(ethereum.hexToDecimal(evalResult.data.value)), "token":"ether", "destination":unpackedData.to });
         confirmTransaction(message);
     }
 }

 function handleSendTransactionEth(evalResult) {
     function confirmTransaction(message) {
         var dialog = util.createDialog({
             title: L("label_confirm"),
             message: message,
             buttonNames: [L("label_cancel"), L("label_ok")]
         });
         dialog.addEventListener("click", function(e) {
             if (e.index != e.source.cancel) {
                 auth.check({
                     title: L("text_confirmsend"),
                     callback: function(e) {
                         if (e.success) {
                             var sig = ethereum.sign(evalResult.data);

                             blockchain.API.broadcast({
                                 "signed_tx": sig,
                                 "callback": function(result) {
                                     console.log(result);

                                     var returnMessage = JSON.stringify({
                                         "chain": evalResult.chain,
                                         "type": evalResult.type,
                                         "data": result.hash
                                     });
                                     console.log(returnMessage);
                                     evaluateJS("START_CALLBACK('" + returnMessage + "')", function(response, error) {
                                         if (error != undefined) {
                                             console.error(error);
                                         }
                                         lock = false;
                                     });

                                 },
                                 "onError": function(error) {
                                     clearTask();
                                     clearCallback(error);
                                 },
                                 "always": function() {}
                             });




                         } else {
                             clearTask();
                             clearCallback('user cancelled');
                         }
                     }
                 });
             } else {
                 clearTask();
                 clearCallback('user cancelled');
             }
         });
         dialog.show();
     }
     lock = true;
     var contractData = evalResult.data.data;
     if (contractData.substring(0, ethereum.tokenTransferMethod.length) == ethereum.tokenTransferMethod) {
         blockchain.API.getToken({
         	"chain":blockchain.ETHEREUM,
             "contractAddress": evalResult.data.to,
             "callback": function(tokeninfo) {
                 var unpackedData = ethereum.unpackData(contractData, parseInt(tokeninfo.decimals));
                 console.log(unpackedData);
                 var message = L('text_request_send_transaction').format( { "url": getCurrentUrl(), "amount":unpackedData.amount, "token":tokeninfo.name, "destination":unpackedData.to });
                 confirmTransaction(message);
             },
             "onError": function(error) {
                 clearTask();
                 clearCallback(error);
             },
             "always": function() {}
         });
     } else {
         var message = L('text_request_send_transaction').format( { "url": getCurrentUrl(), "amount":ethereum.weiToEther(ethereum.hexToDecimal(evalResult.data.value)), "token":"ether", "destination":unpackedData.to });
      
         confirmTransaction(message);
     }
 }

 function handleGetAccountXCP(evalResult) {
     console.log("getting account");

     function returnAccount() {
         var account = bitcoin.getAddressForPath(evalResult.basePath);
         var returnMessage = JSON.stringify({
             "chain": evalResult.chain,
             "type": evalResult.type,
             "data": account
         });
         console.log("return "+returnMessage);
         evaluateJS("START_CALLBACK('" + returnMessage + "')", function(response, error) {
             if (error != undefined) {
                 console.error(error);
             }
             lock = false;
         });
     }

     if (accountUnlocked == true) {
         returnAccount();
         return;
     }
     var dialog = util.createDialog({
         title: L("label_confirm"),
         message:L('text_request_address').format( { "url": getCurrentUrl() }),
         buttonNames: [L("label_cancel"), L("label_ok")]
     });
     dialog.addEventListener("click", function(e) {
         if (e.index != e.source.cancel) {
             auth.check({
                 title: L("text_confirmsend"),
                 callback: function(e) {
                     if (e.success) {
                         accountUnlocked = true;
                         returnAccount();
                     } else {
                         clearTask();
                         clearCallback('user cancelled');
                     }
                 }
             });
         } else {
             clearTask();
             clearCallback('user cancelled');
         }
     });
     dialog.show();
 }

 function handleSignMessageXCP(evalResult) {

     var message = evalResult.data;
     var dialog = util.createDialog({
         title: L("label_confirm"),
         message: L('text_request_sign_message').format( { "url": getCurrentUrl(), "message":message, "address":bitcoin.getAddressForPath(evalResult.basePath) }),
         buttonNames: [L("label_cancel"), L("label_ok")]
     });
     console.log(message);
     
     
     function continueSignMsg(e){
     	if (e.index != e.source.cancel) { 
             auth.check({
                 title: L("text_confirmsend"),
                 callback: function(e) {
                     if (e.success) { 
                         var sig = bitcoin.signMessage(message,evalResult.basePath);
                         var returnMessage = JSON.stringify({
                             "chain": evalResult.chain,
                             "type": evalResult.type,
                             "data": sig
                         });
                         console.log(sig);
                         evaluateJS("START_CALLBACK('" + returnMessage + "')", function(response, error) {
                             if (error != undefined) {
                                 console.error(error);
                             }
                             lock = false;
                         });
                     } else {
                         clearTask();
                         clearCallback('user cancelled');
                     }
                 }
             });
         } else {
             clearTask();
             clearCallback('user cancelled');
         }
         } 
     setTimeout(function(){
      dialog.addEventListener("click", function(e) {
     	  continueSignMsg(e);
     });
     },100);
     dialog.show();
 }


 function handleSignTransactionXCP(evalResult) {

     function confirmTransaction(message) {
         var dialog = util.createDialog({
             title: L("label_confirm"),
             message: message,
             buttonNames: [L("label_cancel"), L("label_ok")]
         });
         dialog.addEventListener("click", function(e) {
             if (e.index != e.source.cancel) {
                 auth.check({
                     title: L("text_confirmsend"),
                     callback: function(e) {
                         if (e.success) {
                             var sig = bitcoin.sign(evalResult.data,evalResult.basePath);
                             var returnMessage = JSON.stringify({
                                 "chain": evalResult.chain,
                                 "type": evalResult.type,
                                 "data": sig
                             });
                             console.log(returnMessage);
                             evaluateJS("START_CALLBACK('" + returnMessage + "')", function(response, error) {
                                 if (error != undefined) {
                                     console.error(error);
                                 }
                                 lock = false;
                             });
                         } else {
                             clearTask();
                             clearCallback('user cancelled');
                         }
                     }
                 });
             } else {
                 clearTask();
                 clearCallback('user cancelled');
             }
         });
         dialog.show();
     }
     lock = true;
     console.log(evalResult);



     transactionParser.decodeBitcoinTransaction(evalResult.data, function(decodedTransaction, error) {

         if (error != null) {
             clearTask();
             clearCallback('transaction parse error');
             return;
         } 
         
         console.log(decodedTransaction);
         var message = L('text_sign_request').format({"url":getCurrentUrl()});

         for (var i = 0; i < decodedTransaction.outputs.length; i++) {

             var anOutput = decodedTransaction.outputs[i];
             console.log(anOutput);
             message += "\n\n"+L('text_output')+" " + (i + 1) + ":\n";
             if (anOutput.type == "enhanced send" || anOutput.type == "pubkeyhash") {
                 message += anOutput.value + " " + anOutput.token + " to " + anOutput.address;
             } else if (anOutput.type == "order") {
                 message += L('text_order')+" give:" + " " + anOutput.give_value + " " + anOutput.give_token + " get:" + anOutput.get_value + " " + anOutput.get_token;
             } else if (anOutput.type == "cancel") {
                 message += L('text_cancel_order')+ " " + anOutput.txid;
             } else {
                 message += L('text_unknown_data');
             } 

         }

          
         message += "\n\n"+L('label_fee')+" " + (decodedTransaction.fees / 100000000) + " BTC";

         confirmTransaction(message);
     });


 }
 loadWebView();
 

globals.updateDappUI = function(){
	
	
	
}; 
$.main.animate({
	"top": 0,
    "duration": 400
});
