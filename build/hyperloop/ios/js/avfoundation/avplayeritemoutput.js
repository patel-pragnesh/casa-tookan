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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVPlayerItemOutput.h
 * @class
 */
function AVPlayerItemOutput (pointer) {
	if (!(this instanceof AVPlayerItemOutput)) {
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
			class: 'AVPlayerItemOutput',
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
AVPlayerItemOutput.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVPlayerItemOutput,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVPlayerItemOutput, NSObject);

Object.defineProperty(AVPlayerItemOutput, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVPlayerItemOutput, 'className', {
	value: 'AVPlayerItemOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerItemOutput.prototype, 'className', {
	value: 'AVPlayerItemOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerItemOutput.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVPlayerItemOutput, 'toString', {
	value: function () {
		return '[class AVPlayerItemOutput]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVPlayerItemOutput',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVPlayerItemOutput, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVPlayerItemOutput, '$private', {
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

module.exports = AVPlayerItemOutput;
