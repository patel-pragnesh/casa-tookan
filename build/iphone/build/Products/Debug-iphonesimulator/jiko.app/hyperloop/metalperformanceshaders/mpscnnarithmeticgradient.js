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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNMath.h
 * @class
 */
function MPSCNNArithmeticGradient (pointer) {
	if (!(this instanceof MPSCNNArithmeticGradient)) {
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
			class: 'MPSCNNArithmeticGradient',
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
MPSCNNArithmeticGradient.prototype = Object.create(MPSCNNGradientKernel.prototype, {
	constructor: {
		value: MPSCNNArithmeticGradient,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNArithmeticGradient, MPSCNNGradientKernel);

Object.defineProperty(MPSCNNArithmeticGradient, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNArithmeticGradient, 'className', {
	value: 'MPSCNNArithmeticGradient',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNArithmeticGradient.prototype, 'className', {
	value: 'MPSCNNArithmeticGradient',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNArithmeticGradient.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNArithmeticGradient, 'toString', {
	value: function () {
		return '[class MPSCNNArithmeticGradient]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNArithmeticGradient',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNArithmeticGradient, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNArithmeticGradient, '$private', {
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

module.exports = MPSCNNArithmeticGradient;
