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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INBookRestaurantReservationIntentResponse.h
 * @class
 */
function INBookRestaurantReservationIntentResponse (pointer) {
	if (!(this instanceof INBookRestaurantReservationIntentResponse)) {
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
			class: 'INBookRestaurantReservationIntentResponse',
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
INBookRestaurantReservationIntentResponse.prototype = Object.create(INIntentResponse.prototype, {
	constructor: {
		value: INBookRestaurantReservationIntentResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INBookRestaurantReservationIntentResponse, INIntentResponse);

Object.defineProperty(INBookRestaurantReservationIntentResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INBookRestaurantReservationIntentResponse, 'className', {
	value: 'INBookRestaurantReservationIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INBookRestaurantReservationIntentResponse.prototype, 'className', {
	value: 'INBookRestaurantReservationIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INBookRestaurantReservationIntentResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INBookRestaurantReservationIntentResponse, 'toString', {
	value: function () {
		return '[class INBookRestaurantReservationIntentResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INBookRestaurantReservationIntentResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INBookRestaurantReservationIntentResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INBookRestaurantReservationIntentResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INBookRestaurantReservationIntentResponse.prototype, {
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

module.exports = INBookRestaurantReservationIntentResponse;
