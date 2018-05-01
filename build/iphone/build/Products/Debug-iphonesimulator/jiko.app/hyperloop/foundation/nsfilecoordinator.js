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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSFileCoordinator.h
 * @class
 */
function NSFileCoordinator (pointer) {
	if (!(this instanceof NSFileCoordinator)) {
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
			class: 'NSFileCoordinator',
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
NSFileCoordinator.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSFileCoordinator,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSFileCoordinator, NSObject);

Object.defineProperty(NSFileCoordinator, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSFileCoordinator, 'className', {
	value: 'NSFileCoordinator',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFileCoordinator.prototype, 'className', {
	value: 'NSFileCoordinator',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFileCoordinator.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSFileCoordinator, 'toString', {
	value: function () {
		return '[class NSFileCoordinator]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSFileCoordinator',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSFileCoordinator, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSFileCoordinator, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSFileCoordinator.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
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

module.exports = NSFileCoordinator;
