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
 * FirebaseCore//Users/a/Documents/Appcelerator_Studio_Workspace/tookan/modules/iphone/firebase.core/1.0.0/platform/FirebaseCore.framework/Headers/FIROptions.h
 * @class
 */
function FIROptions (pointer) {
	if (!(this instanceof FIROptions)) {
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
			class: 'FIROptions',
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
FIROptions.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: FIROptions,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(FIROptions, NSObject);

Object.defineProperty(FIROptions, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(FIROptions, 'className', {
	value: 'FIROptions',
	enumerable: false,
	writable: true
});

Object.defineProperty(FIROptions.prototype, 'className', {
	value: 'FIROptions',
	enumerable: false,
	writable: true
});

Object.defineProperty(FIROptions.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(FIROptions, 'toString', {
	value: function () {
		return '[class FIROptions]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'FIROptions',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(FIROptions, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(FIROptions, '$private', {
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

module.exports = FIROptions;
