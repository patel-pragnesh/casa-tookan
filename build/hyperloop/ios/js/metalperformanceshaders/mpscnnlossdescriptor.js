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
function MPSCNNLossDescriptor (pointer) {
	if (!(this instanceof MPSCNNLossDescriptor)) {
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
			class: 'MPSCNNLossDescriptor',
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
MPSCNNLossDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPSCNNLossDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNLossDescriptor, NSObject);

Object.defineProperty(MPSCNNLossDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNLossDescriptor, 'className', {
	value: 'MPSCNNLossDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNLossDescriptor.prototype, 'className', {
	value: 'MPSCNNLossDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNLossDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNLossDescriptor, 'toString', {
	value: function () {
		return '[class MPSCNNLossDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNLossDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNLossDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNLossDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSCNNLossDescriptor.prototype, 'init', {
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
	Object.defineProperties(MPSCNNLossDescriptor.prototype, {
		weight: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'weight');
			},
		
			set: function (_weight) {
				if (!$init) { $initialize(); }
				this.$private.weight = _weight;
				$dispatch(this.$native, 'setWeight:', _weight);
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

module.exports = MPSCNNLossDescriptor;
