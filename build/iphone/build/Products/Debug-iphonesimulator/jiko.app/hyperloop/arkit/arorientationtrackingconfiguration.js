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
function AROrientationTrackingConfiguration (pointer) {
	if (!(this instanceof AROrientationTrackingConfiguration)) {
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
			class: 'AROrientationTrackingConfiguration',
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
AROrientationTrackingConfiguration.prototype = Object.create(ARConfiguration.prototype, {
	constructor: {
		value: AROrientationTrackingConfiguration,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AROrientationTrackingConfiguration, ARConfiguration);

Object.defineProperty(AROrientationTrackingConfiguration, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AROrientationTrackingConfiguration, 'className', {
	value: 'AROrientationTrackingConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(AROrientationTrackingConfiguration.prototype, 'className', {
	value: 'AROrientationTrackingConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(AROrientationTrackingConfiguration.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AROrientationTrackingConfiguration, 'toString', {
	value: function () {
		return '[class AROrientationTrackingConfiguration]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AROrientationTrackingConfiguration',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AROrientationTrackingConfiguration, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AROrientationTrackingConfiguration, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AROrientationTrackingConfiguration.prototype, 'init', {
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

module.exports = AROrientationTrackingConfiguration;
