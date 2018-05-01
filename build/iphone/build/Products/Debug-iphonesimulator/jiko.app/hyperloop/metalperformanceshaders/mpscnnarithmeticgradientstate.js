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


var MPSNNBinaryGradientState = require('/hyperloop/metalperformanceshaders/mpsnnbinarygradientstate');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNMath.h
 * @class
 */
function MPSCNNArithmeticGradientState (pointer) {
	if (!(this instanceof MPSCNNArithmeticGradientState)) {
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
			class: 'MPSCNNArithmeticGradientState',
			alloc: true,
			init: 'init'
		});
	}
	MPSNNBinaryGradientState.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSCNNArithmeticGradientState.prototype = Object.create(MPSNNBinaryGradientState.prototype, {
	constructor: {
		value: MPSCNNArithmeticGradientState,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNArithmeticGradientState, MPSNNBinaryGradientState);

Object.defineProperty(MPSCNNArithmeticGradientState, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNArithmeticGradientState, 'className', {
	value: 'MPSCNNArithmeticGradientState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNArithmeticGradientState.prototype, 'className', {
	value: 'MPSCNNArithmeticGradientState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNArithmeticGradientState.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNArithmeticGradientState, 'toString', {
	value: function () {
		return '[class MPSCNNArithmeticGradientState]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNArithmeticGradientState',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNArithmeticGradientState, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNArithmeticGradientState, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSCNNArithmeticGradientState.prototype, 'init', {
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

module.exports = MPSCNNArithmeticGradientState;
