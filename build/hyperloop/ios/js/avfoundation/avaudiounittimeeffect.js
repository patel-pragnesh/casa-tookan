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


var AVAudioUnit = require('/hyperloop/avfoundation/avaudiounit');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioUnitTimeEffect.h
 * @class
 */
function AVAudioUnitTimeEffect (pointer) {
	if (!(this instanceof AVAudioUnitTimeEffect)) {
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
			class: 'AVAudioUnitTimeEffect',
			alloc: true,
			init: 'init'
		});
	}
	AVAudioUnit.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVAudioUnitTimeEffect.prototype = Object.create(AVAudioUnit.prototype, {
	constructor: {
		value: AVAudioUnitTimeEffect,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAudioUnitTimeEffect, AVAudioUnit);

Object.defineProperty(AVAudioUnitTimeEffect, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAudioUnitTimeEffect, 'className', {
	value: 'AVAudioUnitTimeEffect',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioUnitTimeEffect.prototype, 'className', {
	value: 'AVAudioUnitTimeEffect',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioUnitTimeEffect.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAudioUnitTimeEffect, 'toString', {
	value: function () {
		return '[class AVAudioUnitTimeEffect]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVAudioUnitTimeEffect',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAudioUnitTimeEffect, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAudioUnitTimeEffect, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = AVAudioUnitTimeEffect;
