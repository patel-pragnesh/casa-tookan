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


var NSData = require('/hyperloop/foundation/nsdata');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSData.h
 * @class
 */
function NSMutableData (pointer) {
	if (!(this instanceof NSMutableData)) {
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
			class: 'NSMutableData',
			alloc: true,
			init: 'init'
		});
	}
	NSData.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSMutableData.prototype = Object.create(NSData.prototype, {
	constructor: {
		value: NSMutableData,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSMutableData, NSData);

Object.defineProperty(NSMutableData, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSMutableData, 'className', {
	value: 'NSMutableData',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSMutableData.prototype, 'className', {
	value: 'NSMutableData',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSMutableData.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSMutableData, 'toString', {
	value: function () {
		return '[class NSMutableData]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSMutableData',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSMutableData, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSMutableData, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSMutableData.prototype, 'setData', {
		value: function (_data) {
			this.$private.setData = this.$private.setData || [];
			this.$private.setData.push(_data);
			var result = $dispatch(this.$native, 'setData:', [_data], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSMutableData.prototype, 'setLength', {
		value: function (_length) {
			this.$private.setLength = this.$private.setLength || [];
			this.$private.setLength.push(_length);
			var result = $dispatch(this.$native, 'setLength:', [_length], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSMutableData.prototype, {
		length: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'length');
			},
		
			set: function (_length) {
				if (!$init) { $initialize(); }
				this.$private.length = _length;
				$dispatch(this.$native, 'setLength:', _length);
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

module.exports = NSMutableData;
