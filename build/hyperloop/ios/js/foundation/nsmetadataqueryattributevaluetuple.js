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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSMetadata.h
 * @class
 */
function NSMetadataQueryAttributeValueTuple (pointer) {
	if (!(this instanceof NSMetadataQueryAttributeValueTuple)) {
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
			class: 'NSMetadataQueryAttributeValueTuple',
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
NSMetadataQueryAttributeValueTuple.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NSMetadataQueryAttributeValueTuple,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NSMetadataQueryAttributeValueTuple, NSObject);

Object.defineProperty(NSMetadataQueryAttributeValueTuple, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NSMetadataQueryAttributeValueTuple, 'className', {
	value: 'NSMetadataQueryAttributeValueTuple',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSMetadataQueryAttributeValueTuple.prototype, 'className', {
	value: 'NSMetadataQueryAttributeValueTuple',
	enumerable: false,
	writable: true
});

Object.defineProperty(NSMetadataQueryAttributeValueTuple.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NSMetadataQueryAttributeValueTuple, 'toString', {
	value: function () {
		return '[class NSMetadataQueryAttributeValueTuple]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'NSMetadataQueryAttributeValueTuple',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NSMetadataQueryAttributeValueTuple, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NSMetadataQueryAttributeValueTuple, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NSMetadataQueryAttributeValueTuple.prototype, {
		count: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'count');
			},
		
			enumerable: false
		},
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'value'));
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

module.exports = NSMetadataQueryAttributeValueTuple;