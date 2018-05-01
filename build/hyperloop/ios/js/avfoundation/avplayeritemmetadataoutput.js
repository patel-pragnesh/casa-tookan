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


var AVPlayerItemOutput = require('/hyperloop/avfoundation/avplayeritemoutput');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVPlayerItemOutput.h
 * @class
 */
function AVPlayerItemMetadataOutput (pointer) {
	if (!(this instanceof AVPlayerItemMetadataOutput)) {
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
			class: 'AVPlayerItemMetadataOutput',
			alloc: true,
			init: 'init'
		});
	}
	AVPlayerItemOutput.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVPlayerItemMetadataOutput.prototype = Object.create(AVPlayerItemOutput.prototype, {
	constructor: {
		value: AVPlayerItemMetadataOutput,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVPlayerItemMetadataOutput, AVPlayerItemOutput);

Object.defineProperty(AVPlayerItemMetadataOutput, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVPlayerItemMetadataOutput, 'className', {
	value: 'AVPlayerItemMetadataOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerItemMetadataOutput.prototype, 'className', {
	value: 'AVPlayerItemMetadataOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerItemMetadataOutput.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVPlayerItemMetadataOutput, 'toString', {
	value: function () {
		return '[class AVPlayerItemMetadataOutput]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'AVPlayerItemMetadataOutput',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVPlayerItemMetadataOutput, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVPlayerItemMetadataOutput, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVPlayerItemMetadataOutput.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = AVPlayerItemMetadataOutput;
