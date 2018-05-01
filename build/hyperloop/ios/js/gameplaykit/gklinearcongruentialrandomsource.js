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


var GKRandomSource = require('/hyperloop/gameplaykit/gkrandomsource');


/**
 * GameplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameplayKit.framework/Headers/GKRandomSource.h
 * @class
 */
function GKLinearCongruentialRandomSource (pointer) {
	if (!(this instanceof GKLinearCongruentialRandomSource)) {
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
			class: 'GKLinearCongruentialRandomSource',
			alloc: true,
			init: 'init'
		});
	}
	GKRandomSource.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
GKLinearCongruentialRandomSource.prototype = Object.create(GKRandomSource.prototype, {
	constructor: {
		value: GKLinearCongruentialRandomSource,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKLinearCongruentialRandomSource, GKRandomSource);

Object.defineProperty(GKLinearCongruentialRandomSource, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKLinearCongruentialRandomSource, 'className', {
	value: 'GKLinearCongruentialRandomSource',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKLinearCongruentialRandomSource.prototype, 'className', {
	value: 'GKLinearCongruentialRandomSource',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKLinearCongruentialRandomSource.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKLinearCongruentialRandomSource, 'toString', {
	value: function () {
		return '[class GKLinearCongruentialRandomSource]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GKLinearCongruentialRandomSource',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKLinearCongruentialRandomSource, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKLinearCongruentialRandomSource, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GKLinearCongruentialRandomSource.prototype, 'init', {
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

module.exports = GKLinearCongruentialRandomSource;
