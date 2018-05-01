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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/NSParagraphStyle.h
 * @class
 */
function NSTextTab (pointer) {
	if (!(this instanceof NSTextTab)) {
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
			class: 'NSTextTab',
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
NSTextTab.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSTextTab,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSTextTab, NSObject);

Object.defineProperty(NSTextTab, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSTextTab, 'className', {
	value: 'NSTextTab',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSTextTab.prototype, 'className', {
	value: 'NSTextTab',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSTextTab.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSTextTab, 'toString', {
	value: function () {
		return '[class NSTextTab]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDictionary = require('/hyperloop/foundation/nsdictionary');

	$class = Hyperloop.createProxy({
		class: 'NSTextTab',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSTextTab, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSTextTab, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSTextTab.prototype, {
		location: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'location');
			},
		
			enumerable: false
		},
		options: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDictionary($dispatch(this.$native, 'options'));
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

module.exports = NSTextTab;
