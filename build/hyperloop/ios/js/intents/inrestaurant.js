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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INRestaurant.h
 * @class
 */
function INRestaurant (pointer) {
	if (!(this instanceof INRestaurant)) {
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
			class: 'INRestaurant',
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
INRestaurant.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INRestaurant,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INRestaurant, NSObject);

Object.defineProperty(INRestaurant, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INRestaurant, 'className', {
	value: 'INRestaurant',
	enumerable: false,
	writable: true
});

Object.defineProperty(INRestaurant.prototype, 'className', {
	value: 'INRestaurant',
	enumerable: false,
	writable: true
});

Object.defineProperty(INRestaurant.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INRestaurant, 'toString', {
	value: function () {
		return '[class INRestaurant]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CLLocation = require('/hyperloop/corelocation/cllocation');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'INRestaurant',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INRestaurant, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INRestaurant, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INRestaurant.prototype, {
		location: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CLLocation($dispatch(this.$native, 'location'));
			},
		
			set: function (_location) {
				if (!$init) { $initialize(); }
				this.$private.location = _location;
				$dispatch(this.$native, 'setLocation:', _location);
			},
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			set: function (_name) {
				if (!$init) { $initialize(); }
				this.$private.name = _name;
				$dispatch(this.$native, 'setName:', _name);
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

module.exports = INRestaurant;
