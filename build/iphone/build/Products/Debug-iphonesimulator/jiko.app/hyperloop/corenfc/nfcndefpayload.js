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
 * CoreNFC//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreNFC.framework/Headers/NFCNDEFReaderSession.h
 * @class
 */
function NFCNDEFPayload (pointer) {
	if (!(this instanceof NFCNDEFPayload)) {
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
			class: 'NFCNDEFPayload',
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
NFCNDEFPayload.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NFCNDEFPayload,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NFCNDEFPayload, NSObject);

Object.defineProperty(NFCNDEFPayload, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NFCNDEFPayload, 'className', {
	value: 'NFCNDEFPayload',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCNDEFPayload.prototype, 'className', {
	value: 'NFCNDEFPayload',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCNDEFPayload.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NFCNDEFPayload, 'toString', {
	value: function () {
		return '[class NFCNDEFPayload]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'NFCNDEFPayload',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NFCNDEFPayload, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NFCNDEFPayload, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NFCNDEFPayload.prototype, 'init', {
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
	Object.defineProperties(NFCNDEFPayload.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'type'));
			},
		
			set: function (_type) {
				if (!$init) { $initialize(); }
				this.$private.type = _type;
				$dispatch(this.$native, 'setType:', _type);
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

module.exports = NFCNDEFPayload;
