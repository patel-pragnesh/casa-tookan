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


var VNImageBasedRequest = require('/hyperloop/vision/vnimagebasedrequest');


/**
 * Vision//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Vision.framework/Headers/VNCoreMLRequest.h
 * @class
 */
function VNCoreMLRequest (pointer) {
	if (!(this instanceof VNCoreMLRequest)) {
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
			class: 'VNCoreMLRequest',
			alloc: true,
			init: 'init'
		});
	}
	VNImageBasedRequest.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
VNCoreMLRequest.prototype = Object.create(VNImageBasedRequest.prototype, {
	constructor: {
		value: VNCoreMLRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNCoreMLRequest, VNImageBasedRequest);

Object.defineProperty(VNCoreMLRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNCoreMLRequest, 'className', {
	value: 'VNCoreMLRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNCoreMLRequest.prototype, 'className', {
	value: 'VNCoreMLRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNCoreMLRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNCoreMLRequest, 'toString', {
	value: function () {
		return '[class VNCoreMLRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.VNCoreMLModel = require('/hyperloop/vision/vncoremlmodel');

	$class = Hyperloop.createProxy({
		class: 'VNCoreMLRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNCoreMLRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNCoreMLRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(VNCoreMLRequest.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(VNCoreMLRequest.prototype, {
		model: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.VNCoreMLModel($dispatch(this.$native, 'model'));
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

module.exports = VNCoreMLRequest;
