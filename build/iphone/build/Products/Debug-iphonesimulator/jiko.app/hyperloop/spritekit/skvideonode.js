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
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKVideoNode.h
 * @class
 */
function SKVideoNode (pointer) {
	if (!(this instanceof SKVideoNode)) {
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
			class: 'SKVideoNode',
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
SKVideoNode.prototype = Object.create(SKNode.prototype, {
	constructor: {
		value: SKVideoNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKVideoNode, SKNode);

Object.defineProperty(SKVideoNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKVideoNode, 'className', {
	value: 'SKVideoNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKVideoNode.prototype, 'className', {
	value: 'SKVideoNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKVideoNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKVideoNode, 'toString', {
	value: function () {
		return '[class SKVideoNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGSize = require('/hyperloop/coregraphics/cgsize');

	$class = Hyperloop.createProxy({
		class: 'SKVideoNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKVideoNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKVideoNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SKVideoNode.prototype, 'initWithURL', {
		value: function (_url) {
			var result = $dispatch(this.$native, 'initWithURL:', [_url], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithURL = instance.$private.initWithURL || [];
			instance.$private.initWithURL.push(_url);
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SKVideoNode.prototype, 'pause', {
		value: function () {
			var result = $dispatch(this.$native, 'pause', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(SKVideoNode.prototype, {
		size: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGSize($dispatch(this.$native, 'size'));
			},
		
			set: function (_size) {
				if (!$init) { $initialize(); }
				this.$private.size = _size;
				$dispatch(this.$native, 'setSize:', _size);
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

module.exports = SKVideoNode;
