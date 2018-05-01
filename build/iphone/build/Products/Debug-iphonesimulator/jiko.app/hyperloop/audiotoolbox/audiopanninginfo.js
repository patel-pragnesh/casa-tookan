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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFormat.h
 * @class
 */
function AudioPanningInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioPanningInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioPanningInfo=II[3f]fr^{AudioChannelLayout=III[1{AudioChannelDescription=II[3f]}]}}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFormat');
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


	AudioPanningInfo._imports = $imports;

	// properties
	Object.defineProperties(AudioPanningInfo.prototype, {
	
		mPanningMode: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mPanningMode) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPanningMode, 0]);
			},
			enumerable: false
		},
	
		mCoordinateFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mCoordinateFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mCoordinateFlags, 1]);
			},
			enumerable: false
		},
	
		mCoordinates: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mCoordinates) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mCoordinates, 2]);
			},
			enumerable: false
		},
	
		mGainScale: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mGainScale) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mGainScale, 3]);
			},
			enumerable: false
		},
	
		mOutputChannelMap: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mOutputChannelMap) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mOutputChannelMap, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioPanningInfo;
