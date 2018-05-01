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


var HMEvent = require('/hyperloop/homekit/hmevent');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMCharacteristicThresholdRangeEvent.h
 * @class
 */
function HMCharacteristicThresholdRangeEvent (pointer) {
	if (!(this instanceof HMCharacteristicThresholdRangeEvent)) {
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
			class: 'HMCharacteristicThresholdRangeEvent',
			alloc: true,
			init: 'init'
		});
	}
	HMEvent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMCharacteristicThresholdRangeEvent.prototype = Object.create(HMEvent.prototype, {
	constructor: {
		value: HMCharacteristicThresholdRangeEvent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMCharacteristicThresholdRangeEvent, HMEvent);

Object.defineProperty(HMCharacteristicThresholdRangeEvent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMCharacteristicThresholdRangeEvent, 'className', {
	value: 'HMCharacteristicThresholdRangeEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMCharacteristicThresholdRangeEvent.prototype, 'className', {
	value: 'HMCharacteristicThresholdRangeEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMCharacteristicThresholdRangeEvent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMCharacteristicThresholdRangeEvent, 'toString', {
	value: function () {
		return '[class HMCharacteristicThresholdRangeEvent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HMCharacteristicThresholdRangeEvent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMCharacteristicThresholdRangeEvent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMCharacteristicThresholdRangeEvent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HMCharacteristicThresholdRangeEvent.prototype, 'init', {
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

module.exports = HMCharacteristicThresholdRangeEvent;
