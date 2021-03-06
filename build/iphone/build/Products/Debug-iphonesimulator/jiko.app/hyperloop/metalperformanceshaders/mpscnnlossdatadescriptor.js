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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNLoss.h
 * @class
 */
function MPSCNNLossDataDescriptor (pointer) {
	if (!(this instanceof MPSCNNLossDataDescriptor)) {
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
			class: 'MPSCNNLossDataDescriptor',
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
MPSCNNLossDataDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPSCNNLossDataDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNLossDataDescriptor, NSObject);

Object.defineProperty(MPSCNNLossDataDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNLossDataDescriptor, 'className', {
	value: 'MPSCNNLossDataDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNLossDataDescriptor.prototype, 'className', {
	value: 'MPSCNNLossDataDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNLossDataDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNLossDataDescriptor, 'toString', {
	value: function () {
		return '[class MPSCNNLossDataDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MTLSize = require('/hyperloop/metal/mtlsize');

	$class = Hyperloop.createProxy({
		class: 'MPSCNNLossDataDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNLossDataDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNLossDataDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSCNNLossDataDescriptor.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MPSCNNLossDataDescriptor.prototype, {
		size: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MTLSize($dispatch(this.$native, 'size'));
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

module.exports = MPSCNNLossDataDescriptor;
