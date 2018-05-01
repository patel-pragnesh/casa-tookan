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
 * WebKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WebKit.framework/Headers/WKWebView.h
 * @class
 */
function WKWebView (pointer) {
	if (!(this instanceof WKWebView)) {
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
			class: 'WKWebView',
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
WKWebView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: WKWebView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKWebView, UIView);

Object.defineProperty(WKWebView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKWebView, 'className', {
	value: 'WKWebView',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKWebView.prototype, 'className', {
	value: 'WKWebView',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKWebView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKWebView, 'toString', {
	value: function () {
		return '[class WKWebView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSError = require('/hyperloop/foundation/nserror');
	$imports.WKNavigation = require('/hyperloop/webkit/wknavigation');

	$class = Hyperloop.createProxy({
		class: 'WKWebView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKWebView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKWebView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(WKWebView.prototype, 'evaluateJavaScriptCompletionHandler', {
		value: function (_javaScriptString, _completionHandler) {
			// convert to block: void (^)(id, NSError *)
			var _completionHandlerCallback = function () {
				var args = [];
				// convert arguments into local JS classes
				if (arguments.length > 0 && arguments[0] !== null) {
					args.push(new $imports.NSObject(arguments[0]));
				} else {
					args.push(null);
				}
				if (arguments.length > 1 && arguments[1] !== null) {
					args.push(new $imports.NSError(arguments[1]));
				} else {
					args.push(null);
				}
				_completionHandler && _completionHandler.apply(_completionHandler, args);
			};
			var _completionHandlerBlock = $dispatch(Hyperloop.createProxy({ class: 'HyperloopWebKit', alloc: false, init: 'class' }), 'Block_void_____id__NSError___:', [_completionHandlerCallback], false);
			this.$private.evaluateJavaScriptCompletionHandler_completionHandler = _completionHandler;
			this.$private.evaluateJavaScriptCompletionHandler_completionHandlerCallback = _completionHandlerCallback;
			this.$private.evaluateJavaScriptCompletionHandler = this.$private.evaluateJavaScriptCompletionHandler || [];
			this.$private.evaluateJavaScriptCompletionHandler.push(_javaScriptString);
			this.$private.evaluateJavaScriptCompletionHandler.push(_completionHandler);
			var result = $dispatch(this.$native, 'evaluateJavaScript:completionHandler:', [_javaScriptString, _completionHandlerBlock], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(WKWebView.prototype, 'goBack', {
		value: function () {
			var result = $dispatch(this.$native, 'goBack', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.WKNavigation(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(WKWebView.prototype, 'goForward', {
		value: function () {
			var result = $dispatch(this.$native, 'goForward', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.WKNavigation(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(WKWebView.prototype, 'loadRequest', {
		value: function (_request) {
			this.$private.loadRequest = this.$private.loadRequest || [];
			this.$private.loadRequest.push(_request);
			var result = $dispatch(this.$native, 'loadRequest:', [_request], true);
			if (result === undefined || result === null) return result;
			result = new $imports.WKNavigation(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(WKWebView.prototype, 'reload', {
		value: function () {
			var result = $dispatch(this.$native, 'reload', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.WKNavigation(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(WKWebView.prototype, 'setNavigationDelegate', {
		value: function (_navigationDelegate) {
			this.$private.setNavigationDelegate = this.$private.setNavigationDelegate || [];
			this.$private.setNavigationDelegate.push(_navigationDelegate);
			var result = $dispatch(this.$native, 'setNavigationDelegate:', [_navigationDelegate], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(WKWebView.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		},
		allowsBackForwardNavigationGestures: {
		
		
			set: function (_allowsBackForwardNavigationGestures) {
				if (!$init) { $initialize(); }
				this.$private.allowsBackForwardNavigationGestures = _allowsBackForwardNavigationGestures;
				$dispatch(this.$native, 'setAllowsBackForwardNavigationGestures:', _allowsBackForwardNavigationGestures);
			},
			enumerable: false
		},
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
		title: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'title'));
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

module.exports = WKWebView;
