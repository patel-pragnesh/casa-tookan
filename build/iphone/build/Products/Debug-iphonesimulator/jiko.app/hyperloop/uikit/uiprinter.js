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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIPrinter.h
 * @class
 */
function UIPrinter (pointer) {
	if (!(this instanceof UIPrinter)) {
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
			class: 'UIPrinter',
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
UIPrinter.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIPrinter,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIPrinter, NSObject);

Object.defineProperty(UIPrinter, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIPrinter, 'className', {
	value: 'UIPrinter',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIPrinter.prototype, 'className', {
	value: 'UIPrinter',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIPrinter.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIPrinter, 'toString', {
	value: function () {
		return '[class UIPrinter]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');

	$class = Hyperloop.createProxy({
		class: 'UIPrinter',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIPrinter, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIPrinter, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIPrinter.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
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

module.exports = UIPrinter;