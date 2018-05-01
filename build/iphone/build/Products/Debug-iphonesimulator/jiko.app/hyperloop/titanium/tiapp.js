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
 * Titanium/
 * @class
 */
function TiApp (pointer) {
	if (!(this instanceof TiApp)) {
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
			class: 'TiApp',
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

Object.defineProperty(TiApp, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(TiApp, 'className', {
	value: 'TiApp',
	enumerable: false,
	writable: true
});

Object.defineProperty(TiApp.prototype, 'className', {
	value: 'TiApp',
	enumerable: false,
	writable: true
});

Object.defineProperty(TiApp.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(TiApp, 'toString', {
	value: function () {
		return '[class TiApp]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(TiApp, 'app', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'app', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.UIWindow = require('/hyperloop/uikit/uiwindow');

	$class = Hyperloop.createProxy({
		class: 'TiApp',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(TiApp, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(TiApp, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(TiApp.prototype, {
		sessionId: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'sessionId'));
			},
		
			enumerable: false
		},
		window: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIWindow($dispatch(this.$native, 'window'));
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

module.exports = TiApp;
