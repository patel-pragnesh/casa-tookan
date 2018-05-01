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


var AVAssetReaderOutput = require('/hyperloop/avfoundation/avassetreaderoutput');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAssetReaderOutput.h
 * @class
 */
function AVAssetReaderTrackOutput (pointer) {
	if (!(this instanceof AVAssetReaderTrackOutput)) {
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
			class: 'AVAssetReaderTrackOutput',
			alloc: true,
			init: 'init'
		});
	}
	AVAssetReaderOutput.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVAssetReaderTrackOutput.prototype = Object.create(AVAssetReaderOutput.prototype, {
	constructor: {
		value: AVAssetReaderTrackOutput,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetReaderTrackOutput, AVAssetReaderOutput);

Object.defineProperty(AVAssetReaderTrackOutput, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetReaderTrackOutput, 'className', {
	value: 'AVAssetReaderTrackOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetReaderTrackOutput.prototype, 'className', {
	value: 'AVAssetReaderTrackOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetReaderTrackOutput.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetReaderTrackOutput, 'toString', {
	value: function () {
		return '[class AVAssetReaderTrackOutput]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.AVAssetTrack = require('/hyperloop/avfoundation/avassettrack');

	$class = Hyperloop.createProxy({
		class: 'AVAssetReaderTrackOutput',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetReaderTrackOutput, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetReaderTrackOutput, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAssetReaderTrackOutput.prototype, 'init', {
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
	Object.defineProperties(AVAssetReaderTrackOutput.prototype, {
		track: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.AVAssetTrack($dispatch(this.$native, 'track'));
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

module.exports = AVAssetReaderTrackOutput;
