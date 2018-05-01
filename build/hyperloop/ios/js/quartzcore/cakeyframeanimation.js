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
function CAKeyframeAnimation (pointer) {
	if (!(this instanceof CAKeyframeAnimation)) {
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
			class: 'CAKeyframeAnimation',
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
CAKeyframeAnimation.prototype = Object.create(CAPropertyAnimation.prototype, {
	constructor: {
		value: CAKeyframeAnimation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CAKeyframeAnimation, CAPropertyAnimation);

Object.defineProperty(CAKeyframeAnimation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CAKeyframeAnimation, 'className', {
	value: 'CAKeyframeAnimation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAKeyframeAnimation.prototype, 'className', {
	value: 'CAKeyframeAnimation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAKeyframeAnimation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CAKeyframeAnimation, 'toString', {
	value: function () {
		return '[class CAKeyframeAnimation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'CAKeyframeAnimation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CAKeyframeAnimation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CAKeyframeAnimation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CAKeyframeAnimation.prototype, {
		path: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'path');
			},
		
			set: function (_path) {
				if (!$init) { $initialize(); }
				this.$private.path = _path;
				$dispatch(this.$native, 'setPath:', _path);
			},
			enumerable: false
		},
		values: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'values'));
			},
		
			set: function (_values) {
				if (!$init) { $initialize(); }
				this.$private.values = _values;
				$dispatch(this.$native, 'setValues:', _values);
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

module.exports = CAKeyframeAnimation;
