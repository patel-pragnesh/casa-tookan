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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioRecorder.h
 * @class
 */
function AVAudioRecorder (pointer) {
	if (!(this instanceof AVAudioRecorder)) {
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
			class: 'AVAudioRecorder',
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
AVAudioRecorder.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVAudioRecorder,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAudioRecorder, NSObject);

Object.defineProperty(AVAudioRecorder, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAudioRecorder, 'className', {
	value: 'AVAudioRecorder',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioRecorder.prototype, 'className', {
	value: 'AVAudioRecorder',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioRecorder.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAudioRecorder, 'toString', {
	value: function () {
		return '[class AVAudioRecorder]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.AVAudioFormat = require('/hyperloop/avfoundation/avaudioformat');
	$imports.NSDictionary = require('/hyperloop/foundation/nsdictionary');
	$imports.NSURL = require('/hyperloop/foundation/nsurl');

	$class = Hyperloop.createProxy({
		class: 'AVAudioRecorder',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAudioRecorder, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAudioRecorder, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAudioRecorder.prototype, 'pause', {
		value: function () {
			var result = $dispatch(this.$native, 'pause', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(AVAudioRecorder.prototype, 'stop', {
		value: function () {
			var result = $dispatch(this.$native, 'stop', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(AVAudioRecorder.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		format: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.AVAudioFormat($dispatch(this.$native, 'format'));
			},
		
			enumerable: false
		},
		settings: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDictionary($dispatch(this.$native, 'settings'));
			},
		
			enumerable: false
		},
		url: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'url'));
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

module.exports = AVAudioRecorder;
