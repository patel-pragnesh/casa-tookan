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
function ScheduledAudioFileRegion (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof ScheduledAudioFileRegion)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$mTimeStamp = {};
	if (pointer) {
		this.$mTimeStamp.mSampleTime = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$mTimeStamp.mHostTime = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$mTimeStamp.mRateScalar = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$mTimeStamp.mWordClockTime = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$mTimeStamp.mSMPTETime = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$mTimeStamp.mFlags = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$mTimeStamp.mReserved = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{ScheduledAudioFileRegion={AudioTimeStamp=dQdQ{SMPTETime=ssIIIssss}II}^?^v^{OpaqueAudioFileID=}IqI}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$mTimeStamp, 'mSampleTime', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$mTimeStamp, 'mHostTime', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$mTimeStamp, 'mRateScalar', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$mTimeStamp, 'mWordClockTime', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$mTimeStamp, 'mSMPTETime', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$mTimeStamp, 'mFlags', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$mTimeStamp, 'mReserved', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.AudioTimeStamp = require('/hyperloop/coreaudio/audiotimestamp');

	ScheduledAudioFileRegion._imports = $imports;

	// properties
	Object.defineProperties(ScheduledAudioFileRegion.prototype, {
	
		mTimeStamp: {
			get: function () {
				return this.$mTimeStamp;
			},
		
			set: function (_mTimeStamp) {
				this.$mTimeStamp.mSampleTime = _mTimeStamp.mSampleTime;
				this.$mTimeStamp.mHostTime = _mTimeStamp.mHostTime;
				this.$mTimeStamp.mRateScalar = _mTimeStamp.mRateScalar;
				this.$mTimeStamp.mWordClockTime = _mTimeStamp.mWordClockTime;
				this.$mTimeStamp.mSMPTETime = _mTimeStamp.mSMPTETime;
				this.$mTimeStamp.mFlags = _mTimeStamp.mFlags;
				this.$mTimeStamp.mReserved = _mTimeStamp.mReserved;
			},
			enumerable: false
		},
	
		mCompletionProc: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mCompletionProc) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mCompletionProc, 1]);
			},
			enumerable: false
		},
	
		mCompletionProcUserData: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mCompletionProcUserData) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mCompletionProcUserData, 2]);
			},
			enumerable: false
		},
	
		mAudioFile: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mAudioFile) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mAudioFile, 3]);
			},
			enumerable: false
		},
	
		mLoopCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mLoopCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mLoopCount, 4]);
			},
			enumerable: false
		},
	
		mStartFrame: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_mStartFrame) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mStartFrame, 5]);
			},
			enumerable: false
		},
	
		mFramesToPlay: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_mFramesToPlay) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFramesToPlay, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = ScheduledAudioFileRegion;
