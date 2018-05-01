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
 * MapKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKOverlayRenderer.h
 * @class
 */
function MKOverlayRenderer (pointer) {
	if (!(this instanceof MKOverlayRenderer)) {
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
			class: 'MKOverlayRenderer',
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
MKOverlayRenderer.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MKOverlayRenderer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MKOverlayRenderer, NSObject);

Object.defineProperty(MKOverlayRenderer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MKOverlayRenderer, 'className', {
	value: 'MKOverlayRenderer',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKOverlayRenderer.prototype, 'className', {
	value: 'MKOverlayRenderer',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKOverlayRenderer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MKOverlayRenderer, 'toString', {
	value: function () {
		return '[class MKOverlayRenderer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MKOverlayRenderer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MKOverlayRenderer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MKOverlayRenderer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = MKOverlayRenderer;
