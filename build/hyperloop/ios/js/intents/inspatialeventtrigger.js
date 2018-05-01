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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INSpatialEventTrigger.h
 * @class
 */
function INSpatialEventTrigger (pointer) {
	if (!(this instanceof INSpatialEventTrigger)) {
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
			class: 'INSpatialEventTrigger',
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
INSpatialEventTrigger.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INSpatialEventTrigger,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INSpatialEventTrigger, NSObject);

Object.defineProperty(INSpatialEventTrigger, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INSpatialEventTrigger, 'className', {
	value: 'INSpatialEventTrigger',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSpatialEventTrigger.prototype, 'className', {
	value: 'INSpatialEventTrigger',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSpatialEventTrigger.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INSpatialEventTrigger, 'toString', {
	value: function () {
		return '[class INSpatialEventTrigger]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'INSpatialEventTrigger',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INSpatialEventTrigger, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INSpatialEventTrigger, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INSpatialEventTrigger.prototype, {
		event: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'event');
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

module.exports = INSpatialEventTrigger;
