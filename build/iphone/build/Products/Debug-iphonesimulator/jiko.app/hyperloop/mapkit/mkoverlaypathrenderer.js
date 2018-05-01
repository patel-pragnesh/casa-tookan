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


var MKOverlayRenderer = require('/hyperloop/mapkit/mkoverlayrenderer');


/**
 * MapKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKOverlayPathRenderer.h
 * @class
 */
function MKOverlayPathRenderer (pointer) {
	if (!(this instanceof MKOverlayPathRenderer)) {
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
			class: 'MKOverlayPathRenderer',
			alloc: true,
			init: 'init'
		});
	}
	MKOverlayRenderer.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MKOverlayPathRenderer.prototype = Object.create(MKOverlayRenderer.prototype, {
	constructor: {
		value: MKOverlayPathRenderer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MKOverlayPathRenderer, MKOverlayRenderer);

Object.defineProperty(MKOverlayPathRenderer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MKOverlayPathRenderer, 'className', {
	value: 'MKOverlayPathRenderer',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKOverlayPathRenderer.prototype, 'className', {
	value: 'MKOverlayPathRenderer',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKOverlayPathRenderer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MKOverlayPathRenderer, 'toString', {
	value: function () {
		return '[class MKOverlayPathRenderer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MKOverlayPathRenderer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MKOverlayPathRenderer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MKOverlayPathRenderer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MKOverlayPathRenderer.prototype, {
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

module.exports = MKOverlayPathRenderer;
