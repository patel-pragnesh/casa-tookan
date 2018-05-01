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


var NSPredicate = require('/hyperloop/foundation/nspredicate');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSComparisonPredicate.h
 * @class
 */
function NSComparisonPredicate (pointer) {
	if (!(this instanceof NSComparisonPredicate)) {
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
			class: 'NSComparisonPredicate',
			alloc: true,
			init: 'init'
		});
	}
	NSPredicate.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSComparisonPredicate.prototype = Object.create(NSPredicate.prototype, {
	constructor: {
		value: NSComparisonPredicate,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSComparisonPredicate, NSPredicate);

Object.defineProperty(NSComparisonPredicate, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSComparisonPredicate, 'className', {
	value: 'NSComparisonPredicate',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSComparisonPredicate.prototype, 'className', {
	value: 'NSComparisonPredicate',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSComparisonPredicate.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSComparisonPredicate, 'toString', {
	value: function () {
		return '[class NSComparisonPredicate]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSComparisonPredicate',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSComparisonPredicate, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSComparisonPredicate, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSComparisonPredicate.prototype, {
		options: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'options');
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

module.exports = NSComparisonPredicate;
