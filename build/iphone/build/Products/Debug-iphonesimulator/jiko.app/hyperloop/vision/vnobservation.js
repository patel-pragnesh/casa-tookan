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
 * Vision//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Vision.framework/Headers/VNObservation.h
 * @class
 */
function VNObservation (pointer) {
	if (!(this instanceof VNObservation)) {
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
			class: 'VNObservation',
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
VNObservation.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: VNObservation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VNObservation, NSObject);

Object.defineProperty(VNObservation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VNObservation, 'className', {
	value: 'VNObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNObservation.prototype, 'className', {
	value: 'VNObservation',
	enumerable: false,
	writable: true
});

Object.defineProperty(VNObservation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VNObservation, 'toString', {
	value: function () {
		return '[class VNObservation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSUUID = require('/hyperloop/foundation/nsuuid');

	$class = Hyperloop.createProxy({
		class: 'VNObservation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VNObservation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VNObservation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(VNObservation.prototype, {
		uuid: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSUUID($dispatch(this.$native, 'uuid'));
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

module.exports = VNObservation;
