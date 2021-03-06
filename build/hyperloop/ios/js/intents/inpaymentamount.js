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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INPaymentAmount.h
 * @class
 */
function INPaymentAmount (pointer) {
	if (!(this instanceof INPaymentAmount)) {
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
			class: 'INPaymentAmount',
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
INPaymentAmount.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INPaymentAmount,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INPaymentAmount, NSObject);

Object.defineProperty(INPaymentAmount, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INPaymentAmount, 'className', {
	value: 'INPaymentAmount',
	enumerable: false,
	writable: true
});

Object.defineProperty(INPaymentAmount.prototype, 'className', {
	value: 'INPaymentAmount',
	enumerable: false,
	writable: true
});

Object.defineProperty(INPaymentAmount.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INPaymentAmount, 'toString', {
	value: function () {
		return '[class INPaymentAmount]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.INCurrencyAmount = require('/hyperloop/intents/incurrencyamount');

	$class = Hyperloop.createProxy({
		class: 'INPaymentAmount',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INPaymentAmount, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INPaymentAmount, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INPaymentAmount.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(INPaymentAmount.prototype, {
		amount: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.INCurrencyAmount($dispatch(this.$native, 'amount'));
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

module.exports = INPaymentAmount;
