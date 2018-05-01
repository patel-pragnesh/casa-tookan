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


var AVVideoCompositionInstruction = require('/hyperloop/avfoundation/avvideocompositioninstruction');


/**
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVVideoComposition.h
 * @class
 */
function AVMutableVideoCompositionInstruction (pointer) {
	if (!(this instanceof AVMutableVideoCompositionInstruction)) {
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
			class: 'AVMutableVideoCompositionInstruction',
			alloc: true,
			init: 'init'
		});
	}
	AVVideoCompositionInstruction.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
AVMutableVideoCompositionInstruction.prototype = Object.create(AVVideoCompositionInstruction.prototype, {
	constructor: {
		value: AVMutableVideoCompositionInstruction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AVMutableVideoCompositionInstruction, AVVideoCompositionInstruction);

Object.defineProperty(AVMutableVideoCompositionInstruction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AVMutableVideoCompositionInstruction, 'className', {
	value: 'AVMutableVideoCompositionInstruction',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMutableVideoCompositionInstruction.prototype, 'className', {
	value: 'AVMutableVideoCompositionInstruction',
	enumerable: false,
	writable: true
});

Object.defineProperty(AVMutableVideoCompositionInstruction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AVMutableVideoCompositionInstruction, 'toString', {
	value: function () {
		return '[class AVMutableVideoCompositionInstruction]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'AVMutableVideoCompositionInstruction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AVMutableVideoCompositionInstruction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AVMutableVideoCompositionInstruction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AVMutableVideoCompositionInstruction.prototype, {
		backgroundColor: {
		
		
			set: function (_backgroundColor) {
				if (!$init) { $initialize(); }
				this.$private.backgroundColor = _backgroundColor;
				$dispatch(this.$native, 'setBackgroundColor:', _backgroundColor);
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

module.exports = AVMutableVideoCompositionInstruction;
