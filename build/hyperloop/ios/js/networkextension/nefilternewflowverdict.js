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


var NEFilterVerdict = require('/hyperloop/networkextension/nefilterverdict');


/**
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEFilterProvider.h
 * @class
 */
function NEFilterNewFlowVerdict (pointer) {
	if (!(this instanceof NEFilterNewFlowVerdict)) {
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
			class: 'NEFilterNewFlowVerdict',
			alloc: true,
			init: 'init'
		});
	}
	NEFilterVerdict.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NEFilterNewFlowVerdict.prototype = Object.create(NEFilterVerdict.prototype, {
	constructor: {
		value: NEFilterNewFlowVerdict,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEFilterNewFlowVerdict, NEFilterVerdict);

Object.defineProperty(NEFilterNewFlowVerdict, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEFilterNewFlowVerdict, 'className', {
	value: 'NEFilterNewFlowVerdict',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEFilterNewFlowVerdict.prototype, 'className', {
	value: 'NEFilterNewFlowVerdict',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEFilterNewFlowVerdict.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEFilterNewFlowVerdict, 'toString', {
	value: function () {
		return '[class NEFilterNewFlowVerdict]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NEFilterNewFlowVerdict',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEFilterNewFlowVerdict, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEFilterNewFlowVerdict, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
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

module.exports = NEFilterNewFlowVerdict;
