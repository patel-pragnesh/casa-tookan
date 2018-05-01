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
function AudioFileMarker (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioFileMarker)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$mSMPTETime = {};
	if (pointer) {
		this.$mSMPTETime.mHours = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$mSMPTETime.mMinutes = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$mSMPTETime.mSeconds = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$mSMPTETime.mFrames = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$mSMPTETime.mSubFrameSampleOffset = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioFileMarker=dr^{__CFString=}i{AudioFile_SMPTE_Time=cCCCI}ISS}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$mSMPTETime, 'mHours', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mMinutes', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mSeconds', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mFrames', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mSubFrameSampleOffset', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.AudioFile_SMPTE_Time = require('/hyperloop/audiotoolbox/audiofile_smpte_time');

	AudioFileMarker._imports = $imports;

	// properties
	Object.defineProperties(AudioFileMarker.prototype, {
	
		mFramePosition: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mFramePosition) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFramePosition, 0]);
			},
			enumerable: false
		},
	
		mName: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mName) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mName, 1]);
			},
			enumerable: false
		},
	
		mMarkerID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mMarkerID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMarkerID, 2]);
			},
			enumerable: false
		},
	
		mSMPTETime: {
			get: function () {
				return this.$mSMPTETime;
			},
		
			set: function (_mSMPTETime) {
				this.$mSMPTETime.mHours = _mSMPTETime.mHours;
				this.$mSMPTETime.mMinutes = _mSMPTETime.mMinutes;
				this.$mSMPTETime.mSeconds = _mSMPTETime.mSeconds;
				this.$mSMPTETime.mFrames = _mSMPTETime.mFrames;
				this.$mSMPTETime.mSubFrameSampleOffset = _mSMPTETime.mSubFrameSampleOffset;
			},
			enumerable: false
		},
	
		mType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mType, 4]);
			},
			enumerable: false
		},
	
		mReserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_mReserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mReserved, 5]);
			},
			enumerable: false
		},
	
		mChannel: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_mChannel) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannel, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioFileMarker;
