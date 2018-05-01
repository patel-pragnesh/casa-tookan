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


var EKObject = require('/hyperloop/eventkit/ekobject');


/**
 * EventKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/EventKit.framework/Headers/EKRecurrenceRule.h
 * @class
 */
function EKRecurrenceRule (pointer) {
	if (!(this instanceof EKRecurrenceRule)) {
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
			class: 'EKRecurrenceRule',
			alloc: true,
			init: 'init'
		});
	}
	EKObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
EKRecurrenceRule.prototype = Object.create(EKObject.prototype, {
	constructor: {
		value: EKRecurrenceRule,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(EKRecurrenceRule, EKObject);

Object.defineProperty(EKRecurrenceRule, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(EKRecurrenceRule, 'className', {
	value: 'EKRecurrenceRule',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKRecurrenceRule.prototype, 'className', {
	value: 'EKRecurrenceRule',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKRecurrenceRule.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(EKRecurrenceRule, 'toString', {
	value: function () {
		return '[class EKRecurrenceRule]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'EKRecurrenceRule',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(EKRecurrenceRule, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(EKRecurrenceRule, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(EKRecurrenceRule.prototype, {
		interval: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'interval');
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

module.exports = EKRecurrenceRule;
