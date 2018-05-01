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


var EKCalendarItem = require('/hyperloop/eventkit/ekcalendaritem');


/**
 * EventKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/EventKit.framework/Headers/EKReminder.h
 * @class
 */
function EKReminder (pointer) {
	if (!(this instanceof EKReminder)) {
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
			class: 'EKReminder',
			alloc: true,
			init: 'init'
		});
	}
	EKCalendarItem.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
EKReminder.prototype = Object.create(EKCalendarItem.prototype, {
	constructor: {
		value: EKReminder,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(EKReminder, EKCalendarItem);

Object.defineProperty(EKReminder, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(EKReminder, 'className', {
	value: 'EKReminder',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKReminder.prototype, 'className', {
	value: 'EKReminder',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKReminder.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(EKReminder, 'toString', {
	value: function () {
		return '[class EKReminder]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'EKReminder',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(EKReminder, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(EKReminder, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(EKReminder.prototype, {
		priority: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'priority');
			},
		
			set: function (_priority) {
				if (!$init) { $initialize(); }
				this.$private.priority = _priority;
				$dispatch(this.$native, 'setPriority:', _priority);
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

module.exports = EKReminder;
