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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INCurrencyAmount.h
 * @class
 */
function INCurrencyAmount (pointer) {
	if (!(this instanceof INCurrencyAmount)) {
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
			class: 'INCurrencyAmount',
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
INCurrencyAmount.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INCurrencyAmount,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INCurrencyAmount, NSObject);

Object.defineProperty(INCurrencyAmount, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INCurrencyAmount, 'className', {
	value: 'INCurrencyAmount',
	enumerable: false,
	writable: true
});

Object.defineProperty(INCurrencyAmount.prototype, 'className', {
	value: 'INCurrencyAmount',
	enumerable: false,
	writable: true
});

Object.defineProperty(INCurrencyAmount.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INCurrencyAmount, 'toString', {
	value: function () {
		return '[class INCurrencyAmount]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDecimalNumber = require('/hyperloop/foundation/nsdecimalnumber');

	$class = Hyperloop.createProxy({
		class: 'INCurrencyAmount',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INCurrencyAmount, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INCurrencyAmount, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INCurrencyAmount.prototype, 'init', {
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
	Object.defineProperties(INCurrencyAmount.prototype, {
		amount: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDecimalNumber($dispatch(this.$native, 'amount'));
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

module.exports = INCurrencyAmount;
