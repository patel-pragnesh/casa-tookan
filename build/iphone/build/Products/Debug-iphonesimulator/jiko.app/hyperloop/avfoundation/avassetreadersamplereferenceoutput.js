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
function AVAssetReaderSampleReferenceOutput (pointer) {
	if (!(this instanceof AVAssetReaderSampleReferenceOutput)) {
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
			class: 'AVAssetReaderSampleReferenceOutput',
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
AVAssetReaderSampleReferenceOutput.prototype = Object.create(AVAssetReaderOutput.prototype, {
	constructor: {
		value: AVAssetReaderSampleReferenceOutput,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetReaderSampleReferenceOutput, AVAssetReaderOutput);

Object.defineProperty(AVAssetReaderSampleReferenceOutput, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetReaderSampleReferenceOutput, 'className', {
	value: 'AVAssetReaderSampleReferenceOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetReaderSampleReferenceOutput.prototype, 'className', {
	value: 'AVAssetReaderSampleReferenceOutput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetReaderSampleReferenceOutput.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetReaderSampleReferenceOutput, 'toString', {
	value: function () {
		return '[class AVAssetReaderSampleReferenceOutput]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.AVAssetTrack = require('/hyperloop/avfoundation/avassettrack');

	$class = Hyperloop.createProxy({
		class: 'AVAssetReaderSampleReferenceOutput',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetReaderSampleReferenceOutput, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetReaderSampleReferenceOutput, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAssetReaderSampleReferenceOutput.prototype, 'init', {
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
	Object.defineProperties(AVAssetReaderSampleReferenceOutput.prototype, {
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

module.exports = AVAssetReaderSampleReferenceOutput;
