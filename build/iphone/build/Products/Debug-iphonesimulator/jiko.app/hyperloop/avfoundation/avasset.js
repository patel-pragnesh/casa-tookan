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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAsset.h
 * @class
 */
function AVAsset (pointer) {
	if (!(this instanceof AVAsset)) {
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
			class: 'AVAsset',
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
AVAsset.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVAsset,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAsset, NSObject);

Object.defineProperty(AVAsset, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAsset, 'className', {
	value: 'AVAsset',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAsset.prototype, 'className', {
	value: 'AVAsset',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAsset.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAsset, 'toString', {
	value: function () {
		return '[class AVAsset]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CMTime = require('/hyperloop/coremedia/cmtime');

	$class = Hyperloop.createProxy({
		class: 'AVAsset',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAsset, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAsset, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVAsset.prototype, {
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CMTime($dispatch(this.$native, 'duration'));
			},
		
			enumerable: false
		},
		readable: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'readable');
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

module.exports = AVAsset;
