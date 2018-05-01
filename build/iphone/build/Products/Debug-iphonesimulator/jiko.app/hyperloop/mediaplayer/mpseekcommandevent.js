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


var MPRemoteCommandEvent = require('/hyperloop/mediaplayer/mpremotecommandevent');


/**
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPRemoteCommandEvent.h
 * @class
 */
function MPSeekCommandEvent (pointer) {
	if (!(this instanceof MPSeekCommandEvent)) {
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
			class: 'MPSeekCommandEvent',
			alloc: true,
			init: 'init'
		});
	}
	MPRemoteCommandEvent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSeekCommandEvent.prototype = Object.create(MPRemoteCommandEvent.prototype, {
	constructor: {
		value: MPSeekCommandEvent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSeekCommandEvent, MPRemoteCommandEvent);

Object.defineProperty(MPSeekCommandEvent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSeekCommandEvent, 'className', {
	value: 'MPSeekCommandEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSeekCommandEvent.prototype, 'className', {
	value: 'MPSeekCommandEvent',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSeekCommandEvent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSeekCommandEvent, 'toString', {
	value: function () {
		return '[class MPSeekCommandEvent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPSeekCommandEvent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSeekCommandEvent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSeekCommandEvent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPSeekCommandEvent.prototype, {
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
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

module.exports = MPSeekCommandEvent;
