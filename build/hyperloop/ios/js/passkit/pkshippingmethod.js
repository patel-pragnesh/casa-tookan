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


var PKPaymentSummaryItem = require('/hyperloop/passkit/pkpaymentsummaryitem');


/**
 * PassKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PassKit.framework/Headers/PKPaymentRequest.h
 * @class
 */
function PKShippingMethod (pointer) {
	if (!(this instanceof PKShippingMethod)) {
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
			class: 'PKShippingMethod',
			alloc: true,
			init: 'init'
		});
	}
	PKPaymentSummaryItem.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
PKShippingMethod.prototype = Object.create(PKPaymentSummaryItem.prototype, {
	constructor: {
		value: PKShippingMethod,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PKShippingMethod, PKPaymentSummaryItem);

Object.defineProperty(PKShippingMethod, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PKShippingMethod, 'className', {
	value: 'PKShippingMethod',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKShippingMethod.prototype, 'className', {
	value: 'PKShippingMethod',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKShippingMethod.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PKShippingMethod, 'toString', {
	value: function () {
		return '[class PKShippingMethod]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'PKShippingMethod',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PKShippingMethod, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PKShippingMethod, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PKShippingMethod.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
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

module.exports = PKShippingMethod;
