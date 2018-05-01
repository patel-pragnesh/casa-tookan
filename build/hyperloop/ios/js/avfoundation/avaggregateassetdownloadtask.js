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
function AVAggregateAssetDownloadTask (pointer) {
	if (!(this instanceof AVAggregateAssetDownloadTask)) {
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
			class: 'AVAggregateAssetDownloadTask',
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
AVAggregateAssetDownloadTask.prototype = Object.create(NSURLSessionTask.prototype, {
	constructor: {
		value: AVAggregateAssetDownloadTask,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAggregateAssetDownloadTask, NSURLSessionTask);

Object.defineProperty(AVAggregateAssetDownloadTask, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAggregateAssetDownloadTask, 'className', {
	value: 'AVAggregateAssetDownloadTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAggregateAssetDownloadTask.prototype, 'className', {
	value: 'AVAggregateAssetDownloadTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAggregateAssetDownloadTask.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAggregateAssetDownloadTask, 'toString', {
	value: function () {
		return '[class AVAggregateAssetDownloadTask]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURLResponse = require('/hyperloop/foundation/nsurlresponse');

	$class = Hyperloop.createProxy({
		class: 'AVAggregateAssetDownloadTask',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAggregateAssetDownloadTask, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAggregateAssetDownloadTask, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAggregateAssetDownloadTask.prototype, 'init', {
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
	Object.defineProperties(AVAggregateAssetDownloadTask.prototype, {
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

module.exports = AVAggregateAssetDownloadTask;
