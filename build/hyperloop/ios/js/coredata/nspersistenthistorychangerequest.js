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
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSPersistentHistoryChangeRequest.h
 * @class
 */
function NSPersistentHistoryChangeRequest (pointer) {
	if (!(this instanceof NSPersistentHistoryChangeRequest)) {
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
			class: 'NSPersistentHistoryChangeRequest',
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
NSPersistentHistoryChangeRequest.prototype = Object.create(NSPersistentStoreRequest.prototype, {
	constructor: {
		value: NSPersistentHistoryChangeRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSPersistentHistoryChangeRequest, NSPersistentStoreRequest);

Object.defineProperty(NSPersistentHistoryChangeRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSPersistentHistoryChangeRequest, 'className', {
	value: 'NSPersistentHistoryChangeRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentHistoryChangeRequest.prototype, 'className', {
	value: 'NSPersistentHistoryChangeRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentHistoryChangeRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSPersistentHistoryChangeRequest, 'toString', {
	value: function () {
		return '[class NSPersistentHistoryChangeRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSPersistentHistoryToken = require('/hyperloop/coredata/nspersistenthistorytoken');

	$class = Hyperloop.createProxy({
		class: 'NSPersistentHistoryChangeRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSPersistentHistoryChangeRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSPersistentHistoryChangeRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSPersistentHistoryChangeRequest.prototype, {
		token: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSPersistentHistoryToken($dispatch(this.$native, 'token'));
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

module.exports = NSPersistentHistoryChangeRequest;
