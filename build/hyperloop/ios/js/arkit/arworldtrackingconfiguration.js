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
function ARWorldTrackingConfiguration (pointer) {
	if (!(this instanceof ARWorldTrackingConfiguration)) {
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
			class: 'ARWorldTrackingConfiguration',
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
ARWorldTrackingConfiguration.prototype = Object.create(ARConfiguration.prototype, {
	constructor: {
		value: ARWorldTrackingConfiguration,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(ARWorldTrackingConfiguration, ARConfiguration);

Object.defineProperty(ARWorldTrackingConfiguration, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(ARWorldTrackingConfiguration, 'className', {
	value: 'ARWorldTrackingConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(ARWorldTrackingConfiguration.prototype, 'className', {
	value: 'ARWorldTrackingConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(ARWorldTrackingConfiguration.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(ARWorldTrackingConfiguration, 'toString', {
	value: function () {
		return '[class ARWorldTrackingConfiguration]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'ARWorldTrackingConfiguration',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(ARWorldTrackingConfiguration, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(ARWorldTrackingConfiguration, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(ARWorldTrackingConfiguration.prototype, 'init', {
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

module.exports = ARWorldTrackingConfiguration;
