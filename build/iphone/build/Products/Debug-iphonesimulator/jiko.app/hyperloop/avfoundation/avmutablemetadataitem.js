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


var AVMetadataItem = require('/hyperloop/avfoundation/avmetadataitem');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVMetadataItem.h
 * @class
 */
function AVMutableMetadataItem (pointer) {
	if (!(this instanceof AVMutableMetadataItem)) {
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
			class: 'AVMutableMetadataItem',
			alloc: true,
			init: 'init'
		});
	}
	AVMetadataItem.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVMutableMetadataItem.prototype = Object.create(AVMetadataItem.prototype, {
	constructor: {
		value: AVMutableMetadataItem,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVMutableMetadataItem, AVMetadataItem);

Object.defineProperty(AVMutableMetadataItem, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVMutableMetadataItem, 'className', {
	value: 'AVMutableMetadataItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMutableMetadataItem.prototype, 'className', {
	value: 'AVMutableMetadataItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMutableMetadataItem.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVMutableMetadataItem, 'toString', {
	value: function () {
		return '[class AVMutableMetadataItem]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CMTime = require('/hyperloop/coremedia/cmtime');
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'AVMutableMetadataItem',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVMutableMetadataItem, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVMutableMetadataItem, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVMutableMetadataItem.prototype, 'setValue', {
		value: function (_value) {
			this.$private.setValue = this.$private.setValue || [];
			this.$private.setValue.push(_value);
			var result = $dispatch(this.$native, 'setValue:', [_value], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(AVMutableMetadataItem.prototype, {
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CMTime($dispatch(this.$native, 'duration'));
			},
		
			set: function (_duration) {
				if (!$init) { $initialize(); }
				this.$private.duration = _duration;
				$dispatch(this.$native, 'setDuration:', _duration);
			},
			enumerable: false
		},
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		key: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'key'));
			},
		
			set: function (_key) {
				if (!$init) { $initialize(); }
				this.$private.key = _key;
				$dispatch(this.$native, 'setKey:', _key);
			},
			enumerable: false
		},
		time: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CMTime($dispatch(this.$native, 'time'));
			},
		
			enumerable: false
		},
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'value'));
			},
		
			set: function (_value) {
				if (!$init) { $initialize(); }
				this.$private.value = _value;
				$dispatch(this.$native, 'setValue:', _value);
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

module.exports = AVMutableMetadataItem;
