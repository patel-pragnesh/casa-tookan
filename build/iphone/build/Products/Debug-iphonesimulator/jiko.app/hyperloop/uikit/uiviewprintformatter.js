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


var UIPrintFormatter = require('/hyperloop/uikit/uiprintformatter');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIPrintFormatter.h
 * @class
 */
function UIViewPrintFormatter (pointer) {
	if (!(this instanceof UIViewPrintFormatter)) {
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
			class: 'UIViewPrintFormatter',
			alloc: true,
			init: 'init'
		});
	}
	UIPrintFormatter.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIViewPrintFormatter.prototype = Object.create(UIPrintFormatter.prototype, {
	constructor: {
		value: UIViewPrintFormatter,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIViewPrintFormatter, UIPrintFormatter);

Object.defineProperty(UIViewPrintFormatter, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIViewPrintFormatter, 'className', {
	value: 'UIViewPrintFormatter',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIViewPrintFormatter.prototype, 'className', {
	value: 'UIViewPrintFormatter',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIViewPrintFormatter.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIViewPrintFormatter, 'toString', {
	value: function () {
		return '[class UIViewPrintFormatter]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIView = require('/hyperloop/uikit/uiview');

	$class = Hyperloop.createProxy({
		class: 'UIViewPrintFormatter',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIViewPrintFormatter, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIViewPrintFormatter, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIViewPrintFormatter.prototype, {
		view: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIView($dispatch(this.$native, 'view'));
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

module.exports = UIViewPrintFormatter;
