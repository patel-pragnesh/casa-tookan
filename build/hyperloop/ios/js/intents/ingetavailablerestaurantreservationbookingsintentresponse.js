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


var INIntentResponse = require('/hyperloop/intents/inintentresponse');


/**
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INGetAvailableRestaurantReservationBookingsIntentResponse.h
 * @class
 */
function INGetAvailableRestaurantReservationBookingsIntentResponse (pointer) {
	if (!(this instanceof INGetAvailableRestaurantReservationBookingsIntentResponse)) {
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
			class: 'INGetAvailableRestaurantReservationBookingsIntentResponse',
			alloc: true,
			init: 'init'
		});
	}
	INIntentResponse.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
INGetAvailableRestaurantReservationBookingsIntentResponse.prototype = Object.create(INIntentResponse.prototype, {
	constructor: {
		value: INGetAvailableRestaurantReservationBookingsIntentResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INGetAvailableRestaurantReservationBookingsIntentResponse, INIntentResponse);

Object.defineProperty(INGetAvailableRestaurantReservationBookingsIntentResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INGetAvailableRestaurantReservationBookingsIntentResponse, 'className', {
	value: 'INGetAvailableRestaurantReservationBookingsIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INGetAvailableRestaurantReservationBookingsIntentResponse.prototype, 'className', {
	value: 'INGetAvailableRestaurantReservationBookingsIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INGetAvailableRestaurantReservationBookingsIntentResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INGetAvailableRestaurantReservationBookingsIntentResponse, 'toString', {
	value: function () {
		return '[class INGetAvailableRestaurantReservationBookingsIntentResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INGetAvailableRestaurantReservationBookingsIntentResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INGetAvailableRestaurantReservationBookingsIntentResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INGetAvailableRestaurantReservationBookingsIntentResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INGetAvailableRestaurantReservationBookingsIntentResponse.prototype, {
		code: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'code');
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

module.exports = INGetAvailableRestaurantReservationBookingsIntentResponse;
