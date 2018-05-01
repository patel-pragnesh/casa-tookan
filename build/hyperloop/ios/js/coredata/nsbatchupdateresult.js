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


var NSPersistentStoreResult = require('/hyperloop/coredata/nspersistentstoreresult');


/**
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSPersistentStoreResult.h
 * @class
 */
function NSBatchUpdateResult (pointer) {
	if (!(this instanceof NSBatchUpdateResult)) {
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
			class: 'NSBatchUpdateResult',
			alloc: true,
			init: 'init'
		});
	}
	NSPersistentStoreResult.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSBatchUpdateResult.prototype = Object.create(NSPersistentStoreResult.prototype, {
	constructor: {
		value: NSBatchUpdateResult,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSBatchUpdateResult, NSPersistentStoreResult);

Object.defineProperty(NSBatchUpdateResult, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSBatchUpdateResult, 'className', {
	value: 'NSBatchUpdateResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSBatchUpdateResult.prototype, 'className', {
	value: 'NSBatchUpdateResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSBatchUpdateResult.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSBatchUpdateResult, 'toString', {
	value: function () {
		return '[class NSBatchUpdateResult]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'NSBatchUpdateResult',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSBatchUpdateResult, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSBatchUpdateResult, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSBatchUpdateResult.prototype, {
		result: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'result'));
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

module.exports = NSBatchUpdateResult;
