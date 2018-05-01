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
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPPlayableContentManagerContext.h
 * @class
 */
function MPPlayableContentManagerContext (pointer) {
	if (!(this instanceof MPPlayableContentManagerContext)) {
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
			class: 'MPPlayableContentManagerContext',
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
MPPlayableContentManagerContext.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPPlayableContentManagerContext,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPPlayableContentManagerContext, NSObject);

Object.defineProperty(MPPlayableContentManagerContext, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPPlayableContentManagerContext, 'className', {
	value: 'MPPlayableContentManagerContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPPlayableContentManagerContext.prototype, 'className', {
	value: 'MPPlayableContentManagerContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPPlayableContentManagerContext.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPPlayableContentManagerContext, 'toString', {
	value: function () {
		return '[class MPPlayableContentManagerContext]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPPlayableContentManagerContext',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPPlayableContentManagerContext, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPPlayableContentManagerContext, '$private', {
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

module.exports = MPPlayableContentManagerContext;
