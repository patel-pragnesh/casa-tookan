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
 * GameController//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCMicroGamepad.h
 * @class
 */
function GCMicroGamepad (pointer) {
	if (!(this instanceof GCMicroGamepad)) {
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
			class: 'GCMicroGamepad',
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
GCMicroGamepad.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GCMicroGamepad,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GCMicroGamepad, NSObject);

Object.defineProperty(GCMicroGamepad, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GCMicroGamepad, 'className', {
	value: 'GCMicroGamepad',
	enumerable: false,
	writable: true
});

Object.defineProperty(GCMicroGamepad.prototype, 'className', {
	value: 'GCMicroGamepad',
	enumerable: false,
	writable: true
});

Object.defineProperty(GCMicroGamepad.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GCMicroGamepad, 'toString', {
	value: function () {
		return '[class GCMicroGamepad]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GCMicroGamepad',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GCMicroGamepad, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GCMicroGamepad, '$private', {
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

module.exports = GCMicroGamepad;
