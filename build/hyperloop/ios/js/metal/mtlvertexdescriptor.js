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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLVertexDescriptor.h
 * @class
 */
function MTLVertexDescriptor (pointer) {
	if (!(this instanceof MTLVertexDescriptor)) {
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
			class: 'MTLVertexDescriptor',
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
MTLVertexDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MTLVertexDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MTLVertexDescriptor, NSObject);

Object.defineProperty(MTLVertexDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MTLVertexDescriptor, 'className', {
	value: 'MTLVertexDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLVertexDescriptor.prototype, 'className', {
	value: 'MTLVertexDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLVertexDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MTLVertexDescriptor, 'toString', {
	value: function () {
		return '[class MTLVertexDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MTLVertexAttributeDescriptorArray = require('/hyperloop/metal/mtlvertexattributedescriptorarray');

	$class = Hyperloop.createProxy({
		class: 'MTLVertexDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MTLVertexDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MTLVertexDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MTLVertexDescriptor.prototype, 'reset', {
		value: function () {
			var result = $dispatch(this.$native, 'reset', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MTLVertexDescriptor.prototype, {
		attributes: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MTLVertexAttributeDescriptorArray($dispatch(this.$native, 'attributes'));
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

module.exports = MTLVertexDescriptor;
