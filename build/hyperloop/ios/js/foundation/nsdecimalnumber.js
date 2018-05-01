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


var NSNumber = require('/hyperloop/foundation/nsnumber');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSDecimalNumber.h
 * @class
 */
function NSDecimalNumber (pointer) {
	if (!(this instanceof NSDecimalNumber)) {
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
			class: 'NSDecimalNumber',
			alloc: true,
			init: 'init'
		});
	}
	NSNumber.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSDecimalNumber.prototype = Object.create(NSNumber.prototype, {
	constructor: {
		value: NSDecimalNumber,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSDecimalNumber, NSNumber);

Object.defineProperty(NSDecimalNumber, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSDecimalNumber, 'className', {
	value: 'NSDecimalNumber',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSDecimalNumber.prototype, 'className', {
	value: 'NSDecimalNumber',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSDecimalNumber.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSDecimalNumber, 'toString', {
	value: function () {
		return '[class NSDecimalNumber]';
	},
	enumerable: false,
	writable: true
});

// class properties
Object.defineProperties(NSDecimalNumber, {
	one: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'one', null, true));
			},
	
		enumerable: false
	},
	zero: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'zero', null, true));
			},
	
		enumerable: false
	}
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSDecimalNumber',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSDecimalNumber, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSDecimalNumber, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSDecimalNumber.prototype, 'compare', {
		value: function (_decimalNumber) {
			this.$private.compare = this.$private.compare || [];
			this.$private.compare.push(_decimalNumber);
			var result = $dispatch(this.$native, 'compare:', [_decimalNumber], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSDecimalNumber.prototype, 'initWithString', {
		value: function (_numberValue) {
			var result = $dispatch(this.$native, 'initWithString:', [_numberValue], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithString = instance.$private.initWithString || [];
			instance.$private.initWithString.push(_numberValue);
			return instance;
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

module.exports = NSDecimalNumber;
