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
function MPSUnaryImageKernel (pointer) {
	if (!(this instanceof MPSUnaryImageKernel)) {
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
			class: 'MPSUnaryImageKernel',
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
MPSUnaryImageKernel.prototype = Object.create(MPSKernel.prototype, {
	constructor: {
		value: MPSUnaryImageKernel,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSUnaryImageKernel, MPSKernel);

Object.defineProperty(MPSUnaryImageKernel, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSUnaryImageKernel, 'className', {
	value: 'MPSUnaryImageKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSUnaryImageKernel.prototype, 'className', {
	value: 'MPSUnaryImageKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSUnaryImageKernel.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSUnaryImageKernel, 'toString', {
	value: function () {
		return '[class MPSUnaryImageKernel]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MPSOffset = require('/hyperloop/metalperformanceshaders/mpsoffset');

	$class = Hyperloop.createProxy({
		class: 'MPSUnaryImageKernel',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSUnaryImageKernel, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSUnaryImageKernel, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSUnaryImageKernel.prototype, {
		offset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MPSOffset($dispatch(this.$native, 'offset'));
			},
		
			set: function (_offset) {
				if (!$init) { $initialize(); }
				this.$private.offset = _offset;
				$dispatch(this.$native, 'setOffset:', _offset);
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

module.exports = MPSUnaryImageKernel;
