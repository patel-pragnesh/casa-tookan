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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLDevice.h
 * @class
 */
function MTLArgumentDescriptor (pointer) {
	if (!(this instanceof MTLArgumentDescriptor)) {
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
			class: 'MTLArgumentDescriptor',
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
MTLArgumentDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MTLArgumentDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MTLArgumentDescriptor, NSObject);

Object.defineProperty(MTLArgumentDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MTLArgumentDescriptor, 'className', {
	value: 'MTLArgumentDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLArgumentDescriptor.prototype, 'className', {
	value: 'MTLArgumentDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MTLArgumentDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MTLArgumentDescriptor, 'toString', {
	value: function () {
		return '[class MTLArgumentDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MTLArgumentDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MTLArgumentDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MTLArgumentDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MTLArgumentDescriptor.prototype, {
		index: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'index');
			},
		
			set: function (_index) {
				if (!$init) { $initialize(); }
				this.$private.index = _index;
				$dispatch(this.$native, 'setIndex:', _index);
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

module.exports = MTLArgumentDescriptor;
