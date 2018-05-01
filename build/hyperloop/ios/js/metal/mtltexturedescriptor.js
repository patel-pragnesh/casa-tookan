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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLTexture.h
 * @class
 */
function MTLTextureDescriptor (pointer) {
	if (!(this instanceof MTLTextureDescriptor)) {
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
			class: 'MTLTextureDescriptor',
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
MTLTextureDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MTLTextureDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MTLTextureDescriptor, NSObject);

Object.defineProperty(MTLTextureDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MTLTextureDescriptor, 'className', {
	value: 'MTLTextureDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLTextureDescriptor.prototype, 'className', {
	value: 'MTLTextureDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLTextureDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MTLTextureDescriptor, 'toString', {
	value: function () {
		return '[class MTLTextureDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MTLTextureDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MTLTextureDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MTLTextureDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MTLTextureDescriptor.prototype, {
		depth: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'depth');
			},
		
			set: function (_depth) {
				if (!$init) { $initialize(); }
				this.$private.depth = _depth;
				$dispatch(this.$native, 'setDepth:', _depth);
			},
			enumerable: false
		},
		height: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'height');
			},
		
			set: function (_height) {
				if (!$init) { $initialize(); }
				this.$private.height = _height;
				$dispatch(this.$native, 'setHeight:', _height);
			},
			enumerable: false
		},
		width: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'width');
			},
		
			set: function (_width) {
				if (!$init) { $initialize(); }
				this.$private.width = _width;
				$dispatch(this.$native, 'setWidth:', _width);
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

module.exports = MTLTextureDescriptor;
