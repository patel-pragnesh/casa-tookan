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


var AVCaptureOutput = require('/hyperloop/avfoundation/avcaptureoutput');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCaptureStillImageOutput.h
 * @class
 */
function AVCaptureStillImageOutput (pointer) {
	if (!(this instanceof AVCaptureStillImageOutput)) {
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
			class: 'AVCaptureStillImageOutput',
			alloc: true,
			init: 'init'
		});
	}
	AVCaptureOutput.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVCaptureStillImageOutput.prototype = Object.create(AVCaptureOutput.prototype, {
	constructor: {
		value: AVCaptureStillImageOutput,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVCaptureStillImageOutput, AVCaptureOutput);

Object.defineProperty(AVCaptureStillImageOutput, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVCaptureStillImageOutput, 'className', {
	value: 'AVCaptureStillImageOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCaptureStillImageOutput.prototype, 'className', {
	value: 'AVCaptureStillImageOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCaptureStillImageOutput.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVCaptureStillImageOutput, 'toString', {
	value: function () {
		return '[class AVCaptureStillImageOutput]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVCaptureStillImageOutput',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVCaptureStillImageOutput, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVCaptureStillImageOutput, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVCaptureStillImageOutput.prototype, 'init', {
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

module.exports = AVCaptureStillImageOutput;
