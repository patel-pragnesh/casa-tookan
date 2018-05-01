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
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKPhysicsBody.h
 * @class
 */
function SKPhysicsBody (pointer) {
	if (!(this instanceof SKPhysicsBody)) {
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
			class: 'SKPhysicsBody',
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
SKPhysicsBody.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SKPhysicsBody,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKPhysicsBody, NSObject);

Object.defineProperty(SKPhysicsBody, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKPhysicsBody, 'className', {
	value: 'SKPhysicsBody',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKPhysicsBody.prototype, 'className', {
	value: 'SKPhysicsBody',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKPhysicsBody.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKPhysicsBody, 'toString', {
	value: function () {
		return '[class SKPhysicsBody]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.SKNode = require('/hyperloop/spritekit/sknode');

	$class = Hyperloop.createProxy({
		class: 'SKPhysicsBody',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKPhysicsBody, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKPhysicsBody, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKPhysicsBody.prototype, {
		density: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'density');
			},
		
			enumerable: false
		},
		node: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SKNode($dispatch(this.$native, 'node'));
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

module.exports = SKPhysicsBody;
