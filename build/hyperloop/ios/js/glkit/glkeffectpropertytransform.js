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


var GLKEffectProperty = require('/hyperloop/glkit/glkeffectproperty');


/**
 * GLKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GLKit.framework/Headers/GLKEffectPropertyTransform.h
 * @class
 */
function GLKEffectPropertyTransform (pointer) {
	if (!(this instanceof GLKEffectPropertyTransform)) {
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
			class: 'GLKEffectPropertyTransform',
			alloc: true,
			init: 'init'
		});
	}
	GLKEffectProperty.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
GLKEffectPropertyTransform.prototype = Object.create(GLKEffectProperty.prototype, {
	constructor: {
		value: GLKEffectPropertyTransform,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GLKEffectPropertyTransform, GLKEffectProperty);

Object.defineProperty(GLKEffectPropertyTransform, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GLKEffectPropertyTransform, 'className', {
	value: 'GLKEffectPropertyTransform',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKEffectPropertyTransform.prototype, 'className', {
	value: 'GLKEffectPropertyTransform',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKEffectPropertyTransform.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GLKEffectPropertyTransform, 'toString', {
	value: function () {
		return '[class GLKEffectPropertyTransform]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GLKEffectPropertyTransform',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GLKEffectPropertyTransform, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GLKEffectPropertyTransform, '$private', {
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

module.exports = GLKEffectPropertyTransform;
