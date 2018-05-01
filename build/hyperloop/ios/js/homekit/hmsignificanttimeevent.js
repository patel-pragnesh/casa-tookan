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


var HMTimeEvent = require('/hyperloop/homekit/hmtimeevent');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMSignificantTimeEvent.h
 * @class
 */
function HMSignificantTimeEvent (pointer) {
	if (!(this instanceof HMSignificantTimeEvent)) {
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
			class: 'HMSignificantTimeEvent',
			alloc: true,
			init: 'init'
		});
	}
	HMTimeEvent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMSignificantTimeEvent.prototype = Object.create(HMTimeEvent.prototype, {
	constructor: {
		value: HMSignificantTimeEvent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMSignificantTimeEvent, HMTimeEvent);

Object.defineProperty(HMSignificantTimeEvent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMSignificantTimeEvent, 'className', {
	value: 'HMSignificantTimeEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMSignificantTimeEvent.prototype, 'className', {
	value: 'HMSignificantTimeEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMSignificantTimeEvent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMSignificantTimeEvent, 'toString', {
	value: function () {
		return '[class HMSignificantTimeEvent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDateComponents = require('/hyperloop/foundation/nsdatecomponents');

	$class = Hyperloop.createProxy({
		class: 'HMSignificantTimeEvent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMSignificantTimeEvent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMSignificantTimeEvent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HMSignificantTimeEvent.prototype, 'init', {
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
	Object.defineProperties(HMSignificantTimeEvent.prototype, {
		offset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDateComponents($dispatch(this.$native, 'offset'));
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

module.exports = HMSignificantTimeEvent;
