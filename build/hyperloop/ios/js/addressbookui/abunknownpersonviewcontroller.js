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


var UIViewController = require('/hyperloop/uikit/uiviewcontroller');


/**
 * AddressBookUI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AddressBookUI.framework/Headers/ABUnknownPersonViewController.h
 * @class
 */
function ABUnknownPersonViewController (pointer) {
	if (!(this instanceof ABUnknownPersonViewController)) {
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
			class: 'ABUnknownPersonViewController',
			alloc: true,
			init: 'init'
		});
	}
	UIViewController.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
ABUnknownPersonViewController.prototype = Object.create(UIViewController.prototype, {
	constructor: {
		value: ABUnknownPersonViewController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(ABUnknownPersonViewController, UIViewController);

Object.defineProperty(ABUnknownPersonViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(ABUnknownPersonViewController, 'className', {
	value: 'ABUnknownPersonViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(ABUnknownPersonViewController.prototype, 'className', {
	value: 'ABUnknownPersonViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(ABUnknownPersonViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(ABUnknownPersonViewController, 'toString', {
	value: function () {
		return '[class ABUnknownPersonViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'ABUnknownPersonViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(ABUnknownPersonViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(ABUnknownPersonViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(ABUnknownPersonViewController.prototype, {
		message: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'message'));
			},
		
			set: function (_message) {
				if (!$init) { $initialize(); }
				this.$private.message = _message;
				$dispatch(this.$native, 'setMessage:', _message);
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

module.exports = ABUnknownPersonViewController;
