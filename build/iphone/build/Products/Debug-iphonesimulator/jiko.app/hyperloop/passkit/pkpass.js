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


var PKObject = require('/hyperloop/passkit/pkobject');


/**
 * PassKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PassKit.framework/Headers/PKPass.h
 * @class
 */
function PKPass (pointer) {
	if (!(this instanceof PKPass)) {
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
			class: 'PKPass',
			alloc: true,
			init: 'init'
		});
	}
	PKObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
PKPass.prototype = Object.create(PKObject.prototype, {
	constructor: {
		value: PKPass,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PKPass, PKObject);

Object.defineProperty(PKPass, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PKPass, 'className', {
	value: 'PKPass',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPass.prototype, 'className', {
	value: 'PKPass',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPass.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PKPass, 'toString', {
	value: function () {
		return '[class PKPass]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'PKPass',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PKPass, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PKPass, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = PKPass;
