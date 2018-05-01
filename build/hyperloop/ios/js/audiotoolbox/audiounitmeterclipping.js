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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties.h
 * @class
 */
function AudioUnitMeterClipping (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioUnitMeterClipping)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioUnitMeterClipping=fCC}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
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


	AudioUnitMeterClipping._imports = $imports;

	// properties
	Object.defineProperties(AudioUnitMeterClipping.prototype, {
	
		peakValueSinceLastCall: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_peakValueSinceLastCall) {
				$dispatch(this.$native, 'setValue:atIndex:', [_peakValueSinceLastCall, 0]);
			},
			enumerable: false
		},
	
		sawInfinity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_sawInfinity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sawInfinity, 1]);
			},
			enumerable: false
		},
	
		sawNotANumber: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_sawNotANumber) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sawNotANumber, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioUnitMeterClipping;
