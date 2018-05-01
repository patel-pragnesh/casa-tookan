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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIProgressView.h
 * @class
 */
function UIProgressView (pointer) {
	if (!(this instanceof UIProgressView)) {
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
			class: 'UIProgressView',
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
UIProgressView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: UIProgressView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIProgressView, UIView);

Object.defineProperty(UIProgressView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIProgressView, 'className', {
	value: 'UIProgressView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIProgressView.prototype, 'className', {
	value: 'UIProgressView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIProgressView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIProgressView, 'toString', {
	value: function () {
		return '[class UIProgressView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIProgressView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIProgressView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIProgressView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIProgressView.prototype, {
		progress: {
		
		
			set: function (_progress) {
				if (!$init) { $initialize(); }
				this.$private.progress = _progress;
				$dispatch(this.$native, 'setProgress:', _progress);
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

module.exports = UIProgressView;
