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
function SMPTETime (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SMPTETime)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SMPTETime=ssIIIssss}', 'CoreAudio', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes');
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


	SMPTETime._imports = $imports;

	// properties
	Object.defineProperties(SMPTETime.prototype, {
	
		mSubframes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mSubframes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSubframes, 0]);
			},
			enumerable: false
		},
	
		mSubframeDivisor: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mSubframeDivisor) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSubframeDivisor, 1]);
			},
			enumerable: false
		},
	
		mCounter: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mCounter) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mCounter, 2]);
			},
			enumerable: false
		},
	
		mType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mType, 3]);
			},
			enumerable: false
		},
	
		mFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFlags, 4]);
			},
			enumerable: false
		},
	
		mHours: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_mHours) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mHours, 5]);
			},
			enumerable: false
		},
	
		mMinutes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_mMinutes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMinutes, 6]);
			},
			enumerable: false
		},
	
		mSeconds: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_mSeconds) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSeconds, 7]);
			},
			enumerable: false
		},
	
		mFrames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_mFrames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFrames, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SMPTETime;
