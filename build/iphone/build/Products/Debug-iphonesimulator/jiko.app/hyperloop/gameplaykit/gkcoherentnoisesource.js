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


var GKNoiseSource = require('/hyperloop/gameplaykit/gknoisesource');


/**
 * GameplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameplayKit.framework/Headers/GKNoiseSource.h
 * @class
 */
function GKCoherentNoiseSource (pointer) {
	if (!(this instanceof GKCoherentNoiseSource)) {
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
			class: 'GKCoherentNoiseSource',
			alloc: true,
			init: 'init'
		});
	}
	GKNoiseSource.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
GKCoherentNoiseSource.prototype = Object.create(GKNoiseSource.prototype, {
	constructor: {
		value: GKCoherentNoiseSource,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKCoherentNoiseSource, GKNoiseSource);

Object.defineProperty(GKCoherentNoiseSource, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKCoherentNoiseSource, 'className', {
	value: 'GKCoherentNoiseSource',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKCoherentNoiseSource.prototype, 'className', {
	value: 'GKCoherentNoiseSource',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKCoherentNoiseSource.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKCoherentNoiseSource, 'toString', {
	value: function () {
		return '[class GKCoherentNoiseSource]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GKCoherentNoiseSource',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKCoherentNoiseSource, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKCoherentNoiseSource, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = GKCoherentNoiseSource;
