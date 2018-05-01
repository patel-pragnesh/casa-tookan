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
function MKDirectionsResponse (pointer) {
	if (!(this instanceof MKDirectionsResponse)) {
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
			class: 'MKDirectionsResponse',
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
MKDirectionsResponse.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MKDirectionsResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MKDirectionsResponse, NSObject);

Object.defineProperty(MKDirectionsResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MKDirectionsResponse, 'className', {
	value: 'MKDirectionsResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKDirectionsResponse.prototype, 'className', {
	value: 'MKDirectionsResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKDirectionsResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MKDirectionsResponse, 'toString', {
	value: function () {
		return '[class MKDirectionsResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MKMapItem = require('/hyperloop/mapkit/mkmapitem');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'MKDirectionsResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MKDirectionsResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MKDirectionsResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MKDirectionsResponse.prototype, {
		destination: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MKMapItem($dispatch(this.$native, 'destination'));
			},
		
			enumerable: false
		},
		routes: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'routes'));
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

module.exports = MKDirectionsResponse;
