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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVSampleBufferAudioRenderer.h
 * @class
 */
function AVSampleBufferAudioRenderer (pointer) {
	if (!(this instanceof AVSampleBufferAudioRenderer)) {
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
			class: 'AVSampleBufferAudioRenderer',
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
AVSampleBufferAudioRenderer.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVSampleBufferAudioRenderer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVSampleBufferAudioRenderer, NSObject);

Object.defineProperty(AVSampleBufferAudioRenderer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVSampleBufferAudioRenderer, 'className', {
	value: 'AVSampleBufferAudioRenderer',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVSampleBufferAudioRenderer.prototype, 'className', {
	value: 'AVSampleBufferAudioRenderer',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVSampleBufferAudioRenderer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVSampleBufferAudioRenderer, 'toString', {
	value: function () {
		return '[class AVSampleBufferAudioRenderer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSError = require('/hyperloop/foundation/nserror');

	$class = Hyperloop.createProxy({
		class: 'AVSampleBufferAudioRenderer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVSampleBufferAudioRenderer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVSampleBufferAudioRenderer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVSampleBufferAudioRenderer.prototype, 'flush', {
		value: function () {
			var result = $dispatch(this.$native, 'flush', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(AVSampleBufferAudioRenderer.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(AVSampleBufferAudioRenderer.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(AVSampleBufferAudioRenderer.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(AVSampleBufferAudioRenderer.prototype, {
		error: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSError($dispatch(this.$native, 'error'));
			},
		
			enumerable: false
		},
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = AVSampleBufferAudioRenderer;
