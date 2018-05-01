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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSAttributedString.h
 * @class
 */
function NSAttributedString (pointer) {
	if (!(this instanceof NSAttributedString)) {
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
			class: 'NSAttributedString',
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
NSAttributedString.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSAttributedString,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSAttributedString, NSObject);

Object.defineProperty(NSAttributedString, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSAttributedString, 'className', {
	value: 'NSAttributedString',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSAttributedString.prototype, 'className', {
	value: 'NSAttributedString',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSAttributedString.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSAttributedString, 'toString', {
	value: function () {
		return '[class NSAttributedString]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGSize = require('/hyperloop/coregraphics/cgsize');

	$class = Hyperloop.createProxy({
		class: 'NSAttributedString',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSAttributedString, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSAttributedString, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSAttributedString.prototype, 'initWithString', {
		value: function (_str) {
			var result = $dispatch(this.$native, 'initWithString:', [_str], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithString = instance.$private.initWithString || [];
			instance.$private.initWithString.push(_str);
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSAttributedString.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSAttributedString.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSAttributedString.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSAttributedString.prototype, 'size', {
		value: function () {
			var result = $dispatch(this.$native, 'size', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.CGSize(result);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSAttributedString.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		length: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'length');
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

module.exports = NSAttributedString;
