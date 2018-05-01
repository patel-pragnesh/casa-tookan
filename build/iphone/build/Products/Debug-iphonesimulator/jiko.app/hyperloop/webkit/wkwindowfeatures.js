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
 * WebKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WebKit.framework/Headers/WKWindowFeatures.h
 * @class
 */
function WKWindowFeatures (pointer) {
	if (!(this instanceof WKWindowFeatures)) {
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
			class: 'WKWindowFeatures',
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
WKWindowFeatures.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WKWindowFeatures,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKWindowFeatures, NSObject);

Object.defineProperty(WKWindowFeatures, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKWindowFeatures, 'className', {
	value: 'WKWindowFeatures',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKWindowFeatures.prototype, 'className', {
	value: 'WKWindowFeatures',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKWindowFeatures.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKWindowFeatures, 'toString', {
	value: function () {
		return '[class WKWindowFeatures]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSNumber = require('/hyperloop/foundation/nsnumber');

	$class = Hyperloop.createProxy({
		class: 'WKWindowFeatures',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKWindowFeatures, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKWindowFeatures, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(WKWindowFeatures.prototype, {
		height: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSNumber($dispatch(this.$native, 'height'));
			},
		
			enumerable: false
		},
		width: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSNumber($dispatch(this.$native, 'width'));
			},
		
			enumerable: false
		},
		x: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSNumber($dispatch(this.$native, 'x'));
			},
		
			enumerable: false
		},
		y: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSNumber($dispatch(this.$native, 'y'));
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

module.exports = WKWindowFeatures;
