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


var NEProvider = require('/hyperloop/networkextension/neprovider');


/**
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NETunnelProvider.h
 * @class
 */
function NETunnelProvider (pointer) {
	if (!(this instanceof NETunnelProvider)) {
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
			class: 'NETunnelProvider',
			alloc: true,
			init: 'init'
		});
	}
	NEProvider.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NETunnelProvider.prototype = Object.create(NEProvider.prototype, {
	constructor: {
		value: NETunnelProvider,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NETunnelProvider, NEProvider);

Object.defineProperty(NETunnelProvider, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NETunnelProvider, 'className', {
	value: 'NETunnelProvider',
	enumerable: false,
	writable: true
});

Object.defineProperty(NETunnelProvider.prototype, 'className', {
	value: 'NETunnelProvider',
	enumerable: false,
	writable: true
});

Object.defineProperty(NETunnelProvider.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NETunnelProvider, 'toString', {
	value: function () {
		return '[class NETunnelProvider]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NETunnelProvider',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NETunnelProvider, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NETunnelProvider, '$private', {
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

module.exports = NETunnelProvider;
