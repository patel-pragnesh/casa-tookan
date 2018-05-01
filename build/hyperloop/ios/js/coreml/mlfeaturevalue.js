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
 * CoreML//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreML.framework/Headers/MLFeatureValue.h
 * @class
 */
function MLFeatureValue (pointer) {
	if (!(this instanceof MLFeatureValue)) {
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
			class: 'MLFeatureValue',
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
MLFeatureValue.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MLFeatureValue,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MLFeatureValue, NSObject);

Object.defineProperty(MLFeatureValue, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MLFeatureValue, 'className', {
	value: 'MLFeatureValue',
	enumerable: false,
	writable: true
});

Object.defineProperty(MLFeatureValue.prototype, 'className', {
	value: 'MLFeatureValue',
	enumerable: false,
	writable: true
});

Object.defineProperty(MLFeatureValue.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MLFeatureValue, 'toString', {
	value: function () {
		return '[class MLFeatureValue]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MLFeatureValue',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MLFeatureValue, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MLFeatureValue, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MLFeatureValue.prototype, 'isUndefined', {
		value: function () {
			var result = $dispatch(this.$native, 'isUndefined', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MLFeatureValue.prototype, {
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
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

module.exports = MLFeatureValue;
