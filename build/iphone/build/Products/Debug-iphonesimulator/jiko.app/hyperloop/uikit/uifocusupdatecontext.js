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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIFocus.h
 * @class
 */
function UIFocusUpdateContext (pointer) {
	if (!(this instanceof UIFocusUpdateContext)) {
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
			class: 'UIFocusUpdateContext',
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
UIFocusUpdateContext.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIFocusUpdateContext,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIFocusUpdateContext, NSObject);

Object.defineProperty(UIFocusUpdateContext, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIFocusUpdateContext, 'className', {
	value: 'UIFocusUpdateContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIFocusUpdateContext.prototype, 'className', {
	value: 'UIFocusUpdateContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIFocusUpdateContext.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIFocusUpdateContext, 'toString', {
	value: function () {
		return '[class UIFocusUpdateContext]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIFocusUpdateContext',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIFocusUpdateContext, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIFocusUpdateContext, '$private', {
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

module.exports = UIFocusUpdateContext;
