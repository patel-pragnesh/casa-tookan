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
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMAccessoryBrowser.h
 * @class
 */
function HMAccessoryBrowser (pointer) {
	if (!(this instanceof HMAccessoryBrowser)) {
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
			class: 'HMAccessoryBrowser',
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
HMAccessoryBrowser.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: HMAccessoryBrowser,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMAccessoryBrowser, NSObject);

Object.defineProperty(HMAccessoryBrowser, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMAccessoryBrowser, 'className', {
	value: 'HMAccessoryBrowser',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMAccessoryBrowser.prototype, 'className', {
	value: 'HMAccessoryBrowser',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMAccessoryBrowser.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMAccessoryBrowser, 'toString', {
	value: function () {
		return '[class HMAccessoryBrowser]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'HMAccessoryBrowser',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMAccessoryBrowser, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMAccessoryBrowser, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HMAccessoryBrowser.prototype, {
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

module.exports = HMAccessoryBrowser;
