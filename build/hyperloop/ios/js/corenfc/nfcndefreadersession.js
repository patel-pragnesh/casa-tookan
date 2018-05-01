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


var NFCReaderSession = require('/hyperloop/corenfc/nfcreadersession');


/**
 * CoreNFC//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreNFC.framework/Headers/NFCNDEFReaderSession.h
 * @class
 */
function NFCNDEFReaderSession (pointer) {
	if (!(this instanceof NFCNDEFReaderSession)) {
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
			class: 'NFCNDEFReaderSession',
			alloc: true,
			init: 'init'
		});
	}
	NFCReaderSession.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NFCNDEFReaderSession.prototype = Object.create(NFCReaderSession.prototype, {
	constructor: {
		value: NFCNDEFReaderSession,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NFCNDEFReaderSession, NFCReaderSession);

Object.defineProperty(NFCNDEFReaderSession, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NFCNDEFReaderSession, 'className', {
	value: 'NFCNDEFReaderSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCNDEFReaderSession.prototype, 'className', {
	value: 'NFCNDEFReaderSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCNDEFReaderSession.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NFCNDEFReaderSession, 'toString', {
	value: function () {
		return '[class NFCNDEFReaderSession]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NFCNDEFReaderSession',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NFCNDEFReaderSession, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NFCNDEFReaderSession, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NFCNDEFReaderSession.prototype, 'init', {
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

module.exports = NFCNDEFReaderSession;
