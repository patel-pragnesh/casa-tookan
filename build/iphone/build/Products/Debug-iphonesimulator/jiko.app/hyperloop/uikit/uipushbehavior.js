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


var UIDynamicBehavior = require('/hyperloop/uikit/uidynamicbehavior');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIPushBehavior.h
 * @class
 */
function UIPushBehavior (pointer) {
	if (!(this instanceof UIPushBehavior)) {
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
			class: 'UIPushBehavior',
			alloc: true,
			init: 'init'
		});
	}
	UIDynamicBehavior.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIPushBehavior.prototype = Object.create(UIDynamicBehavior.prototype, {
	constructor: {
		value: UIPushBehavior,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIPushBehavior, UIDynamicBehavior);

Object.defineProperty(UIPushBehavior, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIPushBehavior, 'className', {
	value: 'UIPushBehavior',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIPushBehavior.prototype, 'className', {
	value: 'UIPushBehavior',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIPushBehavior.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIPushBehavior, 'toString', {
	value: function () {
		return '[class UIPushBehavior]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIPushBehavior',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIPushBehavior, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIPushBehavior, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIPushBehavior.prototype, {
		mode: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'mode');
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

module.exports = UIPushBehavior;
