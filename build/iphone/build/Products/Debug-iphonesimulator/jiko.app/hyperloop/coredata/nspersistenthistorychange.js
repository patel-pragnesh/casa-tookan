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
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSPersistentHistoryChange.h
 * @class
 */
function NSPersistentHistoryChange (pointer) {
	if (!(this instanceof NSPersistentHistoryChange)) {
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
			class: 'NSPersistentHistoryChange',
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
NSPersistentHistoryChange.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSPersistentHistoryChange,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSPersistentHistoryChange, NSObject);

Object.defineProperty(NSPersistentHistoryChange, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSPersistentHistoryChange, 'className', {
	value: 'NSPersistentHistoryChange',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentHistoryChange.prototype, 'className', {
	value: 'NSPersistentHistoryChange',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentHistoryChange.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSPersistentHistoryChange, 'toString', {
	value: function () {
		return '[class NSPersistentHistoryChange]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSPersistentHistoryTransaction = require('/hyperloop/coredata/nspersistenthistorytransaction');

	$class = Hyperloop.createProxy({
		class: 'NSPersistentHistoryChange',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSPersistentHistoryChange, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSPersistentHistoryChange, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSPersistentHistoryChange.prototype, {
		transaction: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSPersistentHistoryTransaction($dispatch(this.$native, 'transaction'));
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

module.exports = NSPersistentHistoryChange;