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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INCurrencyAmountResolutionResult.h
 * @class
 */
function INCurrencyAmountResolutionResult (pointer) {
	if (!(this instanceof INCurrencyAmountResolutionResult)) {
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
			class: 'INCurrencyAmountResolutionResult',
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
INCurrencyAmountResolutionResult.prototype = Object.create(INIntentResolutionResult.prototype, {
	constructor: {
		value: INCurrencyAmountResolutionResult,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INCurrencyAmountResolutionResult, INIntentResolutionResult);

Object.defineProperty(INCurrencyAmountResolutionResult, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INCurrencyAmountResolutionResult, 'className', {
	value: 'INCurrencyAmountResolutionResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(INCurrencyAmountResolutionResult.prototype, 'className', {
	value: 'INCurrencyAmountResolutionResult',
	enumerable: false,
	writable: true
});

Object.defineProperty(INCurrencyAmountResolutionResult.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INCurrencyAmountResolutionResult, 'toString', {
	value: function () {
		return '[class INCurrencyAmountResolutionResult]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INCurrencyAmountResolutionResult',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INCurrencyAmountResolutionResult, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INCurrencyAmountResolutionResult, '$private', {
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

module.exports = INCurrencyAmountResolutionResult;
