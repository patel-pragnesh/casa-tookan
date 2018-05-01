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
 * QuartzCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CAShapeLayer.h
 * @class
 */
function CAShapeLayer (pointer) {
	if (!(this instanceof CAShapeLayer)) {
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
			class: 'CAShapeLayer',
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
CAShapeLayer.prototype = Object.create(CALayer.prototype, {
	constructor: {
		value: CAShapeLayer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CAShapeLayer, CALayer);

Object.defineProperty(CAShapeLayer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CAShapeLayer, 'className', {
	value: 'CAShapeLayer',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAShapeLayer.prototype, 'className', {
	value: 'CAShapeLayer',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAShapeLayer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CAShapeLayer, 'toString', {
	value: function () {
		return '[class CAShapeLayer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CAShapeLayer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CAShapeLayer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CAShapeLayer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CAShapeLayer.prototype, {
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

module.exports = CAShapeLayer;
