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
function GKTurnBasedMatch (pointer) {
	if (!(this instanceof GKTurnBasedMatch)) {
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
			class: 'GKTurnBasedMatch',
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
GKTurnBasedMatch.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKTurnBasedMatch,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKTurnBasedMatch, NSObject);

Object.defineProperty(GKTurnBasedMatch, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKTurnBasedMatch, 'className', {
	value: 'GKTurnBasedMatch',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKTurnBasedMatch.prototype, 'className', {
	value: 'GKTurnBasedMatch',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKTurnBasedMatch.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKTurnBasedMatch, 'toString', {
	value: function () {
		return '[class GKTurnBasedMatch]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'GKTurnBasedMatch',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKTurnBasedMatch, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKTurnBasedMatch, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GKTurnBasedMatch.prototype, {
		message: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'message'));
			},
		
			set: function (_message) {
				if (!$init) { $initialize(); }
				this.$private.message = _message;
				$dispatch(this.$native, 'setMessage:', _message);
			},
			enumerable: false
		},
		status: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'status');
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

module.exports = GKTurnBasedMatch;
