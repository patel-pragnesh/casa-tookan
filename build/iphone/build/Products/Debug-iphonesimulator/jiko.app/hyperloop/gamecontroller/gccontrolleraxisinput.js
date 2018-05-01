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


var GCControllerElement = require('/hyperloop/gamecontroller/gccontrollerelement');


/**
 * GameController//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCControllerAxisInput.h
 * @class
 */
function GCControllerAxisInput (pointer) {
	if (!(this instanceof GCControllerAxisInput)) {
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
			class: 'GCControllerAxisInput',
			alloc: true,
			init: 'init'
		});
	}
	GCControllerElement.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
GCControllerAxisInput.prototype = Object.create(GCControllerElement.prototype, {
	constructor: {
		value: GCControllerAxisInput,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GCControllerAxisInput, GCControllerElement);

Object.defineProperty(GCControllerAxisInput, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GCControllerAxisInput, 'className', {
	value: 'GCControllerAxisInput',
	enumerable: false,
	writable: true
});

Object.defineProperty(GCControllerAxisInput.prototype, 'className', {
	value: 'GCControllerAxisInput',
	enumerable: false,
	writable: true
});

Object.defineProperty(GCControllerAxisInput.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GCControllerAxisInput, 'toString', {
	value: function () {
		return '[class GCControllerAxisInput]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GCControllerAxisInput',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GCControllerAxisInput, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GCControllerAxisInput, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GCControllerAxisInput.prototype, {
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'value');
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

module.exports = GCControllerAxisInput;
