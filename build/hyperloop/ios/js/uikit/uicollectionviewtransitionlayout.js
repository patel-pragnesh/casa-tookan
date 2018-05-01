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


var UICollectionViewLayout = require('/hyperloop/uikit/uicollectionviewlayout');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UICollectionViewTransitionLayout.h
 * @class
 */
function UICollectionViewTransitionLayout (pointer) {
	if (!(this instanceof UICollectionViewTransitionLayout)) {
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
			class: 'UICollectionViewTransitionLayout',
			alloc: true,
			init: 'init'
		});
	}
	UICollectionViewLayout.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UICollectionViewTransitionLayout.prototype = Object.create(UICollectionViewLayout.prototype, {
	constructor: {
		value: UICollectionViewTransitionLayout,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UICollectionViewTransitionLayout, UICollectionViewLayout);

Object.defineProperty(UICollectionViewTransitionLayout, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UICollectionViewTransitionLayout, 'className', {
	value: 'UICollectionViewTransitionLayout',
	enumerable: false,
	writable: true
});

Object.defineProperty(UICollectionViewTransitionLayout.prototype, 'className', {
	value: 'UICollectionViewTransitionLayout',
	enumerable: false,
	writable: true
});

Object.defineProperty(UICollectionViewTransitionLayout.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UICollectionViewTransitionLayout, 'toString', {
	value: function () {
		return '[class UICollectionViewTransitionLayout]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UICollectionViewTransitionLayout',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UICollectionViewTransitionLayout, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UICollectionViewTransitionLayout, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UICollectionViewTransitionLayout.prototype, 'init', {
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

module.exports = UICollectionViewTransitionLayout;
