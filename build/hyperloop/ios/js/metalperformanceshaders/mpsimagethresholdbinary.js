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


var MPSUnaryImageKernel = require('/hyperloop/metalperformanceshaders/mpsunaryimagekernel');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Headers/MPSImageThreshold.h
 * @class
 */
function MPSImageThresholdBinary (pointer) {
	if (!(this instanceof MPSImageThresholdBinary)) {
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
			class: 'MPSImageThresholdBinary',
			alloc: true,
			init: 'init'
		});
	}
	MPSUnaryImageKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSImageThresholdBinary.prototype = Object.create(MPSUnaryImageKernel.prototype, {
	constructor: {
		value: MPSImageThresholdBinary,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSImageThresholdBinary, MPSUnaryImageKernel);

Object.defineProperty(MPSImageThresholdBinary, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSImageThresholdBinary, 'className', {
	value: 'MPSImageThresholdBinary',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSImageThresholdBinary.prototype, 'className', {
	value: 'MPSImageThresholdBinary',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSImageThresholdBinary.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSImageThresholdBinary, 'toString', {
	value: function () {
		return '[class MPSImageThresholdBinary]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSImageThresholdBinary',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSImageThresholdBinary, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSImageThresholdBinary, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSImageThresholdBinary.prototype, {
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'transform');
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

module.exports = MPSImageThresholdBinary;
