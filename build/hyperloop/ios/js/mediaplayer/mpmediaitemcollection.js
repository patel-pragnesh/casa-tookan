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


var MPMediaEntity = require('/hyperloop/mediaplayer/mpmediaentity');


/**
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPMediaItemCollection.h
 * @class
 */
function MPMediaItemCollection (pointer) {
	if (!(this instanceof MPMediaItemCollection)) {
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
			class: 'MPMediaItemCollection',
			alloc: true,
			init: 'init'
		});
	}
	MPMediaEntity.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPMediaItemCollection.prototype = Object.create(MPMediaEntity.prototype, {
	constructor: {
		value: MPMediaItemCollection,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPMediaItemCollection, MPMediaEntity);

Object.defineProperty(MPMediaItemCollection, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPMediaItemCollection, 'className', {
	value: 'MPMediaItemCollection',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMediaItemCollection.prototype, 'className', {
	value: 'MPMediaItemCollection',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMediaItemCollection.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPMediaItemCollection, 'toString', {
	value: function () {
		return '[class MPMediaItemCollection]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MPMediaItemCollection',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPMediaItemCollection, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPMediaItemCollection, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPMediaItemCollection.prototype, {
		count: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'count');
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

module.exports = MPMediaItemCollection;
