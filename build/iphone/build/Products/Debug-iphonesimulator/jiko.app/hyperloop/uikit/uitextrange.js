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
function UITextRange (pointer) {
	if (!(this instanceof UITextRange)) {
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
			class: 'UITextRange',
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
UITextRange.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UITextRange,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UITextRange, NSObject);

Object.defineProperty(UITextRange, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UITextRange, 'className', {
	value: 'UITextRange',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITextRange.prototype, 'className', {
	value: 'UITextRange',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITextRange.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UITextRange, 'toString', {
	value: function () {
		return '[class UITextRange]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UITextPosition = require('/hyperloop/uikit/uitextposition');

	$class = Hyperloop.createProxy({
		class: 'UITextRange',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UITextRange, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UITextRange, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UITextRange.prototype, 'isEmpty', {
		value: function () {
			var result = $dispatch(this.$native, 'isEmpty', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UITextRange.prototype, {
		end: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UITextPosition($dispatch(this.$native, 'end'));
			},
		
			enumerable: false
		},
		start: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UITextPosition($dispatch(this.$native, 'start'));
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

module.exports = UITextRange;
