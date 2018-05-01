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
 * FileProvider//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/FileProvider.framework/Headers/NSFileProviderDomain.h
 * @class
 */
function NSFileProviderDomain (pointer) {
	if (!(this instanceof NSFileProviderDomain)) {
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
			class: 'NSFileProviderDomain',
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
NSFileProviderDomain.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSFileProviderDomain,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSFileProviderDomain, NSObject);

Object.defineProperty(NSFileProviderDomain, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSFileProviderDomain, 'className', {
	value: 'NSFileProviderDomain',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFileProviderDomain.prototype, 'className', {
	value: 'NSFileProviderDomain',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFileProviderDomain.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSFileProviderDomain, 'toString', {
	value: function () {
		return '[class NSFileProviderDomain]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NSFileProviderDomain',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSFileProviderDomain, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSFileProviderDomain, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSFileProviderDomain.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
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

module.exports = NSFileProviderDomain;
