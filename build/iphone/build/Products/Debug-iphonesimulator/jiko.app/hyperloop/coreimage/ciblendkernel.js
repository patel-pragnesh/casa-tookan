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


var CIColorKernel = require('/hyperloop/coreimage/cicolorkernel');


/**
 * CoreImage//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreImage.framework/Headers/CIKernel.h
 * @class
 */
function CIBlendKernel (pointer) {
	if (!(this instanceof CIBlendKernel)) {
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
			class: 'CIBlendKernel',
			alloc: true,
			init: 'init'
		});
	}
	CIColorKernel.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CIBlendKernel.prototype = Object.create(CIColorKernel.prototype, {
	constructor: {
		value: CIBlendKernel,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CIBlendKernel, CIColorKernel);

Object.defineProperty(CIBlendKernel, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CIBlendKernel, 'className', {
	value: 'CIBlendKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIBlendKernel.prototype, 'className', {
	value: 'CIBlendKernel',
	enumerable: false,
	writable: true
});

Object.defineProperty(CIBlendKernel.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CIBlendKernel, 'toString', {
	value: function () {
		return '[class CIBlendKernel]';
	},
	enumerable: false,
	writable: true
});

// class properties
Object.defineProperties(CIBlendKernel, {
	clear: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'clear', null, true));
			},
	
		enumerable: false
	},
	color: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'color', null, true));
			},
	
		enumerable: false
	},
	destination: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'destination', null, true));
			},
	
		enumerable: false
	},
	difference: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'difference', null, true));
			},
	
		enumerable: false
	},
	divide: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'divide', null, true));
			},
	
		enumerable: false
	},
	multiply: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'multiply', null, true));
			},
	
		enumerable: false
	},
	screen: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'screen', null, true));
			},
	
		enumerable: false
	},
	source: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'source', null, true));
			},
	
		enumerable: false
	},
	subtract: {
		get: function () {
				if (!$init) { $initialize(); }
				return new this($dispatch($class, 'subtract', null, true));
			},
	
		enumerable: false
	}
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CIBlendKernel',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CIBlendKernel, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CIBlendKernel, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = CIBlendKernel;
