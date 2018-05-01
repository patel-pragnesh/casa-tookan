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
 * CoreBluetooth//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreBluetooth.framework/Headers/CBATTRequest.h
 * @class
 */
function CBATTRequest (pointer) {
	if (!(this instanceof CBATTRequest)) {
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
			class: 'CBATTRequest',
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
CBATTRequest.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CBATTRequest,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CBATTRequest, NSObject);

Object.defineProperty(CBATTRequest, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CBATTRequest, 'className', {
	value: 'CBATTRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(CBATTRequest.prototype, 'className', {
	value: 'CBATTRequest',
	enumerable: false,
	writable: true
});

Object.defineProperty(CBATTRequest.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CBATTRequest, 'toString', {
	value: function () {
		return '[class CBATTRequest]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'CBATTRequest',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CBATTRequest, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CBATTRequest, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CBATTRequest.prototype, 'init', {
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

	Object.defineProperty(CBATTRequest.prototype, 'setValue', {
		value: function (_value) {
			this.$private.setValue = this.$private.setValue || [];
			this.$private.setValue.push(_value);
			var result = $dispatch(this.$native, 'setValue:', [_value], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(CBATTRequest.prototype, {
		offset: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'offset');
			},
		
			enumerable: false
		},
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'value'));
			},
		
			set: function (_value) {
				if (!$init) { $initialize(); }
				this.$private.value = _value;
				$dispatch(this.$native, 'setValue:', _value);
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

module.exports = CBATTRequest;
