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
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSFetchRequest.h
 * @class
 */
function NSFetchRequest (pointer) {
	if (!(this instanceof NSFetchRequest)) {
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
			class: 'NSFetchRequest',
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
NSFetchRequest.prototype = Object.create(NSPersistentStoreRequest.prototype, {
	constructor: {
		value: NSFetchRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSFetchRequest, NSPersistentStoreRequest);

Object.defineProperty(NSFetchRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSFetchRequest, 'className', {
	value: 'NSFetchRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFetchRequest.prototype, 'className', {
	value: 'NSFetchRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFetchRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSFetchRequest, 'toString', {
	value: function () {
		return '[class NSFetchRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSEntityDescription = require('/hyperloop/coredata/nsentitydescription');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'NSFetchRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSFetchRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSFetchRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSFetchRequest.prototype, 'execute', {
		value: function (_error) {
			this.$private.execute = this.$private.execute || [];
			this.$private.execute.push(_error);
			var result = $dispatch(this.$native, 'execute:', [_error], true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSArray(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSFetchRequest.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(NSFetchRequest.prototype, {
		entity: {
		
		
			set: function (_entity) {
				if (!$init) { $initialize(); }
				this.$private.entity = _entity;
				$dispatch(this.$native, 'setEntity:', _entity);
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

module.exports = NSFetchRequest;
