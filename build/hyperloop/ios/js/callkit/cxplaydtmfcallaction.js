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


var CXCallAction = require('/hyperloop/callkit/cxcallaction');


/**
 * CallKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CallKit.framework/Headers/CXPlayDTMFCallAction.h
 * @class
 */
function CXPlayDTMFCallAction (pointer) {
	if (!(this instanceof CXPlayDTMFCallAction)) {
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
			class: 'CXPlayDTMFCallAction',
			alloc: true,
			init: 'init'
		});
	}
	CXCallAction.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CXPlayDTMFCallAction.prototype = Object.create(CXCallAction.prototype, {
	constructor: {
		value: CXPlayDTMFCallAction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CXPlayDTMFCallAction, CXCallAction);

Object.defineProperty(CXPlayDTMFCallAction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CXPlayDTMFCallAction, 'className', {
	value: 'CXPlayDTMFCallAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(CXPlayDTMFCallAction.prototype, 'className', {
	value: 'CXPlayDTMFCallAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(CXPlayDTMFCallAction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CXPlayDTMFCallAction, 'toString', {
	value: function () {
		return '[class CXPlayDTMFCallAction]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CXPlayDTMFCallAction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CXPlayDTMFCallAction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CXPlayDTMFCallAction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CXPlayDTMFCallAction.prototype, {
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
			},
		
			set: function (_type) {
				if (!$init) { $initialize(); }
				this.$private.type = _type;
				$dispatch(this.$native, 'setType:', _type);
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

module.exports = CXPlayDTMFCallAction;
