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


var NFCTagCommandConfiguration = require('/hyperloop/corenfc/nfctagcommandconfiguration');


/**
 * CoreNFC//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreNFC.framework/Headers/NFCISO15693Tag.h
 * @class
 */
function NFCISO15693ReadMultipleBlocksConfiguration (pointer) {
	if (!(this instanceof NFCISO15693ReadMultipleBlocksConfiguration)) {
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
			class: 'NFCISO15693ReadMultipleBlocksConfiguration',
			alloc: true,
			init: 'init'
		});
	}
	NFCTagCommandConfiguration.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
NFCISO15693ReadMultipleBlocksConfiguration.prototype = Object.create(NFCTagCommandConfiguration.prototype, {
	constructor: {
		value: NFCISO15693ReadMultipleBlocksConfiguration,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NFCISO15693ReadMultipleBlocksConfiguration, NFCTagCommandConfiguration);

Object.defineProperty(NFCISO15693ReadMultipleBlocksConfiguration, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NFCISO15693ReadMultipleBlocksConfiguration, 'className', {
	value: 'NFCISO15693ReadMultipleBlocksConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCISO15693ReadMultipleBlocksConfiguration.prototype, 'className', {
	value: 'NFCISO15693ReadMultipleBlocksConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(NFCISO15693ReadMultipleBlocksConfiguration.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NFCISO15693ReadMultipleBlocksConfiguration, 'toString', {
	value: function () {
		return '[class NFCISO15693ReadMultipleBlocksConfiguration]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSRange = require('/hyperloop/foundation/nsrange');

	$class = Hyperloop.createProxy({
		class: 'NFCISO15693ReadMultipleBlocksConfiguration',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NFCISO15693ReadMultipleBlocksConfiguration, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NFCISO15693ReadMultipleBlocksConfiguration, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NFCISO15693ReadMultipleBlocksConfiguration.prototype, {
		chunkSize: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'chunkSize');
			},
		
			set: function (_chunkSize) {
				if (!$init) { $initialize(); }
				this.$private.chunkSize = _chunkSize;
				$dispatch(this.$native, 'setChunkSize:', _chunkSize);
			},
			enumerable: false
		},
		range: {
		
		
			set: function (_range) {
				if (!$init) { $initialize(); }
				this.$private.range = _range;
				$dispatch(this.$native, 'setRange:', _range);
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

module.exports = NFCISO15693ReadMultipleBlocksConfiguration;
