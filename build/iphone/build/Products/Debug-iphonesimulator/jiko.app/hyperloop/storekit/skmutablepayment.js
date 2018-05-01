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


var SKPayment = require('/hyperloop/storekit/skpayment');


/**
 * StoreKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/StoreKit.framework/Headers/SKPayment.h
 * @class
 */
function SKMutablePayment (pointer) {
	if (!(this instanceof SKMutablePayment)) {
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
			class: 'SKMutablePayment',
			alloc: true,
			init: 'init'
		});
	}
	SKPayment.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SKMutablePayment.prototype = Object.create(SKPayment.prototype, {
	constructor: {
		value: SKMutablePayment,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKMutablePayment, SKPayment);

Object.defineProperty(SKMutablePayment, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKMutablePayment, 'className', {
	value: 'SKMutablePayment',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKMutablePayment.prototype, 'className', {
	value: 'SKMutablePayment',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKMutablePayment.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKMutablePayment, 'toString', {
	value: function () {
		return '[class SKMutablePayment]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SKMutablePayment',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKMutablePayment, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKMutablePayment, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKMutablePayment.prototype, {
		quantity: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'quantity');
			},
		
			set: function (_quantity) {
				if (!$init) { $initialize(); }
				this.$private.quantity = _quantity;
				$dispatch(this.$native, 'setQuantity:', _quantity);
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

module.exports = SKMutablePayment;
