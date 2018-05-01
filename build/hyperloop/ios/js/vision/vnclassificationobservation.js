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
function VNClassificationObservation (pointer) {
	if (!(this instanceof VNClassificationObservation)) {
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
			class: 'VNClassificationObservation',
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
VNClassificationObservation.prototype = Object.create(VNObservation.prototype, {
	constructor: {
		value: VNClassificationObservation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNClassificationObservation, VNObservation);

Object.defineProperty(VNClassificationObservation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNClassificationObservation, 'className', {
	value: 'VNClassificationObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNClassificationObservation.prototype, 'className', {
	value: 'VNClassificationObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNClassificationObservation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNClassificationObservation, 'toString', {
	value: function () {
		return '[class VNClassificationObservation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'VNClassificationObservation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNClassificationObservation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNClassificationObservation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(VNClassificationObservation.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
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

module.exports = VNClassificationObservation;
