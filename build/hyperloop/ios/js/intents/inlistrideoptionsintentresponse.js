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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INListRideOptionsIntentResponse.h
 * @class
 */
function INListRideOptionsIntentResponse (pointer) {
	if (!(this instanceof INListRideOptionsIntentResponse)) {
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
			class: 'INListRideOptionsIntentResponse',
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
INListRideOptionsIntentResponse.prototype = Object.create(INIntentResponse.prototype, {
	constructor: {
		value: INListRideOptionsIntentResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INListRideOptionsIntentResponse, INIntentResponse);

Object.defineProperty(INListRideOptionsIntentResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INListRideOptionsIntentResponse, 'className', {
	value: 'INListRideOptionsIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INListRideOptionsIntentResponse.prototype, 'className', {
	value: 'INListRideOptionsIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INListRideOptionsIntentResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INListRideOptionsIntentResponse, 'toString', {
	value: function () {
		return '[class INListRideOptionsIntentResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'INListRideOptionsIntentResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INListRideOptionsIntentResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INListRideOptionsIntentResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INListRideOptionsIntentResponse.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSObject(result);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(INListRideOptionsIntentResponse.prototype, {
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

module.exports = INListRideOptionsIntentResponse;
