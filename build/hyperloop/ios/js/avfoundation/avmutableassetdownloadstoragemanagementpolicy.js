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


var AVAssetDownloadStorageManagementPolicy = require('/hyperloop/avfoundation/avassetdownloadstoragemanagementpolicy');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAssetDownloadStorageManager.h
 * @class
 */
function AVMutableAssetDownloadStorageManagementPolicy (pointer) {
	if (!(this instanceof AVMutableAssetDownloadStorageManagementPolicy)) {
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
			class: 'AVMutableAssetDownloadStorageManagementPolicy',
			alloc: true,
			init: 'init'
		});
	}
	AVAssetDownloadStorageManagementPolicy.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVMutableAssetDownloadStorageManagementPolicy.prototype = Object.create(AVAssetDownloadStorageManagementPolicy.prototype, {
	constructor: {
		value: AVMutableAssetDownloadStorageManagementPolicy,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVMutableAssetDownloadStorageManagementPolicy, AVAssetDownloadStorageManagementPolicy);

Object.defineProperty(AVMutableAssetDownloadStorageManagementPolicy, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVMutableAssetDownloadStorageManagementPolicy, 'className', {
	value: 'AVMutableAssetDownloadStorageManagementPolicy',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMutableAssetDownloadStorageManagementPolicy.prototype, 'className', {
	value: 'AVMutableAssetDownloadStorageManagementPolicy',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMutableAssetDownloadStorageManagementPolicy.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVMutableAssetDownloadStorageManagementPolicy, 'toString', {
	value: function () {
		return '[class AVMutableAssetDownloadStorageManagementPolicy]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'AVMutableAssetDownloadStorageManagementPolicy',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVMutableAssetDownloadStorageManagementPolicy, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVMutableAssetDownloadStorageManagementPolicy, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVMutableAssetDownloadStorageManagementPolicy.prototype, {
		priority: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'priority'));
			},
		
			set: function (_priority) {
				if (!$init) { $initialize(); }
				this.$private.priority = _priority;
				$dispatch(this.$native, 'setPriority:', _priority);
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

module.exports = AVMutableAssetDownloadStorageManagementPolicy;
