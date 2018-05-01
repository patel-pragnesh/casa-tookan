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
 * CoreImage//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreImage.framework/Headers/CIRenderDestination.h
 * @class
 */
function CIRenderDestination (pointer) {
	if (!(this instanceof CIRenderDestination)) {
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
			class: 'CIRenderDestination',
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
CIRenderDestination.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CIRenderDestination,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CIRenderDestination, NSObject);

Object.defineProperty(CIRenderDestination, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CIRenderDestination, 'className', {
	value: 'CIRenderDestination',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIRenderDestination.prototype, 'className', {
	value: 'CIRenderDestination',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIRenderDestination.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CIRenderDestination, 'toString', {
	value: function () {
		return '[class CIRenderDestination]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CIRenderDestination',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CIRenderDestination, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CIRenderDestination, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CIRenderDestination.prototype, {
		height: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'height');
			},
		
			enumerable: false
		},
		width: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'width');
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

module.exports = CIRenderDestination;
