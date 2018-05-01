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


var MPSNNStateNode = require('/hyperloop/metalperformanceshaders/mpsnnstatenode');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSNNGraphNodes.h
 * @class
 */
function MPSNNGradientStateNode (pointer) {
	if (!(this instanceof MPSNNGradientStateNode)) {
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
			class: 'MPSNNGradientStateNode',
			alloc: true,
			init: 'init'
		});
	}
	MPSNNStateNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSNNGradientStateNode.prototype = Object.create(MPSNNStateNode.prototype, {
	constructor: {
		value: MPSNNGradientStateNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSNNGradientStateNode, MPSNNStateNode);

Object.defineProperty(MPSNNGradientStateNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSNNGradientStateNode, 'className', {
	value: 'MPSNNGradientStateNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNGradientStateNode.prototype, 'className', {
	value: 'MPSNNGradientStateNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNGradientStateNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSNNGradientStateNode, 'toString', {
	value: function () {
		return '[class MPSNNGradientStateNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSNNGradientStateNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSNNGradientStateNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSNNGradientStateNode, '$private', {
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

module.exports = MPSNNGradientStateNode;
