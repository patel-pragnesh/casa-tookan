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
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPMediaPlaylist.h
 * @class
 */
function MPMediaPlaylistCreationMetadata (pointer) {
	if (!(this instanceof MPMediaPlaylistCreationMetadata)) {
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
			class: 'MPMediaPlaylistCreationMetadata',
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
MPMediaPlaylistCreationMetadata.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPMediaPlaylistCreationMetadata,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPMediaPlaylistCreationMetadata, NSObject);

Object.defineProperty(MPMediaPlaylistCreationMetadata, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPMediaPlaylistCreationMetadata, 'className', {
	value: 'MPMediaPlaylistCreationMetadata',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMediaPlaylistCreationMetadata.prototype, 'className', {
	value: 'MPMediaPlaylistCreationMetadata',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMediaPlaylistCreationMetadata.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPMediaPlaylistCreationMetadata, 'toString', {
	value: function () {
		return '[class MPMediaPlaylistCreationMetadata]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'MPMediaPlaylistCreationMetadata',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPMediaPlaylistCreationMetadata, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPMediaPlaylistCreationMetadata, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPMediaPlaylistCreationMetadata.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSObject(result);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MPMediaPlaylistCreationMetadata.prototype, {
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
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

module.exports = MPMediaPlaylistCreationMetadata;
