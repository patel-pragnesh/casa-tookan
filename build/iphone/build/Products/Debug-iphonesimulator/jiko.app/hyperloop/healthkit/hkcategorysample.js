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
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKCategorySample.h
 * @class
 */
function HKCategorySample (pointer) {
	if (!(this instanceof HKCategorySample)) {
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
			class: 'HKCategorySample',
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
HKCategorySample.prototype = Object.create(HKSample.prototype, {
	constructor: {
		value: HKCategorySample,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKCategorySample, HKSample);

Object.defineProperty(HKCategorySample, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKCategorySample, 'className', {
	value: 'HKCategorySample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKCategorySample.prototype, 'className', {
	value: 'HKCategorySample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKCategorySample.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKCategorySample, 'toString', {
	value: function () {
		return '[class HKCategorySample]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKCategorySample',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKCategorySample, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKCategorySample, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HKCategorySample.prototype, 'init', {
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
	Object.defineProperties(HKCategorySample.prototype, {
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'value');
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

module.exports = HKCategorySample;
