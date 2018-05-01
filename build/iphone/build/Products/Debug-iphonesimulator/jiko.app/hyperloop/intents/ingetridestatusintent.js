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


var INIntent = require('/hyperloop/intents/inintent');


/**
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INGetRideStatusIntent.h
 * @class
 */
function INGetRideStatusIntent (pointer) {
	if (!(this instanceof INGetRideStatusIntent)) {
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
			class: 'INGetRideStatusIntent',
			alloc: true,
			init: 'init'
		});
	}
	INIntent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
INGetRideStatusIntent.prototype = Object.create(INIntent.prototype, {
	constructor: {
		value: INGetRideStatusIntent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INGetRideStatusIntent, INIntent);

Object.defineProperty(INGetRideStatusIntent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INGetRideStatusIntent, 'className', {
	value: 'INGetRideStatusIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INGetRideStatusIntent.prototype, 'className', {
	value: 'INGetRideStatusIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INGetRideStatusIntent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INGetRideStatusIntent, 'toString', {
	value: function () {
		return '[class INGetRideStatusIntent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INGetRideStatusIntent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INGetRideStatusIntent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INGetRideStatusIntent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INGetRideStatusIntent.prototype, 'init', {
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



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = INGetRideStatusIntent;
