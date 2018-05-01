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
 * StoreKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/StoreKit.framework/Headers/SKProductDiscount.h
 * @class
 */
function SKProductDiscount (pointer) {
	if (!(this instanceof SKProductDiscount)) {
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
			class: 'SKProductDiscount',
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
SKProductDiscount.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SKProductDiscount,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKProductDiscount, NSObject);

Object.defineProperty(SKProductDiscount, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKProductDiscount, 'className', {
	value: 'SKProductDiscount',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKProductDiscount.prototype, 'className', {
	value: 'SKProductDiscount',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKProductDiscount.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKProductDiscount, 'toString', {
	value: function () {
		return '[class SKProductDiscount]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDecimalNumber = require('/hyperloop/foundation/nsdecimalnumber');

	$class = Hyperloop.createProxy({
		class: 'SKProductDiscount',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKProductDiscount, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKProductDiscount, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKProductDiscount.prototype, {
		price: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDecimalNumber($dispatch(this.$native, 'price'));
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

module.exports = SKProductDiscount;
