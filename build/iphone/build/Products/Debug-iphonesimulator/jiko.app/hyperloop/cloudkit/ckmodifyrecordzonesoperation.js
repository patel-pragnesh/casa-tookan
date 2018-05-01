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
 * CloudKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CloudKit.framework/Headers/CKModifyRecordZonesOperation.h
 * @class
 */
function CKModifyRecordZonesOperation (pointer) {
	if (!(this instanceof CKModifyRecordZonesOperation)) {
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
			class: 'CKModifyRecordZonesOperation',
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
CKModifyRecordZonesOperation.prototype = Object.create(CKDatabaseOperation.prototype, {
	constructor: {
		value: CKModifyRecordZonesOperation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CKModifyRecordZonesOperation, CKDatabaseOperation);

Object.defineProperty(CKModifyRecordZonesOperation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CKModifyRecordZonesOperation, 'className', {
	value: 'CKModifyRecordZonesOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKModifyRecordZonesOperation.prototype, 'className', {
	value: 'CKModifyRecordZonesOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKModifyRecordZonesOperation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CKModifyRecordZonesOperation, 'toString', {
	value: function () {
		return '[class CKModifyRecordZonesOperation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CKModifyRecordZonesOperation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CKModifyRecordZonesOperation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CKModifyRecordZonesOperation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CKModifyRecordZonesOperation.prototype, 'init', {
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

module.exports = CKModifyRecordZonesOperation;
