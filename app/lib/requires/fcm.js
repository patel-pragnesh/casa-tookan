module.exports = (function() {
	var self = {};
	
	var cache = require("requires/cache");
	var util = require("requires/util");
	var network = require("requires/network");
	
	self.start = function( callback ){
		var deviceToken = null;
		function receivePush(e) {
			try{
				var message;
				if( OS_IOS ) message = e.data.aps.alert;
				else message = e.message;
				
				util.createDialog({
					"message": message,
					"buttonNames": [L("label_close")]
				}).show();
			}
			catch(e){
				globals.console.info("Push receive error.");
			}
		}
		function deviceTokenSuccess(e) {
			deviceToken = e.deviceToken;
			network.connectPOST({
				"chain":"btc",
				"version":"v1",
				"method": "devices",
				"post": {
					"user_id":cache.data.id,
					 "device_token": deviceToken,
					 "appver": Ti.App.version,
					 "language": L("language") 
				},
				"callback": function( result ){
					console.log("success device register");
					console.log(result);
					globals.deviceToken = deviceToken;
					callback(true);
				},
				"onError": function(error){
					util.createDialog({
						"title": error.type,
						"message": error.message,
						"buttonNames": [L("label_close")]
					}).show();
					
					callback(false);
				}
			});
		}
		function deviceTokenError(e) {
			globals.console.info("Failed to register for push notifications! " + e.error);
			callback(false);
		}

		if( OS_IOS ){
			if (Ti.Platform.name == "iPhone OS" && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
				Ti.App.iOS.addEventListener("usernotificationsettings", function registerForPush() {
					Ti.App.iOS.removeEventListener("usernotificationsettings", registerForPush); 
					Ti.Network.registerForPushNotifications({
			            "success": deviceTokenSuccess,
			            "error": deviceTokenError,
			            "callback": receivePush
			        });
			    });
			    Ti.App.iOS.registerUserNotificationSettings({
				    "types": [
				        Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
				        Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
				        Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
				    ]
				});
				
				if( Alloy.CFG.isLocal ){
					deviceTokenSuccess({"deviceToken": "f9572370df5e3b2350dacca4023b73c2688265083b7eb1d1de325e2654f2c1e2"});
				}
			}
			else {
				Ti.Network.registerForPushNotifications({
					"types": [
						Ti.Network.NOTIFICATION_TYPE_BADGE,
						Ti.Network.NOTIFICATION_TYPE_ALERT,
						Ti.Network.NOTIFICATION_TYPE_SOUND
					],
					"success": deviceTokenSuccess,
					"error": deviceTokenError,
					"callback": receivePush
				});
			}
		}
		else {
			if( !Alloy.CFG.isDevelopment ){
				var firebase = require("ti.firebase");
				firebase.registerForFCM({
					"success": deviceTokenSuccess,
					"error": deviceTokenError,
					"callback": receivePush
				});
			}
		}
	};
	
    return self;
}());