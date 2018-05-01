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


var UIScrollView = require('/hyperloop/uikit/uiscrollview');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UITextView.h
 * @class
 */
function UITextView (pointer) {
	if (!(this instanceof UITextView)) {
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
			class: 'UITextView',
			alloc: true,
			init: 'init'
		});
	}
	UIScrollView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UITextView.prototype = Object.create(UIScrollView.prototype, {
	constructor: {
		value: UITextView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UITextView, UIScrollView);

Object.defineProperty(UITextView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UITextView, 'className', {
	value: 'UITextView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITextView.prototype, 'className', {
	value: 'UITextView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITextView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UITextView, 'toString', {
	value: function () {
		return '[class UITextView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.UIFont = require('/hyperloop/uikit/uifont');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'UITextView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UITextView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UITextView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UITextView.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UITextView.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UITextView.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UITextView.prototype, 'setText', {
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
	Object.defineProperties(UITextView.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		editable: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'editable');
			},
		
			set: function (_editable) {
				if (!$init) { $initialize(); }
				this.$private.editable = _editable;
				$dispatch(this.$native, 'setEditable:', _editable);
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
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		keyboardType: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'keyboardType');
			},
		
			set: function (_keyboardType) {
				if (!$init) { $initialize(); }
				this.$private.keyboardType = _keyboardType;
				$dispatch(this.$native, 'setKeyboardType:', _keyboardType);
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

module.exports = UITextView;
