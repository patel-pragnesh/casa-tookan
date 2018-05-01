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


var HKObjectType = require('/hyperloop/healthkit/hkobjecttype');


/**
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKObjectType.h
 * @class
 */
function HKSampleType (pointer) {
	if (!(this instanceof HKSampleType)) {
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
			class: 'HKSampleType',
			alloc: true,
			init: 'init'
		});
	}
	HKObjectType.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HKSampleType.prototype = Object.create(HKObjectType.prototype, {
	constructor: {
		value: HKSampleType,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKSampleType, HKObjectType);

Object.defineProperty(HKSampleType, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKSampleType, 'className', {
	value: 'HKSampleType',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKSampleType.prototype, 'className', {
	value: 'HKSampleType',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKSampleType.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKSampleType, 'toString', {
	value: function () {
		return '[class HKSampleType]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKSampleType',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKSampleType, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKSampleType, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = HKSampleType;
