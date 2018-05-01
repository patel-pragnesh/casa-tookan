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
function MPSNNBinaryGradientStateNode (pointer) {
	if (!(this instanceof MPSNNBinaryGradientStateNode)) {
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
			class: 'MPSNNBinaryGradientStateNode',
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
MPSNNBinaryGradientStateNode.prototype = Object.create(MPSNNStateNode.prototype, {
	constructor: {
		value: MPSNNBinaryGradientStateNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSNNBinaryGradientStateNode, MPSNNStateNode);

Object.defineProperty(MPSNNBinaryGradientStateNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSNNBinaryGradientStateNode, 'className', {
	value: 'MPSNNBinaryGradientStateNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNBinaryGradientStateNode.prototype, 'className', {
	value: 'MPSNNBinaryGradientStateNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNBinaryGradientStateNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSNNBinaryGradientStateNode, 'toString', {
	value: function () {
		return '[class MPSNNBinaryGradientStateNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSNNBinaryGradientStateNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSNNBinaryGradientStateNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSNNBinaryGradientStateNode, '$private', {
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

module.exports = MPSNNBinaryGradientStateNode;
