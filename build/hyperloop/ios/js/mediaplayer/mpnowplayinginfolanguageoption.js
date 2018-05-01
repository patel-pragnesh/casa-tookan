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
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPNowPlayingInfoLanguageOption.h
 * @class
 */
function MPNowPlayingInfoLanguageOption (pointer) {
	if (!(this instanceof MPNowPlayingInfoLanguageOption)) {
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
			class: 'MPNowPlayingInfoLanguageOption',
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
MPNowPlayingInfoLanguageOption.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPNowPlayingInfoLanguageOption,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPNowPlayingInfoLanguageOption, NSObject);

Object.defineProperty(MPNowPlayingInfoLanguageOption, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPNowPlayingInfoLanguageOption, 'className', {
	value: 'MPNowPlayingInfoLanguageOption',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPNowPlayingInfoLanguageOption.prototype, 'className', {
	value: 'MPNowPlayingInfoLanguageOption',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPNowPlayingInfoLanguageOption.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPNowPlayingInfoLanguageOption, 'toString', {
	value: function () {
		return '[class MPNowPlayingInfoLanguageOption]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'MPNowPlayingInfoLanguageOption',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPNowPlayingInfoLanguageOption, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPNowPlayingInfoLanguageOption, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPNowPlayingInfoLanguageOption.prototype, {
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
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

module.exports = MPNowPlayingInfoLanguageOption;
