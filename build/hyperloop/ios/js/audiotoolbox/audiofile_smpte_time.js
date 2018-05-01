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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile.h
 * @class
 */
function AudioFile_SMPTE_Time (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioFile_SMPTE_Time)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioFile_SMPTE_Time=cCCCI}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile');
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


	AudioFile_SMPTE_Time._imports = $imports;

	// properties
	Object.defineProperties(AudioFile_SMPTE_Time.prototype, {
	
		mHours: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mHours) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mHours, 0]);
			},
			enumerable: false
		},
	
		mMinutes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mMinutes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMinutes, 1]);
			},
			enumerable: false
		},
	
		mSeconds: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mSeconds) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSeconds, 2]);
			},
			enumerable: false
		},
	
		mFrames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mFrames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFrames, 3]);
			},
			enumerable: false
		},
	
		mSubFrameSampleOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mSubFrameSampleOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSubFrameSampleOffset, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioFile_SMPTE_Time;
