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


var VNRequest = require('/hyperloop/vision/vnrequest');


/**
 * Vision//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Vision.framework/Headers/VNRequest.h
 * @class
 */
function VNImageBasedRequest (pointer) {
	if (!(this instanceof VNImageBasedRequest)) {
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
			class: 'VNImageBasedRequest',
			alloc: true,
			init: 'init'
		});
	}
	VNRequest.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
VNImageBasedRequest.prototype = Object.create(VNRequest.prototype, {
	constructor: {
		value: VNImageBasedRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNImageBasedRequest, VNRequest);

Object.defineProperty(VNImageBasedRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNImageBasedRequest, 'className', {
	value: 'VNImageBasedRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNImageBasedRequest.prototype, 'className', {
	value: 'VNImageBasedRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNImageBasedRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNImageBasedRequest, 'toString', {
	value: function () {
		return '[class VNImageBasedRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'VNImageBasedRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNImageBasedRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNImageBasedRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = VNImageBasedRequest;
