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


var AVMediaSelectionGroup = require('/hyperloop/avfoundation/avmediaselectiongroup');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAssetWriter.h
 * @class
 */
function AVAssetWriterInputGroup (pointer) {
	if (!(this instanceof AVAssetWriterInputGroup)) {
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
			class: 'AVAssetWriterInputGroup',
			alloc: true,
			init: 'init'
		});
	}
	AVMediaSelectionGroup.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVAssetWriterInputGroup.prototype = Object.create(AVMediaSelectionGroup.prototype, {
	constructor: {
		value: AVAssetWriterInputGroup,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetWriterInputGroup, AVMediaSelectionGroup);

Object.defineProperty(AVAssetWriterInputGroup, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetWriterInputGroup, 'className', {
	value: 'AVAssetWriterInputGroup',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetWriterInputGroup.prototype, 'className', {
	value: 'AVAssetWriterInputGroup',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetWriterInputGroup.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetWriterInputGroup, 'toString', {
	value: function () {
		return '[class AVAssetWriterInputGroup]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'AVAssetWriterInputGroup',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetWriterInputGroup, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetWriterInputGroup, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAssetWriterInputGroup.prototype, 'init', {
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
	Object.defineProperties(AVAssetWriterInputGroup.prototype, {
		inputs: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'inputs'));
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

module.exports = AVAssetWriterInputGroup;
