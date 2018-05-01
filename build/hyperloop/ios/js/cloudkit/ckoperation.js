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


var NSOperation = require('/hyperloop/foundation/nsoperation');


/**
 * CloudKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CloudKit.framework/Headers/CKOperation.h
 * @class
 */
function CKOperation (pointer) {
	if (!(this instanceof CKOperation)) {
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
			class: 'CKOperation',
			alloc: true,
			init: 'init'
		});
	}
	NSOperation.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CKOperation.prototype = Object.create(NSOperation.prototype, {
	constructor: {
		value: CKOperation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CKOperation, NSOperation);

Object.defineProperty(CKOperation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CKOperation, 'className', {
	value: 'CKOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKOperation.prototype, 'className', {
	value: 'CKOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKOperation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CKOperation, 'toString', {
	value: function () {
		return '[class CKOperation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CKOperationGroup = require('/hyperloop/cloudkit/ckoperationgroup');

	$class = Hyperloop.createProxy({
		class: 'CKOperation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CKOperation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CKOperation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CKOperation.prototype, 'init', {
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
	Object.defineProperties(CKOperation.prototype, {
		group: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CKOperationGroup($dispatch(this.$native, 'group'));
			},
		
			set: function (_group) {
				if (!$init) { $initialize(); }
				this.$private.group = _group;
				$dispatch(this.$native, 'setGroup:', _group);
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

module.exports = CKOperation;
