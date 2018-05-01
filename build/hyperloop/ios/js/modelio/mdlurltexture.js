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


var MDLTexture = require('/hyperloop/modelio/mdltexture');


/**
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLTexture.h
 * @class
 */
function MDLURLTexture (pointer) {
	if (!(this instanceof MDLURLTexture)) {
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
			class: 'MDLURLTexture',
			alloc: true,
			init: 'init'
		});
	}
	MDLTexture.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MDLURLTexture.prototype = Object.create(MDLTexture.prototype, {
	constructor: {
		value: MDLURLTexture,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLURLTexture, MDLTexture);

Object.defineProperty(MDLURLTexture, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLURLTexture, 'className', {
	value: 'MDLURLTexture',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLURLTexture.prototype, 'className', {
	value: 'MDLURLTexture',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLURLTexture.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLURLTexture, 'toString', {
	value: function () {
		return '[class MDLURLTexture]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');

	$class = Hyperloop.createProxy({
		class: 'MDLURLTexture',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLURLTexture, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLURLTexture, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MDLURLTexture.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
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

module.exports = MDLURLTexture;
