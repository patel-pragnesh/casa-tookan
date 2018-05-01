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


var UIViewController = require('/hyperloop/uikit/uiviewcontroller');


/**
 * PassKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PassKit.framework/Headers/PKAddPaymentPassViewController.h
 * @class
 */
function PKAddPaymentPassViewController (pointer) {
	if (!(this instanceof PKAddPaymentPassViewController)) {
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
			class: 'PKAddPaymentPassViewController',
			alloc: true,
			init: 'init'
		});
	}
	UIViewController.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
PKAddPaymentPassViewController.prototype = Object.create(UIViewController.prototype, {
	constructor: {
		value: PKAddPaymentPassViewController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PKAddPaymentPassViewController, UIViewController);

Object.defineProperty(PKAddPaymentPassViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PKAddPaymentPassViewController, 'className', {
	value: 'PKAddPaymentPassViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKAddPaymentPassViewController.prototype, 'className', {
	value: 'PKAddPaymentPassViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKAddPaymentPassViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PKAddPaymentPassViewController, 'toString', {
	value: function () {
		return '[class PKAddPaymentPassViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'PKAddPaymentPassViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PKAddPaymentPassViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PKAddPaymentPassViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PKAddPaymentPassViewController.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = PKAddPaymentPassViewController;
