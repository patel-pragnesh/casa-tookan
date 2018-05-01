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


var HKDocumentSample = require('/hyperloop/healthkit/hkdocumentsample');


/**
 * HealthKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/HealthKit.framework/Headers/HKCDADocumentSample.h
 * @class
 */
function HKCDADocumentSample (pointer) {
	if (!(this instanceof HKCDADocumentSample)) {
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
			class: 'HKCDADocumentSample',
			alloc: true,
			init: 'init'
		});
	}
	HKDocumentSample.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
HKCDADocumentSample.prototype = Object.create(HKDocumentSample.prototype, {
	constructor: {
		value: HKCDADocumentSample,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(HKCDADocumentSample, HKDocumentSample);

Object.defineProperty(HKCDADocumentSample, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(HKCDADocumentSample, 'className', {
	value: 'HKCDADocumentSample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKCDADocumentSample.prototype, 'className', {
	value: 'HKCDADocumentSample',
	enumerable: false,
	writable: true
});

Object.defineProperty(HKCDADocumentSample.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(HKCDADocumentSample, 'toString', {
	value: function () {
		return '[class HKCDADocumentSample]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.HKCDADocument = require('/hyperloop/healthkit/hkcdadocument');

	$class = Hyperloop.createProxy({
		class: 'HKCDADocumentSample',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(HKCDADocumentSample, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(HKCDADocumentSample, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(HKCDADocumentSample.prototype, {
		document: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.HKCDADocument($dispatch(this.$native, 'document'));
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

module.exports = HKCDADocumentSample;
