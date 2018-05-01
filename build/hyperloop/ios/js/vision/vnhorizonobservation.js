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
function VNHorizonObservation (pointer) {
	if (!(this instanceof VNHorizonObservation)) {
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
			class: 'VNHorizonObservation',
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
VNHorizonObservation.prototype = Object.create(VNObservation.prototype, {
	constructor: {
		value: VNHorizonObservation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNHorizonObservation, VNObservation);

Object.defineProperty(VNHorizonObservation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNHorizonObservation, 'className', {
	value: 'VNHorizonObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNHorizonObservation.prototype, 'className', {
	value: 'VNHorizonObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNHorizonObservation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNHorizonObservation, 'toString', {
	value: function () {
		return '[class VNHorizonObservation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGAffineTransform = require('/hyperloop/coregraphics/cgaffinetransform');

	$class = Hyperloop.createProxy({
		class: 'VNHorizonObservation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNHorizonObservation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNHorizonObservation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(VNHorizonObservation.prototype, {
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGAffineTransform($dispatch(this.$native, 'transform'));
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

module.exports = VNHorizonObservation;
