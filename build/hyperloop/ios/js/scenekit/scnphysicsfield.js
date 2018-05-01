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
 * SceneKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SceneKit.framework/Headers/SCNPhysicsField.h
 * @class
 */
function SCNPhysicsField (pointer) {
	if (!(this instanceof SCNPhysicsField)) {
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
			class: 'SCNPhysicsField',
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
SCNPhysicsField.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SCNPhysicsField,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNPhysicsField, NSObject);

Object.defineProperty(SCNPhysicsField, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNPhysicsField, 'className', {
	value: 'SCNPhysicsField',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNPhysicsField.prototype, 'className', {
	value: 'SCNPhysicsField',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNPhysicsField.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNPhysicsField, 'toString', {
	value: function () {
		return '[class SCNPhysicsField]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.SCNVector3 = require('/hyperloop/scenekit/scnvector3');

	$class = Hyperloop.createProxy({
		class: 'SCNPhysicsField',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNPhysicsField, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNPhysicsField, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNPhysicsField.prototype, {
		direction: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SCNVector3($dispatch(this.$native, 'direction'));
			},
		
			enumerable: false
		},
		offset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SCNVector3($dispatch(this.$native, 'offset'));
			},
		
			set: function (_offset) {
				if (!$init) { $initialize(); }
				this.$private.offset = _offset;
				$dispatch(this.$native, 'setOffset:', _offset);
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

module.exports = SCNPhysicsField;
