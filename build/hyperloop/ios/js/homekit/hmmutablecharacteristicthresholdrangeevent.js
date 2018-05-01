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


var HMCharacteristicThresholdRangeEvent = require('/hyperloop/homekit/hmcharacteristicthresholdrangeevent');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMCharacteristicThresholdRangeEvent.h
 * @class
 */
function HMMutableCharacteristicThresholdRangeEvent (pointer) {
	if (!(this instanceof HMMutableCharacteristicThresholdRangeEvent)) {
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
			class: 'HMMutableCharacteristicThresholdRangeEvent',
			alloc: true,
			init: 'init'
		});
	}
	HMCharacteristicThresholdRangeEvent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMMutableCharacteristicThresholdRangeEvent.prototype = Object.create(HMCharacteristicThresholdRangeEvent.prototype, {
	constructor: {
		value: HMMutableCharacteristicThresholdRangeEvent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMMutableCharacteristicThresholdRangeEvent, HMCharacteristicThresholdRangeEvent);

Object.defineProperty(HMMutableCharacteristicThresholdRangeEvent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMMutableCharacteristicThresholdRangeEvent, 'className', {
	value: 'HMMutableCharacteristicThresholdRangeEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMMutableCharacteristicThresholdRangeEvent.prototype, 'className', {
	value: 'HMMutableCharacteristicThresholdRangeEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMMutableCharacteristicThresholdRangeEvent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMMutableCharacteristicThresholdRangeEvent, 'toString', {
	value: function () {
		return '[class HMMutableCharacteristicThresholdRangeEvent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HMMutableCharacteristicThresholdRangeEvent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMMutableCharacteristicThresholdRangeEvent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMMutableCharacteristicThresholdRangeEvent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HMMutableCharacteristicThresholdRangeEvent.prototype, 'init', {
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

module.exports = HMMutableCharacteristicThresholdRangeEvent;
