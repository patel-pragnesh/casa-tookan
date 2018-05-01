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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INSendMessageIntent.h
 * @class
 */
function INSendMessageIntent (pointer) {
	if (!(this instanceof INSendMessageIntent)) {
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
			class: 'INSendMessageIntent',
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
INSendMessageIntent.prototype = Object.create(INIntent.prototype, {
	constructor: {
		value: INSendMessageIntent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INSendMessageIntent, INIntent);

Object.defineProperty(INSendMessageIntent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INSendMessageIntent, 'className', {
	value: 'INSendMessageIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSendMessageIntent.prototype, 'className', {
	value: 'INSendMessageIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSendMessageIntent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INSendMessageIntent, 'toString', {
	value: function () {
		return '[class INSendMessageIntent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'INSendMessageIntent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INSendMessageIntent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INSendMessageIntent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INSendMessageIntent.prototype, {
		content: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'content'));
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

module.exports = INSendMessageIntent;
