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
 * Photos//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Photos.framework/Headers/PHAdjustmentData.h
 * @class
 */
function PHAdjustmentData (pointer) {
	if (!(this instanceof PHAdjustmentData)) {
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
			class: 'PHAdjustmentData',
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
PHAdjustmentData.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PHAdjustmentData,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PHAdjustmentData, NSObject);

Object.defineProperty(PHAdjustmentData, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PHAdjustmentData, 'className', {
	value: 'PHAdjustmentData',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHAdjustmentData.prototype, 'className', {
	value: 'PHAdjustmentData',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHAdjustmentData.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PHAdjustmentData, 'toString', {
	value: function () {
		return '[class PHAdjustmentData]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'PHAdjustmentData',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PHAdjustmentData, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PHAdjustmentData, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PHAdjustmentData.prototype, {
		data: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'data'));
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

module.exports = PHAdjustmentData;
