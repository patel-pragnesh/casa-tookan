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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UICollectionViewLayout.h
 * @class
 */
function UICollectionViewLayoutInvalidationContext (pointer) {
	if (!(this instanceof UICollectionViewLayoutInvalidationContext)) {
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
			class: 'UICollectionViewLayoutInvalidationContext',
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
UICollectionViewLayoutInvalidationContext.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UICollectionViewLayoutInvalidationContext,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UICollectionViewLayoutInvalidationContext, NSObject);

Object.defineProperty(UICollectionViewLayoutInvalidationContext, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UICollectionViewLayoutInvalidationContext, 'className', {
	value: 'UICollectionViewLayoutInvalidationContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(UICollectionViewLayoutInvalidationContext.prototype, 'className', {
	value: 'UICollectionViewLayoutInvalidationContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(UICollectionViewLayoutInvalidationContext.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UICollectionViewLayoutInvalidationContext, 'toString', {
	value: function () {
		return '[class UICollectionViewLayoutInvalidationContext]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UICollectionViewLayoutInvalidationContext',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UICollectionViewLayoutInvalidationContext, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UICollectionViewLayoutInvalidationContext, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = UICollectionViewLayoutInvalidationContext;
