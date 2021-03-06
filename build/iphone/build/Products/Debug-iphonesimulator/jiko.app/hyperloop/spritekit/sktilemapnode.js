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
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKTileMapNode.h
 * @class
 */
function SKTileMapNode (pointer) {
	if (!(this instanceof SKTileMapNode)) {
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
			class: 'SKTileMapNode',
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
SKTileMapNode.prototype = Object.create(SKNode.prototype, {
	constructor: {
		value: SKTileMapNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKTileMapNode, SKNode);

Object.defineProperty(SKTileMapNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKTileMapNode, 'className', {
	value: 'SKTileMapNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKTileMapNode.prototype, 'className', {
	value: 'SKTileMapNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKTileMapNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKTileMapNode, 'toString', {
	value: function () {
		return '[class SKTileMapNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');

	$class = Hyperloop.createProxy({
		class: 'SKTileMapNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKTileMapNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKTileMapNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKTileMapNode.prototype, {
		color: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIColor($dispatch(this.$native, 'color'));
			},
		
			set: function (_color) {
				if (!$init) { $initialize(); }
				this.$private.color = _color;
				$dispatch(this.$native, 'setColor:', _color);
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

module.exports = SKTileMapNode;
