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


var NSDimension = require('/hyperloop/foundation/nsdimension');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSUnit.h
 * @class
 */
function NSUnitDuration (pointer) {
	if (!(this instanceof NSUnitDuration)) {
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
			class: 'NSUnitDuration',
			alloc: true,
			init: 'init'
		});
	}
	NSDimension.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSUnitDuration.prototype = Object.create(NSDimension.prototype, {
	constructor: {
		value: NSUnitDuration,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSUnitDuration, NSDimension);

Object.defineProperty(NSUnitDuration, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSUnitDuration, 'className', {
	value: 'NSUnitDuration',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSUnitDuration.prototype, 'className', {
	value: 'NSUnitDuration',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSUnitDuration.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSUnitDuration, 'toString', {
	value: function () {
		return '[class NSUnitDuration]';
	},
	enumerable: false,
	writable: true
});

// class properties
Object.defineProperties(NSUnitDuration, {
	seconds: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'seconds', null, true));
			},
	
		enumerable: false
	}
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSUnitDuration',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSUnitDuration, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSUnitDuration, '$private', {
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

module.exports = NSUnitDuration;
