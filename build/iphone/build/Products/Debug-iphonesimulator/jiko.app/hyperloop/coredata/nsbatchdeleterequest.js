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


var NSPersistentStoreRequest = require('/hyperloop/coredata/nspersistentstorerequest');


/**
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSBatchDeleteRequest.h
 * @class
 */
function NSBatchDeleteRequest (pointer) {
	if (!(this instanceof NSBatchDeleteRequest)) {
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
			class: 'NSBatchDeleteRequest',
			alloc: true,
			init: 'init'
		});
	}
	NSPersistentStoreRequest.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSBatchDeleteRequest.prototype = Object.create(NSPersistentStoreRequest.prototype, {
	constructor: {
		value: NSBatchDeleteRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSBatchDeleteRequest, NSPersistentStoreRequest);

Object.defineProperty(NSBatchDeleteRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSBatchDeleteRequest, 'className', {
	value: 'NSBatchDeleteRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSBatchDeleteRequest.prototype, 'className', {
	value: 'NSBatchDeleteRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSBatchDeleteRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSBatchDeleteRequest, 'toString', {
	value: function () {
		return '[class NSBatchDeleteRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSBatchDeleteRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSBatchDeleteRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSBatchDeleteRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSBatchDeleteRequest.prototype, 'init', {
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

module.exports = NSBatchDeleteRequest;
