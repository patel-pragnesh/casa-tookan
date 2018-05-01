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


var INIntent = require('/hyperloop/intents/inintent');


/**
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INCreateTaskListIntent.h
 * @class
 */
function INCreateTaskListIntent (pointer) {
	if (!(this instanceof INCreateTaskListIntent)) {
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
			class: 'INCreateTaskListIntent',
			alloc: true,
			init: 'init'
		});
	}
	INIntent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
INCreateTaskListIntent.prototype = Object.create(INIntent.prototype, {
	constructor: {
		value: INCreateTaskListIntent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INCreateTaskListIntent, INIntent);

Object.defineProperty(INCreateTaskListIntent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INCreateTaskListIntent, 'className', {
	value: 'INCreateTaskListIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INCreateTaskListIntent.prototype, 'className', {
	value: 'INCreateTaskListIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INCreateTaskListIntent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INCreateTaskListIntent, 'toString', {
	value: function () {
		return '[class INCreateTaskListIntent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.INSpeakableString = require('/hyperloop/intents/inspeakablestring');

	$class = Hyperloop.createProxy({
		class: 'INCreateTaskListIntent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INCreateTaskListIntent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INCreateTaskListIntent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INCreateTaskListIntent.prototype, {
		title: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.INSpeakableString($dispatch(this.$native, 'title'));
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

module.exports = INCreateTaskListIntent;
