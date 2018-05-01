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


var HMDurationEvent = require('/hyperloop/homekit/hmdurationevent');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMDurationEvent.h
 * @class
 */
function HMMutableDurationEvent (pointer) {
	if (!(this instanceof HMMutableDurationEvent)) {
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
			class: 'HMMutableDurationEvent',
			alloc: true,
			init: 'init'
		});
	}
	HMDurationEvent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMMutableDurationEvent.prototype = Object.create(HMDurationEvent.prototype, {
	constructor: {
		value: HMMutableDurationEvent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMMutableDurationEvent, HMDurationEvent);

Object.defineProperty(HMMutableDurationEvent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMMutableDurationEvent, 'className', {
	value: 'HMMutableDurationEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMMutableDurationEvent.prototype, 'className', {
	value: 'HMMutableDurationEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMMutableDurationEvent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMMutableDurationEvent, 'toString', {
	value: function () {
		return '[class HMMutableDurationEvent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HMMutableDurationEvent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMMutableDurationEvent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMMutableDurationEvent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HMMutableDurationEvent.prototype, 'init', {
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
	Object.defineProperties(HMMutableDurationEvent.prototype, {
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'duration');
			},
		
			set: function (_duration) {
				if (!$init) { $initialize(); }
				this.$private.duration = _duration;
				$dispatch(this.$native, 'setDuration:', _duration);
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

module.exports = HMMutableDurationEvent;
