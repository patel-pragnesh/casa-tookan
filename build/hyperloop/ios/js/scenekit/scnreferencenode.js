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


var SCNNode = require('/hyperloop/scenekit/scnnode');


/**
 * SceneKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SceneKit.framework/Headers/SCNReferenceNode.h
 * @class
 */
function SCNReferenceNode (pointer) {
	if (!(this instanceof SCNReferenceNode)) {
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
			class: 'SCNReferenceNode',
			alloc: true,
			init: 'init'
		});
	}
	SCNNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SCNReferenceNode.prototype = Object.create(SCNNode.prototype, {
	constructor: {
		value: SCNReferenceNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNReferenceNode, SCNNode);

Object.defineProperty(SCNReferenceNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNReferenceNode, 'className', {
	value: 'SCNReferenceNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNReferenceNode.prototype, 'className', {
	value: 'SCNReferenceNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNReferenceNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNReferenceNode, 'toString', {
	value: function () {
		return '[class SCNReferenceNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SCNReferenceNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNReferenceNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNReferenceNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SCNReferenceNode.prototype, 'initWithURL', {
		value: function (_referenceURL) {
			var result = $dispatch(this.$native, 'initWithURL:', [_referenceURL], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithURL = instance.$private.initWithURL || [];
			instance.$private.initWithURL.push(_referenceURL);
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SCNReferenceNode.prototype, 'load', {
		value: function () {
			var result = $dispatch(this.$native, 'load', null, true);
			return result;
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

module.exports = SCNReferenceNode;
