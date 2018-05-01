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


var NEVPNProtocol = require('/hyperloop/networkextension/nevpnprotocol');


/**
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEVPNProtocolIPSec.h
 * @class
 */
function NEVPNProtocolIPSec (pointer) {
	if (!(this instanceof NEVPNProtocolIPSec)) {
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
			class: 'NEVPNProtocolIPSec',
			alloc: true,
			init: 'init'
		});
	}
	NEVPNProtocol.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NEVPNProtocolIPSec.prototype = Object.create(NEVPNProtocol.prototype, {
	constructor: {
		value: NEVPNProtocolIPSec,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEVPNProtocolIPSec, NEVPNProtocol);

Object.defineProperty(NEVPNProtocolIPSec, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEVPNProtocolIPSec, 'className', {
	value: 'NEVPNProtocolIPSec',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEVPNProtocolIPSec.prototype, 'className', {
	value: 'NEVPNProtocolIPSec',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEVPNProtocolIPSec.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEVPNProtocolIPSec, 'toString', {
	value: function () {
		return '[class NEVPNProtocolIPSec]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NEVPNProtocolIPSec',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEVPNProtocolIPSec, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEVPNProtocolIPSec, '$private', {
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

module.exports = NEVPNProtocolIPSec;
