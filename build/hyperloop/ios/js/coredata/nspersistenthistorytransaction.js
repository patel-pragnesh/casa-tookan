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
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSPersistentHistoryTransaction.h
 * @class
 */
function NSPersistentHistoryTransaction (pointer) {
	if (!(this instanceof NSPersistentHistoryTransaction)) {
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
			class: 'NSPersistentHistoryTransaction',
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
NSPersistentHistoryTransaction.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSPersistentHistoryTransaction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSPersistentHistoryTransaction, NSObject);

Object.defineProperty(NSPersistentHistoryTransaction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSPersistentHistoryTransaction, 'className', {
	value: 'NSPersistentHistoryTransaction',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentHistoryTransaction.prototype, 'className', {
	value: 'NSPersistentHistoryTransaction',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentHistoryTransaction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSPersistentHistoryTransaction, 'toString', {
	value: function () {
		return '[class NSPersistentHistoryTransaction]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');
	$imports.NSDate = require('/hyperloop/foundation/nsdate');
	$imports.NSPersistentHistoryToken = require('/hyperloop/coredata/nspersistenthistorytoken');

	$class = Hyperloop.createProxy({
		class: 'NSPersistentHistoryTransaction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSPersistentHistoryTransaction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSPersistentHistoryTransaction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSPersistentHistoryTransaction.prototype, {
		changes: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'changes'));
			},
		
			enumerable: false
		},
		timestamp: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDate($dispatch(this.$native, 'timestamp'));
			},
		
			enumerable: false
		},
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

module.exports = NSPersistentHistoryTransaction;
