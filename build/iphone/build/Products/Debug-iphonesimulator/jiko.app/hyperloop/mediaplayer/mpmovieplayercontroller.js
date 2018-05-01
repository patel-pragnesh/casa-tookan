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
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPMoviePlayerController.h
 * @class
 */
function MPMoviePlayerController (pointer) {
	if (!(this instanceof MPMoviePlayerController)) {
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
			class: 'MPMoviePlayerController',
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
MPMoviePlayerController.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPMoviePlayerController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPMoviePlayerController, NSObject);

Object.defineProperty(MPMoviePlayerController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPMoviePlayerController, 'className', {
	value: 'MPMoviePlayerController',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMoviePlayerController.prototype, 'className', {
	value: 'MPMoviePlayerController',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMoviePlayerController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPMoviePlayerController, 'toString', {
	value: function () {
		return '[class MPMoviePlayerController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIView = require('/hyperloop/uikit/uiview');

	$class = Hyperloop.createProxy({
		class: 'MPMoviePlayerController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPMoviePlayerController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPMoviePlayerController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPMoviePlayerController.prototype, 'pause', {
		value: function () {
			var result = $dispatch(this.$native, 'pause', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MPMoviePlayerController.prototype, 'stop', {
		value: function () {
			var result = $dispatch(this.$native, 'stop', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MPMoviePlayerController.prototype, {
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'duration');
			},
		
			enumerable: false
		},
		view: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIView($dispatch(this.$native, 'view'));
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

module.exports = MPMoviePlayerController;
