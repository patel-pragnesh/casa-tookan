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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIAccessibilityLocationDescriptor.h
 * @class
 */
function UIAccessibilityLocationDescriptor (pointer) {
	if (!(this instanceof UIAccessibilityLocationDescriptor)) {
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
			class: 'UIAccessibilityLocationDescriptor',
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
UIAccessibilityLocationDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIAccessibilityLocationDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIAccessibilityLocationDescriptor, NSObject);

Object.defineProperty(UIAccessibilityLocationDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIAccessibilityLocationDescriptor, 'className', {
	value: 'UIAccessibilityLocationDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIAccessibilityLocationDescriptor.prototype, 'className', {
	value: 'UIAccessibilityLocationDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIAccessibilityLocationDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIAccessibilityLocationDescriptor, 'toString', {
	value: function () {
		return '[class UIAccessibilityLocationDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.CGPoint = require('/hyperloop/coregraphics/cgpoint');
	$imports.UIView = require('/hyperloop/uikit/uiview');

	$class = Hyperloop.createProxy({
		class: 'UIAccessibilityLocationDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIAccessibilityLocationDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIAccessibilityLocationDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIAccessibilityLocationDescriptor.prototype, 'init', {
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
	Object.defineProperties(UIAccessibilityLocationDescriptor.prototype, {
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			enumerable: false
		},
		point: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGPoint($dispatch(this.$native, 'point'));
			},
		
			enumerable: false
		},
		view: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIView($dispatch(this.$native, 'view'));
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

module.exports = UIAccessibilityLocationDescriptor;
