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
function AVAssetResourceLoadingContentInformationRequest (pointer) {
	if (!(this instanceof AVAssetResourceLoadingContentInformationRequest)) {
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
			class: 'AVAssetResourceLoadingContentInformationRequest',
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
AVAssetResourceLoadingContentInformationRequest.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVAssetResourceLoadingContentInformationRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetResourceLoadingContentInformationRequest, NSObject);

Object.defineProperty(AVAssetResourceLoadingContentInformationRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetResourceLoadingContentInformationRequest, 'className', {
	value: 'AVAssetResourceLoadingContentInformationRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetResourceLoadingContentInformationRequest.prototype, 'className', {
	value: 'AVAssetResourceLoadingContentInformationRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetResourceLoadingContentInformationRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetResourceLoadingContentInformationRequest, 'toString', {
	value: function () {
		return '[class AVAssetResourceLoadingContentInformationRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'AVAssetResourceLoadingContentInformationRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetResourceLoadingContentInformationRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetResourceLoadingContentInformationRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAssetResourceLoadingContentInformationRequest.prototype, 'init', {
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
	Object.defineProperties(AVAssetResourceLoadingContentInformationRequest.prototype, {
		contentType: {
		
		
			set: function (_contentType) {
				if (!$init) { $initialize(); }
				this.$private.contentType = _contentType;
				$dispatch(this.$native, 'setContentType:', _contentType);
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

module.exports = AVAssetResourceLoadingContentInformationRequest;
