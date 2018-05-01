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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioUnitEffect.h
 * @class
 */
function AVAudioUnitEffect (pointer) {
	if (!(this instanceof AVAudioUnitEffect)) {
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
			class: 'AVAudioUnitEffect',
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
AVAudioUnitEffect.prototype = Object.create(AVAudioUnit.prototype, {
	constructor: {
		value: AVAudioUnitEffect,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAudioUnitEffect, AVAudioUnit);

Object.defineProperty(AVAudioUnitEffect, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAudioUnitEffect, 'className', {
	value: 'AVAudioUnitEffect',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioUnitEffect.prototype, 'className', {
	value: 'AVAudioUnitEffect',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAudioUnitEffect.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAudioUnitEffect, 'toString', {
	value: function () {
		return '[class AVAudioUnitEffect]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVAudioUnitEffect',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAudioUnitEffect, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAudioUnitEffect, '$private', {
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

module.exports = AVAudioUnitEffect;
