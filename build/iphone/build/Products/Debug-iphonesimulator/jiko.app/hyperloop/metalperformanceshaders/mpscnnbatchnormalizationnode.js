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
function MPSCNNBatchNormalizationNode (pointer) {
	if (!(this instanceof MPSCNNBatchNormalizationNode)) {
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
			class: 'MPSCNNBatchNormalizationNode',
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
MPSCNNBatchNormalizationNode.prototype = Object.create(MPSNNFilterNode.prototype, {
	constructor: {
		value: MPSCNNBatchNormalizationNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNBatchNormalizationNode, MPSNNFilterNode);

Object.defineProperty(MPSCNNBatchNormalizationNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNBatchNormalizationNode, 'className', {
	value: 'MPSCNNBatchNormalizationNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNBatchNormalizationNode.prototype, 'className', {
	value: 'MPSCNNBatchNormalizationNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNBatchNormalizationNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNBatchNormalizationNode, 'toString', {
	value: function () {
		return '[class MPSCNNBatchNormalizationNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNBatchNormalizationNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNBatchNormalizationNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNBatchNormalizationNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSCNNBatchNormalizationNode.prototype, {
		flags: {
		
		
			set: function (_flags) {
				if (!$init) { $initialize(); }
				this.$private.flags = _flags;
				$dispatch(this.$native, 'setFlags:', _flags);
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

module.exports = MPSCNNBatchNormalizationNode;
