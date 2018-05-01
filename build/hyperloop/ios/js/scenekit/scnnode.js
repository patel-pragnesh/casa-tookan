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


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * SceneKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SceneKit.framework/Headers/SCNNode.h
 * @class
 */
function SCNNode (pointer) {
	if (!(this instanceof SCNNode)) {
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
			class: 'SCNNode',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SCNNode.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SCNNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNNode, NSObject);

Object.defineProperty(SCNNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNNode, 'className', {
	value: 'SCNNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNNode.prototype, 'className', {
	value: 'SCNNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNNode, 'toString', {
	value: function () {
		return '[class SCNNode]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(SCNNode, 'node', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'node', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.GKEntity = require('/hyperloop/gameplaykit/gkentity');
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.SCNVector3 = require('/hyperloop/scenekit/scnvector3');
	$imports.SCNMatrix4 = require('/hyperloop/scenekit/scnmatrix4');

	$class = Hyperloop.createProxy({
		class: 'SCNNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SCNNode.prototype, 'clone', {
		value: function () {
			var result = $dispatch(this.$native, 'clone', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SCNNode.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SCNNode.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SCNNode.prototype, 'self', {
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
	Object.defineProperties(SCNNode.prototype, {
		entity: {
		
		
			set: function (_entity) {
				if (!$init) { $initialize(); }
				this.$private.entity = _entity;
				$dispatch(this.$native, 'setEntity:', _entity);
			},
			enumerable: false
		},
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			set: function (_name) {
				if (!$init) { $initialize(); }
				this.$private.name = _name;
				$dispatch(this.$native, 'setName:', _name);
			},
			enumerable: false
		},
		opacity: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'opacity');
			},
		
			set: function (_opacity) {
				if (!$init) { $initialize(); }
				this.$private.opacity = _opacity;
				$dispatch(this.$native, 'setOpacity:', _opacity);
			},
			enumerable: false
		},
		scale: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SCNVector3($dispatch(this.$native, 'scale'));
			},
		
			enumerable: false
		},
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SCNMatrix4($dispatch(this.$native, 'transform'));
			},
		
			set: function (_transform) {
				if (!$init) { $initialize(); }
				this.$private.transform = _transform;
				$dispatch(this.$native, 'setTransform:', _transform);
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

module.exports = SCNNode;
