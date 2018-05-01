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
function SCNFloor (pointer) {
	if (!(this instanceof SCNFloor)) {
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
			class: 'SCNFloor',
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
SCNFloor.prototype = Object.create(SCNGeometry.prototype, {
	constructor: {
		value: SCNFloor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNFloor, SCNGeometry);

Object.defineProperty(SCNFloor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNFloor, 'className', {
	value: 'SCNFloor',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNFloor.prototype, 'className', {
	value: 'SCNFloor',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNFloor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNFloor, 'toString', {
	value: function () {
		return '[class SCNFloor]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(SCNFloor, 'floor', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'floor', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SCNFloor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNFloor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNFloor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SCNFloor.prototype, 'setLength', {
		value: function (_length) {
			this.$private.setLength = this.$private.setLength || [];
			this.$private.setLength.push(_length);
			var result = $dispatch(this.$native, 'setLength:', [_length], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(SCNFloor.prototype, {
		length: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'length');
			},
		
			set: function (_length) {
				if (!$init) { $initialize(); }
				this.$private.length = _length;
				$dispatch(this.$native, 'setLength:', _length);
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

module.exports = SCNFloor;
