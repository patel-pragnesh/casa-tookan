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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVPlayerItem.h
 * @class
 */
function AVPlayerItem (pointer) {
	if (!(this instanceof AVPlayerItem)) {
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
			class: 'AVPlayerItem',
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
AVPlayerItem.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AVPlayerItem,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVPlayerItem, NSObject);

Object.defineProperty(AVPlayerItem, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVPlayerItem, 'className', {
	value: 'AVPlayerItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerItem.prototype, 'className', {
	value: 'AVPlayerItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVPlayerItem.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVPlayerItem, 'toString', {
	value: function () {
		return '[class AVPlayerItem]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.AVAsset = require('/hyperloop/avfoundation/avasset');
	$imports.CMTime = require('/hyperloop/coremedia/cmtime');
	$imports.NSError = require('/hyperloop/foundation/nserror');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'AVPlayerItem',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVPlayerItem, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVPlayerItem, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(AVPlayerItem.prototype, 'addOutput', {
		value: function (_output) {
			this.$private.addOutput = this.$private.addOutput || [];
			this.$private.addOutput.push(_output);
			var result = $dispatch(this.$native, 'addOutput:', [_output], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(AVPlayerItem.prototype, 'init', {
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

	Object.defineProperty(AVPlayerItem.prototype, 'initWithURL', {
		value: function (_URL) {
			var result = $dispatch(this.$native, 'initWithURL:', [_URL], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithURL = instance.$private.initWithURL || [];
			instance.$private.initWithURL.push(_URL);
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(AVPlayerItem.prototype, {
		asset: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.AVAsset($dispatch(this.$native, 'asset'));
			},
		
			enumerable: false
		},
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CMTime($dispatch(this.$native, 'duration'));
			},
		
			enumerable: false
		},
		error: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSError($dispatch(this.$native, 'error'));
			},
		
			enumerable: false
		},
		outputs: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'outputs'));
			},
		
			enumerable: false
		},
		status: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'status');
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

module.exports = AVPlayerItem;
