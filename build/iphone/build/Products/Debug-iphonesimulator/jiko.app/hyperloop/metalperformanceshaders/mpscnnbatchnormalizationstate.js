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


var MPSNNGradientState = require('/hyperloop/metalperformanceshaders/mpsnngradientstate');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNBatchNormalization.h
 * @class
 */
function MPSCNNBatchNormalizationState (pointer) {
	if (!(this instanceof MPSCNNBatchNormalizationState)) {
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
			class: 'MPSCNNBatchNormalizationState',
			alloc: true,
			init: 'init'
		});
	}
	MPSNNGradientState.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSCNNBatchNormalizationState.prototype = Object.create(MPSNNGradientState.prototype, {
	constructor: {
		value: MPSCNNBatchNormalizationState,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNBatchNormalizationState, MPSNNGradientState);

Object.defineProperty(MPSCNNBatchNormalizationState, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNBatchNormalizationState, 'className', {
	value: 'MPSCNNBatchNormalizationState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNBatchNormalizationState.prototype, 'className', {
	value: 'MPSCNNBatchNormalizationState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNBatchNormalizationState.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNBatchNormalizationState, 'toString', {
	value: function () {
		return '[class MPSCNNBatchNormalizationState]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'MPSCNNBatchNormalizationState',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNBatchNormalizationState, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNBatchNormalizationState, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSCNNBatchNormalizationState.prototype, 'beta', {
		value: function () {
			var result = $dispatch(this.$native, 'beta', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSObject(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MPSCNNBatchNormalizationState.prototype, 'reset', {
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

module.exports = MPSCNNBatchNormalizationState;
