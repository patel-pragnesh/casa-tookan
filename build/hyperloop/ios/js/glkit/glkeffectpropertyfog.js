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
 * GLKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GLKit.framework/Headers/GLKEffectPropertyFog.h
 * @class
 */
function GLKEffectPropertyFog (pointer) {
	if (!(this instanceof GLKEffectPropertyFog)) {
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
			class: 'GLKEffectPropertyFog',
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
GLKEffectPropertyFog.prototype = Object.create(GLKEffectProperty.prototype, {
	constructor: {
		value: GLKEffectPropertyFog,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GLKEffectPropertyFog, GLKEffectProperty);

Object.defineProperty(GLKEffectPropertyFog, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GLKEffectPropertyFog, 'className', {
	value: 'GLKEffectPropertyFog',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKEffectPropertyFog.prototype, 'className', {
	value: 'GLKEffectPropertyFog',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKEffectPropertyFog.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GLKEffectPropertyFog, 'toString', {
	value: function () {
		return '[class GLKEffectPropertyFog]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GLKEffectPropertyFog',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GLKEffectPropertyFog, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GLKEffectPropertyFog, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GLKEffectPropertyFog.prototype, {
		color: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'color');
			},
		
			set: function (_color) {
				if (!$init) { $initialize(); }
				this.$private.color = _color;
				$dispatch(this.$native, 'setColor:', _color);
			},
			enumerable: false
		},
		density: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'density');
			},
		
			enumerable: false
		},
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
		end: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'end');
			},
		
			set: function (_end) {
				if (!$init) { $initialize(); }
				this.$private.end = _end;
				$dispatch(this.$native, 'setEnd:', _end);
			},
			enumerable: false
		},
		mode: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'mode');
			},
		
			set: function (_mode) {
				if (!$init) { $initialize(); }
				this.$private.mode = _mode;
				$dispatch(this.$native, 'setMode:', _mode);
			},
			enumerable: false
		},
		start: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'start');
			},
		
			set: function (_start) {
				if (!$init) { $initialize(); }
				this.$private.start = _start;
				$dispatch(this.$native, 'setStart:', _start);
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

module.exports = GLKEffectPropertyFog;
