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


var UINavigationController = require('/hyperloop/uikit/uinavigationcontroller');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIImagePickerController.h
 * @class
 */
function UIImagePickerController (pointer) {
	if (!(this instanceof UIImagePickerController)) {
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
			class: 'UIImagePickerController',
			alloc: true,
			init: 'init'
		});
	}
	UINavigationController.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIImagePickerController.prototype = Object.create(UINavigationController.prototype, {
	constructor: {
		value: UIImagePickerController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIImagePickerController, UINavigationController);

Object.defineProperty(UIImagePickerController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIImagePickerController, 'className', {
	value: 'UIImagePickerController',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIImagePickerController.prototype, 'className', {
	value: 'UIImagePickerController',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIImagePickerController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIImagePickerController, 'toString', {
	value: function () {
		return '[class UIImagePickerController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'UIImagePickerController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIImagePickerController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIImagePickerController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIImagePickerController.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = UIImagePickerController;
