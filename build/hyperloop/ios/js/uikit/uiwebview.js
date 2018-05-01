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


var UIView = require('/hyperloop/uikit/uiview');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIWebView.h
 * @class
 */
function UIWebView (pointer) {
	if (!(this instanceof UIWebView)) {
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
			class: 'UIWebView',
			alloc: true,
			init: 'init'
		});
	}
	UIView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIWebView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: UIWebView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIWebView, UIView);

Object.defineProperty(UIWebView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIWebView, 'className', {
	value: 'UIWebView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIWebView.prototype, 'className', {
	value: 'UIWebView',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIWebView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIWebView, 'toString', {
	value: function () {
		return '[class UIWebView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSURLRequest = require('/hyperloop/foundation/nsurlrequest');

	$class = Hyperloop.createProxy({
		class: 'UIWebView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIWebView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIWebView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIWebView.prototype, 'goBack', {
		value: function () {
			var result = $dispatch(this.$native, 'goBack', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIWebView.prototype, 'goForward', {
		value: function () {
			var result = $dispatch(this.$native, 'goForward', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIWebView.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIWebView.prototype, 'loadRequest', {
		value: function (_request) {
			this.$private.loadRequest = this.$private.loadRequest || [];
			this.$private.loadRequest.push(_request);
			var result = $dispatch(this.$native, 'loadRequest:', [_request], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIWebView.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIWebView.prototype, 'reload', {
		value: function () {
			var result = $dispatch(this.$native, 'reload', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIWebView.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UIWebView.prototype, {
		canGoBack: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'canGoBack');
			},
		
			enumerable: false
		},
		canGoForward: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'canGoForward');
			},
		
			enumerable: false
		},
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
			},
		
			enumerable: false
		},
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		request: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLRequest($dispatch(this.$native, 'request'));
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

module.exports = UIWebView;
