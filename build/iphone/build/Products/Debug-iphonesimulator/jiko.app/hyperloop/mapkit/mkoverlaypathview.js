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


var MKOverlayView = require('/hyperloop/mapkit/mkoverlayview');


/**
 * MapKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKOverlayPathView.h
 * @class
 */
function MKOverlayPathView (pointer) {
	if (!(this instanceof MKOverlayPathView)) {
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
			class: 'MKOverlayPathView',
			alloc: true,
			init: 'init'
		});
	}
	MKOverlayView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MKOverlayPathView.prototype = Object.create(MKOverlayView.prototype, {
	constructor: {
		value: MKOverlayPathView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MKOverlayPathView, MKOverlayView);

Object.defineProperty(MKOverlayPathView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MKOverlayPathView, 'className', {
	value: 'MKOverlayPathView',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKOverlayPathView.prototype, 'className', {
	value: 'MKOverlayPathView',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKOverlayPathView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MKOverlayPathView, 'toString', {
	value: function () {
		return '[class MKOverlayPathView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MKOverlayPathView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MKOverlayPathView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MKOverlayPathView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MKOverlayPathView.prototype, {
		path: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'path');
			},
		
			set: function (_path) {
				if (!$init) { $initialize(); }
				this.$private.path = _path;
				$dispatch(this.$native, 'setPath:', _path);
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

module.exports = MKOverlayPathView;
