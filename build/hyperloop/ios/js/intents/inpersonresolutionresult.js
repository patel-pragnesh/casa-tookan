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


var INIntentResolutionResult = require('/hyperloop/intents/inintentresolutionresult');


/**
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INPersonResolutionResult.h
 * @class
 */
function INPersonResolutionResult (pointer) {
	if (!(this instanceof INPersonResolutionResult)) {
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
			class: 'INPersonResolutionResult',
			alloc: true,
			init: 'init'
		});
	}
	INIntentResolutionResult.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
INPersonResolutionResult.prototype = Object.create(INIntentResolutionResult.prototype, {
	constructor: {
		value: INPersonResolutionResult,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INPersonResolutionResult, INIntentResolutionResult);

Object.defineProperty(INPersonResolutionResult, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INPersonResolutionResult, 'className', {
	value: 'INPersonResolutionResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(INPersonResolutionResult.prototype, 'className', {
	value: 'INPersonResolutionResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(INPersonResolutionResult.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INPersonResolutionResult, 'toString', {
	value: function () {
		return '[class INPersonResolutionResult]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INPersonResolutionResult',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INPersonResolutionResult, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INPersonResolutionResult, '$private', {
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

module.exports = INPersonResolutionResult;
