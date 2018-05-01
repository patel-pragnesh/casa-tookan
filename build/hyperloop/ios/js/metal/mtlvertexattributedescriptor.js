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
function MTLVertexAttributeDescriptor (pointer) {
	if (!(this instanceof MTLVertexAttributeDescriptor)) {
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
			class: 'MTLVertexAttributeDescriptor',
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
MTLVertexAttributeDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MTLVertexAttributeDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MTLVertexAttributeDescriptor, NSObject);

Object.defineProperty(MTLVertexAttributeDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MTLVertexAttributeDescriptor, 'className', {
	value: 'MTLVertexAttributeDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLVertexAttributeDescriptor.prototype, 'className', {
	value: 'MTLVertexAttributeDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLVertexAttributeDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MTLVertexAttributeDescriptor, 'toString', {
	value: function () {
		return '[class MTLVertexAttributeDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MTLVertexAttributeDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MTLVertexAttributeDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MTLVertexAttributeDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MTLVertexAttributeDescriptor.prototype, {
		format: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'format');
			},
		
			set: function (_format) {
				if (!$init) { $initialize(); }
				this.$private.format = _format;
				$dispatch(this.$native, 'setFormat:', _format);
			},
			enumerable: false
		},
		offset: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'offset');
			},
		
			set: function (_offset) {
				if (!$init) { $initialize(); }
				this.$private.offset = _offset;
				$dispatch(this.$native, 'setOffset:', _offset);
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

module.exports = MTLVertexAttributeDescriptor;
