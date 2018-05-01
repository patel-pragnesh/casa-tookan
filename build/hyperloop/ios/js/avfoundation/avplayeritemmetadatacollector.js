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


var AVPlayerItemMediaDataCollector = require('/hyperloop/avfoundation/avplayeritemmediadatacollector');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVPlayerItemMediaDataCollector.h
 * @class
 */
function AVPlayerItemMetadataCollector (pointer) {
	if (!(this instanceof AVPlayerItemMetadataCollector)) {
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
			class: 'AVPlayerItemMetadataCollector',
			alloc: true,
			init: 'init'
		});
	}
	AVPlayerItemMediaDataCollector.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVPlayerItemMetadataCollector.prototype = Object.create(AVPlayerItemMediaDataCollector.prototype, {
	constructor: {
		value: AVPlayerItemMetadataCollector,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVPlayerItemMetadataCollector, AVPlayerItemMediaDataCollector);

Object.defineProperty(AVPlayerItemMetadataCollector, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVPlayerItemMetadataCollector, 'className', {
	value: 'AVPlayerItemMetadataCollector',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerItemMetadataCollector.prototype, 'className', {
	value: 'AVPlayerItemMetadataCollector',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerItemMetadataCollector.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVPlayerItemMetadataCollector, 'toString', {
	value: function () {
		return '[class AVPlayerItemMetadataCollector]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'AVPlayerItemMetadataCollector',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVPlayerItemMetadataCollector, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVPlayerItemMetadataCollector, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVPlayerItemMetadataCollector.prototype, {
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

module.exports = AVPlayerItemMetadataCollector;
