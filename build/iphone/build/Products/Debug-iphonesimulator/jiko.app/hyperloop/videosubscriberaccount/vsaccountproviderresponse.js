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
 * VideoSubscriberAccount//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/VideoSubscriberAccount.framework/Headers/VSAccountProviderResponse.h
 * @class
 */
function VSAccountProviderResponse (pointer) {
	if (!(this instanceof VSAccountProviderResponse)) {
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
			class: 'VSAccountProviderResponse',
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
VSAccountProviderResponse.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: VSAccountProviderResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(VSAccountProviderResponse, NSObject);

Object.defineProperty(VSAccountProviderResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(VSAccountProviderResponse, 'className', {
	value: 'VSAccountProviderResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(VSAccountProviderResponse.prototype, 'className', {
	value: 'VSAccountProviderResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(VSAccountProviderResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(VSAccountProviderResponse, 'toString', {
	value: function () {
		return '[class VSAccountProviderResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'VSAccountProviderResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(VSAccountProviderResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(VSAccountProviderResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(VSAccountProviderResponse.prototype, {
		body: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'body'));
			},
		
			enumerable: false
		},
		status: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'status'));
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

module.exports = VSAccountProviderResponse;