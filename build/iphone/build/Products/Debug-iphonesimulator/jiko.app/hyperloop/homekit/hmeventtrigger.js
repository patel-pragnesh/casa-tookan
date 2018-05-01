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
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMEventTrigger.h
 * @class
 */
function HMEventTrigger (pointer) {
	if (!(this instanceof HMEventTrigger)) {
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
			class: 'HMEventTrigger',
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
HMEventTrigger.prototype = Object.create(HMTrigger.prototype, {
	constructor: {
		value: HMEventTrigger,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMEventTrigger, HMTrigger);

Object.defineProperty(HMEventTrigger, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMEventTrigger, 'className', {
	value: 'HMEventTrigger',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMEventTrigger.prototype, 'className', {
	value: 'HMEventTrigger',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMEventTrigger.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMEventTrigger, 'toString', {
	value: function () {
		return '[class HMEventTrigger]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HMEventTrigger',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMEventTrigger, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMEventTrigger, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HMEventTrigger.prototype, 'init', {
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

module.exports = HMEventTrigger;
