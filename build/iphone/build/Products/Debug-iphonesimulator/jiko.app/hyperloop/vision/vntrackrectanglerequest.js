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


var VNTrackingRequest = require('/hyperloop/vision/vntrackingrequest');


/**
 * Vision//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Vision.framework/Headers/VNTrackRectangleRequest.h
 * @class
 */
function VNTrackRectangleRequest (pointer) {
	if (!(this instanceof VNTrackRectangleRequest)) {
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
			class: 'VNTrackRectangleRequest',
			alloc: true,
			init: 'init'
		});
	}
	VNTrackingRequest.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
VNTrackRectangleRequest.prototype = Object.create(VNTrackingRequest.prototype, {
	constructor: {
		value: VNTrackRectangleRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNTrackRectangleRequest, VNTrackingRequest);

Object.defineProperty(VNTrackRectangleRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNTrackRectangleRequest, 'className', {
	value: 'VNTrackRectangleRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNTrackRectangleRequest.prototype, 'className', {
	value: 'VNTrackRectangleRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNTrackRectangleRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNTrackRectangleRequest, 'toString', {
	value: function () {
		return '[class VNTrackRectangleRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'VNTrackRectangleRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNTrackRectangleRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNTrackRectangleRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(VNTrackRectangleRequest.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
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

module.exports = VNTrackRectangleRequest;
