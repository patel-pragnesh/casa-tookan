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
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKWorkout.h
 * @class
 */
function HKWorkoutEvent (pointer) {
	if (!(this instanceof HKWorkoutEvent)) {
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
			class: 'HKWorkoutEvent',
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
HKWorkoutEvent.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: HKWorkoutEvent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKWorkoutEvent, NSObject);

Object.defineProperty(HKWorkoutEvent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKWorkoutEvent, 'className', {
	value: 'HKWorkoutEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKWorkoutEvent.prototype, 'className', {
	value: 'HKWorkoutEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKWorkoutEvent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKWorkoutEvent, 'toString', {
	value: function () {
		return '[class HKWorkoutEvent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKWorkoutEvent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKWorkoutEvent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKWorkoutEvent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HKWorkoutEvent.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(HKWorkoutEvent.prototype, {
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
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

module.exports = HKWorkoutEvent;
