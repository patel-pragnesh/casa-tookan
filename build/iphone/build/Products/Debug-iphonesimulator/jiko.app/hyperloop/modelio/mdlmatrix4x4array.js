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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLValueTypes.h
 * @class
 */
function MDLMatrix4x4Array (pointer) {
	if (!(this instanceof MDLMatrix4x4Array)) {
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
			class: 'MDLMatrix4x4Array',
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
MDLMatrix4x4Array.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MDLMatrix4x4Array,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLMatrix4x4Array, NSObject);

Object.defineProperty(MDLMatrix4x4Array, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLMatrix4x4Array, 'className', {
	value: 'MDLMatrix4x4Array',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLMatrix4x4Array.prototype, 'className', {
	value: 'MDLMatrix4x4Array',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLMatrix4x4Array.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLMatrix4x4Array, 'toString', {
	value: function () {
		return '[class MDLMatrix4x4Array]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MDLMatrix4x4Array',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLMatrix4x4Array, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLMatrix4x4Array, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MDLMatrix4x4Array.prototype, 'clear', {
		value: function () {
			var result = $dispatch(this.$native, 'clear', null, true);
			return result;
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

module.exports = MDLMatrix4x4Array;
