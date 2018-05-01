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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIFieldBehavior.h
 * @class
 */
function UIFieldBehavior (pointer) {
	if (!(this instanceof UIFieldBehavior)) {
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
			class: 'UIFieldBehavior',
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
UIFieldBehavior.prototype = Object.create(UIDynamicBehavior.prototype, {
	constructor: {
		value: UIFieldBehavior,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIFieldBehavior, UIDynamicBehavior);

Object.defineProperty(UIFieldBehavior, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIFieldBehavior, 'className', {
	value: 'UIFieldBehavior',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIFieldBehavior.prototype, 'className', {
	value: 'UIFieldBehavior',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIFieldBehavior.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIFieldBehavior, 'toString', {
	value: function () {
		return '[class UIFieldBehavior]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGVector = require('/hyperloop/coregraphics/cgvector');

	$class = Hyperloop.createProxy({
		class: 'UIFieldBehavior',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIFieldBehavior, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIFieldBehavior, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIFieldBehavior.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(UIFieldBehavior.prototype, {
		direction: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGVector($dispatch(this.$native, 'direction'));
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

module.exports = UIFieldBehavior;
