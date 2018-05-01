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
 * GLKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GLKit.framework/Headers/GLKEffectPropertyLight.h
 * @class
 */
function GLKEffectPropertyLight (pointer) {
	if (!(this instanceof GLKEffectPropertyLight)) {
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
			class: 'GLKEffectPropertyLight',
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
GLKEffectPropertyLight.prototype = Object.create(GLKEffectProperty.prototype, {
	constructor: {
		value: GLKEffectPropertyLight,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GLKEffectPropertyLight, GLKEffectProperty);

Object.defineProperty(GLKEffectPropertyLight, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GLKEffectPropertyLight, 'className', {
	value: 'GLKEffectPropertyLight',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKEffectPropertyLight.prototype, 'className', {
	value: 'GLKEffectPropertyLight',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKEffectPropertyLight.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GLKEffectPropertyLight, 'toString', {
	value: function () {
		return '[class GLKEffectPropertyLight]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.GLKEffectPropertyTransform = require('/hyperloop/glkit/glkeffectpropertytransform');

	$class = Hyperloop.createProxy({
		class: 'GLKEffectPropertyLight',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GLKEffectPropertyLight, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GLKEffectPropertyLight, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GLKEffectPropertyLight.prototype, {
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
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.GLKEffectPropertyTransform($dispatch(this.$native, 'transform'));
			},
		
			set: function (_transform) {
				if (!$init) { $initialize(); }
				this.$private.transform = _transform;
				$dispatch(this.$native, 'setTransform:', _transform);
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

module.exports = GLKEffectPropertyLight;
