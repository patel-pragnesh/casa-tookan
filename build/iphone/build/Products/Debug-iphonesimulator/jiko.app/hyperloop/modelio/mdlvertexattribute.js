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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLVertexDescriptor.h
 * @class
 */
function MDLVertexAttribute (pointer) {
	if (!(this instanceof MDLVertexAttribute)) {
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
			class: 'MDLVertexAttribute',
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
MDLVertexAttribute.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MDLVertexAttribute,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLVertexAttribute, NSObject);

Object.defineProperty(MDLVertexAttribute, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLVertexAttribute, 'className', {
	value: 'MDLVertexAttribute',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLVertexAttribute.prototype, 'className', {
	value: 'MDLVertexAttribute',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLVertexAttribute.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLVertexAttribute, 'toString', {
	value: function () {
		return '[class MDLVertexAttribute]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'MDLVertexAttribute',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLVertexAttribute, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLVertexAttribute, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MDLVertexAttribute.prototype, {
		format: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'format');
			},
		
			set: function (_format) {
				if (!$init) { $initialize(); }
				this.$private.format = _format;
				$dispatch(this.$native, 'setFormat:', _format);
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
		offset: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'offset');
			},
		
			set: function (_offset) {
				if (!$init) { $initialize(); }
				this.$private.offset = _offset;
				$dispatch(this.$native, 'setOffset:', _offset);
			},
			enumerable: false
		},
		time: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'time');
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

module.exports = MDLVertexAttribute;
