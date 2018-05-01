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
 * GameplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameplayKit.framework/Headers/GKObstacle.h
 * @class
 */
function GKObstacle (pointer) {
	if (!(this instanceof GKObstacle)) {
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
			class: 'GKObstacle',
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
GKObstacle.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKObstacle,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKObstacle, NSObject);

Object.defineProperty(GKObstacle, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKObstacle, 'className', {
	value: 'GKObstacle',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKObstacle.prototype, 'className', {
	value: 'GKObstacle',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKObstacle.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKObstacle, 'toString', {
	value: function () {
		return '[class GKObstacle]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'GKObstacle',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKObstacle, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKObstacle, '$private', {
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

module.exports = GKObstacle;