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
 * SceneKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SceneKit.framework/Headers/SCNPhysicsBehavior.h
 * @class
 */
function SCNPhysicsVehicleWheel (pointer) {
	if (!(this instanceof SCNPhysicsVehicleWheel)) {
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
			class: 'SCNPhysicsVehicleWheel',
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
SCNPhysicsVehicleWheel.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SCNPhysicsVehicleWheel,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNPhysicsVehicleWheel, NSObject);

Object.defineProperty(SCNPhysicsVehicleWheel, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNPhysicsVehicleWheel, 'className', {
	value: 'SCNPhysicsVehicleWheel',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNPhysicsVehicleWheel.prototype, 'className', {
	value: 'SCNPhysicsVehicleWheel',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNPhysicsVehicleWheel.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNPhysicsVehicleWheel, 'toString', {
	value: function () {
		return '[class SCNPhysicsVehicleWheel]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.SCNNode = require('/hyperloop/scenekit/scnnode');

	$class = Hyperloop.createProxy({
		class: 'SCNPhysicsVehicleWheel',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNPhysicsVehicleWheel, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNPhysicsVehicleWheel, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNPhysicsVehicleWheel.prototype, {
		node: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SCNNode($dispatch(this.$native, 'node'));
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

module.exports = SCNPhysicsVehicleWheel;
