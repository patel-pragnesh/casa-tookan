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


var UIGestureRecognizer = require('/hyperloop/uikit/uigesturerecognizer');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UISwipeGestureRecognizer.h
 * @class
 */
function UISwipeGestureRecognizer (pointer) {
	if (!(this instanceof UISwipeGestureRecognizer)) {
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
			class: 'UISwipeGestureRecognizer',
			alloc: true,
			init: 'init'
		});
	}
	UIGestureRecognizer.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UISwipeGestureRecognizer.prototype = Object.create(UIGestureRecognizer.prototype, {
	constructor: {
		value: UISwipeGestureRecognizer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UISwipeGestureRecognizer, UIGestureRecognizer);

Object.defineProperty(UISwipeGestureRecognizer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UISwipeGestureRecognizer, 'className', {
	value: 'UISwipeGestureRecognizer',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISwipeGestureRecognizer.prototype, 'className', {
	value: 'UISwipeGestureRecognizer',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISwipeGestureRecognizer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UISwipeGestureRecognizer, 'toString', {
	value: function () {
		return '[class UISwipeGestureRecognizer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UISwipeGestureRecognizer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UISwipeGestureRecognizer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UISwipeGestureRecognizer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UISwipeGestureRecognizer.prototype, {
		direction: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'direction');
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

module.exports = UISwipeGestureRecognizer;
