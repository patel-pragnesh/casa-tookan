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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Headers/MPSMatrixTypes.h
 * @class
 */
function MPSMatrixUnaryKernel (pointer) {
	if (!(this instanceof MPSMatrixUnaryKernel)) {
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
			class: 'MPSMatrixUnaryKernel',
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
MPSMatrixUnaryKernel.prototype = Object.create(MPSKernel.prototype, {
	constructor: {
		value: MPSMatrixUnaryKernel,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSMatrixUnaryKernel, MPSKernel);

Object.defineProperty(MPSMatrixUnaryKernel, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSMatrixUnaryKernel, 'className', {
	value: 'MPSMatrixUnaryKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSMatrixUnaryKernel.prototype, 'className', {
	value: 'MPSMatrixUnaryKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSMatrixUnaryKernel.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSMatrixUnaryKernel, 'toString', {
	value: function () {
		return '[class MPSMatrixUnaryKernel]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSMatrixUnaryKernel',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSMatrixUnaryKernel, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSMatrixUnaryKernel, '$private', {
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

module.exports = MPSMatrixUnaryKernel;
