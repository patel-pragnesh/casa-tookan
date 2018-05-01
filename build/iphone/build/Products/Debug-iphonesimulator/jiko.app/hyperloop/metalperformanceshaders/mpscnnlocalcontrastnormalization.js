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


var MPSCNNKernel = require('/hyperloop/metalperformanceshaders/mpscnnkernel');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNNormalization.h
 * @class
 */
function MPSCNNLocalContrastNormalization (pointer) {
	if (!(this instanceof MPSCNNLocalContrastNormalization)) {
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
			class: 'MPSCNNLocalContrastNormalization',
			alloc: true,
			init: 'init'
		});
	}
	MPSCNNKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSCNNLocalContrastNormalization.prototype = Object.create(MPSCNNKernel.prototype, {
	constructor: {
		value: MPSCNNLocalContrastNormalization,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNLocalContrastNormalization, MPSCNNKernel);

Object.defineProperty(MPSCNNLocalContrastNormalization, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNLocalContrastNormalization, 'className', {
	value: 'MPSCNNLocalContrastNormalization',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNLocalContrastNormalization.prototype, 'className', {
	value: 'MPSCNNLocalContrastNormalization',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNLocalContrastNormalization.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNLocalContrastNormalization, 'toString', {
	value: function () {
		return '[class MPSCNNLocalContrastNormalization]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNLocalContrastNormalization',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNLocalContrastNormalization, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNLocalContrastNormalization, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSCNNLocalContrastNormalization.prototype, {
		beta: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'beta');
			},
		
			set: function (_beta) {
				if (!$init) { $initialize(); }
				this.$private.beta = _beta;
				$dispatch(this.$native, 'setBeta:', _beta);
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

module.exports = MPSCNNLocalContrastNormalization;
