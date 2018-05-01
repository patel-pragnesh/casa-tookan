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
function AVCaptureSession (pointer) {
	if (!(this instanceof AVCaptureSession)) {
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
			class: 'AVCaptureSession',
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
AVCaptureSession.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVCaptureSession,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVCaptureSession, NSObject);

Object.defineProperty(AVCaptureSession, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVCaptureSession, 'className', {
	value: 'AVCaptureSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCaptureSession.prototype, 'className', {
	value: 'AVCaptureSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCaptureSession.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVCaptureSession, 'toString', {
	value: function () {
		return '[class AVCaptureSession]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'AVCaptureSession',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVCaptureSession, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVCaptureSession, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVCaptureSession.prototype, 'addInput', {
		value: function (_input) {
			this.$private.addInput = this.$private.addInput || [];
			this.$private.addInput.push(_input);
			var result = $dispatch(this.$native, 'addInput:', [_input], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(AVCaptureSession.prototype, 'addOutput', {
		value: function (_output) {
			this.$private.addOutput = this.$private.addOutput || [];
			this.$private.addOutput.push(_output);
			var result = $dispatch(this.$native, 'addOutput:', [_output], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(AVCaptureSession.prototype, {
		inputs: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'inputs'));
			},
		
			enumerable: false
		},
		outputs: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'outputs'));
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

module.exports = AVCaptureSession;
