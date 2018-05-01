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


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * GameKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameKit.framework/Headers/GKVoiceChat.h
 * @class
 */
function GKVoiceChat (pointer) {
	if (!(this instanceof GKVoiceChat)) {
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
			class: 'GKVoiceChat',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
GKVoiceChat.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKVoiceChat,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKVoiceChat, NSObject);

Object.defineProperty(GKVoiceChat, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKVoiceChat, 'className', {
	value: 'GKVoiceChat',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKVoiceChat.prototype, 'className', {
	value: 'GKVoiceChat',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKVoiceChat.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKVoiceChat, 'toString', {
	value: function () {
		return '[class GKVoiceChat]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'GKVoiceChat',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKVoiceChat, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKVoiceChat, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GKVoiceChat.prototype, 'start', {
		value: function () {
			var result = $dispatch(this.$native, 'start', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(GKVoiceChat.prototype, 'stop', {
		value: function () {
			var result = $dispatch(this.$native, 'stop', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(GKVoiceChat.prototype, {
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
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

module.exports = GKVoiceChat;
