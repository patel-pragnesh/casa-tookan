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
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKSeriesSample.h
 * @class
 */
function HKSeriesSample (pointer) {
	if (!(this instanceof HKSeriesSample)) {
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
			class: 'HKSeriesSample',
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
HKSeriesSample.prototype = Object.create(HKSample.prototype, {
	constructor: {
		value: HKSeriesSample,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKSeriesSample, HKSample);

Object.defineProperty(HKSeriesSample, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKSeriesSample, 'className', {
	value: 'HKSeriesSample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKSeriesSample.prototype, 'className', {
	value: 'HKSeriesSample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKSeriesSample.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKSeriesSample, 'toString', {
	value: function () {
		return '[class HKSeriesSample]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKSeriesSample',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKSeriesSample, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKSeriesSample, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HKSeriesSample.prototype, {
		count: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'count');
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

module.exports = HKSeriesSample;
