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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NWUDPSession.h
 * @class
 */
function NWUDPSession (pointer) {
	if (!(this instanceof NWUDPSession)) {
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
			class: 'NWUDPSession',
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
NWUDPSession.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NWUDPSession,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NWUDPSession, NSObject);

Object.defineProperty(NWUDPSession, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NWUDPSession, 'className', {
	value: 'NWUDPSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(NWUDPSession.prototype, 'className', {
	value: 'NWUDPSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(NWUDPSession.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NWUDPSession, 'toString', {
	value: function () {
		return '[class NWUDPSession]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NWPath = require('/hyperloop/networkextension/nwpath');
	$imports.NWEndpoint = require('/hyperloop/networkextension/nwendpoint');

	$class = Hyperloop.createProxy({
		class: 'NWUDPSession',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NWUDPSession, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NWUDPSession, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NWUDPSession.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NWUDPSession.prototype, {
		currentPath: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NWPath($dispatch(this.$native, 'currentPath'));
			},
		
			enumerable: false
		},
		state: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'state');
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

module.exports = NWUDPSession;
