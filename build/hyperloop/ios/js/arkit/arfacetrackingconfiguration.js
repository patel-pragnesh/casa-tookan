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


var ARConfiguration = require('/hyperloop/arkit/arconfiguration');


/**
 * ARKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ARKit.framework/Headers/ARConfiguration.h
 * @class
 */
function ARFaceTrackingConfiguration (pointer) {
	if (!(this instanceof ARFaceTrackingConfiguration)) {
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
			class: 'ARFaceTrackingConfiguration',
			alloc: true,
			init: 'init'
		});
	}
	ARConfiguration.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
ARFaceTrackingConfiguration.prototype = Object.create(ARConfiguration.prototype, {
	constructor: {
		value: ARFaceTrackingConfiguration,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(ARFaceTrackingConfiguration, ARConfiguration);

Object.defineProperty(ARFaceTrackingConfiguration, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(ARFaceTrackingConfiguration, 'className', {
	value: 'ARFaceTrackingConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(ARFaceTrackingConfiguration.prototype, 'className', {
	value: 'ARFaceTrackingConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(ARFaceTrackingConfiguration.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(ARFaceTrackingConfiguration, 'toString', {
	value: function () {
		return '[class ARFaceTrackingConfiguration]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'ARFaceTrackingConfiguration',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(ARFaceTrackingConfiguration, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(ARFaceTrackingConfiguration, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(ARFaceTrackingConfiguration.prototype, 'init', {
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

module.exports = ARFaceTrackingConfiguration;
