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


var VNDetectedObjectObservation = require('/hyperloop/vision/vndetectedobjectobservation');


/**
 * Vision//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Vision.framework/Headers/VNObservation.h
 * @class
 */
function VNRectangleObservation (pointer) {
	if (!(this instanceof VNRectangleObservation)) {
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
			class: 'VNRectangleObservation',
			alloc: true,
			init: 'init'
		});
	}
	VNDetectedObjectObservation.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
VNRectangleObservation.prototype = Object.create(VNDetectedObjectObservation.prototype, {
	constructor: {
		value: VNRectangleObservation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNRectangleObservation, VNDetectedObjectObservation);

Object.defineProperty(VNRectangleObservation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNRectangleObservation, 'className', {
	value: 'VNRectangleObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNRectangleObservation.prototype, 'className', {
	value: 'VNRectangleObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNRectangleObservation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNRectangleObservation, 'toString', {
	value: function () {
		return '[class VNRectangleObservation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'VNRectangleObservation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNRectangleObservation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNRectangleObservation, '$private', {
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

module.exports = VNRectangleObservation;
