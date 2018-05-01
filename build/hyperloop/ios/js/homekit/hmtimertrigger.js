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


var HMTrigger = require('/hyperloop/homekit/hmtrigger');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMTimerTrigger.h
 * @class
 */
function HMTimerTrigger (pointer) {
	if (!(this instanceof HMTimerTrigger)) {
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
			class: 'HMTimerTrigger',
			alloc: true,
			init: 'init'
		});
	}
	HMTrigger.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMTimerTrigger.prototype = Object.create(HMTrigger.prototype, {
	constructor: {
		value: HMTimerTrigger,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMTimerTrigger, HMTrigger);

Object.defineProperty(HMTimerTrigger, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMTimerTrigger, 'className', {
	value: 'HMTimerTrigger',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMTimerTrigger.prototype, 'className', {
	value: 'HMTimerTrigger',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMTimerTrigger.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMTimerTrigger, 'toString', {
	value: function () {
		return '[class HMTimerTrigger]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HMTimerTrigger',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMTimerTrigger, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMTimerTrigger, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HMTimerTrigger.prototype, 'init', {
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

module.exports = HMTimerTrigger;
