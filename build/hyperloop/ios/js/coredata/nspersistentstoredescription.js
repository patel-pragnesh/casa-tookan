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
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSPersistentStoreDescription.h
 * @class
 */
function NSPersistentStoreDescription (pointer) {
	if (!(this instanceof NSPersistentStoreDescription)) {
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
			class: 'NSPersistentStoreDescription',
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
NSPersistentStoreDescription.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSPersistentStoreDescription,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSPersistentStoreDescription, NSObject);

Object.defineProperty(NSPersistentStoreDescription, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSPersistentStoreDescription, 'className', {
	value: 'NSPersistentStoreDescription',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentStoreDescription.prototype, 'className', {
	value: 'NSPersistentStoreDescription',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersistentStoreDescription.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSPersistentStoreDescription, 'toString', {
	value: function () {
		return '[class NSPersistentStoreDescription]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');
	$imports.NSDictionary = require('/hyperloop/foundation/nsdictionary');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NSPersistentStoreDescription',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSPersistentStoreDescription, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSPersistentStoreDescription, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSPersistentStoreDescription.prototype, 'initWithURL', {
		value: function (_url) {
			var result = $dispatch(this.$native, 'initWithURL:', [_url], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithURL = instance.$private.initWithURL || [];
			instance.$private.initWithURL.push(_url);
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSPersistentStoreDescription.prototype, 'setTimeout', {
		value: function (_timeout) {
			this.$private.setTimeout = this.$private.setTimeout || [];
			this.$private.setTimeout.push(_timeout);
			var result = $dispatch(this.$native, 'setTimeout:', [_timeout], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSPersistentStoreDescription.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		},
		options: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDictionary($dispatch(this.$native, 'options'));
			},
		
			enumerable: false
		},
		timeout: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'timeout');
			},
		
			set: function (_timeout) {
				if (!$init) { $initialize(); }
				this.$private.timeout = _timeout;
				$dispatch(this.$native, 'setTimeout:', _timeout);
			},
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'type'));
			},
		
			set: function (_type) {
				if (!$init) { $initialize(); }
				this.$private.type = _type;
				$dispatch(this.$native, 'setType:', _type);
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

module.exports = NSPersistentStoreDescription;
