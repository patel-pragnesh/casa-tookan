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


var MPSNNGradientFilterNode = require('/hyperloop/metalperformanceshaders/mpsnngradientfilternode');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSNNGraphNodes.h
 * @class
 */
function MPSCNNNeuronGradientNode (pointer) {
	if (!(this instanceof MPSCNNNeuronGradientNode)) {
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
			class: 'MPSCNNNeuronGradientNode',
			alloc: true,
			init: 'init'
		});
	}
	MPSNNGradientFilterNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSCNNNeuronGradientNode.prototype = Object.create(MPSNNGradientFilterNode.prototype, {
	constructor: {
		value: MPSCNNNeuronGradientNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNNeuronGradientNode, MPSNNGradientFilterNode);

Object.defineProperty(MPSCNNNeuronGradientNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNNeuronGradientNode, 'className', {
	value: 'MPSCNNNeuronGradientNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNeuronGradientNode.prototype, 'className', {
	value: 'MPSCNNNeuronGradientNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNeuronGradientNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNNeuronGradientNode, 'toString', {
	value: function () {
		return '[class MPSCNNNeuronGradientNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNNeuronGradientNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNNeuronGradientNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNNeuronGradientNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSCNNNeuronGradientNode.prototype, 'init', {
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



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = MPSCNNNeuronGradientNode;
