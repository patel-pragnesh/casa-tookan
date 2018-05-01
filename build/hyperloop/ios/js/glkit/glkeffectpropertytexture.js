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
 * GLKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GLKit.framework/Headers/GLKEffectPropertyTexture.h
 * @class
 */
function GLKEffectPropertyTexture (pointer) {
	if (!(this instanceof GLKEffectPropertyTexture)) {
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
			class: 'GLKEffectPropertyTexture',
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
GLKEffectPropertyTexture.prototype = Object.create(GLKEffectProperty.prototype, {
	constructor: {
		value: GLKEffectPropertyTexture,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GLKEffectPropertyTexture, GLKEffectProperty);

Object.defineProperty(GLKEffectPropertyTexture, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GLKEffectPropertyTexture, 'className', {
	value: 'GLKEffectPropertyTexture',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKEffectPropertyTexture.prototype, 'className', {
	value: 'GLKEffectPropertyTexture',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKEffectPropertyTexture.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GLKEffectPropertyTexture, 'toString', {
	value: function () {
		return '[class GLKEffectPropertyTexture]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GLKEffectPropertyTexture',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GLKEffectPropertyTexture, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GLKEffectPropertyTexture, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GLKEffectPropertyTexture.prototype, {
		enabled: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'enabled');
			},
		
			set: function (_enabled) {
				if (!$init) { $initialize(); }
				this.$private.enabled = _enabled;
				$dispatch(this.$native, 'setEnabled:', _enabled);
			},
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'name');
			},
		
			set: function (_name) {
				if (!$init) { $initialize(); }
				this.$private.name = _name;
				$dispatch(this.$native, 'setName:', _name);
			},
			enumerable: false
		},
		target: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'target');
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

module.exports = GLKEffectPropertyTexture;
