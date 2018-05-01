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
function MPSCNNPoolingGradientNode (pointer) {
	if (!(this instanceof MPSCNNPoolingGradientNode)) {
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
			class: 'MPSCNNPoolingGradientNode',
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
MPSCNNPoolingGradientNode.prototype = Object.create(MPSNNGradientFilterNode.prototype, {
	constructor: {
		value: MPSCNNPoolingGradientNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNPoolingGradientNode, MPSNNGradientFilterNode);

Object.defineProperty(MPSCNNPoolingGradientNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNPoolingGradientNode, 'className', {
	value: 'MPSCNNPoolingGradientNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNPoolingGradientNode.prototype, 'className', {
	value: 'MPSCNNPoolingGradientNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNPoolingGradientNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNPoolingGradientNode, 'toString', {
	value: function () {
		return '[class MPSCNNPoolingGradientNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNPoolingGradientNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNPoolingGradientNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNPoolingGradientNode, '$private', {
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

module.exports = MPSCNNPoolingGradientNode;
