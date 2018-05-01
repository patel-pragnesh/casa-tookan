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
function MPSMatrixDescriptor (pointer) {
	if (!(this instanceof MPSMatrixDescriptor)) {
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
			class: 'MPSMatrixDescriptor',
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
MPSMatrixDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPSMatrixDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSMatrixDescriptor, NSObject);

Object.defineProperty(MPSMatrixDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSMatrixDescriptor, 'className', {
	value: 'MPSMatrixDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSMatrixDescriptor.prototype, 'className', {
	value: 'MPSMatrixDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSMatrixDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSMatrixDescriptor, 'toString', {
	value: function () {
		return '[class MPSMatrixDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSMatrixDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSMatrixDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSMatrixDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSMatrixDescriptor.prototype, {
		columns: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'columns');
			},
		
			set: function (_columns) {
				if (!$init) { $initialize(); }
				this.$private.columns = _columns;
				$dispatch(this.$native, 'setColumns:', _columns);
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

module.exports = MPSMatrixDescriptor;
