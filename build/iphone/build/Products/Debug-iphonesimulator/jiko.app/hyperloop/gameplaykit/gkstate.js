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
 * GameplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameplayKit.framework/Headers/GKState.h
 * @class
 */
function GKState (pointer) {
	if (!(this instanceof GKState)) {
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
			class: 'GKState',
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
GKState.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKState,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKState, NSObject);

Object.defineProperty(GKState, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKState, 'className', {
	value: 'GKState',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKState.prototype, 'className', {
	value: 'GKState',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKState.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKState, 'toString', {
	value: function () {
		return '[class GKState]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(GKState, 'state', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'state', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GKState',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKState, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKState, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GKState.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
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

module.exports = GKState;
