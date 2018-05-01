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
 * EventKitUI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/EventKitUI.framework/Headers/EKEventViewController.h
 * @class
 */
function EKEventViewController (pointer) {
	if (!(this instanceof EKEventViewController)) {
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
			class: 'EKEventViewController',
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
EKEventViewController.prototype = Object.create(UIViewController.prototype, {
	constructor: {
		value: EKEventViewController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(EKEventViewController, UIViewController);

Object.defineProperty(EKEventViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(EKEventViewController, 'className', {
	value: 'EKEventViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKEventViewController.prototype, 'className', {
	value: 'EKEventViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKEventViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(EKEventViewController, 'toString', {
	value: function () {
		return '[class EKEventViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.EKEvent = require('/hyperloop/eventkit/ekevent');

	$class = Hyperloop.createProxy({
		class: 'EKEventViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(EKEventViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(EKEventViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(EKEventViewController.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		event: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.EKEvent($dispatch(this.$native, 'event'));
			},
		
			set: function (_event) {
				if (!$init) { $initialize(); }
				this.$private.event = _event;
				$dispatch(this.$native, 'setEvent:', _event);
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

module.exports = EKEventViewController;
