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
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSEntityMapping.h
 * @class
 */
function NSEntityMapping (pointer) {
	if (!(this instanceof NSEntityMapping)) {
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
			class: 'NSEntityMapping',
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
NSEntityMapping.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSEntityMapping,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSEntityMapping, NSObject);

Object.defineProperty(NSEntityMapping, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSEntityMapping, 'className', {
	value: 'NSEntityMapping',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSEntityMapping.prototype, 'className', {
	value: 'NSEntityMapping',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSEntityMapping.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSEntityMapping, 'toString', {
	value: function () {
		return '[class NSEntityMapping]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NSEntityMapping',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSEntityMapping, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSEntityMapping, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSEntityMapping.prototype, {
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			set: function (_name) {
				if (!$init) { $initialize(); }
				this.$private.name = _name;
				$dispatch(this.$native, 'setName:', _name);
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

module.exports = NSEntityMapping;
