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
 * Contacts//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Contacts.framework/Headers/CNContactFormatter.h
 * @class
 */
function CNContactFormatter (pointer) {
	if (!(this instanceof CNContactFormatter)) {
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
			class: 'CNContactFormatter',
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
CNContactFormatter.prototype = Object.create(NSFormatter.prototype, {
	constructor: {
		value: CNContactFormatter,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CNContactFormatter, NSFormatter);

Object.defineProperty(CNContactFormatter, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CNContactFormatter, 'className', {
	value: 'CNContactFormatter',
	enumerable: false,
	writable: true
});

Object.defineProperty(CNContactFormatter.prototype, 'className', {
	value: 'CNContactFormatter',
	enumerable: false,
	writable: true
});

Object.defineProperty(CNContactFormatter.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CNContactFormatter, 'toString', {
	value: function () {
		return '[class CNContactFormatter]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CNContactFormatter',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CNContactFormatter, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CNContactFormatter, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CNContactFormatter.prototype, {
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

module.exports = CNContactFormatter;
