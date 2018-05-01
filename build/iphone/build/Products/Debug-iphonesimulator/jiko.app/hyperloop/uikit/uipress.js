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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIPress.h
 * @class
 */
function UIPress (pointer) {
	if (!(this instanceof UIPress)) {
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
			class: 'UIPress',
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
UIPress.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIPress,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIPress, NSObject);

Object.defineProperty(UIPress, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIPress, 'className', {
	value: 'UIPress',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIPress.prototype, 'className', {
	value: 'UIPress',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIPress.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIPress, 'toString', {
	value: function () {
		return '[class UIPress]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIWindow = require('/hyperloop/uikit/uiwindow');

	$class = Hyperloop.createProxy({
		class: 'UIPress',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIPress, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIPress, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIPress.prototype, {
		timestamp: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'timestamp');
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
			},
		
			enumerable: false
		},
		window: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIWindow($dispatch(this.$native, 'window'));
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

module.exports = UIPress;
