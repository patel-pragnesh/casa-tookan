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
function MPSCNNSpatialNormalization (pointer) {
	if (!(this instanceof MPSCNNSpatialNormalization)) {
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
			class: 'MPSCNNSpatialNormalization',
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
MPSCNNSpatialNormalization.prototype = Object.create(MPSCNNKernel.prototype, {
	constructor: {
		value: MPSCNNSpatialNormalization,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNSpatialNormalization, MPSCNNKernel);

Object.defineProperty(MPSCNNSpatialNormalization, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNSpatialNormalization, 'className', {
	value: 'MPSCNNSpatialNormalization',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNSpatialNormalization.prototype, 'className', {
	value: 'MPSCNNSpatialNormalization',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNSpatialNormalization.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNSpatialNormalization, 'toString', {
	value: function () {
		return '[class MPSCNNSpatialNormalization]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNSpatialNormalization',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNSpatialNormalization, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNSpatialNormalization, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSCNNSpatialNormalization.prototype, {
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

module.exports = MPSCNNSpatialNormalization;
