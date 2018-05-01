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
 * FileProvider//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/FileProvider.framework/Headers/NSFileProviderExtension.h
 * @class
 */
function NSFileProviderExtension (pointer) {
	if (!(this instanceof NSFileProviderExtension)) {
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
			class: 'NSFileProviderExtension',
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
NSFileProviderExtension.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSFileProviderExtension,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSFileProviderExtension, NSObject);

Object.defineProperty(NSFileProviderExtension, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSFileProviderExtension, 'className', {
	value: 'NSFileProviderExtension',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFileProviderExtension.prototype, 'className', {
	value: 'NSFileProviderExtension',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFileProviderExtension.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSFileProviderExtension, 'toString', {
	value: function () {
		return '[class NSFileProviderExtension]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSFileProviderDomain = require('/hyperloop/fileprovider/nsfileproviderdomain');

	$class = Hyperloop.createProxy({
		class: 'NSFileProviderExtension',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSFileProviderExtension, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSFileProviderExtension, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSFileProviderExtension.prototype, {
		domain: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSFileProviderDomain($dispatch(this.$native, 'domain'));
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

module.exports = NSFileProviderExtension;
