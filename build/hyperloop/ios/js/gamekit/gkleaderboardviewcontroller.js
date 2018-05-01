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



/**
 * GameKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameKit.framework/Headers/GKLeaderboardViewController.h
 * @class
 */
function GKLeaderboardViewController (pointer) {
	if (!(this instanceof GKLeaderboardViewController)) {
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
			class: 'GKLeaderboardViewController',
			alloc: true,
			init: 'init'
		});
	}
	if (pointer.$native) {
		this.$native = pointer.$native;
	} else {
		this.$native = pointer;
	}
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}

Object.defineProperty(GKLeaderboardViewController, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKLeaderboardViewController, 'className', {
	value: 'GKLeaderboardViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKLeaderboardViewController.prototype, 'className', {
	value: 'GKLeaderboardViewController',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKLeaderboardViewController.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKLeaderboardViewController, 'toString', {
	value: function () {
		return '[class GKLeaderboardViewController]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'GKLeaderboardViewController',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKLeaderboardViewController, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKLeaderboardViewController, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GKLeaderboardViewController.prototype, {
		category: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'category'));
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

module.exports = GKLeaderboardViewController;