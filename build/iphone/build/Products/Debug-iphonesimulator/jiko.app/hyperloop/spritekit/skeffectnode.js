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
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKEffectNode.h
 * @class
 */
function SKEffectNode (pointer) {
	if (!(this instanceof SKEffectNode)) {
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
			class: 'SKEffectNode',
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
SKEffectNode.prototype = Object.create(SKNode.prototype, {
	constructor: {
		value: SKEffectNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKEffectNode, SKNode);

Object.defineProperty(SKEffectNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKEffectNode, 'className', {
	value: 'SKEffectNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKEffectNode.prototype, 'className', {
	value: 'SKEffectNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKEffectNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKEffectNode, 'toString', {
	value: function () {
		return '[class SKEffectNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CIFilter = require('/hyperloop/coreimage/cifilter');

	$class = Hyperloop.createProxy({
		class: 'SKEffectNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKEffectNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKEffectNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SKEffectNode.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SKEffectNode.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SKEffectNode.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(SKEffectNode.prototype, {
		filter: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CIFilter($dispatch(this.$native, 'filter'));
			},
		
			set: function (_filter) {
				if (!$init) { $initialize(); }
				this.$private.filter = _filter;
				$dispatch(this.$native, 'setFilter:', _filter);
			},
			enumerable: false
		},
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = SKEffectNode;
