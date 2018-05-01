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


var CBAttribute = require('/hyperloop/corebluetooth/cbattribute');


/**
 * CoreBluetooth//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreBluetooth.framework/Headers/CBCharacteristic.h
 * @class
 */
function CBCharacteristic (pointer) {
	if (!(this instanceof CBCharacteristic)) {
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
			class: 'CBCharacteristic',
			alloc: true,
			init: 'init'
		});
	}
	CBAttribute.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CBCharacteristic.prototype = Object.create(CBAttribute.prototype, {
	constructor: {
		value: CBCharacteristic,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CBCharacteristic, CBAttribute);

Object.defineProperty(CBCharacteristic, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CBCharacteristic, 'className', {
	value: 'CBCharacteristic',
	enumerable: false,
	writable: true
});

Object.defineProperty(CBCharacteristic.prototype, 'className', {
	value: 'CBCharacteristic',
	enumerable: false,
	writable: true
});

Object.defineProperty(CBCharacteristic.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CBCharacteristic, 'toString', {
	value: function () {
		return '[class CBCharacteristic]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'CBCharacteristic',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CBCharacteristic, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CBCharacteristic, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CBCharacteristic.prototype, {
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'value'));
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

module.exports = CBCharacteristic;
