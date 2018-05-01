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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVAssetWriterInput.h
 * @class
 */
function AVAssetWriterInput (pointer) {
	if (!(this instanceof AVAssetWriterInput)) {
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
			class: 'AVAssetWriterInput',
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
AVAssetWriterInput.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVAssetWriterInput,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVAssetWriterInput, NSObject);

Object.defineProperty(AVAssetWriterInput, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVAssetWriterInput, 'className', {
	value: 'AVAssetWriterInput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetWriterInput.prototype, 'className', {
	value: 'AVAssetWriterInput',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVAssetWriterInput.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVAssetWriterInput, 'toString', {
	value: function () {
		return '[class AVAssetWriterInput]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGAffineTransform = require('/hyperloop/coregraphics/cgaffinetransform');

	$class = Hyperloop.createProxy({
		class: 'AVAssetWriterInput',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVAssetWriterInput, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVAssetWriterInput, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVAssetWriterInput.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(AVAssetWriterInput.prototype, {
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGAffineTransform($dispatch(this.$native, 'transform'));
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

module.exports = AVAssetWriterInput;
