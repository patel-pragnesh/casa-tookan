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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UISlider.h
 * @class
 */
function UISlider (pointer) {
	if (!(this instanceof UISlider)) {
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
			class: 'UISlider',
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
UISlider.prototype = Object.create(UIControl.prototype, {
	constructor: {
		value: UISlider,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UISlider, UIControl);

Object.defineProperty(UISlider, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UISlider, 'className', {
	value: 'UISlider',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISlider.prototype, 'className', {
	value: 'UISlider',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISlider.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UISlider, 'toString', {
	value: function () {
		return '[class UISlider]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UISlider',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UISlider, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UISlider, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UISlider.prototype, 'setValue', {
		value: function (_value) {
			this.$private.setValue = this.$private.setValue || [];
			this.$private.setValue.push(_value);
			var result = $dispatch(this.$native, 'setValue:', [_value], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UISlider.prototype, {
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'value');
			},
		
			set: function (_value) {
				if (!$init) { $initialize(); }
				this.$private.value = _value;
				$dispatch(this.$native, 'setValue:', _value);
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

module.exports = UISlider;
