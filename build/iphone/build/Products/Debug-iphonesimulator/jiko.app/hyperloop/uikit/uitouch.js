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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UITouch.h
 * @class
 */
function UITouch (pointer) {
	if (!(this instanceof UITouch)) {
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
			class: 'UITouch',
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
UITouch.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UITouch,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UITouch, NSObject);

Object.defineProperty(UITouch, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UITouch, 'className', {
	value: 'UITouch',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITouch.prototype, 'className', {
	value: 'UITouch',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITouch.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UITouch, 'toString', {
	value: function () {
		return '[class UITouch]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIView = require('/hyperloop/uikit/uiview');
	$imports.UIWindow = require('/hyperloop/uikit/uiwindow');

	$class = Hyperloop.createProxy({
		class: 'UITouch',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UITouch, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UITouch, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UITouch.prototype, {
		timestamp: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'timestamp');
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
			},
		
			enumerable: false
		},
		view: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIView($dispatch(this.$native, 'view'));
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

module.exports = UITouch;
