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


var UILayoutGuide = require('/hyperloop/uikit/uilayoutguide');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIFocusGuide.h
 * @class
 */
function UIFocusGuide (pointer) {
	if (!(this instanceof UIFocusGuide)) {
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
			class: 'UIFocusGuide',
			alloc: true,
			init: 'init'
		});
	}
	UILayoutGuide.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIFocusGuide.prototype = Object.create(UILayoutGuide.prototype, {
	constructor: {
		value: UIFocusGuide,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIFocusGuide, UILayoutGuide);

Object.defineProperty(UIFocusGuide, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIFocusGuide, 'className', {
	value: 'UIFocusGuide',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIFocusGuide.prototype, 'className', {
	value: 'UIFocusGuide',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIFocusGuide.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIFocusGuide, 'toString', {
	value: function () {
		return '[class UIFocusGuide]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIFocusGuide',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIFocusGuide, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIFocusGuide, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIFocusGuide.prototype, {
		enabled: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'enabled');
			},
		
			set: function (_enabled) {
				if (!$init) { $initialize(); }
				this.$private.enabled = _enabled;
				$dispatch(this.$native, 'setEnabled:', _enabled);
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

module.exports = UIFocusGuide;
