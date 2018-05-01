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
 * CoreLocation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreLocation.framework/Headers/CLLocationManager.h
 * @class
 */
function CLLocationManager (pointer) {
	if (!(this instanceof CLLocationManager)) {
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
			class: 'CLLocationManager',
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
CLLocationManager.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CLLocationManager,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CLLocationManager, NSObject);

Object.defineProperty(CLLocationManager, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CLLocationManager, 'className', {
	value: 'CLLocationManager',
	enumerable: false,
	writable: true
});

Object.defineProperty(CLLocationManager.prototype, 'className', {
	value: 'CLLocationManager',
	enumerable: false,
	writable: true
});

Object.defineProperty(CLLocationManager.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CLLocationManager, 'toString', {
	value: function () {
		return '[class CLLocationManager]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.CLLocation = require('/hyperloop/corelocation/cllocation');

	$class = Hyperloop.createProxy({
		class: 'CLLocationManager',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CLLocationManager, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CLLocationManager, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CLLocationManager.prototype, {
		activityType: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'activityType');
			},
		
			enumerable: false
		},
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		location: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CLLocation($dispatch(this.$native, 'location'));
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

module.exports = CLLocationManager;
