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


var UIGraphicsRendererFormat = require('/hyperloop/uikit/uigraphicsrendererformat');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIGraphicsImageRenderer.h
 * @class
 */
function UIGraphicsImageRendererFormat (pointer) {
	if (!(this instanceof UIGraphicsImageRendererFormat)) {
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
			class: 'UIGraphicsImageRendererFormat',
			alloc: true,
			init: 'init'
		});
	}
	UIGraphicsRendererFormat.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIGraphicsImageRendererFormat.prototype = Object.create(UIGraphicsRendererFormat.prototype, {
	constructor: {
		value: UIGraphicsImageRendererFormat,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIGraphicsImageRendererFormat, UIGraphicsRendererFormat);

Object.defineProperty(UIGraphicsImageRendererFormat, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIGraphicsImageRendererFormat, 'className', {
	value: 'UIGraphicsImageRendererFormat',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIGraphicsImageRendererFormat.prototype, 'className', {
	value: 'UIGraphicsImageRendererFormat',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIGraphicsImageRendererFormat.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIGraphicsImageRendererFormat, 'toString', {
	value: function () {
		return '[class UIGraphicsImageRendererFormat]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIGraphicsImageRendererFormat',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIGraphicsImageRendererFormat, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIGraphicsImageRendererFormat, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIGraphicsImageRendererFormat.prototype, {
		scale: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'scale');
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

module.exports = UIGraphicsImageRendererFormat;
