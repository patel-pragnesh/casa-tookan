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


var NSURLSessionTask = require('/hyperloop/foundation/nsurlsessiontask');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAssetDownloadTask.h
 * @class
 */
function AVAssetDownloadTask (pointer) {
	if (!(this instanceof AVAssetDownloadTask)) {
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
			class: 'AVAssetDownloadTask',
			alloc: true,
			init: 'init'
		});
	}
	NSURLSessionTask.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVAssetDownloadTask.prototype = Object.create(NSURLSessionTask.prototype, {
	constructor: {
		value: AVAssetDownloadTask,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetDownloadTask, NSURLSessionTask);

Object.defineProperty(AVAssetDownloadTask, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetDownloadTask, 'className', {
	value: 'AVAssetDownloadTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetDownloadTask.prototype, 'className', {
	value: 'AVAssetDownloadTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetDownloadTask.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetDownloadTask, 'toString', {
	value: function () {
		return '[class AVAssetDownloadTask]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDictionary = require('/hyperloop/foundation/nsdictionary');
	$imports.NSURLResponse = require('/hyperloop/foundation/nsurlresponse');

	$class = Hyperloop.createProxy({
		class: 'AVAssetDownloadTask',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetDownloadTask, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetDownloadTask, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAssetDownloadTask.prototype, 'init', {
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
	Object.defineProperties(AVAssetDownloadTask.prototype, {
		options: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDictionary($dispatch(this.$native, 'options'));
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

module.exports = AVAssetDownloadTask;
