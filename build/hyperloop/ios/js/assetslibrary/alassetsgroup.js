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
 * AssetsLibrary//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AssetsLibrary.framework/Headers/ALAssetsGroup.h
 * @class
 */
function ALAssetsGroup (pointer) {
	if (!(this instanceof ALAssetsGroup)) {
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
			class: 'ALAssetsGroup',
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
ALAssetsGroup.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: ALAssetsGroup,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(ALAssetsGroup, NSObject);

Object.defineProperty(ALAssetsGroup, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(ALAssetsGroup, 'className', {
	value: 'ALAssetsGroup',
	enumerable: false,
	writable: true
});

Object.defineProperty(ALAssetsGroup.prototype, 'className', {
	value: 'ALAssetsGroup',
	enumerable: false,
	writable: true
});

Object.defineProperty(ALAssetsGroup.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(ALAssetsGroup, 'toString', {
	value: function () {
		return '[class ALAssetsGroup]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'ALAssetsGroup',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(ALAssetsGroup, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(ALAssetsGroup, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(ALAssetsGroup.prototype, {
		editable: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'editable');
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

module.exports = ALAssetsGroup;
