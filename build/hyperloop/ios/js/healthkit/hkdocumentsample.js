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
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKDocumentSample.h
 * @class
 */
function HKDocumentSample (pointer) {
	if (!(this instanceof HKDocumentSample)) {
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
			class: 'HKDocumentSample',
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
HKDocumentSample.prototype = Object.create(HKSample.prototype, {
	constructor: {
		value: HKDocumentSample,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKDocumentSample, HKSample);

Object.defineProperty(HKDocumentSample, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKDocumentSample, 'className', {
	value: 'HKDocumentSample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKDocumentSample.prototype, 'className', {
	value: 'HKDocumentSample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKDocumentSample.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKDocumentSample, 'toString', {
	value: function () {
		return '[class HKDocumentSample]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HKDocumentSample',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKDocumentSample, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKDocumentSample, '$private', {
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

module.exports = HKDocumentSample;
