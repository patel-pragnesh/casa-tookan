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


var UINavigationController = require('/hyperloop/uikit/uinavigationcontroller');


/**
 * MessageUI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MessageUI.framework/Headers/MFMessageComposeViewController.h
 * @class
 */
function MFMessageComposeViewController (pointer) {
	if (!(this instanceof MFMessageComposeViewController)) {
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
			class: 'MFMessageComposeViewController',
			alloc: true,
			init: 'init'
		});
	}
	UINavigationController.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MFMessageComposeViewController.prototype = Object.create(UINavigationController.prototype, {
	constructor: {
		value: MFMessageComposeViewController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MFMessageComposeViewController, UINavigationController);

Object.defineProperty(MFMessageComposeViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MFMessageComposeViewController, 'className', {
	value: 'MFMessageComposeViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(MFMessageComposeViewController.prototype, 'className', {
	value: 'MFMessageComposeViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(MFMessageComposeViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MFMessageComposeViewController, 'toString', {
	value: function () {
		return '[class MFMessageComposeViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.MSMessage = require('/hyperloop/messages/msmessage');

	$class = Hyperloop.createProxy({
		class: 'MFMessageComposeViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MFMessageComposeViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MFMessageComposeViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MFMessageComposeViewController.prototype, {
		body: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'body'));
			},
		
			set: function (_body) {
				if (!$init) { $initialize(); }
				this.$private.body = _body;
				$dispatch(this.$native, 'setBody:', _body);
			},
			enumerable: false
		},
		message: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MSMessage($dispatch(this.$native, 'message'));
			},
		
			set: function (_message) {
				if (!$init) { $initialize(); }
				this.$private.message = _message;
				$dispatch(this.$native, 'setMessage:', _message);
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

module.exports = MFMessageComposeViewController;
