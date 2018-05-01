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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAssetReaderOutput.h
 * @class
 */
function AVAssetReaderOutputMetadataAdaptor (pointer) {
	if (!(this instanceof AVAssetReaderOutputMetadataAdaptor)) {
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
			class: 'AVAssetReaderOutputMetadataAdaptor',
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
AVAssetReaderOutputMetadataAdaptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVAssetReaderOutputMetadataAdaptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetReaderOutputMetadataAdaptor, NSObject);

Object.defineProperty(AVAssetReaderOutputMetadataAdaptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetReaderOutputMetadataAdaptor, 'className', {
	value: 'AVAssetReaderOutputMetadataAdaptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetReaderOutputMetadataAdaptor.prototype, 'className', {
	value: 'AVAssetReaderOutputMetadataAdaptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetReaderOutputMetadataAdaptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetReaderOutputMetadataAdaptor, 'toString', {
	value: function () {
		return '[class AVAssetReaderOutputMetadataAdaptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVAssetReaderOutputMetadataAdaptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetReaderOutputMetadataAdaptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetReaderOutputMetadataAdaptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAssetReaderOutputMetadataAdaptor.prototype, 'init', {
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



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = AVAssetReaderOutputMetadataAdaptor;
