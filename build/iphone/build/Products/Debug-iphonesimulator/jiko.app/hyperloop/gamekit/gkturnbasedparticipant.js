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
function GKTurnBasedParticipant (pointer) {
	if (!(this instanceof GKTurnBasedParticipant)) {
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
			class: 'GKTurnBasedParticipant',
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
GKTurnBasedParticipant.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKTurnBasedParticipant,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKTurnBasedParticipant, NSObject);

Object.defineProperty(GKTurnBasedParticipant, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKTurnBasedParticipant, 'className', {
	value: 'GKTurnBasedParticipant',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKTurnBasedParticipant.prototype, 'className', {
	value: 'GKTurnBasedParticipant',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKTurnBasedParticipant.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKTurnBasedParticipant, 'toString', {
	value: function () {
		return '[class GKTurnBasedParticipant]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GKTurnBasedParticipant',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKTurnBasedParticipant, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKTurnBasedParticipant, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GKTurnBasedParticipant.prototype, {
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

module.exports = GKTurnBasedParticipant;
