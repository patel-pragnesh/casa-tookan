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
 * CloudKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CloudKit.framework/Headers/CKQueryOperation.h
 * @class
 */
function CKQueryOperation (pointer) {
	if (!(this instanceof CKQueryOperation)) {
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
			class: 'CKQueryOperation',
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
CKQueryOperation.prototype = Object.create(CKDatabaseOperation.prototype, {
	constructor: {
		value: CKQueryOperation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CKQueryOperation, CKDatabaseOperation);

Object.defineProperty(CKQueryOperation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CKQueryOperation, 'className', {
	value: 'CKQueryOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKQueryOperation.prototype, 'className', {
	value: 'CKQueryOperation',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKQueryOperation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CKQueryOperation, 'toString', {
	value: function () {
		return '[class CKQueryOperation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CKQueryCursor = require('/hyperloop/cloudkit/ckquerycursor');
	$imports.CKQuery = require('/hyperloop/cloudkit/ckquery');

	$class = Hyperloop.createProxy({
		class: 'CKQueryOperation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CKQueryOperation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CKQueryOperation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CKQueryOperation.prototype, 'init', {
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
	Object.defineProperties(CKQueryOperation.prototype, {
		cursor: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CKQueryCursor($dispatch(this.$native, 'cursor'));
			},
		
			set: function (_cursor) {
				if (!$init) { $initialize(); }
				this.$private.cursor = _cursor;
				$dispatch(this.$native, 'setCursor:', _cursor);
			},
			enumerable: false
		},
		query: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CKQuery($dispatch(this.$native, 'query'));
			},
		
			set: function (_query) {
				if (!$init) { $initialize(); }
				this.$private.query = _query;
				$dispatch(this.$native, 'setQuery:', _query);
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

module.exports = CKQueryOperation;
