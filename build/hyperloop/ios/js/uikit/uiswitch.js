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


var UIControl = require('/hyperloop/uikit/uicontrol');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UISwitch.h
 * @class
 */
function UISwitch (pointer) {
	if (!(this instanceof UISwitch)) {
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
			class: 'UISwitch',
			alloc: true,
			init: 'init'
		});
	}
	UIControl.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UISwitch.prototype = Object.create(UIControl.prototype, {
	constructor: {
		value: UISwitch,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UISwitch, UIControl);

Object.defineProperty(UISwitch, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UISwitch, 'className', {
	value: 'UISwitch',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISwitch.prototype, 'className', {
	value: 'UISwitch',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISwitch.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UISwitch, 'toString', {
	value: function () {
		return '[class UISwitch]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');

	$class = Hyperloop.createProxy({
		class: 'UISwitch',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UISwitch, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UISwitch, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UISwitch.prototype, {
		on: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'on');
			},
		
			set: function (_on) {
				if (!$init) { $initialize(); }
				this.$private.on = _on;
				$dispatch(this.$native, 'setOn:', _on);
			},
			enumerable: false
		},
		tintColor: {
		
		
			set: function (_tintColor) {
				if (!$init) { $initialize(); }
				this.$private.tintColor = _tintColor;
				$dispatch(this.$native, 'setTintColor:', _tintColor);
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

module.exports = UISwitch;
