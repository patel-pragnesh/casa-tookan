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


var AVAssetTrackSegment = require('/hyperloop/avfoundation/avassettracksegment');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCompositionTrackSegment.h
 * @class
 */
function AVCompositionTrackSegment (pointer) {
	if (!(this instanceof AVCompositionTrackSegment)) {
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
			class: 'AVCompositionTrackSegment',
			alloc: true,
			init: 'init'
		});
	}
	AVAssetTrackSegment.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVCompositionTrackSegment.prototype = Object.create(AVAssetTrackSegment.prototype, {
	constructor: {
		value: AVCompositionTrackSegment,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVCompositionTrackSegment, AVAssetTrackSegment);

Object.defineProperty(AVCompositionTrackSegment, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVCompositionTrackSegment, 'className', {
	value: 'AVCompositionTrackSegment',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCompositionTrackSegment.prototype, 'className', {
	value: 'AVCompositionTrackSegment',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVCompositionTrackSegment.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVCompositionTrackSegment, 'toString', {
	value: function () {
		return '[class AVCompositionTrackSegment]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');

	$class = Hyperloop.createProxy({
		class: 'AVCompositionTrackSegment',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVCompositionTrackSegment, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVCompositionTrackSegment, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVCompositionTrackSegment.prototype, 'isEmpty', {
		value: function () {
			var result = $dispatch(this.$native, 'isEmpty', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(AVCompositionTrackSegment.prototype, {
		sourceURL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'sourceURL'));
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

module.exports = AVCompositionTrackSegment;
