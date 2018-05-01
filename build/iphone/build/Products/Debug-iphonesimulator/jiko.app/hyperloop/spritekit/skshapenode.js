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


var SKNode = require('/hyperloop/spritekit/sknode');


/**
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKShapeNode.h
 * @class
 */
function SKShapeNode (pointer) {
	if (!(this instanceof SKShapeNode)) {
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
			class: 'SKShapeNode',
			alloc: true,
			init: 'init'
		});
	}
	SKNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SKShapeNode.prototype = Object.create(SKNode.prototype, {
	constructor: {
		value: SKShapeNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKShapeNode, SKNode);

Object.defineProperty(SKShapeNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKShapeNode, 'className', {
	value: 'SKShapeNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKShapeNode.prototype, 'className', {
	value: 'SKShapeNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKShapeNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKShapeNode, 'toString', {
	value: function () {
		return '[class SKShapeNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SKShapeNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKShapeNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKShapeNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKShapeNode.prototype, {
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

module.exports = SKShapeNode;
