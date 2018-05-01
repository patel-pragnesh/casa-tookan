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


var SCNGeometry = require('/hyperloop/scenekit/scngeometry');


/**
 * SceneKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SceneKit.framework/Headers/SCNParametricGeometry.h
 * @class
 */
function SCNShape (pointer) {
	if (!(this instanceof SCNShape)) {
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
			class: 'SCNShape',
			alloc: true,
			init: 'init'
		});
	}
	SCNGeometry.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SCNShape.prototype = Object.create(SCNGeometry.prototype, {
	constructor: {
		value: SCNShape,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNShape, SCNGeometry);

Object.defineProperty(SCNShape, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNShape, 'className', {
	value: 'SCNShape',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNShape.prototype, 'className', {
	value: 'SCNShape',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNShape.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNShape, 'toString', {
	value: function () {
		return '[class SCNShape]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIBezierPath = require('/hyperloop/uikit/uibezierpath');

	$class = Hyperloop.createProxy({
		class: 'SCNShape',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNShape, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNShape, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNShape.prototype, {
		path: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIBezierPath($dispatch(this.$native, 'path'));
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

module.exports = SCNShape;
