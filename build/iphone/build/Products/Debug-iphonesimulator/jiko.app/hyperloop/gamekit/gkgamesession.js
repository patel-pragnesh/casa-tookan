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
 * GameKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameKit.framework/Headers/GKGameSession.h
 * @class
 */
function GKGameSession (pointer) {
	if (!(this instanceof GKGameSession)) {
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
			class: 'GKGameSession',
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
GKGameSession.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKGameSession,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKGameSession, NSObject);

Object.defineProperty(GKGameSession, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKGameSession, 'className', {
	value: 'GKGameSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKGameSession.prototype, 'className', {
	value: 'GKGameSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKGameSession.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKGameSession, 'toString', {
	value: function () {
		return '[class GKGameSession]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(GKGameSession, 'addEventListener', {
	value: function (_listener) {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'addEventListener:', [_listener], false);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(GKGameSession, 'removeEventListener', {
	value: function (_listener) {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'removeEventListener:', [_listener], false);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'GKGameSession',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKGameSession, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKGameSession, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GKGameSession.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		title: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'title'));
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

module.exports = GKGameSession;
