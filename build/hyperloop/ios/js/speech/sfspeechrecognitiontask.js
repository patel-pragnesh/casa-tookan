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
 * Speech//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Speech.framework/Headers/SFSpeechRecognitionTask.h
 * @class
 */
function SFSpeechRecognitionTask (pointer) {
	if (!(this instanceof SFSpeechRecognitionTask)) {
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
			class: 'SFSpeechRecognitionTask',
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
SFSpeechRecognitionTask.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SFSpeechRecognitionTask,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SFSpeechRecognitionTask, NSObject);

Object.defineProperty(SFSpeechRecognitionTask, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SFSpeechRecognitionTask, 'className', {
	value: 'SFSpeechRecognitionTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(SFSpeechRecognitionTask.prototype, 'className', {
	value: 'SFSpeechRecognitionTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(SFSpeechRecognitionTask.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SFSpeechRecognitionTask, 'toString', {
	value: function () {
		return '[class SFSpeechRecognitionTask]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSError = require('/hyperloop/foundation/nserror');

	$class = Hyperloop.createProxy({
		class: 'SFSpeechRecognitionTask',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SFSpeechRecognitionTask, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SFSpeechRecognitionTask, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SFSpeechRecognitionTask.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SFSpeechRecognitionTask.prototype, 'finish', {
		value: function () {
			var result = $dispatch(this.$native, 'finish', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(SFSpeechRecognitionTask.prototype, {
		error: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSError($dispatch(this.$native, 'error'));
			},
		
			enumerable: false
		},
		state: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'state');
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

module.exports = SFSpeechRecognitionTask;
