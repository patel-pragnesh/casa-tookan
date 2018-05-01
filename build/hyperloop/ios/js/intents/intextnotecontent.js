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


var INNoteContent = require('/hyperloop/intents/innotecontent');


/**
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INTextNoteContent.h
 * @class
 */
function INTextNoteContent (pointer) {
	if (!(this instanceof INTextNoteContent)) {
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
			class: 'INTextNoteContent',
			alloc: true,
			init: 'init'
		});
	}
	INNoteContent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
INTextNoteContent.prototype = Object.create(INNoteContent.prototype, {
	constructor: {
		value: INTextNoteContent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INTextNoteContent, INNoteContent);

Object.defineProperty(INTextNoteContent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INTextNoteContent, 'className', {
	value: 'INTextNoteContent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INTextNoteContent.prototype, 'className', {
	value: 'INTextNoteContent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INTextNoteContent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INTextNoteContent, 'toString', {
	value: function () {
		return '[class INTextNoteContent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'INTextNoteContent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INTextNoteContent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INTextNoteContent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INTextNoteContent.prototype, {
		text: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'text'));
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

module.exports = INTextNoteContent;
