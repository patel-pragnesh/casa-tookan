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


var CALayer = require('/hyperloop/quartzcore/calayer');


/**
 * QuartzCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CAGradientLayer.h
 * @class
 */
function CAGradientLayer (pointer) {
	if (!(this instanceof CAGradientLayer)) {
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
			class: 'CAGradientLayer',
			alloc: true,
			init: 'init'
		});
	}
	CALayer.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CAGradientLayer.prototype = Object.create(CALayer.prototype, {
	constructor: {
		value: CAGradientLayer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CAGradientLayer, CALayer);

Object.defineProperty(CAGradientLayer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CAGradientLayer, 'className', {
	value: 'CAGradientLayer',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAGradientLayer.prototype, 'className', {
	value: 'CAGradientLayer',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAGradientLayer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CAGradientLayer, 'toString', {
	value: function () {
		return '[class CAGradientLayer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'CAGradientLayer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CAGradientLayer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CAGradientLayer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CAGradientLayer.prototype, {
		colors: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'colors'));
			},
		
			set: function (_colors) {
				if (!$init) { $initialize(); }
				this.$private.colors = _colors;
				$dispatch(this.$native, 'setColors:', _colors);
			},
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'type'));
			},
		
			set: function (_type) {
				if (!$init) { $initialize(); }
				this.$private.type = _type;
				$dispatch(this.$native, 'setType:', _type);
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

module.exports = CAGradientLayer;
