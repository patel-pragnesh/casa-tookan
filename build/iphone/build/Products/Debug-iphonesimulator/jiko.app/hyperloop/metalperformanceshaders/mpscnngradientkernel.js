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


var MPSCNNBinaryKernel = require('/hyperloop/metalperformanceshaders/mpscnnbinarykernel');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNKernel.h
 * @class
 */
function MPSCNNGradientKernel (pointer) {
	if (!(this instanceof MPSCNNGradientKernel)) {
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
			class: 'MPSCNNGradientKernel',
			alloc: true,
			init: 'init'
		});
	}
	MPSCNNBinaryKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSCNNGradientKernel.prototype = Object.create(MPSCNNBinaryKernel.prototype, {
	constructor: {
		value: MPSCNNGradientKernel,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNGradientKernel, MPSCNNBinaryKernel);

Object.defineProperty(MPSCNNGradientKernel, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNGradientKernel, 'className', {
	value: 'MPSCNNGradientKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNGradientKernel.prototype, 'className', {
	value: 'MPSCNNGradientKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNGradientKernel.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNGradientKernel, 'toString', {
	value: function () {
		return '[class MPSCNNGradientKernel]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNGradientKernel',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNGradientKernel, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNGradientKernel, '$private', {
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

module.exports = MPSCNNGradientKernel;
