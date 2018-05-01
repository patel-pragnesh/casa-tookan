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
 * CoreNFC//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreNFC.framework/Headers/NFCTag.h
 * @class
 */
function NFCTagCommandConfiguration (pointer) {
	if (!(this instanceof NFCTagCommandConfiguration)) {
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
			class: 'NFCTagCommandConfiguration',
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
NFCTagCommandConfiguration.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NFCTagCommandConfiguration,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NFCTagCommandConfiguration, NSObject);

Object.defineProperty(NFCTagCommandConfiguration, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NFCTagCommandConfiguration, 'className', {
	value: 'NFCTagCommandConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCTagCommandConfiguration.prototype, 'className', {
	value: 'NFCTagCommandConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCTagCommandConfiguration.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NFCTagCommandConfiguration, 'toString', {
	value: function () {
		return '[class NFCTagCommandConfiguration]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NFCTagCommandConfiguration',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NFCTagCommandConfiguration, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NFCTagCommandConfiguration, '$private', {
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

module.exports = NFCTagCommandConfiguration;
