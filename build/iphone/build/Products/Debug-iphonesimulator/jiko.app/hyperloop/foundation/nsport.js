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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSPort.h
 * @class
 */
function NSPort (pointer) {
	if (!(this instanceof NSPort)) {
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
			class: 'NSPort',
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
NSPort.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSPort,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSPort, NSObject);

Object.defineProperty(NSPort, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSPort, 'className', {
	value: 'NSPort',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPort.prototype, 'className', {
	value: 'NSPort',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPort.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSPort, 'toString', {
	value: function () {
		return '[class NSPort]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(NSPort, 'port', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'port', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'NSPort',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSPort, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSPort, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSPort.prototype, 'delegate', {
		value: function () {
			var result = $dispatch(this.$native, 'delegate', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSObject(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSPort.prototype, 'isValid', {
		value: function () {
			var result = $dispatch(this.$native, 'isValid', null, true);
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

module.exports = NSPort;
