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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLAssetResolver.h
 * @class
 */
function MDLRelativeAssetResolver (pointer) {
	if (!(this instanceof MDLRelativeAssetResolver)) {
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
			class: 'MDLRelativeAssetResolver',
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
MDLRelativeAssetResolver.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MDLRelativeAssetResolver,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLRelativeAssetResolver, NSObject);

Object.defineProperty(MDLRelativeAssetResolver, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLRelativeAssetResolver, 'className', {
	value: 'MDLRelativeAssetResolver',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLRelativeAssetResolver.prototype, 'className', {
	value: 'MDLRelativeAssetResolver',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLRelativeAssetResolver.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLRelativeAssetResolver, 'toString', {
	value: function () {
		return '[class MDLRelativeAssetResolver]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.MDLAsset = require('/hyperloop/modelio/mdlasset');

	$class = Hyperloop.createProxy({
		class: 'MDLRelativeAssetResolver',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLRelativeAssetResolver, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLRelativeAssetResolver, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MDLRelativeAssetResolver.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MDLRelativeAssetResolver.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MDLRelativeAssetResolver.prototype, 'self', {
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
	Object.defineProperties(MDLRelativeAssetResolver.prototype, {
		asset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.MDLAsset($dispatch(this.$native, 'asset'));
			},
		
			set: function (_asset) {
				if (!$init) { $initialize(); }
				this.$private.asset = _asset;
				$dispatch(this.$native, 'setAsset:', _asset);
			},
			enumerable: false
		},
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

module.exports = MDLRelativeAssetResolver;
