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


var AVMetadataGroup = require('/hyperloop/avfoundation/avmetadatagroup');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVTimedMetadataGroup.h
 * @class
 */
function AVTimedMetadataGroup (pointer) {
	if (!(this instanceof AVTimedMetadataGroup)) {
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
			class: 'AVTimedMetadataGroup',
			alloc: true,
			init: 'init'
		});
	}
	AVMetadataGroup.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVTimedMetadataGroup.prototype = Object.create(AVMetadataGroup.prototype, {
	constructor: {
		value: AVTimedMetadataGroup,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVTimedMetadataGroup, AVMetadataGroup);

Object.defineProperty(AVTimedMetadataGroup, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVTimedMetadataGroup, 'className', {
	value: 'AVTimedMetadataGroup',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVTimedMetadataGroup.prototype, 'className', {
	value: 'AVTimedMetadataGroup',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVTimedMetadataGroup.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVTimedMetadataGroup, 'toString', {
	value: function () {
		return '[class AVTimedMetadataGroup]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVTimedMetadataGroup',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVTimedMetadataGroup, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVTimedMetadataGroup, '$private', {
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

module.exports = AVTimedMetadataGroup;
