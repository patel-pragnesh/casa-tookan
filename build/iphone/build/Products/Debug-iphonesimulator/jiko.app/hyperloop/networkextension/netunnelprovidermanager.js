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


var NEVPNManager = require('/hyperloop/networkextension/nevpnmanager');


/**
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NETunnelProviderManager.h
 * @class
 */
function NETunnelProviderManager (pointer) {
	if (!(this instanceof NETunnelProviderManager)) {
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
			class: 'NETunnelProviderManager',
			alloc: true,
			init: 'init'
		});
	}
	NEVPNManager.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NETunnelProviderManager.prototype = Object.create(NEVPNManager.prototype, {
	constructor: {
		value: NETunnelProviderManager,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NETunnelProviderManager, NEVPNManager);

Object.defineProperty(NETunnelProviderManager, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NETunnelProviderManager, 'className', {
	value: 'NETunnelProviderManager',
	enumerable: false,
	writable: true
});

Object.defineProperty(NETunnelProviderManager.prototype, 'className', {
	value: 'NETunnelProviderManager',
	enumerable: false,
	writable: true
});

Object.defineProperty(NETunnelProviderManager.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NETunnelProviderManager, 'toString', {
	value: function () {
		return '[class NETunnelProviderManager]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NETunnelProviderManager',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NETunnelProviderManager, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NETunnelProviderManager, '$private', {
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

module.exports = NETunnelProviderManager;
