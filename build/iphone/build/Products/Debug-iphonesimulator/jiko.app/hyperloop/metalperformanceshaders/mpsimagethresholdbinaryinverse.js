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
function MPSImageThresholdBinaryInverse (pointer) {
	if (!(this instanceof MPSImageThresholdBinaryInverse)) {
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
			class: 'MPSImageThresholdBinaryInverse',
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
MPSImageThresholdBinaryInverse.prototype = Object.create(MPSUnaryImageKernel.prototype, {
	constructor: {
		value: MPSImageThresholdBinaryInverse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSImageThresholdBinaryInverse, MPSUnaryImageKernel);

Object.defineProperty(MPSImageThresholdBinaryInverse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSImageThresholdBinaryInverse, 'className', {
	value: 'MPSImageThresholdBinaryInverse',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSImageThresholdBinaryInverse.prototype, 'className', {
	value: 'MPSImageThresholdBinaryInverse',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSImageThresholdBinaryInverse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSImageThresholdBinaryInverse, 'toString', {
	value: function () {
		return '[class MPSImageThresholdBinaryInverse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSImageThresholdBinaryInverse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSImageThresholdBinaryInverse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSImageThresholdBinaryInverse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSImageThresholdBinaryInverse.prototype, {
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

module.exports = MPSImageThresholdBinaryInverse;
