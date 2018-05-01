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


var MPSState = require('/hyperloop/metalperformanceshaders/mpsstate');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSNNGradientState.h
 * @class
 */
function MPSNNBinaryGradientState (pointer) {
	if (!(this instanceof MPSNNBinaryGradientState)) {
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
			class: 'MPSNNBinaryGradientState',
			alloc: true,
			init: 'init'
		});
	}
	MPSState.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSNNBinaryGradientState.prototype = Object.create(MPSState.prototype, {
	constructor: {
		value: MPSNNBinaryGradientState,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSNNBinaryGradientState, MPSState);

Object.defineProperty(MPSNNBinaryGradientState, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSNNBinaryGradientState, 'className', {
	value: 'MPSNNBinaryGradientState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNBinaryGradientState.prototype, 'className', {
	value: 'MPSNNBinaryGradientState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNBinaryGradientState.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSNNBinaryGradientState, 'toString', {
	value: function () {
		return '[class MPSNNBinaryGradientState]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSNNBinaryGradientState',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSNNBinaryGradientState, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSNNBinaryGradientState, '$private', {
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

module.exports = MPSNNBinaryGradientState;
