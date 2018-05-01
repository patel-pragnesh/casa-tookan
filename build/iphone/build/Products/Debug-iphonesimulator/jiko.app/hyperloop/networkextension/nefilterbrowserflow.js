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


var NEFilterFlow = require('/hyperloop/networkextension/nefilterflow');


/**
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEFilterFlow.h
 * @class
 */
function NEFilterBrowserFlow (pointer) {
	if (!(this instanceof NEFilterBrowserFlow)) {
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
			class: 'NEFilterBrowserFlow',
			alloc: true,
			init: 'init'
		});
	}
	NEFilterFlow.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NEFilterBrowserFlow.prototype = Object.create(NEFilterFlow.prototype, {
	constructor: {
		value: NEFilterBrowserFlow,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEFilterBrowserFlow, NEFilterFlow);

Object.defineProperty(NEFilterBrowserFlow, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEFilterBrowserFlow, 'className', {
	value: 'NEFilterBrowserFlow',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEFilterBrowserFlow.prototype, 'className', {
	value: 'NEFilterBrowserFlow',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEFilterBrowserFlow.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEFilterBrowserFlow, 'toString', {
	value: function () {
		return '[class NEFilterBrowserFlow]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURLRequest = require('/hyperloop/foundation/nsurlrequest');
	$imports.NSURLResponse = require('/hyperloop/foundation/nsurlresponse');

	$class = Hyperloop.createProxy({
		class: 'NEFilterBrowserFlow',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEFilterBrowserFlow, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEFilterBrowserFlow, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NEFilterBrowserFlow.prototype, {
		request: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLRequest($dispatch(this.$native, 'request'));
			},
		
			enumerable: false
		},
		response: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLResponse($dispatch(this.$native, 'response'));
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

module.exports = NEFilterBrowserFlow;
