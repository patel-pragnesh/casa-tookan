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
 * EventKitUI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/EventKitUI.framework/Headers/EKEventEditViewController.h
 * @class
 */
function EKEventEditViewController (pointer) {
	if (!(this instanceof EKEventEditViewController)) {
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
			class: 'EKEventEditViewController',
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
EKEventEditViewController.prototype = Object.create(UINavigationController.prototype, {
	constructor: {
		value: EKEventEditViewController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(EKEventEditViewController, UINavigationController);

Object.defineProperty(EKEventEditViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(EKEventEditViewController, 'className', {
	value: 'EKEventEditViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKEventEditViewController.prototype, 'className', {
	value: 'EKEventEditViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKEventEditViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(EKEventEditViewController, 'toString', {
	value: function () {
		return '[class EKEventEditViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.EKEvent = require('/hyperloop/eventkit/ekevent');

	$class = Hyperloop.createProxy({
		class: 'EKEventEditViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(EKEventEditViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(EKEventEditViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(EKEventEditViewController.prototype, {
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

module.exports = EKEventEditViewController;
