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
 * GameController//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCControllerDirectionPad.h
 * @class
 */
function GCControllerDirectionPad (pointer) {
	if (!(this instanceof GCControllerDirectionPad)) {
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
			class: 'GCControllerDirectionPad',
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
GCControllerDirectionPad.prototype = Object.create(GCControllerElement.prototype, {
	constructor: {
		value: GCControllerDirectionPad,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GCControllerDirectionPad, GCControllerElement);

Object.defineProperty(GCControllerDirectionPad, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GCControllerDirectionPad, 'className', {
	value: 'GCControllerDirectionPad',
	enumerable: false,
	writable: true
});

Object.defineProperty(GCControllerDirectionPad.prototype, 'className', {
	value: 'GCControllerDirectionPad',
	enumerable: false,
	writable: true
});

Object.defineProperty(GCControllerDirectionPad.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GCControllerDirectionPad, 'toString', {
	value: function () {
		return '[class GCControllerDirectionPad]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.GCControllerButtonInput = require('/hyperloop/gamecontroller/gccontrollerbuttoninput');

	$class = Hyperloop.createProxy({
		class: 'GCControllerDirectionPad',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GCControllerDirectionPad, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GCControllerDirectionPad, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GCControllerDirectionPad.prototype, {
		left: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.GCControllerButtonInput($dispatch(this.$native, 'left'));
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

module.exports = GCControllerDirectionPad;
