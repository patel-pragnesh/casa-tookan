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


var MPSCNNConvolutionNode = require('/hyperloop/metalperformanceshaders/mpscnnconvolutionnode');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSNNGraphNodes.h
 * @class
 */
function MPSCNNBinaryConvolutionNode (pointer) {
	if (!(this instanceof MPSCNNBinaryConvolutionNode)) {
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
			class: 'MPSCNNBinaryConvolutionNode',
			alloc: true,
			init: 'init'
		});
	}
	MPSCNNConvolutionNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSCNNBinaryConvolutionNode.prototype = Object.create(MPSCNNConvolutionNode.prototype, {
	constructor: {
		value: MPSCNNBinaryConvolutionNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNBinaryConvolutionNode, MPSCNNConvolutionNode);

Object.defineProperty(MPSCNNBinaryConvolutionNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNBinaryConvolutionNode, 'className', {
	value: 'MPSCNNBinaryConvolutionNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNBinaryConvolutionNode.prototype, 'className', {
	value: 'MPSCNNBinaryConvolutionNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNBinaryConvolutionNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNBinaryConvolutionNode, 'toString', {
	value: function () {
		return '[class MPSCNNBinaryConvolutionNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNBinaryConvolutionNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNBinaryConvolutionNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNBinaryConvolutionNode, '$private', {
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

module.exports = MPSCNNBinaryConvolutionNode;
