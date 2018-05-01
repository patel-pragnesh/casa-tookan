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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INGetUserCurrentRestaurantReservationBookingsIntentResponse.h
 * @class
 */
function INGetUserCurrentRestaurantReservationBookingsIntentResponse (pointer) {
	if (!(this instanceof INGetUserCurrentRestaurantReservationBookingsIntentResponse)) {
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
			class: 'INGetUserCurrentRestaurantReservationBookingsIntentResponse',
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
INGetUserCurrentRestaurantReservationBookingsIntentResponse.prototype = Object.create(INIntentResponse.prototype, {
	constructor: {
		value: INGetUserCurrentRestaurantReservationBookingsIntentResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INGetUserCurrentRestaurantReservationBookingsIntentResponse, INIntentResponse);

Object.defineProperty(INGetUserCurrentRestaurantReservationBookingsIntentResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INGetUserCurrentRestaurantReservationBookingsIntentResponse, 'className', {
	value: 'INGetUserCurrentRestaurantReservationBookingsIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INGetUserCurrentRestaurantReservationBookingsIntentResponse.prototype, 'className', {
	value: 'INGetUserCurrentRestaurantReservationBookingsIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INGetUserCurrentRestaurantReservationBookingsIntentResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INGetUserCurrentRestaurantReservationBookingsIntentResponse, 'toString', {
	value: function () {
		return '[class INGetUserCurrentRestaurantReservationBookingsIntentResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INGetUserCurrentRestaurantReservationBookingsIntentResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INGetUserCurrentRestaurantReservationBookingsIntentResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INGetUserCurrentRestaurantReservationBookingsIntentResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INGetUserCurrentRestaurantReservationBookingsIntentResponse.prototype, {
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

module.exports = INGetUserCurrentRestaurantReservationBookingsIntentResponse;
