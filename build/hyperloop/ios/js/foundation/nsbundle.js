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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSBundle.h
 * @class
 */
function NSBundle (pointer) {
	if (!(this instanceof NSBundle)) {
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
			class: 'NSBundle',
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
NSBundle.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSBundle,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSBundle, NSObject);

Object.defineProperty(NSBundle, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSBundle, 'className', {
	value: 'NSBundle',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSBundle.prototype, 'className', {
	value: 'NSBundle',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSBundle.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSBundle, 'toString', {
	value: function () {
		return '[class NSBundle]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSBundle',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSBundle, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSBundle, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSBundle.prototype, 'initWithURL', {
		value: function (_url) {
			var result = $dispatch(this.$native, 'initWithURL:', [_url], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithURL = instance.$private.initWithURL || [];
			instance.$private.initWithURL.push(_url);
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSBundle.prototype, 'load', {
		value: function () {
			var result = $dispatch(this.$native, 'load', null, true);
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

module.exports = NSBundle;
