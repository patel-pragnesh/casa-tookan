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


var NSKeyedUnarchiver = require('/hyperloop/foundation/nskeyedunarchiver');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSKeyedUnarchiver.h
 * @class
 */
function MPSKeyedUnarchiver (pointer) {
	if (!(this instanceof MPSKeyedUnarchiver)) {
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
			class: 'MPSKeyedUnarchiver',
			alloc: true,
			init: 'init'
		});
	}
	NSKeyedUnarchiver.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSKeyedUnarchiver.prototype = Object.create(NSKeyedUnarchiver.prototype, {
	constructor: {
		value: MPSKeyedUnarchiver,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSKeyedUnarchiver, NSKeyedUnarchiver);

Object.defineProperty(MPSKeyedUnarchiver, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSKeyedUnarchiver, 'className', {
	value: 'MPSKeyedUnarchiver',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSKeyedUnarchiver.prototype, 'className', {
	value: 'MPSKeyedUnarchiver',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSKeyedUnarchiver.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSKeyedUnarchiver, 'toString', {
	value: function () {
		return '[class MPSKeyedUnarchiver]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSKeyedUnarchiver',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSKeyedUnarchiver, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSKeyedUnarchiver, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSKeyedUnarchiver.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
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

module.exports = MPSKeyedUnarchiver;
