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


var NSURLSessionTask = require('/hyperloop/foundation/nsurlsessiontask');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSURLSession.h
 * @class
 */
function NSURLSessionDataTask (pointer) {
	if (!(this instanceof NSURLSessionDataTask)) {
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
			class: 'NSURLSessionDataTask',
			alloc: true,
			init: 'init'
		});
	}
	NSURLSessionTask.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSURLSessionDataTask.prototype = Object.create(NSURLSessionTask.prototype, {
	constructor: {
		value: NSURLSessionDataTask,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSURLSessionDataTask, NSURLSessionTask);

Object.defineProperty(NSURLSessionDataTask, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSURLSessionDataTask, 'className', {
	value: 'NSURLSessionDataTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSURLSessionDataTask.prototype, 'className', {
	value: 'NSURLSessionDataTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSURLSessionDataTask.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSURLSessionDataTask, 'toString', {
	value: function () {
		return '[class NSURLSessionDataTask]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSURLSessionDataTask',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSURLSessionDataTask, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSURLSessionDataTask, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = NSURLSessionDataTask;
