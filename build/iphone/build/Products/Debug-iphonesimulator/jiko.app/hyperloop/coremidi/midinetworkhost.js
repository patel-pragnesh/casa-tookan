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
 * CoreMIDI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDINetworkSession.h
 * @class
 */
function MIDINetworkHost (pointer) {
	if (!(this instanceof MIDINetworkHost)) {
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
			class: 'MIDINetworkHost',
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
MIDINetworkHost.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MIDINetworkHost,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MIDINetworkHost, NSObject);

Object.defineProperty(MIDINetworkHost, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MIDINetworkHost, 'className', {
	value: 'MIDINetworkHost',
	enumerable: false,
	writable: true
});

Object.defineProperty(MIDINetworkHost.prototype, 'className', {
	value: 'MIDINetworkHost',
	enumerable: false,
	writable: true
});

Object.defineProperty(MIDINetworkHost.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MIDINetworkHost, 'toString', {
	value: function () {
		return '[class MIDINetworkHost]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'MIDINetworkHost',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MIDINetworkHost, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MIDINetworkHost, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MIDINetworkHost.prototype, {
		address: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'address'));
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
		port: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'port');
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

module.exports = MIDINetworkHost;