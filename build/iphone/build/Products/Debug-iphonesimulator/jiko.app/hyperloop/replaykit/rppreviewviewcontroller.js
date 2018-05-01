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


var UIViewController = require('/hyperloop/uikit/uiviewcontroller');


/**
 * ReplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ReplayKit.framework/Headers/RPPreviewViewController.h
 * @class
 */
function RPPreviewViewController (pointer) {
	if (!(this instanceof RPPreviewViewController)) {
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
			class: 'RPPreviewViewController',
			alloc: true,
			init: 'init'
		});
	}
	UIViewController.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
RPPreviewViewController.prototype = Object.create(UIViewController.prototype, {
	constructor: {
		value: RPPreviewViewController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(RPPreviewViewController, UIViewController);

Object.defineProperty(RPPreviewViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(RPPreviewViewController, 'className', {
	value: 'RPPreviewViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(RPPreviewViewController.prototype, 'className', {
	value: 'RPPreviewViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(RPPreviewViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(RPPreviewViewController, 'toString', {
	value: function () {
		return '[class RPPreviewViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'RPPreviewViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(RPPreviewViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(RPPreviewViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(RPPreviewViewController.prototype, {
		mode: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'mode');
			},
		
			set: function (_mode) {
				if (!$init) { $initialize(); }
				this.$private.mode = _mode;
				$dispatch(this.$native, 'setMode:', _mode);
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

module.exports = RPPreviewViewController;
