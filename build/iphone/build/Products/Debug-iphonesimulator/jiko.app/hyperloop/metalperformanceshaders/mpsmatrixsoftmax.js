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


var MPSMatrixUnaryKernel = require('/hyperloop/metalperformanceshaders/mpsmatrixunarykernel');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Headers/MPSMatrixSoftMax.h
 * @class
 */
function MPSMatrixSoftMax (pointer) {
	if (!(this instanceof MPSMatrixSoftMax)) {
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
			class: 'MPSMatrixSoftMax',
			alloc: true,
			init: 'init'
		});
	}
	MPSMatrixUnaryKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSMatrixSoftMax.prototype = Object.create(MPSMatrixUnaryKernel.prototype, {
	constructor: {
		value: MPSMatrixSoftMax,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSMatrixSoftMax, MPSMatrixUnaryKernel);

Object.defineProperty(MPSMatrixSoftMax, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSMatrixSoftMax, 'className', {
	value: 'MPSMatrixSoftMax',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSMatrixSoftMax.prototype, 'className', {
	value: 'MPSMatrixSoftMax',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSMatrixSoftMax.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSMatrixSoftMax, 'toString', {
	value: function () {
		return '[class MPSMatrixSoftMax]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSMatrixSoftMax',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSMatrixSoftMax, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSMatrixSoftMax, '$private', {
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

module.exports = MPSMatrixSoftMax;
