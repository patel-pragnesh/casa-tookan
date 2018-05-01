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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLAnimatedValueTypes.h
 * @class
 */
function MDLAnimatedValue (pointer) {
	if (!(this instanceof MDLAnimatedValue)) {
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
			class: 'MDLAnimatedValue',
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
MDLAnimatedValue.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MDLAnimatedValue,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLAnimatedValue, NSObject);

Object.defineProperty(MDLAnimatedValue, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLAnimatedValue, 'className', {
	value: 'MDLAnimatedValue',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLAnimatedValue.prototype, 'className', {
	value: 'MDLAnimatedValue',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLAnimatedValue.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLAnimatedValue, 'toString', {
	value: function () {
		return '[class MDLAnimatedValue]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MDLAnimatedValue',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLAnimatedValue, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLAnimatedValue, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MDLAnimatedValue.prototype, 'clear', {
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

module.exports = MDLAnimatedValue;
