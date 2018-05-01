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
 * CloudKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CloudKit.framework/Headers/CKUserIdentityLookupInfo.h
 * @class
 */
function CKUserIdentityLookupInfo (pointer) {
	if (!(this instanceof CKUserIdentityLookupInfo)) {
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
			class: 'CKUserIdentityLookupInfo',
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
CKUserIdentityLookupInfo.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CKUserIdentityLookupInfo,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CKUserIdentityLookupInfo, NSObject);

Object.defineProperty(CKUserIdentityLookupInfo, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CKUserIdentityLookupInfo, 'className', {
	value: 'CKUserIdentityLookupInfo',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKUserIdentityLookupInfo.prototype, 'className', {
	value: 'CKUserIdentityLookupInfo',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKUserIdentityLookupInfo.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CKUserIdentityLookupInfo, 'toString', {
	value: function () {
		return '[class CKUserIdentityLookupInfo]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CKUserIdentityLookupInfo',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CKUserIdentityLookupInfo, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CKUserIdentityLookupInfo, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CKUserIdentityLookupInfo.prototype, 'init', {
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



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = CKUserIdentityLookupInfo;
