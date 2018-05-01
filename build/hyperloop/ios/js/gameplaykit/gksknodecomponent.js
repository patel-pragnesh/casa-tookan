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


var GKComponent = require('/hyperloop/gameplaykit/gkcomponent');


/**
 * GameplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameplayKit.framework/Headers/GKSKNodeComponent.h
 * @class
 */
function GKSKNodeComponent (pointer) {
	if (!(this instanceof GKSKNodeComponent)) {
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
			class: 'GKSKNodeComponent',
			alloc: true,
			init: 'init'
		});
	}
	GKComponent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
GKSKNodeComponent.prototype = Object.create(GKComponent.prototype, {
	constructor: {
		value: GKSKNodeComponent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKSKNodeComponent, GKComponent);

Object.defineProperty(GKSKNodeComponent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKSKNodeComponent, 'className', {
	value: 'GKSKNodeComponent',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKSKNodeComponent.prototype, 'className', {
	value: 'GKSKNodeComponent',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKSKNodeComponent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKSKNodeComponent, 'toString', {
	value: function () {
		return '[class GKSKNodeComponent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.SKNode = require('/hyperloop/spritekit/sknode');

	$class = Hyperloop.createProxy({
		class: 'GKSKNodeComponent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKSKNodeComponent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKSKNodeComponent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GKSKNodeComponent.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(GKSKNodeComponent.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(GKSKNodeComponent.prototype, 'self', {
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
	Object.defineProperties(GKSKNodeComponent.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = GKSKNodeComponent;
