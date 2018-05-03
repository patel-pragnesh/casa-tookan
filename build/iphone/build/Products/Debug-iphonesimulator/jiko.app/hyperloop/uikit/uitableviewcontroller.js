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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UITableViewController.h
 * @class
 */
function UITableViewController (pointer) {
	if (!(this instanceof UITableViewController)) {
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
			class: 'UITableViewController',
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
UITableViewController.prototype = Object.create(UIViewController.prototype, {
	constructor: {
		value: UITableViewController,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UITableViewController, UIViewController);

Object.defineProperty(UITableViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UITableViewController, 'className', {
	value: 'UITableViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITableViewController.prototype, 'className', {
	value: 'UITableViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITableViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UITableViewController, 'toString', {
	value: function () {
		return '[class UITableViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIRefreshControl = require('/hyperloop/uikit/uirefreshcontrol');

	$class = Hyperloop.createProxy({
		class: 'UITableViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UITableViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UITableViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UITableViewController.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UITableViewController.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UITableViewController.prototype, 'self', {
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
	Object.defineProperties(UITableViewController.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		refreshControl: {
		
		
			set: function (_refreshControl) {
				if (!$init) { $initialize(); }
				this.$private.refreshControl = _refreshControl;
				$dispatch(this.$native, 'setRefreshControl:', _refreshControl);
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

module.exports = UITableViewController;
