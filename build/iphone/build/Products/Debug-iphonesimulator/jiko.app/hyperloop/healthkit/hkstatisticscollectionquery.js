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


var HKQuery = require('/hyperloop/healthkit/hkquery');


/**
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKStatisticsCollectionQuery.h
 * @class
 */
function HKStatisticsCollectionQuery (pointer) {
	if (!(this instanceof HKStatisticsCollectionQuery)) {
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
			class: 'HKStatisticsCollectionQuery',
			alloc: true,
			init: 'init'
		});
	}
	HKQuery.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HKStatisticsCollectionQuery.prototype = Object.create(HKQuery.prototype, {
	constructor: {
		value: HKStatisticsCollectionQuery,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKStatisticsCollectionQuery, HKQuery);

Object.defineProperty(HKStatisticsCollectionQuery, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKStatisticsCollectionQuery, 'className', {
	value: 'HKStatisticsCollectionQuery',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKStatisticsCollectionQuery.prototype, 'className', {
	value: 'HKStatisticsCollectionQuery',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKStatisticsCollectionQuery.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKStatisticsCollectionQuery, 'toString', {
	value: function () {
		return '[class HKStatisticsCollectionQuery]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKStatisticsCollectionQuery',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKStatisticsCollectionQuery, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKStatisticsCollectionQuery, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HKStatisticsCollectionQuery.prototype, {
		options: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'options');
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

module.exports = HKStatisticsCollectionQuery;
