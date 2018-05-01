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


var NSURLResponse = require('/hyperloop/foundation/nsurlresponse');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSURLResponse.h
 * @class
 */
function NSHTTPURLResponse (pointer) {
	if (!(this instanceof NSHTTPURLResponse)) {
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
			class: 'NSHTTPURLResponse',
			alloc: true,
			init: 'init'
		});
	}
	NSURLResponse.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSHTTPURLResponse.prototype = Object.create(NSURLResponse.prototype, {
	constructor: {
		value: NSHTTPURLResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSHTTPURLResponse, NSURLResponse);

Object.defineProperty(NSHTTPURLResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSHTTPURLResponse, 'className', {
	value: 'NSHTTPURLResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSHTTPURLResponse.prototype, 'className', {
	value: 'NSHTTPURLResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSHTTPURLResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSHTTPURLResponse, 'toString', {
	value: function () {
		return '[class NSHTTPURLResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSHTTPURLResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSHTTPURLResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSHTTPURLResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSHTTPURLResponse.prototype, {
		statusCode: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'statusCode');
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

module.exports = NSHTTPURLResponse;
