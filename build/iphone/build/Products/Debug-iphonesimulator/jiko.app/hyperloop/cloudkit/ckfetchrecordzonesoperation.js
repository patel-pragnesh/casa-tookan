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


var CKDatabaseOperation = require('/hyperloop/cloudkit/ckdatabaseoperation');


/**
 * CloudKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CloudKit.framework/Headers/CKFetchRecordZonesOperation.h
 * @class
 */
function CKFetchRecordZonesOperation (pointer) {
	if (!(this instanceof CKFetchRecordZonesOperation)) {
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
			class: 'CKFetchRecordZonesOperation',
			alloc: true,
			init: 'init'
		});
	}
	CKDatabaseOperation.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CKFetchRecordZonesOperation.prototype = Object.create(CKDatabaseOperation.prototype, {
	constructor: {
		value: CKFetchRecordZonesOperation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CKFetchRecordZonesOperation, CKDatabaseOperation);

Object.defineProperty(CKFetchRecordZonesOperation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CKFetchRecordZonesOperation, 'className', {
	value: 'CKFetchRecordZonesOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKFetchRecordZonesOperation.prototype, 'className', {
	value: 'CKFetchRecordZonesOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKFetchRecordZonesOperation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CKFetchRecordZonesOperation, 'toString', {
	value: function () {
		return '[class CKFetchRecordZonesOperation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CKFetchRecordZonesOperation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CKFetchRecordZonesOperation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CKFetchRecordZonesOperation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CKFetchRecordZonesOperation.prototype, 'init', {
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

module.exports = CKFetchRecordZonesOperation;
