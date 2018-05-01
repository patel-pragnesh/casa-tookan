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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioSession.h
 * @class
 */
function AVAudioSessionDataSourceDescription (pointer) {
	if (!(this instanceof AVAudioSessionDataSourceDescription)) {
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
			class: 'AVAudioSessionDataSourceDescription',
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
AVAudioSessionDataSourceDescription.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVAudioSessionDataSourceDescription,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAudioSessionDataSourceDescription, NSObject);

Object.defineProperty(AVAudioSessionDataSourceDescription, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAudioSessionDataSourceDescription, 'className', {
	value: 'AVAudioSessionDataSourceDescription',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioSessionDataSourceDescription.prototype, 'className', {
	value: 'AVAudioSessionDataSourceDescription',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioSessionDataSourceDescription.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAudioSessionDataSourceDescription, 'toString', {
	value: function () {
		return '[class AVAudioSessionDataSourceDescription]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'AVAudioSessionDataSourceDescription',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAudioSessionDataSourceDescription, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAudioSessionDataSourceDescription, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVAudioSessionDataSourceDescription.prototype, {
		location: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'location'));
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

module.exports = AVAudioSessionDataSourceDescription;
