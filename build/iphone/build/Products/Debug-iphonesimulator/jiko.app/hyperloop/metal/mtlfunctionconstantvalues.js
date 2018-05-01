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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLFunctionConstantValues.h
 * @class
 */
function MTLFunctionConstantValues (pointer) {
	if (!(this instanceof MTLFunctionConstantValues)) {
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
			class: 'MTLFunctionConstantValues',
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
MTLFunctionConstantValues.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MTLFunctionConstantValues,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MTLFunctionConstantValues, NSObject);

Object.defineProperty(MTLFunctionConstantValues, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MTLFunctionConstantValues, 'className', {
	value: 'MTLFunctionConstantValues',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLFunctionConstantValues.prototype, 'className', {
	value: 'MTLFunctionConstantValues',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLFunctionConstantValues.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MTLFunctionConstantValues, 'toString', {
	value: function () {
		return '[class MTLFunctionConstantValues]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MTLFunctionConstantValues',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MTLFunctionConstantValues, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MTLFunctionConstantValues, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MTLFunctionConstantValues.prototype, 'reset', {
		value: function () {
			var result = $dispatch(this.$native, 'reset', null, true);
			return result;
		},
		enumerable: false,
		writable: true
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

module.exports = MTLFunctionConstantValues;
