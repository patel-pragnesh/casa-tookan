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
 * Photos//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Photos.framework/Headers/PHAssetCollectionChangeRequest.h
 * @class
 */
function PHAssetCollectionChangeRequest (pointer) {
	if (!(this instanceof PHAssetCollectionChangeRequest)) {
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
			class: 'PHAssetCollectionChangeRequest',
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
PHAssetCollectionChangeRequest.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PHAssetCollectionChangeRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PHAssetCollectionChangeRequest, NSObject);

Object.defineProperty(PHAssetCollectionChangeRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PHAssetCollectionChangeRequest, 'className', {
	value: 'PHAssetCollectionChangeRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHAssetCollectionChangeRequest.prototype, 'className', {
	value: 'PHAssetCollectionChangeRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHAssetCollectionChangeRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PHAssetCollectionChangeRequest, 'toString', {
	value: function () {
		return '[class PHAssetCollectionChangeRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'PHAssetCollectionChangeRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PHAssetCollectionChangeRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PHAssetCollectionChangeRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PHAssetCollectionChangeRequest.prototype, {
		title: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'title'));
			},
		
			set: function (_title) {
				if (!$init) { $initialize(); }
				this.$private.title = _title;
				$dispatch(this.$native, 'setTitle:', _title);
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

module.exports = PHAssetCollectionChangeRequest;
