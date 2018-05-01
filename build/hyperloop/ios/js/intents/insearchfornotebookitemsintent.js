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
 * Intents//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Intents.framework/Headers/INSearchForNotebookItemsIntent.h
 * @class
 */
function INSearchForNotebookItemsIntent (pointer) {
	if (!(this instanceof INSearchForNotebookItemsIntent)) {
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
			class: 'INSearchForNotebookItemsIntent',
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
INSearchForNotebookItemsIntent.prototype = Object.create(INIntent.prototype, {
	constructor: {
		value: INSearchForNotebookItemsIntent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(INSearchForNotebookItemsIntent, INIntent);

Object.defineProperty(INSearchForNotebookItemsIntent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(INSearchForNotebookItemsIntent, 'className', {
	value: 'INSearchForNotebookItemsIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSearchForNotebookItemsIntent.prototype, 'className', {
	value: 'INSearchForNotebookItemsIntent',
	enumerable: false,
	writable: true
});

Object.defineProperty(INSearchForNotebookItemsIntent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(INSearchForNotebookItemsIntent, 'toString', {
	value: function () {
		return '[class INSearchForNotebookItemsIntent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.CLPlacemark = require('/hyperloop/corelocation/clplacemark');
	$imports.INSpeakableString = require('/hyperloop/intents/inspeakablestring');

	$class = Hyperloop.createProxy({
		class: 'INSearchForNotebookItemsIntent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(INSearchForNotebookItemsIntent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(INSearchForNotebookItemsIntent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(INSearchForNotebookItemsIntent.prototype, {
		content: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'content'));
			},
		
			enumerable: false
		},
		location: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CLPlacemark($dispatch(this.$native, 'location'));
			},
		
			enumerable: false
		},
		status: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'status');
			},
		
			enumerable: false
		},
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

module.exports = INSearchForNotebookItemsIntent;
