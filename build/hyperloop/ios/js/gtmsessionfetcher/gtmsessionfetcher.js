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
 * GTMSessionFetcher//Users/a/Documents/Appcelerator_Studio_Workspace/tookan/modules/iphone/firebase.core/1.0.0/platform/GTMSessionFetcher.framework/Headers/GTMSessionFetcher.h
 * @class
 */
function GTMSessionFetcher (pointer) {
	if (!(this instanceof GTMSessionFetcher)) {
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
			class: 'GTMSessionFetcher',
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
GTMSessionFetcher.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GTMSessionFetcher,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GTMSessionFetcher, NSObject);

Object.defineProperty(GTMSessionFetcher, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GTMSessionFetcher, 'className', {
	value: 'GTMSessionFetcher',
	enumerable: false,
	writable: true
});

Object.defineProperty(GTMSessionFetcher.prototype, 'className', {
	value: 'GTMSessionFetcher',
	enumerable: false,
	writable: true
});

Object.defineProperty(GTMSessionFetcher.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GTMSessionFetcher, 'toString', {
	value: function () {
		return '[class GTMSessionFetcher]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSURLRequest = require('/hyperloop/foundation/nsurlrequest');
	$imports.NSURLResponse = require('/hyperloop/foundation/nsurlresponse');

	$class = Hyperloop.createProxy({
		class: 'GTMSessionFetcher',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GTMSessionFetcher, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GTMSessionFetcher, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GTMSessionFetcher.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(GTMSessionFetcher.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(GTMSessionFetcher.prototype, 'self', {
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
	Object.defineProperties(GTMSessionFetcher.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		log: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'log'));
			},
		
			set: function (_log) {
				if (!$init) { $initialize(); }
				this.$private.log = _log;
				$dispatch(this.$native, 'setLog:', _log);
			},
			enumerable: false
		},
		request: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLRequest($dispatch(this.$native, 'request'));
			},
		
			set: function (_request) {
				if (!$init) { $initialize(); }
				this.$private.request = _request;
				$dispatch(this.$native, 'setRequest:', _request);
			},
			enumerable: false
		},
		response: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURLResponse($dispatch(this.$native, 'response'));
			},
		
			enumerable: false
		},
		statusCode: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'statusCode');
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

module.exports = GTMSessionFetcher;



