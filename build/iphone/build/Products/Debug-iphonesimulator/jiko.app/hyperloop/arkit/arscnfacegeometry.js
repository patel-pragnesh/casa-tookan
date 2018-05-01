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
 * ARKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ARKit.framework/Headers/ARFaceGeometry.h
 * @class
 */
function ARSCNFaceGeometry (pointer) {
	if (!(this instanceof ARSCNFaceGeometry)) {
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
			class: 'ARSCNFaceGeometry',
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
ARSCNFaceGeometry.prototype = Object.create(SCNGeometry.prototype, {
	constructor: {
		value: ARSCNFaceGeometry,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(ARSCNFaceGeometry, SCNGeometry);

Object.defineProperty(ARSCNFaceGeometry, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(ARSCNFaceGeometry, 'className', {
	value: 'ARSCNFaceGeometry',
	enumerable: false,
	writable: true
});

Object.defineProperty(ARSCNFaceGeometry.prototype, 'className', {
	value: 'ARSCNFaceGeometry',
	enumerable: false,
	writable: true
});

Object.defineProperty(ARSCNFaceGeometry.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(ARSCNFaceGeometry, 'toString', {
	value: function () {
		return '[class ARSCNFaceGeometry]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'ARSCNFaceGeometry',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(ARSCNFaceGeometry, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(ARSCNFaceGeometry, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(ARSCNFaceGeometry.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
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

module.exports = ARSCNFaceGeometry;
