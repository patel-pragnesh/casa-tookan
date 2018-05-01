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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NETunnelNetworkSettings.h
 * @class
 */
function NETunnelNetworkSettings (pointer) {
	if (!(this instanceof NETunnelNetworkSettings)) {
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
			class: 'NETunnelNetworkSettings',
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
NETunnelNetworkSettings.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NETunnelNetworkSettings,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NETunnelNetworkSettings, NSObject);

Object.defineProperty(NETunnelNetworkSettings, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NETunnelNetworkSettings, 'className', {
	value: 'NETunnelNetworkSettings',
	enumerable: false,
	writable: true
});

Object.defineProperty(NETunnelNetworkSettings.prototype, 'className', {
	value: 'NETunnelNetworkSettings',
	enumerable: false,
	writable: true
});

Object.defineProperty(NETunnelNetworkSettings.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NETunnelNetworkSettings, 'toString', {
	value: function () {
		return '[class NETunnelNetworkSettings]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NETunnelNetworkSettings',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NETunnelNetworkSettings, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NETunnelNetworkSettings, '$private', {
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

module.exports = NETunnelNetworkSettings;
