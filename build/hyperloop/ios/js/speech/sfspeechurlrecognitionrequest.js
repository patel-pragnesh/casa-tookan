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


var SFSpeechRecognitionRequest = require('/hyperloop/speech/sfspeechrecognitionrequest');


/**
 * Speech//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Speech.framework/Headers/SFSpeechRecognitionRequest.h
 * @class
 */
function SFSpeechURLRecognitionRequest (pointer) {
	if (!(this instanceof SFSpeechURLRecognitionRequest)) {
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
			class: 'SFSpeechURLRecognitionRequest',
			alloc: true,
			init: 'init'
		});
	}
	SFSpeechRecognitionRequest.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SFSpeechURLRecognitionRequest.prototype = Object.create(SFSpeechRecognitionRequest.prototype, {
	constructor: {
		value: SFSpeechURLRecognitionRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SFSpeechURLRecognitionRequest, SFSpeechRecognitionRequest);

Object.defineProperty(SFSpeechURLRecognitionRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SFSpeechURLRecognitionRequest, 'className', {
	value: 'SFSpeechURLRecognitionRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(SFSpeechURLRecognitionRequest.prototype, 'className', {
	value: 'SFSpeechURLRecognitionRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(SFSpeechURLRecognitionRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SFSpeechURLRecognitionRequest, 'toString', {
	value: function () {
		return '[class SFSpeechURLRecognitionRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');

	$class = Hyperloop.createProxy({
		class: 'SFSpeechURLRecognitionRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SFSpeechURLRecognitionRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SFSpeechURLRecognitionRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SFSpeechURLRecognitionRequest.prototype, 'init', {
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

	Object.defineProperty(SFSpeechURLRecognitionRequest.prototype, 'initWithURL', {
		value: function (_URL) {
			var result = $dispatch(this.$native, 'initWithURL:', [_URL], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithURL = instance.$private.initWithURL || [];
			instance.$private.initWithURL.push(_URL);
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(SFSpeechURLRecognitionRequest.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
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

module.exports = SFSpeechURLRecognitionRequest;
