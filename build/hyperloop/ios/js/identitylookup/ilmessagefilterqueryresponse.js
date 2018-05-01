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
 * IdentityLookup//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/IdentityLookup.framework/Headers/ILMessageFilterQueryResponse.h
 * @class
 */
function ILMessageFilterQueryResponse (pointer) {
	if (!(this instanceof ILMessageFilterQueryResponse)) {
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
			class: 'ILMessageFilterQueryResponse',
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
ILMessageFilterQueryResponse.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: ILMessageFilterQueryResponse,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(ILMessageFilterQueryResponse, NSObject);

Object.defineProperty(ILMessageFilterQueryResponse, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(ILMessageFilterQueryResponse, 'className', {
	value: 'ILMessageFilterQueryResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(ILMessageFilterQueryResponse.prototype, 'className', {
	value: 'ILMessageFilterQueryResponse',
	enumerable: false,
	writable: true
});

Object.defineProperty(ILMessageFilterQueryResponse.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(ILMessageFilterQueryResponse, 'toString', {
	value: function () {
		return '[class ILMessageFilterQueryResponse]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'ILMessageFilterQueryResponse',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(ILMessageFilterQueryResponse, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(ILMessageFilterQueryResponse, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(ILMessageFilterQueryResponse.prototype, {
		action: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'action');
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

module.exports = ILMessageFilterQueryResponse;
