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
 * CoreNFC//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreNFC.framework/Headers/NFCISO15693ReaderSession.h
 * @class
 */
function NFCISO15693ReaderSession (pointer) {
	if (!(this instanceof NFCISO15693ReaderSession)) {
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
			class: 'NFCISO15693ReaderSession',
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
NFCISO15693ReaderSession.prototype = Object.create(NFCReaderSession.prototype, {
	constructor: {
		value: NFCISO15693ReaderSession,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NFCISO15693ReaderSession, NFCReaderSession);

Object.defineProperty(NFCISO15693ReaderSession, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NFCISO15693ReaderSession, 'className', {
	value: 'NFCISO15693ReaderSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCISO15693ReaderSession.prototype, 'className', {
	value: 'NFCISO15693ReaderSession',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCISO15693ReaderSession.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NFCISO15693ReaderSession, 'toString', {
	value: function () {
		return '[class NFCISO15693ReaderSession]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NFCISO15693ReaderSession',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NFCISO15693ReaderSession, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NFCISO15693ReaderSession, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NFCISO15693ReaderSession.prototype, 'init', {
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

module.exports = NFCISO15693ReaderSession;
