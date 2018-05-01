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
 * CoreSpotlight//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreSpotlight.framework/Headers/CSSearchQuery.h
 * @class
 */
function CSSearchQuery (pointer) {
	if (!(this instanceof CSSearchQuery)) {
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
			class: 'CSSearchQuery',
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
CSSearchQuery.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CSSearchQuery,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CSSearchQuery, NSObject);

Object.defineProperty(CSSearchQuery, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CSSearchQuery, 'className', {
	value: 'CSSearchQuery',
	enumerable: false,
	writable: true
});

Object.defineProperty(CSSearchQuery.prototype, 'className', {
	value: 'CSSearchQuery',
	enumerable: false,
	writable: true
});

Object.defineProperty(CSSearchQuery.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CSSearchQuery, 'toString', {
	value: function () {
		return '[class CSSearchQuery]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CSSearchQuery',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CSSearchQuery, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CSSearchQuery, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CSSearchQuery.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(CSSearchQuery.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(CSSearchQuery.prototype, 'start', {
		value: function () {
			var result = $dispatch(this.$native, 'start', null, true);
			return result;
		},
		enumerable: false,
		writable: true
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

module.exports = CSSearchQuery;
