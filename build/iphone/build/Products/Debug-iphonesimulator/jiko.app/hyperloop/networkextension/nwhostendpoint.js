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


var NWEndpoint = require('/hyperloop/networkextension/nwendpoint');


/**
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NWHostEndpoint.h
 * @class
 */
function NWHostEndpoint (pointer) {
	if (!(this instanceof NWHostEndpoint)) {
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
			class: 'NWHostEndpoint',
			alloc: true,
			init: 'init'
		});
	}
	NWEndpoint.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NWHostEndpoint.prototype = Object.create(NWEndpoint.prototype, {
	constructor: {
		value: NWHostEndpoint,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NWHostEndpoint, NWEndpoint);

Object.defineProperty(NWHostEndpoint, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NWHostEndpoint, 'className', {
	value: 'NWHostEndpoint',
	enumerable: false,
	writable: true
});

Object.defineProperty(NWHostEndpoint.prototype, 'className', {
	value: 'NWHostEndpoint',
	enumerable: false,
	writable: true
});

Object.defineProperty(NWHostEndpoint.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NWHostEndpoint, 'toString', {
	value: function () {
		return '[class NWHostEndpoint]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NWHostEndpoint',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NWHostEndpoint, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NWHostEndpoint, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NWHostEndpoint.prototype, {
		hostname: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'hostname'));
			},
		
			enumerable: false
		},
		port: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'port'));
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

module.exports = NWHostEndpoint;
