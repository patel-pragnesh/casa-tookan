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


var NSPort = require('/hyperloop/foundation/nsport');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSPort.h
 * @class
 */
function NSSocketPort (pointer) {
	if (!(this instanceof NSSocketPort)) {
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
			class: 'NSSocketPort',
			alloc: true,
			init: 'init'
		});
	}
	NSPort.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSSocketPort.prototype = Object.create(NSPort.prototype, {
	constructor: {
		value: NSSocketPort,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSSocketPort, NSPort);

Object.defineProperty(NSSocketPort, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSSocketPort, 'className', {
	value: 'NSSocketPort',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSSocketPort.prototype, 'className', {
	value: 'NSSocketPort',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSSocketPort.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSSocketPort, 'toString', {
	value: function () {
		return '[class NSSocketPort]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'NSSocketPort',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSSocketPort, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSSocketPort, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSSocketPort.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSSocketPort.prototype, {
		address: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'address'));
			},
		
			enumerable: false
		},
		protocol: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'protocol');
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

module.exports = NSSocketPort;
