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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Headers/MPSImageKernel.h
 * @class
 */
function MPSBinaryImageKernel (pointer) {
	if (!(this instanceof MPSBinaryImageKernel)) {
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
			class: 'MPSBinaryImageKernel',
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
MPSBinaryImageKernel.prototype = Object.create(MPSKernel.prototype, {
	constructor: {
		value: MPSBinaryImageKernel,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSBinaryImageKernel, MPSKernel);

Object.defineProperty(MPSBinaryImageKernel, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSBinaryImageKernel, 'className', {
	value: 'MPSBinaryImageKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSBinaryImageKernel.prototype, 'className', {
	value: 'MPSBinaryImageKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSBinaryImageKernel.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSBinaryImageKernel, 'toString', {
	value: function () {
		return '[class MPSBinaryImageKernel]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSBinaryImageKernel',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSBinaryImageKernel, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSBinaryImageKernel, '$private', {
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

module.exports = MPSBinaryImageKernel;
