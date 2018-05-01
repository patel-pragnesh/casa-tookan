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
 * GLKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GLKit.framework/Headers/GLKBaseEffect.h
 * @class
 */
function GLKBaseEffect (pointer) {
	if (!(this instanceof GLKBaseEffect)) {
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
			class: 'GLKBaseEffect',
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
GLKBaseEffect.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GLKBaseEffect,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GLKBaseEffect, NSObject);

Object.defineProperty(GLKBaseEffect, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GLKBaseEffect, 'className', {
	value: 'GLKBaseEffect',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKBaseEffect.prototype, 'className', {
	value: 'GLKBaseEffect',
	enumerable: false,
	writable: true
});

Object.defineProperty(GLKBaseEffect.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GLKBaseEffect, 'toString', {
	value: function () {
		return '[class GLKBaseEffect]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.GLKEffectPropertyTransform = require('/hyperloop/glkit/glkeffectpropertytransform');

	$class = Hyperloop.createProxy({
		class: 'GLKBaseEffect',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GLKBaseEffect, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GLKBaseEffect, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GLKBaseEffect.prototype, 'setLabel', {
		value: function (_label) {
			this.$private.setLabel = this.$private.setLabel || [];
			this.$private.setLabel.push(_label);
			var result = $dispatch(this.$native, 'setLabel:', [_label], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(GLKBaseEffect.prototype, {
		label: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'label'));
			},
		
			enumerable: false
		},
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.GLKEffectPropertyTransform($dispatch(this.$native, 'transform'));
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

module.exports = GLKBaseEffect;
