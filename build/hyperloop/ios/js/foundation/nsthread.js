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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSThread.h
 * @class
 */
function NSThread (pointer) {
	if (!(this instanceof NSThread)) {
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
			class: 'NSThread',
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
NSThread.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSThread,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSThread, NSObject);

Object.defineProperty(NSThread, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSThread, 'className', {
	value: 'NSThread',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSThread.prototype, 'className', {
	value: 'NSThread',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSThread.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSThread, 'toString', {
	value: function () {
		return '[class NSThread]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(NSThread, 'exit', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'exit', null, false);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NSThread',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSThread, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSThread, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSThread.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSThread.prototype, 'init', {
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

	Object.defineProperty(NSThread.prototype, 'main', {
		value: function () {
			var result = $dispatch(this.$native, 'main', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSThread.prototype, 'start', {
		value: function () {
			var result = $dispatch(this.$native, 'start', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSThread.prototype, {
		finished: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'finished');
			},
		
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			set: function (_name) {
				if (!$init) { $initialize(); }
				this.$private.name = _name;
				$dispatch(this.$native, 'setName:', _name);
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

module.exports = NSThread;
