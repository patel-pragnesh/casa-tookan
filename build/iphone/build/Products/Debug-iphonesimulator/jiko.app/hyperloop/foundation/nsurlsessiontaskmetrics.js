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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSURLSession.h
 * @class
 */
function NSURLSessionTaskMetrics (pointer) {
	if (!(this instanceof NSURLSessionTaskMetrics)) {
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
			class: 'NSURLSessionTaskMetrics',
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
NSURLSessionTaskMetrics.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSURLSessionTaskMetrics,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSURLSessionTaskMetrics, NSObject);

Object.defineProperty(NSURLSessionTaskMetrics, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSURLSessionTaskMetrics, 'className', {
	value: 'NSURLSessionTaskMetrics',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSURLSessionTaskMetrics.prototype, 'className', {
	value: 'NSURLSessionTaskMetrics',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSURLSessionTaskMetrics.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSURLSessionTaskMetrics, 'toString', {
	value: function () {
		return '[class NSURLSessionTaskMetrics]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSURLSessionTaskMetrics',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSURLSessionTaskMetrics, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSURLSessionTaskMetrics, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSURLSessionTaskMetrics.prototype, 'init', {
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



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = NSURLSessionTaskMetrics;
