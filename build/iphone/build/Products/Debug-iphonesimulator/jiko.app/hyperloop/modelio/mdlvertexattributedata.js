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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLMesh.h
 * @class
 */
function MDLVertexAttributeData (pointer) {
	if (!(this instanceof MDLVertexAttributeData)) {
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
			class: 'MDLVertexAttributeData',
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
MDLVertexAttributeData.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MDLVertexAttributeData,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLVertexAttributeData, NSObject);

Object.defineProperty(MDLVertexAttributeData, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLVertexAttributeData, 'className', {
	value: 'MDLVertexAttributeData',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLVertexAttributeData.prototype, 'className', {
	value: 'MDLVertexAttributeData',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLVertexAttributeData.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLVertexAttributeData, 'toString', {
	value: function () {
		return '[class MDLVertexAttributeData]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MDLMeshBufferMap = require('/hyperloop/modelio/mdlmeshbuffermap');

	$class = Hyperloop.createProxy({
		class: 'MDLVertexAttributeData',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLVertexAttributeData, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLVertexAttributeData, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MDLVertexAttributeData.prototype, {
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
		map: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MDLMeshBufferMap($dispatch(this.$native, 'map'));
			},
		
			set: function (_map) {
				if (!$init) { $initialize(); }
				this.$private.map = _map;
				$dispatch(this.$native, 'setMap:', _map);
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

module.exports = MDLVertexAttributeData;
