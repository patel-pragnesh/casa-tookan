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
 * EventKitUI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/EventKitUI.framework/Headers/EKCalendarChooser.h
 * @class
 */
function EKCalendarChooser (pointer) {
	if (!(this instanceof EKCalendarChooser)) {
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
			class: 'EKCalendarChooser',
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
EKCalendarChooser.prototype = Object.create(UIViewController.prototype, {
	constructor: {
		value: EKCalendarChooser,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(EKCalendarChooser, UIViewController);

Object.defineProperty(EKCalendarChooser, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(EKCalendarChooser, 'className', {
	value: 'EKCalendarChooser',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKCalendarChooser.prototype, 'className', {
	value: 'EKCalendarChooser',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKCalendarChooser.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(EKCalendarChooser, 'toString', {
	value: function () {
		return '[class EKCalendarChooser]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'EKCalendarChooser',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(EKCalendarChooser, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(EKCalendarChooser, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(EKCalendarChooser.prototype, {
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

module.exports = EKCalendarChooser;
