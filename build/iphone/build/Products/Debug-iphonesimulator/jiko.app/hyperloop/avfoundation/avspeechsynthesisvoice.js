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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVSpeechSynthesis.h
 * @class
 */
function AVSpeechSynthesisVoice (pointer) {
	if (!(this instanceof AVSpeechSynthesisVoice)) {
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
			class: 'AVSpeechSynthesisVoice',
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
AVSpeechSynthesisVoice.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVSpeechSynthesisVoice,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVSpeechSynthesisVoice, NSObject);

Object.defineProperty(AVSpeechSynthesisVoice, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVSpeechSynthesisVoice, 'className', {
	value: 'AVSpeechSynthesisVoice',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVSpeechSynthesisVoice.prototype, 'className', {
	value: 'AVSpeechSynthesisVoice',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVSpeechSynthesisVoice.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVSpeechSynthesisVoice, 'toString', {
	value: function () {
		return '[class AVSpeechSynthesisVoice]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'AVSpeechSynthesisVoice',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVSpeechSynthesisVoice, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVSpeechSynthesisVoice, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVSpeechSynthesisVoice.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
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

module.exports = AVSpeechSynthesisVoice;
