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


var SCNConstraint = require('/hyperloop/scenekit/scnconstraint');


/**
 * SceneKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SceneKit.framework/Headers/SCNConstraint.h
 * @class
 */
function SCNDistanceConstraint (pointer) {
	if (!(this instanceof SCNDistanceConstraint)) {
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
			class: 'SCNDistanceConstraint',
			alloc: true,
			init: 'init'
		});
	}
	SCNConstraint.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SCNDistanceConstraint.prototype = Object.create(SCNConstraint.prototype, {
	constructor: {
		value: SCNDistanceConstraint,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNDistanceConstraint, SCNConstraint);

Object.defineProperty(SCNDistanceConstraint, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNDistanceConstraint, 'className', {
	value: 'SCNDistanceConstraint',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNDistanceConstraint.prototype, 'className', {
	value: 'SCNDistanceConstraint',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNDistanceConstraint.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNDistanceConstraint, 'toString', {
	value: function () {
		return '[class SCNDistanceConstraint]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.SCNNode = require('/hyperloop/scenekit/scnnode');

	$class = Hyperloop.createProxy({
		class: 'SCNDistanceConstraint',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNDistanceConstraint, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNDistanceConstraint, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNDistanceConstraint.prototype, {
		target: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SCNNode($dispatch(this.$native, 'target'));
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

module.exports = SCNDistanceConstraint;
