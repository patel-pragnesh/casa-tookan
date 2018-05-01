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


var UIApplicationShortcutItem = require('/hyperloop/uikit/uiapplicationshortcutitem');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIApplicationShortcutItem.h
 * @class
 */
function UIMutableApplicationShortcutItem (pointer) {
	if (!(this instanceof UIMutableApplicationShortcutItem)) {
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
			class: 'UIMutableApplicationShortcutItem',
			alloc: true,
			init: 'init'
		});
	}
	UIApplicationShortcutItem.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIMutableApplicationShortcutItem.prototype = Object.create(UIApplicationShortcutItem.prototype, {
	constructor: {
		value: UIMutableApplicationShortcutItem,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIMutableApplicationShortcutItem, UIApplicationShortcutItem);

Object.defineProperty(UIMutableApplicationShortcutItem, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIMutableApplicationShortcutItem, 'className', {
	value: 'UIMutableApplicationShortcutItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIMutableApplicationShortcutItem.prototype, 'className', {
	value: 'UIMutableApplicationShortcutItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIMutableApplicationShortcutItem.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIMutableApplicationShortcutItem, 'toString', {
	value: function () {
		return '[class UIMutableApplicationShortcutItem]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'UIMutableApplicationShortcutItem',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIMutableApplicationShortcutItem, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIMutableApplicationShortcutItem, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIMutableApplicationShortcutItem.prototype, {
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'type'));
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

module.exports = UIMutableApplicationShortcutItem;
