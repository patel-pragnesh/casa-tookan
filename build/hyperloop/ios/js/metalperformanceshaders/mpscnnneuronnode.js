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


var MPSNNFilterNode = require('/hyperloop/metalperformanceshaders/mpsnnfilternode');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSNNGraphNodes.h
 * @class
 */
function MPSCNNNeuronNode (pointer) {
	if (!(this instanceof MPSCNNNeuronNode)) {
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
			class: 'MPSCNNNeuronNode',
			alloc: true,
			init: 'init'
		});
	}
	MPSNNFilterNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSCNNNeuronNode.prototype = Object.create(MPSNNFilterNode.prototype, {
	constructor: {
		value: MPSCNNNeuronNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNNeuronNode, MPSNNFilterNode);

Object.defineProperty(MPSCNNNeuronNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNNeuronNode, 'className', {
	value: 'MPSCNNNeuronNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNeuronNode.prototype, 'className', {
	value: 'MPSCNNNeuronNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNNeuronNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNNeuronNode, 'toString', {
	value: function () {
		return '[class MPSCNNNeuronNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNNeuronNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNNeuronNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNNeuronNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSCNNNeuronNode.prototype, 'init', {
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
	Object.defineProperties(MPSCNNNeuronNode.prototype, {
		a: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'a');
			},
		
			enumerable: false
		},
		b: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'b');
			},
		
			enumerable: false
		},
		c: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'c');
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

module.exports = MPSCNNNeuronNode;
