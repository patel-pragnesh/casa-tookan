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
 * WatchKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WatchKit.framework/Headers/WKInterfaceDevice.h
 * @class
 */
function WKInterfaceDevice (pointer) {
	if (!(this instanceof WKInterfaceDevice)) {
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
			class: 'WKInterfaceDevice',
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
WKInterfaceDevice.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WKInterfaceDevice,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKInterfaceDevice, NSObject);

Object.defineProperty(WKInterfaceDevice, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKInterfaceDevice, 'className', {
	value: 'WKInterfaceDevice',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKInterfaceDevice.prototype, 'className', {
	value: 'WKInterfaceDevice',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKInterfaceDevice.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKInterfaceDevice, 'toString', {
	value: function () {
		return '[class WKInterfaceDevice]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'WKInterfaceDevice',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKInterfaceDevice, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKInterfaceDevice, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(WKInterfaceDevice.prototype, {
		model: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'model'));
			},
		
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
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

module.exports = WKInterfaceDevice;
