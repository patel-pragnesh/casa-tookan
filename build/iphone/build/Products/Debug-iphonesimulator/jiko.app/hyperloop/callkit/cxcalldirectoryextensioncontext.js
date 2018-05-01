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


var NSExtensionContext = require('/hyperloop/foundation/nsextensioncontext');


/**
 * CallKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CallKit.framework/Headers/CXCallDirectoryExtensionContext.h
 * @class
 */
function CXCallDirectoryExtensionContext (pointer) {
	if (!(this instanceof CXCallDirectoryExtensionContext)) {
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
			class: 'CXCallDirectoryExtensionContext',
			alloc: true,
			init: 'init'
		});
	}
	NSExtensionContext.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CXCallDirectoryExtensionContext.prototype = Object.create(NSExtensionContext.prototype, {
	constructor: {
		value: CXCallDirectoryExtensionContext,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CXCallDirectoryExtensionContext, NSExtensionContext);

Object.defineProperty(CXCallDirectoryExtensionContext, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CXCallDirectoryExtensionContext, 'className', {
	value: 'CXCallDirectoryExtensionContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(CXCallDirectoryExtensionContext.prototype, 'className', {
	value: 'CXCallDirectoryExtensionContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(CXCallDirectoryExtensionContext.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CXCallDirectoryExtensionContext, 'toString', {
	value: function () {
		return '[class CXCallDirectoryExtensionContext]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'CXCallDirectoryExtensionContext',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CXCallDirectoryExtensionContext, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CXCallDirectoryExtensionContext, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CXCallDirectoryExtensionContext.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = CXCallDirectoryExtensionContext;
