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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVVideoCompositing.h
 * @class
 */
function AVVideoCompositionRenderContext (pointer) {
	if (!(this instanceof AVVideoCompositionRenderContext)) {
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
			class: 'AVVideoCompositionRenderContext',
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
AVVideoCompositionRenderContext.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVVideoCompositionRenderContext,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVVideoCompositionRenderContext, NSObject);

Object.defineProperty(AVVideoCompositionRenderContext, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVVideoCompositionRenderContext, 'className', {
	value: 'AVVideoCompositionRenderContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVVideoCompositionRenderContext.prototype, 'className', {
	value: 'AVVideoCompositionRenderContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVVideoCompositionRenderContext.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVVideoCompositionRenderContext, 'toString', {
	value: function () {
		return '[class AVVideoCompositionRenderContext]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGSize = require('/hyperloop/coregraphics/cgsize');

	$class = Hyperloop.createProxy({
		class: 'AVVideoCompositionRenderContext',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVVideoCompositionRenderContext, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVVideoCompositionRenderContext, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVVideoCompositionRenderContext.prototype, {
		size: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGSize($dispatch(this.$native, 'size'));
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

module.exports = AVVideoCompositionRenderContext;
