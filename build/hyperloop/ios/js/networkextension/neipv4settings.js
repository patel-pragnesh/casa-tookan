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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEIPv4Settings.h
 * @class
 */
function NEIPv4Settings (pointer) {
	if (!(this instanceof NEIPv4Settings)) {
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
			class: 'NEIPv4Settings',
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
NEIPv4Settings.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NEIPv4Settings,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEIPv4Settings, NSObject);

Object.defineProperty(NEIPv4Settings, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEIPv4Settings, 'className', {
	value: 'NEIPv4Settings',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEIPv4Settings.prototype, 'className', {
	value: 'NEIPv4Settings',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEIPv4Settings.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEIPv4Settings, 'toString', {
	value: function () {
		return '[class NEIPv4Settings]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'NEIPv4Settings',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEIPv4Settings, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEIPv4Settings, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NEIPv4Settings.prototype, {
		addresses: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'addresses'));
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

module.exports = NEIPv4Settings;
