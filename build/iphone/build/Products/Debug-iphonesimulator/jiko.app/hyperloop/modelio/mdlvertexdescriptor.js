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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLVertexDescriptor.h
 * @class
 */
function MDLVertexDescriptor (pointer) {
	if (!(this instanceof MDLVertexDescriptor)) {
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
			class: 'MDLVertexDescriptor',
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
MDLVertexDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MDLVertexDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLVertexDescriptor, NSObject);

Object.defineProperty(MDLVertexDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLVertexDescriptor, 'className', {
	value: 'MDLVertexDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLVertexDescriptor.prototype, 'className', {
	value: 'MDLVertexDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLVertexDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLVertexDescriptor, 'toString', {
	value: function () {
		return '[class MDLVertexDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSMutableArray = require('/hyperloop/foundation/nsmutablearray');

	$class = Hyperloop.createProxy({
		class: 'MDLVertexDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLVertexDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLVertexDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MDLVertexDescriptor.prototype, 'reset', {
		value: function () {
			var result = $dispatch(this.$native, 'reset', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MDLVertexDescriptor.prototype, {
		attributes: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSMutableArray($dispatch(this.$native, 'attributes'));
			},
		
			set: function (_attributes) {
				if (!$init) { $initialize(); }
				this.$private.attributes = _attributes;
				$dispatch(this.$native, 'setAttributes:', _attributes);
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

module.exports = MDLVertexDescriptor;
