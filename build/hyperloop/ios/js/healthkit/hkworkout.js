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


var HKSample = require('/hyperloop/healthkit/hksample');


/**
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKWorkout.h
 * @class
 */
function HKWorkout (pointer) {
	if (!(this instanceof HKWorkout)) {
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
			class: 'HKWorkout',
			alloc: true,
			init: 'init'
		});
	}
	HKSample.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HKWorkout.prototype = Object.create(HKSample.prototype, {
	constructor: {
		value: HKWorkout,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKWorkout, HKSample);

Object.defineProperty(HKWorkout, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKWorkout, 'className', {
	value: 'HKWorkout',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKWorkout.prototype, 'className', {
	value: 'HKWorkout',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKWorkout.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKWorkout, 'toString', {
	value: function () {
		return '[class HKWorkout]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKWorkout',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKWorkout, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKWorkout, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HKWorkout.prototype, {
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'duration');
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

module.exports = HKWorkout;
