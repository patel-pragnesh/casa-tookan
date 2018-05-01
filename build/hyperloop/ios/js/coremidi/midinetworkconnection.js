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
function MIDINetworkConnection (pointer) {
	if (!(this instanceof MIDINetworkConnection)) {
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
			class: 'MIDINetworkConnection',
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
MIDINetworkConnection.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MIDINetworkConnection,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MIDINetworkConnection, NSObject);

Object.defineProperty(MIDINetworkConnection, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MIDINetworkConnection, 'className', {
	value: 'MIDINetworkConnection',
	enumerable: false,
	writable: true
});

Object.defineProperty(MIDINetworkConnection.prototype, 'className', {
	value: 'MIDINetworkConnection',
	enumerable: false,
	writable: true
});

Object.defineProperty(MIDINetworkConnection.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MIDINetworkConnection, 'toString', {
	value: function () {
		return '[class MIDINetworkConnection]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MIDINetworkHost = require('/hyperloop/coremidi/midinetworkhost');

	$class = Hyperloop.createProxy({
		class: 'MIDINetworkConnection',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MIDINetworkConnection, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MIDINetworkConnection, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MIDINetworkConnection.prototype, {
		host: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MIDINetworkHost($dispatch(this.$native, 'host'));
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

module.exports = MIDINetworkConnection;
