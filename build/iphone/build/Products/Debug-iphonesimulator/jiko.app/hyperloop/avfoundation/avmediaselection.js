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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVMediaSelection.h
 * @class
 */
function AVMediaSelection (pointer) {
	if (!(this instanceof AVMediaSelection)) {
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
			class: 'AVMediaSelection',
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
AVMediaSelection.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVMediaSelection,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVMediaSelection, NSObject);

Object.defineProperty(AVMediaSelection, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVMediaSelection, 'className', {
	value: 'AVMediaSelection',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMediaSelection.prototype, 'className', {
	value: 'AVMediaSelection',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMediaSelection.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVMediaSelection, 'toString', {
	value: function () {
		return '[class AVMediaSelection]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.AVAsset = require('/hyperloop/avfoundation/avasset');

	$class = Hyperloop.createProxy({
		class: 'AVMediaSelection',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVMediaSelection, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVMediaSelection, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVMediaSelection.prototype, {
		asset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.AVAsset($dispatch(this.$native, 'asset'));
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

module.exports = AVMediaSelection;
