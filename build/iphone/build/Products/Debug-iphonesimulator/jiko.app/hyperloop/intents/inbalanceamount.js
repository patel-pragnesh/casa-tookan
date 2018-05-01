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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INBalanceAmount.h
 * @class
 */
function INBalanceAmount (pointer) {
	if (!(this instanceof INBalanceAmount)) {
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
			class: 'INBalanceAmount',
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
INBalanceAmount.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INBalanceAmount,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INBalanceAmount, NSObject);

Object.defineProperty(INBalanceAmount, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INBalanceAmount, 'className', {
	value: 'INBalanceAmount',
	enumerable: false,
	writable: true
});

Object.defineProperty(INBalanceAmount.prototype, 'className', {
	value: 'INBalanceAmount',
	enumerable: false,
	writable: true
});

Object.defineProperty(INBalanceAmount.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INBalanceAmount, 'toString', {
	value: function () {
		return '[class INBalanceAmount]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDecimalNumber = require('/hyperloop/foundation/nsdecimalnumber');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'INBalanceAmount',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INBalanceAmount, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INBalanceAmount, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INBalanceAmount.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSObject(result);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(INBalanceAmount.prototype, {
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

module.exports = INBalanceAmount;
