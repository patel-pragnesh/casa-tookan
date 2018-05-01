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
 * WebKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WebKit.framework/Headers/WKFrameInfo.h
 * @class
 */
function WKFrameInfo (pointer) {
	if (!(this instanceof WKFrameInfo)) {
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
			class: 'WKFrameInfo',
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
WKFrameInfo.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WKFrameInfo,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKFrameInfo, NSObject);

Object.defineProperty(WKFrameInfo, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKFrameInfo, 'className', {
	value: 'WKFrameInfo',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKFrameInfo.prototype, 'className', {
	value: 'WKFrameInfo',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKFrameInfo.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKFrameInfo, 'toString', {
	value: function () {
		return '[class WKFrameInfo]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURLRequest = require('/hyperloop/foundation/nsurlrequest');

	$class = Hyperloop.createProxy({
		class: 'WKFrameInfo',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKFrameInfo, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKFrameInfo, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(WKFrameInfo.prototype, {
		request: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLRequest($dispatch(this.$native, 'request'));
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

module.exports = WKFrameInfo;
