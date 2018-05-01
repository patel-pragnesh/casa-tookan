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


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Headers/MPSMatrixTypes.h
 * @class
 */
function MPSVectorDescriptor (pointer) {
	if (!(this instanceof MPSVectorDescriptor)) {
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
			class: 'MPSVectorDescriptor',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSVectorDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPSVectorDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSVectorDescriptor, NSObject);

Object.defineProperty(MPSVectorDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSVectorDescriptor, 'className', {
	value: 'MPSVectorDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSVectorDescriptor.prototype, 'className', {
	value: 'MPSVectorDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSVectorDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSVectorDescriptor, 'toString', {
	value: function () {
		return '[class MPSVectorDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSVectorDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSVectorDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSVectorDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSVectorDescriptor.prototype, 'setLength', {
		value: function (_length) {
			this.$private.setLength = this.$private.setLength || [];
			this.$private.setLength.push(_length);
			var result = $dispatch(this.$native, 'setLength:', [_length], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MPSVectorDescriptor.prototype, {
		length: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'length');
			},
		
			set: function (_length) {
				if (!$init) { $initialize(); }
				this.$private.length = _length;
				$dispatch(this.$native, 'setLength:', _length);
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

module.exports = MPSVectorDescriptor;
