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
 * AssetsLibrary//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AssetsLibrary.framework/Headers/ALAssetRepresentation.h
 * @class
 */
function ALAssetRepresentation (pointer) {
	if (!(this instanceof ALAssetRepresentation)) {
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
			class: 'ALAssetRepresentation',
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
ALAssetRepresentation.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: ALAssetRepresentation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(ALAssetRepresentation, NSObject);

Object.defineProperty(ALAssetRepresentation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(ALAssetRepresentation, 'className', {
	value: 'ALAssetRepresentation',
	enumerable: false,
	writable: true
});

Object.defineProperty(ALAssetRepresentation.prototype, 'className', {
	value: 'ALAssetRepresentation',
	enumerable: false,
	writable: true
});

Object.defineProperty(ALAssetRepresentation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(ALAssetRepresentation, 'toString', {
	value: function () {
		return '[class ALAssetRepresentation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSURL = require('/hyperloop/foundation/nsurl');

	$class = Hyperloop.createProxy({
		class: 'ALAssetRepresentation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(ALAssetRepresentation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(ALAssetRepresentation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(ALAssetRepresentation.prototype, 'filename', {
		value: function () {
			var result = $dispatch(this.$native, 'filename', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSString(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(ALAssetRepresentation.prototype, 'scale', {
		value: function () {
			var result = $dispatch(this.$native, 'scale', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(ALAssetRepresentation.prototype, 'size', {
		value: function () {
			var result = $dispatch(this.$native, 'size', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(ALAssetRepresentation.prototype, 'url', {
		value: function () {
			var result = $dispatch(this.$native, 'url', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSURL(result);
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

module.exports = ALAssetRepresentation;
