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
 * CloudKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CloudKit.framework/Headers/CKModifySubscriptionsOperation.h
 * @class
 */
function CKModifySubscriptionsOperation (pointer) {
	if (!(this instanceof CKModifySubscriptionsOperation)) {
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
			class: 'CKModifySubscriptionsOperation',
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
CKModifySubscriptionsOperation.prototype = Object.create(CKDatabaseOperation.prototype, {
	constructor: {
		value: CKModifySubscriptionsOperation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CKModifySubscriptionsOperation, CKDatabaseOperation);

Object.defineProperty(CKModifySubscriptionsOperation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CKModifySubscriptionsOperation, 'className', {
	value: 'CKModifySubscriptionsOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKModifySubscriptionsOperation.prototype, 'className', {
	value: 'CKModifySubscriptionsOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKModifySubscriptionsOperation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CKModifySubscriptionsOperation, 'toString', {
	value: function () {
		return '[class CKModifySubscriptionsOperation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CKModifySubscriptionsOperation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CKModifySubscriptionsOperation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CKModifySubscriptionsOperation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CKModifySubscriptionsOperation.prototype, 'init', {
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

module.exports = CKModifySubscriptionsOperation;
