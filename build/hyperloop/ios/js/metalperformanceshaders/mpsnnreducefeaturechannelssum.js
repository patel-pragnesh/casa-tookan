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


var MPSNNReduceUnary = require('/hyperloop/metalperformanceshaders/mpsnnreduceunary');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSNNReduce.h
 * @class
 */
function MPSNNReduceFeatureChannelsSum (pointer) {
	if (!(this instanceof MPSNNReduceFeatureChannelsSum)) {
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
			class: 'MPSNNReduceFeatureChannelsSum',
			alloc: true,
			init: 'init'
		});
	}
	MPSNNReduceUnary.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSNNReduceFeatureChannelsSum.prototype = Object.create(MPSNNReduceUnary.prototype, {
	constructor: {
		value: MPSNNReduceFeatureChannelsSum,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSNNReduceFeatureChannelsSum, MPSNNReduceUnary);

Object.defineProperty(MPSNNReduceFeatureChannelsSum, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSNNReduceFeatureChannelsSum, 'className', {
	value: 'MPSNNReduceFeatureChannelsSum',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNReduceFeatureChannelsSum.prototype, 'className', {
	value: 'MPSNNReduceFeatureChannelsSum',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNReduceFeatureChannelsSum.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSNNReduceFeatureChannelsSum, 'toString', {
	value: function () {
		return '[class MPSNNReduceFeatureChannelsSum]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSNNReduceFeatureChannelsSum',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSNNReduceFeatureChannelsSum, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSNNReduceFeatureChannelsSum, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSNNReduceFeatureChannelsSum.prototype, {
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

module.exports = MPSNNReduceFeatureChannelsSum;
