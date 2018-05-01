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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIRefreshControl.h
 * @class
 */
function UIRefreshControl (pointer) {
	if (!(this instanceof UIRefreshControl)) {
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
			class: 'UIRefreshControl',
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
UIRefreshControl.prototype = Object.create(UIControl.prototype, {
	constructor: {
		value: UIRefreshControl,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIRefreshControl, UIControl);

Object.defineProperty(UIRefreshControl, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIRefreshControl, 'className', {
	value: 'UIRefreshControl',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIRefreshControl.prototype, 'className', {
	value: 'UIRefreshControl',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIRefreshControl.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIRefreshControl, 'toString', {
	value: function () {
		return '[class UIRefreshControl]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');

	$class = Hyperloop.createProxy({
		class: 'UIRefreshControl',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIRefreshControl, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIRefreshControl, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIRefreshControl.prototype, 'endRefreshing', {
		value: function () {
			var result = $dispatch(this.$native, 'endRefreshing', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIRefreshControl.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UIRefreshControl.prototype, {
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

module.exports = UIRefreshControl;
