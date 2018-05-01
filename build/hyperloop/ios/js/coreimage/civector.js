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
 * CoreImage//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreImage.framework/Headers/CIVector.h
 * @class
 */
function CIVector (pointer) {
	if (!(this instanceof CIVector)) {
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
			class: 'CIVector',
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
CIVector.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CIVector,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CIVector, NSObject);

Object.defineProperty(CIVector, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CIVector, 'className', {
	value: 'CIVector',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIVector.prototype, 'className', {
	value: 'CIVector',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIVector.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CIVector, 'toString', {
	value: function () {
		return '[class CIVector]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CIVector',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CIVector, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CIVector, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CIVector.prototype, 'initWithString', {
		value: function (_representation) {
			var result = $dispatch(this.$native, 'initWithString:', [_representation], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithString = instance.$private.initWithString || [];
			instance.$private.initWithString.push(_representation);
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(CIVector.prototype, {
		W: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'W');
			},
		
			enumerable: false
		},
		count: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'count');
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

module.exports = CIVector;
