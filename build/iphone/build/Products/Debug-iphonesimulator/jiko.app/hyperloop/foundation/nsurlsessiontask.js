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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSURLSession.h
 * @class
 */
function NSURLSessionTask (pointer) {
	if (!(this instanceof NSURLSessionTask)) {
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
			class: 'NSURLSessionTask',
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
NSURLSessionTask.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSURLSessionTask,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSURLSessionTask, NSObject);

Object.defineProperty(NSURLSessionTask, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSURLSessionTask, 'className', {
	value: 'NSURLSessionTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSURLSessionTask.prototype, 'className', {
	value: 'NSURLSessionTask',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSURLSessionTask.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSURLSessionTask, 'toString', {
	value: function () {
		return '[class NSURLSessionTask]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSError = require('/hyperloop/foundation/nserror');
	$imports.NSProgress = require('/hyperloop/foundation/nsprogress');
	$imports.NSURLResponse = require('/hyperloop/foundation/nsurlresponse');

	$class = Hyperloop.createProxy({
		class: 'NSURLSessionTask',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSURLSessionTask, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSURLSessionTask, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSURLSessionTask.prototype, 'cancel', {
		value: function () {
			var result = $dispatch(this.$native, 'cancel', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSURLSessionTask.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSURLSessionTask.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSURLSessionTask.prototype, 'resume', {
		value: function () {
			var result = $dispatch(this.$native, 'resume', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSURLSessionTask.prototype, 'self', {
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
	Object.defineProperties(NSURLSessionTask.prototype, {
		error: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSError($dispatch(this.$native, 'error'));
			},
		
			enumerable: false
		},
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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
		},
		response: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLResponse($dispatch(this.$native, 'response'));
			},
		
			enumerable: false
		},
		state: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'state');
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

module.exports = NSURLSessionTask;
