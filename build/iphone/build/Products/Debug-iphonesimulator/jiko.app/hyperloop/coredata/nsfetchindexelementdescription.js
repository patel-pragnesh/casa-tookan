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
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSFetchIndexElementDescription.h
 * @class
 */
function NSFetchIndexElementDescription (pointer) {
	if (!(this instanceof NSFetchIndexElementDescription)) {
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
			class: 'NSFetchIndexElementDescription',
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
NSFetchIndexElementDescription.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSFetchIndexElementDescription,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSFetchIndexElementDescription, NSObject);

Object.defineProperty(NSFetchIndexElementDescription, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSFetchIndexElementDescription, 'className', {
	value: 'NSFetchIndexElementDescription',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFetchIndexElementDescription.prototype, 'className', {
	value: 'NSFetchIndexElementDescription',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSFetchIndexElementDescription.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSFetchIndexElementDescription, 'toString', {
	value: function () {
		return '[class NSFetchIndexElementDescription]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSPropertyDescription = require('/hyperloop/coredata/nspropertydescription');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NSFetchIndexElementDescription',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSFetchIndexElementDescription, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSFetchIndexElementDescription, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSFetchIndexElementDescription.prototype, {
		property: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSPropertyDescription($dispatch(this.$native, 'property'));
			},
		
			enumerable: false
		},
		propertyName: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'propertyName'));
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

module.exports = NSFetchIndexElementDescription;
