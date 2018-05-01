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
 * PassKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PassKit.framework/Headers/PKPassLibrary.h
 * @class
 */
function PKPassLibrary (pointer) {
	if (!(this instanceof PKPassLibrary)) {
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
			class: 'PKPassLibrary',
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
PKPassLibrary.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PKPassLibrary,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PKPassLibrary, NSObject);

Object.defineProperty(PKPassLibrary, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PKPassLibrary, 'className', {
	value: 'PKPassLibrary',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPassLibrary.prototype, 'className', {
	value: 'PKPassLibrary',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPassLibrary.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PKPassLibrary, 'toString', {
	value: function () {
		return '[class PKPassLibrary]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'PKPassLibrary',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PKPassLibrary, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PKPassLibrary, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PKPassLibrary.prototype, 'passes', {
		value: function () {
			var result = $dispatch(this.$native, 'passes', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSArray(result);
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

module.exports = PKPassLibrary;
