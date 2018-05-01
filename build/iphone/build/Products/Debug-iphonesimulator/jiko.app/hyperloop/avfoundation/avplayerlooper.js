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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVPlayerLooper.h
 * @class
 */
function AVPlayerLooper (pointer) {
	if (!(this instanceof AVPlayerLooper)) {
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
			class: 'AVPlayerLooper',
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
AVPlayerLooper.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVPlayerLooper,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVPlayerLooper, NSObject);

Object.defineProperty(AVPlayerLooper, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVPlayerLooper, 'className', {
	value: 'AVPlayerLooper',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerLooper.prototype, 'className', {
	value: 'AVPlayerLooper',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerLooper.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVPlayerLooper, 'toString', {
	value: function () {
		return '[class AVPlayerLooper]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSError = require('/hyperloop/foundation/nserror');

	$class = Hyperloop.createProxy({
		class: 'AVPlayerLooper',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVPlayerLooper, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVPlayerLooper, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVPlayerLooper.prototype, 'init', {
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
	Object.defineProperties(AVPlayerLooper.prototype, {
		error: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSError($dispatch(this.$native, 'error'));
			},
		
			enumerable: false
		},
		status: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'status');
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

module.exports = AVPlayerLooper;
