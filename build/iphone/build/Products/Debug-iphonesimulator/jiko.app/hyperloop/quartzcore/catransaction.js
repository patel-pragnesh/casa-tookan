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
 * QuartzCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CATransaction.h
 * @class
 */
function CATransaction (pointer) {
	if (!(this instanceof CATransaction)) {
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
			class: 'CATransaction',
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
CATransaction.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CATransaction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CATransaction, NSObject);

Object.defineProperty(CATransaction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CATransaction, 'className', {
	value: 'CATransaction',
	enumerable: false,
	writable: true
});

Object.defineProperty(CATransaction.prototype, 'className', {
	value: 'CATransaction',
	enumerable: false,
	writable: true
});

Object.defineProperty(CATransaction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CATransaction, 'toString', {
	value: function () {
		return '[class CATransaction]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(CATransaction, 'flush', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'flush', null, false);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CATransaction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CATransaction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CATransaction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = CATransaction;
