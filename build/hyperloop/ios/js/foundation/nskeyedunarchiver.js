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


var NSCoder = require('/hyperloop/foundation/nscoder');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSKeyedArchiver.h
 * @class
 */
function NSKeyedUnarchiver (pointer) {
	if (!(this instanceof NSKeyedUnarchiver)) {
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
			class: 'NSKeyedUnarchiver',
			alloc: true,
			init: 'init'
		});
	}
	NSCoder.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSKeyedUnarchiver.prototype = Object.create(NSCoder.prototype, {
	constructor: {
		value: NSKeyedUnarchiver,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSKeyedUnarchiver, NSCoder);

Object.defineProperty(NSKeyedUnarchiver, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSKeyedUnarchiver, 'className', {
	value: 'NSKeyedUnarchiver',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSKeyedUnarchiver.prototype, 'className', {
	value: 'NSKeyedUnarchiver',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSKeyedUnarchiver.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSKeyedUnarchiver, 'toString', {
	value: function () {
		return '[class NSKeyedUnarchiver]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'NSKeyedUnarchiver',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSKeyedUnarchiver, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSKeyedUnarchiver, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSKeyedUnarchiver.prototype, {
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

module.exports = NSKeyedUnarchiver;
