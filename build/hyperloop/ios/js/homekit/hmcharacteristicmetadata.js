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
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMCharacteristicMetadata.h
 * @class
 */
function HMCharacteristicMetadata (pointer) {
	if (!(this instanceof HMCharacteristicMetadata)) {
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
			class: 'HMCharacteristicMetadata',
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
HMCharacteristicMetadata.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: HMCharacteristicMetadata,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMCharacteristicMetadata, NSObject);

Object.defineProperty(HMCharacteristicMetadata, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMCharacteristicMetadata, 'className', {
	value: 'HMCharacteristicMetadata',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMCharacteristicMetadata.prototype, 'className', {
	value: 'HMCharacteristicMetadata',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMCharacteristicMetadata.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMCharacteristicMetadata, 'toString', {
	value: function () {
		return '[class HMCharacteristicMetadata]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'HMCharacteristicMetadata',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMCharacteristicMetadata, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMCharacteristicMetadata, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HMCharacteristicMetadata.prototype, {
		format: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'format'));
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

module.exports = HMCharacteristicMetadata;
