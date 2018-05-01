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


var CAAnimation = require('/hyperloop/quartzcore/caanimation');


/**
 * QuartzCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CAAnimation.h
 * @class
 */
function CAPropertyAnimation (pointer) {
	if (!(this instanceof CAPropertyAnimation)) {
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
			class: 'CAPropertyAnimation',
			alloc: true,
			init: 'init'
		});
	}
	CAAnimation.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CAPropertyAnimation.prototype = Object.create(CAAnimation.prototype, {
	constructor: {
		value: CAPropertyAnimation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CAPropertyAnimation, CAAnimation);

Object.defineProperty(CAPropertyAnimation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CAPropertyAnimation, 'className', {
	value: 'CAPropertyAnimation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAPropertyAnimation.prototype, 'className', {
	value: 'CAPropertyAnimation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAPropertyAnimation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CAPropertyAnimation, 'toString', {
	value: function () {
		return '[class CAPropertyAnimation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CAPropertyAnimation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CAPropertyAnimation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CAPropertyAnimation, '$private', {
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

module.exports = CAPropertyAnimation;
