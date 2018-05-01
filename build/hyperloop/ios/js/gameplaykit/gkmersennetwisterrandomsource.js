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
function GKMersenneTwisterRandomSource (pointer) {
	if (!(this instanceof GKMersenneTwisterRandomSource)) {
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
			class: 'GKMersenneTwisterRandomSource',
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
GKMersenneTwisterRandomSource.prototype = Object.create(GKRandomSource.prototype, {
	constructor: {
		value: GKMersenneTwisterRandomSource,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKMersenneTwisterRandomSource, GKRandomSource);

Object.defineProperty(GKMersenneTwisterRandomSource, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKMersenneTwisterRandomSource, 'className', {
	value: 'GKMersenneTwisterRandomSource',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKMersenneTwisterRandomSource.prototype, 'className', {
	value: 'GKMersenneTwisterRandomSource',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKMersenneTwisterRandomSource.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKMersenneTwisterRandomSource, 'toString', {
	value: function () {
		return '[class GKMersenneTwisterRandomSource]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GKMersenneTwisterRandomSource',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKMersenneTwisterRandomSource, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKMersenneTwisterRandomSource, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GKMersenneTwisterRandomSource.prototype, 'init', {
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

module.exports = GKMersenneTwisterRandomSource;