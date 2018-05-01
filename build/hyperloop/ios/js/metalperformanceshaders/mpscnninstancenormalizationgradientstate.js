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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNInstanceNormalization.h
 * @class
 */
function MPSCNNInstanceNormalizationGradientState (pointer) {
	if (!(this instanceof MPSCNNInstanceNormalizationGradientState)) {
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
			class: 'MPSCNNInstanceNormalizationGradientState',
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
MPSCNNInstanceNormalizationGradientState.prototype = Object.create(MPSNNGradientState.prototype, {
	constructor: {
		value: MPSCNNInstanceNormalizationGradientState,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNInstanceNormalizationGradientState, MPSNNGradientState);

Object.defineProperty(MPSCNNInstanceNormalizationGradientState, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNInstanceNormalizationGradientState, 'className', {
	value: 'MPSCNNInstanceNormalizationGradientState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNInstanceNormalizationGradientState.prototype, 'className', {
	value: 'MPSCNNInstanceNormalizationGradientState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNInstanceNormalizationGradientState.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNInstanceNormalizationGradientState, 'toString', {
	value: function () {
		return '[class MPSCNNInstanceNormalizationGradientState]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'MPSCNNInstanceNormalizationGradientState',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNInstanceNormalizationGradientState, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNInstanceNormalizationGradientState, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSCNNInstanceNormalizationGradientState.prototype, {
		beta: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'beta'));
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

module.exports = MPSCNNInstanceNormalizationGradientState;
