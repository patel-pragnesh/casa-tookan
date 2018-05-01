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


var NSFormatter = require('/hyperloop/foundation/nsformatter');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSPersonNameComponentsFormatter.h
 * @class
 */
function NSPersonNameComponentsFormatter (pointer) {
	if (!(this instanceof NSPersonNameComponentsFormatter)) {
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
			class: 'NSPersonNameComponentsFormatter',
			alloc: true,
			init: 'init'
		});
	}
	NSFormatter.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSPersonNameComponentsFormatter.prototype = Object.create(NSFormatter.prototype, {
	constructor: {
		value: NSPersonNameComponentsFormatter,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSPersonNameComponentsFormatter, NSFormatter);

Object.defineProperty(NSPersonNameComponentsFormatter, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSPersonNameComponentsFormatter, 'className', {
	value: 'NSPersonNameComponentsFormatter',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersonNameComponentsFormatter.prototype, 'className', {
	value: 'NSPersonNameComponentsFormatter',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSPersonNameComponentsFormatter.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSPersonNameComponentsFormatter, 'toString', {
	value: function () {
		return '[class NSPersonNameComponentsFormatter]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSPersonNameComponentsFormatter',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSPersonNameComponentsFormatter, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSPersonNameComponentsFormatter, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSPersonNameComponentsFormatter.prototype, {
		style: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'style');
			},
		
			set: function (_style) {
				if (!$init) { $initialize(); }
				this.$private.style = _style;
				$dispatch(this.$native, 'setStyle:', _style);
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

module.exports = NSPersonNameComponentsFormatter;
