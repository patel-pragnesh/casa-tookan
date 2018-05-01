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
function AVCaptureWhiteBalanceTemperatureAndTintValues (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AVCaptureWhiteBalanceTemperatureAndTintValues)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AVCaptureWhiteBalanceTemperatureAndTintValues=ff}', 'AVFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Headers/AVCaptureDevice');
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


	AVCaptureWhiteBalanceTemperatureAndTintValues._imports = $imports;

	// properties
	Object.defineProperties(AVCaptureWhiteBalanceTemperatureAndTintValues.prototype, {
	
		temperature: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_temperature) {
				$dispatch(this.$native, 'setValue:atIndex:', [_temperature, 0]);
			},
			enumerable: false
		},
	
		tint: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_tint) {
				$dispatch(this.$native, 'setValue:atIndex:', [_tint, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AVCaptureWhiteBalanceTemperatureAndTintValues;
