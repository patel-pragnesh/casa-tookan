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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/usr/include/objc/NSObject.h
 * @class
 */
function NSObject (pointer) {
	if (!(this instanceof NSObject)) {
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
			class: 'NSObject',
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

Object.defineProperty(NSObject, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSObject, 'className', {
	value: 'NSObject',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSObject.prototype, 'className', {
	value: 'NSObject',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSObject.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSObject, 'toString', {
	value: function () {
		return '[class NSObject]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(NSObject, 'alloc', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'alloc', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(NSObject, 'extend', {
	value: function () {
		if (!$init) { $initialize(); }
		return Hyperloop.extend(this.$class, arguments[0], arguments[1]);
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(NSObject, 'initialize', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'initialize', null, false);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(NSObject, 'load', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'load', null, false);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(NSObject, 'setVersion', {
	value: function (_aVersion) {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'setVersion:', [_aVersion], false);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(NSObject, 'version', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'version', null, false);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NSObject',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSObject, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSObject, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSObject.prototype, 'copy', {
		value: function () {
			var result = $dispatch(this.$native, 'copy', null, true);
			if (result === undefined || result === null) return result;
			result = new NSObject(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSObject.prototype, 'finalize', {
		value: function () {
			var result = $dispatch(this.$native, 'finalize', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSObject.prototype, 'init', {
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

	Object.defineProperty(NSObject.prototype, 'intValue', {
		value: function () {
var result = Hyperloop.intValue(this.$native);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSObject.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSObject.prototype, 'isNull', {
		value: function () {
var result = Hyperloop.isNull(this.$native);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSObject.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSObject.prototype, 'self', {
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
	Object.defineProperties(NSObject.prototype, {
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

module.exports = NSObject;
