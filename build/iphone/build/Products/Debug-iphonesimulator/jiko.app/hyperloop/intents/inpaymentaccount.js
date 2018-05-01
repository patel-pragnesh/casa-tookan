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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INPaymentAccount.h
 * @class
 */
function INPaymentAccount (pointer) {
	if (!(this instanceof INPaymentAccount)) {
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
			class: 'INPaymentAccount',
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
INPaymentAccount.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INPaymentAccount,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INPaymentAccount, NSObject);

Object.defineProperty(INPaymentAccount, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INPaymentAccount, 'className', {
	value: 'INPaymentAccount',
	enumerable: false,
	writable: true
});

Object.defineProperty(INPaymentAccount.prototype, 'className', {
	value: 'INPaymentAccount',
	enumerable: false,
	writable: true
});

Object.defineProperty(INPaymentAccount.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INPaymentAccount, 'toString', {
	value: function () {
		return '[class INPaymentAccount]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.INBalanceAmount = require('/hyperloop/intents/inbalanceamount');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'INPaymentAccount',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INPaymentAccount, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INPaymentAccount, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INPaymentAccount.prototype, 'init', {
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
	Object.defineProperties(INPaymentAccount.prototype, {
		balance: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.INBalanceAmount($dispatch(this.$native, 'balance'));
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

module.exports = INPaymentAccount;
