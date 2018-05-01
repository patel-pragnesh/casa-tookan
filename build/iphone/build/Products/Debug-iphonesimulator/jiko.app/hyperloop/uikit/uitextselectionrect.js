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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UITextInput.h
 * @class
 */
function UITextSelectionRect (pointer) {
	if (!(this instanceof UITextSelectionRect)) {
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
			class: 'UITextSelectionRect',
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
UITextSelectionRect.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UITextSelectionRect,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UITextSelectionRect, NSObject);

Object.defineProperty(UITextSelectionRect, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UITextSelectionRect, 'className', {
	value: 'UITextSelectionRect',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITextSelectionRect.prototype, 'className', {
	value: 'UITextSelectionRect',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITextSelectionRect.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UITextSelectionRect, 'toString', {
	value: function () {
		return '[class UITextSelectionRect]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGRect = require('/hyperloop/coregraphics/cgrect');

	$class = Hyperloop.createProxy({
		class: 'UITextSelectionRect',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UITextSelectionRect, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UITextSelectionRect, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UITextSelectionRect.prototype, {
		rect: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGRect($dispatch(this.$native, 'rect'));
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

module.exports = UITextSelectionRect;
