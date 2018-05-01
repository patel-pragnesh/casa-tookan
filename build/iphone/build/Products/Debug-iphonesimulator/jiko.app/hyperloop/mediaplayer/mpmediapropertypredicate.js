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


var MPMediaPredicate = require('/hyperloop/mediaplayer/mpmediapredicate');


/**
 * MediaPlayer//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaPlayer.framework/Headers/MPMediaQuery.h
 * @class
 */
function MPMediaPropertyPredicate (pointer) {
	if (!(this instanceof MPMediaPropertyPredicate)) {
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
			class: 'MPMediaPropertyPredicate',
			alloc: true,
			init: 'init'
		});
	}
	MPMediaPredicate.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPMediaPropertyPredicate.prototype = Object.create(MPMediaPredicate.prototype, {
	constructor: {
		value: MPMediaPropertyPredicate,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPMediaPropertyPredicate, MPMediaPredicate);

Object.defineProperty(MPMediaPropertyPredicate, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPMediaPropertyPredicate, 'className', {
	value: 'MPMediaPropertyPredicate',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMediaPropertyPredicate.prototype, 'className', {
	value: 'MPMediaPropertyPredicate',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPMediaPropertyPredicate.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPMediaPropertyPredicate, 'toString', {
	value: function () {
		return '[class MPMediaPropertyPredicate]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'MPMediaPropertyPredicate',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPMediaPropertyPredicate, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPMediaPropertyPredicate, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MPMediaPropertyPredicate.prototype, {
		property: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'property'));
			},
		
			enumerable: false
		},
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'value'));
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

module.exports = MPMediaPropertyPredicate;
