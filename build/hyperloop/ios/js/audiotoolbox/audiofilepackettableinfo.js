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
function AudioFilePacketTableInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioFilePacketTableInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioFilePacketTableInfo=qii}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile');
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


	AudioFilePacketTableInfo._imports = $imports;

	// properties
	Object.defineProperties(AudioFilePacketTableInfo.prototype, {
	
		mNumberValidFrames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mNumberValidFrames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mNumberValidFrames, 0]);
			},
			enumerable: false
		},
	
		mPrimingFrames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mPrimingFrames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPrimingFrames, 1]);
			},
			enumerable: false
		},
	
		mRemainderFrames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mRemainderFrames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mRemainderFrames, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioFilePacketTableInfo;
