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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCaptureDevice.h
 * @class
 */
function AVCaptureWhiteBalanceGains (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AVCaptureWhiteBalanceGains)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AVCaptureWhiteBalanceGains=fff}', 'AVFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCaptureDevice');
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


	AVCaptureWhiteBalanceGains._imports = $imports;

	// properties
	Object.defineProperties(AVCaptureWhiteBalanceGains.prototype, {
	
		redGain: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_redGain) {
				$dispatch(this.$native, 'setValue:atIndex:', [_redGain, 0]);
			},
			enumerable: false
		},
	
		greenGain: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_greenGain) {
				$dispatch(this.$native, 'setValue:atIndex:', [_greenGain, 1]);
			},
			enumerable: false
		},
	
		blueGain: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_blueGain) {
				$dispatch(this.$native, 'setValue:atIndex:', [_blueGain, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AVCaptureWhiteBalanceGains;
