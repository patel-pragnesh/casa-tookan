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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NWBonjourServiceEndpoint.h
 * @class
 */
function NWBonjourServiceEndpoint (pointer) {
	if (!(this instanceof NWBonjourServiceEndpoint)) {
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
			class: 'NWBonjourServiceEndpoint',
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
NWBonjourServiceEndpoint.prototype = Object.create(NWEndpoint.prototype, {
	constructor: {
		value: NWBonjourServiceEndpoint,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NWBonjourServiceEndpoint, NWEndpoint);

Object.defineProperty(NWBonjourServiceEndpoint, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NWBonjourServiceEndpoint, 'className', {
	value: 'NWBonjourServiceEndpoint',
	enumerable: false,
	writable: true
});

Object.defineProperty(NWBonjourServiceEndpoint.prototype, 'className', {
	value: 'NWBonjourServiceEndpoint',
	enumerable: false,
	writable: true
});

Object.defineProperty(NWBonjourServiceEndpoint.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NWBonjourServiceEndpoint, 'toString', {
	value: function () {
		return '[class NWBonjourServiceEndpoint]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NWBonjourServiceEndpoint',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NWBonjourServiceEndpoint, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NWBonjourServiceEndpoint, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NWBonjourServiceEndpoint.prototype, {
		domain: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'domain'));
			},
		
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'type'));
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

module.exports = NWBonjourServiceEndpoint;
