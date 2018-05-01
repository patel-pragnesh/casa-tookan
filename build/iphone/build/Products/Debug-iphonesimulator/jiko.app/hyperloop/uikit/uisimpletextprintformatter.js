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
function UISimpleTextPrintFormatter (pointer) {
	if (!(this instanceof UISimpleTextPrintFormatter)) {
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
			class: 'UISimpleTextPrintFormatter',
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
UISimpleTextPrintFormatter.prototype = Object.create(UIPrintFormatter.prototype, {
	constructor: {
		value: UISimpleTextPrintFormatter,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UISimpleTextPrintFormatter, UIPrintFormatter);

Object.defineProperty(UISimpleTextPrintFormatter, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UISimpleTextPrintFormatter, 'className', {
	value: 'UISimpleTextPrintFormatter',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISimpleTextPrintFormatter.prototype, 'className', {
	value: 'UISimpleTextPrintFormatter',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISimpleTextPrintFormatter.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UISimpleTextPrintFormatter, 'toString', {
	value: function () {
		return '[class UISimpleTextPrintFormatter]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');
	$imports.UIFont = require('/hyperloop/uikit/uifont');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'UISimpleTextPrintFormatter',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UISimpleTextPrintFormatter, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UISimpleTextPrintFormatter, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UISimpleTextPrintFormatter.prototype, 'setText', {
		value: function (_text) {
			this.$private.setText = this.$private.setText || [];
			this.$private.setText.push(_text);
			var result = $dispatch(this.$native, 'setText:', [_text], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UISimpleTextPrintFormatter.prototype, {
		color: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIColor($dispatch(this.$native, 'color'));
			},
		
			set: function (_color) {
				if (!$init) { $initialize(); }
				this.$private.color = _color;
				$dispatch(this.$native, 'setColor:', _color);
			},
			enumerable: false
		},
		font: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIFont($dispatch(this.$native, 'font'));
			},
		
			set: function (_font) {
				if (!$init) { $initialize(); }
				this.$private.font = _font;
				$dispatch(this.$native, 'setFont:', _font);
			},
			enumerable: false
		},
		text: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'text'));
			},
		
			set: function (_text) {
				if (!$init) { $initialize(); }
				this.$private.text = _text;
				$dispatch(this.$native, 'setText:', _text);
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

module.exports = UISimpleTextPrintFormatter;
