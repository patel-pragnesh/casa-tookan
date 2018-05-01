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
function MPSCNNConvolutionNode (pointer) {
	if (!(this instanceof MPSCNNConvolutionNode)) {
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
			class: 'MPSCNNConvolutionNode',
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
MPSCNNConvolutionNode.prototype = Object.create(MPSNNFilterNode.prototype, {
	constructor: {
		value: MPSCNNConvolutionNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNConvolutionNode, MPSNNFilterNode);

Object.defineProperty(MPSCNNConvolutionNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNConvolutionNode, 'className', {
	value: 'MPSCNNConvolutionNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNConvolutionNode.prototype, 'className', {
	value: 'MPSCNNConvolutionNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNConvolutionNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNConvolutionNode, 'toString', {
	value: function () {
		return '[class MPSCNNConvolutionNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNConvolutionNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNConvolutionNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNConvolutionNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = MPSCNNConvolutionNode;