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


var MDLScatteringFunction = require('/hyperloop/modelio/mdlscatteringfunction');


/**
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLMaterial.h
 * @class
 */
function MDLPhysicallyPlausibleScatteringFunction (pointer) {
	if (!(this instanceof MDLPhysicallyPlausibleScatteringFunction)) {
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
			class: 'MDLPhysicallyPlausibleScatteringFunction',
			alloc: true,
			init: 'init'
		});
	}
	MDLScatteringFunction.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MDLPhysicallyPlausibleScatteringFunction.prototype = Object.create(MDLScatteringFunction.prototype, {
	constructor: {
		value: MDLPhysicallyPlausibleScatteringFunction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLPhysicallyPlausibleScatteringFunction, MDLScatteringFunction);

Object.defineProperty(MDLPhysicallyPlausibleScatteringFunction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLPhysicallyPlausibleScatteringFunction, 'className', {
	value: 'MDLPhysicallyPlausibleScatteringFunction',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLPhysicallyPlausibleScatteringFunction.prototype, 'className', {
	value: 'MDLPhysicallyPlausibleScatteringFunction',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLPhysicallyPlausibleScatteringFunction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLPhysicallyPlausibleScatteringFunction, 'toString', {
	value: function () {
		return '[class MDLPhysicallyPlausibleScatteringFunction]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MDLPhysicallyPlausibleScatteringFunction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLPhysicallyPlausibleScatteringFunction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLPhysicallyPlausibleScatteringFunction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MDLPhysicallyPlausibleScatteringFunction.prototype, {
		version: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'version');
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

module.exports = MDLPhysicallyPlausibleScatteringFunction;
