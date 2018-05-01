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


var CMLogItem = require('/hyperloop/coremotion/cmlogitem');


/**
 * CoreMotion//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMotion.framework/Headers/CMAccelerometer.h
 * @class
 */
function CMAccelerometerData (pointer) {
	if (!(this instanceof CMAccelerometerData)) {
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
			class: 'CMAccelerometerData',
			alloc: true,
			init: 'init'
		});
	}
	CMLogItem.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CMAccelerometerData.prototype = Object.create(CMLogItem.prototype, {
	constructor: {
		value: CMAccelerometerData,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CMAccelerometerData, CMLogItem);

Object.defineProperty(CMAccelerometerData, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CMAccelerometerData, 'className', {
	value: 'CMAccelerometerData',
	enumerable: false,
	writable: true
});

Object.defineProperty(CMAccelerometerData.prototype, 'className', {
	value: 'CMAccelerometerData',
	enumerable: false,
	writable: true
});

Object.defineProperty(CMAccelerometerData.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CMAccelerometerData, 'toString', {
	value: function () {
		return '[class CMAccelerometerData]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CMAccelerometerData',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CMAccelerometerData, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CMAccelerometerData, '$private', {
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

module.exports = CMAccelerometerData;
