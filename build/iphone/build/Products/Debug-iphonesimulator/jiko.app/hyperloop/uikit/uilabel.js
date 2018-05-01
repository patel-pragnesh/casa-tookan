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


var UIView = require('/hyperloop/uikit/uiview');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UILabel.h
 * @class
 */
function UILabel (pointer) {
	if (!(this instanceof UILabel)) {
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
			class: 'UILabel',
			alloc: true,
			init: 'init'
		});
	}
	UIView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UILabel.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: UILabel,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UILabel, UIView);

Object.defineProperty(UILabel, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UILabel, 'className', {
	value: 'UILabel',
	enumerable: false,
	writable: true
});

Object.defineProperty(UILabel.prototype, 'className', {
	value: 'UILabel',
	enumerable: false,
	writable: true
});

Object.defineProperty(UILabel.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UILabel, 'toString', {
	value: function () {
		return '[class UILabel]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIFont = require('/hyperloop/uikit/uifont');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'UILabel',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UILabel, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UILabel, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UILabel.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UILabel.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UILabel.prototype, 'self', {
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

	Object.defineProperty(UILabel.prototype, 'setText', {
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
	Object.defineProperties(UILabel.prototype, {
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
		numberOfLines: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'numberOfLines');
			},
		
			set: function (_numberOfLines) {
				if (!$init) { $initialize(); }
				this.$private.numberOfLines = _numberOfLines;
				$dispatch(this.$native, 'setNumberOfLines:', _numberOfLines);
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

module.exports = UILabel;
