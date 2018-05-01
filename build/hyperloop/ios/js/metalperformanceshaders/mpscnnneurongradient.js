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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNNeuron.h
 * @class
 */
function MPSCNNNeuronGradient (pointer) {
	if (!(this instanceof MPSCNNNeuronGradient)) {
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
			class: 'MPSCNNNeuronGradient',
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
MPSCNNNeuronGradient.prototype = Object.create(MPSCNNGradientKernel.prototype, {
	constructor: {
		value: MPSCNNNeuronGradient,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNNeuronGradient, MPSCNNGradientKernel);

Object.defineProperty(MPSCNNNeuronGradient, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNNeuronGradient, 'className', {
	value: 'MPSCNNNeuronGradient',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNeuronGradient.prototype, 'className', {
	value: 'MPSCNNNeuronGradient',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNeuronGradient.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNNeuronGradient, 'toString', {
	value: function () {
		return '[class MPSCNNNeuronGradient]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'MPSCNNNeuronGradient',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNNeuronGradient, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNNeuronGradient, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSCNNNeuronGradient.prototype, {
		a: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'a');
			},
		
			enumerable: false
		},
		b: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'b');
			},
		
			enumerable: false
		},
		c: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'c');
			},
		
			enumerable: false
		},
		data: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'data'));
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

module.exports = MPSCNNNeuronGradient;
