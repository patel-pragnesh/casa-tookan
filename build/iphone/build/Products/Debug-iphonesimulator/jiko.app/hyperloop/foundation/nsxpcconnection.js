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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSXPCConnection.h
 * @class
 */
function NSXPCConnection (pointer) {
	if (!(this instanceof NSXPCConnection)) {
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
			class: 'NSXPCConnection',
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
NSXPCConnection.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSXPCConnection,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSXPCConnection, NSObject);

Object.defineProperty(NSXPCConnection, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSXPCConnection, 'className', {
	value: 'NSXPCConnection',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSXPCConnection.prototype, 'className', {
	value: 'NSXPCConnection',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSXPCConnection.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSXPCConnection, 'toString', {
	value: function () {
		return '[class NSXPCConnection]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSXPCListenerEndpoint = require('/hyperloop/foundation/nsxpclistenerendpoint');

	$class = Hyperloop.createProxy({
		class: 'NSXPCConnection',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSXPCConnection, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSXPCConnection, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSXPCConnection.prototype, 'resume', {
		value: function () {
			var result = $dispatch(this.$native, 'resume', null, true);
			return result;
		},
		enumerable: false,
		writable: true
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

module.exports = NSXPCConnection;
