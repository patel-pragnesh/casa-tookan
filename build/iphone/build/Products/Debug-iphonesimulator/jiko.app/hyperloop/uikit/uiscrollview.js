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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIScrollView.h
 * @class
 */
function UIScrollView (pointer) {
	if (!(this instanceof UIScrollView)) {
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
			class: 'UIScrollView',
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
UIScrollView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: UIScrollView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIScrollView, UIView);

Object.defineProperty(UIScrollView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIScrollView, 'className', {
	value: 'UIScrollView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIScrollView.prototype, 'className', {
	value: 'UIScrollView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIScrollView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIScrollView, 'toString', {
	value: function () {
		return '[class UIScrollView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGPoint = require('/hyperloop/coregraphics/cgpoint');
	$imports.CGSize = require('/hyperloop/coregraphics/cgsize');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.UIRefreshControl = require('/hyperloop/uikit/uirefreshcontrol');

	$class = Hyperloop.createProxy({
		class: 'UIScrollView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIScrollView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIScrollView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIScrollView.prototype, {
		contentOffset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGPoint($dispatch(this.$native, 'contentOffset'));
			},
		
			enumerable: false
		},
		contentSize: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGSize($dispatch(this.$native, 'contentSize'));
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
		refreshControl: {
		
		
			set: function (_refreshControl) {
				if (!$init) { $initialize(); }
				this.$private.refreshControl = _refreshControl;
				$dispatch(this.$native, 'setRefreshControl:', _refreshControl);
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

module.exports = UIScrollView;
