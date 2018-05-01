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


var UIView = require('/hyperloop/uikit/uiview');


/**
 * CoreAudioKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudioKit.framework/Headers/CAInterAppAudioTransportView.h
 * @class
 */
function CAInterAppAudioTransportView (pointer) {
	if (!(this instanceof CAInterAppAudioTransportView)) {
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
			class: 'CAInterAppAudioTransportView',
			alloc: true,
			init: 'init'
		});
	}
	UIView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
CAInterAppAudioTransportView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: CAInterAppAudioTransportView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CAInterAppAudioTransportView, UIView);

Object.defineProperty(CAInterAppAudioTransportView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CAInterAppAudioTransportView, 'className', {
	value: 'CAInterAppAudioTransportView',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAInterAppAudioTransportView.prototype, 'className', {
	value: 'CAInterAppAudioTransportView',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAInterAppAudioTransportView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CAInterAppAudioTransportView, 'toString', {
	value: function () {
		return '[class CAInterAppAudioTransportView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'CAInterAppAudioTransportView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CAInterAppAudioTransportView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CAInterAppAudioTransportView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CAInterAppAudioTransportView.prototype, {
		enabled: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'enabled');
			},
		
			set: function (_enabled) {
				if (!$init) { $initialize(); }
				this.$private.enabled = _enabled;
				$dispatch(this.$native, 'setEnabled:', _enabled);
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

module.exports = CAInterAppAudioTransportView;
