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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UISegmentedControl.h
 * @class
 */
function UISegmentedControl (pointer) {
	if (!(this instanceof UISegmentedControl)) {
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
			class: 'UISegmentedControl',
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
UISegmentedControl.prototype = Object.create(UIControl.prototype, {
	constructor: {
		value: UISegmentedControl,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UISegmentedControl, UIControl);

Object.defineProperty(UISegmentedControl, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UISegmentedControl, 'className', {
	value: 'UISegmentedControl',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISegmentedControl.prototype, 'className', {
	value: 'UISegmentedControl',
	enumerable: false,
	writable: true
});

Object.defineProperty(UISegmentedControl.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UISegmentedControl, 'toString', {
	value: function () {
		return '[class UISegmentedControl]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');

	$class = Hyperloop.createProxy({
		class: 'UISegmentedControl',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UISegmentedControl, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UISegmentedControl, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UISegmentedControl.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UISegmentedControl.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UISegmentedControl.prototype, 'self', {
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


	// instance properties
	Object.defineProperties(UISegmentedControl.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = UISegmentedControl;
