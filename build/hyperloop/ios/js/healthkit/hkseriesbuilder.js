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


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKSeriesBuilder.h
 * @class
 */
function HKSeriesBuilder (pointer) {
	if (!(this instanceof HKSeriesBuilder)) {
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
			class: 'HKSeriesBuilder',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HKSeriesBuilder.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: HKSeriesBuilder,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKSeriesBuilder, NSObject);

Object.defineProperty(HKSeriesBuilder, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKSeriesBuilder, 'className', {
	value: 'HKSeriesBuilder',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKSeriesBuilder.prototype, 'className', {
	value: 'HKSeriesBuilder',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKSeriesBuilder.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKSeriesBuilder, 'toString', {
	value: function () {
		return '[class HKSeriesBuilder]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKSeriesBuilder',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKSeriesBuilder, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKSeriesBuilder, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HKSeriesBuilder.prototype, 'init', {
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

module.exports = HKSeriesBuilder;
