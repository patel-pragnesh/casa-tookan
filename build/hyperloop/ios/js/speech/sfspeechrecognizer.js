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
 * Speech//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Speech.framework/Headers/SFSpeechRecognizer.h
 * @class
 */
function SFSpeechRecognizer (pointer) {
	if (!(this instanceof SFSpeechRecognizer)) {
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
			class: 'SFSpeechRecognizer',
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
SFSpeechRecognizer.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SFSpeechRecognizer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SFSpeechRecognizer, NSObject);

Object.defineProperty(SFSpeechRecognizer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SFSpeechRecognizer, 'className', {
	value: 'SFSpeechRecognizer',
	enumerable: false,
	writable: true
});

Object.defineProperty(SFSpeechRecognizer.prototype, 'className', {
	value: 'SFSpeechRecognizer',
	enumerable: false,
	writable: true
});

Object.defineProperty(SFSpeechRecognizer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SFSpeechRecognizer, 'toString', {
	value: function () {
		return '[class SFSpeechRecognizer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSOperationQueue = require('/hyperloop/foundation/nsoperationqueue');

	$class = Hyperloop.createProxy({
		class: 'SFSpeechRecognizer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SFSpeechRecognizer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SFSpeechRecognizer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SFSpeechRecognizer.prototype, 'init', {
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

	Object.defineProperty(SFSpeechRecognizer.prototype, 'isAvailable', {
		value: function () {
			var result = $dispatch(this.$native, 'isAvailable', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(SFSpeechRecognizer.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		queue: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSOperationQueue($dispatch(this.$native, 'queue'));
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

module.exports = SFSpeechRecognizer;
