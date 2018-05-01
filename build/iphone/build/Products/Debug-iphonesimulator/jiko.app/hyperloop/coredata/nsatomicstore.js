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


var NSPersistentStore = require('/hyperloop/coredata/nspersistentstore');


/**
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSAtomicStore.h
 * @class
 */
function NSAtomicStore (pointer) {
	if (!(this instanceof NSAtomicStore)) {
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
			class: 'NSAtomicStore',
			alloc: true,
			init: 'init'
		});
	}
	NSPersistentStore.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSAtomicStore.prototype = Object.create(NSPersistentStore.prototype, {
	constructor: {
		value: NSAtomicStore,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSAtomicStore, NSPersistentStore);

Object.defineProperty(NSAtomicStore, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSAtomicStore, 'className', {
	value: 'NSAtomicStore',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSAtomicStore.prototype, 'className', {
	value: 'NSAtomicStore',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSAtomicStore.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSAtomicStore, 'toString', {
	value: function () {
		return '[class NSAtomicStore]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSAtomicStore',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSAtomicStore, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSAtomicStore, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSAtomicStore.prototype, 'load', {
		value: function (_error) {
			this.$private.load = this.$private.load || [];
			this.$private.load.push(_error);
			var result = $dispatch(this.$native, 'load:', [_error], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSAtomicStore.prototype, 'save', {
		value: function (_error) {
			this.$private.save = this.$private.save || [];
			this.$private.save.push(_error);
			var result = $dispatch(this.$native, 'save:', [_error], true);
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

module.exports = NSAtomicStore;
