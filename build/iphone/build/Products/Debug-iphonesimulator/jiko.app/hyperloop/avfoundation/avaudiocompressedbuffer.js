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


var AVAudioBuffer = require('/hyperloop/avfoundation/avaudiobuffer');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioBuffer.h
 * @class
 */
function AVAudioCompressedBuffer (pointer) {
	if (!(this instanceof AVAudioCompressedBuffer)) {
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
			class: 'AVAudioCompressedBuffer',
			alloc: true,
			init: 'init'
		});
	}
	AVAudioBuffer.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVAudioCompressedBuffer.prototype = Object.create(AVAudioBuffer.prototype, {
	constructor: {
		value: AVAudioCompressedBuffer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAudioCompressedBuffer, AVAudioBuffer);

Object.defineProperty(AVAudioCompressedBuffer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAudioCompressedBuffer, 'className', {
	value: 'AVAudioCompressedBuffer',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioCompressedBuffer.prototype, 'className', {
	value: 'AVAudioCompressedBuffer',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioCompressedBuffer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAudioCompressedBuffer, 'toString', {
	value: function () {
		return '[class AVAudioCompressedBuffer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVAudioCompressedBuffer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAudioCompressedBuffer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAudioCompressedBuffer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVAudioCompressedBuffer.prototype, {
		byteLength: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'byteLength');
			},
		
			set: function (_byteLength) {
				if (!$init) { $initialize(); }
				this.$private.byteLength = _byteLength;
				$dispatch(this.$native, 'setByteLength:', _byteLength);
			},
			enumerable: false
		},
		data: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'data');
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

module.exports = AVAudioCompressedBuffer;
