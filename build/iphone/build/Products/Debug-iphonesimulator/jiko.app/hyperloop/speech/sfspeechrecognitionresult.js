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
 * Speech//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Speech.framework/Headers/SFSpeechRecognitionResult.h
 * @class
 */
function SFSpeechRecognitionResult (pointer) {
	if (!(this instanceof SFSpeechRecognitionResult)) {
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
			class: 'SFSpeechRecognitionResult',
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
SFSpeechRecognitionResult.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SFSpeechRecognitionResult,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SFSpeechRecognitionResult, NSObject);

Object.defineProperty(SFSpeechRecognitionResult, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SFSpeechRecognitionResult, 'className', {
	value: 'SFSpeechRecognitionResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(SFSpeechRecognitionResult.prototype, 'className', {
	value: 'SFSpeechRecognitionResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(SFSpeechRecognitionResult.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SFSpeechRecognitionResult, 'toString', {
	value: function () {
		return '[class SFSpeechRecognitionResult]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SFSpeechRecognitionResult',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SFSpeechRecognitionResult, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SFSpeechRecognitionResult, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SFSpeechRecognitionResult.prototype, {
		final: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'final');
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

module.exports = SFSpeechRecognitionResult;
