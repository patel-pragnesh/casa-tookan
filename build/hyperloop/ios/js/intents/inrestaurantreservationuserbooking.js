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


var INRestaurantReservationBooking = require('/hyperloop/intents/inrestaurantreservationbooking');


/**
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INRestaurantReservationUserBooking.h
 * @class
 */
function INRestaurantReservationUserBooking (pointer) {
	if (!(this instanceof INRestaurantReservationUserBooking)) {
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
			class: 'INRestaurantReservationUserBooking',
			alloc: true,
			init: 'init'
		});
	}
	INRestaurantReservationBooking.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
INRestaurantReservationUserBooking.prototype = Object.create(INRestaurantReservationBooking.prototype, {
	constructor: {
		value: INRestaurantReservationUserBooking,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INRestaurantReservationUserBooking, INRestaurantReservationBooking);

Object.defineProperty(INRestaurantReservationUserBooking, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INRestaurantReservationUserBooking, 'className', {
	value: 'INRestaurantReservationUserBooking',
	enumerable: false,
	writable: true
});

Object.defineProperty(INRestaurantReservationUserBooking.prototype, 'className', {
	value: 'INRestaurantReservationUserBooking',
	enumerable: false,
	writable: true
});

Object.defineProperty(INRestaurantReservationUserBooking.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INRestaurantReservationUserBooking, 'toString', {
	value: function () {
		return '[class INRestaurantReservationUserBooking]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INRestaurantReservationUserBooking',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INRestaurantReservationUserBooking, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INRestaurantReservationUserBooking, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INRestaurantReservationUserBooking.prototype, {
		status: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'status');
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

module.exports = INRestaurantReservationUserBooking;
