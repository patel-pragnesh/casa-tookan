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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEOnDemandRule.h
 * @class
 */
function NEEvaluateConnectionRule (pointer) {
	if (!(this instanceof NEEvaluateConnectionRule)) {
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
			class: 'NEEvaluateConnectionRule',
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
NEEvaluateConnectionRule.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NEEvaluateConnectionRule,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEEvaluateConnectionRule, NSObject);

Object.defineProperty(NEEvaluateConnectionRule, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEEvaluateConnectionRule, 'className', {
	value: 'NEEvaluateConnectionRule',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEEvaluateConnectionRule.prototype, 'className', {
	value: 'NEEvaluateConnectionRule',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEEvaluateConnectionRule.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEEvaluateConnectionRule, 'toString', {
	value: function () {
		return '[class NEEvaluateConnectionRule]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'NEEvaluateConnectionRule',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEEvaluateConnectionRule, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEEvaluateConnectionRule, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NEEvaluateConnectionRule.prototype, {
		action: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'action');
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

module.exports = NEEvaluateConnectionRule;
