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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAssetResourceLoader.h
 * @class
 */
function AVAssetResourceLoadingRequest (pointer) {
	if (!(this instanceof AVAssetResourceLoadingRequest)) {
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
			class: 'AVAssetResourceLoadingRequest',
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
AVAssetResourceLoadingRequest.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVAssetResourceLoadingRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetResourceLoadingRequest, NSObject);

Object.defineProperty(AVAssetResourceLoadingRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetResourceLoadingRequest, 'className', {
	value: 'AVAssetResourceLoadingRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetResourceLoadingRequest.prototype, 'className', {
	value: 'AVAssetResourceLoadingRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetResourceLoadingRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetResourceLoadingRequest, 'toString', {
	value: function () {
		return '[class AVAssetResourceLoadingRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURLRequest = require('/hyperloop/foundation/nsurlrequest');
	$imports.NSURLResponse = require('/hyperloop/foundation/nsurlresponse');

	$class = Hyperloop.createProxy({
		class: 'AVAssetResourceLoadingRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetResourceLoadingRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetResourceLoadingRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAssetResourceLoadingRequest.prototype, 'init', {
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
	Object.defineProperties(AVAssetResourceLoadingRequest.prototype, {
		finished: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'finished');
			},
		
			enumerable: false
		},
		request: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLRequest($dispatch(this.$native, 'request'));
			},
		
			enumerable: false
		},
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

module.exports = AVAssetResourceLoadingRequest;
