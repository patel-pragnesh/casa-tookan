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


var NSCharacterSet = require('/hyperloop/foundation/nscharacterset');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSCharacterSet.h
 * @class
 */
function NSMutableCharacterSet (pointer) {
	if (!(this instanceof NSMutableCharacterSet)) {
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
			class: 'NSMutableCharacterSet',
			alloc: true,
			init: 'init'
		});
	}
	NSCharacterSet.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSMutableCharacterSet.prototype = Object.create(NSCharacterSet.prototype, {
	constructor: {
		value: NSMutableCharacterSet,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSMutableCharacterSet, NSCharacterSet);

Object.defineProperty(NSMutableCharacterSet, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSMutableCharacterSet, 'className', {
	value: 'NSMutableCharacterSet',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSMutableCharacterSet.prototype, 'className', {
	value: 'NSMutableCharacterSet',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSMutableCharacterSet.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSMutableCharacterSet, 'toString', {
	value: function () {
		return '[class NSMutableCharacterSet]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSMutableCharacterSet',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSMutableCharacterSet, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSMutableCharacterSet, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSMutableCharacterSet.prototype, 'invert', {
		value: function () {
			var result = $dispatch(this.$native, 'invert', null, true);
			return result;
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

module.exports = NSMutableCharacterSet;