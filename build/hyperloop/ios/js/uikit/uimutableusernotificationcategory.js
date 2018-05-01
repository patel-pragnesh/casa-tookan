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


var UIUserNotificationCategory = require('/hyperloop/uikit/uiusernotificationcategory');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIUserNotificationSettings.h
 * @class
 */
function UIMutableUserNotificationCategory (pointer) {
	if (!(this instanceof UIMutableUserNotificationCategory)) {
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
			class: 'UIMutableUserNotificationCategory',
			alloc: true,
			init: 'init'
		});
	}
	UIUserNotificationCategory.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIMutableUserNotificationCategory.prototype = Object.create(UIUserNotificationCategory.prototype, {
	constructor: {
		value: UIMutableUserNotificationCategory,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIMutableUserNotificationCategory, UIUserNotificationCategory);

Object.defineProperty(UIMutableUserNotificationCategory, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIMutableUserNotificationCategory, 'className', {
	value: 'UIMutableUserNotificationCategory',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIMutableUserNotificationCategory.prototype, 'className', {
	value: 'UIMutableUserNotificationCategory',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIMutableUserNotificationCategory.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIMutableUserNotificationCategory, 'toString', {
	value: function () {
		return '[class UIMutableUserNotificationCategory]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'UIMutableUserNotificationCategory',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIMutableUserNotificationCategory, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIMutableUserNotificationCategory, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIMutableUserNotificationCategory.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
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

module.exports = UIMutableUserNotificationCategory;
