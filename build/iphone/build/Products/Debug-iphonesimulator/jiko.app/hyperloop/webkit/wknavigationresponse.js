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
 * WebKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WebKit.framework/Headers/WKNavigationResponse.h
 * @class
 */
function WKNavigationResponse (pointer) {
	if (!(this instanceof WKNavigationResponse)) {
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
			class: 'WKNavigationResponse',
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
WKNavigationResponse.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WKNavigationResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKNavigationResponse, NSObject);

Object.defineProperty(WKNavigationResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKNavigationResponse, 'className', {
	value: 'WKNavigationResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKNavigationResponse.prototype, 'className', {
	value: 'WKNavigationResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKNavigationResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKNavigationResponse, 'toString', {
	value: function () {
		return '[class WKNavigationResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURLResponse = require('/hyperloop/foundation/nsurlresponse');

	$class = Hyperloop.createProxy({
		class: 'WKNavigationResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKNavigationResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKNavigationResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(WKNavigationResponse.prototype, {
		response: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLResponse($dispatch(this.$native, 'response'));
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

module.exports = WKNavigationResponse;
