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
 * GameplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameplayKit.framework/Headers/GKComponent.h
 * @class
 */
function GKComponent (pointer) {
	if (!(this instanceof GKComponent)) {
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
			class: 'GKComponent',
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
GKComponent.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKComponent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKComponent, NSObject);

Object.defineProperty(GKComponent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKComponent, 'className', {
	value: 'GKComponent',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKComponent.prototype, 'className', {
	value: 'GKComponent',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKComponent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKComponent, 'toString', {
	value: function () {
		return '[class GKComponent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.GKEntity = require('/hyperloop/gameplaykit/gkentity');

	$class = Hyperloop.createProxy({
		class: 'GKComponent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKComponent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKComponent, '$private', {
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

module.exports = GKComponent;