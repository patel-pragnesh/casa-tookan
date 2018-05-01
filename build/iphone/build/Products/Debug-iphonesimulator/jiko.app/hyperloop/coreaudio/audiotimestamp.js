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
 * CoreAudio//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes.h
 * @class
 */
function AudioTimeStamp (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioTimeStamp)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$mSMPTETime = {};
	if (pointer) {
		this.$mSMPTETime.mSubframes = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$mSMPTETime.mSubframeDivisor = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$mSMPTETime.mCounter = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$mSMPTETime.mType = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$mSMPTETime.mFlags = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$mSMPTETime.mHours = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$mSMPTETime.mMinutes = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$mSMPTETime.mSeconds = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	if (pointer) {
		this.$mSMPTETime.mFrames = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioTimeStamp=dQdQ{SMPTETime=ssIIIssss}II}', 'CoreAudio', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$mSMPTETime, 'mSubframes', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mSubframeDivisor', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mCounter', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mType', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mFlags', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mHours', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mMinutes', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mSeconds', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$mSMPTETime, 'mFrames', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.SMPTETime = require('/hyperloop/coreaudio/smptetime');

	AudioTimeStamp._imports = $imports;

	// properties
	Object.defineProperties(AudioTimeStamp.prototype, {
	
		mSampleTime: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mSampleTime) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSampleTime, 0]);
			},
			enumerable: false
		},
	
		mHostTime: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mHostTime) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mHostTime, 1]);
			},
			enumerable: false
		},
	
		mRateScalar: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mRateScalar) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mRateScalar, 2]);
			},
			enumerable: false
		},
	
		mWordClockTime: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mWordClockTime) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mWordClockTime, 3]);
			},
			enumerable: false
		},
	
		mSMPTETime: {
			get: function () {
				return this.$mSMPTETime;
			},
		
			set: function (_mSMPTETime) {
				this.$mSMPTETime.mSubframes = _mSMPTETime.mSubframes;
				this.$mSMPTETime.mSubframeDivisor = _mSMPTETime.mSubframeDivisor;
				this.$mSMPTETime.mCounter = _mSMPTETime.mCounter;
				this.$mSMPTETime.mType = _mSMPTETime.mType;
				this.$mSMPTETime.mFlags = _mSMPTETime.mFlags;
				this.$mSMPTETime.mHours = _mSMPTETime.mHours;
				this.$mSMPTETime.mMinutes = _mSMPTETime.mMinutes;
				this.$mSMPTETime.mSeconds = _mSMPTETime.mSeconds;
				this.$mSMPTETime.mFrames = _mSMPTETime.mFrames;
			},
			enumerable: false
		},
	
		mFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_mFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFlags, 5]);
			},
			enumerable: false
		},
	
		mReserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_mReserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mReserved, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioTimeStamp;
