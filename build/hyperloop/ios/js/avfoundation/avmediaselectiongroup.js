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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVMediaSelectionGroup.h
 * @class
 */
function AVMediaSelectionGroup (pointer) {
	if (!(this instanceof AVMediaSelectionGroup)) {
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
			class: 'AVMediaSelectionGroup',
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
AVMediaSelectionGroup.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVMediaSelectionGroup,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVMediaSelectionGroup, NSObject);

Object.defineProperty(AVMediaSelectionGroup, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVMediaSelectionGroup, 'className', {
	value: 'AVMediaSelectionGroup',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMediaSelectionGroup.prototype, 'className', {
	value: 'AVMediaSelectionGroup',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMediaSelectionGroup.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVMediaSelectionGroup, 'toString', {
	value: function () {
		return '[class AVMediaSelectionGroup]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'AVMediaSelectionGroup',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVMediaSelectionGroup, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVMediaSelectionGroup, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVMediaSelectionGroup.prototype, {
		options: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'options'));
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

module.exports = AVMediaSelectionGroup;
