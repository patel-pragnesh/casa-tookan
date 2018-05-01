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


var AVAssetTrack = require('/hyperloop/avfoundation/avassettrack');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCompositionTrack.h
 * @class
 */
function AVCompositionTrack (pointer) {
	if (!(this instanceof AVCompositionTrack)) {
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
			class: 'AVCompositionTrack',
			alloc: true,
			init: 'init'
		});
	}
	AVAssetTrack.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVCompositionTrack.prototype = Object.create(AVAssetTrack.prototype, {
	constructor: {
		value: AVCompositionTrack,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVCompositionTrack, AVAssetTrack);

Object.defineProperty(AVCompositionTrack, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVCompositionTrack, 'className', {
	value: 'AVCompositionTrack',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCompositionTrack.prototype, 'className', {
	value: 'AVCompositionTrack',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCompositionTrack.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVCompositionTrack, 'toString', {
	value: function () {
		return '[class AVCompositionTrack]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVCompositionTrack',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVCompositionTrack, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVCompositionTrack, '$private', {
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

module.exports = AVCompositionTrack;
