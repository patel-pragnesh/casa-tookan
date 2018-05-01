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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLComputePipeline.h
 * @class
 */
function MTLComputePipelineDescriptor (pointer) {
	if (!(this instanceof MTLComputePipelineDescriptor)) {
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
			class: 'MTLComputePipelineDescriptor',
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
MTLComputePipelineDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MTLComputePipelineDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MTLComputePipelineDescriptor, NSObject);

Object.defineProperty(MTLComputePipelineDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MTLComputePipelineDescriptor, 'className', {
	value: 'MTLComputePipelineDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLComputePipelineDescriptor.prototype, 'className', {
	value: 'MTLComputePipelineDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLComputePipelineDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MTLComputePipelineDescriptor, 'toString', {
	value: function () {
		return '[class MTLComputePipelineDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MTLPipelineBufferDescriptorArray = require('/hyperloop/metal/mtlpipelinebufferdescriptorarray');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'MTLComputePipelineDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MTLComputePipelineDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MTLComputePipelineDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MTLComputePipelineDescriptor.prototype, 'reset', {
		value: function () {
			var result = $dispatch(this.$native, 'reset', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MTLComputePipelineDescriptor.prototype, 'setLabel', {
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
	Object.defineProperties(MTLComputePipelineDescriptor.prototype, {
		buffers: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MTLPipelineBufferDescriptorArray($dispatch(this.$native, 'buffers'));
			},
		
			enumerable: false
		},
		label: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'label'));
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

module.exports = MTLComputePipelineDescriptor;
