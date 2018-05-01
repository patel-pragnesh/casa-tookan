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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNNormalizationWeights.h
 * @class
 */
function MPSCNNNormalizationGammaAndBetaState (pointer) {
	if (!(this instanceof MPSCNNNormalizationGammaAndBetaState)) {
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
			class: 'MPSCNNNormalizationGammaAndBetaState',
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
MPSCNNNormalizationGammaAndBetaState.prototype = Object.create(MPSState.prototype, {
	constructor: {
		value: MPSCNNNormalizationGammaAndBetaState,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNNormalizationGammaAndBetaState, MPSState);

Object.defineProperty(MPSCNNNormalizationGammaAndBetaState, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNNormalizationGammaAndBetaState, 'className', {
	value: 'MPSCNNNormalizationGammaAndBetaState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNormalizationGammaAndBetaState.prototype, 'className', {
	value: 'MPSCNNNormalizationGammaAndBetaState',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNormalizationGammaAndBetaState.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNNormalizationGammaAndBetaState, 'toString', {
	value: function () {
		return '[class MPSCNNNormalizationGammaAndBetaState]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'MPSCNNNormalizationGammaAndBetaState',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNNormalizationGammaAndBetaState, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNNormalizationGammaAndBetaState, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSCNNNormalizationGammaAndBetaState.prototype, {
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

module.exports = MPSCNNNormalizationGammaAndBetaState;
