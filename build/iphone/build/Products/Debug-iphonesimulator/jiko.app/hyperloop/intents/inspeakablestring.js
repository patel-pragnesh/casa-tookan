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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INSpeakableString.h
 * @class
 */
function INSpeakableString (pointer) {
	if (!(this instanceof INSpeakableString)) {
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
			class: 'INSpeakableString',
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
INSpeakableString.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: INSpeakableString,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INSpeakableString, NSObject);

Object.defineProperty(INSpeakableString, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INSpeakableString, 'className', {
	value: 'INSpeakableString',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSpeakableString.prototype, 'className', {
	value: 'INSpeakableString',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSpeakableString.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INSpeakableString, 'toString', {
	value: function () {
		return '[class INSpeakableString]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'INSpeakableString',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INSpeakableString, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INSpeakableString, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(INSpeakableString.prototype, 'init', {
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

	Object.defineProperty(INSpeakableString.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(INSpeakableString.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(INSpeakableString.prototype, 'self', {
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
	Object.defineProperties(INSpeakableString.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
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

module.exports = INSpeakableString;