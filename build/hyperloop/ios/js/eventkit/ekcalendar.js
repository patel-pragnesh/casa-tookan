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
 * EventKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/EventKit.framework/Headers/EKCalendar.h
 * @class
 */
function EKCalendar (pointer) {
	if (!(this instanceof EKCalendar)) {
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
			class: 'EKCalendar',
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
EKCalendar.prototype = Object.create(EKObject.prototype, {
	constructor: {
		value: EKCalendar,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(EKCalendar, EKObject);

Object.defineProperty(EKCalendar, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(EKCalendar, 'className', {
	value: 'EKCalendar',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKCalendar.prototype, 'className', {
	value: 'EKCalendar',
	enumerable: false,
	writable: true
});

Object.defineProperty(EKCalendar.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(EKCalendar, 'toString', {
	value: function () {
		return '[class EKCalendar]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.EKSource = require('/hyperloop/eventkit/eksource');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'EKCalendar',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(EKCalendar, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(EKCalendar, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(EKCalendar.prototype, {
		source: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.EKSource($dispatch(this.$native, 'source'));
			},
		
			set: function (_source) {
				if (!$init) { $initialize(); }
				this.$private.source = _source;
				$dispatch(this.$native, 'setSource:', _source);
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
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
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

module.exports = EKCalendar;
