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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSProgress.h
 * @class
 */
function NSProgress (pointer) {
	if (!(this instanceof NSProgress)) {
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
			class: 'NSProgress',
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
NSProgress.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSProgress,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSProgress, NSObject);

Object.defineProperty(NSProgress, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSProgress, 'className', {
	value: 'NSProgress',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSProgress.prototype, 'className', {
	value: 'NSProgress',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSProgress.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSProgress, 'toString', {
	value: function () {
		return '[class NSProgress]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSProgress',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSProgress, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSProgress, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSProgress.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSProgress.prototype, 'pause', {
		value: function () {
			var result = $dispatch(this.$native, 'pause', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSProgress.prototype, 'publish', {
		value: function () {
			var result = $dispatch(this.$native, 'publish', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSProgress.prototype, 'resume', {
		value: function () {
			var result = $dispatch(this.$native, 'resume', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSProgress.prototype, {
		finished: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'finished');
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

module.exports = NSProgress;
