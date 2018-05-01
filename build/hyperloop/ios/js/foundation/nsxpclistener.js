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
function NSXPCListener (pointer) {
	if (!(this instanceof NSXPCListener)) {
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
			class: 'NSXPCListener',
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
NSXPCListener.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSXPCListener,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSXPCListener, NSObject);

Object.defineProperty(NSXPCListener, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSXPCListener, 'className', {
	value: 'NSXPCListener',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSXPCListener.prototype, 'className', {
	value: 'NSXPCListener',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSXPCListener.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSXPCListener, 'toString', {
	value: function () {
		return '[class NSXPCListener]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSXPCListenerEndpoint = require('/hyperloop/foundation/nsxpclistenerendpoint');

	$class = Hyperloop.createProxy({
		class: 'NSXPCListener',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSXPCListener, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSXPCListener, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSXPCListener.prototype, 'resume', {
		value: function () {
			var result = $dispatch(this.$native, 'resume', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSXPCListener.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = NSXPCListener;
