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
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKShader.h
 * @class
 */
function SKShader (pointer) {
	if (!(this instanceof SKShader)) {
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
			class: 'SKShader',
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
SKShader.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SKShader,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKShader, NSObject);

Object.defineProperty(SKShader, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKShader, 'className', {
	value: 'SKShader',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKShader.prototype, 'className', {
	value: 'SKShader',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKShader.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKShader, 'toString', {
	value: function () {
		return '[class SKShader]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSArray = require('/hyperloop/foundation/nsarray');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'SKShader',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKShader, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKShader, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKShader.prototype, {
		attributes: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'attributes'));
			},
		
			set: function (_attributes) {
				if (!$init) { $initialize(); }
				this.$private.attributes = _attributes;
				$dispatch(this.$native, 'setAttributes:', _attributes);
			},
			enumerable: false
		},
		source: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'source'));
			},
		
			set: function (_source) {
				if (!$init) { $initialize(); }
				this.$private.source = _source;
				$dispatch(this.$native, 'setSource:', _source);
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

module.exports = SKShader;
