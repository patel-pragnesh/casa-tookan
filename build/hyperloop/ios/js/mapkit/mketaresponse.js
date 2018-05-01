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
 * MapKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKDirectionsResponse.h
 * @class
 */
function MKETAResponse (pointer) {
	if (!(this instanceof MKETAResponse)) {
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
			class: 'MKETAResponse',
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
MKETAResponse.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MKETAResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MKETAResponse, NSObject);

Object.defineProperty(MKETAResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MKETAResponse, 'className', {
	value: 'MKETAResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKETAResponse.prototype, 'className', {
	value: 'MKETAResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKETAResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MKETAResponse, 'toString', {
	value: function () {
		return '[class MKETAResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MKMapItem = require('/hyperloop/mapkit/mkmapitem');

	$class = Hyperloop.createProxy({
		class: 'MKETAResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MKETAResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MKETAResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MKETAResponse.prototype, {
		destination: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MKMapItem($dispatch(this.$native, 'destination'));
			},
		
			enumerable: false
		},
		source: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MKMapItem($dispatch(this.$native, 'source'));
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

module.exports = MKETAResponse;
