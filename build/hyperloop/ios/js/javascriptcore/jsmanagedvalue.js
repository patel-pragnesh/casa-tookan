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
 * JavaScriptCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/JavaScriptCore.framework/Headers/JSManagedValue.h
 * @class
 */
function JSManagedValue (pointer) {
	if (!(this instanceof JSManagedValue)) {
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
			class: 'JSManagedValue',
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
JSManagedValue.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: JSManagedValue,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(JSManagedValue, NSObject);

Object.defineProperty(JSManagedValue, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(JSManagedValue, 'className', {
	value: 'JSManagedValue',
	enumerable: false,
	writable: true
});

Object.defineProperty(JSManagedValue.prototype, 'className', {
	value: 'JSManagedValue',
	enumerable: false,
	writable: true
});

Object.defineProperty(JSManagedValue.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(JSManagedValue, 'toString', {
	value: function () {
		return '[class JSManagedValue]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.JSValue = require('/hyperloop/javascriptcore/jsvalue');

	$class = Hyperloop.createProxy({
		class: 'JSManagedValue',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(JSManagedValue, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(JSManagedValue, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(JSManagedValue.prototype, {
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.JSValue($dispatch(this.$native, 'value'));
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

module.exports = JSManagedValue;
