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


var MPMusicPlayerQueueDescriptor = require('/hyperloop/mediaplayer/mpmusicplayerqueuedescriptor');


/**
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPMusicPlayerQueueDescriptor.h
 * @class
 */
function MPMusicPlayerMediaItemQueueDescriptor (pointer) {
	if (!(this instanceof MPMusicPlayerMediaItemQueueDescriptor)) {
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
			class: 'MPMusicPlayerMediaItemQueueDescriptor',
			alloc: true,
			init: 'init'
		});
	}
	MPMusicPlayerQueueDescriptor.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPMusicPlayerMediaItemQueueDescriptor.prototype = Object.create(MPMusicPlayerQueueDescriptor.prototype, {
	constructor: {
		value: MPMusicPlayerMediaItemQueueDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPMusicPlayerMediaItemQueueDescriptor, MPMusicPlayerQueueDescriptor);

Object.defineProperty(MPMusicPlayerMediaItemQueueDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPMusicPlayerMediaItemQueueDescriptor, 'className', {
	value: 'MPMusicPlayerMediaItemQueueDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMusicPlayerMediaItemQueueDescriptor.prototype, 'className', {
	value: 'MPMusicPlayerMediaItemQueueDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMusicPlayerMediaItemQueueDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPMusicPlayerMediaItemQueueDescriptor, 'toString', {
	value: function () {
		return '[class MPMusicPlayerMediaItemQueueDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MPMediaQuery = require('/hyperloop/mediaplayer/mpmediaquery');

	$class = Hyperloop.createProxy({
		class: 'MPMusicPlayerMediaItemQueueDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPMusicPlayerMediaItemQueueDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPMusicPlayerMediaItemQueueDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPMusicPlayerMediaItemQueueDescriptor.prototype, {
		query: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MPMediaQuery($dispatch(this.$native, 'query'));
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

module.exports = MPMusicPlayerMediaItemQueueDescriptor;
