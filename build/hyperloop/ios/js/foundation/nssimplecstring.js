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


var NSString = require('/hyperloop/foundation/nsstring');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSString.h
 * @class
 */
function NSSimpleCString (pointer) {
	if (!(this instanceof NSSimpleCString)) {
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
			class: 'NSSimpleCString',
			alloc: true,
			init: 'init'
		});
	}
	NSString.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSSimpleCString.prototype = Object.create(NSString.prototype, {
	constructor: {
		value: NSSimpleCString,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSSimpleCString, NSString);

Object.defineProperty(NSSimpleCString, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSSimpleCString, 'className', {
	value: 'NSSimpleCString',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSSimpleCString.prototype, 'className', {
	value: 'NSSimpleCString',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSSimpleCString.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSSimpleCString, 'toString', {
	value: function () {
		return '[class NSSimpleCString]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSSimpleCString',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSSimpleCString, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSSimpleCString, '$private', {
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

module.exports = NSSimpleCString;
