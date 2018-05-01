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
 * web3//Users/a/Documents/Appcelerator_Studio_Workspace/tookan/platform/ios/web3.framework/Headers/browser.h
 * @class
 */
function browser (pointer) {
	if (!(this instanceof browser)) {
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
			class: 'browser',
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
browser.prototype = Object.create(UIViewController.prototype, {
	constructor: {
		value: browser,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(browser, UIViewController);

Object.defineProperty(browser, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(browser, 'className', {
	value: 'browser',
	enumerable: false,
	writable: true
});

Object.defineProperty(browser.prototype, 'className', {
	value: 'browser',
	enumerable: false,
	writable: true
});

Object.defineProperty(browser.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(browser, 'toString', {
	value: function () {
		return '[class browser]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.WKWebView = require('/hyperloop/webkit/wkwebview');

	$class = Hyperloop.createProxy({
		class: 'browser',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(browser, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(browser, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(browser.prototype, 'getBrowserAndHeightAndUrlAndController', {
		value: function (_width, _height, _url, _controller) {
			this.$private.getBrowserAndHeightAndUrlAndController = this.$private.getBrowserAndHeightAndUrlAndController || [];
			this.$private.getBrowserAndHeightAndUrlAndController.push(_width);
			this.$private.getBrowserAndHeightAndUrlAndController.push(_height);
			this.$private.getBrowserAndHeightAndUrlAndController.push(_url);
			this.$private.getBrowserAndHeightAndUrlAndController.push(_controller);
			var result = $dispatch(this.$native, 'getBrowser:andHeight:andUrl:andController:', [_width, _height, _url, _controller], true);
			if (result === undefined || result === null) return result;
			result = new $imports.WKWebView(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(browser.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(browser.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(browser.prototype, 'self', {
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
	Object.defineProperties(browser.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = browser;
