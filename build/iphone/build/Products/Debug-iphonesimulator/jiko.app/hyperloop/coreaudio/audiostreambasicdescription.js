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
function AudioStreamBasicDescription (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioStreamBasicDescription)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioStreamBasicDescription=dIIIIIIII}', 'CoreAudio', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes');
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


	AudioStreamBasicDescription._imports = $imports;

	// properties
	Object.defineProperties(AudioStreamBasicDescription.prototype, {
	
		mSampleRate: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mSampleRate) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSampleRate, 0]);
			},
			enumerable: false
		},
	
		mFormatID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mFormatID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFormatID, 1]);
			},
			enumerable: false
		},
	
		mFormatFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mFormatFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFormatFlags, 2]);
			},
			enumerable: false
		},
	
		mBytesPerPacket: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mBytesPerPacket) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mBytesPerPacket, 3]);
			},
			enumerable: false
		},
	
		mFramesPerPacket: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mFramesPerPacket) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFramesPerPacket, 4]);
			},
			enumerable: false
		},
	
		mBytesPerFrame: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_mBytesPerFrame) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mBytesPerFrame, 5]);
			},
			enumerable: false
		},
	
		mChannelsPerFrame: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_mChannelsPerFrame) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannelsPerFrame, 6]);
			},
			enumerable: false
		},
	
		mBitsPerChannel: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_mBitsPerChannel) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mBitsPerChannel, 7]);
			},
			enumerable: false
		},
	
		mReserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_mReserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mReserved, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioStreamBasicDescription;
