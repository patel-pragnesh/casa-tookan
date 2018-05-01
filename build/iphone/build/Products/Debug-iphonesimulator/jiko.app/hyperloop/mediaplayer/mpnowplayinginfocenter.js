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
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPNowPlayingInfoCenter.h
 * @class
 */
function MPNowPlayingInfoCenter (pointer) {
	if (!(this instanceof MPNowPlayingInfoCenter)) {
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
			class: 'MPNowPlayingInfoCenter',
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
MPNowPlayingInfoCenter.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPNowPlayingInfoCenter,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPNowPlayingInfoCenter, NSObject);

Object.defineProperty(MPNowPlayingInfoCenter, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPNowPlayingInfoCenter, 'className', {
	value: 'MPNowPlayingInfoCenter',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPNowPlayingInfoCenter.prototype, 'className', {
	value: 'MPNowPlayingInfoCenter',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPNowPlayingInfoCenter.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPNowPlayingInfoCenter, 'toString', {
	value: function () {
		return '[class MPNowPlayingInfoCenter]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPNowPlayingInfoCenter',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPNowPlayingInfoCenter, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPNowPlayingInfoCenter, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPNowPlayingInfoCenter.prototype, 'init', {
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

module.exports = MPNowPlayingInfoCenter;
