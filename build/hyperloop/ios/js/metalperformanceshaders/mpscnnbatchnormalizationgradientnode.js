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
function MPSCNNBatchNormalizationGradientNode (pointer) {
	if (!(this instanceof MPSCNNBatchNormalizationGradientNode)) {
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
			class: 'MPSCNNBatchNormalizationGradientNode',
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
MPSCNNBatchNormalizationGradientNode.prototype = Object.create(MPSNNGradientFilterNode.prototype, {
	constructor: {
		value: MPSCNNBatchNormalizationGradientNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSCNNBatchNormalizationGradientNode, MPSNNGradientFilterNode);

Object.defineProperty(MPSCNNBatchNormalizationGradientNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSCNNBatchNormalizationGradientNode, 'className', {
	value: 'MPSCNNBatchNormalizationGradientNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNBatchNormalizationGradientNode.prototype, 'className', {
	value: 'MPSCNNBatchNormalizationGradientNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSCNNBatchNormalizationGradientNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSCNNBatchNormalizationGradientNode, 'toString', {
	value: function () {
		return '[class MPSCNNBatchNormalizationGradientNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSCNNBatchNormalizationGradientNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSCNNBatchNormalizationGradientNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSCNNBatchNormalizationGradientNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSCNNBatchNormalizationGradientNode.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MPSCNNBatchNormalizationGradientNode.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MPSCNNBatchNormalizationGradientNode.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MPSCNNBatchNormalizationGradientNode.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = MPSCNNBatchNormalizationGradientNode;
