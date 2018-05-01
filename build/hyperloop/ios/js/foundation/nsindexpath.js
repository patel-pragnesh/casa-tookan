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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSIndexPath.h
 * @class
 */
function NSIndexPath (pointer) {
	if (!(this instanceof NSIndexPath)) {
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
			class: 'NSIndexPath',
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
NSIndexPath.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSIndexPath,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSIndexPath, NSObject);

Object.defineProperty(NSIndexPath, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSIndexPath, 'className', {
	value: 'NSIndexPath',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSIndexPath.prototype, 'className', {
	value: 'NSIndexPath',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSIndexPath.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSIndexPath, 'toString', {
	value: function () {
		return '[class NSIndexPath]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSIndexPath',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSIndexPath, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSIndexPath, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSIndexPath.prototype, 'compare', {
		value: function (_otherObject) {
			this.$private.compare = this.$private.compare || [];
			this.$private.compare.push(_otherObject);
			var result = $dispatch(this.$native, 'compare:', [_otherObject], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSIndexPath.prototype, {
		length: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'length');
			},
		
			enumerable: false
		},
		row: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'row');
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

module.exports = NSIndexPath;
