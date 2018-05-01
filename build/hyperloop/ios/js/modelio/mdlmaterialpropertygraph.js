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


var MDLMaterialPropertyNode = require('/hyperloop/modelio/mdlmaterialpropertynode');


/**
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLMaterial.h
 * @class
 */
function MDLMaterialPropertyGraph (pointer) {
	if (!(this instanceof MDLMaterialPropertyGraph)) {
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
			class: 'MDLMaterialPropertyGraph',
			alloc: true,
			init: 'init'
		});
	}
	MDLMaterialPropertyNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MDLMaterialPropertyGraph.prototype = Object.create(MDLMaterialPropertyNode.prototype, {
	constructor: {
		value: MDLMaterialPropertyGraph,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLMaterialPropertyGraph, MDLMaterialPropertyNode);

Object.defineProperty(MDLMaterialPropertyGraph, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLMaterialPropertyGraph, 'className', {
	value: 'MDLMaterialPropertyGraph',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLMaterialPropertyGraph.prototype, 'className', {
	value: 'MDLMaterialPropertyGraph',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLMaterialPropertyGraph.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLMaterialPropertyGraph, 'toString', {
	value: function () {
		return '[class MDLMaterialPropertyGraph]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MDLMaterialPropertyGraph',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLMaterialPropertyGraph, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLMaterialPropertyGraph, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MDLMaterialPropertyGraph.prototype, 'evaluate', {
		value: function () {
			var result = $dispatch(this.$native, 'evaluate', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MDLMaterialPropertyGraph.prototype, 'init', {
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

module.exports = MDLMaterialPropertyGraph;
