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


var CKOperation = require('/hyperloop/cloudkit/ckoperation');


/**
 * CloudKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CloudKit.framework/Headers/CKDiscoverAllUserIdentitiesOperation.h
 * @class
 */
function CKDiscoverAllUserIdentitiesOperation (pointer) {
	if (!(this instanceof CKDiscoverAllUserIdentitiesOperation)) {
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
			class: 'CKDiscoverAllUserIdentitiesOperation',
			alloc: true,
			init: 'init'
		});
	}
	CKOperation.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CKDiscoverAllUserIdentitiesOperation.prototype = Object.create(CKOperation.prototype, {
	constructor: {
		value: CKDiscoverAllUserIdentitiesOperation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CKDiscoverAllUserIdentitiesOperation, CKOperation);

Object.defineProperty(CKDiscoverAllUserIdentitiesOperation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CKDiscoverAllUserIdentitiesOperation, 'className', {
	value: 'CKDiscoverAllUserIdentitiesOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKDiscoverAllUserIdentitiesOperation.prototype, 'className', {
	value: 'CKDiscoverAllUserIdentitiesOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKDiscoverAllUserIdentitiesOperation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CKDiscoverAllUserIdentitiesOperation, 'toString', {
	value: function () {
		return '[class CKDiscoverAllUserIdentitiesOperation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CKDiscoverAllUserIdentitiesOperation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CKDiscoverAllUserIdentitiesOperation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CKDiscoverAllUserIdentitiesOperation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CKDiscoverAllUserIdentitiesOperation.prototype, 'init', {
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

module.exports = CKDiscoverAllUserIdentitiesOperation;
