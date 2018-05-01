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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSString.h
 * @class
 */
function NSString (pointer) {
	if (!(this instanceof NSString)) {
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
			class: 'NSString',
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
NSString.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSString,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSString, NSObject);

Object.defineProperty(NSString, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSString, 'className', {
	value: 'NSString',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSString.prototype, 'className', {
	value: 'NSString',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSString.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSString, 'toString', {
	value: function () {
		return '[class NSString]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSString',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSString, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSString, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSString.prototype, 'compare', {
		value: function (_string) {
			this.$private.compare = this.$private.compare || [];
			this.$private.compare.push(_string);
			var result = $dispatch(this.$native, 'compare:', [_string], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSString.prototype, 'init', {
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

	Object.defineProperty(NSString.prototype, 'initWithString', {
		value: function (_aString) {
			var result = $dispatch(this.$native, 'initWithString:', [_aString], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithString = instance.$private.initWithString || [];
			instance.$private.initWithString.push(_aString);
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSString.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSString.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSString.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSString.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		intValue: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'intValue');
			},
		
			enumerable: false
		},
		length: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'length');
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

module.exports = NSString;
