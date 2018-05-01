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
 * WebKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WebKit.framework/Headers/WKPreferences.h
 * @class
 */
function WKPreferences (pointer) {
	if (!(this instanceof WKPreferences)) {
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
			class: 'WKPreferences',
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
WKPreferences.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WKPreferences,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKPreferences, NSObject);

Object.defineProperty(WKPreferences, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKPreferences, 'className', {
	value: 'WKPreferences',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKPreferences.prototype, 'className', {
	value: 'WKPreferences',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKPreferences.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKPreferences, 'toString', {
	value: function () {
		return '[class WKPreferences]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'WKPreferences',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKPreferences, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKPreferences, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(WKPreferences.prototype, 'setJavaScriptEnabled', {
		value: function (_javaScriptEnabled) {
			this.$private.setJavaScriptEnabled = this.$private.setJavaScriptEnabled || [];
			this.$private.setJavaScriptEnabled.push(_javaScriptEnabled);
			var result = $dispatch(this.$native, 'setJavaScriptEnabled:', [_javaScriptEnabled], true);
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

module.exports = WKPreferences;
