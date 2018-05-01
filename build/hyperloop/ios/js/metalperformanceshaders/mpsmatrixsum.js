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


var MPSKernel = require('/hyperloop/metalperformanceshaders/mpskernel');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSMatrixSum.h
 * @class
 */
function MPSMatrixSum (pointer) {
	if (!(this instanceof MPSMatrixSum)) {
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
			class: 'MPSMatrixSum',
			alloc: true,
			init: 'init'
		});
	}
	MPSKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSMatrixSum.prototype = Object.create(MPSKernel.prototype, {
	constructor: {
		value: MPSMatrixSum,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSMatrixSum, MPSKernel);

Object.defineProperty(MPSMatrixSum, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSMatrixSum, 'className', {
	value: 'MPSMatrixSum',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSMatrixSum.prototype, 'className', {
	value: 'MPSMatrixSum',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSMatrixSum.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSMatrixSum, 'toString', {
	value: function () {
		return '[class MPSMatrixSum]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSMatrixSum',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSMatrixSum, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSMatrixSum, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSMatrixSum.prototype, {
		columns: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'columns');
			},
		
			enumerable: false
		},
		count: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'count');
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

module.exports = MPSMatrixSum;
