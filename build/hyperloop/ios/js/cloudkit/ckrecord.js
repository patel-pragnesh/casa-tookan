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
 * CloudKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CloudKit.framework/Headers/CKRecord.h
 * @class
 */
function CKRecord (pointer) {
	if (!(this instanceof CKRecord)) {
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
			class: 'CKRecord',
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
CKRecord.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CKRecord,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CKRecord, NSObject);

Object.defineProperty(CKRecord, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CKRecord, 'className', {
	value: 'CKRecord',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKRecord.prototype, 'className', {
	value: 'CKRecord',
	enumerable: false,
	writable: true
});

Object.defineProperty(CKRecord.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CKRecord, 'toString', {
	value: function () {
		return '[class CKRecord]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CKReference = require('/hyperloop/cloudkit/ckreference');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'CKRecord',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CKRecord, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CKRecord, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CKRecord.prototype, 'allKeys', {
		value: function () {
			var result = $dispatch(this.$native, 'allKeys', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSArray(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(CKRecord.prototype, 'init', {
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

	Object.defineProperty(CKRecord.prototype, 'setParent', {
		value: function (_parent) {
			this.$private.setParent = this.$private.setParent || [];
			this.$private.setParent.push(_parent);
			var result = $dispatch(this.$native, 'setParent:', [_parent], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(CKRecord.prototype, {
		parent: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CKReference($dispatch(this.$native, 'parent'));
			},
		
			set: function (_parent) {
				if (!$init) { $initialize(); }
				this.$private.parent = _parent;
				$dispatch(this.$native, 'setParent:', _parent);
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

module.exports = CKRecord;
