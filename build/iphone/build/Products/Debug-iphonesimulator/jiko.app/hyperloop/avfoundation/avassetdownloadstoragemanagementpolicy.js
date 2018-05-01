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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAssetDownloadStorageManager.h
 * @class
 */
function AVAssetDownloadStorageManagementPolicy (pointer) {
	if (!(this instanceof AVAssetDownloadStorageManagementPolicy)) {
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
			class: 'AVAssetDownloadStorageManagementPolicy',
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
AVAssetDownloadStorageManagementPolicy.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVAssetDownloadStorageManagementPolicy,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetDownloadStorageManagementPolicy, NSObject);

Object.defineProperty(AVAssetDownloadStorageManagementPolicy, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetDownloadStorageManagementPolicy, 'className', {
	value: 'AVAssetDownloadStorageManagementPolicy',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetDownloadStorageManagementPolicy.prototype, 'className', {
	value: 'AVAssetDownloadStorageManagementPolicy',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetDownloadStorageManagementPolicy.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetDownloadStorageManagementPolicy, 'toString', {
	value: function () {
		return '[class AVAssetDownloadStorageManagementPolicy]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'AVAssetDownloadStorageManagementPolicy',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetDownloadStorageManagementPolicy, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetDownloadStorageManagementPolicy, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVAssetDownloadStorageManagementPolicy.prototype, {
		priority: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'priority'));
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

module.exports = AVAssetDownloadStorageManagementPolicy;
