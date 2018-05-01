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
 * CoreLocation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreLocation.framework/Headers/CLHeading.h
 * @class
 */
function CLHeading (pointer) {
	if (!(this instanceof CLHeading)) {
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
			class: 'CLHeading',
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
CLHeading.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CLHeading,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CLHeading, NSObject);

Object.defineProperty(CLHeading, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CLHeading, 'className', {
	value: 'CLHeading',
	enumerable: false,
	writable: true
});

Object.defineProperty(CLHeading.prototype, 'className', {
	value: 'CLHeading',
	enumerable: false,
	writable: true
});

Object.defineProperty(CLHeading.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CLHeading, 'toString', {
	value: function () {
		return '[class CLHeading]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDate = require('/hyperloop/foundation/nsdate');

	$class = Hyperloop.createProxy({
		class: 'CLHeading',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CLHeading, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CLHeading, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CLHeading.prototype, {
		timestamp: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDate($dispatch(this.$native, 'timestamp'));
			},
		
			enumerable: false
		},
		x: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'x');
			},
		
			enumerable: false
		},
		y: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'y');
			},
		
			enumerable: false
		},
		z: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'z');
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

module.exports = CLHeading;
