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
 * JavaScriptCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/JavaScriptCore.framework/Headers/JSValue.h
 * @class
 */
function JSValue (pointer) {
	if (!(this instanceof JSValue)) {
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
			class: 'JSValue',
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
JSValue.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: JSValue,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(JSValue, NSObject);

Object.defineProperty(JSValue, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(JSValue, 'className', {
	value: 'JSValue',
	enumerable: false,
	writable: true
});

Object.defineProperty(JSValue.prototype, 'className', {
	value: 'JSValue',
	enumerable: false,
	writable: true
});

Object.defineProperty(JSValue.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(JSValue, 'toString', {
	value: function () {
		return '[class JSValue]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.JSContext = require('/hyperloop/javascriptcore/jscontext');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');
	$imports.NSNumber = require('/hyperloop/foundation/nsnumber');

	$class = Hyperloop.createProxy({
		class: 'JSValue',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(JSValue, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(JSValue, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(JSValue.prototype, 'toArray', {
		value: function () {
			var result = $dispatch(this.$native, 'toArray', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSArray(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(JSValue.prototype, 'toNumber', {
		value: function () {
			var result = $dispatch(this.$native, 'toNumber', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSNumber(result);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(JSValue.prototype, {
		context: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.JSContext($dispatch(this.$native, 'context'));
			},
		
			enumerable: false
		},
		isBoolean: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'isBoolean');
			},
		
			enumerable: false
		},
		isDate: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'isDate');
			},
		
			enumerable: false
		},
		isNull: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'isNull');
			},
		
			enumerable: false
		},
		isNumber: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'isNumber');
			},
		
			enumerable: false
		},
		isObject: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'isObject');
			},
		
			enumerable: false
		},
		isString: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'isString');
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

module.exports = JSValue;
