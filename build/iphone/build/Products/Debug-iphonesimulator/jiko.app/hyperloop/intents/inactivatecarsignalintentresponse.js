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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INActivateCarSignalIntentResponse.h
 * @class
 */
function INActivateCarSignalIntentResponse (pointer) {
	if (!(this instanceof INActivateCarSignalIntentResponse)) {
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
			class: 'INActivateCarSignalIntentResponse',
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
INActivateCarSignalIntentResponse.prototype = Object.create(INIntentResponse.prototype, {
	constructor: {
		value: INActivateCarSignalIntentResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INActivateCarSignalIntentResponse, INIntentResponse);

Object.defineProperty(INActivateCarSignalIntentResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INActivateCarSignalIntentResponse, 'className', {
	value: 'INActivateCarSignalIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INActivateCarSignalIntentResponse.prototype, 'className', {
	value: 'INActivateCarSignalIntentResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(INActivateCarSignalIntentResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INActivateCarSignalIntentResponse, 'toString', {
	value: function () {
		return '[class INActivateCarSignalIntentResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'INActivateCarSignalIntentResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INActivateCarSignalIntentResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INActivateCarSignalIntentResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INActivateCarSignalIntentResponse.prototype, 'init', {
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
	Object.defineProperties(INActivateCarSignalIntentResponse.prototype, {
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

module.exports = INActivateCarSignalIntentResponse;
