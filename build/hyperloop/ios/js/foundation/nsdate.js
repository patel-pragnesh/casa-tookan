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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSDate.h
 * @class
 */
function NSDate (pointer) {
	if (!(this instanceof NSDate)) {
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
			class: 'NSDate',
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
NSDate.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSDate,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSDate, NSObject);

Object.defineProperty(NSDate, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSDate, 'className', {
	value: 'NSDate',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSDate.prototype, 'className', {
	value: 'NSDate',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSDate.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSDate, 'toString', {
	value: function () {
		return '[class NSDate]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSDate',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSDate, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSDate, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSDate.prototype, 'compare', {
		value: function (_other) {
			this.$private.compare = this.$private.compare || [];
			this.$private.compare.push(_other);
			var result = $dispatch(this.$native, 'compare:', [_other], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSDate.prototype, 'init', {
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

	Object.defineProperty(NSDate.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSDate.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSDate.prototype, 'self', {
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
	Object.defineProperties(NSDate.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = NSDate;