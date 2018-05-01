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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLMaterial.h
 * @class
 */
function MDLTextureSampler (pointer) {
	if (!(this instanceof MDLTextureSampler)) {
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
			class: 'MDLTextureSampler',
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
MDLTextureSampler.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MDLTextureSampler,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLTextureSampler, NSObject);

Object.defineProperty(MDLTextureSampler, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLTextureSampler, 'className', {
	value: 'MDLTextureSampler',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLTextureSampler.prototype, 'className', {
	value: 'MDLTextureSampler',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLTextureSampler.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLTextureSampler, 'toString', {
	value: function () {
		return '[class MDLTextureSampler]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MDLTransform = require('/hyperloop/modelio/mdltransform');

	$class = Hyperloop.createProxy({
		class: 'MDLTextureSampler',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLTextureSampler, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLTextureSampler, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MDLTextureSampler.prototype, {
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MDLTransform($dispatch(this.$native, 'transform'));
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

module.exports = MDLTextureSampler;
