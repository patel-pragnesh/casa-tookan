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


var HMSignificantTimeEvent = require('/hyperloop/homekit/hmsignificanttimeevent');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMSignificantTimeEvent.h
 * @class
 */
function HMMutableSignificantTimeEvent (pointer) {
	if (!(this instanceof HMMutableSignificantTimeEvent)) {
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
			class: 'HMMutableSignificantTimeEvent',
			alloc: true,
			init: 'init'
		});
	}
	HMSignificantTimeEvent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMMutableSignificantTimeEvent.prototype = Object.create(HMSignificantTimeEvent.prototype, {
	constructor: {
		value: HMMutableSignificantTimeEvent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMMutableSignificantTimeEvent, HMSignificantTimeEvent);

Object.defineProperty(HMMutableSignificantTimeEvent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMMutableSignificantTimeEvent, 'className', {
	value: 'HMMutableSignificantTimeEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMMutableSignificantTimeEvent.prototype, 'className', {
	value: 'HMMutableSignificantTimeEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMMutableSignificantTimeEvent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMMutableSignificantTimeEvent, 'toString', {
	value: function () {
		return '[class HMMutableSignificantTimeEvent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDateComponents = require('/hyperloop/foundation/nsdatecomponents');

	$class = Hyperloop.createProxy({
		class: 'HMMutableSignificantTimeEvent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMMutableSignificantTimeEvent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMMutableSignificantTimeEvent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HMMutableSignificantTimeEvent.prototype, {
		offset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDateComponents($dispatch(this.$native, 'offset'));
			},
		
			set: function (_offset) {
				if (!$init) { $initialize(); }
				this.$private.offset = _offset;
				$dispatch(this.$native, 'setOffset:', _offset);
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

module.exports = HMMutableSignificantTimeEvent;
