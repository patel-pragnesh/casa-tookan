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
 * CoreImage//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreImage.framework/Headers/CIColor.h
 * @class
 */
function CIColor (pointer) {
	if (!(this instanceof CIColor)) {
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
			class: 'CIColor',
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
CIColor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CIColor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CIColor, NSObject);

Object.defineProperty(CIColor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CIColor, 'className', {
	value: 'CIColor',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIColor.prototype, 'className', {
	value: 'CIColor',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIColor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CIColor, 'toString', {
	value: function () {
		return '[class CIColor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CIColor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CIColor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CIColor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CIColor.prototype, {
		components: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'components');
			},
		
			enumerable: false
		},
		green: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'green');
			},
		
			enumerable: false
		},
		red: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'red');
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

module.exports = CIColor;
