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


var VNTargetedImageRequest = require('/hyperloop/vision/vntargetedimagerequest');


/**
 * Vision//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Vision.framework/Headers/VNImageRegistrationRequest.h
 * @class
 */
function VNImageRegistrationRequest (pointer) {
	if (!(this instanceof VNImageRegistrationRequest)) {
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
			class: 'VNImageRegistrationRequest',
			alloc: true,
			init: 'init'
		});
	}
	VNTargetedImageRequest.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
VNImageRegistrationRequest.prototype = Object.create(VNTargetedImageRequest.prototype, {
	constructor: {
		value: VNImageRegistrationRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNImageRegistrationRequest, VNTargetedImageRequest);

Object.defineProperty(VNImageRegistrationRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNImageRegistrationRequest, 'className', {
	value: 'VNImageRegistrationRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNImageRegistrationRequest.prototype, 'className', {
	value: 'VNImageRegistrationRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNImageRegistrationRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNImageRegistrationRequest, 'toString', {
	value: function () {
		return '[class VNImageRegistrationRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'VNImageRegistrationRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNImageRegistrationRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNImageRegistrationRequest, '$private', {
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

module.exports = VNImageRegistrationRequest;
