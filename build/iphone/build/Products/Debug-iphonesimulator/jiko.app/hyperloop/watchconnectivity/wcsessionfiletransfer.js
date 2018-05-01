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
 * WatchConnectivity//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WatchConnectivity.framework/Headers/WCSessionFile.h
 * @class
 */
function WCSessionFileTransfer (pointer) {
	if (!(this instanceof WCSessionFileTransfer)) {
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
			class: 'WCSessionFileTransfer',
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
WCSessionFileTransfer.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WCSessionFileTransfer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WCSessionFileTransfer, NSObject);

Object.defineProperty(WCSessionFileTransfer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WCSessionFileTransfer, 'className', {
	value: 'WCSessionFileTransfer',
	enumerable: false,
	writable: true
});

Object.defineProperty(WCSessionFileTransfer.prototype, 'className', {
	value: 'WCSessionFileTransfer',
	enumerable: false,
	writable: true
});

Object.defineProperty(WCSessionFileTransfer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WCSessionFileTransfer, 'toString', {
	value: function () {
		return '[class WCSessionFileTransfer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.WCSessionFile = require('/hyperloop/watchconnectivity/wcsessionfile');

	$class = Hyperloop.createProxy({
		class: 'WCSessionFileTransfer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WCSessionFileTransfer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WCSessionFileTransfer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(WCSessionFileTransfer.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(WCSessionFileTransfer.prototype, {
		file: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.WCSessionFile($dispatch(this.$native, 'file'));
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

module.exports = WCSessionFileTransfer;
