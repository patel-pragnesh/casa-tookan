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


var NSUnitConverter = require('/hyperloop/foundation/nsunitconverter');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSUnit.h
 * @class
 */
function NSUnitConverterLinear (pointer) {
	if (!(this instanceof NSUnitConverterLinear)) {
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
			class: 'NSUnitConverterLinear',
			alloc: true,
			init: 'init'
		});
	}
	NSUnitConverter.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSUnitConverterLinear.prototype = Object.create(NSUnitConverter.prototype, {
	constructor: {
		value: NSUnitConverterLinear,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSUnitConverterLinear, NSUnitConverter);

Object.defineProperty(NSUnitConverterLinear, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSUnitConverterLinear, 'className', {
	value: 'NSUnitConverterLinear',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSUnitConverterLinear.prototype, 'className', {
	value: 'NSUnitConverterLinear',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSUnitConverterLinear.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSUnitConverterLinear, 'toString', {
	value: function () {
		return '[class NSUnitConverterLinear]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSUnitConverterLinear',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSUnitConverterLinear, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSUnitConverterLinear, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSUnitConverterLinear.prototype, {
		coefficient: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'coefficient');
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

module.exports = NSUnitConverterLinear;
