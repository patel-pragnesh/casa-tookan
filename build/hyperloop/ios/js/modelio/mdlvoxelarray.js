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


var MDLObject = require('/hyperloop/modelio/mdlobject');


/**
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLVoxelArray.h
 * @class
 */
function MDLVoxelArray (pointer) {
	if (!(this instanceof MDLVoxelArray)) {
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
			class: 'MDLVoxelArray',
			alloc: true,
			init: 'init'
		});
	}
	MDLObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MDLVoxelArray.prototype = Object.create(MDLObject.prototype, {
	constructor: {
		value: MDLVoxelArray,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLVoxelArray, MDLObject);

Object.defineProperty(MDLVoxelArray, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLVoxelArray, 'className', {
	value: 'MDLVoxelArray',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLVoxelArray.prototype, 'className', {
	value: 'MDLVoxelArray',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLVoxelArray.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLVoxelArray, 'toString', {
	value: function () {
		return '[class MDLVoxelArray]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MDLVoxelArray',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLVoxelArray, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLVoxelArray, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MDLVoxelArray.prototype, {
		count: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'count');
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

module.exports = MDLVoxelArray;
