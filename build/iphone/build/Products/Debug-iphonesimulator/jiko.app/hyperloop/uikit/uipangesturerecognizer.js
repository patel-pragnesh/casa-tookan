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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIPanGestureRecognizer.h
 * @class
 */
function UIPanGestureRecognizer (pointer) {
	if (!(this instanceof UIPanGestureRecognizer)) {
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
			class: 'UIPanGestureRecognizer',
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
UIPanGestureRecognizer.prototype = Object.create(UIGestureRecognizer.prototype, {
	constructor: {
		value: UIPanGestureRecognizer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIPanGestureRecognizer, UIGestureRecognizer);

Object.defineProperty(UIPanGestureRecognizer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIPanGestureRecognizer, 'className', {
	value: 'UIPanGestureRecognizer',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIPanGestureRecognizer.prototype, 'className', {
	value: 'UIPanGestureRecognizer',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIPanGestureRecognizer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIPanGestureRecognizer, 'toString', {
	value: function () {
		return '[class UIPanGestureRecognizer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIPanGestureRecognizer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIPanGestureRecognizer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIPanGestureRecognizer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = UIPanGestureRecognizer;
