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
 * PassKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PassKit.framework/Headers/PKPaymentMethod.h
 * @class
 */
function PKPaymentMethod (pointer) {
	if (!(this instanceof PKPaymentMethod)) {
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
			class: 'PKPaymentMethod',
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
PKPaymentMethod.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PKPaymentMethod,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PKPaymentMethod, NSObject);

Object.defineProperty(PKPaymentMethod, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PKPaymentMethod, 'className', {
	value: 'PKPaymentMethod',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPaymentMethod.prototype, 'className', {
	value: 'PKPaymentMethod',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPaymentMethod.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PKPaymentMethod, 'toString', {
	value: function () {
		return '[class PKPaymentMethod]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'PKPaymentMethod',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PKPaymentMethod, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PKPaymentMethod, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PKPaymentMethod.prototype, {
		network: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'network'));
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
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

module.exports = PKPaymentMethod;
