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


var MPSCNNGradientKernel = require('/hyperloop/metalperformanceshaders/mpscnngradientkernel');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNUpsampling.h
 * @class
 */
function MPSCNNUpsamplingGradient (pointer) {
	if (!(this instanceof MPSCNNUpsamplingGradient)) {
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
			class: 'MPSCNNUpsamplingGradient',
			alloc: true,
			init: 'init'
		});
	}
	MPSCNNGradientKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSCNNUpsamplingGradient.prototype = Object.create(MPSCNNGradientKernel.prototype, {
	constructor: {
		value: MPSCNNUpsamplingGradient,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNUpsamplingGradient, MPSCNNGradientKernel);

Object.defineProperty(MPSCNNUpsamplingGradient, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNUpsamplingGradient, 'className', {
	value: 'MPSCNNUpsamplingGradient',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNUpsamplingGradient.prototype, 'className', {
	value: 'MPSCNNUpsamplingGradient',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNUpsamplingGradient.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNUpsamplingGradient, 'toString', {
	value: function () {
		return '[class MPSCNNUpsamplingGradient]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNUpsamplingGradient',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNUpsamplingGradient, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNUpsamplingGradient, '$private', {
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

module.exports = MPSCNNUpsamplingGradient;
