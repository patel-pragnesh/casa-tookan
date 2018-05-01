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
 * Messages//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Messages.framework/Headers/MSStickerBrowserView.h
 * @class
 */
function MSStickerBrowserView (pointer) {
	if (!(this instanceof MSStickerBrowserView)) {
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
			class: 'MSStickerBrowserView',
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
MSStickerBrowserView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: MSStickerBrowserView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MSStickerBrowserView, UIView);

Object.defineProperty(MSStickerBrowserView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MSStickerBrowserView, 'className', {
	value: 'MSStickerBrowserView',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSStickerBrowserView.prototype, 'className', {
	value: 'MSStickerBrowserView',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSStickerBrowserView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MSStickerBrowserView, 'toString', {
	value: function () {
		return '[class MSStickerBrowserView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGPoint = require('/hyperloop/coregraphics/cgpoint');

	$class = Hyperloop.createProxy({
		class: 'MSStickerBrowserView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MSStickerBrowserView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MSStickerBrowserView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MSStickerBrowserView.prototype, {
		contentOffset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGPoint($dispatch(this.$native, 'contentOffset'));
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

module.exports = MSStickerBrowserView;
