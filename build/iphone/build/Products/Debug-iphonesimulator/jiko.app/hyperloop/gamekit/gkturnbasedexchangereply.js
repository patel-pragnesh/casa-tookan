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
 * GameKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameKit.framework/Headers/GKTurnBasedMatch.h
 * @class
 */
function GKTurnBasedExchangeReply (pointer) {
	if (!(this instanceof GKTurnBasedExchangeReply)) {
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
			class: 'GKTurnBasedExchangeReply',
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
GKTurnBasedExchangeReply.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKTurnBasedExchangeReply,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKTurnBasedExchangeReply, NSObject);

Object.defineProperty(GKTurnBasedExchangeReply, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKTurnBasedExchangeReply, 'className', {
	value: 'GKTurnBasedExchangeReply',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKTurnBasedExchangeReply.prototype, 'className', {
	value: 'GKTurnBasedExchangeReply',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKTurnBasedExchangeReply.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKTurnBasedExchangeReply, 'toString', {
	value: function () {
		return '[class GKTurnBasedExchangeReply]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'GKTurnBasedExchangeReply',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKTurnBasedExchangeReply, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKTurnBasedExchangeReply, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GKTurnBasedExchangeReply.prototype, {
		data: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'data'));
			},
		
			enumerable: false
		},
		message: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'message'));
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

module.exports = GKTurnBasedExchangeReply;
