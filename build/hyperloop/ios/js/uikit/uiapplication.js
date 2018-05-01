/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports,
	$class;


var UIResponder = require('/hyperloop/uikit/uiresponder');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIApplication.h
 * @class
 */
function UIApplication (pointer) {
	if (!(this instanceof UIApplication)) {
		throw new TypeError('Cannot instantiate a class by calling it as a function');
	}

	if (!$init) {
		$initialize();
	}

	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer.$native ? pointer.$native : pointer);
		if (oldWrapper) {
			if (oldWrapper.__proto__ !== this.__proto__) {
				oldWrapper = Object.setPrototypeOf(oldWrapper, this.__proto__);
			}
			return oldWrapper;
		}
	}

	if (!pointer) {
		pointer = Hyperloop.createProxy({
			class: 'UIApplication',
			alloc: true,
			init: 'init'
		});
	}
	UIResponder.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIApplication.prototype = Object.create(UIResponder.prototype, {
	constructor: {
		value: UIApplication,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIApplication, UIResponder);

Object.defineProperty(UIApplication, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIApplication, 'className', {
	value: 'UIApplication',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIApplication.prototype, 'className', {
	value: 'UIApplication',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIApplication.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIApplication, 'toString', {
	value: function () {
		return '[class UIApplication]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'UIApplication',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIApplication, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIApplication, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIApplication.prototype, 'openURL', {
		value: function (_url) {
			this.$private.openURL = this.$private.openURL || [];
			this.$private.openURL.push(_url);
			var result = $dispatch(this.$native, 'openURL:', [_url], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIApplication.prototype, 'registerUserNotificationSettings', {
		value: function (_notificationSettings) {
			this.$private.registerUserNotificationSettings = this.$private.registerUserNotificationSettings || [];
			this.$private.registerUserNotificationSettings.push(_notificationSettings);
			var result = $dispatch(this.$native, 'registerUserNotificationSettings:', [_notificationSettings], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIApplication.prototype, 'scheduleLocalNotification', {
		value: function (_notification) {
			this.$private.scheduleLocalNotification = this.$private.scheduleLocalNotification || [];
			this.$private.scheduleLocalNotification.push(_notification);
			var result = $dispatch(this.$native, 'scheduleLocalNotification:', [_notification], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIApplication.prototype, 'setMinimumBackgroundFetchInterval', {
		value: function (_minimumBackgroundFetchInterval) {
			this.$private.setMinimumBackgroundFetchInterval = this.$private.setMinimumBackgroundFetchInterval || [];
			this.$private.setMinimumBackgroundFetchInterval.push(_minimumBackgroundFetchInterval);
			var result = $dispatch(this.$native, 'setMinimumBackgroundFetchInterval:', [_minimumBackgroundFetchInterval], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UIApplication.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		windows: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'windows'));
			},
		
			enumerable: false
		}
	});

	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = UIApplication;
