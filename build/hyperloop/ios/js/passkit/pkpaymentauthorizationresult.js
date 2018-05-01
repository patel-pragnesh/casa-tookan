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
 * PassKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PassKit.framework/Headers/PKPaymentRequestStatus.h
 * @class
 */
function PKPaymentAuthorizationResult (pointer) {
	if (!(this instanceof PKPaymentAuthorizationResult)) {
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
			class: 'PKPaymentAuthorizationResult',
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
PKPaymentAuthorizationResult.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PKPaymentAuthorizationResult,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PKPaymentAuthorizationResult, NSObject);

Object.defineProperty(PKPaymentAuthorizationResult, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PKPaymentAuthorizationResult, 'className', {
	value: 'PKPaymentAuthorizationResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPaymentAuthorizationResult.prototype, 'className', {
	value: 'PKPaymentAuthorizationResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPaymentAuthorizationResult.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PKPaymentAuthorizationResult, 'toString', {
	value: function () {
		return '[class PKPaymentAuthorizationResult]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'PKPaymentAuthorizationResult',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PKPaymentAuthorizationResult, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PKPaymentAuthorizationResult, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PKPaymentAuthorizationResult.prototype, {
		errors: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'errors'));
			},
		
			enumerable: false
		},
		status: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'status');
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

module.exports = PKPaymentAuthorizationResult;
