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
 * QuickLook//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuickLook.framework/Headers/QLThumbnailReply.h
 * @class
 */
function QLThumbnailReply (pointer) {
	if (!(this instanceof QLThumbnailReply)) {
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
			class: 'QLThumbnailReply',
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
QLThumbnailReply.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: QLThumbnailReply,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(QLThumbnailReply, NSObject);

Object.defineProperty(QLThumbnailReply, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(QLThumbnailReply, 'className', {
	value: 'QLThumbnailReply',
	enumerable: false,
	writable: true
});

Object.defineProperty(QLThumbnailReply.prototype, 'className', {
	value: 'QLThumbnailReply',
	enumerable: false,
	writable: true
});

Object.defineProperty(QLThumbnailReply.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(QLThumbnailReply, 'toString', {
	value: function () {
		return '[class QLThumbnailReply]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'QLThumbnailReply',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(QLThumbnailReply, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(QLThumbnailReply, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(QLThumbnailReply.prototype, 'init', {
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

module.exports = QLThumbnailReply;
