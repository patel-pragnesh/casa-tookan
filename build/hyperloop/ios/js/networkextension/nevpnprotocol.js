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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEVPNProtocol.h
 * @class
 */
function NEVPNProtocol (pointer) {
	if (!(this instanceof NEVPNProtocol)) {
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
			class: 'NEVPNProtocol',
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
NEVPNProtocol.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NEVPNProtocol,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEVPNProtocol, NSObject);

Object.defineProperty(NEVPNProtocol, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEVPNProtocol, 'className', {
	value: 'NEVPNProtocol',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEVPNProtocol.prototype, 'className', {
	value: 'NEVPNProtocol',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEVPNProtocol.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEVPNProtocol, 'toString', {
	value: function () {
		return '[class NEVPNProtocol]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NEVPNProtocol',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEVPNProtocol, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEVPNProtocol, '$private', {
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

module.exports = NEVPNProtocol;
