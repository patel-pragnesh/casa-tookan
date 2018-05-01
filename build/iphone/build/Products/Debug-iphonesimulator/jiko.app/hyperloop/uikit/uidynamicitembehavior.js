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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIDynamicItemBehavior.h
 * @class
 */
function UIDynamicItemBehavior (pointer) {
	if (!(this instanceof UIDynamicItemBehavior)) {
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
			class: 'UIDynamicItemBehavior',
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
UIDynamicItemBehavior.prototype = Object.create(UIDynamicBehavior.prototype, {
	constructor: {
		value: UIDynamicItemBehavior,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIDynamicItemBehavior, UIDynamicBehavior);

Object.defineProperty(UIDynamicItemBehavior, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIDynamicItemBehavior, 'className', {
	value: 'UIDynamicItemBehavior',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIDynamicItemBehavior.prototype, 'className', {
	value: 'UIDynamicItemBehavior',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIDynamicItemBehavior.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIDynamicItemBehavior, 'toString', {
	value: function () {
		return '[class UIDynamicItemBehavior]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIDynamicItemBehavior',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIDynamicItemBehavior, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIDynamicItemBehavior, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIDynamicItemBehavior.prototype, {
		density: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'density');
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

module.exports = UIDynamicItemBehavior;
