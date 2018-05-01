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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNNeuron.h
 * @class
 */
function MPSCNNNeuron (pointer) {
	if (!(this instanceof MPSCNNNeuron)) {
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
			class: 'MPSCNNNeuron',
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
MPSCNNNeuron.prototype = Object.create(MPSCNNKernel.prototype, {
	constructor: {
		value: MPSCNNNeuron,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNNeuron, MPSCNNKernel);

Object.defineProperty(MPSCNNNeuron, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNNeuron, 'className', {
	value: 'MPSCNNNeuron',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNeuron.prototype, 'className', {
	value: 'MPSCNNNeuron',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNeuron.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNNeuron, 'toString', {
	value: function () {
		return '[class MPSCNNNeuron]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'MPSCNNNeuron',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNNeuron, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNNeuron, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSCNNNeuron.prototype, {
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

module.exports = MPSCNNNeuron;
