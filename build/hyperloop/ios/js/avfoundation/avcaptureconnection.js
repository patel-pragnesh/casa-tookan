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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCaptureSession.h
 * @class
 */
function AVCaptureConnection (pointer) {
	if (!(this instanceof AVCaptureConnection)) {
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
			class: 'AVCaptureConnection',
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
AVCaptureConnection.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVCaptureConnection,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVCaptureConnection, NSObject);

Object.defineProperty(AVCaptureConnection, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVCaptureConnection, 'className', {
	value: 'AVCaptureConnection',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCaptureConnection.prototype, 'className', {
	value: 'AVCaptureConnection',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCaptureConnection.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVCaptureConnection, 'toString', {
	value: function () {
		return '[class AVCaptureConnection]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.AVCaptureOutput = require('/hyperloop/avfoundation/avcaptureoutput');

	$class = Hyperloop.createProxy({
		class: 'AVCaptureConnection',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVCaptureConnection, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVCaptureConnection, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVCaptureConnection.prototype, {
		enabled: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'enabled');
			},
		
			set: function (_enabled) {
				if (!$init) { $initialize(); }
				this.$private.enabled = _enabled;
				$dispatch(this.$native, 'setEnabled:', _enabled);
			},
			enumerable: false
		},
		output: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.AVCaptureOutput($dispatch(this.$native, 'output'));
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

module.exports = AVCaptureConnection;
