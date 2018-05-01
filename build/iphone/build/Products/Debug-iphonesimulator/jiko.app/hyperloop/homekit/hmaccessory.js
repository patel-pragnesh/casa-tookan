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
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMAccessory.h
 * @class
 */
function HMAccessory (pointer) {
	if (!(this instanceof HMAccessory)) {
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
			class: 'HMAccessory',
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
HMAccessory.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: HMAccessory,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMAccessory, NSObject);

Object.defineProperty(HMAccessory, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMAccessory, 'className', {
	value: 'HMAccessory',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMAccessory.prototype, 'className', {
	value: 'HMAccessory',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMAccessory.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMAccessory, 'toString', {
	value: function () {
		return '[class HMAccessory]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.HMAccessoryCategory = require('/hyperloop/homekit/hmaccessorycategory');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSUUID = require('/hyperloop/foundation/nsuuid');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'HMAccessory',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMAccessory, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMAccessory, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HMAccessory.prototype, {
		category: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.HMAccessoryCategory($dispatch(this.$native, 'category'));
			},
		
			enumerable: false
		},
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSUUID($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		model: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'model'));
			},
		
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
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

module.exports = HMAccessory;
