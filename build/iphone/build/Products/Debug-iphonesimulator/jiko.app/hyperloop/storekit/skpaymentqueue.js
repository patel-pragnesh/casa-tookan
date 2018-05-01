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
 * StoreKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/StoreKit.framework/Headers/SKPaymentQueue.h
 * @class
 */
function SKPaymentQueue (pointer) {
	if (!(this instanceof SKPaymentQueue)) {
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
			class: 'SKPaymentQueue',
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
SKPaymentQueue.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SKPaymentQueue,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKPaymentQueue, NSObject);

Object.defineProperty(SKPaymentQueue, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKPaymentQueue, 'className', {
	value: 'SKPaymentQueue',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKPaymentQueue.prototype, 'className', {
	value: 'SKPaymentQueue',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKPaymentQueue.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKPaymentQueue, 'toString', {
	value: function () {
		return '[class SKPaymentQueue]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'SKPaymentQueue',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKPaymentQueue, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKPaymentQueue, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKPaymentQueue.prototype, {
		transactions: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'transactions'));
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

module.exports = SKPaymentQueue;
