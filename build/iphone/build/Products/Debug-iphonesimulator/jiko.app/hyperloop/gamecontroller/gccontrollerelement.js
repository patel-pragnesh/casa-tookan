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
 * GameController//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCControllerElement.h
 * @class
 */
function GCControllerElement (pointer) {
	if (!(this instanceof GCControllerElement)) {
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
			class: 'GCControllerElement',
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
GCControllerElement.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GCControllerElement,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GCControllerElement, NSObject);

Object.defineProperty(GCControllerElement, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GCControllerElement, 'className', {
	value: 'GCControllerElement',
	enumerable: false,
	writable: true
});

Object.defineProperty(GCControllerElement.prototype, 'className', {
	value: 'GCControllerElement',
	enumerable: false,
	writable: true
});

Object.defineProperty(GCControllerElement.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GCControllerElement, 'toString', {
	value: function () {
		return '[class GCControllerElement]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GCControllerElement',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GCControllerElement, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GCControllerElement, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GCControllerElement.prototype, {
		collection: {
			get: function () {
				if (!$init) { $initialize(); }
				return new this.constructor($dispatch(this.$native, 'collection'));
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

module.exports = GCControllerElement;
