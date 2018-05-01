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
function MixerDistanceParams (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MixerDistanceParams)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MixerDistanceParams=fff}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
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


	MixerDistanceParams._imports = $imports;

	// properties
	Object.defineProperties(MixerDistanceParams.prototype, {
	
		mReferenceDistance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mReferenceDistance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mReferenceDistance, 0]);
			},
			enumerable: false
		},
	
		mMaxDistance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mMaxDistance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMaxDistance, 1]);
			},
			enumerable: false
		},
	
		mMaxAttenuation: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mMaxAttenuation) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMaxAttenuation, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MixerDistanceParams;
