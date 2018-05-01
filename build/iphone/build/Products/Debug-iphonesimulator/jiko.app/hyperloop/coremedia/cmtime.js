/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports;

/**
 * CoreMedia//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMTime.h
 * @class
 */
function CMTime (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMTime)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMTime=qiIq}', 'CoreMedia', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMTime');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	
}

function $initialize () {
	$imports = {};


	CMTime._imports = $imports;

	// properties
	Object.defineProperties(CMTime.prototype, {
	
		value: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_value) {
				$dispatch(this.$native, 'setValue:atIndex:', [_value, 0]);
			},
			enumerable: false
		},
	
		timescale: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_timescale) {
				$dispatch(this.$native, 'setValue:atIndex:', [_timescale, 1]);
			},
			enumerable: false
		},
	
		flags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_flags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_flags, 2]);
			},
			enumerable: false
		},
	
		epoch: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_epoch) {
				$dispatch(this.$native, 'setValue:atIndex:', [_epoch, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMTime;
