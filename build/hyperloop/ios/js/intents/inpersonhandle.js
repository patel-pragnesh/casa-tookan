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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INPersonHandle.h
 * @class
 */
function INPersonHandle (pointer) {
	if (!(this instanceof INPersonHandle)) {
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
			class: 'INPersonHandle',
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
INPersonHandle.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INPersonHandle,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INPersonHandle, NSObject);

Object.defineProperty(INPersonHandle, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INPersonHandle, 'className', {
	value: 'INPersonHandle',
	enumerable: false,
	writable: true
});

Object.defineProperty(INPersonHandle.prototype, 'className', {
	value: 'INPersonHandle',
	enumerable: false,
	writable: true
});

Object.defineProperty(INPersonHandle.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INPersonHandle, 'toString', {
	value: function () {
		return '[class INPersonHandle]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'INPersonHandle',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INPersonHandle, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INPersonHandle, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INPersonHandle.prototype, 'init', {
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
	Object.defineProperties(INPersonHandle.prototype, {
		label: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'label'));
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
			},
		
			enumerable: false
		},
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'value'));
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

module.exports = INPersonHandle;