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
function AudioOutputUnitStartAtTimeParams (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioOutputUnitStartAtTimeParams)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$mTimestamp = {};
	if (pointer) {
		this.$mTimestamp.mSampleTime = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$mTimestamp.mHostTime = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$mTimestamp.mRateScalar = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$mTimestamp.mWordClockTime = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$mTimestamp.mSMPTETime = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$mTimestamp.mFlags = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$mTimestamp.mReserved = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioOutputUnitStartAtTimeParams={AudioTimeStamp=dQdQ{SMPTETime=ssIIIssss}II}I}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$mTimestamp, 'mSampleTime', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$mTimestamp, 'mHostTime', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$mTimestamp, 'mRateScalar', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$mTimestamp, 'mWordClockTime', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$mTimestamp, 'mSMPTETime', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$mTimestamp, 'mFlags', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$mTimestamp, 'mReserved', {
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

	AudioOutputUnitStartAtTimeParams._imports = $imports;

	// properties
	Object.defineProperties(AudioOutputUnitStartAtTimeParams.prototype, {
	
		mTimestamp: {
			get: function () {
				return this.$mTimestamp;
			},
		
			set: function (_mTimestamp) {
				this.$mTimestamp.mSampleTime = _mTimestamp.mSampleTime;
				this.$mTimestamp.mHostTime = _mTimestamp.mHostTime;
				this.$mTimestamp.mRateScalar = _mTimestamp.mRateScalar;
				this.$mTimestamp.mWordClockTime = _mTimestamp.mWordClockTime;
				this.$mTimestamp.mSMPTETime = _mTimestamp.mSMPTETime;
				this.$mTimestamp.mFlags = _mTimestamp.mFlags;
				this.$mTimestamp.mReserved = _mTimestamp.mReserved;
			},
			enumerable: false
		},
	
		mFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFlags, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioOutputUnitStartAtTimeParams;
