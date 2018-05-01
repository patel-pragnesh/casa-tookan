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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCaptureDataOutputSynchronizer.h
 * @class
 */
function AVCaptureSynchronizedData (pointer) {
	if (!(this instanceof AVCaptureSynchronizedData)) {
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
			class: 'AVCaptureSynchronizedData',
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
AVCaptureSynchronizedData.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVCaptureSynchronizedData,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVCaptureSynchronizedData, NSObject);

Object.defineProperty(AVCaptureSynchronizedData, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVCaptureSynchronizedData, 'className', {
	value: 'AVCaptureSynchronizedData',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCaptureSynchronizedData.prototype, 'className', {
	value: 'AVCaptureSynchronizedData',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCaptureSynchronizedData.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVCaptureSynchronizedData, 'toString', {
	value: function () {
		return '[class AVCaptureSynchronizedData]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CMTime = require('/hyperloop/coremedia/cmtime');

	$class = Hyperloop.createProxy({
		class: 'AVCaptureSynchronizedData',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVCaptureSynchronizedData, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVCaptureSynchronizedData, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVCaptureSynchronizedData.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(AVCaptureSynchronizedData.prototype, {
		timestamp: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CMTime($dispatch(this.$native, 'timestamp'));
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

module.exports = AVCaptureSynchronizedData;
