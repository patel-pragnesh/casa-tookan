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


var MPSUnaryImageKernel = require('/hyperloop/metalperformanceshaders/mpsunaryimagekernel');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Headers/MPSImageReduce.h
 * @class
 */
function MPSImageReduceUnary (pointer) {
	if (!(this instanceof MPSImageReduceUnary)) {
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
			class: 'MPSImageReduceUnary',
			alloc: true,
			init: 'init'
		});
	}
	MPSUnaryImageKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSImageReduceUnary.prototype = Object.create(MPSUnaryImageKernel.prototype, {
	constructor: {
		value: MPSImageReduceUnary,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSImageReduceUnary, MPSUnaryImageKernel);

Object.defineProperty(MPSImageReduceUnary, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSImageReduceUnary, 'className', {
	value: 'MPSImageReduceUnary',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSImageReduceUnary.prototype, 'className', {
	value: 'MPSImageReduceUnary',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSImageReduceUnary.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSImageReduceUnary, 'toString', {
	value: function () {
		return '[class MPSImageReduceUnary]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSImageReduceUnary',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSImageReduceUnary, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSImageReduceUnary, '$private', {
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

module.exports = MPSImageReduceUnary;
