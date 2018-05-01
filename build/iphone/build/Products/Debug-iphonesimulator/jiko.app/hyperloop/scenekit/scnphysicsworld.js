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
 * SceneKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SceneKit.framework/Headers/SCNPhysicsWorld.h
 * @class
 */
function SCNPhysicsWorld (pointer) {
	if (!(this instanceof SCNPhysicsWorld)) {
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
			class: 'SCNPhysicsWorld',
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
SCNPhysicsWorld.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SCNPhysicsWorld,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNPhysicsWorld, NSObject);

Object.defineProperty(SCNPhysicsWorld, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNPhysicsWorld, 'className', {
	value: 'SCNPhysicsWorld',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNPhysicsWorld.prototype, 'className', {
	value: 'SCNPhysicsWorld',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNPhysicsWorld.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNPhysicsWorld, 'toString', {
	value: function () {
		return '[class SCNPhysicsWorld]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SCNPhysicsWorld',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNPhysicsWorld, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNPhysicsWorld, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNPhysicsWorld.prototype, {
		speed: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'speed');
			},
		
			set: function (_speed) {
				if (!$init) { $initialize(); }
				this.$private.speed = _speed;
				$dispatch(this.$native, 'setSpeed:', _speed);
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

module.exports = SCNPhysicsWorld;
