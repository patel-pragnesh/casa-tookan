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


var HMCameraControl = require('/hyperloop/homekit/hmcameracontrol');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMCameraSnapshotControl.h
 * @class
 */
function HMCameraSnapshotControl (pointer) {
	if (!(this instanceof HMCameraSnapshotControl)) {
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
			class: 'HMCameraSnapshotControl',
			alloc: true,
			init: 'init'
		});
	}
	HMCameraControl.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMCameraSnapshotControl.prototype = Object.create(HMCameraControl.prototype, {
	constructor: {
		value: HMCameraSnapshotControl,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMCameraSnapshotControl, HMCameraControl);

Object.defineProperty(HMCameraSnapshotControl, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMCameraSnapshotControl, 'className', {
	value: 'HMCameraSnapshotControl',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMCameraSnapshotControl.prototype, 'className', {
	value: 'HMCameraSnapshotControl',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMCameraSnapshotControl.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMCameraSnapshotControl, 'toString', {
	value: function () {
		return '[class HMCameraSnapshotControl]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'HMCameraSnapshotControl',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMCameraSnapshotControl, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMCameraSnapshotControl, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HMCameraSnapshotControl.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = HMCameraSnapshotControl;
