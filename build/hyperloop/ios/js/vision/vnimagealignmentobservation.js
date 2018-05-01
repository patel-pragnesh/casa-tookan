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


var VNObservation = require('/hyperloop/vision/vnobservation');


/**
 * Vision//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Vision.framework/Headers/VNObservation.h
 * @class
 */
function VNImageAlignmentObservation (pointer) {
	if (!(this instanceof VNImageAlignmentObservation)) {
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
			class: 'VNImageAlignmentObservation',
			alloc: true,
			init: 'init'
		});
	}
	VNObservation.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
VNImageAlignmentObservation.prototype = Object.create(VNObservation.prototype, {
	constructor: {
		value: VNImageAlignmentObservation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNImageAlignmentObservation, VNObservation);

Object.defineProperty(VNImageAlignmentObservation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNImageAlignmentObservation, 'className', {
	value: 'VNImageAlignmentObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNImageAlignmentObservation.prototype, 'className', {
	value: 'VNImageAlignmentObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNImageAlignmentObservation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNImageAlignmentObservation, 'toString', {
	value: function () {
		return '[class VNImageAlignmentObservation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'VNImageAlignmentObservation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNImageAlignmentObservation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNImageAlignmentObservation, '$private', {
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

module.exports = VNImageAlignmentObservation;
