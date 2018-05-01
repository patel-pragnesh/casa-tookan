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


var NSMutableAttributedString = require('/hyperloop/foundation/nsmutableattributedstring');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/NSTextStorage.h
 * @class
 */
function NSTextStorage (pointer) {
	if (!(this instanceof NSTextStorage)) {
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
			class: 'NSTextStorage',
			alloc: true,
			init: 'init'
		});
	}
	NSMutableAttributedString.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSTextStorage.prototype = Object.create(NSMutableAttributedString.prototype, {
	constructor: {
		value: NSTextStorage,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSTextStorage, NSMutableAttributedString);

Object.defineProperty(NSTextStorage, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSTextStorage, 'className', {
	value: 'NSTextStorage',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSTextStorage.prototype, 'className', {
	value: 'NSTextStorage',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSTextStorage.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSTextStorage, 'toString', {
	value: function () {
		return '[class NSTextStorage]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'NSTextStorage',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSTextStorage, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSTextStorage, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSTextStorage.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = NSTextStorage;
