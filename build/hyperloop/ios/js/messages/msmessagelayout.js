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
 * Messages//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Messages.framework/Headers/MSMessageLayout.h
 * @class
 */
function MSMessageLayout (pointer) {
	if (!(this instanceof MSMessageLayout)) {
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
			class: 'MSMessageLayout',
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
MSMessageLayout.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MSMessageLayout,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MSMessageLayout, NSObject);

Object.defineProperty(MSMessageLayout, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MSMessageLayout, 'className', {
	value: 'MSMessageLayout',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSMessageLayout.prototype, 'className', {
	value: 'MSMessageLayout',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSMessageLayout.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MSMessageLayout, 'toString', {
	value: function () {
		return '[class MSMessageLayout]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MSMessageLayout',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MSMessageLayout, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MSMessageLayout, '$private', {
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

module.exports = MSMessageLayout;
