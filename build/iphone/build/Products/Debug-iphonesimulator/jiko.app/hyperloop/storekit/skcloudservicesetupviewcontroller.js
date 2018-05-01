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


var UIViewController = require('/hyperloop/uikit/uiviewcontroller');


/**
 * StoreKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/StoreKit.framework/Headers/SKCloudServiceSetupViewController.h
 * @class
 */
function SKCloudServiceSetupViewController (pointer) {
	if (!(this instanceof SKCloudServiceSetupViewController)) {
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
			class: 'SKCloudServiceSetupViewController',
			alloc: true,
			init: 'init'
		});
	}
	UIViewController.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SKCloudServiceSetupViewController.prototype = Object.create(UIViewController.prototype, {
	constructor: {
		value: SKCloudServiceSetupViewController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKCloudServiceSetupViewController, UIViewController);

Object.defineProperty(SKCloudServiceSetupViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKCloudServiceSetupViewController, 'className', {
	value: 'SKCloudServiceSetupViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKCloudServiceSetupViewController.prototype, 'className', {
	value: 'SKCloudServiceSetupViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKCloudServiceSetupViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKCloudServiceSetupViewController, 'toString', {
	value: function () {
		return '[class SKCloudServiceSetupViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'SKCloudServiceSetupViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKCloudServiceSetupViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKCloudServiceSetupViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKCloudServiceSetupViewController.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = SKCloudServiceSetupViewController;
