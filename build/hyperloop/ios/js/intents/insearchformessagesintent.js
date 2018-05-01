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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INSearchForMessagesIntent.h
 * @class
 */
function INSearchForMessagesIntent (pointer) {
	if (!(this instanceof INSearchForMessagesIntent)) {
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
			class: 'INSearchForMessagesIntent',
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
INSearchForMessagesIntent.prototype = Object.create(INIntent.prototype, {
	constructor: {
		value: INSearchForMessagesIntent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INSearchForMessagesIntent, INIntent);

Object.defineProperty(INSearchForMessagesIntent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INSearchForMessagesIntent, 'className', {
	value: 'INSearchForMessagesIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSearchForMessagesIntent.prototype, 'className', {
	value: 'INSearchForMessagesIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSearchForMessagesIntent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INSearchForMessagesIntent, 'toString', {
	value: function () {
		return '[class INSearchForMessagesIntent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INSearchForMessagesIntent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INSearchForMessagesIntent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INSearchForMessagesIntent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INSearchForMessagesIntent.prototype, {
		attributes: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'attributes');
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

module.exports = INSearchForMessagesIntent;
