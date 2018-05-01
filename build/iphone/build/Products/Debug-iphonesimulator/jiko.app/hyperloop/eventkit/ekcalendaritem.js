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
 * EventKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/EventKit.framework/Headers/EKCalendarItem.h
 * @class
 */
function EKCalendarItem (pointer) {
	if (!(this instanceof EKCalendarItem)) {
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
			class: 'EKCalendarItem',
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
EKCalendarItem.prototype = Object.create(EKObject.prototype, {
	constructor: {
		value: EKCalendarItem,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(EKCalendarItem, EKObject);

Object.defineProperty(EKCalendarItem, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(EKCalendarItem, 'className', {
	value: 'EKCalendarItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKCalendarItem.prototype, 'className', {
	value: 'EKCalendarItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKCalendarItem.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(EKCalendarItem, 'toString', {
	value: function () {
		return '[class EKCalendarItem]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'EKCalendarItem',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(EKCalendarItem, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(EKCalendarItem, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(EKCalendarItem.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		},
		location: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'location'));
			},
		
			set: function (_location) {
				if (!$init) { $initialize(); }
				this.$private.location = _location;
				$dispatch(this.$native, 'setLocation:', _location);
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

module.exports = EKCalendarItem;
