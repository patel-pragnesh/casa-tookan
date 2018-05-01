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
 * CoreLocation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreLocation.framework/Headers/CLLocation.h
 * @class
 */
function CLLocation (pointer) {
	if (!(this instanceof CLLocation)) {
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
			class: 'CLLocation',
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
CLLocation.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CLLocation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CLLocation, NSObject);

Object.defineProperty(CLLocation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CLLocation, 'className', {
	value: 'CLLocation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CLLocation.prototype, 'className', {
	value: 'CLLocation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CLLocation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CLLocation, 'toString', {
	value: function () {
		return '[class CLLocation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CLFloor = require('/hyperloop/corelocation/clfloor');
	$imports.NSDate = require('/hyperloop/foundation/nsdate');

	$class = Hyperloop.createProxy({
		class: 'CLLocation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CLLocation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CLLocation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CLLocation.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(CLLocation.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(CLLocation.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(CLLocation.prototype, {
		floor: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CLFloor($dispatch(this.$native, 'floor'));
			},
		
			enumerable: false
		},
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		speed: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'speed');
			},
		
			enumerable: false
		},
		timestamp: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDate($dispatch(this.$native, 'timestamp'));
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

module.exports = CLLocation;
