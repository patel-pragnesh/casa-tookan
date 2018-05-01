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
function NSPersistentStoreAsynchronousResult (pointer) {
	if (!(this instanceof NSPersistentStoreAsynchronousResult)) {
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
			class: 'NSPersistentStoreAsynchronousResult',
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
NSPersistentStoreAsynchronousResult.prototype = Object.create(NSPersistentStoreResult.prototype, {
	constructor: {
		value: NSPersistentStoreAsynchronousResult,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSPersistentStoreAsynchronousResult, NSPersistentStoreResult);

Object.defineProperty(NSPersistentStoreAsynchronousResult, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSPersistentStoreAsynchronousResult, 'className', {
	value: 'NSPersistentStoreAsynchronousResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentStoreAsynchronousResult.prototype, 'className', {
	value: 'NSPersistentStoreAsynchronousResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentStoreAsynchronousResult.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSPersistentStoreAsynchronousResult, 'toString', {
	value: function () {
		return '[class NSPersistentStoreAsynchronousResult]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSProgress = require('/hyperloop/foundation/nsprogress');

	$class = Hyperloop.createProxy({
		class: 'NSPersistentStoreAsynchronousResult',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSPersistentStoreAsynchronousResult, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSPersistentStoreAsynchronousResult, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSPersistentStoreAsynchronousResult.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
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

module.exports = NSPersistentStoreAsynchronousResult;
