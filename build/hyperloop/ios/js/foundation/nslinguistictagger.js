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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSLinguisticTagger.h
 * @class
 */
function NSLinguisticTagger (pointer) {
	if (!(this instanceof NSLinguisticTagger)) {
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
			class: 'NSLinguisticTagger',
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
NSLinguisticTagger.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSLinguisticTagger,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSLinguisticTagger, NSObject);

Object.defineProperty(NSLinguisticTagger, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSLinguisticTagger, 'className', {
	value: 'NSLinguisticTagger',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSLinguisticTagger.prototype, 'className', {
	value: 'NSLinguisticTagger',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSLinguisticTagger.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSLinguisticTagger, 'toString', {
	value: function () {
		return '[class NSLinguisticTagger]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSLinguisticTagger',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSLinguisticTagger, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSLinguisticTagger, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSLinguisticTagger.prototype, 'setString', {
		value: function (_string) {
			this.$private.setString = this.$private.setString || [];
			this.$private.setString.push(_string);
			var result = $dispatch(this.$native, 'setString:', [_string], true);
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

module.exports = NSLinguisticTagger;
