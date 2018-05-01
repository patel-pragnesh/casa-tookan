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
 * MapKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKDirectionsRequest.h
 * @class
 */
function MKDirectionsRequest (pointer) {
	if (!(this instanceof MKDirectionsRequest)) {
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
			class: 'MKDirectionsRequest',
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
MKDirectionsRequest.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MKDirectionsRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MKDirectionsRequest, NSObject);

Object.defineProperty(MKDirectionsRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MKDirectionsRequest, 'className', {
	value: 'MKDirectionsRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKDirectionsRequest.prototype, 'className', {
	value: 'MKDirectionsRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKDirectionsRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MKDirectionsRequest, 'toString', {
	value: function () {
		return '[class MKDirectionsRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MKMapItem = require('/hyperloop/mapkit/mkmapitem');

	$class = Hyperloop.createProxy({
		class: 'MKDirectionsRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MKDirectionsRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MKDirectionsRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MKDirectionsRequest.prototype, {
		destination: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MKMapItem($dispatch(this.$native, 'destination'));
			},
		
			set: function (_destination) {
				if (!$init) { $initialize(); }
				this.$private.destination = _destination;
				$dispatch(this.$native, 'setDestination:', _destination);
			},
			enumerable: false
		},
		source: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MKMapItem($dispatch(this.$native, 'source'));
			},
		
			set: function (_source) {
				if (!$init) { $initialize(); }
				this.$private.source = _source;
				$dispatch(this.$native, 'setSource:', _source);
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

module.exports = MKDirectionsRequest;
