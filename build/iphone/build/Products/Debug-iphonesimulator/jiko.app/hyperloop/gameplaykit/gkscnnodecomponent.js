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
 * GameplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameplayKit.framework/Headers/GKSCNNodeComponent.h
 * @class
 */
function GKSCNNodeComponent (pointer) {
	if (!(this instanceof GKSCNNodeComponent)) {
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
			class: 'GKSCNNodeComponent',
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
GKSCNNodeComponent.prototype = Object.create(GKComponent.prototype, {
	constructor: {
		value: GKSCNNodeComponent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKSCNNodeComponent, GKComponent);

Object.defineProperty(GKSCNNodeComponent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKSCNNodeComponent, 'className', {
	value: 'GKSCNNodeComponent',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKSCNNodeComponent.prototype, 'className', {
	value: 'GKSCNNodeComponent',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKSCNNodeComponent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKSCNNodeComponent, 'toString', {
	value: function () {
		return '[class GKSCNNodeComponent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.SCNNode = require('/hyperloop/scenekit/scnnode');

	$class = Hyperloop.createProxy({
		class: 'GKSCNNodeComponent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKSCNNodeComponent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKSCNNodeComponent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GKSCNNodeComponent.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(GKSCNNodeComponent.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(GKSCNNodeComponent.prototype, 'self', {
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
	Object.defineProperties(GKSCNNodeComponent.prototype, {
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

module.exports = GKSCNNodeComponent;
