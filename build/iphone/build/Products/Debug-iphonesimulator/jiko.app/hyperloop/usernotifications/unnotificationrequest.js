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


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * UserNotifications//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UserNotifications.framework/Headers/UNNotificationRequest.h
 * @class
 */
function UNNotificationRequest (pointer) {
	if (!(this instanceof UNNotificationRequest)) {
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
			class: 'UNNotificationRequest',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UNNotificationRequest.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UNNotificationRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UNNotificationRequest, NSObject);

Object.defineProperty(UNNotificationRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UNNotificationRequest, 'className', {
	value: 'UNNotificationRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(UNNotificationRequest.prototype, 'className', {
	value: 'UNNotificationRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(UNNotificationRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UNNotificationRequest, 'toString', {
	value: function () {
		return '[class UNNotificationRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UNNotificationContent = require('/hyperloop/usernotifications/unnotificationcontent');
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.UNNotificationTrigger = require('/hyperloop/usernotifications/unnotificationtrigger');

	$class = Hyperloop.createProxy({
		class: 'UNNotificationRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UNNotificationRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UNNotificationRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UNNotificationRequest.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UNNotificationRequest.prototype, {
		content: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UNNotificationContent($dispatch(this.$native, 'content'));
			},
		
			enumerable: false
		},
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		trigger: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UNNotificationTrigger($dispatch(this.$native, 'trigger'));
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

module.exports = UNNotificationRequest;
