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
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKFieldNode.h
 * @class
 */
function SKFieldNode (pointer) {
	if (!(this instanceof SKFieldNode)) {
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
			class: 'SKFieldNode',
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
SKFieldNode.prototype = Object.create(SKNode.prototype, {
	constructor: {
		value: SKFieldNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKFieldNode, SKNode);

Object.defineProperty(SKFieldNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKFieldNode, 'className', {
	value: 'SKFieldNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKFieldNode.prototype, 'className', {
	value: 'SKFieldNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKFieldNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKFieldNode, 'toString', {
	value: function () {
		return '[class SKFieldNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SKFieldNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKFieldNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKFieldNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKFieldNode.prototype, {
		direction: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'direction');
			},
		
			enumerable: false
		},
		enabled: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'enabled');
			},
		
			set: function (_enabled) {
				if (!$init) { $initialize(); }
				this.$private.enabled = _enabled;
				$dispatch(this.$native, 'setEnabled:', _enabled);
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

module.exports = SKFieldNode;
