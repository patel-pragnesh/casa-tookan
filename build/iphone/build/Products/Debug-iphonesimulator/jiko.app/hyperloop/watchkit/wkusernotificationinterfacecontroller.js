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


var WKInterfaceController = require('/hyperloop/watchkit/wkinterfacecontroller');


/**
 * WatchKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WatchKit.framework/Headers/WKInterfaceController.h
 * @class
 */
function WKUserNotificationInterfaceController (pointer) {
	if (!(this instanceof WKUserNotificationInterfaceController)) {
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
			class: 'WKUserNotificationInterfaceController',
			alloc: true,
			init: 'init'
		});
	}
	WKInterfaceController.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
WKUserNotificationInterfaceController.prototype = Object.create(WKInterfaceController.prototype, {
	constructor: {
		value: WKUserNotificationInterfaceController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKUserNotificationInterfaceController, WKInterfaceController);

Object.defineProperty(WKUserNotificationInterfaceController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKUserNotificationInterfaceController, 'className', {
	value: 'WKUserNotificationInterfaceController',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKUserNotificationInterfaceController.prototype, 'className', {
	value: 'WKUserNotificationInterfaceController',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKUserNotificationInterfaceController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKUserNotificationInterfaceController, 'toString', {
	value: function () {
		return '[class WKUserNotificationInterfaceController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'WKUserNotificationInterfaceController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKUserNotificationInterfaceController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKUserNotificationInterfaceController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(WKUserNotificationInterfaceController.prototype, 'init', {
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



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = WKUserNotificationInterfaceController;
