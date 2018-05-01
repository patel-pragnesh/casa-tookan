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


var CAPropertyAnimation = require('/hyperloop/quartzcore/capropertyanimation');


/**
 * QuartzCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CAAnimation.h
 * @class
 */
function CABasicAnimation (pointer) {
	if (!(this instanceof CABasicAnimation)) {
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
			class: 'CABasicAnimation',
			alloc: true,
			init: 'init'
		});
	}
	CAPropertyAnimation.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CABasicAnimation.prototype = Object.create(CAPropertyAnimation.prototype, {
	constructor: {
		value: CABasicAnimation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CABasicAnimation, CAPropertyAnimation);

Object.defineProperty(CABasicAnimation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CABasicAnimation, 'className', {
	value: 'CABasicAnimation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CABasicAnimation.prototype, 'className', {
	value: 'CABasicAnimation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CABasicAnimation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CABasicAnimation, 'toString', {
	value: function () {
		return '[class CABasicAnimation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'CABasicAnimation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CABasicAnimation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CABasicAnimation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CABasicAnimation.prototype, {
		fromValue: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'fromValue'));
			},
		
			set: function (_fromValue) {
				if (!$init) { $initialize(); }
				this.$private.fromValue = _fromValue;
				$dispatch(this.$native, 'setFromValue:', _fromValue);
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

module.exports = CABasicAnimation;
