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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLObject.h
 * @class
 */
function MDLObject (pointer) {
	if (!(this instanceof MDLObject)) {
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
			class: 'MDLObject',
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
MDLObject.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MDLObject,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLObject, NSObject);

Object.defineProperty(MDLObject, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLObject, 'className', {
	value: 'MDLObject',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLObject.prototype, 'className', {
	value: 'MDLObject',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLObject.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLObject, 'toString', {
	value: function () {
		return '[class MDLObject]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'MDLObject',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLObject, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLObject, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MDLObject.prototype, 'setParent', {
		value: function (_parent) {
			this.$private.setParent = this.$private.setParent || [];
			this.$private.setParent.push(_parent);
			var result = $dispatch(this.$native, 'setParent:', [_parent], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MDLObject.prototype, {
		children: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'children'));
			},
		
			set: function (_children) {
				if (!$init) { $initialize(); }
				this.$private.children = _children;
				$dispatch(this.$native, 'setChildren:', _children);
			},
			enumerable: false
		},
		components: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'components'));
			},
		
			enumerable: false
		},
		instance: {
		
		
			set: function (_instance) {
				if (!$init) { $initialize(); }
				this.$private.instance = _instance;
				$dispatch(this.$native, 'setInstance:', _instance);
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
		parent: {
			get: function () {
				if (!$init) { $initialize(); }
				return new this.constructor($dispatch(this.$native, 'parent'));
			},
		
			set: function (_parent) {
				if (!$init) { $initialize(); }
				this.$private.parent = _parent;
				$dispatch(this.$native, 'setParent:', _parent);
			},
			enumerable: false
		},
		path: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'path'));
			},
		
			enumerable: false
		},
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'transform'));
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

module.exports = MDLObject;
