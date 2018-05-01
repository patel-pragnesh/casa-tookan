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
 * FirebaseInstanceID//Users/a/Documents/Appcelerator_Studio_Workspace/tookan/modules/iphone/firebase.core/1.0.0/platform/FirebaseInstanceID.framework/Headers/FIRInstanceID.h
 * @class
 */
function FIRInstanceID (pointer) {
	if (!(this instanceof FIRInstanceID)) {
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
			class: 'FIRInstanceID',
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
FIRInstanceID.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: FIRInstanceID,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(FIRInstanceID, NSObject);

Object.defineProperty(FIRInstanceID, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(FIRInstanceID, 'className', {
	value: 'FIRInstanceID',
	enumerable: false,
	writable: true
});

Object.defineProperty(FIRInstanceID.prototype, 'className', {
	value: 'FIRInstanceID',
	enumerable: false,
	writable: true
});

Object.defineProperty(FIRInstanceID.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(FIRInstanceID, 'toString', {
	value: function () {
		return '[class FIRInstanceID]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'FIRInstanceID',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(FIRInstanceID, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(FIRInstanceID, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(FIRInstanceID.prototype, 'init', {
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

	Object.defineProperty(FIRInstanceID.prototype, 'token', {
		value: function () {
			var result = $dispatch(this.$native, 'token', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSString(result);
			return result;
		},
		enumerable: false,
		writable: true
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

module.exports = FIRInstanceID;
