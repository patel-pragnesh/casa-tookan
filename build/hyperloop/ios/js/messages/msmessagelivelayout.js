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


var MSMessageLayout = require('/hyperloop/messages/msmessagelayout');


/**
 * Messages//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Messages.framework/Headers/MSMessageLiveLayout.h
 * @class
 */
function MSMessageLiveLayout (pointer) {
	if (!(this instanceof MSMessageLiveLayout)) {
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
			class: 'MSMessageLiveLayout',
			alloc: true,
			init: 'init'
		});
	}
	MSMessageLayout.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MSMessageLiveLayout.prototype = Object.create(MSMessageLayout.prototype, {
	constructor: {
		value: MSMessageLiveLayout,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MSMessageLiveLayout, MSMessageLayout);

Object.defineProperty(MSMessageLiveLayout, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MSMessageLiveLayout, 'className', {
	value: 'MSMessageLiveLayout',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSMessageLiveLayout.prototype, 'className', {
	value: 'MSMessageLiveLayout',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSMessageLiveLayout.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MSMessageLiveLayout, 'toString', {
	value: function () {
		return '[class MSMessageLiveLayout]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MSMessageLiveLayout',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MSMessageLiveLayout, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MSMessageLiveLayout, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MSMessageLiveLayout.prototype, 'init', {
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



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = MSMessageLiveLayout;
