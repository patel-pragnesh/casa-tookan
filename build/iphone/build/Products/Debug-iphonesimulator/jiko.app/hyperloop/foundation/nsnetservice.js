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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSNetServices.h
 * @class
 */
function NSNetService (pointer) {
	if (!(this instanceof NSNetService)) {
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
			class: 'NSNetService',
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
NSNetService.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSNetService,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSNetService, NSObject);

Object.defineProperty(NSNetService, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSNetService, 'className', {
	value: 'NSNetService',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSNetService.prototype, 'className', {
	value: 'NSNetService',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSNetService.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSNetService, 'toString', {
	value: function () {
		return '[class NSNetService]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NSNetService',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSNetService, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSNetService, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSNetService.prototype, 'publish', {
		value: function () {
			var result = $dispatch(this.$native, 'publish', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSNetService.prototype, 'resolve', {
		value: function () {
			var result = $dispatch(this.$native, 'resolve', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSNetService.prototype, 'stop', {
		value: function () {
			var result = $dispatch(this.$native, 'stop', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSNetService.prototype, {
		addresses: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'addresses'));
			},
		
			enumerable: false
		},
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		domain: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'domain'));
			},
		
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			enumerable: false
		},
		port: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'port');
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'type'));
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

module.exports = NSNetService;
