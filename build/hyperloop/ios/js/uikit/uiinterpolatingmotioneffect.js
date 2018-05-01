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


var UIMotionEffect = require('/hyperloop/uikit/uimotioneffect');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIMotionEffect.h
 * @class
 */
function UIInterpolatingMotionEffect (pointer) {
	if (!(this instanceof UIInterpolatingMotionEffect)) {
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
			class: 'UIInterpolatingMotionEffect',
			alloc: true,
			init: 'init'
		});
	}
	UIMotionEffect.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIInterpolatingMotionEffect.prototype = Object.create(UIMotionEffect.prototype, {
	constructor: {
		value: UIInterpolatingMotionEffect,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIInterpolatingMotionEffect, UIMotionEffect);

Object.defineProperty(UIInterpolatingMotionEffect, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIInterpolatingMotionEffect, 'className', {
	value: 'UIInterpolatingMotionEffect',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIInterpolatingMotionEffect.prototype, 'className', {
	value: 'UIInterpolatingMotionEffect',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIInterpolatingMotionEffect.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIInterpolatingMotionEffect, 'toString', {
	value: function () {
		return '[class UIInterpolatingMotionEffect]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIInterpolatingMotionEffect',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIInterpolatingMotionEffect, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIInterpolatingMotionEffect, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIInterpolatingMotionEffect.prototype, {
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
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

module.exports = UIInterpolatingMotionEffect;
