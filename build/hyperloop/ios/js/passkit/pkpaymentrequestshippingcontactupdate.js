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


var PKPaymentRequestUpdate = require('/hyperloop/passkit/pkpaymentrequestupdate');


/**
 * PassKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PassKit.framework/Headers/PKPaymentRequestStatus.h
 * @class
 */
function PKPaymentRequestShippingContactUpdate (pointer) {
	if (!(this instanceof PKPaymentRequestShippingContactUpdate)) {
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
			class: 'PKPaymentRequestShippingContactUpdate',
			alloc: true,
			init: 'init'
		});
	}
	PKPaymentRequestUpdate.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
PKPaymentRequestShippingContactUpdate.prototype = Object.create(PKPaymentRequestUpdate.prototype, {
	constructor: {
		value: PKPaymentRequestShippingContactUpdate,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PKPaymentRequestShippingContactUpdate, PKPaymentRequestUpdate);

Object.defineProperty(PKPaymentRequestShippingContactUpdate, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PKPaymentRequestShippingContactUpdate, 'className', {
	value: 'PKPaymentRequestShippingContactUpdate',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPaymentRequestShippingContactUpdate.prototype, 'className', {
	value: 'PKPaymentRequestShippingContactUpdate',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPaymentRequestShippingContactUpdate.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PKPaymentRequestShippingContactUpdate, 'toString', {
	value: function () {
		return '[class PKPaymentRequestShippingContactUpdate]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'PKPaymentRequestShippingContactUpdate',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PKPaymentRequestShippingContactUpdate, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PKPaymentRequestShippingContactUpdate, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PKPaymentRequestShippingContactUpdate.prototype, {
		errors: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'errors'));
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

module.exports = PKPaymentRequestShippingContactUpdate;
