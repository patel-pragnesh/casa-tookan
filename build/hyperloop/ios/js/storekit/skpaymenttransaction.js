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
 * StoreKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/StoreKit.framework/Headers/SKPaymentTransaction.h
 * @class
 */
function SKPaymentTransaction (pointer) {
	if (!(this instanceof SKPaymentTransaction)) {
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
			class: 'SKPaymentTransaction',
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
SKPaymentTransaction.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SKPaymentTransaction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKPaymentTransaction, NSObject);

Object.defineProperty(SKPaymentTransaction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKPaymentTransaction, 'className', {
	value: 'SKPaymentTransaction',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKPaymentTransaction.prototype, 'className', {
	value: 'SKPaymentTransaction',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKPaymentTransaction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKPaymentTransaction, 'toString', {
	value: function () {
		return '[class SKPaymentTransaction]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSError = require('/hyperloop/foundation/nserror');

	$class = Hyperloop.createProxy({
		class: 'SKPaymentTransaction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKPaymentTransaction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKPaymentTransaction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKPaymentTransaction.prototype, {
		error: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSError($dispatch(this.$native, 'error'));
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

module.exports = SKPaymentTransaction;
