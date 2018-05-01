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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INRestaurantReservationBooking.h
 * @class
 */
function INRestaurantReservationBooking (pointer) {
	if (!(this instanceof INRestaurantReservationBooking)) {
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
			class: 'INRestaurantReservationBooking',
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
INRestaurantReservationBooking.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INRestaurantReservationBooking,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INRestaurantReservationBooking, NSObject);

Object.defineProperty(INRestaurantReservationBooking, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INRestaurantReservationBooking, 'className', {
	value: 'INRestaurantReservationBooking',
	enumerable: false,
	writable: true
});

Object.defineProperty(INRestaurantReservationBooking.prototype, 'className', {
	value: 'INRestaurantReservationBooking',
	enumerable: false,
	writable: true
});

Object.defineProperty(INRestaurantReservationBooking.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INRestaurantReservationBooking, 'toString', {
	value: function () {
		return '[class INRestaurantReservationBooking]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INRestaurantReservationBooking',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INRestaurantReservationBooking, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INRestaurantReservationBooking, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = INRestaurantReservationBooking;
