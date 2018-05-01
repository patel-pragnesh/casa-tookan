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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCapturePhotoOutput.h
 * @class
 */
function AVCapturePhotoSettings (pointer) {
	if (!(this instanceof AVCapturePhotoSettings)) {
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
			class: 'AVCapturePhotoSettings',
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
AVCapturePhotoSettings.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVCapturePhotoSettings,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVCapturePhotoSettings, NSObject);

Object.defineProperty(AVCapturePhotoSettings, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVCapturePhotoSettings, 'className', {
	value: 'AVCapturePhotoSettings',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCapturePhotoSettings.prototype, 'className', {
	value: 'AVCapturePhotoSettings',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCapturePhotoSettings.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVCapturePhotoSettings, 'toString', {
	value: function () {
		return '[class AVCapturePhotoSettings]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDictionary = require('/hyperloop/foundation/nsdictionary');

	$class = Hyperloop.createProxy({
		class: 'AVCapturePhotoSettings',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVCapturePhotoSettings, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVCapturePhotoSettings, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVCapturePhotoSettings.prototype, {
		format: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDictionary($dispatch(this.$native, 'format'));
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

module.exports = AVCapturePhotoSettings;
