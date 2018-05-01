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


var PHObject = require('/hyperloop/photos/phobject');


/**
 * Photos//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Photos.framework/Headers/PHAsset.h
 * @class
 */
function PHAsset (pointer) {
	if (!(this instanceof PHAsset)) {
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
			class: 'PHAsset',
			alloc: true,
			init: 'init'
		});
	}
	PHObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
PHAsset.prototype = Object.create(PHObject.prototype, {
	constructor: {
		value: PHAsset,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PHAsset, PHObject);

Object.defineProperty(PHAsset, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PHAsset, 'className', {
	value: 'PHAsset',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHAsset.prototype, 'className', {
	value: 'PHAsset',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHAsset.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PHAsset, 'toString', {
	value: function () {
		return '[class PHAsset]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CLLocation = require('/hyperloop/corelocation/cllocation');

	$class = Hyperloop.createProxy({
		class: 'PHAsset',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PHAsset, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PHAsset, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PHAsset.prototype, {
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'duration');
			},
		
			enumerable: false
		},
		location: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CLLocation($dispatch(this.$native, 'location'));
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

module.exports = PHAsset;
