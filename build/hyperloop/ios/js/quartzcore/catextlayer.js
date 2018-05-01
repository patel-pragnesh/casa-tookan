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
 * QuartzCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CATextLayer.h
 * @class
 */
function CATextLayer (pointer) {
	if (!(this instanceof CATextLayer)) {
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
			class: 'CATextLayer',
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
CATextLayer.prototype = Object.create(CALayer.prototype, {
	constructor: {
		value: CATextLayer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CATextLayer, CALayer);

Object.defineProperty(CATextLayer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CATextLayer, 'className', {
	value: 'CATextLayer',
	enumerable: false,
	writable: true
});

Object.defineProperty(CATextLayer.prototype, 'className', {
	value: 'CATextLayer',
	enumerable: false,
	writable: true
});

Object.defineProperty(CATextLayer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CATextLayer, 'toString', {
	value: function () {
		return '[class CATextLayer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CATextLayer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CATextLayer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CATextLayer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CATextLayer.prototype, 'setString', {
		value: function (_string) {
			this.$private.setString = this.$private.setString || [];
			this.$private.setString.push(_string);
			var result = $dispatch(this.$native, 'setString:', [_string], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(CATextLayer.prototype, {
		font: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'font');
			},
		
			set: function (_font) {
				if (!$init) { $initialize(); }
				this.$private.font = _font;
				$dispatch(this.$native, 'setFont:', _font);
			},
			enumerable: false
		},
		fontSize: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'fontSize');
			},
		
			set: function (_fontSize) {
				if (!$init) { $initialize(); }
				this.$private.fontSize = _fontSize;
				$dispatch(this.$native, 'setFontSize:', _fontSize);
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

module.exports = CATextLayer;
