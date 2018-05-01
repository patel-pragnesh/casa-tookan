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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLHeap.h
 * @class
 */
function MTLHeapDescriptor (pointer) {
	if (!(this instanceof MTLHeapDescriptor)) {
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
			class: 'MTLHeapDescriptor',
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
MTLHeapDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MTLHeapDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MTLHeapDescriptor, NSObject);

Object.defineProperty(MTLHeapDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MTLHeapDescriptor, 'className', {
	value: 'MTLHeapDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLHeapDescriptor.prototype, 'className', {
	value: 'MTLHeapDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLHeapDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MTLHeapDescriptor, 'toString', {
	value: function () {
		return '[class MTLHeapDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MTLHeapDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MTLHeapDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MTLHeapDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MTLHeapDescriptor.prototype, {
		size: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'size');
			},
		
			set: function (_size) {
				if (!$init) { $initialize(); }
				this.$private.size = _size;
				$dispatch(this.$native, 'setSize:', _size);
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

module.exports = MTLHeapDescriptor;
