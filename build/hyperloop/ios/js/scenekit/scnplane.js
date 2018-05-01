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
function SCNPlane (pointer) {
	if (!(this instanceof SCNPlane)) {
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
			class: 'SCNPlane',
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
SCNPlane.prototype = Object.create(SCNGeometry.prototype, {
	constructor: {
		value: SCNPlane,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNPlane, SCNGeometry);

Object.defineProperty(SCNPlane, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNPlane, 'className', {
	value: 'SCNPlane',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNPlane.prototype, 'className', {
	value: 'SCNPlane',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNPlane.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNPlane, 'toString', {
	value: function () {
		return '[class SCNPlane]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SCNPlane',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNPlane, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNPlane, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNPlane.prototype, {
		height: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'height');
			},
		
			set: function (_height) {
				if (!$init) { $initialize(); }
				this.$private.height = _height;
				$dispatch(this.$native, 'setHeight:', _height);
			},
			enumerable: false
		},
		width: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'width');
			},
		
			set: function (_width) {
				if (!$init) { $initialize(); }
				this.$private.width = _width;
				$dispatch(this.$native, 'setWidth:', _width);
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

module.exports = SCNPlane;
