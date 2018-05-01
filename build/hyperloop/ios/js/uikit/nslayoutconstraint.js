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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/NSLayoutConstraint.h
 * @class
 */
function NSLayoutConstraint (pointer) {
	if (!(this instanceof NSLayoutConstraint)) {
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
			class: 'NSLayoutConstraint',
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
NSLayoutConstraint.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSLayoutConstraint,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSLayoutConstraint, NSObject);

Object.defineProperty(NSLayoutConstraint, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSLayoutConstraint, 'className', {
	value: 'NSLayoutConstraint',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSLayoutConstraint.prototype, 'className', {
	value: 'NSLayoutConstraint',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSLayoutConstraint.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSLayoutConstraint, 'toString', {
	value: function () {
		return '[class NSLayoutConstraint]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NSLayoutConstraint',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSLayoutConstraint, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSLayoutConstraint, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSLayoutConstraint.prototype, {
		constant: {
		
		
			set: function (_constant) {
				if (!$init) { $initialize(); }
				this.$private.constant = _constant;
				$dispatch(this.$native, 'setConstant:', _constant);
			},
			enumerable: false
		},
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		priority: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'priority');
			},
		
			set: function (_priority) {
				if (!$init) { $initialize(); }
				this.$private.priority = _priority;
				$dispatch(this.$native, 'setPriority:', _priority);
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

module.exports = NSLayoutConstraint;
