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


var CBCharacteristic = require('/hyperloop/corebluetooth/cbcharacteristic');


/**
 * CoreBluetooth//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreBluetooth.framework/Headers/CBCharacteristic.h
 * @class
 */
function CBMutableCharacteristic (pointer) {
	if (!(this instanceof CBMutableCharacteristic)) {
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
			class: 'CBMutableCharacteristic',
			alloc: true,
			init: 'init'
		});
	}
	CBCharacteristic.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CBMutableCharacteristic.prototype = Object.create(CBCharacteristic.prototype, {
	constructor: {
		value: CBMutableCharacteristic,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CBMutableCharacteristic, CBCharacteristic);

Object.defineProperty(CBMutableCharacteristic, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CBMutableCharacteristic, 'className', {
	value: 'CBMutableCharacteristic',
	enumerable: false,
	writable: true
});

Object.defineProperty(CBMutableCharacteristic.prototype, 'className', {
	value: 'CBMutableCharacteristic',
	enumerable: false,
	writable: true
});

Object.defineProperty(CBMutableCharacteristic.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CBMutableCharacteristic, 'toString', {
	value: function () {
		return '[class CBMutableCharacteristic]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'CBMutableCharacteristic',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CBMutableCharacteristic, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CBMutableCharacteristic, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CBMutableCharacteristic.prototype, 'setValue', {
		value: function (_value) {
			this.$private.setValue = this.$private.setValue || [];
			this.$private.setValue.push(_value);
			var result = $dispatch(this.$native, 'setValue:', [_value], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(CBMutableCharacteristic.prototype, {
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'value'));
			},
		
			set: function (_value) {
				if (!$init) { $initialize(); }
				this.$private.value = _value;
				$dispatch(this.$native, 'setValue:', _value);
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

module.exports = CBMutableCharacteristic;
