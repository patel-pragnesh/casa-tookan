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
 * Photos//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Photos.framework/Headers/PHLivePhotoEditingContext.h
 * @class
 */
function PHLivePhotoEditingContext (pointer) {
	if (!(this instanceof PHLivePhotoEditingContext)) {
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
			class: 'PHLivePhotoEditingContext',
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
PHLivePhotoEditingContext.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PHLivePhotoEditingContext,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PHLivePhotoEditingContext, NSObject);

Object.defineProperty(PHLivePhotoEditingContext, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PHLivePhotoEditingContext, 'className', {
	value: 'PHLivePhotoEditingContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHLivePhotoEditingContext.prototype, 'className', {
	value: 'PHLivePhotoEditingContext',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHLivePhotoEditingContext.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PHLivePhotoEditingContext, 'toString', {
	value: function () {
		return '[class PHLivePhotoEditingContext]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CMTime = require('/hyperloop/coremedia/cmtime');

	$class = Hyperloop.createProxy({
		class: 'PHLivePhotoEditingContext',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PHLivePhotoEditingContext, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PHLivePhotoEditingContext, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PHLivePhotoEditingContext.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(PHLivePhotoEditingContext.prototype, 'init', {
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
	Object.defineProperties(PHLivePhotoEditingContext.prototype, {
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CMTime($dispatch(this.$native, 'duration'));
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

module.exports = PHLivePhotoEditingContext;
