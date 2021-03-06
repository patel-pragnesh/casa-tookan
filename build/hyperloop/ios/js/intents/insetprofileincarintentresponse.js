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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INSetProfileInCarIntentResponse.h
 * @class
 */
function INSetProfileInCarIntentResponse (pointer) {
	if (!(this instanceof INSetProfileInCarIntentResponse)) {
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
			class: 'INSetProfileInCarIntentResponse',
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
INSetProfileInCarIntentResponse.prototype = Object.create(INIntentResponse.prototype, {
	constructor: {
		value: INSetProfileInCarIntentResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INSetProfileInCarIntentResponse, INIntentResponse);

Object.defineProperty(INSetProfileInCarIntentResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INSetProfileInCarIntentResponse, 'className', {
	value: 'INSetProfileInCarIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSetProfileInCarIntentResponse.prototype, 'className', {
	value: 'INSetProfileInCarIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSetProfileInCarIntentResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INSetProfileInCarIntentResponse, 'toString', {
	value: function () {
		return '[class INSetProfileInCarIntentResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'INSetProfileInCarIntentResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INSetProfileInCarIntentResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INSetProfileInCarIntentResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INSetProfileInCarIntentResponse.prototype, 'init', {
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
	Object.defineProperties(INSetProfileInCarIntentResponse.prototype, {
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

module.exports = INSetProfileInCarIntentResponse;
