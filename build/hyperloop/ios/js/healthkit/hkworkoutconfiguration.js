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


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKWorkoutSession.h
 * @class
 */
function HKWorkoutConfiguration (pointer) {
	if (!(this instanceof HKWorkoutConfiguration)) {
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
			class: 'HKWorkoutConfiguration',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HKWorkoutConfiguration.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: HKWorkoutConfiguration,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKWorkoutConfiguration, NSObject);

Object.defineProperty(HKWorkoutConfiguration, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKWorkoutConfiguration, 'className', {
	value: 'HKWorkoutConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKWorkoutConfiguration.prototype, 'className', {
	value: 'HKWorkoutConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKWorkoutConfiguration.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKWorkoutConfiguration, 'toString', {
	value: function () {
		return '[class HKWorkoutConfiguration]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKWorkoutConfiguration',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKWorkoutConfiguration, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKWorkoutConfiguration, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HKWorkoutConfiguration.prototype, {
		activityType: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'activityType');
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

module.exports = HKWorkoutConfiguration;
