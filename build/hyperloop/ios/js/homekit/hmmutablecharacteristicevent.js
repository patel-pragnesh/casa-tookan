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


var HMCharacteristicEvent = require('/hyperloop/homekit/hmcharacteristicevent');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMCharacteristicEvent.h
 * @class
 */
function HMMutableCharacteristicEvent (pointer) {
	if (!(this instanceof HMMutableCharacteristicEvent)) {
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
			class: 'HMMutableCharacteristicEvent',
			alloc: true,
			init: 'init'
		});
	}
	HMCharacteristicEvent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMMutableCharacteristicEvent.prototype = Object.create(HMCharacteristicEvent.prototype, {
	constructor: {
		value: HMMutableCharacteristicEvent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMMutableCharacteristicEvent, HMCharacteristicEvent);

Object.defineProperty(HMMutableCharacteristicEvent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMMutableCharacteristicEvent, 'className', {
	value: 'HMMutableCharacteristicEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMMutableCharacteristicEvent.prototype, 'className', {
	value: 'HMMutableCharacteristicEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMMutableCharacteristicEvent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMMutableCharacteristicEvent, 'toString', {
	value: function () {
		return '[class HMMutableCharacteristicEvent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HMMutableCharacteristicEvent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMMutableCharacteristicEvent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMMutableCharacteristicEvent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HMMutableCharacteristicEvent.prototype, 'init', {
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

module.exports = HMMutableCharacteristicEvent;
