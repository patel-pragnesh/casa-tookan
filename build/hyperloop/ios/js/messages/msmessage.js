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
 * Messages//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Messages.framework/Headers/MSMessage.h
 * @class
 */
function MSMessage (pointer) {
	if (!(this instanceof MSMessage)) {
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
			class: 'MSMessage',
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
MSMessage.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MSMessage,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MSMessage, NSObject);

Object.defineProperty(MSMessage, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MSMessage, 'className', {
	value: 'MSMessage',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSMessage.prototype, 'className', {
	value: 'MSMessage',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSMessage.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MSMessage, 'toString', {
	value: function () {
		return '[class MSMessage]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');
	$imports.NSError = require('/hyperloop/foundation/nserror');
	$imports.MSMessageLayout = require('/hyperloop/messages/msmessagelayout');

	$class = Hyperloop.createProxy({
		class: 'MSMessage',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MSMessage, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MSMessage, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MSMessage.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(MSMessage.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		},
		error: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSError($dispatch(this.$native, 'error'));
			},
		
			set: function (_error) {
				if (!$init) { $initialize(); }
				this.$private.error = _error;
				$dispatch(this.$native, 'setError:', _error);
			},
			enumerable: false
		},
		layout: {
		
		
			set: function (_layout) {
				if (!$init) { $initialize(); }
				this.$private.layout = _layout;
				$dispatch(this.$native, 'setLayout:', _layout);
			},
			enumerable: false
		},
		pending: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'pending');
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

module.exports = MSMessage;
