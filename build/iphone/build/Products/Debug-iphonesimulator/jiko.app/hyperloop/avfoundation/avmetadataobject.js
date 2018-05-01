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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVMetadataObject.h
 * @class
 */
function AVMetadataObject (pointer) {
	if (!(this instanceof AVMetadataObject)) {
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
			class: 'AVMetadataObject',
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
AVMetadataObject.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVMetadataObject,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVMetadataObject, NSObject);

Object.defineProperty(AVMetadataObject, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVMetadataObject, 'className', {
	value: 'AVMetadataObject',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMetadataObject.prototype, 'className', {
	value: 'AVMetadataObject',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMetadataObject.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVMetadataObject, 'toString', {
	value: function () {
		return '[class AVMetadataObject]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CMTime = require('/hyperloop/coremedia/cmtime');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'AVMetadataObject',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVMetadataObject, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVMetadataObject, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVMetadataObject.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(AVMetadataObject.prototype, {
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CMTime($dispatch(this.$native, 'duration'));
			},
		
			enumerable: false
		},
		time: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CMTime($dispatch(this.$native, 'time'));
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'type'));
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

module.exports = AVMetadataObject;
