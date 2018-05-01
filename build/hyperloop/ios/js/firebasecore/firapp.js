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
 * FirebaseCore//Users/a/Documents/Appcelerator_Studio_Workspace/tookan/modules/iphone/firebase.core/1.0.0/platform/FirebaseCore.framework/Headers/FIRApp.h
 * @class
 */
function FIRApp (pointer) {
	if (!(this instanceof FIRApp)) {
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
			class: 'FIRApp',
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
FIRApp.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: FIRApp,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(FIRApp, NSObject);

Object.defineProperty(FIRApp, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(FIRApp, 'className', {
	value: 'FIRApp',
	enumerable: false,
	writable: true
});

Object.defineProperty(FIRApp.prototype, 'className', {
	value: 'FIRApp',
	enumerable: false,
	writable: true
});

Object.defineProperty(FIRApp.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(FIRApp, 'toString', {
	value: function () {
		return '[class FIRApp]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(FIRApp, 'configure', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'configure', null, false);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.FIROptions = require('/hyperloop/firebasecore/firoptions');

	$class = Hyperloop.createProxy({
		class: 'FIRApp',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(FIRApp, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(FIRApp, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(FIRApp.prototype, 'init', {
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
	Object.defineProperties(FIRApp.prototype, {
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			enumerable: false
		},
		options: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.FIROptions($dispatch(this.$native, 'options'));
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

module.exports = FIRApp;
