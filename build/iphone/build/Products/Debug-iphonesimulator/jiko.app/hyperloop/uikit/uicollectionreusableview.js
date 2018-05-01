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


var UIView = require('/hyperloop/uikit/uiview');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UICollectionViewCell.h
 * @class
 */
function UICollectionReusableView (pointer) {
	if (!(this instanceof UICollectionReusableView)) {
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
			class: 'UICollectionReusableView',
			alloc: true,
			init: 'init'
		});
	}
	UIView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UICollectionReusableView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: UICollectionReusableView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UICollectionReusableView, UIView);

Object.defineProperty(UICollectionReusableView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UICollectionReusableView, 'className', {
	value: 'UICollectionReusableView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UICollectionReusableView.prototype, 'className', {
	value: 'UICollectionReusableView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UICollectionReusableView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UICollectionReusableView, 'toString', {
	value: function () {
		return '[class UICollectionReusableView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UICollectionReusableView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UICollectionReusableView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UICollectionReusableView, '$private', {
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

module.exports = UICollectionReusableView;
