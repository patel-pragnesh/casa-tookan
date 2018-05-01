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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INAppendToNoteIntent.h
 * @class
 */
function INAppendToNoteIntent (pointer) {
	if (!(this instanceof INAppendToNoteIntent)) {
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
			class: 'INAppendToNoteIntent',
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
INAppendToNoteIntent.prototype = Object.create(INIntent.prototype, {
	constructor: {
		value: INAppendToNoteIntent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INAppendToNoteIntent, INIntent);

Object.defineProperty(INAppendToNoteIntent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INAppendToNoteIntent, 'className', {
	value: 'INAppendToNoteIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INAppendToNoteIntent.prototype, 'className', {
	value: 'INAppendToNoteIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INAppendToNoteIntent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INAppendToNoteIntent, 'toString', {
	value: function () {
		return '[class INAppendToNoteIntent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.INNoteContent = require('/hyperloop/intents/innotecontent');

	$class = Hyperloop.createProxy({
		class: 'INAppendToNoteIntent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INAppendToNoteIntent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INAppendToNoteIntent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INAppendToNoteIntent.prototype, {
		content: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.INNoteContent($dispatch(this.$native, 'content'));
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

module.exports = INAppendToNoteIntent;
