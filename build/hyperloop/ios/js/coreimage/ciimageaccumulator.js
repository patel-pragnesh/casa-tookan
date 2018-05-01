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
 * CoreImage//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreImage.framework/Headers/CIImageAccumulator.h
 * @class
 */
function CIImageAccumulator (pointer) {
	if (!(this instanceof CIImageAccumulator)) {
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
			class: 'CIImageAccumulator',
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
CIImageAccumulator.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CIImageAccumulator,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CIImageAccumulator, NSObject);

Object.defineProperty(CIImageAccumulator, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CIImageAccumulator, 'className', {
	value: 'CIImageAccumulator',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIImageAccumulator.prototype, 'className', {
	value: 'CIImageAccumulator',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIImageAccumulator.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CIImageAccumulator, 'toString', {
	value: function () {
		return '[class CIImageAccumulator]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CIImage = require('/hyperloop/coreimage/ciimage');

	$class = Hyperloop.createProxy({
		class: 'CIImageAccumulator',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CIImageAccumulator, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CIImageAccumulator, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CIImageAccumulator.prototype, 'clear', {
		value: function () {
			var result = $dispatch(this.$native, 'clear', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(CIImageAccumulator.prototype, 'image', {
		value: function () {
			var result = $dispatch(this.$native, 'image', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.CIImage(result);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(CIImageAccumulator.prototype, {
		format: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'format');
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

module.exports = CIImageAccumulator;
