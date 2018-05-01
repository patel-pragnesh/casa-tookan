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
function SCNLookAtConstraint (pointer) {
	if (!(this instanceof SCNLookAtConstraint)) {
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
			class: 'SCNLookAtConstraint',
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
SCNLookAtConstraint.prototype = Object.create(SCNConstraint.prototype, {
	constructor: {
		value: SCNLookAtConstraint,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNLookAtConstraint, SCNConstraint);

Object.defineProperty(SCNLookAtConstraint, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNLookAtConstraint, 'className', {
	value: 'SCNLookAtConstraint',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNLookAtConstraint.prototype, 'className', {
	value: 'SCNLookAtConstraint',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNLookAtConstraint.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNLookAtConstraint, 'toString', {
	value: function () {
		return '[class SCNLookAtConstraint]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.SCNNode = require('/hyperloop/scenekit/scnnode');

	$class = Hyperloop.createProxy({
		class: 'SCNLookAtConstraint',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNLookAtConstraint, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNLookAtConstraint, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNLookAtConstraint.prototype, {
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

module.exports = SCNLookAtConstraint;
