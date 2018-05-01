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
function GKARC4RandomSource (pointer) {
	if (!(this instanceof GKARC4RandomSource)) {
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
			class: 'GKARC4RandomSource',
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
GKARC4RandomSource.prototype = Object.create(GKRandomSource.prototype, {
	constructor: {
		value: GKARC4RandomSource,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKARC4RandomSource, GKRandomSource);

Object.defineProperty(GKARC4RandomSource, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKARC4RandomSource, 'className', {
	value: 'GKARC4RandomSource',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKARC4RandomSource.prototype, 'className', {
	value: 'GKARC4RandomSource',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKARC4RandomSource.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKARC4RandomSource, 'toString', {
	value: function () {
		return '[class GKARC4RandomSource]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GKARC4RandomSource',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKARC4RandomSource, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKARC4RandomSource, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GKARC4RandomSource.prototype, 'init', {
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

module.exports = GKARC4RandomSource;
