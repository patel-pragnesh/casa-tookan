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


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIGraphicsRenderer.h
 * @class
 */
function UIGraphicsRenderer (pointer) {
	if (!(this instanceof UIGraphicsRenderer)) {
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
			class: 'UIGraphicsRenderer',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIGraphicsRenderer.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIGraphicsRenderer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIGraphicsRenderer, NSObject);

Object.defineProperty(UIGraphicsRenderer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIGraphicsRenderer, 'className', {
	value: 'UIGraphicsRenderer',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIGraphicsRenderer.prototype, 'className', {
	value: 'UIGraphicsRenderer',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIGraphicsRenderer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIGraphicsRenderer, 'toString', {
	value: function () {
		return '[class UIGraphicsRenderer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIGraphicsRendererFormat = require('/hyperloop/uikit/uigraphicsrendererformat');

	$class = Hyperloop.createProxy({
		class: 'UIGraphicsRenderer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIGraphicsRenderer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIGraphicsRenderer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIGraphicsRenderer.prototype, {
		format: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIGraphicsRendererFormat($dispatch(this.$native, 'format'));
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

module.exports = UIGraphicsRenderer;
