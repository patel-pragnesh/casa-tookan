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



/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSProxy.h
 * @class
 */
function NSProxy (pointer) {
	if (!(this instanceof NSProxy)) {
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
			class: 'NSProxy',
			alloc: true,
			init: 'init'
		});
	}
	if (pointer.$native) {
		this.$native = pointer.$native;
	} else {
		this.$native = pointer;
	}
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}

Object.defineProperty(NSProxy, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSProxy, 'className', {
	value: 'NSProxy',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSProxy.prototype, 'className', {
	value: 'NSProxy',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSProxy.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSProxy, 'toString', {
	value: function () {
		return '[class NSProxy]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(NSProxy, 'alloc', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'alloc', null, false);
			if (result === undefined || result === null) return result;
			result = new $imports.NSObject(result);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'NSProxy',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSProxy, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSProxy, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSProxy.prototype, 'finalize', {
		value: function () {
			var result = $dispatch(this.$native, 'finalize', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSProxy.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSProxy.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSProxy.prototype, 'self', {
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


	// instance properties
	Object.defineProperties(NSProxy.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = NSProxy;
