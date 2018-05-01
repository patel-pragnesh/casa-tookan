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
function SCNSliderConstraint (pointer) {
	if (!(this instanceof SCNSliderConstraint)) {
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
			class: 'SCNSliderConstraint',
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
SCNSliderConstraint.prototype = Object.create(SCNConstraint.prototype, {
	constructor: {
		value: SCNSliderConstraint,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNSliderConstraint, SCNConstraint);

Object.defineProperty(SCNSliderConstraint, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNSliderConstraint, 'className', {
	value: 'SCNSliderConstraint',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNSliderConstraint.prototype, 'className', {
	value: 'SCNSliderConstraint',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNSliderConstraint.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNSliderConstraint, 'toString', {
	value: function () {
		return '[class SCNSliderConstraint]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.SCNVector3 = require('/hyperloop/scenekit/scnvector3');

	$class = Hyperloop.createProxy({
		class: 'SCNSliderConstraint',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNSliderConstraint, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNSliderConstraint, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNSliderConstraint.prototype, {
		offset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SCNVector3($dispatch(this.$native, 'offset'));
			},
		
			set: function (_offset) {
				if (!$init) { $initialize(); }
				this.$private.offset = _offset;
				$dispatch(this.$native, 'setOffset:', _offset);
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

module.exports = SCNSliderConstraint;
