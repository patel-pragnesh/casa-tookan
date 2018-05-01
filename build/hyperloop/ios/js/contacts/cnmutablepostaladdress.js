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


var CNPostalAddress = require('/hyperloop/contacts/cnpostaladdress');


/**
 * Contacts//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Contacts.framework/Headers/CNMutablePostalAddress.h
 * @class
 */
function CNMutablePostalAddress (pointer) {
	if (!(this instanceof CNMutablePostalAddress)) {
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
			class: 'CNMutablePostalAddress',
			alloc: true,
			init: 'init'
		});
	}
	CNPostalAddress.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CNMutablePostalAddress.prototype = Object.create(CNPostalAddress.prototype, {
	constructor: {
		value: CNMutablePostalAddress,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CNMutablePostalAddress, CNPostalAddress);

Object.defineProperty(CNMutablePostalAddress, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CNMutablePostalAddress, 'className', {
	value: 'CNMutablePostalAddress',
	enumerable: false,
	writable: true
});

Object.defineProperty(CNMutablePostalAddress.prototype, 'className', {
	value: 'CNMutablePostalAddress',
	enumerable: false,
	writable: true
});

Object.defineProperty(CNMutablePostalAddress.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CNMutablePostalAddress, 'toString', {
	value: function () {
		return '[class CNMutablePostalAddress]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'CNMutablePostalAddress',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CNMutablePostalAddress, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CNMutablePostalAddress, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CNMutablePostalAddress.prototype, {
		state: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'state'));
			},
		
			set: function (_state) {
				if (!$init) { $initialize(); }
				this.$private.state = _state;
				$dispatch(this.$native, 'setState:', _state);
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

module.exports = CNMutablePostalAddress;
