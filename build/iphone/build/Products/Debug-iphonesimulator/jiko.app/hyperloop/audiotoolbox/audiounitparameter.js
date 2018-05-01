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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUComponent.h
 * @class
 */
function AudioUnitParameter (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioUnitParameter)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioUnitParameter=^{OpaqueAudioComponentInstance=}III}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUComponent');
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


	AudioUnitParameter._imports = $imports;

	// properties
	Object.defineProperties(AudioUnitParameter.prototype, {
	
		mAudioUnit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mAudioUnit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mAudioUnit, 0]);
			},
			enumerable: false
		},
	
		mParameterID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mParameterID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mParameterID, 1]);
			},
			enumerable: false
		},
	
		mScope: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mScope) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mScope, 2]);
			},
			enumerable: false
		},
	
		mElement: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mElement) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mElement, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioUnitParameter;
