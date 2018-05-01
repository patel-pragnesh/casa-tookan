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
 * Photos//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Photos.framework/Headers/PHContentEditingInput.h
 * @class
 */
function PHContentEditingInput (pointer) {
	if (!(this instanceof PHContentEditingInput)) {
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
			class: 'PHContentEditingInput',
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
PHContentEditingInput.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PHContentEditingInput,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PHContentEditingInput, NSObject);

Object.defineProperty(PHContentEditingInput, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PHContentEditingInput, 'className', {
	value: 'PHContentEditingInput',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHContentEditingInput.prototype, 'className', {
	value: 'PHContentEditingInput',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHContentEditingInput.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PHContentEditingInput, 'toString', {
	value: function () {
		return '[class PHContentEditingInput]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CLLocation = require('/hyperloop/corelocation/cllocation');

	$class = Hyperloop.createProxy({
		class: 'PHContentEditingInput',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PHContentEditingInput, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PHContentEditingInput, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PHContentEditingInput.prototype, {
		location: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CLLocation($dispatch(this.$native, 'location'));
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

module.exports = PHContentEditingInput;
