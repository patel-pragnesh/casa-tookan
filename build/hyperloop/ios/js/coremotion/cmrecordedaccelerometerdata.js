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


var CMAccelerometerData = require('/hyperloop/coremotion/cmaccelerometerdata');


/**
 * CoreMotion//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMotion.framework/Headers/CMSensorRecorder.h
 * @class
 */
function CMRecordedAccelerometerData (pointer) {
	if (!(this instanceof CMRecordedAccelerometerData)) {
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
			class: 'CMRecordedAccelerometerData',
			alloc: true,
			init: 'init'
		});
	}
	CMAccelerometerData.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CMRecordedAccelerometerData.prototype = Object.create(CMAccelerometerData.prototype, {
	constructor: {
		value: CMRecordedAccelerometerData,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CMRecordedAccelerometerData, CMAccelerometerData);

Object.defineProperty(CMRecordedAccelerometerData, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CMRecordedAccelerometerData, 'className', {
	value: 'CMRecordedAccelerometerData',
	enumerable: false,
	writable: true
});

Object.defineProperty(CMRecordedAccelerometerData.prototype, 'className', {
	value: 'CMRecordedAccelerometerData',
	enumerable: false,
	writable: true
});

Object.defineProperty(CMRecordedAccelerometerData.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CMRecordedAccelerometerData, 'toString', {
	value: function () {
		return '[class CMRecordedAccelerometerData]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CMRecordedAccelerometerData',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CMRecordedAccelerometerData, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CMRecordedAccelerometerData, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CMRecordedAccelerometerData.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'identifier');
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

module.exports = CMRecordedAccelerometerData;
