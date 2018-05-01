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
 * Photos//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Photos.framework/Headers/PHImageManager.h
 * @class
 */
function PHImageRequestOptions (pointer) {
	if (!(this instanceof PHImageRequestOptions)) {
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
			class: 'PHImageRequestOptions',
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
PHImageRequestOptions.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PHImageRequestOptions,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PHImageRequestOptions, NSObject);

Object.defineProperty(PHImageRequestOptions, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PHImageRequestOptions, 'className', {
	value: 'PHImageRequestOptions',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHImageRequestOptions.prototype, 'className', {
	value: 'PHImageRequestOptions',
	enumerable: false,
	writable: true
});

Object.defineProperty(PHImageRequestOptions.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PHImageRequestOptions, 'toString', {
	value: function () {
		return '[class PHImageRequestOptions]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'PHImageRequestOptions',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PHImageRequestOptions, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PHImageRequestOptions, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PHImageRequestOptions.prototype, 'setVersion', {
		value: function (_version) {
			this.$private.setVersion = this.$private.setVersion || [];
			this.$private.setVersion.push(_version);
			var result = $dispatch(this.$native, 'setVersion:', [_version], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(PHImageRequestOptions.prototype, {
		version: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'version');
			},
		
			set: function (_version) {
				if (!$init) { $initialize(); }
				this.$private.version = _version;
				$dispatch(this.$native, 'setVersion:', _version);
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

module.exports = PHImageRequestOptions;
