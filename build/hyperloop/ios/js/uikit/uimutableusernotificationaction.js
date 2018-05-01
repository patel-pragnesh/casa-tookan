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


var UIUserNotificationAction = require('/hyperloop/uikit/uiusernotificationaction');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIUserNotificationSettings.h
 * @class
 */
function UIMutableUserNotificationAction (pointer) {
	if (!(this instanceof UIMutableUserNotificationAction)) {
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
			class: 'UIMutableUserNotificationAction',
			alloc: true,
			init: 'init'
		});
	}
	UIUserNotificationAction.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIMutableUserNotificationAction.prototype = Object.create(UIUserNotificationAction.prototype, {
	constructor: {
		value: UIMutableUserNotificationAction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIMutableUserNotificationAction, UIUserNotificationAction);

Object.defineProperty(UIMutableUserNotificationAction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIMutableUserNotificationAction, 'className', {
	value: 'UIMutableUserNotificationAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIMutableUserNotificationAction.prototype, 'className', {
	value: 'UIMutableUserNotificationAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIMutableUserNotificationAction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIMutableUserNotificationAction, 'toString', {
	value: function () {
		return '[class UIMutableUserNotificationAction]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSDictionary = require('/hyperloop/foundation/nsdictionary');

	$class = Hyperloop.createProxy({
		class: 'UIMutableUserNotificationAction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIMutableUserNotificationAction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIMutableUserNotificationAction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIMutableUserNotificationAction.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		parameters: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDictionary($dispatch(this.$native, 'parameters'));
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

module.exports = UIMutableUserNotificationAction;
