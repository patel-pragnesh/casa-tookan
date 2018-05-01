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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLStageInputOutputDescriptor.h
 * @class
 */
function MTLStageInputOutputDescriptor (pointer) {
	if (!(this instanceof MTLStageInputOutputDescriptor)) {
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
			class: 'MTLStageInputOutputDescriptor',
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
MTLStageInputOutputDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MTLStageInputOutputDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MTLStageInputOutputDescriptor, NSObject);

Object.defineProperty(MTLStageInputOutputDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MTLStageInputOutputDescriptor, 'className', {
	value: 'MTLStageInputOutputDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLStageInputOutputDescriptor.prototype, 'className', {
	value: 'MTLStageInputOutputDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLStageInputOutputDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MTLStageInputOutputDescriptor, 'toString', {
	value: function () {
		return '[class MTLStageInputOutputDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MTLAttributeDescriptorArray = require('/hyperloop/metal/mtlattributedescriptorarray');

	$class = Hyperloop.createProxy({
		class: 'MTLStageInputOutputDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MTLStageInputOutputDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MTLStageInputOutputDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MTLStageInputOutputDescriptor.prototype, 'reset', {
		value: function () {
			var result = $dispatch(this.$native, 'reset', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MTLStageInputOutputDescriptor.prototype, {
		attributes: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MTLAttributeDescriptorArray($dispatch(this.$native, 'attributes'));
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

module.exports = MTLStageInputOutputDescriptor;
