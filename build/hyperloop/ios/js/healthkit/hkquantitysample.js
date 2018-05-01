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
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKQuantitySample.h
 * @class
 */
function HKQuantitySample (pointer) {
	if (!(this instanceof HKQuantitySample)) {
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
			class: 'HKQuantitySample',
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
HKQuantitySample.prototype = Object.create(HKSample.prototype, {
	constructor: {
		value: HKQuantitySample,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKQuantitySample, HKSample);

Object.defineProperty(HKQuantitySample, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKQuantitySample, 'className', {
	value: 'HKQuantitySample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKQuantitySample.prototype, 'className', {
	value: 'HKQuantitySample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKQuantitySample.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKQuantitySample, 'toString', {
	value: function () {
		return '[class HKQuantitySample]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.HKQuantity = require('/hyperloop/healthkit/hkquantity');

	$class = Hyperloop.createProxy({
		class: 'HKQuantitySample',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKQuantitySample, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKQuantitySample, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HKQuantitySample.prototype, {
		quantity: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.HKQuantity($dispatch(this.$native, 'quantity'));
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

module.exports = HKQuantitySample;
