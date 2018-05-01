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


var MPSBinaryImageKernel = require('/hyperloop/metalperformanceshaders/mpsbinaryimagekernel');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Headers/MPSImageMath.h
 * @class
 */
function MPSImageArithmetic (pointer) {
	if (!(this instanceof MPSImageArithmetic)) {
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
			class: 'MPSImageArithmetic',
			alloc: true,
			init: 'init'
		});
	}
	MPSBinaryImageKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSImageArithmetic.prototype = Object.create(MPSBinaryImageKernel.prototype, {
	constructor: {
		value: MPSImageArithmetic,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSImageArithmetic, MPSBinaryImageKernel);

Object.defineProperty(MPSImageArithmetic, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSImageArithmetic, 'className', {
	value: 'MPSImageArithmetic',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSImageArithmetic.prototype, 'className', {
	value: 'MPSImageArithmetic',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSImageArithmetic.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSImageArithmetic, 'toString', {
	value: function () {
		return '[class MPSImageArithmetic]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSImageArithmetic',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSImageArithmetic, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSImageArithmetic, '$private', {
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

module.exports = MPSImageArithmetic;