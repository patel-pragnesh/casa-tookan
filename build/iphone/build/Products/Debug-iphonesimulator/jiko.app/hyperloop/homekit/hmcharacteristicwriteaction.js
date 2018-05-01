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


var HMAction = require('/hyperloop/homekit/hmaction');


/**
 * HomeKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HomeKit.framework/Headers/HMCharacteristicWriteAction.h
 * @class
 */
function HMCharacteristicWriteAction (pointer) {
	if (!(this instanceof HMCharacteristicWriteAction)) {
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
			class: 'HMCharacteristicWriteAction',
			alloc: true,
			init: 'init'
		});
	}
	HMAction.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HMCharacteristicWriteAction.prototype = Object.create(HMAction.prototype, {
	constructor: {
		value: HMCharacteristicWriteAction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HMCharacteristicWriteAction, HMAction);

Object.defineProperty(HMCharacteristicWriteAction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HMCharacteristicWriteAction, 'className', {
	value: 'HMCharacteristicWriteAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMCharacteristicWriteAction.prototype, 'className', {
	value: 'HMCharacteristicWriteAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(HMCharacteristicWriteAction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HMCharacteristicWriteAction, 'toString', {
	value: function () {
		return '[class HMCharacteristicWriteAction]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'HMCharacteristicWriteAction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HMCharacteristicWriteAction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HMCharacteristicWriteAction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(HMCharacteristicWriteAction.prototype, 'init', {
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

module.exports = HMCharacteristicWriteAction;
