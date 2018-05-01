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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSURL.h
 * @class
 */
function NSURLComponents (pointer) {
	if (!(this instanceof NSURLComponents)) {
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
			class: 'NSURLComponents',
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
NSURLComponents.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSURLComponents,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSURLComponents, NSObject);

Object.defineProperty(NSURLComponents, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSURLComponents, 'className', {
	value: 'NSURLComponents',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSURLComponents.prototype, 'className', {
	value: 'NSURLComponents',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSURLComponents.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSURLComponents, 'toString', {
	value: function () {
		return '[class NSURLComponents]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSNumber = require('/hyperloop/foundation/nsnumber');

	$class = Hyperloop.createProxy({
		class: 'NSURLComponents',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSURLComponents, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSURLComponents, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(NSURLComponents.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(NSURLComponents.prototype, 'initWithString', {
		value: function (_URLString) {
			var result = $dispatch(this.$native, 'initWithString:', [_URLString], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithString = instance.$private.initWithString || [];
			instance.$private.initWithString.push(_URLString);
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(NSURLComponents.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		},
		fragment: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'fragment'));
			},
		
			set: function (_fragment) {
				if (!$init) { $initialize(); }
				this.$private.fragment = _fragment;
				$dispatch(this.$native, 'setFragment:', _fragment);
			},
			enumerable: false
		},
		host: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'host'));
			},
		
			set: function (_host) {
				if (!$init) { $initialize(); }
				this.$private.host = _host;
				$dispatch(this.$native, 'setHost:', _host);
			},
			enumerable: false
		},
		password: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'password'));
			},
		
			enumerable: false
		},
		path: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'path'));
			},
		
			set: function (_path) {
				if (!$init) { $initialize(); }
				this.$private.path = _path;
				$dispatch(this.$native, 'setPath:', _path);
			},
			enumerable: false
		},
		port: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSNumber($dispatch(this.$native, 'port'));
			},
		
			set: function (_port) {
				if (!$init) { $initialize(); }
				this.$private.port = _port;
				$dispatch(this.$native, 'setPort:', _port);
			},
			enumerable: false
		},
		query: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'query'));
			},
		
			set: function (_query) {
				if (!$init) { $initialize(); }
				this.$private.query = _query;
				$dispatch(this.$native, 'setQuery:', _query);
			},
			enumerable: false
		},
		user: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'user'));
			},
		
			set: function (_user) {
				if (!$init) { $initialize(); }
				this.$private.user = _user;
				$dispatch(this.$native, 'setUser:', _user);
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

module.exports = NSURLComponents;
