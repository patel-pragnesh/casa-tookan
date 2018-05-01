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


var UIView = require('/hyperloop/uikit/uiview');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIWindow.h
 * @class
 */
function UIWindow (pointer) {
	if (!(this instanceof UIWindow)) {
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
			class: 'UIWindow',
			alloc: true,
			init: 'init'
		});
	}
	UIView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIWindow.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: UIWindow,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIWindow, UIView);

Object.defineProperty(UIWindow, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIWindow, 'className', {
	value: 'UIWindow',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIWindow.prototype, 'className', {
	value: 'UIWindow',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIWindow.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIWindow, 'toString', {
	value: function () {
		return '[class UIWindow]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIScreen = require('/hyperloop/uikit/uiscreen');

	$class = Hyperloop.createProxy({
		class: 'UIWindow',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIWindow, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIWindow, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIWindow.prototype, {
		screen: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIScreen($dispatch(this.$native, 'screen'));
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

module.exports = UIWindow;
