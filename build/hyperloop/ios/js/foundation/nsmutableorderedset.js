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


var NSOrderedSet = require('/hyperloop/foundation/nsorderedset');


/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSOrderedSet.h
 * @class
 */
function NSMutableOrderedSet (pointer) {
	if (!(this instanceof NSMutableOrderedSet)) {
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
			class: 'NSMutableOrderedSet',
			alloc: true,
			init: 'init'
		});
	}
	NSOrderedSet.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NSMutableOrderedSet.prototype = Object.create(NSOrderedSet.prototype, {
	constructor: {
		value: NSMutableOrderedSet,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSMutableOrderedSet, NSOrderedSet);

Object.defineProperty(NSMutableOrderedSet, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSMutableOrderedSet, 'className', {
	value: 'NSMutableOrderedSet',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSMutableOrderedSet.prototype, 'className', {
	value: 'NSMutableOrderedSet',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSMutableOrderedSet.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSMutableOrderedSet, 'toString', {
	value: function () {
		return '[class NSMutableOrderedSet]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSMutableOrderedSet',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSMutableOrderedSet, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSMutableOrderedSet, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSMutableOrderedSet.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
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

module.exports = NSMutableOrderedSet;