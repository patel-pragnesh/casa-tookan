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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIMenuController.h
 * @class
 */
function UIMenuItem (pointer) {
	if (!(this instanceof UIMenuItem)) {
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
			class: 'UIMenuItem',
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
UIMenuItem.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIMenuItem,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIMenuItem, NSObject);

Object.defineProperty(UIMenuItem, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIMenuItem, 'className', {
	value: 'UIMenuItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIMenuItem.prototype, 'className', {
	value: 'UIMenuItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIMenuItem.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIMenuItem, 'toString', {
	value: function () {
		return '[class UIMenuItem]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'UIMenuItem',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIMenuItem, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIMenuItem, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIMenuItem.prototype, {
		action: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'action');
			},
		
			enumerable: false
		},
		title: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'title'));
			},
		
			set: function (_title) {
				if (!$init) { $initialize(); }
				this.$private.title = _title;
				$dispatch(this.$native, 'setTitle:', _title);
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

module.exports = UIMenuItem;