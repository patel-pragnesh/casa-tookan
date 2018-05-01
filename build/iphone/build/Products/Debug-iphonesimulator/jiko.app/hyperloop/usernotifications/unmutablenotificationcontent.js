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


var UNNotificationContent = require('/hyperloop/usernotifications/unnotificationcontent');


/**
 * UserNotifications//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UserNotifications.framework/Headers/UNNotificationContent.h
 * @class
 */
function UNMutableNotificationContent (pointer) {
	if (!(this instanceof UNMutableNotificationContent)) {
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
			class: 'UNMutableNotificationContent',
			alloc: true,
			init: 'init'
		});
	}
	UNNotificationContent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UNMutableNotificationContent.prototype = Object.create(UNNotificationContent.prototype, {
	constructor: {
		value: UNMutableNotificationContent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UNMutableNotificationContent, UNNotificationContent);

Object.defineProperty(UNMutableNotificationContent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UNMutableNotificationContent, 'className', {
	value: 'UNMutableNotificationContent',
	enumerable: false,
	writable: true
});

Object.defineProperty(UNMutableNotificationContent.prototype, 'className', {
	value: 'UNMutableNotificationContent',
	enumerable: false,
	writable: true
});

Object.defineProperty(UNMutableNotificationContent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UNMutableNotificationContent, 'toString', {
	value: function () {
		return '[class UNMutableNotificationContent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'UNMutableNotificationContent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UNMutableNotificationContent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UNMutableNotificationContent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UNMutableNotificationContent.prototype, {
		body: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'body'));
			},
		
			set: function (_body) {
				if (!$init) { $initialize(); }
				this.$private.body = _body;
				$dispatch(this.$native, 'setBody:', _body);
			},
			enumerable: false
		},
		title: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'title'));
			},
		
			set: function (_title) {
				if (!$init) { $initialize(); }
				this.$private.title = _title;
				$dispatch(this.$native, 'setTitle:', _title);
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

module.exports = UNMutableNotificationContent;
