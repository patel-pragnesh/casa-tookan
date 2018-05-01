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


var INIntent = require('/hyperloop/intents/inintent');


/**
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INSetCarLockStatusIntent.h
 * @class
 */
function INSetCarLockStatusIntent (pointer) {
	if (!(this instanceof INSetCarLockStatusIntent)) {
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
			class: 'INSetCarLockStatusIntent',
			alloc: true,
			init: 'init'
		});
	}
	INIntent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
INSetCarLockStatusIntent.prototype = Object.create(INIntent.prototype, {
	constructor: {
		value: INSetCarLockStatusIntent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INSetCarLockStatusIntent, INIntent);

Object.defineProperty(INSetCarLockStatusIntent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INSetCarLockStatusIntent, 'className', {
	value: 'INSetCarLockStatusIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSetCarLockStatusIntent.prototype, 'className', {
	value: 'INSetCarLockStatusIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSetCarLockStatusIntent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INSetCarLockStatusIntent, 'toString', {
	value: function () {
		return '[class INSetCarLockStatusIntent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSNumber = require('/hyperloop/foundation/nsnumber');

	$class = Hyperloop.createProxy({
		class: 'INSetCarLockStatusIntent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INSetCarLockStatusIntent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INSetCarLockStatusIntent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INSetCarLockStatusIntent.prototype, {
		locked: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSNumber($dispatch(this.$native, 'locked'));
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

module.exports = INSetCarLockStatusIntent;
