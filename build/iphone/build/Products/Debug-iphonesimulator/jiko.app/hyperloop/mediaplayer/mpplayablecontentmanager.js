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
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPPlayableContentManager.h
 * @class
 */
function MPPlayableContentManager (pointer) {
	if (!(this instanceof MPPlayableContentManager)) {
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
			class: 'MPPlayableContentManager',
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
MPPlayableContentManager.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPPlayableContentManager,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPPlayableContentManager, NSObject);

Object.defineProperty(MPPlayableContentManager, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPPlayableContentManager, 'className', {
	value: 'MPPlayableContentManager',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPPlayableContentManager.prototype, 'className', {
	value: 'MPPlayableContentManager',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPPlayableContentManager.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPPlayableContentManager, 'toString', {
	value: function () {
		return '[class MPPlayableContentManager]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MPPlayableContentManagerContext = require('/hyperloop/mediaplayer/mpplayablecontentmanagercontext');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'MPPlayableContentManager',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPPlayableContentManager, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPPlayableContentManager, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPPlayableContentManager.prototype, {
		context: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MPPlayableContentManagerContext($dispatch(this.$native, 'context'));
			},
		
			enumerable: false
		},
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = MPPlayableContentManager;
