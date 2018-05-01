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
 * CoreData//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreData.framework/Headers/NSIncrementalStoreNode.h
 * @class
 */
function NSIncrementalStoreNode (pointer) {
	if (!(this instanceof NSIncrementalStoreNode)) {
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
			class: 'NSIncrementalStoreNode',
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
NSIncrementalStoreNode.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSIncrementalStoreNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSIncrementalStoreNode, NSObject);

Object.defineProperty(NSIncrementalStoreNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSIncrementalStoreNode, 'className', {
	value: 'NSIncrementalStoreNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSIncrementalStoreNode.prototype, 'className', {
	value: 'NSIncrementalStoreNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSIncrementalStoreNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSIncrementalStoreNode, 'toString', {
	value: function () {
		return '[class NSIncrementalStoreNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSIncrementalStoreNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSIncrementalStoreNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSIncrementalStoreNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSIncrementalStoreNode.prototype, {
		version: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'version');
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

module.exports = NSIncrementalStoreNode;
