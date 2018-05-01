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
 * IdentityLookup//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/IdentityLookup.framework/Headers/ILNetworkResponse.h
 * @class
 */
function ILNetworkResponse (pointer) {
	if (!(this instanceof ILNetworkResponse)) {
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
			class: 'ILNetworkResponse',
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
ILNetworkResponse.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: ILNetworkResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(ILNetworkResponse, NSObject);

Object.defineProperty(ILNetworkResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(ILNetworkResponse, 'className', {
	value: 'ILNetworkResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(ILNetworkResponse.prototype, 'className', {
	value: 'ILNetworkResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(ILNetworkResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(ILNetworkResponse, 'toString', {
	value: function () {
		return '[class ILNetworkResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'ILNetworkResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(ILNetworkResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(ILNetworkResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(ILNetworkResponse.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(ILNetworkResponse.prototype, {
		data: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'data'));
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

module.exports = ILNetworkResponse;
