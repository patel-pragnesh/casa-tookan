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


var UIResponder = require('/hyperloop/uikit/uiresponder');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIView.h
 * @class
 */
function UIView (pointer) {
	if (!(this instanceof UIView)) {
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
			class: 'UIView',
			alloc: true,
			init: 'init'
		});
	}
	UIResponder.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIView.prototype = Object.create(UIResponder.prototype, {
	constructor: {
		value: UIView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIView, UIResponder);

Object.defineProperty(UIView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIView, 'className', {
	value: 'UIView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIView.prototype, 'className', {
	value: 'UIView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIView, 'toString', {
	value: function () {
		return '[class UIView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');
	$imports.CGRect = require('/hyperloop/coregraphics/cgrect');
	$imports.CGAffineTransform = require('/hyperloop/coregraphics/cgaffinetransform');
	$imports.UIWindow = require('/hyperloop/uikit/uiwindow');
	$imports.CGPoint = require('/hyperloop/coregraphics/cgpoint');

	$class = Hyperloop.createProxy({
		class: 'UIView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIView.prototype, 'convertPointToView', {
		value: function (_point, _view) {
			this.$private.convertPointToView = this.$private.convertPointToView || [];
			this.$private.convertPointToView.push(_point);
			this.$private.convertPointToView.push(_view);
			var result = $dispatch(this.$native, 'convertPoint:toView:', [_point, _view], true);
			if (result === undefined || result === null) return result;
			result = new $imports.CGPoint(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIView.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIView.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIView.prototype, 'self', {
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
	Object.defineProperties(UIView.prototype, {
		backgroundColor: {
		
		
			set: function (_backgroundColor) {
				if (!$init) { $initialize(); }
				this.$private.backgroundColor = _backgroundColor;
				$dispatch(this.$native, 'setBackgroundColor:', _backgroundColor);
			},
			enumerable: false
		},
		frame: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGRect($dispatch(this.$native, 'frame'));
			},
		
			set: function (_frame) {
				if (!$init) { $initialize(); }
				this.$private.frame = _frame;
				$dispatch(this.$native, 'setFrame:', _frame);
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
		tag: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'tag');
			},
		
			set: function (_tag) {
				if (!$init) { $initialize(); }
				this.$private.tag = _tag;
				$dispatch(this.$native, 'setTag:', _tag);
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
		},
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGAffineTransform($dispatch(this.$native, 'transform'));
			},
		
			set: function (_transform) {
				if (!$init) { $initialize(); }
				this.$private.transform = _transform;
				$dispatch(this.$native, 'setTransform:', _transform);
			},
			enumerable: false
		},
		window: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIWindow($dispatch(this.$native, 'window'));
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

module.exports = UIView;
